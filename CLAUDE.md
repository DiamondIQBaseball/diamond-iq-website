# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install                     # Install dependencies
npm run dev                     # Dev server (port 3000)
npm run build                   # Production build
npm run lint                    # ESLint
vercel --prod                   # Deploy to production
```

## Overview

Marketing landing page for Diamond IQ baseball training app. Simple static site deployed to Vercel with custom domain.

## Deployment

- **URL**: https://diamondiqbaseball.com
- **Hosting**: Vercel
- **DNS**: GoDaddy

## Structure

```
diamond-iq-website/
├── app/
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Hero landing page
│   └── globals.css   # Tailwind styles
└── public/
    └── logo.png      # Diamond IQ logo
```

## Brand Colors

- **Primary Navy**: `#1a365d`
- **Accent Cyan**: `#00b4d8`
- **Background**: Black

## Adding Sections

To expand the landing page:
1. Edit `app/page.tsx` to add new sections
2. Consider extracting components to `components/` if needed
3. Deploy with `vercel --prod`
