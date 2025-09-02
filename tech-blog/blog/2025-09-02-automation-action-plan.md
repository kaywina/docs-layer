---
slug: automation-action-plan
title: Tech Writing Automation by the Numbers
authors: [kaywin]
tags: [
  technical-writing,
  docs-as-code,
  ai,
  communication,
  documentation,
  artificial-intelligence,
  automation,
  automating-documentation,
  automating-saas-documentation
]
---

Up to this point, we’ve talked about the hidden costs of automation in theory.

But what would it actually take to automate the role of a technical writer for a SaaS web application?

Let’s walk through a realistic action plan, with costs localized to Canadian salaries and wages.

:::tip
Looking for a simpler overview instead of the full cost breakdown?  
Start with the [introductory article](/blog/costs-of-automation) on the costs of automating technical writing.
:::

---

## Step-by-Step Requirements
To automate the key parts (i.e. the bare minimum) of a professional technical writing role, you would need to do the following:

### Step 1. Decide What Needs Covering
User-facing SaaS documentation goes far beyond API references. At a minimum, customers expect:

- **Getting Started guides**
- **Task-based tutorials** (e.g. “Create a dashboard”)
- **Troubleshooting / FAQs**
- **Release notes**
- **Conceptual explainers** (roles, billing, permissions)

Traditional automation tools (Swagger, Doxygen, Sphinx) can’t generate most of this. To automate SaaS docs, you’re effectively combining **UI test automation** with **LLM-assisted content generation.**

---

### Step 2. Build the Toolchain

To replace a technical writer, you’d need to automate both *publishing* and *discovery*:

- **Automated workflow tests**: Playwright, Cypress, or Selenium scripts to mimic user actions and capture screenshots.
- **Visual regression testing**: Applitools or Percy to detect UI changes.
- **LLM content drafting**: ChatGPT, Claude, or Mintlify to produce draft docs from workflow scripts.
- **Static site generator**: Docusaurus, MkDocs, or another static site platform for publishing.
- **Feedback integration**: Zendesk or Intercom to flag missing docs from support tickets.

This isn’t just “doc automation.” It’s essentially **QA automation plus AI copywriting.**

:::caution
Even with open-source foundations, the tooling required to automate SaaS documentation typically adds **$10–15K CAD per year** at minimum on top of the labour costs identified in this article.
:::


---

### Step 3. One-Time Setup Costs

- **Workflow mapping** (25 key flows × ~10 hrs each): 250 hrs Dev QA → **$22K–$28K CAD**
- **Visual regression + detection setup**: 80 hrs DevOps → **$6K–$8K CAD**
- **Pipeline integration (CI/CD + LLM)**: 120 hrs Docs Engineer → **$10K–$12K CAD**
- **Screenshot automation setup**: 75 hrs QA/Dev → **$6K–$9K CAD**

**Year 1 Setup Total: $44K–$57K CAD**

---

### Step 4. Ongoing Maintenance (Annual)

Apps evolve, and every change risks breaking the docs. With a biweekly sprint cadence, expect:

- **Workflow fixes** (2–3 breakages per sprint): 120–140 hrs/year → **$10K–$12K CAD**
- **Screenshot fixes** (~250–300 images/year): 125–150 hrs/year → **$10K–$12K CAD**
- **AI draft review & QA**: 60–70 hrs/year → **$5K–$6K CAD**
- **DevOps + tool upkeep**: 80 hrs/year → **$6K–$8K CAD**

**Annual Ongoing Total: $35K–$45K CAD**

---

### Step 5. The Comparison

- **Automated Docs (Year 1)**: $44K–$57K setup + $35K–$45K ongoing  
  **Total: $79K–$102K CAD**

- **Automated Docs (Year 2+)**: $35K–$45K CAD/year

- **Full-Time Technical Writer (Canada)**:  
  - Salary: $85K–95K CAD  
  - Fully loaded with benefits/overhead: **$102K–115K CAD/year**

On paper, automation becomes “cheaper” after the first year. But those costs are paid at **developer and QA rates**, not writer rates. And crucially: automation never provides the judgment, prioritization, or storytelling that human writers bring.

---

Yes, you can automate parts of documentation, but to automate the entire role, you also need to automate **user testing, workflow discovery, and screenshot management.** That’s an engineering project as complex as the product itself.

Automating SaaS documentation isn’t just replacing a writer with software. It’s building:

- A **parallel QA system** for user journeys.
- A **visual regression suite** for screenshots.
- An **AI pipeline** that still requires human oversight.

