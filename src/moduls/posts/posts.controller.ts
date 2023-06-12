import {Request, Response } from 'express'

import {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById, 
} from "./posts.services";

import { Post, UpdatePost } from './posts.types';

export async function createPostHandler (req: Request, res: Response) {
  const data: Post  = req.body
  const post = await createPost(data);

  return res.json(post);
}

export async function getAllPostsHandler (req: Request, res: Response) {
  const posts = await getAllPosts();

  return res.json(posts);
}

export async function getPostByIdHandler (req: Request, res: Response) {
  const { id } = req.params;
  const post = await getPostById(id);

  return res.json(post);
}

export async function updatePostByIdHandler (req: Request, res: Response) {
  const data: UpdatePost = req.body;
  const post = await updatePostById(data);

  return res.json(post);
}

export async function deletePostByIdHandler (req: Request, res: Response) {
  const { id } = req.params;
  const post = await deletePostById(id);

  return res.json(post);
}