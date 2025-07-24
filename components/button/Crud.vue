<script setup lang="ts">
defineProps({
  type: {
    type: String,
  },
  id: {
    type: String,
  },
});
</script>
<template>
  <div class="mt-5 flex justify-end">
    <NuxtLink
      v-slot="{ navigate }"
      :to="{ name: `${type}-id`, params: { id } }"
      custom
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-xs px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      <a @click="navigate">View</a>
    </NuxtLink>

    <button
      class="py-2.5 px-5 me-2 mb-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-2xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      Edit
    </button>

    <button
      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-2xl text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    >
      Delete
    </button>
  </div>
</template>
