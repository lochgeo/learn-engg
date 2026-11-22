## The model never needs the key it is using

Most "AI security incidents" that are not prompt injection are identity incidents wearing a costume: a service account with admin rights behind a chatbot, a key pasted into a prompt "just for testing", a token in a log line that outlives the deploy. The model is not the weak point in any of these — the credential is.

This lesson is about who your application claims to be, which secret proves it, and how far that proof reaches. It is worth about **1.6%** of the exam, and the questions tend to be practical: where should this secret live, which identity should make this call, what do you do first when one leaks.

## The big idea

Separate three things that beginners collapse into one: **identity** (who is acting), **credential** (what proves it), and **authorisation** (what that identity may do). A secret is only ever a capability, and every capability has a scope and a lifetime. Security work is shrinking both.

Two rules carry most of the marks:

- **The model is never a credential holder.** It does not see API keys, database passwords or tokens. Your code holds them, uses them, and passes only the *result* back into the conversation.
- **Delegate the user, do not launder them.** When a user asks for their own data, the downstream call should carry the user's authority, so the database's own access rules still apply. If you must act as a service, you take on the duty of enforcing the user's permissions yourself.

## Start here

### User identity vs service identity

| | **User identity** | **Service identity** |
| --- | --- | --- |
| Represents | the human making the request | your application or agent runtime |
| Established by | login, SSO, OAuth authorisation code with PKCE | client credentials, workload identity, instance role |
| Typical lifetime | minutes to hours for an access token; session-bound | short-lived where possible; never indefinite |
| Scope | that user's permissions only | the narrowest set the service needs |
| Best for | anything that touches that user's data | background jobs, shared read-only resources |
| Main risk | token theft or over-broad consent | privilege creep and a shared blast radius |

A useful test: *if this call is wrong, whose data can it reach?* If the answer is "any tenant's", you have built a service identity where a user identity belonged.

### Credentials and how long they should live

| Credential | Scope and lifetime | Notes |
| --- | --- | --- |
| **API key** (static) | whatever it was issued for; often no expiry | Simple, dangerous: shared, long-lived, hard to attribute. Use only where nothing better exists, and rotate on a schedule |
| **OAuth access token** | scopes chosen at consent; short-lived | Preferred for user-delegated access; pair with a refresh token that is itself protected |
| **Client-credentials token** | service scopes; short-lived | App-to-app calls without a human present |
| **Short-lived cloud/STS credential** | one role, minutes to an hour | Issued per task or per request; the modern default |
| **Workload identity / federation** | bound to a workload's own identity | Removes long-lived CI keys entirely |
| **mTLS certificate** | service-to-service | Proves the caller is the service it claims to be |

Version-sensitive details — token lifetimes, endpoint names, SDK helpers — change; check the provider's current documentation rather than memorising numbers.

### Where secrets live

In descending order of preference:

1. **A secret manager** (Vault, AWS Secrets Manager, GCP Secret Manager, Azure Key Vault). Central access control, audit of reads, rotation support, no secret on disk.
2. **Environment variables injected at runtime** by the platform. Acceptable, provided they never reach a repository, a build log, or a child process you do not control.
3. **A config file** outside version control with tight permissions. Tolerable for local development only.
4. **Source code.** Never. A committed secret is compromised the moment it is pushed, even if you delete it in the next commit — history, forks and CI caches keep copies.

And three places a secret must never appear, which the exam likes to test:

- **In a prompt, system prompt, or tool description.** Context is echoed, logged and sometimes leaked verbatim.
- **In a log, trace, or error message.** Requests and responses get dumped; API keys travel in headers.
- **In model-visible tool output.** A tool that returns a connection string has just published it to the transcript.

<learning-block type="mistake" title="'It is only in the prompt, not the code'">

Putting a key in the system prompt feels safer than hard-coding it, because the prompt is "configuration". It is worse in one specific way: the prompt is sent to a third party, retained according to their policy, and reproduced in every transcript your users can influence. Anthropic's guidance is unambiguous — never put secrets in prompts — and the same applies to MCP server configuration and tool schemas. Inject secrets in your own process, at the point of use.

</learning-block>

