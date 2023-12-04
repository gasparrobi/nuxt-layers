// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["../layers/shell", "../layers/utils"],
  modules: ["@pinia/nuxt"],
  typescript: {
    includeWorkspace: true,
  },
});
