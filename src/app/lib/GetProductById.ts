import { prisma } from "./prisma";

export async function GetProductById(id: number) {
    return await prisma.product.findUnique({
        where: {
            id: id,
        },
    });
}
