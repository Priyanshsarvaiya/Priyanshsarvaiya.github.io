# Signal in the Context

A clean, fast Astro blog for Priyansh Sarvaiya focused on AI, LLMs, world models, reasoning, AGI, AI safety, and research notes.

The site is designed for GitHub Pages at:

```text
https://priyanshsarvaiya.github.io
```

## Local Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Writing Posts

Add Markdown or MDX posts in:

```text
src/content/blog
```

Each post should use this frontmatter shape:

```yaml
---
title: "Post title"
description: "Short summary for cards and SEO."
pubDate: 2026-04-29
updatedDate: 2026-05-01
tags: ["LLMs", "reasoning"]
category: "Research Notes"
draft: false
---
```

Set `draft: true` to keep a post out of production pages.

## Deployment

This repository is intended to be named:

```text
Priyanshsarvaiya.github.io
```

To deploy:

1. Push to the `main` branch.
2. In GitHub, open Settings -> Pages.
3. Set Source to GitHub Actions.
4. The workflow in `.github/workflows/deploy.yml` will build and deploy the site.

Because this is a user GitHub Pages repository, `astro.config.mjs` sets `site` to `https://priyanshsarvaiya.github.io` and does not set a `base` path.
