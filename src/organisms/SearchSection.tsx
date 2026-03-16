"use client";
import MyButton from "@/atoms/button";
import ProductCard from "@/atoms/ProductCard";
import SearchBar from "@/molecules/SearchBar";
import { Product } from "@/type";
import { ChangeEvent, useEffect, useState } from "react";

type SearchSectionProps = {
  handleSubmit: (s: string) => Promise<Product[]>;
};

const SearchSection = ({ handleSubmit }: SearchSectionProps) => {
  const [searchTerms, setSearchTerms] = useState<string>("");
  const [products, setProducts] = useState<Product[] | null>();

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerms(e.target.value);
  };

  const handleSubmitresearch = async () => {
    const res = await handleSubmit(searchTerms);
    setProducts(res);
    setSearchTerms("");
    console.log(res);
  };

  return (
    <>
      <h2>Search Product</h2>
      <SearchBar value={searchTerms} handleChangeValue={handleChangeSearch} />
      <MyButton onClick={handleSubmitresearch} label="Rechercher" />

      {products ? (
        products.map((p) => {
          return <ProductCard key={p.id} product={p} />;
        })
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SearchSection;
