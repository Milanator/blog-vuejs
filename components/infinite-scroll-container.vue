<script setup lang="ts">
import { ref, defineEmits } from "vue";

const props = defineProps({
  loadMore: {
    type: Function,
  },
});

const emit = defineEmits(["loadMore"]);

const container = ref(null);
const page = ref(1);
const totalPages = ref(1);
const loading = ref(false);

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

const loadNewPage = (element: HTMLElement) =>
  !loading.value &&
  page.value < totalPages.value &&
  element.getBoundingClientRect().bottom <= window.innerHeight;

const onScroll = () => {
  const element: HTMLElement = container.value;

  if (loadNewPage(element)) {
    loading.value = true;

    page.value++;

    props.loadMore(page.value).then((response: object) => {
      totalPages.value = response.data.data.totalPages;

      loading.value = false;
    });
  }
};
</script>
<template>
  <div ref="container" class="scrolling-component">
    <slot />
  </div>
</template>
