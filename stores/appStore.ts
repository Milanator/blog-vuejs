import { defineStore } from "pinia";
import { Type, type FlashMessage } from "~/types/FlashMessageType";
import { type User } from "~/types/UserType";
import { getItem } from "~/utils/localstorage.ts";

export const useAppStore = defineStore("app", {
  state: () => ({
    flashMessage: [] as Array<FlashMessage> | [],
    user: undefined as User | undefined,
  }),
  actions: {
    setUser(user: User): void {
      this.user = user;
    },

    clearMessage(): void {
      this.flashMessage = [];
    },

    setSuccessMessage(message: string): void {
      this.flashMessage.push({
        message,
        type: Type.Success,
      });
    },

    setErrorMessage(message: string): void {
      this.flashMessage.push({
        message,
        type: Type.Error,
      });
    },
  },
});
