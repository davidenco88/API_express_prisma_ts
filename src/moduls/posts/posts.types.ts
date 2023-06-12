import { Posts as PostsModel } from "@prisma/client";

export type Post = PostsModel;

export type UpdatePost = {
  id: string;
  title?: string;
  content?: string;
  isPublished?: boolean;
  author_id?: string;
};
