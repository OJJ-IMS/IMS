# IMS Platform — Deployment Guide

## Recommended: Vercel (Free tier)

This is a Next.js 15 app with server-side auth (NextAuth) and a PostgreSQL database.
**GitHub Pages is not suitable** — it only serves static files. Use Vercel instead.

### Step 1 — Database (Neon — free tier)

1. Go to https://neon.tech and create a free account
2. Create a new project → copy the `DATABASE_URL` connection string

### Step 2 — Deploy to Vercel

1. Push this repo to GitHub (it's already on branch `claude/build-ims-saas-platform-wO85p`)
2. Go to https://vercel.com → Import Git Repository
3. Select the repo → Vercel detects Next.js automatically
4. Add these Environment Variables:

| Variable | Value |
|---|---|
| `DATABASE_URL` | Your Neon connection string |
| `NEXTAUTH_SECRET` | Run `openssl rand -base64 32` to generate |
| `NEXTAUTH_URL` | `https://your-vercel-domain.vercel.app` |

5. Click **Deploy**

### Step 3 — Initialise the database

After first deploy, run from your local machine:

```bash
npm install
npx prisma db push
npx prisma db seed
```

This creates the schema and demo login credentials:

| Role | Email | Password |
|---|---|---|
| Admin | admin@demo.co.uk | demo1234! |
| HSQE Manager | hsqe@demo.co.uk | demo1234! |
| Supervisor | supervisor@demo.co.uk | demo1234! |

### Step 4 — Custom domain

In Vercel project settings → Domains → add `www.theims.co.uk`

### Step 5 — GitHub Actions auto-deploy

The workflow at `.github/workflows/deploy.yml` deploys to Vercel on push.
It needs three repo secrets (Settings → Secrets and variables → Actions):

| Secret | Where to get it |
|---|---|
| `VERCEL_TOKEN` | https://vercel.com/account/tokens |
| `VERCEL_ORG_ID` | Run `vercel link` locally → `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Same file as above |

`main` deploys to production; other listed branches deploy as previews.
Re-run any deploy manually via Actions → "Deploy to Vercel" → **Run workflow**.

---

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.example .env
# Edit .env with your DATABASE_URL

# 3. Push schema to DB
npx prisma db push

# 4. Seed demo data
npx prisma db seed

# 5. Start dev server
npm run dev
```

Open http://localhost:3000
