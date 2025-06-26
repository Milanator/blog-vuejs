import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const usePostStore = defineStore("post", {
  state: () => ({
    items: [],
  }),
  actions: {
    fetchAll() {
      const { $axios } = useNuxtApp();

      try {
        $axios.get("/post").then((response: object) => {
          this.items = response.data.data.items;
        });
      } catch (error: any) {
        console.log(error);
      }
    },
  },
});
