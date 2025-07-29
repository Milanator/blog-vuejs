<script setup lang="ts">
import { useAppStore } from "~/stores/appStore.ts";

const appStore = useAppStore();
</script>
<template>
  <div v-if="appStore.flashMessage" class="fixed bottom-2 right-2" role="alert">
    <div
      v-for="flashMessage in appStore.flashMessage"
      class="p-4 mb-4 text-sm text-green-800 rounded-2xl bg-green-50 dark:bg-gray-800 dark:text-green-400"
    >
      <span class="font-medium">{{ flashMessage.message }}</span>
    </div>
  </div>
</template>
