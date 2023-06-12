import { Router } from "express";

import { 
  createPostHandler,
  getAllPostsHandler,
  getPostByIdHandler,
  updatePostByIdHandler,
  deletePostByIdHandler,
} from "./posts.controller";

const postRouter = Router();

postRouter.post('/', createPostHandler);
postRouter.get('/', getAllPostsHandler);
postRouter.get('/:id', getPostByIdHandler);
postRouter.patch('/', updatePostByIdHandler);
postRouter.delete('/:id', deletePostByIdHandler);

export default postRouter;