---
slug: choosing-style-guide
title: Choosing a Style Guide for Your Documentation
authors: [kaywin]
tags: [technical-writing, documentation, style guides]
---

While working at Klue, I defined an in-house style guide for our HelpDocs knowledge base. That made sense, because Klue has a unique voice that it uses in its communications, and I wanted that voice to shine through while also making sure the docs were professional and readable. Klue’s documentation also had to comply with [WCAG 2.1](https://www.w3.org/TR/WCAG21/) accessibility standards for compliance.

Although it worked at Klue, creating an in-house style guide completely from the ground up isn’t always the right decision. There are times when it makes more sense to adhere strictly to an existing style guide, or to use an existing one as a foundation and modify it to suit the unique needs of your organization (a hybrid approach).

Whether you’re a technical writer creating a new knowledge base from scratch, a producer at a start-up doing multiple jobs and wondering where to start, or anyone else needing to decide on the standards for learning content, this guide will help you choose how to define your style.

## Why Style Guides Matter

Readers care more about clarity than which guide you choose, but most teams don’t want to reinvent the wheel. The decisions you make when starting your documentation will shape the future of your learning materials. A style guide helps you maintain:
- Consistency
- Trust
- Scalability

It ensures your content doesn’t sound like it’s written by a whole bunch of different people, even if it actually is. If you choose an existing style guide, you ***inherit credibility and avoid future decision fatigue***. If you write your own, you get a ***1:1 match for your own product, audience, and organizational voice.***

## Common Style Guides
The most commonly-used style guides in technical writer are:
- [Microsoft Writing Style Guide](https://learn.microsoft.com/en-ca/style-guide/welcome/)
- [Google Developer Documentation Style Guide](https://developers.google.com/style)
- [Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html)
- [AP Style Book](https://www.apstylebook.com/)

Each of these style guides has an ideal use case:
| Style Guide | Primary Audience | Strengths | Drawbacks |
|-------------|------------------|-----------|-----------|
| **Microsoft Writing Style Guide** | General tech users, product docs | Free, modern, web-based; approachable tone; well-aligned with SaaS/software docs | Sometimes vague on developer-specific content |
| **Google Developer Documentation Style Guide** | Developers, API docs, open source | Clear, concise; excellent for code examples and reference material; free and open | Very developer-centric; may not cover general UX or marketing content |
| **Chicago Manual of Style (CMOS)** | Publishing, academia, long-form writing | Deep authority; widely used in publishing | Overkill for most software docs |
| **AP Stylebook** | Journalists, marketing comms | Good for short-form, press releases, newsy tone | Not ideal for technical docs |

In addition to those big four, there are a couple others that may be worth considering:

- **[Apple Style Guide](https://support.apple.com/en-ca/guide/applestyleguide/welcome/web)** - Good for UI/UX terminology

- **[IBM Style Guide](https://ptgmedia.pearsoncmg.com/images/9780132101301/samplepages/0132101300.pdf)** - Focused on enterprise software

:::tip
Use [Vale CLI](https://vale.sh/) to lint your content for adherence to specific style guide.
:::

## Defining an In-House Guide
If none of the above style guides covers the full needs of your organization, then you should define an in-house style guide. 
There are two options:
- Start from scratch: document everything, including naming, capitalization, voice/tone, screenshot conventions, and formatting rules.
- Take a hybrid approach: choose an existing style guide as your foundation then write an addendum that explains your exceptions and/or additions.

:::tip
Common exceptions that work well include using bold for UI references (e.g. Click the **Finish** button to continue) and italics for positioning statements (e.g. in the *top-right corner* of the page).
:::

Regardless of the approach you choose, try to make it a ***lightweight living doc***, not a 200 page PDF. Keeping it concise makes it easier for your and your team to follow, and more likely that your docs will adhere to it.

Generally, I recommend starting with an existing style guide to reduce the chance of scope creep and formalize best practices early. If you find that your addendum is becoming too unwieldy, then that’s a sign you may need a fully in-house solution.

## How to Decide on a Style Guide
When deciding on a style guide to start with, here are some questions to ask:
- Who is your audience (developers, end users, general public)?
- Are you solo or part of a team?
- Does your org operate in a regulated industry (finance, healthcare)?
- How fast is your content going to scale?
- Do you need global or region-specific English or another language?

### For Different Audiences
If your audience is developers, then Microsoft or Google is your best bet. For end-users, it’s probably worth at least looking through the Apple style guide for some best practices. For the general public, AP is often the most accessible (particularly for web-published content).

### For Specific Industries
Many finance or fintech orgs roll their own to ensure regulatory compliance. The American Medical Association (AMA) style guide is popular in healthcare. Educational industries often use Chicago for research and publishing, and AP or simplified in-house guides for student-facing materials.

### For Team Size
For solo writers, anchoring yourself to an existing style guide helps keep things simple, while teams often require a hybrid approach to ensure consistency. It’s easier to share out a 3-5 page addendum with key rules, than to get people to read through an entire guide online. The larger your team, the more important a clearly documented and enforceable style guide becomes.

### For Growth Rate
For slow-growth orgs, a lightweight set of rules is probably sufficient. For rapid growth, stricter guidelines are needed early to ensure that inconsistencies don’t spread like weeds leading to painful audits and rewrites. A good rule is that, the faster your organization is growing, the more worthwhile it is to invest in documenting style guides and automating linting early.

### For Languages and Dialects
Microsoft and Google style guides focus on international clarity and are good choices for global English. Chicago and AP style guides focus on US English. If you are using UK, Canadian, or Australian English then you’ll likely need to create an addendum to an existing guide.

For companies that require more than one language (e.g. French and English in Canada), you'll likely need an extensive addendum to an existing guide, or a full in-house guide in practice.

## Practical Next Steps
Here are some practical next steps you can take to getting started:
- Pick one external style guide today.
- Make a one-pager of product-specific rules.
- Revisit your style guide once your team/docs scale.

As a bonus: explore automation (implementing a linter and docs-as-code workflows) to enforce style consistently across your documentation as it grows.
