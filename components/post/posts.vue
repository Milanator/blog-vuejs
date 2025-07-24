<script setup lang="ts">
import Crud from "~/components/button/Crud.vue";
import { usePostStore } from "~/stores/postStore.ts";

const postStore = usePostStore();

postStore.fetchAll();
</script>
<template>
  <div
    v-if="postStore.items.length"
    v-for="post in postStore.items"
    class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4 mt-8"
  >
    <div class="p-4 md:p-8 dark:bg-gray-800">
      <h2
        class="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white"
      >
        {{ post.title }}
      </h2>
      <p class="my-3 text-gray-500 dark:text-gray-400">
        {{ post.text }}
      </p>
      <span class="text-xs text-gray-500">Author: {{ post.userId.email }}</span>

      <Crud />
    </div>
  </div>
</template>
