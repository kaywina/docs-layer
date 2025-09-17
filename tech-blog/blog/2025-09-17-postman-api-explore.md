---
slug: postman-api-explore
title: From Spec to Scan - Exploring a Security API with Postman
authors: [kaywin]
tags: [OpenAPI, Swagger, Postman, security, CVE]
---

## Introduction

Every time you click a link, there’s a question of trust. Is the site safe to visit? Has it been flagged for malware, phishing, or suspicious redirects? Security analysts and developers often need quick ways to answer those questions at scale.

That’s where [urlscan.io](https://urlscan.io) comes in. It’s a public service that scans and analyzes websites, then makes the results available through a developer-friendly API. You can query for known malicious domains, submit new URLs for scanning, and retrieve detailed reports on how a site behaves.

What makes urlscan.io especially useful for our purposes is that it publishes an **OpenAPI specification**. This spec describes the API’s endpoints in a machine-readable format that tools can import directly.

In this tutorial, we’ll use the urlscan.io spec to explore the API in Postman, and run a live search against a real domain.

By the end, you’ll not only see how urlscan.io can help with web security analysis, but also how the OpenAPI to Postman workflow makes it easier for writers and developer to explore and use a cybersecurity API. 

---

## Prerequisites

Before we begin, there are a couple of requirements you'll need:
- A [Postman](https://www.postman.com/) account (a free account is fine; required to import, explore, and test the API)
- A [urlscan.io](https://urlscan.io/) account (required to get an API key)

Once you have these two accounts set up, you can proceed to the next section.

---

## Getting the OpenAPI Spec

Before we can explore the API, we need its **OpenAPI specification file**. This file acts like a blueprint: it describes all the available endpoints, their inputs and outputs, and even example payloads.

For this tutorial, we’ll use the urlscan.io OpenAPI/Swagger specification, available at `https://docs.urlscan.io/_spec/apis/urlscan-openapi.json`

If you visit the link, you'll see the spec in JSON format. The beauty of OpenAPI is that tools like Postman can import this JSON file and give you a much friendlier interface for exploring it.

Think of the OpenAPI spec as the single source of truth: if the API changes, updating this file automatically updates your testing and documentation environments. We'll feed the OpenAPI spec file into Postman in the next section.

---

## Exploring with Postman

With the **OpenAPI** spec in hand, we can use Postman to explore the API without writing a single line of code.

Postman’s import feature understands OpenAPI and will automatically generate a collection of requests you can run and tweak.

### Step 1: Import the Spec

First, let's get you set up with the OpenAPI spec imported into Postman:
- Open [Postman](https://www.postman.com/) and login to your account
- Once you're in the platform, click the **Import** button:
![Screenshot showing Import button in Postman.](/img/blog/postman-import-spec.png)
- Paste in the URL for the OpenAPI spec - `https://docs.urlscan.io/_spec/apis/urlscan-openapi.json`

Postman will generate a new collection which you can access via the *left-hand sidebar*.

:::tip
Import the spec as an **OpenAPI 3.0 Specification with a Postman Collection** so you don't lose the OpenAPI metadata, which provides the structured context.
:::

### Step 2: Browse the Endpoints

Now that you've imported the spec into Postman, you can browse the API endpoints:
- Expand the collection in Postman’s *left-hand sidebar*
- You’ll see various endpoints in the `/api/v1` folder
- Each endpoint has the **method** (GET, POST, etc.) and **path**

Feel free to explore the API and check out the various endpoints available.

---

### Step 3: Run a Sample Query

Let’s try scanning a real URL:
- Open the endpoint for `POST /api/vi/scan`
- Click on the **Body** tab, and replace the example URL with the URL you want to scan:
![Screenshot showing Body tab in Postman](/img/blog/urlscan-body-json.png)
- You'll also need to add a urlscan.io API key to the **Auth** tab:
![Screenshot showing Auth tab in Postman](/img/blog/urlscan-auth-tab.png)

Make sure you select "API Key" as the **Auth Type** and paste your real key into the **Value** field.

:::tip
To get your API Key, log into [urlscan.io](https://urlscan.io/) then click on **Settings & API** in the *left-hand sidebar*. Click the **New API Key** button, give it a name (i.e. "Postman Test"), then click **Create API Key**. Your new API key will be partially blurred out for privacy, but you can still copy and paste it into Postman.
:::

---

### Step 4 - View the report

Now that you've successfully made the POST request, you can view the report:
- Copy the **result** URL from the output in Postman:
![Screenshot showing query result in Postman](/img/blog/postman-query-result.png)
- Paste the report URL into a new browser tab

Once available, the report tells you which IPs in what countries were contacted and through which domains, identifies security certificates and their issuing authorities, and provides a variety of other useful facts and statistics.

:::tip
It can take a minute or two for the report to be ready, so be patient if you can't access it immediately.
:::

---

### Step 5 (Optional): Generate code snippets

One of Postman’s most useful features is the **Code** button in the *right-hand sidebar*.

Click it to get ready-to-use snippets in Python, JavaScript, cURL, and other languages:
![Screenshot showing code snippet in Postman](/img/blog/postman-code-snippet.png)

Use the dropdown to select different languages for the code snippets. You can also access a variety of settings for the code via the gear icon in the *top-right corner*.

:::tip
As a technical writer, you can provide these snippets in your docs to help your team integrate with APIs faster.
:::

---




