import { getItem } from "~/utils/localstorage.ts";
import { useAppStore } from "~/stores/appStore.ts";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = getItem("token");

  if (!token) {
    return navigateTo("/auth/login");
  }

  const appStore = useAppStore();

  const user = getItem("user");

  appStore.setUser(user);
});
