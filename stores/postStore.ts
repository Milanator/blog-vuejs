import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import { getFormData } from "~/utils/form.ts";
import type { Post } from "~/types/PostType";
import type { AxiosResponse } from "axios";

export const usePostStore = defineStore("post", {
  state: () => ({
    items: [] as Array<object>,
    post: {} as Post | {},
    loading: false,
  }),
  actions: {
    mergePosts(newPosts: Array<object>) {
      this.items.push(...newPosts);
    },

    fetchPosts(
      page: number = 1,
      perPage: number = 1
    ): void | Promise<AxiosResponse> {
      const { $axios } = useNuxtApp();

      try {
        this.loading = true;

        return $axios.get(`/post?page=${page}&perPage=${perPage}`);
      } catch (error: any) {
        console.log(error);

        return;
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

    deletePost(id: string): void | Promise<AxiosResponse> {
      const { $axios } = useNuxtApp();

      try {
        return $axios.delete(`/post/${id}`);
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
