# Amirreza Ramezani — Portfolio

A responsive personal portfolio built with Next.js 15, React 19 and TypeScript. The visual design and original content have been retained while the codebase is organized into reusable components and separate data modules.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```text
site/
├── app/
│   ├── globals.css          # Global styles and responsive rules
│   ├── layout.tsx            # Root layout and SEO metadata
│   └── page.tsx              # Home page composition
├── components/
│   ├── layout/
│   │   └── Navbar.tsx        # Sticky site navigation
│   ├── sections/             # Independent page sections
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Designs.tsx
│   │   ├── Hero.tsx
│   │   ├── IndexSection.tsx
│   │   ├── Process.tsx
│   │   ├── Projects.tsx
│   │   └── Services.tsx
│   └── ui/
│       └── ProjectCard.tsx   # Reusable project card
├── data/                     # Editable content, separate from presentation
│   ├── designs.ts
│   ├── navigation.ts
│   ├── process.ts
│   ├── projects.ts
│   └── services.ts
├── public/
│   └── images/               # Portfolio images extracted from the PDF
├── package.json
└── tsconfig.json
```

## Where to edit content

- Projects: `data/projects.ts`
- Services: `data/services.ts`
- Process steps: `data/process.ts`
- Design gallery: `data/designs.ts`
- Navigation and index: `data/navigation.ts`
- Section layout and content: `components/sections/`
- Visual styling: `app/globals.css`
