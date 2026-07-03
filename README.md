# Vincent Angelo Tafalla Portfolio

A modern React, Vite, and Tailwind CSS portfolio built for deployment on Vercel.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React

## Run Locally

```bash
corepack pnpm install
corepack pnpm dev
```

## Verify Before Deploying

```bash
corepack pnpm test
corepack pnpm run build
```

## Vercel Deployment

The repository includes `vercel.json` so Vercel uses the expected project settings:

- Framework Preset: Vite
- Install Command: `pnpm install --frozen-lockfile`
- Build Command: `pnpm run build`
- Output Directory: `dist`
- Root Directory: repository root

For the Vercel dashboard, connect the project to `Binsentt/My-Portfolio` and deploy from the `main` branch.

## Edit Portfolio Content

Most personal details, skills, projects, and contact links live in:

```text
src/data/portfolio.js
```

Replace `public/resume.pdf` with the latest resume PDF whenever needed.
