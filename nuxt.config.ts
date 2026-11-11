import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Beespoke Solutions | IT Solutions & Software Development',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Beespoke Solutions builds intelligent digital products and technology-driven services that help organizations operate smarter.',
        },
        { name: 'theme-color', content: '#0c0c0f', media: '(prefers-color-scheme: dark)' },
        { name: 'theme-color', content: '#fbfaf8', media: '(prefers-color-scheme: light)' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://images.unsplash.com' },
      ],
      script: [
        {
          innerHTML: `try {
            var t = localStorage.getItem('beespoke-theme');
            if (t !== 'light' && t !== 'dark') t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.classList.toggle('dark', t === 'dark');
          } catch (e) {}`,
          type: 'text/javascript',
        },
      ],
    },
  },
})
