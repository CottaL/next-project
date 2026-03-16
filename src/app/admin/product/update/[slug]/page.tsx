import { GetProductById } from "@/app/lib/GetProduct";
import { UpdateProductAction } from "@/app/admin/product/products.action";
export default async function Page(props: {
     params: Promise<{ slug: string }>;}) {
        const params = await props.params;
        const product = await GetProductById(parseInt(params.slug));
  return (
    <div>
    {product ? (
      <form action={UpdateProductAction}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" defaultValue={product.name} />
        <br />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" defaultValue={String(product.price)} />
        <br />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" defaultValue={product.description ? product.description : ""} />
        <br />
        <label htmlFor="id" hidden>ID:</label>
        <input type="number" id="id" name="id" value={String(product.id)} hidden readOnly/>
        <br />
        <button type="submit">Update Product</button>
      </form>
    ) : (
      <p>Product not found {params.slug}</p>
    )}
    </div>
  );
}