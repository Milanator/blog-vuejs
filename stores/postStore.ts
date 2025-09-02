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
      try {
        const { $axios } = useNuxtApp();

        const graphqlQuery = {
          query: `
            query FetchPosts($page: Int, $perPage: Int)
            {
              getPosts(page: $page, perPage: $perPage) {
                  page,
                  totalPages,
                  items {
                    _id
                    text
                    imageUrl
                    userId {
                      _id
                      name
                      email
                    }
                  }
              }
            }
          `,
          variables: {
            page,
            perPage,
          },
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

    storePost(imageUrl: undefined | string): void | Promise<AxiosResponse> {
      const { $axios } = useNuxtApp();

      try {
        const graphqlQuery = {
          query: `
            mutation StorePost($text: String!, $imageUrl: String!) 
            {
              storePost(postInput: {
                text: $text,
                imageUrl: $imageUrl
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
          variables: {
            text: this.post.text,
            imageUrl,
          },
        };

        return $axios.post("", JSON.stringify(graphqlQuery));
      } catch (error: any) {
        console.log(error);

        return;
      }
    },

    updatePost(imageUrl: undefined | string): void | Promise<AxiosResponse> {
      const { $axios } = useNuxtApp();

      try {
        const graphqlQuery = {
          query: `
            mutation UpdatePost($id: ID!, $text: String!, $imageUrl: String!)
            {
              updatePost(id: $id, postInput: {
                text: $text,
                imageUrl: $imageUrl
              }) {
                message
                item {
                  _id
                  text
                  imageUrl
                  userId {
                    _id
                    name
                    email
                  }
                }
              }
            }
          `,
          variables: {
            id: this.post._id,
            text: this.post.text,
            imageUrl,
          },
        };

        return $axios.post(``, JSON.stringify(graphqlQuery));
      } catch (error: any) {
        console.log(error);

        return;
      }
    },

    deletePost(id: string): void | Promise<AxiosResponse> {
      const { $axios } = useNuxtApp();

      try {
        const graphqlQuery = {
          query: `
            mutation DeletePost($id: ID!) {
              deletePost(id: $id) {
                message
              }
            }
          `,
          variables: {
            id,
          },
        };

        return $axios.post("", JSON.stringify(graphqlQuery));
      } catch (error: any) {
        console.log(error);

        return;
      }
    },

    setPost(id: string): void {
      const { $axios } = useNuxtApp();

      try {
        const graphqlQuery = {
          query: `
            query ShowPost($id: ID!)
            {
              showPost(id: $id)
              {
                _id
                text
                imageUrl
                createdAt
                userId {
                  _id
                  name
                  email
                }
              }
            }
          `,
           variables: {
            id,
          },
        };

        $axios.post(``, JSON.stringify(graphqlQuery)).then((r: object) => {
          this.post = r.data.data.showPost;
        });
      } catch (error: any) {
        console.log(error);

        return;
      }
    },
  },
});
