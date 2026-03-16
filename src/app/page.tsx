import Link from "next/link";
import GetProduct from "./lib/GetProduct";
import Header from "@/molecules/Header";
import Card from "@/molecules/Card";
import Footer from "@/molecules/Footer";
export default async function Home() {
  const products = await GetProduct();
  return (
    <>
      <Header />
      <main className="flex-grow">
        <h1>Home Page</h1>
        <h2>Our products</h2>
        <div className="grid grid-cols-3 grid-rows-3 align-center">
          {products.map((product: any) => (
            <Card
              key={product.id}
              title={product.name}
              description={product.description}
              price={product.price.toString()}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
