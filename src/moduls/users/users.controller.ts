import {Request, Response } from 'express'

import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById, 
} from "./user.service";

import { User, UpdateUser } from './user.types';

export async function createUserHandler (req: Request, res: Response) {
  const data: User  = req.body
  const user = await createUser(data);

  return res.json(user);
}

export async function getAllUsersHandler (req: Request, res: Response) {
  const users = await getAllUsers();

  return res.json(users);
}

export async function getUserByIdHandler (req: Request, res: Response) {
  const { id } = req.params;
  const user = await getUserById(id);

  return res.json(user);
}

export async function updateUserByIdHandler (req: Request, res: Response) {
  const data: UpdateUser = req.body;
  const user = await updateUserById(data);

  return res.json(user);
}

export async function deleteUserByIdHandler (req: Request, res: Response) {
  const { id } = req.params;
  const user = await deleteUserById(id);

  return res.json(user);
}