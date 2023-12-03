// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  extends: [
    "github:gasparrobi/nuxt-layers/layers/shell",
    "github:gasparrobi/nuxt-layers/layers/utils",
  ],
  typescript: {
    includeWorkspace: true,
  },
});
