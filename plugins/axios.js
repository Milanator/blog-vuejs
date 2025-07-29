import axios from "axios";
import { getItem } from "~/utils/localstorage.ts";

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

  // request interceptor
  instance.interceptors.request.use(function (config) {
    const token = getItem("token");

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  });

  return {
    provide: { axios: instance },
  };
});
