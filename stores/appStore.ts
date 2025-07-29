import { defineStore } from "pinia";
import { Type, type FlashMessage } from "~/types/FlashMessageType";

export const useAppStore = defineStore("app", {
  state: () => ({
    flashMessage: [] as Array<FlashMessage> | [],
  }),
  actions: {
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
