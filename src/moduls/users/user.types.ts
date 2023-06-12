import {Users as UserModel} from '@prisma/client'

export type User = UserModel;

export type UpdateUser = {
  id: string
  name?: string;
  email?: string;
  avatar?: string;
}