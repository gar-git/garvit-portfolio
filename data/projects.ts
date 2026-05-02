export type ProjectId = "pmt-20" | "pmsg" | "flowdesk" | "islr";

export type ProjectSheet = {
  id: ProjectId;
  title: string;
  summary: string;
  tech: string[];
  period?: string;
  problem: string;
  responsibilities?: string[];
  sections: Array<{
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }>;
};

export const projects: ProjectSheet[] = [
  {
    id: "pmt-20",
    title: "PMT-2.0 · AHASolar Project Management Tool",
    summary:
      "Backend platform powering 20+ EPC firms to automate end-to-end solar project workflows—with hundreds of guarded APIs under JWT + RBAC.",
    period: "February 2025 – Present",
    tech: ["Node.js", "Express.js", "MySQL", "Redis", "Docker", "JWT", "RBAC"],
    problem:
      "Solar EPC workflows fan out across finance, approvals, site execution, and reporting. The product cannot afford regressions across companies: each mutation must honor permissions, validations, and long-running cron automation without losing auditability.",
    responsibilities: [
      "Owned backend increments on a layered service model so teams can iterate without cross-contaminating persistence concerns.",
      "Delivered scalable REST endpoints with explicit auth boundaries and repeatable validation strategies across a large routing surface.",
      "Tightened relational modeling and retrieval paths that carry multi-tenant load at daily request volumes.",
      "Operationalized repeatable deployment patterns tied to cron-driven automation and predictable container lifecycles.",
    ],
    sections: [
      {
        heading: "Architecture & layering",
        paragraphs: [
          "Controllers negotiate HTTP semantics; orchestration-heavy units live behind managers while SQL and driver concerns stay encapsulated so hot paths remain reviewable.",
        ],
        bullets: [
          "Stateless controllers with consistent error envelopes for React consumers.",
          "Managers coordinate multi-repository transactions with explicit rollback stories.",
          "Schema + query refinement as record counts grew into the tens of thousands.",
        ],
      },
      {
        heading: "Reliability under load",
        bullets: [
          "Redis-backed caching trims hot reads and shields MySQL bursts during spikes.",
          "JWT-gated surfaces with granular RBAC for many endpoints—preventing ambiguous authorization creep.",
          "Cron-mediated workflows reduce manual resets and reconcile delayed states.",
          "Docker-backed execution keeps repeatable runtime assumptions across environments.",
        ],
      },
      {
        heading: "Measured outcomes",
        bullets: [
          "Material latency improvements after layering cache + tighter SQL retrieval paths.",
          "Platform stability targets aligned with uptime expectations for regulated execution partners.",
          "Automation trims manual recovery steps tied to recurrent operational tasks.",
        ],
      },
    ],
  },
  {
    id: "pmsg",
    title: "PMSG · Pradhan Mantri Surya Ghar (national solar program)",
    summary:
      "National-scale rollout touching vendor, DISCOM, and citizen journeys—cron-heavy reconciliation and tiered dashboards backed by guarded APIs.",
    period: "December 2023 – February 2025",
    tech: ["Node.js", "Express.js", "MySQL", "React.js", "JWT", "Cron pipelines"],
    problem:
      "Ultra-wide audience with heterogeneous actors (vendors, DISCOM desks, beneficiaries) requires differentiated permissions, ingestion reliability, and human-verifiable dashboards. Manual reconciliation does not survive volume once monthly records creep into hundreds of thousands.",
    responsibilities: [
      "Architected cohesive backend seams that separate authentication, tenancy/role assertions, and business flows.",
      "Delivered sizable REST footprints across onboarding, verification, and operational reporting paths consumed by layered React dashboards.",
      "Operationalized ingestion + cron pipelines tuned for monthly churn instead of brittle ad-hoc SQL jobs.",
      "Formalized centralized validation pipelines to keep upstream noise from polluting transactional tables.",
    ],
    sections: [
      {
        heading: "Architecture",
        bullets: [
          "Modular decomposition between actor-specific flows while sharing core auth + validation scaffolding.",
          "RBAC-aligned surfaces so React tiers never infer permissions implicitly on the client alone.",
          "Disciplined error contracts for external partner integrations prone to flaky networking.",
        ],
      },
      {
        heading: "Data & pipelines",
        bullets: [
          "Monthly batch ingestion via cron minimized manual spreadsheets and repeatable human error cycles.",
          "Validation-first admission improved downstream reporting fidelity on half-million-class interaction volumes.",
        ],
      },
      {
        heading: "Challenges worth naming",
        bullets: [
          "Coordinating cross-tier APIs without exploding duplicate policy checks.",
          "Keeping cron windows observable when failures silently retry or partially commit.",
          "Balancing readability of dashboard payloads vs. minimizing over-fetch chatter.",
        ],
      },
    ],
  },
  {
    id: "flowdesk",
    title: "FlowDesk · Team tasks, projects & hierarchy",
    summary:
      "A company-scoped workspace where admins onboard the org, teammates join with a company code, and everyone works tasks on a Kanban board—with projects, reporting lines, and role-aware permissions enforced on the API, not inferred in the UI alone.",
    period: "Personal project · ongoing",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MySQL",
      "Drizzle ORM",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "JWT",
    ],
    problem:
      "Work that sprawls across ad-hoc lists and chats loses accountability: statuses drift, duplicates pile up when the same mutation is retried, and “who may change due date vs assignee” becomes tribal knowledge. FlowDesk concentrates projects, assignments, and org structure in one tenant boundary—so continuity, scope, and policy stay explicit.",
    responsibilities: [
      "Scoped every domain object to the company boundary (admin onboarding, company-code join, JWT-backed sessions).",
      "Implemented fixed roles—Administrator, Manager, Tech Lead, Developer—with server-side rules for user creation, hierarchy edits, task assignment scope, and self-assign allowances.",
      "Built task flows with nuanced ownership: Kanban statuses, tagging and task types, creator-only deletes, restricted due-date and assignee edits where applicable, and assignee-side forwarding where the accept path is modeled.",
      "Delivered REST APIs with bcrypt-hashed passwords, Drizzle-managed schema plus migrations, and a React (Vite) client using Axios and theme toggles via CSS variables.",
      "Integrated optional real-time delivery: BullMQ jobs and a notification worker on Redis, Socket.IO on the same HTTP server as Express, and Nodemailer/SMTP for assignment email when configured.",
    ],
    sections: [
      {
        heading: "Product footprint",
        bullets: [
          "Projects belong to the company; members provide context so tasks land in the right program.",
          "Organization views (roster / tree) express who reports to whom—maintained within permissioned roles.",
          "Per-user settings cover appearance (light/dark in the browser), email notification toggles where persisted, and authenticated password changes.",
          "Typical flows: dashboards load assignments, projects, and profile/company payloads; mutations hit routes such as `/api/tasks` under company scope and enforced role rules.",
        ],
      },
      {
        heading: "Tasks—where policy shows up",
        bullets: [
          "Board-centric UX: statuses, priority, optional start/due dates, tags, and types (bug, feature, improvement, chore).",
          "Example rule depth: creators often retain due date, priority, and assignee changes; assignees may adjust fields like start date within the documented constraints.",
          "Forwarding lets assignees reroute work to teammates with an explicit accept flow where implemented.",
        ],
      },
      {
        heading: "Architecture & notifications",
        paragraphs: [
          "Frontend: React Router, Axios to REST, socket.io-client when live channels are enabled. Backend: Express with JWT middleware, Drizzle talking to MySQL, BullMQ workers when Redis is available.",
          "Assignment side-effects can enqueue jobs: sockets push in-app notices for fresher boards; SMTP variables gate outbound mail without blocking core CRUD.",
        ],
        bullets: [
          "End-to-end request story: login stores a client JWT; subsequent calls carry tenancy and role assertions the server trusts.",
          "Clear split between SPA build (VITE API base URL) and server env (database, JWT secret, Redis URL, optional SMTP)—mirroring how README / env.example would document deployment.",
        ],
      },
      {
        heading: "Posture",
        paragraphs: [
          "I own this codebase end-to-end as a disciplined personal build—not a slideware concept. Repo visibility and demos follow the same NDA-conscious posture as my other references.",
        ],
      },
    ],
  },
  {
    id: "islr",
    title: "Indian Sign Language Recognition (academic)",
    summary:
      "CNN-focused recognition stack with annotated ISL imagery—optimized for measurable real-time inference and academically reviewed results.",
    period: "November 2022 – June 2023",
    tech: ["OpenCV", "TensorFlow", "CNN"],
    problem:
      "Gestures degrade under lighting swings, occlusion, and device variance—yet interpreters need predictable latency envelopes for practical usability testing.",
    sections: [
      {
        heading: "Model & data",
        bullets: [
          "Deep classification head trained on tens of thousands of annotated ISL images with dataset publication on Kaggle for reproducibility signals.",
          "Reported uplift in classifier performance against earlier baselines through rigorous labeling + augmentation discipline.",
        ],
      },
      {
        heading: "Pipeline & throughput",
        bullets: [
          "OpenCV preprocessing + TensorFlow inference path tuned toward sub-200ms-class latency benchmarks for repeatable demo sessions.",
          "High daily gesture trials with human participants surfaced failure clusters around edge illumination cases.",
        ],
      },
      {
        heading: "Outcomes",
        bullets: [
          "Documented peak accuracy benchmarks under controlled study conditions validated with sizable participant cohorts.",
          "Presentations and peer-reviewed dissemination (including Springer-linked publication artifacts) anchored engineering decisions in measurable evidence—not vibe checks.",
        ],
      },
    ],
  },
];
