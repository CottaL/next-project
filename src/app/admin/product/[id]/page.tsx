import { GetProductById } from "@/app/lib/GetProductById";
import Card from "@/molecules/Card";
import { notFound } from "next/navigation";

type ProductPageProps = {
    params: {
        id: string;
    };
};

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const productId = parseInt(id);

    if (isNaN(productId)) {
        notFound();
    }

    const product = await GetProductById(productId);

    if (!product) {
        notFound();
    }

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold mb-4">Product Detail</h1>
            <div className="max-w-sm">
                <Card
                    id={product.id}
                    title={product.name}
                    description={product.description || ""}
                    price={product.price.toString()}
                />
            </div>
        </main>
    );
}
