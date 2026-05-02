export const showcaseConcepts = [
  {
    title: "Redis caching",
    what: "A fast in-memory store used as a deliberate cache—not a silent second database.",
    why: "Reduces repetitive reads and shields MySQL during spikes. Matters only when TTLs and eviction are intentional.",
    how: "I cache stable lookup maps and heavy aggregates with TTL + explicit bust paths on writes. Keys are scoped by tenant or resource so collisions do not leak data.",
  },
  {
    title: "Idempotency in APIs",
    what: "Guarantees that repeating the same request does not multiply side effects.",
    why: "Clients retry on timeouts or flaky networks; webhooks replay. Without guardrails users see double charges or duplicate workflow rows.",
    how: "I use deterministic idempotency keys on mutating endpoints, unique constraints reflecting real domain rules, and transactional checks inside managers before emitting downstream events.",
  },
  {
    title: "Cron jobs in Node.js",
    what: "Scheduled workers that reconcile state, roll up aggregates, or clean stale rows.",
    why: "Not everything belongs in-request. Periodic jobs amortize reporting cost and keep tables bounded.",
    how: "I isolate schedulers behind a runner process, fence runs with leases or transactional flags, log duration and row counts, and keep jobs idempotent for overlap windows.",
  },
  {
    title: "Puppeteer for PDF generation",
    what: "Headless Chromium renders HTML/CSS into deterministic PDF snapshots.",
    why: "Government and enterprise flows still consume PDF artifacts. Rendering from templates keeps parity with audited HTML.",
    how: "I render server-side templates, feed explicit viewport and print CSS, constrain external assets, and pool browser instances carefully to bound memory.",
  },
] as const;
