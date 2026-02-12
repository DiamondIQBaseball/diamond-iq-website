# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## For All Code Changes

1. Create feature branch
2. Make changes and commit (Don't add co-author)
3. Push branch and open a pull request (Don't add co-author)
4. Manual review before merging

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
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Hero landing page
│   ├── globals.css             # Tailwind styles
│   ├── actions/
│   │   └── contact.ts          # Contact form server action
│   ├── components/
│   │   └── ContactForm.tsx     # Contact form component
│   └── lib/
│       └── supabase.ts         # Supabase client (server-only)
└── public/
    └── logo.png                # Diamond IQ logo
```

## Environment Variables

Required in Vercel (project-level settings):

| Variable | Description |
|----------|-------------|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key for server-side DB access |

## Contact Form

The landing page includes a contact form that stores submissions in Supabase:
- Server action handles validation and insert
- Uses `server-only` import to prevent key leakage
- Honeypot field for basic spam protection
- Data stored in `contact_submissions` table (see diamond-iq-supabase)

## Brand Colors

- **Primary Navy**: `#1a365d`
- **Accent Cyan**: `#00b4d8`
- **Background**: Black

## Adding Sections

To expand the landing page:
1. Edit `app/page.tsx` to add new sections
2. Consider extracting components to `components/` if needed
3. Deploy with `vercel --prod`
