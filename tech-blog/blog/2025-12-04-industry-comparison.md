---
slug: industry-comparison
title: Three Worlds, Three Playbooks - SaaS, Game Engines, and Studios
authors: [kaywin]
tags: [technical-writing, documentation, content strategy, information architecture, SaaS]
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

<ThemedImage
  alt="STE Across Industries"
  sources={{
    light: useBaseUrl('/img/blog/three-industries-light.png'),
    dark:  useBaseUrl('/img/blog/three-industries-dark.png'),
  }}
  style={{display:'block', maxWidth:'100%'}}
/>

***What SaaS Docs, Game Engine Docs, and Game Studio Docs Teach Us About Technical Writing***

Every technical writer knows that documentation can mean wildly different things depending on where you work. Writing for a Software as a Service (SaaS) platform, a game engine, and a AAA game studio all fall under the same discipline. The expectations, processes, and audiences however, and even the cultural norms of the work, can feel like entirely different ecosystems.

I’ve worked primarily in SaaS, but have a fair amount of indie games development experience (check out my [digital archives](https://anachronic.itch.io/)) using [Unity](https://unity.com/). Looking back at my game dev history got me curious about how documentation practices shift across industries like game engines (Unity, Unreal) and game production studios (EA, Ubisoft, Bungie).

This article is the result: part research, part synthesis, and part reflection. The intention is to create a map of three documentation worlds that share a common purpose but diverge significantly in audience, purpose, and form.

If you're exploring a career move, trying to understand the shape of technical writing outside of your current domain, or are just curious about documentation practices across different industries, read on to learn how these three compare.

---

## SaaS Documentation
***Fast, User-Facing, and Success-Oriented***

In SaaS, user-facing docs are inseparable from the product experience. Users look to the help center not only to solve problems but to understand workflows, configure settings, and get quick explanations of what the software can do.

**What defines SaaS documentation:**

- **Task-based structure:** Short, actionable, get-in-and-get-out writing.

- **Workflow clarity:** Users often aren’t technical; docs must keep cognitive load low.

- **Rapid updates:** SaaS ships constantly and docs must keep up.

- **Metrics-driven:** Knowledge-Centered Service (KCS) practices, self-service success, ticket deflection, onboarding speed.

- **Multiple personas:** Admins, end users, support agents, customer success, etc.

In SaaS, documentation is fundamentally about **reducing friction.**  Every page is an opportunity to prevent a ticket, shorten a setup process, or help a customer feel empowered instead of stuck.

The **writer’s role** blends information architecture (IA), user experience (UX) copy, support alignment, and relationship-building across product, engineering, and customer teams.

---

## Game Engine Documentation
***Deep Technical Knowledge Meets Learning Design***

Documentation for game engines like Unity or Unreal is an entirely different challenge. Instead of just describing user interface (UI) workflows, writers are often explaining core engine systems, scripting APIs, rendering pipelines, physics behaviour, cross-platform quirks, asset workflows, and dozens of interlocking tools.

A game engine is essentially **a platform for building worlds**, and the docs have to match that level of complexity.

**What defines game engine documentation:**

- **Highly technical conceptual writing:** Explanations of how systems work, not just how to use them.

- **API references:** Thousands of entries, each requiring accuracy and clarity.

- **Code samples everywhere:** Real examples that devs can copy, paste, and modify.

- **Educational layer:** Tutorials, samples, guided projects, learning pathways.

- **Versioning pain:** Documentation breaks with every engine update.

Game engine writers operate somewhere between:
- technical educators,
- platform engineers,
- developer relations,
- and curriculum designers.

Where SaaS writers help users operate a product, game engine writers help creators **build entire experiences**. While there can definitely be overlap, at its root game engine documentation requires a different mental model, and a different writing craft.

---

## Game Studio Documentation
***Pipelines, Processes, and the Hidden Machinery of Production***

If game engine documentation is mostly outward-facing, game studio documentation is the opposite: it’s the **invisible infrastructure** that keeps a production pipeline from collapsing.

AAA game development involves hundreds of people across art, engineering, design, animation, writing, audio, QA, localization, and more. Each discipline often uses internal tools, custom pipelines, proprietary editors, and studio-specific engines.

Much of this tooling has rough edges or minimal UX, and so internal documentation therefore becomes indispensable.

**What defines game studio documentation:**

- **Primarily internal audiences:** Designers, artists, level builders, QA testers, technical directors. User-facing documentation (manuals, quick references, maps, etc.) require heavy graphic design and bridge the gap between technical writing and marketing.

- **Process-heavy content:** Build pipelines, asset workflows, naming conventions, version control practices, approval paths.

- **Tooling documentation:** Internal editors, exporters, shaders, debugging tools, automation scripts.

- **High change velocity**: Production pipelines evolve mid-project.

- **Assumed or informal knowledge risk risk:** Studios often lack dedicated writers; knowledge lives in wikis or people’s heads.

Technical writing for game studios is less about customers and shipping a polished product — it’s about keeping the **team** functioning.

Bad documentation at a studio means high internal costs: missed deadlines, duplicated work, broken builds, integration failures, and staff (artists, designers, engineers, etc.) being blocked.

Here, a writer becomes a **systems stabilizer**, turning tacit knowledge into shared practice.

---

## The Key Differences

| **Dimension**        | **SaaS Docs**                                  | **Game Engine Docs**                               | **Game Studio Docs**                                   |
|----------------------|------------------------------------------------|----------------------------------------------------|---------------------------------------------------------|
| **Audience**         | Non-technical admins & end users              | Developers, artists, technical creators           | Internal multidisciplinary teams                         |
| **Primary Goal**     | Reduce friction, deflect tickets, onboard users | Teach creators how to use a complex platform       | Document workflows so production stays on track         |
| **Doc Style**        | Task-focused                                  | Conceptual + API + tutorials                      | Process documents, pipeline guides, tool instructions   |
| **Cadence**          | Constant                                      | Release-driven                                     | Production-cycle driven                                 |
| **Knowledge Sources** | PMs, Designers, Support                       | Engineers, technical artists                       | Pipeline engineers, technical directors                 |
| **Risks of Poor Docs**| Tickets, churn, onboarding failures           | Engine misuse, bugs, integration issues            | Production delays, tool misuse, build failures          |

These differences exist because each domain has a different **definition of success**:

**Why these differences exist:**
- In SaaS, success = fewer issues and faster time-to-value for customers.
- In game engines, success = creators can build efficiently and effectively.
- In game studios, success = production is smooth enough to ship on time.

---

## Where All Three Worlds Overlap

Despite the differences, strong technical writing in any context relies on:

1. **Clear information architecture**
Whether it’s a knowledge base or a pipeline wiki, structure matters.

2. **Semantic empathy**
Understanding how users think and what they’re actually trying to do is universal.

3. **Partnership across disciplines**
Writers must translate between engineering, design, and users.

4. **Continuous improvement**
Docs are never finished; they evolve alongside the product or pipeline.

5. **Reducing cognitive load**
The best documentation makes complex things feel workable rather than overwhelming.

<ThemedImage
  alt="STE Across Industries"
  sources={{
    light: useBaseUrl('/img/blog/industry-intersections-light.png'),
    dark:  useBaseUrl('/img/blog/industry-intersections-dark.png'),
  }}
  style={{display:'block', maxWidth:'100%'}}
/>

---

## Transitioning Between These Industries

Writers often wonder whether switching between SaaS and the games industry is possible. Here’s what you'll need to make the change:

### Going from SaaS → Game Engines

You’ll need:
- deeper technical knowledge
- experience with code samples
- confidence describing system architectures

Your workflow skills, IA instincts, and user empathy will transfer beautifully.

### Going from SaaS → Game Studios

You’ll need:
- comfort writing for internal audiences
- tolerance for ambiguity
- ability to extract informal knowledge

You already have experience documenting tools and workflows. Game studios desperately need that.

### Going from Game Studios → SaaS

You’ll need:
- clearer, more user-facing writing style
- comfort with fast, continuous content updates
- product and customer-oriented mindset

Your process documentation skills will shine, and the audience shift might feel refreshing: fewer acronyms, fewer brittle workflows, and more predictable products.

---

## Games-as-a-Service (GaaS)
***The Hybrid Documentation Ecosystem***

While traditional game studios ship a product and (mostly) move on, Games-as-a-Service (GaaS) studios operate much more like SaaS companies: they release continuous updates, run seasonal content, manage live operations, and maintain a complex online ecosystem long after launch.

Like SaaS companies, GaaS companies **never stop shipping**. These products are still games though, and consequently are deeply tied to game production processes. As a result, the documentation challenges are a hybrid of both worlds.

**What defines GaaS documentation:**

- **Live, continual updates:** Patch notes, seasonal guides, and balance changes roll out weekly or monthly.

- **Dual audiences:** Writers often support both internal developers and external players.

- **Operational complexity:** Live-ops workflows, rollback procedures, and incident playbooks resemble SRE documentation.

- **Community impact:** Changes affect player meta, economy, and competitive balance — clarity is crucial.

- **Cross-team communication:** Docs often involve engineering, design, QA, community, support, and analytics.

GaaS writers must think like SaaS communicators, game designers, and live-ops engineers simultaneously. It’s one of the most interdisciplinary forms of documentation work in the industry.

**How GaaS compares:**

- **Like SaaS:** frequent updates, user-facing documentation, continuous delivery

- **Like game studios:** heavy internal tooling, content pipelines, complex system interactions

- **Like neither:** real-time operations, incident response documentation, player meta management


In GaaS documentation isn’t just support, it’s part of how the game stays alive and the ecosystem thrives.


---

## Conclusion
***One Discipline, Many Worlds***

Technical writing is a single profession, but it lives inside wildly different ecosystems.

- SaaS docs sit closest to the customer.
- Game engine docs sit closest to the technology.
- Game studio docs sit closest to the production pipeline.

Each world shapes its writers in unique ways. Each one asks different questions, demands different strengths, and defines “good documentation” differently.

But in all three, the writer’s core contribution remains the same:

***Make the complex knowable. Make the invisible visible. Help people do the work that matters.***

If this is your craft, you’re already part of all three worlds, even if you’ve only worked in one.

