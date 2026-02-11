# Diamond IQ Website

Marketing landing page for [Diamond IQ](https://diamondiqbaseball.com), a baseball training and skills app.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

Hosted on Vercel with automatic deployments from the `main` branch.

**Production URL:** https://diamondiqbaseball.com

To deploy manually:

```bash
vercel --prod
```

## Project Structure

```
diamond-iq-website/
├── app/
│   ├── layout.tsx    # Root layout with SEO metadata
│   ├── page.tsx      # Landing page
│   └── globals.css   # Global styles
├── public/
│   └── logo.png      # Diamond IQ logo
└── CLAUDE.md         # AI assistant context
```

## Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS
- **Font:** Inter
- **Hosting:** Vercel
- **Domain:** diamondiqbaseball.com (DNS via GoDaddy)
