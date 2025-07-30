<script setup lang="ts">
import { usePostStore } from "~/stores/postStore.ts";
import { usePost } from "~/composables/usePost.ts";
import MessageField from "~/components/post/message-field.vue";
import Subtitle from "~/components/subtitle.vue";

// authenticated
definePageMeta({ middleware: "auth" });

const route = useRoute();

const postStore = usePostStore();

const { updatePost } = usePost();

postStore.setPost(route.params.id);
</script>
<template>
  <div class="max-w-2xl mx-auto my-4">
    <Subtitle text="Edit post" />

    <MessageField @submit="updatePost" />
  </div>
</template>
