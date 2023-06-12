import { PrismaClient } from "@prisma/client";
import { Post, UpdatePost } from "./posts.types";

const prisma = new PrismaClient();

export async function createPost(data: Post) {
  const post = await prisma.posts.create({
    data,
  });
  return post;
}

export async function getAllPosts() {
  const posts = await prisma.posts.findMany();
  return posts;
}

export async function getPostById(id: string) {
  const post = await prisma.posts.findUnique({
    where: {
      id: id,
    },
  });

  return post;
}

export async function updatePostById(data: UpdatePost) {
  const post = await prisma.posts.update({
    where: {
      id: data.id,
    },
    data,
  });

  return post;
}

export async function deletePostById(id: string) {
  const post = await prisma.posts.delete({
    where: {
      id,
    },
  });

  return post;
}
