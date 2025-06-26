import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      common: {
        "X-Requested-With": "XMLHttpRequest",
      },
    },
  });

  return {
    provide: { axios: instance },
  };
});
