import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import type { User } from "~/types/UserType";

export const usePostStore = defineStore("post", {
  state: () => ({
    items: [] as User[],
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
