# Performance Testing & Observability

## Overview

A performance testing project designed to evaluate the reliability, responsiveness, and scalability of a custom Game Store API using k6 and TypeScript.

The project simulates real-world user traffic, validates API responses, measures performance metrics, and establishes performance baselines for future scalability assessments.

## Tech Stack

- TypeScript
- Grafana k6
- Node.js
- Fastify
- Git & GitHub

## Testing Strategy

| Test Type | Status |
|---|---|
| Baseline Testing | Completed |
| Load Testing | Planned |
| Stress Testing | Planned |
| Spike Testing | Planned |
| Soak Testing | Planned |

## Baseline Test Scenario

The initial test evaluates the game catalog endpoint under a controlled workload.

| Parameter | Configuration |
|---|---|
| Endpoint | GET /games |
| Virtual Users | 5 |
| Duration | 20 seconds |
| Think Time | 1 second |
| Execution Environment | Local |

## Performance Thresholds

| Metric | Acceptance Criteria |
|---|---|
| Response Time (P95) | < 500 ms |
| HTTP Error Rate | < 1% |
| Functional Checks | 100% success |

## Initial Test Results

| Metric | Result |
|---|---|
| Total HTTP Requests | 100 |
| Successful Checks | 200/200 |
| HTTP Error Rate | 0% |
| Average Response Time | 0.665 ms |
| P90 Response Time | 1.16 ms |
| P95 Response Time | 2 ms |
| Maximum Response Time | 4.52 ms |
| Throughput | 4.99 requests/s |
| Overall Result | PASS |

These results represent an initial local performance baseline. They do not establish production readiness or maximum system capacity.

## Getting Started

### Prerequisites

- Node.js
- npm
- Grafana k6
- Game Store API running locally on port 3000

### Install development dependencies

```bash
npm ci
```

### Validate TypeScript

```bash
npx tsc --noEmit
```

### Run the baseline test

```bash
k6 run tests/load/games.load.test.ts
```

### Export test results

```bash
k6 run tests/load/games.load.test.ts --summary-export=reports/baseline-summary.json
```

## Project Roadmap

- [x] Custom Game Store API
- [x] TypeScript configuration
- [x] Baseline performance testing
- [x] Performance thresholds
- [x] Functional response validation
- [x] JSON performance reports
- [ ] Advanced load scenarios
- [ ] Stress testing
- [ ] Spike testing
- [ ] Soak testing
- [ ] PostgreSQL integration
- [ ] Prometheus metrics
- [ ] Grafana dashboards
- [ ] CI/CD integration
- [ ] Performance regression detection

## Project Objectives

- Apply performance engineering principles.
- Identify performance bottlenecks.
- Establish measurable acceptance criteria.
- Analyze system behavior under different workloads.
- Integrate performance testing with observability tools.
- Build reproducible and maintainable performance testing scenarios.

## Author

**Carla Ramello — QA Engineer**

Developed as part of a professional QA Engineering portfolio focused on performance testing, automation, and observability.

## Project Status

Active development — Initial baseline completed.