import Link from "next/link";
import GetProduct from "./lib/GetProduct";
export default async function Home() {
  const products = await GetProduct();
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Our products</h2>
      {products.map((product : any) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <Link href={`/admin/product/update/${product.id}`}>Modify product</Link>
        </div>
      ))}
    </div>
  );
}
