import { defineStore } from "pinia";
import { Type, type FlashMessage } from "~/types/FlashMessageType";
import { type User } from "~/types/UserType";

export const useAppStore = defineStore("app", {
  state: () => ({
    flashMessage: [] as Array<FlashMessage> | [],
    user: undefined as User | undefined,
  }),
  actions: {
    setUser(user: User | undefined): void {
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
