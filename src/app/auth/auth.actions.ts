"use server";
import { prisma } from "../lib/prisma";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export default async function CreateUserAction(data: FormData) {
  const name = String(data.get("name"));
  const password = String(data.get("password"));
  const email = String(data.get("email"));

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("Un utilisateur avec cet email existe deja.");
  }

  const user = await prisma.user.create({
    data: {
      name,
      password,
      email,
    },
  });

  // Automatically log in after signup
  await createSession({
    userId: user.id,
    email: user.email,
    name: user.name,
  });

  redirect("/");
}

export async function LoginUserAction(data: FormData) {
  const email = String(data.get("email"));
  const password = String(data.get("password"));

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Email ou mot de passe incorrect.");
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    throw new Error("Email ou mot de passe incorrect.");
  }

  await createSession({
    userId: user.id,
    email: user.email,
    name: user.name,
  });

  redirect("/");
}

export async function LogoutAction() {
  await deleteSession();
  redirect("/auth/login");
}
