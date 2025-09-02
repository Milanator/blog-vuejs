import { defineStore } from "pinia";
import type { AxiosResponse } from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    name: undefined as undefined | String,
    email: undefined as undefined | String,
    password: undefined as undefined | String,
  }),
  actions: {
    signUp(): void | Promise<AxiosResponse> {
      try {
        const { $axios } = useNuxtApp();

        const graphqlQuery: object = {
          query: `
            mutation SignUp($name: String!, $email: String!, $password: String!) {
              signUp(userInput: {
                name: $name,
                email: $email,
                password: $password
              }) {
                _id
                name
                email
              }
            }
          `,
          variables: {
            name: this.name,
            email: this.email,
            password: this.password,
          },
        };

        return $axios.post("", JSON.stringify(graphqlQuery));
      } catch (error: any) {
        console.log(error);

        return;
      }
    },

    login(): void | Promise<AxiosResponse> {
      try {
        const { $axios } = useNuxtApp();

        const grapqhlQuery: object = {
          query: `
            mutation Login($email: String!, $password: String!) {
              login(userInput: {
                email: $email,
                password: $password
              }) {
                user {
                  _id
                  name
                  email
                  imageUrl
                }
                message
                token
              }
            }
          `,
          variables: {
            email: this.email,
            password: this.password,
          },
        };

        return $axios.post("", JSON.stringify(grapqhlQuery));
      } catch (error: any) {
        console.log(error);

        return;
      }
    },
  },
});
