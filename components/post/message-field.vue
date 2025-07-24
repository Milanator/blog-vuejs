<script setup lang="ts">
import { usePostStore } from "~/stores/postStore.ts";
import { useAppStore } from "~/stores/appStore.ts";
import { ref } from "vue";

const postStore = usePostStore();
const appStore = useAppStore();

const title = ref(undefined);

function submit(event: Event): void {
  console.log("enter");

  event.preventDefault();

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
  <div
    class="p-4 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <input
      autofocus
      type="text"
      class="block p-3.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
      placeholder="Your post title..."
      ref="title"
      v-model="postStore.title"
      @keyup.enter="submit"
    />
    <textarea
      id="text"
      rows="4"
      class="block p-3.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
      placeholder="Your post text..."
      v-model="postStore.text"
      @keyup.enter="submit"
    ></textarea>

    <!-- Image -->
    <div class="flex items-center justify-center w-full">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-32 border-gray-300 border rounded-2xl cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          class="hidden"
          @change="postStore.imageUrl = $event.target.files[0]"
        />
      </label>
    </div>
  </div>
</template>
