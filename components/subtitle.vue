<script setup lang="ts">
defineProps({
  text: {
    type: String,
  },
});
</script>
<template>
  <h3 class="pb-2 pl-4 text-xs text-gray-400 uppercase">{{ text }}</h3>
</template>
