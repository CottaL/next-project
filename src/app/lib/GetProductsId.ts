import { prisma } from "./prisma";
export default function GetProductsById(id: number) {
    return (
        prisma.product.findUnique({
            where: {
                id: Number(id),
            },
        })
    );
}