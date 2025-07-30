<script setup lang="ts">
import Feed from "~/components/post/feed.vue";

// authenticated
definePageMeta({ middleware: "auth" });
</script>
<template>
  <div class="max-w-2xl mx-auto my-4">
    <Feed />
  </div>
</template>
