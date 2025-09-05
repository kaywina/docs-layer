---
slug: automate-without-replacing
title: Automation Without Replacement - How to Leverage CI/CD for Docs
authors: [kaywin]
tags: [technical-writing, docs-as-code, mkdocs, automation, automating-documentation]
---

For the past decade, “automation” has been a loaded word in tech writing circles. To some, it sounds like a promise of efficiency. To others, it sounds like a threat: will scripts and bots replace the need for writers altogether? My experience says otherwise. Automation is powerful but only when it serves the human work of communication, not when it tries to replace it.

:::tip
Automation doesn’t replace technical writers — it removes friction so they can focus on clarity, structure, and user empathy.
:::

---

## The Case for Automation in Docs

Technical writers spend an incredible amount of time on tasks that don’t actually involve writing. 

Things like:
- Manually checking builds
- Copying content between environments
- Nudging stakeholders for review
- Fixing minor formatting issues

These aren’t bad tasks — they’re part of the job — but they’re also repetitive and distract from the real value writers bring: shaping information so people can use products with less friction.

That’s where automation shines. Not as a replacement for writers, but as a support system.

---

## What Automation Looks Like in Practice

At its core, docs automation usually means plugging documentation into the same **CI/CD (Continuous Integration / Continuous Deployment)** pipelines engineers already use.

A simple example:
- Every time you push a branch to GitHub, a workflow runs.
- That workflow builds your documentation site and spins up a preview.
- Reviewers can comment on the preview without needing to run anything locally.

The result?
- Fewer “works on my machine” headaches.
- Faster review cycles.
- A clear paper trail of changes.

The writer isn’t automated away — they’re supported. They spend less time wrangling environments and more time ensuring the docs are accurate and readable.

For example, here’s a simple GitHub Actions workflow that builds a docs preview every time someone opens a pull request. It’s less than 20 lines of YAML, but it saves hours of back-and-forth during reviews:

```yaml title="YAML"
name: Build Docs Preview

on:
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
```

The point isn’t to master YAML — it’s to give your stakeholders a preview link instead of a wall of Markdown.

---

## Why You Still Need a Technical Writer

Automation can build a site, but it can’t decide:
- How to structure content so users can find it quickly.
- Whether a sentence is clear or overloaded with jargon.
- How to balance engineering precision with user empathy.

These are judgment calls, and they’re where technical writers earn their place at the table.

By letting automation handle the mechanical tasks, writers can lean harder into the human skills — the skills that actually make documentation effective.

---

## Getting Started With Simple Automation

You don’t need to become a DevOps specialist to benefit from automation.

Some lightweight steps:
- Use a docs-as-code setup (e.g., Markdown + GitHub Pages).
- Add a simple GitHub Actions workflow for preview builds.
- Ask your engineering team how you can piggyback on their existing CI/CD.

The goal isn’t to master YAML pipelines — it’s to make review and publishing easier for everyone on your team.

---

## The Bigger Picture

Automation isn’t the end of technical writing. It’s the beginning of a more focused, more strategic kind of writing.

When writers aren’t bogged down by build errors or manual publishing, they have more energy for the work that actually moves the needle: making complex systems usable.

In the next post, I’ll share what it looks like to set up a lightweight docs-as-code workflow without going full engineer.