# Cess Cruz — Portfolio

Astro + Tailwind CSS. Static site, deployed free on GitHub Pages: https://crzsec14.github.io

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Edit content

Everything you'd want to change is in `src/data/profile.ts`:

- **Experience** — each job is an entry in `experience`; leave `start`/`end` out to hide dates, or add `draft: true` to hide a job.
- **Resume button** — add a public copy of your resume (no phone, address or references) as `public/resume.pdf`, then set `resumeUrl: '/resume.pdf'`.
- Photo is `public/avatar.jpg`.

## Deploy

Pushing to `main` builds and deploys automatically via `.github/workflows/deploy.yml`
(GitHub Pages, source set to **GitHub Actions** in the repo's Settings → Pages).
Check progress in the repo's **Actions** tab.
