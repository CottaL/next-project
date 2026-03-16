import { prisma } from "./prisma";

export default function GetProduct() {
    return (
        prisma.product.findMany()
    );
}