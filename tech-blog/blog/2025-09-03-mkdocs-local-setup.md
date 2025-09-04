---
slug: costs-of-automation
title: Scaffolding Your Docs - Getting Started with MkDocs and Material
authors: [kaywin]
tags: [technical-writing, docs-as-code, mkdocs]
---

Before we automate deployments or build fancy pipelines, let’s start with the basics: getting a  MkDocs project scaffolded on your local machine.

[MkDocs](https://www.mkdocs.org/) is a lightweight static site generator designed for technical documentation. Combined with the popular [Material](https://squidfunk.github.io/mkdocs-material/) theme, it gives you a fast, modern docs site with minimal configuration.

---

## Why use MkDocs?
- **Documentation-first:** Built specifically for writing technical docs in Markdown.  
- **Lightweight:** Minimal dependencies beyond Python.  
- **Extensible:** Plugins and themes let you add search, navigation, diagrams, and more.  
- **CI/CD friendly:** Works smoothly with GitHub Actions and GitHub Pages.  

---

## Requirements
MkDocs is a Python package. To run it locally you’ll need:
- **Python 3.8 or higher** (3.11 recommended to match common CI/CD defaults)  
- **pip** (Python package manager)  

Check your setup:  
```bash title="Bash"
python3 --version
pip --version
```

---

## Step 1: (Optional) Create a Virtual Environment

It’s a good habit to isolate project dependencies. In your project folder:

```bash title="Bash"
python3 -m venv .venv
source .venv/bin/activate   # macOS/Linux
```

As long as an up-to-date version of Pip and Python version 3.8 or higher is installed, you can proceed. Otherwise you'll need to update and install your MkDocs dependencies.

:::tip
If you're using Windows Powershell instead of macOS or Linux the command will be different.
:::

---

## Step 2: Install MkDocs and Material

It’s a good habit to isolate project dependencies. In your project folder:

Use pip to install MkDocs and the Material theme:

```bash title="Bash"
pip install mkdocs mkdocs-material
```

Verify your installation:
```bash title="Bash"
mkdocs --version
```

You should see output like:

```bash title="Bash"
mkdocs, version 1.6.x from ...
```

:::tip
You may need to repeat steps 2 and 3 when switching between branches in Git, unless you use a global environment manager like **pipx** or **Conda**.
:::

---

## Step 3: Scaffold a New Project

MkDocs comes with a simple starter template. Run:
```bash title="Bash"
mkdocs new my-docs
cd my-docs
```

This creates a directory structure:

```
my-docs/
  mkdocs.yml
  docs/
    index.md
```

- mkdocs.yml → configuration file for site name, theme, nav.
- docs/index.md → your first page of documentation.

---

## Step 4: Preview it Locally

Spin up the dev server:

```bash title="Bash"
mkdocs serve
```

You should see the starter site running locally at [http://127.0.0.1:8000](http://127.0.0.1:8000), complete with navigation and a default style.

---

## Step 5: Switch to the Material Theme

Edit `mkdocs.yml` and update it:

```yaml title="YAML"
site_name: My Docs Site
theme:
  name: material
```

You should see the Material theme applied immediately. If needed, press CTRL+C to stop the local dev server, restart `mkdocs serve` and refresh your browser.

--- 

## Step 6: Add Your First Pages

You can add more Markdown files inside the 'docs/' folder and wire them into the navigation.

For example, create 'docs/getting-started.md':

```markdown title="Markdown"
# Getting Started

This is your first custom page.
```

Then add this to `mkdocs.yml`:
```yaml title="YAML"
nav:
  - Home: index.md
  - Getting Started: getting-started.md
```

Reload the browser to see the new page in the nav bar.

---

## What’s Next?

At this point, you have a fully working MkDocs + Material site on your local machine. From here you can:

- Explore Material features like tabs, admonitions, and built-in search.
- Add plugins (e.g., mkdocs-mermaid2 for diagrams).
- Set up Git versioning so your docs evolve alongside your codebase.
- Automate builds and deploys with GitHub Actions (covered in the next article).

---

## Summary

You’ve scaffolded a MkDocs site, applied the Material theme, and served it locally. This foundation is enough to start writing documentation right away.

In the next article, we’ll automate builds and deployment with GitHub Actions, turning your project into a fully docs-as-code workflow.