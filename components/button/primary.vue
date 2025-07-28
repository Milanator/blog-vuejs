<script setup lang="ts">
defineProps({
  text: {
    type: String,
  },
});

const emit = defineEmits(["click"]);
</script>
<template>
  <button
    type="button"
    class="uppercase cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-xs px-5 py-2.5 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>
