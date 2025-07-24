<script setup lang="ts">
import { usePostStore } from "~/stores/postStore.ts";
import MessageField from "~/components/post/message-field.vue";

const postStore = usePostStore();

const route = useRoute();

postStore.setPost(route.params.id);
</script>
<template>
  <div class="max-w-2xl mx-auto my-4">
    <MessageField />
  </div>
</template>
