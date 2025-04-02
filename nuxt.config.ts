/* eslint-disable @typescript-eslint/naming-convention */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    dataValue: 'theme', // activate data-theme in <html>
    preference: 'light', // default theme
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  i18n: {
    defaultLocale: 'fr',
    detectBrowserLanguage: false,
    langDir: 'lang',
    lazy: true,
    locales: [
      {
        code: 'en',
        dir: 'ltr',
        file: 'en-EN.json',
        iso: 'en-EN',
        name: 'English',
      },
      {
        code: 'fr',
        dir: 'ltr',
        file: 'fr-FR.json',
        iso: 'fr-FR',
        name: 'Français',
      },
    ],
    vueI18n: './i18n.config.ts',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vee-validate/nuxt',
    '@hebilicious/vue-query-nuxt',
    '@nuxtjs/i18n',
    'nuxt-svgo',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
  ],
  tailwindcss: {
    configPath: './tailwind.config.ts',
    editorSupport: { autocompleteUtil: { as: 'tailwindClasses' }, generateConfig: true },
  },
  typescript: { typeCheck: true },
})