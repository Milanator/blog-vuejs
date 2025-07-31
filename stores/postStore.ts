import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import { getFormData } from "~/utils/form.ts";
import type { Post } from "~/types/PostType";
import type { AxiosResponse } from "axios";

export const usePostStore = defineStore("post", {
  state: () => ({
    items: [] as Array<object>,
    post: {} as Post | {},
    loading: true,
  }),
  actions: {
    mergePosts(newPosts: Array<object>) {
      this.items = [...this.items, ...newPosts];
    },

    fetchPosts(
      page: number = 1,
      perPage: number = 1
    ): void | Promise<AxiosResponse> {
      const { $axios } = useNuxtApp();

      try {
        const graphqlQuery = {
          query: `
            {
              getPosts(page: ${page}, perPage: ${perPage}) {
                  page,
                  totalPages,
                  items {
                    _id
                    text
                    userId {
                      _id
                      name
                      email
                    }
                  }
              }
            }
          `,
        };

        return $axios.post("", JSON.stringify(graphqlQuery));
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
        const graphqlQuery = {
          query: `
            mutation {
              storePost(postInput: {
                text: "${this.post.text}",
                imageUrl: "some url"
              }) {
                message
                item {
                  _id
                  text
                  userId {
                    _id
                    name
                    email
                  }
                  imageUrl
                  createdAt 
                } 
              }
            }
          `,
        };
        // const formData = getFormData({
        //   text: this.post.text,
        //   imageUrl: this.post.imageUrl,
        // });

        return $axios.post(
          "",
          JSON.stringify(graphqlQuery)
          //  {
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // }
        );
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
