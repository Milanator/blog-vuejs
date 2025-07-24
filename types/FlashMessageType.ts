export enum Type {
  Success = "green",
  Error = "red",
}

export type FlashMessage = {
  message: string;
  type: Type;
};
