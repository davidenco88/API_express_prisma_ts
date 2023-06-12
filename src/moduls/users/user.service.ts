import { PrismaClient } from "@prisma/client";
import { User, UpdateUser } from "./user.types";

const prisma = new PrismaClient();

export async function createUser(data: User ) {
  const user = await prisma.users.create({
    data,
  })
  return user;
}

export async function getAllUsers() {
  const users = await prisma.users.findMany();
  return users;
}

export async function getUserById(id: string) {
  const user = await prisma.users.findUnique({
    where: {
      id: id,
    }
  })

  return user;
}

export async function updateUserById(data: UpdateUser) {
  const user = await prisma.users.update({
    where: {
      id: data.id,
    },
    data,
  })

  return user;
}

export async function deleteUserById(id: string) {
  const user = await prisma.users.delete({
    where: {
      id,
    },
  })

  return user;
}