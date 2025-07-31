import { useAuthStore } from "~/stores/authStore.ts";
import { useAppStore } from "~/stores/appStore";
import { setItem, clearItem } from "~/utils/localstorage.ts";

export function useUser() {
  const authStore = useAuthStore();
  const appStore = useAppStore();

  const login = () => {
    authStore.login().then((response: object) => {
      // store localstorage
      setItem("token", response.data.data.login.token);
      setItem("user", response.data.data.login.user);

      appStore.setSuccessMessage(response.data.data.login.message);

      navigateTo("/post");
    });
  };

  const logout = () => {
    clearItem("token");
    clearItem("user");

    appStore.setUser(undefined);

    navigateTo("/auth/login");
  };

  return {
    login,
    logout,
  };
}
