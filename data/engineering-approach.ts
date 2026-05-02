export const approachBlocks = [
  {
    title: "Structuring Node.js services",
    body: [
      "I default to routes → controller → manager → data layer. Routes stay thin (HTTP boundaries only). Controllers validate and shape responses. Managers own business orchestration across calls. Data access hides SQL/driver details.",
      "Cross-cutting concerns (logging correlation ids, timeouts, retries) live at boundaries so domain code stays readable test targets.",
    ],
  },
  {
    title: "Designing APIs",
    body: [
      "Stable resources and verbs first, explicit error shapes second. I bias toward explicit enums for states machines instead of scattering string literals.",
      "Versioning surfaces at the routing layer before breaking consumers. Pagination and sorting have predictable defaults documented in code—not only in Swagger.",
    ],
  },
  {
    title: "Debugging backend issues",
    body: [
      "Reproduce with the smallest failing request trace: method, inputs, authenticated role, timestamps. Correlate logs around the transactional unit (before commit, during commit).",
      "When things look nondeterministic, I check concurrency (locks/isolation levels), caches, cron overlap, or partial retries—often not the line that throws first.",
    ],
  },
  {
    title: "Optimizing SQL",
    body: [
      "I start from the predicates that gate the query: selective indexes aligned to ORDER BY quirks, avoid SELECT * once shape stabilizes.",
      "Batch lookups with IN (...) or keyed maps in application layer when loop queries appear. Prefer explain on representative data sizes, not sample dev rows.",
    ],
  },
] as const;
