"use client";
import MyButton from "@/atoms/button";
import ProductCard from "@/molecules/ProductCard";
import SearchBar from "@/molecules/SearchBar";
import { Product } from "@/type";
import { ChangeEvent, useEffect, useState } from "react";

type SearchSectionProps = {
  handleSubmit: (s: string) => Promise<Product[]>;
  fullProductList: Product[];
};

const SearchSection = ({
  handleSubmit,
  fullProductList,
}: SearchSectionProps) => {
  const [searchTerms, setSearchTerms] = useState<string>("");
  const [products, setProducts] = useState<Product[] | null>();

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerms(e.target.value);
  };

  const handleSubmitresearch = async () => {
    const res = await handleSubmit(searchTerms);
    setProducts(res);
    setSearchTerms("");
  };

  return (
    <>
      <h2>Search Product</h2>
      <SearchBar value={searchTerms} handleChangeValue={handleChangeSearch} />
      <MyButton onClick={handleSubmitresearch} label="Rechercher" />
      <div className="grid grid-cols-5 gap-4">
        {products
          ? products.map((p) => {
            return <ProductCard key={p.id} product={p} />;
          })
          : fullProductList.map((p) => {
            return <ProductCard key={p.id} product={p} />;
          })}
      </div>
    </>
  );
};

export default SearchSection;
