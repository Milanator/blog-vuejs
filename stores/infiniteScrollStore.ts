import { defineStore } from "pinia";

export const useInfiniteScrollStore = defineStore("infinite-scroll", {
  state: () => ({
    loading: false as Boolean,
    page: 1 as number,
    totalPages: 1 as number,
  }),
  actions: {},
});
