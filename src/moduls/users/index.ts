import { Router } from "express";

import { 
  createUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserByIdHandler,
  deleteUserByIdHandler,
} from "./users.controller";

const userRouter = Router();

userRouter.post('/', createUserHandler);
userRouter.get('/', getAllUsersHandler);
userRouter.get('/:id', getUserByIdHandler);
userRouter.patch('/', updateUserByIdHandler);
userRouter.delete('/:id', deleteUserByIdHandler);

export default userRouter;