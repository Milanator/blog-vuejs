<script setup lang="ts">
defineProps({
  imageUrl: {
    type: String,
  },
});
</script>
<template>
  <div class="relative overflow-hidden flex justify-center">
    <img
      :src="imageUrl"
      class="absolute inset-0 w-full h-full object-cover filter blur-md scale-110 brightness-50 z-0"
      alt="Background"
    />
    <img :src="imageUrl" class="max-h-100 z-10 relative" />
  </div>
</template>
