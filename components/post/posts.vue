<script setup lang="ts">
import Crud from "~/components/button/crud.vue";
import Image from "~/components/post/image.vue";
import Loader from "~/components/loader.vue";
import { usePost } from "~/composables/usePost.ts";
import { usePostStore } from "~/stores/postStore.ts";

const postStore = usePostStore();

const { deletePost } = usePost();
</script>
<template>
  <div
    v-if="!postStore.loading"
    v-for="post in postStore.items"
    class="w-full bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 mb-4"
  >
    <div class="p-4 dark:bg-gray-800">
      <p class="dark:text-gray-400">
        {{ post.text }}
      </p>
    </div>
    <Image :image-url="post.imageUrl" />
    <Crud :id="post._id" type="post" @delete="deletePost(post._id)" />
  </div>
  <Loader v-else />
</template>
