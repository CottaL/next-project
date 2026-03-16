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
            description
        }
    });
}