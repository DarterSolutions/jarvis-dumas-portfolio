# Jarvis Dumas Portfolio

Personal portfolio site for **Jarvis Dumas** — software engineer, SaaS builder, Odoo developer, and founder of **Darter Solutions** (Official Odoo Partner).

## Featured work

- **Rival Roster** — multi-sport simulation platform
- **Project Atlas** — quantitative research & trading engine
- **Ghost** — retail monitoring and drop intelligence SaaS
- **Enterprise Odoo Engineering** — Odoo 16–18 implementations & integrations

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Syne + Manrope + JetBrains Mono

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form email

The contact section sends messages through [Resend](https://resend.com).

1. Create a free Resend account (use `Jarvis.Dumas@Outlook.com`).
2. Create an API key.
3. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`.
4. For production on Vercel, add the same env vars in the project settings.

Until a custom domain is verified in Resend, the default from-address `onboarding@resend.dev` can deliver to your Resend account email.

## Content

Copy and structured data live in `src/content/portfolio.ts`. Update that file to change projects, skills, experience, or contact details.

## Deploy

Any Node host works (Vercel recommended):

```bash
npm run build
npm start
```
