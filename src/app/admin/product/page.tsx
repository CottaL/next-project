import GetProduct from "@/app/lib/GetProduct";
import CreateProductAction, { handleSubmitResearch } from "./products.action";
import SearchSection from "@/organisms/SearchSection";
import { Product } from "@/type";

export default async function Page() {
  const allProducts = (await GetProduct()).map((p) => {
    const res: Product = {
      name: p.name,
      id: p.id,
      description: p.description || "",
      price: p.price,
    };

    return res;
  });

  return (
    <div>
      <h1>New Product</h1>
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

      <SearchSection
        fullProductList={allProducts}
        handleSubmit={handleSubmitResearch}
      />
    </div>
  );
}
