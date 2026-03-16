import CreateProductAction, { DeleteProductAction, UpdateProductAction } from "@/app/admin/product/products.action";
import MyButton from "@/atoms/button";
import Label from "@/atoms/Label";
import { Button } from "@mui/material";
import Input from "@/atoms/Input";

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
      <form action={CreateProductAction} className="space-y-4 p-4 m-4 align-center justify-center items-center">
                <Label htmlFor="name" label="Name:" />
                <Input id="name" name="name" type="text" />
                <br />
                <Label htmlFor="price" label="Price:" />
                <Input id="price" name="price" type="number" />
                <br />
                <Label htmlFor="description" label="Description:" />
                <Input id="description" name="description" type="text" />
                <br />
                <Button type="submit">Create Product</Button>
              </form>
      
    );
  } else if (mode === 'update' && product) {
    return (
      <>
      <div className=" mx-auto p-4 bg-gray-100 p-6">
        <div className="container mx-auto w-full max-w-lg bg-white p-4 rounded-lg shadow-lg">
            <form action={UpdateProductAction}>
            <Label htmlFor="name" label="Name:" />
            <Input type="text" id="name" name="name" defaultValue={product.name} />
            <br />
            <Label htmlFor="price" label="Price:" />
            <Input type="number" id="price" name="price" defaultValue={String(product.price)} />
            <br />
            <Label htmlFor="description" label="Description:" />
            <Input type="text" id="description" name="description" defaultValue={product.description ?? ""} />
            <br />
            <Label htmlFor="id" hidden label="ID:" />
            <Input type="number" id="id" name="id" value={String(product.id)} hidden readOnly />
            <br />
            <Button type="submit">Update Product</Button>
            </form>
            <form action={DeleteProductAction}>
            <Label htmlFor="id" hidden label="ID:" />
            <Input type="number" id="id" name="id" value={String(product.id)} hidden readOnly />
            <br />
            <Button type="submit">Delete Product</Button>
            </form>
            </div>
        </div>
      </>
    );
  }
  return null;
}