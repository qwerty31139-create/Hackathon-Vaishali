# spec2cloud Primer

> **Specification-driven development with AI agents — from idea to Azure in a structured, repeatable way.**

## What is spec2cloud?

spec2cloud is a set of patterns and primitives that enable developers to create complex applications using **specifications instead of manual coding**. It provides an opinionated yet flexible framework for AI-assisted software development, where specifications serve as the source of truth throughout the entire development lifecycle.

Instead of diving straight into code, spec2cloud guides you through a structured process: define what you want to build (PRD), break it into features (FRDs), let specialized AI agents generate the implementation, and deploy to Azure — all while maintaining traceability from business requirements to deployed infrastructure.

```
┌─────────────────────────────────────────────────────────────────────┐
│                         spec2cloud Flow                             │
├─────────────────────────────────────────────────────────────────────┤
│  Idea → PRD → FRDs → ADRs → Implementation Plan → Code → Azure     │
│    ↑                                                          ↓     │
│    └──────────── Specifications as Source of Truth ───────────┘     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Core Philosophy

### Specs as the Source of Truth

In spec2cloud, specifications are not just documentation — they are the **primary artifacts** that drive everything:

- **PRD (Product Requirements Document)** defines *what* to build and *why*
- **FRDs (Feature Requirements Documents)** break down features with clear acceptance criteria
- **ADRs (Architecture Decision Records)** capture *how* key technical decisions are made
- **AGENTS.md** provides coding agents with project-specific guidelines

When you update a spec, agents can regenerate code. When you need to understand a feature, the spec tells the story. This creates a **living documentation system** that evolves with your project.

### Opinionated but Flexible

spec2cloud provides:

- **Predefined agents** with specific roles (PM, Architect, Dev Lead, etc.)
- **Structured prompts** for common workflows
- **MCP server configurations** for enhanced capabilities
- **Template shells** for rapid bootstrapping

But everything is **customizable** — you can modify agents, create new prompts, add MCP servers, or adapt shells to your specific needs.

---

## The Three Flows

### 1. Greenfield Flow

Start from scratch with a blank repository and use spec2cloud agents to build everything:

```
User Idea
    ↓
┌─────────────────┐
│   PM Agent      │ → Creates PRD in specs/prd.md
└────────┬────────┘
         ↓
┌─────────────────┐
│   PM Agent      │ → Breaks PRD into FRDs in specs/features/
└────────┬────────┘
         ↓
┌─────────────────┐
│ DevLead Agent   │ → Reviews for technical completeness
└────────┬────────┘
         ↓
┌─────────────────┐
│ Architect Agent │ → Creates ADRs for key decisions
└────────┬────────┘
         ↓
┌─────────────────┐
│ Planner Agent   │ → Creates implementation plan with diagrams
└────────┬────────┘
         ↓
┌─────────────────┐
│   Dev Agent     │ → Implements features based on specs
└────────┬────────┘
         ↓
┌─────────────────┐
│  Azure Agent    │ → Deploys to Azure with IaC and CI/CD
└─────────────────┘
```

### 2. Greenfield with Shell

Start with a **shell** — a pre-configured template repository that includes:

- Technical bootstrapping (backend + frontend scaffold)
- Infrastructure as Code (AZD-powered, Bicep)
- Local development setup (Aspire)
- Pre-configured spec2cloud agents, prompts, and MCP servers
- Project-specific AGENTS.md

This accelerates development by providing a working foundation that's already spec-enabled:

```
Choose Shell (e.g., agentic-shell-dotnet)
    ↓
Clone/Initialize
    ↓
Define PRD & FRDs
    ↓
Agents implement on top of shell scaffold
    ↓
Deploy to Azure
```

### 3. Brownfield Flow

Bring spec2cloud to an **existing repository** that wasn't built with specifications:

```
Existing Codebase
    ↓
┌─────────────────────┐
│ Tech-Analyst Agent  │ → Reverse engineers the codebase
│                     │ → Creates technical docs in specs/docs/
│                     │ → Generates FRDs from existing features
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│ Bootstrap AGENTS.md │ → Creates AGENTS.md based on technical context
└─────────┬───────────┘
          ↓
Spec-Enabled Repository
    ↓
