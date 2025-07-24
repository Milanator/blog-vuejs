import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import type { User } from "~/types/UserType";
import type { AxiosResponse } from "axios";

export const usePostStore = defineStore("post", {
  state: () => ({
    items: [] as User[],
    title: undefined,
    text: undefined,
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

    clearFields(): void {
      this.title = this.text = undefined;
    },

    storePost(): void | Promise<AxiosResponse> {
      const { $axios } = useNuxtApp();

      try {
        return $axios.post("/post", {
          title: this.title,
          text: this.text,
        });
      } catch (error: any) {
        console.log(error);

        return;
      }
    },
  },
});
