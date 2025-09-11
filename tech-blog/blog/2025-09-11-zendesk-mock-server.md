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