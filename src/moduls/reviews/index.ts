import { Router } from "express";

import {
  createReviewHandler,
  getAllReviewsHandler,
  getReviewByIdHandler,
  updateReviewByIdHandler,
  deleteReviewByIdHandler,
} from "./reviews.controller";

const reviewRouter = Router();

reviewRouter.post("/", createReviewHandler);
reviewRouter.get("/", getAllReviewsHandler);
reviewRouter.get("/:id", getReviewByIdHandler);
reviewRouter.patch("/", updateReviewByIdHandler);
reviewRouter.delete("/:id", deleteReviewByIdHandler);

export default reviewRouter;
