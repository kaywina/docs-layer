---
slug: zendesk-mock-server
title: COpenAPI to Python Client, Part 2 — Mock Servers and Real Calls
authors: [kaywin]
tags: [openapi, swagger, python, mock-server, docs-as-code]
---

In our [previous article](https://kaywina.github.io/docs-layer/blog/zendesk-python-client), we generated a working Python client directly from an OpenAPI/Swagger file — all without needing credentials or a live API.

In this follow-up, we’ll take things further:
- Run a local mock server from the same OpenAPI file, so you get realistic JSON responses without an account.
- Point your generated Python client at the mock and make real calls with `.sync() / .sync_detailed()`.
- Add small touches (retry + environment variables) to improve security, portability, and stability. 

---

## Why mock servers?

Mock servers are incredibly useful for technical writers, developers, and testers. They let you:
- Explore API responses without touching production.
- Work offline or before an API is deployed.
- Develop code samples and tutorials safely.

All you need is the OpenAPI spec you already have!

---

## Step 1: Install Prism (mock server tool)

[Prism](https://github.com/stoplightio/prism) is a lightweight way to turn an OpenAPI spec into a running mock API.

Install via npm (Node.js required):
```bash title="Bash"
npm install -g @stoplight/prism-cli
```

Check it’s available:
```bash title="Bash"
prism --help
```

:::tip
The `g' flag installs Prism globally, so you can run it from any directory.
:::

---

## Step 2: Start the mock server

Assuming your spec is saved as `openapi/oas.yaml`:
```bash title="Bash"
prism mock openapi/oas.yaml --port 4010
```

Prism will start serving endpoints locally:
```bash
http://127.0.0.1:4010
```

Every request returns JSON resposes shaped by the schema (and any example fields) in your spec.

:::tip
Why port 4010? That's the default mock server port, that's unlikely to conflict with common local services. If you dont specify a port, Prism uses 4010 by default. You can specify a different port using the `--port` flag.
:::

---

## Step 3: Point your Python client at the mock

In our previous article, we generated an install a Python client (e.g. help_center_api_client). Now, set its base_url to the mock serve instead of Zendesk.

You can do this inside an examples script:

```python title="Python"
# examples/demo_mock_call.py
import base64
from help_center_api_client import Client
from help_center_api_client.api.articles import list_articles

# 1) Set the base URL
BASE_URL = "http://127.0.0.1:4010"

# 2) Dummy Basic auth header
creds = base64.b64encode(b"dummy:dummy").decode("ascii")
headers = {"Authorization": f"Basic {creds}"}

client = Client(base_url=BASE_URL, headers=headers)

# 3) Make the call (Prism requires locale in this Zendesk spec)
resp_detailed = list_articles.sync_detailed(client=client, locale="en-us")

print("STATUS:", resp_detailed.status_code)
print("PARSED TYPE:", type(resp_detailed.parsed))
print("PARSED VALUE:", resp_detailed.parsed)
```

Using the Zendesk API from our previous article, you should see Status 200 and Lorem Ipsum text in the parsed value.

:::tip
If you run into problems, you may need to set up your virtual environment again. Run `python3 -m venv .venv1` and `source .venv/bin/activate` then `pip install help-center-api-client`. Make sure you are in the same directory as your `pyproject.toml` file!
:::