<template>
  <div class="app-shell h-full grid grid-flow-row grid-rows-[auto_1fr_auto]">
    <Navigation />
    <main class="p-5 grid min-w-[100vw] justify-items-center">
      <slot />
    </main>
    <analytics />
    <VFooter />
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import VFooter from "../components/Footer.vue";
import Analytics from "../components/analytics.vue";
import "../globals.scss";

export default {
  components: {
    Navigation,
    VFooter,
    Analytics,
  },
};
</script>

<style lang="scss" scoped></style>
