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

        return $axios.put("/user/signup", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
      } catch (error: any) {
        console.log(error);

        return;
      }
    },

    login(): void | Promise<AxiosResponse> {
      try {
        const { $axios } = useNuxtApp();
        
        return $axios.post("/user/login", {
          email: this.email,
          password: this.password,
        });
      } catch (error: any) {
        console.log(error);

        return;
      }
    },
  },
});
