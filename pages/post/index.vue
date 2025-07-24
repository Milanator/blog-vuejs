<script setup lang="ts">
import { usePostStore } from "~/stores/postStore.ts";
import Posts from "~/components/post/posts.vue";
import MessageField from "~/components/post/message-field.vue";
import Subtitle from "~/components/subtitle.vue";
import { usePost } from "~/composables/usePost.ts";

const postStore = usePostStore();

const { storePost } = usePost();

postStore.clearFields();
</script>
<template>
  <div class="max-w-2xl mx-auto my-4">
    <Subtitle text="New post" />

    <MessageField @submit="storePost" />

    <Subtitle text="Feed" />
    <Posts />
  </div>
</template>
