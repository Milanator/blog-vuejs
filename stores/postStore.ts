import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import { getFormData } from "~/utils/form.ts";
import type { User } from "~/types/UserType";
import type { Post } from "~/types/PostType";
import type { AxiosResponse } from "axios";

export const usePostStore = defineStore("post", {
  state: () => ({
    items: [] as User[],
    title: undefined,
    text: undefined,
    imageUrl: undefined,
    post: undefined as Post | undefined,
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
      this.title = this.text = this.imageUrl = undefined;
    },

    storePost(): void | Promise<AxiosResponse> {
      const { $axios } = useNuxtApp();

      try {
        const formData = getFormData({
          title: this.title,
          text: this.text,
          imageUrl: this.imageUrl,
        });

        return $axios.post("/post", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error: any) {
        console.log(error);

        return;
      }
    },

    setPost(id: string): void {
      const { $axios } = useNuxtApp();

      try {
        $axios.get(`/post/${id}`).then((r: object) => {
          console.log(r.data);
        });
      } catch (error: any) {
        console.log(error);

        return;
      }
    },
  },
});