In practice, you’ve shifted costs from one writer to an ongoing blend of **DevOps, QA engineers, and part-time doc reviewers.** The total bill may look smaller, but the hidden costs — from user frustration to support tickets to brand erosion — remain.

---

## The Intangible Costs of Automation

Even if automation could capture screenshots, map workflows, and regenerate docs perfectly, it would still miss the most important part of the technical writing role: **the human glue.**  

Technical writers don’t just document software; they keep organizations aligned. When you remove that role, the costs don’t disappear — they reappear elsewhere, often in more expensive and fragmented ways.

### 1. Coordinating with Product Managers
Writers sit in release meetings, track down PMs for feature intent, and translate roadmaps into user-friendly communication.

Without a writer, **PMs spend more time hand-holding developers and support teams**, pulling them away from strategy.  

**Cost:** PM hours are far more expensive than writer hours.

---

### 2. Handling Internal Questions
Writers are often the first line of internal support — answering “How does this feature work?” from sales, marketing, or support teams.

Without them, **internal knowledge-sharing scatters** across Slack threads, wikis, and hallway conversations.  

**Cost:** Lost productivity and inconsistent messaging across the org.

---

### 3. Disseminating Product Knowledge
A skilled writer knows how to **cascade product information**: turning a roadmap into user docs, release notes, support macros, and sales enablement content.

Automation can spit out text, but it can’t **prioritize audiences** or decide which channels need which message.  

**Cost:** Other teams reinvent content, or worse — go to market with misaligned information.

---

### 4. Acting as User Advocate
Perhaps the most intangible contribution: writers act as **stand-ins for the customer**.  

They spot confusing flows, call out jargon, and raise usability concerns early. Automation doesn’t question the product; it just mirrors it.  

**Cost:** Higher churn, more support tickets, and features that fail quietly.

---

### Quantifying the Intangible Costs


We can quantify the intangible load redistributed across PMs, Engineers, and Support with the following estimates:

| Category                  | Hours/Year | Annual Cost (CAD) |
|---------------------------|------------|-------------------|
| PM coordination           | ~120       | $6.5K             |
| Internal questions        | ~200       | $10K              |
| Product knowledge sharing | ~150       | $6K               |
| User advocacy             | ~100       | $6K               |
| **Total**                 | ~570       | ~$28–35K          |

This pushes the true cost of ongoing automation closer to $60–70K/year — eroding the savings gap versus a $110K/year writer. And unlike writers, those hours are spread across expensive staff whose time is already scarce, and who have less capacity to do the work and potentially narrower breadth of knowledge to be able to do it effectively.

## The Bigger Picture and Costs of Disruption
Automation can mimic the *output* of documentation. But it cannot replicate the **organizational role** of a technical writer: bridging silos, amplifying product knowledge, and advocating for users.  

Without that connective tissue, the organization pays — not in tooling fees or API calls, but in **lost alignment, fractured communication, and diminished trust.** When you lose that connective tissue, the organization suffers significant **risk of disruption** and associated costs.

If a company decides to eliminate its technical writing role before a full automation pipeline is in place, there is almost always a **gap period**. In practice, this means:

- **Discrepancies appear within weeks.** Even a single sprint can change workflows, button labels, or navigation paths. Without a writer, these changes go untracked.  
- **Support tickets spike within 3–4 months.** As the gap grows, users encounter stale instructions, outdated screenshots, and broken tutorials.  
- **Confidence erodes.** Both customers and internal teams start to distrust your docs, shifting the burden to support, engineering, and product managers.  

Transition risk is not just theoretical — it is virtually guaranteed. Automation requires **months of engineering investment** to set up and stabilize. During that period, the quality of the documentation declines faster than most leaders expect.

**Cost:** Even if automation eventually reduces ongoing expenses, the *bridge period* can create a hidden support backlog that outweighs any savings.

:::danger
Cutting a technical writer before automation is in place creates a **3–4 month gap period** where docs decay and discrepancies begin to surface.

Expect **$12–15K CAD in costs** from support spikes, internal misalignment, and user frustration — enough to wipe out the first year’s “savings.”
:::


---

# The Bottom Line

Automation may look attractive on a balance sheet. But the reality is more complicated:

- **Setup costs** are higher than expected.  
- **Maintenance costs** never go away.  
- **Intangible costs** shift burden onto more expensive roles.  
- **Transition risks** guarantee a period of degraded user experience.  

The “true cost” of automating technical writing is not just measured in dollars, but in **trust, continuity, and organizational alignment** — the things that determine whether customers stay or churn.
