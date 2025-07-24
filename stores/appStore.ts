import { defineStore } from "pinia";
import { Type, type FlashMessage } from "~/types/FlashMessageType";

export const useAppStore = defineStore("app", {
  state: () => ({
    flashMessage: undefined as FlashMessage | undefined,
  }),
  actions: {
    clearMessage(): void {
      this.flashMessage = undefined;
    },

    setSuccessMessage(message: string): void {
      this.flashMessage = {
        message,
        type: Type.Success,
      };
    },
  },
});
