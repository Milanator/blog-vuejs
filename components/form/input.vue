<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
  },
  type: {
    type: String,
    default: () => "text",
  },
  placeholder: {
    type: String,
  },
  id: {
    type: String,
  },
});

const emit = defineEmits(["change"]);

const inputValue = ref(props.value);
</script>
<template>
  <input
    class="block p-3.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    :type="type"
    :id="id"
    :placeholder="placeholder"
    :value="inputValue"
    @input="$emit('change', $event.target.value)"
  />
</template>
