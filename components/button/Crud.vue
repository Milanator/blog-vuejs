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
  <div class="my-4 flex justify-end">
    <!-- Edit -->
    <NuxtLink
      v-slot="{ navigate }"
      :to="{ name: `${type}-edit-id`, params: { id } }"
      custom
      class="uppercase cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-xs px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      <a @click="navigate">Edit</a>
    </NuxtLink>

    <!-- Delete -->
    <button
      type="button"
      class="uppercase focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-2xl text-xs px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      @click="$emit('delete')"
    >
      Delete
    </button>
  </div>
</template>
