import type { User } from "~/types/UserType";

export type Post = {
  _id: number;
  text: string;
  userId: User;
  imageUrl: string;
};
