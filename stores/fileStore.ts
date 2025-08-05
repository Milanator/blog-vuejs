import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import { getFormData } from "~/utils/form.ts";
import type { AxiosResponse } from "axios";

export const useFileStore = defineStore("file", {
  state: () => ({
    file: undefined,
  }),
  actions: {
    storeFile(): void | Promise<AxiosResponse> {
      const { $axios } = useNuxtApp();

      try {

        const formData = getFormData({
          imageUrl: this.file,
        });

        return $axios.post(
          import.meta.env.VITE_BACKEND_URL + "/api/file",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } catch (error: any) {
        console.log(error);

        return;
      }
    },
  },
});
