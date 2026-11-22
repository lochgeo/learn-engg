## Your data does not speak JSON-RPC yet

A tool written into one agent is trapped there. MCP — the Model Context Protocol — exists so that one server exposing your ticketing system, files or database works in Claude Code, in a desktop client, and in a custom Agent SDK application without a rewrite.

This lesson is about building that server and understanding the contract around it. The exam treats MCP as an interface contract: who may call what, over which transport, after which handshake. It is a small sub-skill — 2.1% of CCDV-F — but its vocabulary recurs in half the scenario questions in this domain.

## The big idea

The model never talks to your server. The **host** (the application the user runs) owns the model and the conversation, creates one **client** per server, and decides which of the server's capabilities the model may actually use. The **server** answers requests and declares what it can do.

## Start here

| Role | Responsibility | Examples |
| --- | --- | --- |
| Host | Runs the model and UI, enforces consent, chooses servers | Claude Code, a desktop client, your Agent SDK app |
| Client | One connector per server, keeps the 1:1 session state | The protocol object inside the host |
| Server | Exposes tools, resources and prompts; enforces its own scoping | A ticketing server, a filesystem server |

### JSON-RPC 2.0

With the roles in place, the messages themselves are plain JSON-RPC 2.0.

Every message is a request (has `id`, expects a response), a notification (no `id`, never answered), or a response carrying either `result` or `error`. Errors carry a numeric `code`, a `message` and optional `data`; reserved codes cover method-not-found and invalid params. MCP defines methods and payloads; the envelope is stock JSON-RPC 2.0.

### Two transports

Two transports cover almost every deployment.

| Transport | Where it runs | Mechanics |
| --- | --- | --- |
| stdio | Local process launched by the host | Newline-delimited JSON on stdin/stdout; logs go to stderr because stdout *is* the wire |
| Streamable HTTP | Remote service | HTTP POST for client messages, with server messages streamed back; sessions and auth live at the HTTP layer |

### Three primitives

MCP exposes three primitives, and who controls each differs.

| Primitive | Controlled by | What it is |
| --- | --- | --- |
| Tools | The model | Actions the model may invoke, with JSON Schema inputs |
| Resources | The application | Readable context addressed by URI and attached by the host |
| Prompts | The user | Named templates surfaced as explicit commands |

Clients also have capabilities of their own — sampling, roots, elicitation — which a server may request but never assume.

### Authentication and scoping

Remote servers need a real authorisation story; local ones need a smaller one.

- **Remote:** the host brokers an OAuth-style flow and holds the access token for that server. The token is scoped to the server's job, not to everything the user can reach.
- **Local:** a stdio server runs as the user, so it inherits their file permissions. That is a floor, not a permission model — still validate paths and arguments.
- **Per call:** authorise each operation against the caller's scope. Connecting successfully must not imply access to every resource.
- **Never forward the token** to an upstream API as if it were yours; that is the confused-deputy failure.

### Lifecycle and capabilities

```text
initialize (protocolVersion, capabilities, clientInfo)
  → result: protocolVersion, capabilities, serverInfo
notifications/initialized
  ... normal operation ...
close
```

Neither side may use a capability the other did not declare. Version negotiation is the client's proposal and the server's answer: if the server cannot speak the proposed version it replies with one it supports, and the client disconnects if it cannot accept that.

## Worked example

A host asks a local server what tools exist, then calls one. Over stdio each message is a single line; the newline is the only framing.

```json
{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"CHECK-CURRENT-DOCS","capabilities":{},"clientInfo":{"name":"study-host","version":"1.0.0"}}}
{"jsonrpc":"2.0","id":1,"result":{"protocolVersion":"CHECK-CURRENT-DOCS","capabilities":{"tools":{"listChanged":true}},"serverInfo":{"name":"orders","version":"0.4.1"}}}
{"jsonrpc":"2.0","method":"notifications/initialized"}
{"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}
{"jsonrpc":"2.0","id":2,"result":{"tools":[{"name":"get_order_status","description":"Look up one order","inputSchema":{"type":"object","properties":{"order_id":{"type":"string"}},"required":["order_id"]}}]}}
{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"get_order_status","arguments":{"order_id":"ORD-004512"}}}
{"jsonrpc":"2.0","id":3,"result":{"content":[{"type":"text","text":"in transit, expected 2026-11-18"}],"isError":false}}
```

The result's `isError` flag is the protocol's echo of the `is_error` you met in tool implementation. Watch the casing: `inputSchema`, `isError` and `tools/call` are protocol names, not Anthropic API names.

<learning-block type="example" title="A protocol error, not a tool error">

```json
{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"get_order_status","arguments":{}}}
{"jsonrpc":"2.0","id":4,"error":{"code":-32602,"message":"Invalid params: order_id is required","data":{"received":{}}}}
```

Bad arguments are a JSON-RPC error at this layer. A tool that ran and found no such order is a *successful* call whose result reports the failure in its content and `isError` flag. Confusing the two makes the host discard the explanation.

</learning-block>

## Security boundaries

A server that works is not yet a safe server.

- **Scope tokens to the server's job.** A ticketing server gets ticket scopes, not a tenant-wide admin token.
- **Never pass the client's token upstream.** Forwarding it makes your server a confused deputy acting with borrowed authority.
- **Treat everything a server returns as untrusted input.** A resource can carry injected instructions; the host must not promote it to system-level trust.
- **Confine paths and commands.** Validate, resolve, and stay inside an allow-listed root.
- **Consent is per server and visible.** The user should know which server was added and what it can reach.

## Testing it

Use **MCP Inspector** to drive the handshake by hand: list capabilities, call tools, read resources, and watch the raw messages. Then repeat with a **real client** in both transports, because a server that works over stdio can still fail on a remote HTTP session.

Exercise the boring cases — unknown method, invalid params, a tool that raises, cancellation, and a request sent before the handshake finishes.

## On the exam

<learning-block type="check" title="On the exam">

The highest-value distinctions: host versus client (the host owns the model and consent), stdout being reserved on stdio, capability negotiation gating every feature, and token passthrough as a security failure rather than a convenience. If an option says a server calls the model directly, it is wrong — a server can only *request* sampling through a client that declared support.

</learning-block>

## Try it yourself

**Your stdio server works from the command line, but the host disconnects immediately. What do you check first?**

<details><summary>Reveal the explanation</summary>

Look at what is written to stdout. Any banner, log line or debug print corrupts the newline-delimited JSON stream, so the client sees a malformed message and closes the session. Send logs to stderr. After that, confirm the first message is a valid `initialize` response with a protocol version the client accepts, and that nothing was printed before the handshake.

</details>

## Remember

- Host owns model, consent and policy; the client is the per-server connector; the server exposes capabilities.
- JSON-RPC 2.0: requests carry id and get one response; notifications carry no id and get none.
- stdio is local and newline-delimited; Streamable HTTP is remote and sessionful; on stdio, stdout is the wire and logs go to stderr.
- Tools are model-controlled, resources application-controlled, prompts user-controlled; sampling, roots and elicitation are client capabilities.
- Nothing is usable until `initialize` plus the `initialized` notification complete, and only declared capabilities may be used.
- Test with MCP Inspector and then a real client, in both transports.