Use spec2cloud agents for future development
```

The key outcome: your existing repo now has **proper specifications** and an **AGENTS.md** file to guide coding agents going forward.

---

## The Layer Model

spec2cloud operates in three layers:

```
┌──────────────────────────────────────────────────────────┐
│                    TEMPLATES                              │
│  Ready-to-use project starters with full implementation  │
│  Examples: marketing-agents, e-commerce starter          │
│  Built using shells + spec2cloud                         │
├──────────────────────────────────────────────────────────┤
│                      SHELLS                               │
│  Technical bootstrapping with scaffolded code + IaC      │
│  • agentic-shell-python (Python + AI agents)             │
│  • agentic-shell-dotnet (.NET + Aspire + AI agents)      │
│  • shell-dotnet (.NET + Aspire)                          │
│  Includes spec2cloud agents/prompts/config               │
├──────────────────────────────────────────────────────────┤
│                    SPEC2CLOUD (Base)                      │
│  Core patterns and primitives:                           │
│  • Copilot Agents with defined roles                     │
│  • Structured prompts for workflows                      │
│  • MCP server configurations                             │
│  • AgentSkills (WIP)                                     │
└──────────────────────────────────────────────────────────┘
```

### Layer Details

| Layer | Purpose | Examples |
|-------|---------|----------|
| **spec2cloud** | Base patterns, agents, prompts, MCP config | This repository |
| **Shells** | Technical bootstrapping + spec2cloud | agentic-shell-dotnet, shell-dotnet, agentic-shell-python |
| **Templates** | Complete, ready-to-customize solutions | spec2cloud-marketing-agents |

---

## Key Primitives

### 1. Copilot Agents

Predefined agents with specialized roles, available in `.github/agents/`:

| Agent | Role |
|-------|------|
| **spec2cloud** | Orchestrator — routes requests to specialized agents |
| **pm** | Product Manager — creates PRD and FRDs |
| **devlead** | Dev Lead — reviews specs for technical completeness |
| **architect** | Architect — creates ADRs and manages guidelines |
| **planner** | Planner — creates implementation plans and diagrams |
| **dev** | Developer — implements features and manages standards |
| **azure** | Azure Specialist — deploys with IaC and CI/CD |
| **tech-analyst** | Reverse Engineer — analyzes existing codebases |
| **modernizer** | Modernization Strategist — creates upgrade roadmaps |

### 2. Prompts

Structured prompts in `.github/prompts/` for common workflows:

- `/prd` — Create a Product Requirements Document
- `/frd` — Break PRD into Feature Requirements Documents
- `/adr` — Create Architecture Decision Records
- `/plan` — Create implementation plans with diagrams
- `/deploy` — Deploy to Azure
- And more...

### 3. MCP Servers

Model Context Protocol servers configured in `.vscode/mcp.json`:

| Server | Purpose |
|--------|---------|
| **context7** | Library and framework documentation |
| **github** | GitHub repository operations |
| **microsoft.docs.mcp** | Microsoft Learn documentation |
| **deepwiki** | Deep research and analysis |
| **playwright** | Browser automation for testing |

### 4. AGENTS.md

A critical file in each project that provides **coding guidelines** to agents:

- Technology stack and versions
- Project structure conventions
- Coding standards and patterns
- Testing requirements
- Security guidelines

Without AGENTS.md, coding agents lack project-specific context. With it, they generate code that follows your team's standards.

---

## The Agent Ecosystem

```
                        ┌─────────────────┐
                        │   spec2cloud    │
                        │  (Orchestrator) │
                        └────────┬────────┘
                                 │
        ┌────────────────────────┼────────────────────────┐
        │            │           │           │            │
        ▼            ▼           ▼           ▼            ▼
   ┌─────────┐ ┌──────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
   │   pm    │ │ devlead  │ │architect│ │ planner │ │   dev   │
   │         │ │          │ │         │ │         │ │         │
   │ PRD/FRD │ │  Review  │ │  ADRs   │ │  Plans  │ │  Code   │
   └─────────┘ └──────────┘ └─────────┘ └─────────┘ └────┬────┘
                                                         │
                                                         ▼
                                                    ┌─────────┐
                                                    │  azure  │
                                                    │         │
                                                    │ Deploy  │
                                                    └─────────┘

   ┌─────────────────────────────────────────────────────────┐
   │               Brownfield Specialists                    │
   │  ┌──────────────┐              ┌──────────────┐        │
   │  │ tech-analyst │ ──────────▶  │  modernizer  │        │
   │  │              │              │              │        │
   │  │  Analyze     │              │  Modernize   │        │
   │  └──────────────┘              └──────────────┘        │
   └─────────────────────────────────────────────────────────┘
