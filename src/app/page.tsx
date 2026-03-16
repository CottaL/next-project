import Link from "next/link";
import GetProduct from "./lib/GetProduct";
import Header from "./header/page";
export default async function Home() {
  const products = await GetProduct();
  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/pagedemo">Go to PageDemo</Link>
          </li>
        </ul>
      </nav>
      <h2>Our products</h2>
      {products.map((product : any) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
