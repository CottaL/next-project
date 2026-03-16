import { GetProductById } from "@/app/lib/GetProduct";
import ProductUpdateForm from "@/molecules/ProductUpdateForm";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const product = await GetProductById(parseInt(params.slug));
  return (
    <div>
      {product ? (
        (() => {
          const formattedProduct = {
            ...product,
            price: Number(product.price),
          };
          return (
            <ProductUpdateForm mode="update" product={formattedProduct} />
          );
        })()
      ) : (
        <p>Product not found {params.slug}</p>
      )}
    </div>
  );
}