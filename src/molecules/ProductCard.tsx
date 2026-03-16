import { Product } from "@/type";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="p-4 bg-white rounded-md border border-gray-200">
      <p>{product.name}</p>
      <p>{product.price}€</p>
    </div>
  );
};
export default ProductCard;
