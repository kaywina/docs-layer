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