```

### Agent Responsibilities

| Agent | Responsibilities |
|-------|------------------|
| **spec2cloud** | Analyzes user intent, delegates to specialized agents, coordinates multi-agent workflows |
| **pm** | Creates PRD and FRDs, focuses on WHAT not HOW, defines acceptance criteria |
| **devlead** | Reviews specs for technical feasibility, identifies missing requirements, advocates simplicity |
| **architect** | Creates ADRs, researches technology options, maintains architecture standards |
| **planner** | Creates multi-level Mermaid diagrams (L0-L3), breaks down work into tasks, planning only |
| **dev** | Implements features, maintains code standards, follows AGENTS.md guidelines |
| **azure** | Deploys to Azure using azd, creates Bicep templates, sets up CI/CD |
| **tech-analyst** | Reverse engineers existing codebases, extracts specs from code, documents architecture |
| **modernizer** | Analyzes legacy systems, identifies technical debt, creates modernization roadmaps |

---

## Artifacts Generated

spec2cloud produces a structured set of artifacts:

```
project/
├── specs/
│   ├── prd.md                    # Product Requirements Document
│   ├── features/                 # Feature Requirements Documents
│   │   ├── user-auth.md
│   │   ├── dashboard.md
│   │   └── ...
│   ├── adr/                      # Architecture Decision Records
│   │   ├── 0001-database-choice.md
│   │   ├── 0002-auth-strategy.md
│   │   └── ...
│   ├── tasks/                    # Implementation tasks
│   └── docs/                     # Technical documentation
│       ├── architecture/
│       ├── technology/
│       └── integration/
├── AGENTS.md                     # Coding guidelines for agents
└── infra/                        # Infrastructure as Code (Bicep)
```

| Artifact | Purpose | Created By |
|----------|---------|------------|
| **PRD** | Product vision, goals, success metrics | pm |
| **FRDs** | Feature specs with acceptance criteria | pm |
| **ADRs** | Key technical decisions with rationale | architect |
| **AGENTS.md** | Project-specific coding guidelines | architect / bootstrap |
| **Tasks** | Actionable implementation items | planner / modernizer |
| **Technical Docs** | Architecture, stack, integrations | tech-analyst |
| **Diagrams** | Mermaid diagrams (L0-L3) | planner |

---

## Technology Foundation

spec2cloud leverages:

| Technology | Purpose |
|------------|---------|
| **GitHub Copilot** | AI-powered code generation and chat |
| **Copilot Agents** | Custom agents with specialized roles |
| **VS Code** | Primary IDE with integrated agent experience |
| **MCP (Model Context Protocol)** | Extended capabilities via servers |
| **Azure** | Cloud deployment target |
| **Azure Dev CLI (azd)** | Infrastructure provisioning and deployment |
| **Bicep** | Infrastructure as Code |
| **.NET Aspire** | Local development orchestration (in shells) |

---

## Tooling & Gallery

### VS Code Extension: spec2cloud-toolkit

The [spec2cloud-toolkit](https://github.com/EmeaAppGbb/spec2cloud-toolkit) extension provides:

- **Template Gallery** — Browse and filter templates with rich UI
- **Template Tree View** — Quick access to templates
- **One-Click Initialization** — Download templates to your workspace
- **MCP Tools** — Find templates and estimate Azure costs
- **@spec2cloud Chat Participant** — Copilot integration

### Template Gallery

Browse ready-to-use templates at **[aka.ms/spec2cloud](https://aka.ms/spec2cloud)**

Templates include:

- Full implementations built on shells
- Categorized by industry, services, languages, frameworks
- Video previews and detailed documentation
- One-click initialization via VS Code extension

---

## Getting Started

### Option 1: Start with a Shell (Recommended)

1. Choose a shell based on your tech stack:
   - [agentic-shell-dotnet](https://github.com/EmeaAppGbb/agentic-shell-dotnet) — .NET + Aspire + AI agents
   - [agentic-shell-python](https://github.com/EmeaAppGbb/agentic-shell-python) — Python + AI agents
   - [shell-dotnet](https://github.com/EmeaAppGbb/shell-dotnet) — .NET + Aspire

2. Clone and open in VS Code
3. Start with `@spec2cloud create a PRD for [your idea]`

### Option 2: Use a Template

1. Install the [spec2cloud-toolkit extension](https://github.com/EmeaAppGbb/spec2cloud-toolkit)
2. Browse templates at [aka.ms/spec2cloud](https://aka.ms/spec2cloud)
3. Click "Use Template" to initialize in your workspace

### Option 3: Spec-Enable an Existing Repo

1. Copy spec2cloud agents and config to your repo
2. Run `@tech-analyst analyze this codebase`
3. Generate AGENTS.md with the bootstrap prompt
4. Use spec2cloud agents for future development

---

## Key Scenarios

| Scenario | Flow | Key Agents |
|----------|------|------------|
| **Rapid Prototyping** | Greenfield with Shell | pm → planner → dev → azure |
| **Modernization** | Brownfield | tech-analyst → modernizer → planner → dev |
| **Platform Engineering** | Create custom shells/templates | architect → dev |

---

## Learn More

- [spec2cloud Repository](https://github.com/EmeaAppGbb/spec2cloud)
- [Template Gallery](https://aka.ms/spec2cloud)
- [VS Code Extension](https://github.com/EmeaAppGbb/spec2cloud-toolkit)
- [Shells: agentic-shell-dotnet](https://github.com/EmeaAppGbb/agentic-shell-dotnet)
- [Example: Marketing Agents Template](https://github.com/EmeaAppGbb/spec2cloud-marketing-agents)
