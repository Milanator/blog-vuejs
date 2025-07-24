<script setup lang="ts">
import { usePostStore } from "~/stores/postStore.ts";
import { usePost } from "~/composables/usePost.ts";
import ImageField from "~/components/post/image-field.vue";

const postStore = usePostStore();

const { text } = usePost();
</script>
<template>
  <div
    class="mb-4 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="px-4 pt-4">
      <textarea
        ref="text"
        autofocus
        type="text"
        id="text"
        rows="4"
        class="block p-3.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
        placeholder="Your post text..."
        v-model="postStore.post.text"
        @keyup.enter="$emit('submit', $event)"
      ></textarea>
    </div>

    <!-- Image -->
    <ImageField />

    <div class="px-4 pb-2 text-right">
      <button
        type="button"
        class="uppercase cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-xs px-5 py-2.5 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        @click="$emit('submit', $event)"
      >
        Publish
      </button>
    </div>
  </div>
</template>
