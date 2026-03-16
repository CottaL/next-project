import { Product } from "@/type";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price.toString()}€</p>
    </div>
  );
};

export default ProductCard;
