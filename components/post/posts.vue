<script setup lang="ts">
import Crud from "~/components/button/crud.vue";
import { usePostStore } from "~/stores/postStore.ts";

const postStore = usePostStore();

postStore.fetchAll();
</script>
<template>
  <div
    v-if="postStore.items.length"
    v-for="post in postStore.items"
    class="w-full bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 mb-4"
  >
    <div class="p-4 dark:bg-gray-800">
      <p class="dark:text-gray-400">
        {{ post.text }}
      </p>
    </div>
    <img :src="post.imageUrl" :alt="post.title" />
    <div class="p-4 dark:bg-gray-800">
      <span class="text-xs text-gray-500">Author: {{ post.userId.email }}</span>
      <Crud :id="post._id" type="post" />
    </div>
  </div>
</template>
