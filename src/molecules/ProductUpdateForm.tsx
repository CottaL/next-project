import CreateProductAction, { DeleteProductAction, UpdateProductAction } from "@/app/admin/product/products.action";
import MyButton from "@/atoms/button";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string | null;
}

interface ProductFormProps {
  mode: 'create' | 'update';
  product?: Product;
}

export default function ProductForm({ mode, product }: ProductFormProps) {
  if (mode === 'create') {
    return (
      <form action={CreateProductAction}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" />
        <br />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" />
        <br />
        <button type="submit">Create Product</button>
      </form>
    );
  } else if (mode === 'update' && product) {
    return (
      <>
        <form action={UpdateProductAction}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" defaultValue={product.name} />
          <br />
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" defaultValue={String(product.price)} />
          <br />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" defaultValue={product.description ?? ""} />
          <br />
          <label htmlFor="id" hidden>ID:</label>
          <input type="number" id="id" name="id" value={String(product.id)} hidden readOnly />
          <br />
          <button type="submit">Update Product</button>
        </form>
        <form action={DeleteProductAction}>
          <label htmlFor="id" hidden>ID:</label>
          <input type="number" id="id" name="id" value={String(product.id)} hidden readOnly />
          <br />
          <button type="submit">Delete Product</button>
        </form>
      </>
    );
  }
  return null;
}