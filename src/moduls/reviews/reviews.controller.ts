import { Request, Response } from "express";

import {
  createReview,
  getAllReviews,
  getReviewById,
  updateReviewById,
  deleteReviewById,
} from "./reviews.services";

import { Review, UpdateReview } from "./reviews.types";

export async function createReviewHandler(req: Request, res: Response) {
  const data: Review = req.body;
  const review = await createReview(data);

  return res.json(review);
}

export async function getAllReviewsHandler(req: Request, res: Response) {
  const reviews = await getAllReviews();

  return res.json(reviews);
}

export async function getReviewByIdHandler(req: Request, res: Response) {
  const { id } = req.params;
  const review = await getReviewById(id);

  return res.json(review);
}

export async function updateReviewByIdHandler(req: Request, res: Response) {
  const data: UpdateReview = req.body;
  const review = await updateReviewById(data);

  return res.json(review);
}

export async function deleteReviewByIdHandler(req: Request, res: Response) {
  const { id } = req.params;
  const review = await deleteReviewById(id);

  return res.json(review);
}
