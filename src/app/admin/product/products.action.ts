"use server";
import { Product } from "@/type";
import { prisma } from "../../lib/prisma";

export async function CreateProductAction(data: FormData) {
    const name = String(data.get("name"));
    const price = Number(data.get("price"));
    const description = String(data.get("description"));

    await prisma.product.create({
        data: {
            name,
            price,
            description
        }
    });
}

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