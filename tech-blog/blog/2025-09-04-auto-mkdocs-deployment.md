---
slug: auto-mkdocs-deployment
title: Automating MkDocs Deployment
authors: [kaywin]
tags: [technical-writing, docs-as-code, mkdocs, automation, documentation, automating-documentation]
---

:::note
To kick off a series on automating docs production, here's something new. This post includes a cameo, intended as parody, of one or more characters from the Brooklyn 99 TV show - because even docs pipelines deserve a little squad energy to keep things fun. Don't worry, the jokes are short and the instructions are real.
:::

This article is the first step in building a practical docs-as-code pipeline. It’s aimed at technical writers, developers, and documentation teams who want to automate publishing without copy-and-paste workflows.

By the end, you’ll have a live MkDocs site deploying automatically from GitHub — the foundation that all later automation will build on.

But before we begin, a quick note from our Captain about automation:

*“Even in a pipeline that involves artificial intelligence, discipline remains paramount. Nothing merges without review.”*

Timely advice, and we'll keep that in mind going forward. The intention of automating deployment is not to replace human review, but to simplify it and consolidate it at a single point within the docs-as-code production pipeline - the pull request.

## Why Start with Deployment?

:::tip
*“If deployment fails, don’t come crying. Fix it. Or I’ll smash your laptop.”*
:::

Even though it's the first step, we’re actually working backwards through an AI-augmented docs pipeline. Why? Because no matter what tools you layer in later, you need a reliable backbone:

- Every pull request builds cleanly.
- Main branch auto-deploys to a public site.
- No copy-pasting artifacts.

This post sets up that backbone using MkDocs Material, GitHub Actions, and GitHub Pages. If you're unfamiliar with setting up MkDocs, refer to our earlier post about [scaffolding your docs](https://kaywina.github.io/docs-layer/blog/mkdocs-local-setup).




