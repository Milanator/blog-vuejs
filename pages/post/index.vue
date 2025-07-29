<script setup lang="ts">
import { usePostStore } from "~/stores/postStore.ts";
import Posts from "~/components/post/posts.vue";
import MessageField from "~/components/post/message-field.vue";
import InfiniteScrollContainer from "~/components/infinite-scroll-container.vue";
import Subtitle from "~/components/subtitle.vue";
import { usePost } from "~/composables/usePost.ts";

// authenticated
definePageMeta({ middleware: "auth" });

const postStore = usePostStore();

const { storePost, loadPosts } = usePost();

postStore.clearFields();

loadPosts();
</script>
<template>
  <div class="max-w-2xl mx-auto my-4">
    <Subtitle text="New post" />

    <MessageField @submit="storePost" />

    <Subtitle text="Feed" />
    <InfiniteScrollContainer :load-more="loadPosts">
      <Posts />
    </InfiniteScrollContainer>
  </div>
</template>
