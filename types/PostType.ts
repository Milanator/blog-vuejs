import type { User } from "~/types/UserType";

export type Post = {
  _id: number;
  title: string;
  text: string;
  userId: User;
};
