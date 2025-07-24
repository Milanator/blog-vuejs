<script setup lang="ts">
import { useAppStore } from "~/stores/appStore.ts";

const appStore = useAppStore();
</script>
<template>
  <div
    v-if="appStore.flashMessage"
    class="fixed bottom-2 right-2 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
    role="alert"
  >
    <span class="font-medium">{{ appStore.flashMessage.message }}</span>
  </div>
</template>
