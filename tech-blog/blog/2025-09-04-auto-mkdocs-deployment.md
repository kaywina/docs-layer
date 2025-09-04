---
slug: auto-mkdocs-deployment
title: Automating MkDocs Deployment
authors: [kaywin]
tags: [technical-writing, docs-as-code, mkdocs, automation, documentation, automating-documentation]
---

:::note
Here's something new to kick off a series of posts on automating docs production. This post includes a cameo, intended as parody, of one or more characters from the hit comedy sitcom Brooklyn 99 - because even docs pipelines deserve a little squad energy to keep things fun.

Don't worry, the jokes are short and the instructions are real.
:::

This article is the first step in building a practical docs-as-code pipeline. It’s aimed at technical writers, developers, and documentation teams who want to automate publishing without copy-and-paste workflows.

By the end, you’ll have a live MkDocs site deploying automatically from GitHub — the foundation that all later automation will build on.

But before we begin, a quick note from our Captain about automation:

*“Even in an automated deployment pipeline, discipline is paramount. Nothing merges without human review.”*

Timely advice, and we'll keep that in mind going forward. The intention of automating deployment is not to replace human oversight, but to simplify and consolidate it at a single point within the docs-as-code production pipeline - the pull request (PR).

---

## Why Start with Deployment?

:::tip
*“If deployment fails, don’t come crying. Fix it. Or I’ll smash your laptop.”*
:::

Even though it's the first step, we’re actually working backwards through an AI-augmented docs pipeline.

Why? Because no matter what tools you layer in later, you need a reliable backbone:

- Every pull request builds cleanly.
- Main branch auto-deploys to a public site.
- No copy-pasting artifacts.

This post sets up that backbone using MkDocs Material, GitHub Actions, and GitHub Pages. Need help setting up MkDocs? Refer to this post on [scaffolding your docs](https://kaywina.github.io/docs-layer/blog/mkdocs-local-setup).

---

## Step 1 - Bootstrap the Repository

:::tip
*“Start clean. If your repo’s a mess, you deserve whatever happens next.”*
:::

Once you've installed MkDocs, create a new repo (e.g. docs-pipeline-demo).

Inside it, add the following files:

```
mkdocs.yml
docs/index.md
docs/pipeline/overview.md
.github/workflows/deploy.yml
```

---

## Step 2 - Provide a Minimal Config

:::tip
*“Configurations are like knives—simple, sharp, and dangerous if you’re careless.”*
:::

Add the following content to the `mkdocs.yml` file:
```yaml title="YAML"
site_name: Docs Pipeline Demo
repo_url: https://github.com/YOURUSER/docs-pipeline-demo
theme:
  name: material
  features:
    - navigation.tabs
    - content.code.copy
markdown_extensions:
  - admonition
  - toc:
      permalink: true
nav:
  - Home: index.md
  - Pipeline:
      - Overview: pipeline/overview.md
```

---

## Step 3 - Create Starter Pages
:::tip
*“Write something minimal. If you over-explain, I’m not reading it.”*
:::

Add some content to `docs/index.md`:

```markdown title="Markdown"
# Docs Pipeline Demo
We’re building a docs-as-code pipeline in reverse: start with deployment, then layer on accessibility, diagrams, drafting, synthesis, research, and source intake.
```

Then add some content to `docs/pipeline/overview.md`:
```markdown title="Markdown"
# Pipeline Overview
This pipeline is automated end-to-end:
- PRs → preview builds
- main branch → live deploy
- One manual step remains: human review before merge
```

---

## Step 4 - Implement the CI/CD Workflow
:::tip
“Automation doesn’t care about your feelings. Get it right, or watch it fail.”
:::

Before creating the workflow for automated publishing, you'll need to enable GitHub Pages in your repo. Go to **Settings → Pages**, select **GitHub Actions** as the source, and save. This tells GitHub where to serve the site once the workflow runs.

Once you've enabled GitHub Pages, you can create the workflow file for continuous integration / continuous deployment. Add the following content to `.github/workflows/deploy.yml`:

```yaml title="YAML"
name: Build and Deploy MkDocs
on:
  push:
    branches: [ main ]
  pull_request:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      - run: pip install mkdocs mkdocs-material
      - run: mkdocs build --strict
      - uses: actions/upload-artifact@v4
        if: github.event_name == 'pull_request'
        with:
          name: site
          path: site

  deploy:
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      - run: pip install mkdocs mkdocs-material
      - run: mkdocs build --strict
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./site
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## Step 5 - Test the Deployment
:::tip
If the preview artifact isn’t there, you screwed something up. Go fix it.”
:::

After you create the Git Actions workflow, when a PR is generated, the action runs `mkdocs build` and attaches the compiled `site/` folder as an artifact for preview.

When that PR is merged into the `main` branch, it builds again and auto-deploys to GitHub Pages. 

This process still requires manual review of the PR before merging. After you merge a PR and the GitHub Action completes, you can go to your live site to view the changes.

---