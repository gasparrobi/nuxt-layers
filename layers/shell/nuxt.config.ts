// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  alias: { "#shell": resolve("../shell/") },
  modules: ["@nuxtjs/tailwindcss"],
});
