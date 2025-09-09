---
slug: zendesk-python-client
title: Create a Zendesk Python Client with Open AI / Swagger
authors: [kaywin]
tags: [openapi, python, swagger, api, docs-as-code]
---

Sometimes as a technical writer, you'll need to connect to REST APIs. APIs allow you to programatically pull information from other knowledge centers. This can be especially useful for docs-as-code automation, when you want to read and/or write help center content via code.

If you’ve ever seen an API described as “OpenAPI/Swagger,” that means there’s a machine-readable file (YAML/JSON) that precisely defines the endpoints, parameters, and responses for the API. You can feed that file into a generator and get a typed Python client library ready to import in a script.

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

For this tutorial, we're using the [OpenAPI spec for the Zendesk Help Center API](https://developer.zendesk.com/api-reference/help_center/help-center-api/introduction/#download-openapi-file). Visit the link to download it.

Zendesk is a popular customer support platform used by businesses to manage requests, FAQs, and self-service resources. Its Help Center product powers searchable knowledge bases and community forums, while the Zendesk APIs let teams programmatically create, update, and organize content. For technical writers, developers, or support engineers, these APIs are a way to automate documentation workflows, sync data across tools, or extend Zendesk beyond its web interface.

:::tip
If you want to click around the endpoints before coding, open the [Swagger Editor](https://editor.swagger.io/) and paste in the contents of your OpenAPI YAML/JSON file. You'll get interactive docs for the API which you can explore.


Many other vendors provide a downloadable OpenAPI spec. You can use Swagger UI to explore those, and apply the steps in this article to any of them.
:::

---

## Step-by-Step Tutorial

### Step 1: Set up your project environment

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

### Step 2: Install a Python-native OpenAPI client generator

We’ll use openapi-python-client (a pure-Python tool) to avoid Docker or Java.

```bash title="Bash"
pip install openapi-python-client
```

### Step 3: Add your OpenAPI spec file

Save the downloaded OpenAPI spec into your project, for example as `openapi/oas.yaml`.

:::tip
If you haven't downloaded an OpenAPI file yet, try using the one for the [Zendesk Help Center](https://developer.zendesk.com/api-reference/help_center/help-center-api/introduction/#download-openapi-file).
:::

Some additional notes:
- YAML or JSON formats will both work.
- No login credentials are needed to generate a client.

---

### Step 4: Generate the Python client

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
If you are using a different OpenAPI spec, or renamed the file, remember to change the filename in your Bash commands to match the name of your particular file.
:::

---

### Step 5: Install the generated client locally

Run the following line to install an editable (dev) version of the client:

```bash title="Bash"
pip install -e ./help_center_api_client
```

This makes the package importable in your environment, so you can start exploring it.

Congratulations! You've completed creating a Python client using Swagger!

---

## Optional: Peek inside the API

Now that you've installed the Python client, you can try running a short script that lists what the generator produced. This works even if you don’t have an account or credentials:

```python title="Python"
# examples/what_got_generated.py
import pkgutil
import importlib
import sys

# change this to the actual package name printed by the generator
PACKAGE = "help_center_api_client"

def list_submodules(package_name: str):
    pkg = importlib.import_module(package_name)
    print(f"Top-level package: {package_name}")
    for m in pkgutil.iter_modules(pkg.__path__):
        print(" -", m.name)

    # The generator usually exposes operations under <pkg>.api.<tag>
    api_pkg_name = f"{package_name}.api"
    try:
        api_pkg = importlib.import_module(api_pkg_name)
        print(f"\nAPI modules in {api_pkg_name}:")
        for m in pkgutil.iter_modules(api_pkg.__path__):
            print(" -", m.name)
    except ModuleNotFoundError:
        print("\nNo .api package found (this can vary by spec and generator version).")

if __name__ == "__main__":
    list_submodules(PACKAGE)
```

Then run the script with:

```bash title="Bash"
python examples/what_got_generated.py
```

You’ll see the API modules (grouped by “tags” from the spec) and supporting packages like models and types.

For the Zendesk Help Center API, the output will look like:

![Top-level contents of the Zendesk Help Center API](/img/blog/peek-api-contents.png)

---

## What we did and why it matters

Here's a summary of your learnings from this tutorial:
- OpenAPI/Swagger is the contract between your Python client and the API.
- `openapi-python-client` turned the contract into a typed Python package.
- You installed and inspected that package locally without touching a live server.

This is the heart of modern API work: treat the spec as a source of truth, then generate assets (clients, tests, docs) from it.

---
## Common pitfalls & quick fixes

*I don’t see the package I expected.*
The output folder name comes from the spec’s info.title. Use `--output-path` to control it.

*ImportError: can’t import my package.*
Make sure you activated the virtual environment and ran `pip install -e ./help_center_api_client` (or the whatever the correct path is for the OpenAPI spec you are using).

*The generator warned about the spec.*
Some specs have minor issues (e.g., anonymous schemas). Try:
```bash title="Bash"
openapi-python-client generate --path openapi/oas.yaml --fail-on-warning
```
Follow the line number hints, or ask your API owner for a cleaned spec.

*How do I actually call the API?*
You’ll typically create a `Client` or `AuthenticatedClient` from the generated package, set `base_url`, and pass credentials (e.g., Basic auth or OAuth - whatever the spec declares).

We’ll cover mock server calls in a later post. If you're curious, you can see the full code for this tutorial in [this GitHub repo](https://github.com/kaywina/zendesk-help-center-python-client).