## Worked example

### A per-tenant lookup that never hands the key to the model

The tool needs a database credential. It fetches it at call time, scoped to one tenant, and returns only rows.

```python
import os
import boto3

secrets_client = boto3.client("secretsmanager")  # any provider's SDK works the same way

def get_customer_orders(tenant_id: str, user: dict, order_id: str) -> list[dict]:
    # 1. Authorise the *user*, not the model, and never trust a tenant id from the model.
    if user["tenant_id"] != tenant_id:
        raise PermissionError("cross-tenant access denied")

    # 2. Short-lived, tenant-scoped credential, cached in memory with a TTL.
    secret = secrets_client.get_secret_value(
        SecretId=os.environ["ORDERS_SECRET_ARN"], VersionStage="AWSCURRENT"
    )
    conn = connect(secret["SecretString"], database=f"tenant_{tenant_id}", readonly=True)

    # 3. Parameterised query; the model's text is a value, never SQL.
    rows = conn.execute(
        "SELECT id, status, total FROM orders WHERE id = %s AND tenant_id = %s",
        (order_id, tenant_id),
    ).fetchall()

    audit.write(actor=user["id"], service="orders-tool", tenant=tenant_id, action="read")
    return rows  # no credential, no connection string, no other tenants
```

Four things are deliberately absent: the secret in the return value, the secret in the model's context, a model-supplied tenant id used unverified, and any write path. Each absence is a control.

### Rotation

- **Automate it.** Manual rotation is a task that gets deferred until an incident forces it.
- **Support two valid versions** during the overlap so rotation causes no outage; retire the old one once traffic has moved.
- **Rotate on events, not only on schedule**: staff departure, a repo made public, a CI log leak, a vendor breach, a suspicious read pattern.
- **Rotate credentials that might have been seen**, even if you cannot prove exposure. In an LLM system, "might have been seen" includes anything that was ever in a context window.

### Tenant isolation

Enforce it in code that the model cannot influence: filter every query by tenant, use row-level security where the store supports it, segregate caches and vector indexes by tenant, and reject mismatches loudly rather than silently returning empty results. Model-supplied identifiers are untrusted input.

### Audit trails and incident response

- Log **who acted** (user id and service identity separately), what they did, which tenant, from where, and the outcome — with a correlation id that ties the model turn to the downstream call.
- Keep audit records append-only and out of the application's own write path, so a compromised service cannot rewrite history.
- On suspected compromise: **revoke and rotate first**, then contain by narrowing scopes, then search the audit trail for use you cannot account for.
- Preserve transcripts and logs before cleaning up, and treat any credential that passed through a context window as exposed.

## On the exam

Distinguish *who is acting* from *what proves it*. A scenario where a shared admin key serves all customers is a tenant-isolation and least-privilege failure, not a prompt problem. A scenario where a token appears in a log calls for redaction plus rotation, in that order of urgency (rotate first, then fix the pipeline). Answers that store secrets "in the system prompt so the model can use them" are always wrong.

## Try it yourself

**A CI job needs to call your internal API to summarise pull requests. A colleague proposes a long-lived API key stored as a repository secret. Give a better design and one fallback.**

<details><summary>Reveal the explanation</summary>

Better: give the CI workload its own identity — workload identity federation or an OIDC token exchanged for a short-lived, narrowly scoped credential — so there is no stored secret at all and each run is attributable. Fallback, if the platform cannot federate: a secret manager read at job start with a short-lived token, scoped to read-only PR access for that repository, rotated automatically, and never echoed in logs. Storing a long-lived key in repository secrets is the weakest option because it is readable by anyone who can change a workflow and it survives indefinitely.

</details>

## Remember

- Identity, credential and authorisation are three separate decisions; conflate them and you get a breach.
- Prefer user-delegated, scoped, short-lived credentials; reserve service identity for work with no user.
- Secrets belong in a secret manager, injected at the point of use — never in code, prompts, tool output, or logs.
- The model receives results, not credentials.
- Enforce tenant isolation in code; treat every model-supplied identifier as untrusted.
- Rotate on a schedule and on suspicion, and treat "was in a prompt" as exposure.
