"use server";
import { Product } from "@/type";
import { prisma } from "../../lib/prisma";

export default async function CreateProductAction(data: FormData) {
  const name = String(data.get("name"));
  const price = Number(data.get("price"));
  const description = String(data.get("description"));

  await prisma.product.create({
    data: {
      name,
      price,
      description,
    },
  });
}

export const handleSubmitResearch = async (s: string) => {
  const foundproducts = await prisma.product.findMany({
    where: { name: { startsWith: s } },
  });


  const res = foundproducts.map((p) => {
    const prod: Product = {
      name: p.name,
      price: p.price || 0,
      price: p.price || 0,
      description: p.description || "",
      id: p.id,
    };

    return prod;
  });


  return res;
};

export async function UpdateProductAction(data: FormData) {
    const name = String(data.get("name"));
    const price = Number(data.get("price"));
    const description = String(data.get("description"));
    const id = Number(data.get("id"));
    await prisma.product.update({
        where: {
            id: id
        },
        data: {
            name,
            price,
            description
        }
    });
}

export async function DeleteProductAction(data: FormData) {
    const id = Number(data.get("id"));
    await prisma.product.delete({
        where: {
            id: id
        }
    });
}