import GetProduct from "@/app/lib/GetProduct";
import CreateProductAction, { handleSubmitResearch } from "./products.action";
import SearchSection from "@/organisms/SearchSection";
import Label from "@/atoms/Label";
import { Button } from "@mui/material";
import Input from "@/atoms/Input";

import { Product } from "@/type";

export default async function Page() {
  const allProducts = (await GetProduct()).map((p) => {
    const res: Product = {
      name: p.name,
      id: p.id,
      description: p.description || "",
      price: Number(p.price),
    };

    return res;
  });

  return (
    <div className=" mx-auto p-4 bg-gray-100 p-6">
      <div className="container mx-auto w-full max-w-lg bg-white p-4 rounded-lg shadow-lg">
        <h1>New Product</h1>
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

        <SearchSection
          fullProductList={allProducts}
          handleSubmit={handleSubmitResearch}
        />
      </div>
    </div>
  );
}
