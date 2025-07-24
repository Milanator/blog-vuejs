<script setup lang="ts">
import { usePostStore } from "~/stores/postStore.ts";
import { useAppStore } from "~/stores/appStore.ts";
import { ref } from "vue";

const postStore = usePostStore();
const appStore = useAppStore();

const title = ref(undefined);

function submit(): void {
  console.log("enter");

  const response = postStore.storePost();

  if (response) {
    response
      .then((r: object) => {
        appStore.setSuccessMessage(r.data.data.message);

        postStore.clearFields();

        title.value.focus();
      })
      .then(() => {
        postStore.fetchAll();
      });
  }
}
</script>
<template>
  <input
    type="text"
    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
    placeholder="Your post title..."
    ref="title"
    v-model="postStore.title"
  />
  <textarea
    id="text"
    rows="4"
    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Your post text..."
    v-model="postStore.text"
    @keyup.enter="submit"
  ></textarea>
</template>
