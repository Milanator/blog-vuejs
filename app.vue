<script lang="ts" setup>
import Header from "~/components/layout/header.vue";
import FlashMessage from "~/components/flash-message.vue";
</script>
<template>
  <Header />
  <div class="bg-slate-50 py-2">
    <NuxtPage />
  </div>

  <FlashMessage />
</template>
