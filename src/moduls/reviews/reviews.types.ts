import { Reviews as ReviewsModel } from "@prisma/client";

export type Review = ReviewsModel;

export type UpdateReview = {
  id: string;
  title?: string;
  comment?: string;
  posts_id?: string;
  author_id?: string;
};
