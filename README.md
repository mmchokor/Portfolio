# Portfolio v2

The personal portfolio of Mohamed Chokor, a software engineer with a backend and .NET specialty. Version 2 is a full redesign and migration from the original Vite SPA to Next.js.

Production: [chokor.cc](https://chokor.cc)

## Stack

- Next.js App Router and React
- TypeScript
- Tailwind CSS
- Vercel Analytics
- Next.js Metadata, sitemap, robots, structured data, and dynamic Open Graph image

Most of the site is statically rendered with Server Components. Client JavaScript is limited to navigation and the contact form.

## Local development

Node.js 22 is required.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Structure

- `src/app` — routes, metadata, global styles, sitemap, robots, and social image
- `src/components` — interactive and reusable sections
- `src/data/profile.ts` — typed career, skills, education, and project content
- `public` — resume and optimized image assets

## Deployment

The project deploys through Vercel's standard Next.js detection. Keep the production domain set to `https://chokor.cc`; preview deployment URLs are not used as canonical URLs. No custom `vercel.json` or paid Vercel feature is required.
