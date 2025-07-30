<script setup lang="ts">
import { ref } from "vue";
import { useInfiniteScrollStore } from "~/stores/infiniteScrollStore.ts";

const props = defineProps({
  loadMore: {
    type: Function,
  },
});

const infiniteScrollStore = useInfiniteScrollStore();

const container = ref(null);

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

const canLoadMore = (element: HTMLElement) =>
  !infiniteScrollStore.loading &&
  element.getBoundingClientRect().bottom <= window.innerHeight;

const onScroll = () => {
  const element: HTMLElement = container.value;

  if (canLoadMore(element)) {
    if (infiniteScrollStore.page >= infiniteScrollStore.totalPages) {
      console.log('no more items')

      return ;
    }

    infiniteScrollStore.loading = true;

    infiniteScrollStore.page++;

    props.loadMore(infiniteScrollStore.page);
  }
};
</script>
<template>
  <div ref="container" class="scrolling-component">
    <slot />
  </div>
</template>
