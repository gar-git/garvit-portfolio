export type Article = {
  slug: string;
  title: string;
  summary: string;
  readMinutes: number;
  body: string[];
  /** Optional canonical post off-site—when set shows an external affordance */
  externalUrl?: string;
};

export const articles: Article[] = [
  {
    slug: "idempotency-backend",
    title: "Idempotency in backend systems",
    summary:
      "Why duplicate submits happen in production, and how keys, natural constraints, or outbox patterns keep writes safe without guessing.",
    readMinutes: 6,
    body: [
      "Retries are inevitable: mobile apps time out, reverse proxies wedge, webhook partners replay what they believe failed. Layering idempotency on mutating endpoints is cheaper than auditing duplicate rows afterward.",
      "I anchor idempotency to something the caller can reproduce—a header or field that survives retries—then marry it to database-backed uniqueness reflecting the domain (not random UUID gimmicks unrelated to entities). Managers perform the guarded write sequence so rollback paths remain obvious.",
      "When integrations fan out asynchronously, transactional outboxes or deterministic replays isolate side effects instead of scattering fire-and-forget HTTP right after INSERT.",
    ],
  },
  {
    slug: "redis-performance-basics",
    title: "Redis performance basics",
    summary:
      "TTL discipline, avoiding hot keys, and structuring cache entries so misses do not spike your origin database.",
    readMinutes: 5,
    body: [
      "Caching only wins when TTLs encode real staleness budgets. Eternal keys rot silently until someone ships a purge script nobody trusts.",
      "Skew kills clusters: pinning every lookup on a superstar key negates partitioning. Chunked keys tied to shards of your domain keep pressure spread out.",
      "Miss storms follow deploys unless you warming critical paths—or rate-limit callers when Redis blips. Falling back cleanly beats hanging requests.",
    ],
  },
  {
    slug: "efficient-sql",
    title: "Writing efficient SQL queries",
    summary:
      "Reading execution plans selectively, indexing for real filters, and batching reads instead of accidental N+1 loops.",
    readMinutes: 7,
    body: [
      "Start from predicates and ordering the query planner must satisfy. Indexes that cannot serve WHERE or mandated ORDER BY are decoration.",
      "EXPLAIN is a scalpel—not every query deserves it. Reach for plans on hot endpoints that touch production-grade row counts.",
      "Loops issuing single-row selects are refactoring signals. Batch lookups or reshape SQL with JOIN strategies your team can articulate in review—not magic ORM prefetch toggles nobody understands.",
    ],
  },
];
