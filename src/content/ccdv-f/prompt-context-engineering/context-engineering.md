## The model only sees what you put in the window

A language model has no memory of your repository, your last conversation, or the style guide you discussed yesterday. When it generates a reply, its entire world is the **context window** for that one request. Everything else does not exist for it.

**Context engineering** is the practice of deciding what enters that window, in what form, and in what order. Prompt engineering shapes the instruction; context engineering shapes the evidence around it. The exam gives this sub-skill about **3.8%**, usually as a scenario: a prototype that was impressive at ten messages and useless at a hundred.

## Start here: the five layers

| Layer | What it holds | Typical failure |
| --- | --- | --- |
| Tool definitions | names, descriptions, JSON schemas | too many overlapping tools; wrong tool chosen |
| System prompt | role, rules, output contract | rules buried in prose, contradicted later |
| Documents | retrieved passages, files, search results | whole corpus stuffed in "just in case" |
| History | prior turns and tool results | stale plans and failed attempts repeated |
| Current turn | the actual question | question lost in a wall of text |

The layers compete for one budget. A 200,000-token window is a ceiling for input *plus* output, not a target. A request with 150,000 tokens of history, 20,000 of documents and 4,000 reserved for the answer technically fits and still performs badly.

<learning-block type="concept" title="Context is a budget, not a warehouse">

More context is not automatically better. Extra tokens dilute attention, add latency, cost money, and can introduce contradictions. The engineering question is not "what might be relevant?" but "what is the smallest set of tokens that lets the model answer correctly?" — then retrieve more only when the first attempt shows a gap.

</learning-block>

## Order: documents first, question last

Anthropic's long-context guidance is blunt: put long documents near the top and the query at the end. In its own tests, moving the query after a large multi-document input improved quality by up to 30%. The effect has two names: **lost in the middle** (material in the centre of a long context is recalled least reliably) and **context rot** (accuracy falls as the window fills, even when the extra text is irrelevant).

A reliable order for a document question:

1. system prompt and output contract;
2. tool definitions, if any;
3. long documents, each in its own tag with a source id;
4. a short reminder of the most important constraints;
5. the user's question, last.

Repeating a critical rule at the end is not redundancy; it is placement. Instructions stated once at the top of a 60,000-token prompt are the ones most often "forgotten".

## Keep the prefix stable for caching

Prompt caching reuses the processed prefix of a request. It hits only when the prefix is byte-for-byte identical, and the order is tools, then system prompt, then messages. So put stable material first and volatile material last.

A greeting such as "Good morning, Priya — it is 09:41 on Tuesday" at the top of the system prompt invalidates the cache every minute. Move it to the final user turn. Mark the end of the cached prefix with `cache_control`; check the current docs for breakpoint limits and minimum cacheable length, which are version-sensitive.

## Summarise, compact, remember

- **Summarisation** replaces older turns with a shorter record.
- **Compaction** applies the same idea near the window limit: keep recent turns verbatim, summarise the rest, continue.
- **Memory** is storage outside the window — a file, a database, a memory tool. Memory is not automatically visible; it must be retrieved into context like any document.

Both summarisation and compaction are lossy. They keep the narrative and drop the exact identifier, the error code, the user's "actually, use euros". After compacting, re-inject constraints that must survive, and keep exact values (ids, paths, numbers) in a structured note rather than in prose.

<learning-block type="mistake" title="Assuming memory means presence">

A memory directory on disk does nothing for the model until something reads it into the request. Agents usually keep a short index in context and load a memory file with a tool when it looks relevant. If a fact must never be missed, it belongs in the system prompt; if it is merely useful, retrieve it just in time.

</learning-block>

## Just-in-time retrieval

Stuffing every document into the prompt is the expensive default. **Just-in-time retrieval** gives the model lightweight identifiers — file paths, table names, document ids, search queries — and lets it fetch what it needs with a tool.

| Strategy | Strength | Cost |
| --- | --- | --- |
| Pre-load everything | one round trip, simple | large prompt, dilution, staleness |
| Retrieve top-k per turn | focused, cheap | may miss the document that mattered |
| Just-in-time tools | model chooses; scales to large corpora | extra turns, latency, needs good tool descriptions |

The trade-off is turns against tokens. For one question over five short pages, pre-load. For a repository, pre-loading is impossible and identifiers plus tools are the only honest option.

## Worked example: a lean, cacheable request

```python
import anthropic

client = anthropic.Anthropic()

SYSTEM = """You are a contract analyst. Answer only from the supplied documents.
Cite the document id and clause for every claim. If the documents do not
answer the question, say so and name what is missing."""

def ask(question: str, documents: list[dict]) -> str:
    doc_blocks = [
        {
            "type": "document",
            "source": {"type": "text", "media_type": "text/plain", "data": d["text"]},
            "title": d["id"],
            "citations": {"enabled": True},
        }
        for d in documents
    ]
    response = client.messages.create(
        model=MODEL_ID,
        max_tokens=1200,
        system=[{
            "type": "text",
            "text": SYSTEM,
            "cache_control": {"type": "ephemeral"},  # stable prefix ends here
        }],
        messages=[{
            "role": "user",
            "content": [*doc_blocks, {"type": "text", "text": question}],
        }],
    )
    return "".join(b.text for b in response.content if b.type == "text")
```

Three decisions carry the design: the system prompt is identical on every call so the cache can hit, documents precede the question, and nothing volatile sits in the cached prefix. The document blocks are the volatile part, so they stay after the breakpoint.

<learning-block type="check" title="On the exam">

- "More context improved nothing" → look for dilution, ordering, or contradictory documents before blaming the model.
- "The instruction was ignored" → check *where* it sits; move it to the end and make it explicit.
- "Cache hit rate collapsed" → look for a timestamp, user name, or reordered tool list in the prefix.
- "It forgot the plan after 40 turns" → compaction without re-injecting constraints.

</learning-block>

## Try it yourself

**A support assistant works well for ten messages, then starts contradicting earlier decisions and re-asking for details. The conversation is 90,000 tokens and the window is 200,000.**

Which single change gives the most reliable improvement, and why?

<details><summary>Reveal the explanation</summary>

Compact the history: summarise the resolved part, keep the last few turns verbatim, and write the decisions and identifiers (order number, chosen plan, constraints) into a short structured summary placed before the current question. The window is not full, so the failure is attention and contradiction, not hard truncation — raising `max_tokens` or adding more history would make it worse. A cache or a bigger model does not fix stale, duplicated context.

</details>

## Remember

- The context window is the model's entire world for that request; memory and files are invisible until retrieved.
- Budget input and output together, and reserve room for tool results and the answer.
- Put long documents first, the question last, and repeat constraints that must survive.
- Keep a stable prefix — tools, system prompt, examples — and place volatile values after the cache breakpoint.
- Summarise and compact deliberately, then re-inject exact ids and rules that cannot be lost.
- Prefer just-in-time retrieval over stuffing; identifiers plus tools scale better than a corpus in the prompt.
