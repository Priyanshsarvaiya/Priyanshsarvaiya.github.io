# Priyansh Sarvaiya's blog

A minimal Astro blog for notes on AI, LLMs, world models, and AGI.

The site is designed for GitHub Pages at:

```text
https://priyanshsarvaiya.github.io
```

## Local Setup

Install dependencies:

```bash
npm install
```

Copy the example environment file:

```bash
cp .env.example .env
```

Then fill in the values you use locally:

```env
PUBLIC_GA_MEASUREMENT_ID=G-ABC123XYZ9
PUBLIC_DISQUS_SHORTNAME=your-disqus-shortname
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
description: "Short summary for the homepage and SEO."
pubDate: 2026-04-29
updatedDate: 2026-05-01
tags: ["LLMs", "reasoning"]
category: "Research Notes"
draft: false
---
```

`tags` and `category` can stay in frontmatter for organization, but they are not shown in the UI. Set `draft: true` to keep a post out of production pages.

## Analytics

Google Analytics is configured through:

```env
PUBLIC_GA_MEASUREMENT_ID=G-ABC123XYZ9
```

Use the Measurement ID from your GA4 web stream. It starts with `G-`.

For GitHub Pages deployment, add a repository variable named `PUBLIC_GA_MEASUREMENT_ID` in GitHub:

`Settings -> Secrets and variables -> Actions -> Variables -> New repository variable`

## Comments

Disqus comments are configured through:

```env
PUBLIC_DISQUS_SHORTNAME=your-disqus-shortname
```

Use only the shortname, not the full URL. For example, if the embed URL is `https://priyansh-blog.disqus.com/embed.js`, the value should be:

```env
PUBLIC_DISQUS_SHORTNAME=priyansh-blog
```

For GitHub Pages deployment, add a repository variable named `PUBLIC_DISQUS_SHORTNAME` in GitHub.

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
