import { useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };

  return {
    search,
    setSearch,
    handleSearch,
  };
};
