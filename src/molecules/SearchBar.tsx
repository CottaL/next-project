"use client";

import SearchBarIcon from "@/atoms/Icon";
import { ChangeEvent } from "react";

type SearchBarProps = {
  value: string;
  handleChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ value, handleChangeValue }: SearchBarProps) => {
  return (
    <div className="flex border-amber-50">
      <SearchBarIcon />
      <input
        type=""
        placeholder="Rechercher . . ."
        value={value}
        onChange={handleChangeValue}
      />
    </div>
  );
};

export default SearchBar;
