<template>
  <nav
    class="navigation p-5 grid grid-flow-row justify-items-center border-4 border-dashed rounded-xl border-[#06038d] bg-slate-100 text-slate-600 font-bold"
  >
    <div class="w-full max-w-5xl text-left">
      <h1>Hello I am your navigation from shell layer</h1>
    </div>

    <div class="w-full max-w-5xl text-left">
      <button
        class="py-2 px-4 border border-2 border-black hover:bg-slate-300"
        @click="onIncrement"
      >
        increment
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();

const onIncrement = () => {
  counterStore.increment();
};
</script>
