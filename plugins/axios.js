import axios from "axios";
import { UNAUTHORIZED_STATUS } from "~/constants.ts";
import { getItem } from "~/utils/localstorage.ts";
import { useUser } from "~/composables/useUser.ts";

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_BACKEND_URL + "/graphql",
    headers: {
      common: {
        "X-Requested-With": "XMLHttpRequest",
      },
    },
  });

  // request interceptor
  instance.interceptors.request.use((config) => {
    const token = getItem("token");

    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Content-Type"] = "application/json";

    return config;
  });

  // response interceptor
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === UNAUTHORIZED_STATUS) {
        const { logout } = useUser();

        logout();
      }

      return Promise.reject(error);
    }
  );

  return {
    provide: { axios: instance },
  };
});
