<script setup lang="ts">
import Posts from "~/components/post/posts.vue";
import MessageField from "~/components/post/message-field.vue";
</script>
<template>
  <div class="max-w-2xl mx-auto my-4">
    <div class="mb-4">
      <MessageField />
    </div>

    <!-- Listing -->
    <Posts />
  </div>
</template>
