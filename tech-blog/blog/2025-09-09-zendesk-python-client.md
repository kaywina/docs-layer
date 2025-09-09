---
slug: zendesk-python-client
title: Create a Zendesk Python Client with Open AI / Swagger
authors: [kaywin]
tags: [openai, python, swagger, api, docs-as-code]
---

Sometimes as a technical writer, you'll need to connect to REST APIs. APIs allow you to programatically pull information from other knowledge centers. This can be especially useful for docs-as-code automation, where you what to read and/or write help center content via code.

If you’ve ever seen an API described as “OpenAPI/Swagger,” that means there’s a machine-readable file (YAML/JSON) that precisely defines the endpoints, parameters, and responses for the API.You should know - you can feed that file into a generator and get a typed Python client library—ready to import in a script.

This post shows the minimal path from zero to usable Python client, for the [Zendesk Help Center API](https://developer.zendesk.com/api-reference/help_center/help-center-api/introduction/). We’ll browse the spec, generate a client, install the client locally, and peek inside the API - all without requiring a Zendesk account.

---

## What you’ll build

To sum up the learning outcomes for this tutorial, you'll build:
- A local, pip-installable Python package generated from an OpenAPI file.
- Code you can import in your own scripts to explore operations and models.
- A repeatable workflow to demonstrate OpenAPI/Swagger + Python integration.

---

## Prerequisites

Before you begin, you'll need the following:
- [Python](https://www.python.org/) 3.8+ (3.11+ recommended) installed.
- A terminal (macOS, Linux, or Windows).
- An OpenAPI file for any REST API you want to explore (YAML or JSON).

Please note - We’re intentionally **not** using Docker, Java, or Node here. Just Python, to keep things lightweight and simple.

For this tutorial, we're using the [OpenAI spec for the Zendesk Help Center API](https://developer.zendesk.com/api-reference/help_center/help-center-api/introduction/#download-openapi-file). Visit the link to download it.

Zendesk is a popular customer support platform used by businesses to manage requests, FAQs, and self-service resources. Its Help Center product powers searchable knowledge bases and community forums, while the Zendesk APIs let teams programmatically create, update, and organize content. For technical writers, developers, or support engineers, these APIs are a way to automate documentation workflows, sync data across tools, or extend Zendesk beyond its web interface.

:::tip
Many other vendors provide a downloadable OpenAPI spec. You can apply the steps in this article to any of them.
:::

---

## Step 1: Set up your project environment

First, you will need to create a working folder and virtual environment for your project.

```bash title="Bash"
mkdir openapi-python-demo && cd openapi-python-demo
python3 -m venv .venv
# macOS/Linux:
source .venv/bin/activate
# Windows PowerShell:
# .venv\Scripts\Activate.ps1

python -m pip install -U pip
```

*Why this matters*: the virtual environment keeps your experiment self-contained and easy to delete.

---

## Step 2: Install a Python-native OpenAPI client generator

We’ll use openapi-python-client (a pure-Python tool) to avoid Docker or Java.

```bash title="Bash"
pip install openapi-python-client
```

## Step 3: Add your OpenAPI spec file

Save the downloaded OpenAI spec into your project, for example as `openapi/oas.yaml`.

:::tip
If you haven't yet download an OpenAI file, try using the one for the [Zendesk Help Center](https://developer.zendesk.com/api-reference/help_center/help-center-api/introduction/#download-openapi-file).
:::

Some additional notes:
- YAML or JSON formats will both work.
- No login credentials are needed to generate a client.

---

## Step 4: Generate the Python client

From your project root directory, run:
```bash title="Bash"
openapi-python-client generate --path openapi/my-api.yaml
```

This produces a new folder derived from the spec’s title (for example, `help_center_api_client/`) with:
- pyproject.toml (package metadata)
- the actual Python package folder
- README.md (auto-generated usage docs)

If you prefer a specific output folder name, you can run:

```bash title="Bash"
openapi-python-client generate --path openapi/oas.yaml --output-path client
```
If you do, your package will be under the `client/` directory instead.

:::tip
If you are using a different OpenAI spec, or renamed the file, remember to change the filename in your Bash commands to match the name of your particular file.
:::

---

## Step 5: Install the generated client locally

Run the following line to install and editable (dev) version of the client:

```bash title="Bash"
pip install -e ./help_center_api_client
```

This makes the package importable in your environment, so you can start exploring it.

Congratulations! You've completed creating a Python client using Swagger!

---

## Optional: Peak inside and/or view in Swagger UI

Now that you've installed the Python client, you can try running a short script that lists what the generator produced. This works even if you don’t have an account or credentials:

```python title="Python"

```

