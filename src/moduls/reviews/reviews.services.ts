import { PrismaClient } from "@prisma/client";
import { Review, UpdateReview } from "./reviews.types";

const prisma = new PrismaClient();

export async function createReview(data: Review) {
  const review = await prisma.reviews.create({
    data,
  });
  return review;
}

export async function getAllReviews() {
  const reviews = await prisma.reviews.findMany();
  return reviews;
}

export async function getReviewById(id: string) {
  const review = await prisma.reviews.findUnique({
    where: {
      id: id,
    },
  });

  return review;
}

export async function updateReviewById(data: UpdateReview) {
  const review = await prisma.reviews.update({
    where: {
      id: data.id,
    },
    data,
  });

  return review;
}

export async function deleteReviewById(id: string) {
  const review = await prisma.reviews.delete({
    where: {
      id,
    },
  });

  return review;
}
