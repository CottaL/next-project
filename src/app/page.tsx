import Link from "next/link";
import GetProduct from "./lib/GetProduct";
import Card from "@/molecules/Card";
export default async function Home() {
  const products = await GetProduct();
  return (
    <>
      <main className="flex-grow">
        <h1 className="text-center">Home Page</h1>
        <h2 className="text-center">Our products</h2>
        <div className="grid grid-cols-6 gap-4">
          {products.map((product: any) => (
            <><Card
              key={product.id}
              id={product.id}
              title={product.name}
              description={product.description}
              price={product.price.toString()} />
             
              <Link href={`/admin/product/update/${product.id}`}>Modify Product</Link>
               <br />
            </>

          ))}
        </div>
      </main>
    </>
  );
}
