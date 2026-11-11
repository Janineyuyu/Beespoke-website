# Beespoke Solutions - Nuxt + TypeScript

Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS v4 application.

## Development & Build Commands

- `npm run dev` - Start the Nuxt development server
- `npm run build` - Build the application for production (Nitro node-server)
- `npm run generate` - Pre-render static pages to `.output/public`
- `npm run preview` - Preview the production build
- `npm run postinstall` - Run `nuxt prepare` to generate `.nuxt` types

## Project Structure

This project follows Nuxt 4's recommended directory architecture:

```text
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css            # Global CSS entrypoint & Tailwind CSS v4
│   ├── components/
│   │   ├── ui/                     # Generic UI primitives (UiButton, UiTextField, UiReveal, etc.)
│   │   ├── cards/                  # Reusable card components (ProductCard, ServiceCard, StoryCard, etc.)
│   │   ├── navigation/             # AppHeader, AppFooter, ThemeToggle
│   │   ├── forms/                  # ContactForm, DemoDialog, FormNotice, SubmitButton
│   │   ├── mockups/                # Interactive UI mockups for product preview
│   │   └── sections/               # Page section blocks (Hero, Products, Features, About, etc.)
│   ├── composables/                # Reusable stateful logic (useTheme, useDemo, useFormState, useActiveSection)
│   ├── layouts/
│   │   └── default.vue             # Global application layout (skip link, header, main, footer, demo modal)
│   ├── pages/
│   │   ├── index.vue               # Landing page
│   │   ├── products/[slug].vue     # Dynamic product detail pages
│   │   ├── legal/[doc].vue         # Dynamic legal pages
│   │   └── [...slug].vue           # 404 Not Found page
│   ├── utils/                      # Pure helper functions (formatting, validation, classnames)
│   ├── app.vue                     # Root app component
│   └── error.vue                   # Global error page
├── server/
│   └── api/
│       └── submit.post.ts          # Server-side form delivery endpoint
├── shared/
│   ├── content/                    # Application content data (company, nav, products, services, stories)
│   └── types/                      # Shared TypeScript definitions
├── public/                         # Public assets (brand marks, favicon, etc.)
├── nuxt.config.ts                  # Nuxt configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Project metadata & scripts
```

## Dependencies & Stack

- Framework: Nuxt 4 (Vue 3 Composition API, `<script setup lang="ts">`)
- Icons: `lucide-vue-next`
- Styling: Tailwind CSS v4 with `@tailwindcss/vite`
- Type checking: TypeScript 5.7
