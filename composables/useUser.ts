import { useAuthStore } from "~/stores/authStore.ts";
import { useAppStore } from "~/stores/appStore";
import { setItem } from "~/utils/localstorage.ts";

export function useUser() {
  const authStore = useAuthStore();
  const appStore = useAppStore();

  const login = () => {
    authStore.login().then((response: object) => {
      // store localstorage
      setItem("token", response.data.data.token);
      setItem("userId", response.data.data.userId);

      appStore.setSuccessMessage(response.data.data.message);

      navigateTo("/post");
    });
  };

  return {
    login,
  };
}
