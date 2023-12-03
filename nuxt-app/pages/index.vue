<template>
  <div
    class="max-w-5xl border-4 border-dashed rounded-xl px-4 py-2 border-teal-800"
  >
    <h1 class="py-2 font-bold text-lg">Hello I am your main app</h1>
    <p>
      I am utilizing
      <a href="https://nuxt.com/docs/getting-started/layers" target="blank"
        >Nuxt Layers</a
      >. I consist of 2 layer applications, <strong>shell</strong> and
      <strong>utils</strong>, the top navigation and the footer are defined in
      the shell app as part of the default layout, so anyone that uses the shell
      layer will automatically inherit them.
    </p>
    <a href="https://github.com/nuxt/nuxt/issues/13367"
      >Layers/Extends Support Tracker on github</a
    >
    <br />
    <br />
    <p><strong>current limitations:</strong></p>
    <ul class="grid grid-flow-row gap-2 py-2">
      <li v-for="(issue, index) in issues" :key="index" class="pl-1 flex gap-1">
        🟢
        <div v-html="issue" />
      </li>
    </ul>
  </div>
</template>

<script>
import { logMessage } from "../../layers/utils/utils/index";

export default {
  components: {},

  data() {
    return {
      issues: [
        `dependencies from layers are not being auto installed. 
        <a href="https://github.com/nuxt/nuxt/issues/13367" target="blank">issue #13367</a> &
        <a href="https://github.com/unjs/c12/issues/51" target="blank">issue #51</a>`,
        "not sure if vuex or pinia can be used in layers as the stores/ dir is not shared between layers",
      ],
    };
  },

  mounted() {
    logMessage();
    addTwo(2);
  },
};
</script>
