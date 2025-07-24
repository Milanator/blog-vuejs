import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import { getFormData } from "~/utils/form.ts";
import type { User } from "~/types/UserType";
import type { Post } from "~/types/PostType";
import type { AxiosResponse } from "axios";

export const usePostStore = defineStore("post", {
  state: () => ({
    items: [] as User[],
    post: {} as Post | {},
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
      this.post = {};
    },

    storePost(): void | Promise<AxiosResponse> {
      const { $axios } = useNuxtApp();

      try {
        const formData = getFormData({
          text: this.post.text,
          imageUrl: this.post.imageUrl,
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

    updatePost(): void | Promise<AxiosResponse> {
      const { $axios } = useNuxtApp();

      try {
        return $axios.put(`/post/${this.post._id}`, {
          text: this.post.text,
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
          this.post = r.data.data;
        });
      } catch (error: any) {
        console.log(error);

        return;
      }
    },
  },
});
