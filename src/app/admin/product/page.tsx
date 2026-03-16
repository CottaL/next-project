import CreateProductAction, { handleSubmitResearch } from "./products.action";
import SearchSection from "@/organisms/SearchSection";
import Label from "@/atoms/Label";
import { Button } from "@mui/material";
import Input from "@/atoms/Input";


export default async function Page() {

  return (
    <div className=" mx-auto p-4 bg-gray-100  ">
      <div className="container mx-auto w-full max-w-lg">
        <h1>New Product</h1>
        <form action={CreateProductAction} className="flex flex-col gap-1 ">
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
        <SearchSection handleSubmit={handleSubmitResearch} />
      </div>
    </div>
  );
}
