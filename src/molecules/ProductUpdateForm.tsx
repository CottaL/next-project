import CreateProductAction, { DeleteProductAction, UpdateProductAction } from "@/app/admin/product/products.action";
import MyButton from "@/atoms/button";
import Label from "@/atoms/Label";
import Input from "@/atoms/Input";
import Button from "@/atoms/button";
import ContainerForm from "@/atoms/ContainerForm";

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
      <ContainerForm>
        <form action={CreateProductAction}>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" />
          <br />
          <Label htmlFor="price">Price:</Label>
          <Input type="number" id="price" name="price" />
          <br />
          <Label htmlFor="description">Description:</Label>
          <Input type="text" id="description" name="description" />
          <br />
          <MyButton type="submit">Create Product</MyButton>
        </form>
      </ContainerForm>
    );
  } else if (mode === 'update' && product) {
    return (
      <ContainerForm>
        <form action={UpdateProductAction}>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" defaultValue={product.name} />
          <br />
          <Label htmlFor="price">Price:</Label>
          <Input type="number" id="price" name="price" defaultValue={String(product.price)} />
          <br />
          <Label htmlFor="description">Description:</Label>
          <Input type="text" id="description" name="description" defaultValue={product.description ?? ""} />
          <br />
          <Label htmlFor="id" hidden>ID:</Label>
          <Input type="number" id="id" name="id" value={String(product.id)} hidden readOnly />
          <br />
          <Button type="submit">Update Product</Button>
        </form>
        <form action={DeleteProductAction}>
          <Label htmlFor="id" hidden>ID:</Label>
          <Input type="number" id="id" name="id" value={String(product.id)} hidden readOnly />
          <br />
          <Button type="submit">Delete Product</Button>
        </form>
      </ContainerForm>
    );
  }
  return null;
}