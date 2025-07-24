<script lang="ts" setup>
import Header from "~/components/layout/header.vue";
import FlashMessage from "~/components/flash-message.vue";
</script>
<template>
  <Header />
  <div>
    <NuxtPage />
  </div>

  <FlashMessage />
</template>
