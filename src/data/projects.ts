// Shared project list. Single source of truth for the homepage
// (which shows the first 3) and the /projects page (which shows all).
// Order here is the display order: most recent / most relevant first.

export interface Project {
  /** Display title. */
  title: string;
  /** Year range, e.g. "2025–present" or "2021–2025". */
  years: string;
  /** 1–2 sentence summary with concrete metrics where possible. */
  summary: string;
  /** Tech tags, rendered in mono. */
  tags: readonly string[];
}

export const projects: readonly Project[] = [
  {
    title: 'Device Identity Resolution System',
    years: '2025–present',
    summary:
      'Three-tier local lookup (Bloom Filter → RocksDB → Caffeine cache) added to a metrics ingestion pipeline handling 5.8M batches/sec and 10T+ metrics/day. Sub-microsecond rejection at 99% of incoming traffic.',
    tags: ['Java', 'RocksDB', 'Bloom Filter', 'Caffeine', 'AWS'],
  },
  {
    title: 'Natural Language Telemetry Interface',
    years: '2025–present',
    summary:
      'AI-powered NL interface to device telemetry data spanning Redshift, DynamoDB, and Athena. Reduced metric investigation from multi-day support threads to minutes via self-service queries.',
    tags: ['Python', 'LLM', 'Bedrock', 'Redshift', 'DynamoDB', 'Athena'],
  },
  {
    title: 'LLM Code Review Tool',
    years: '2025',
    summary:
      'Org-wide automated code review using LangGraph orchestration with 7 parallel specialized reviewers and multi-stage filtering. Cut average time-to-review and time-to-merge by 65%.',
    tags: ['LangGraph', 'Claude', 'Bedrock', 'Python'],
  },
  {
    title: 'Autonomous SWE Harness',
    years: '2025',
    summary:
      'Multi-stage AI pipeline (triage → design → implement → QA → review) that takes a ticket and produces a merged code review. Adopted org-wide; ~80% reduction in routine task time.',
    tags: ['LangGraph', 'Claude', 'Bedrock', 'Python'],
  },
  {
    title: 'Runtime Metric Dimension Toggling',
    years: '2025–present',
    summary:
      'Shared enrichment library that lets device telemetry schemas update at runtime, dropping dimension-update time from months (next OTA cycle) to 15 minutes — zero device-side changes.',
    tags: ['Java', 'Distributed Systems'],
  },
  {
    title: 'PaCT — Privacy & Consent Tooling Framework',
    years: '2021–2025',
    summary:
      'Cross-platform consent engine across FireOS, AOSP 14/15, and a new Amazon OS. Write-once-deploy-everywhere artifact generation with custom Soong build steps and boot-time constraint workarounds. Primary consent layer on 200M+ Fire TV devices.',
    tags: ['Android', 'AOSP', 'FireOS', 'Soong', 'Java', 'Kotlin'],
  },
];
