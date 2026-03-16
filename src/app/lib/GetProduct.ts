import { prisma } from "./prisma";

export default function GetProduct() {
    return (
        prisma.product.findMany()
    );
}

export async function GetProductById(id: number) {
    return (
        prisma.product.findFirst({
            where: {
                id: id
            }
        })
    );
}