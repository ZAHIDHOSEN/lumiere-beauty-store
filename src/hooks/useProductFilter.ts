import { useState } from "react";
import type { Category, Product } from "../types/product";


export function useProductFilter(products: Product[]) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.toLowerCase().trim();

  const filteredProducts = products.filter((item) => {
    const matchCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchSearch = item.name.toLowerCase().includes(query) || item.category.toLowerCase().includes(query);

    return matchCategory && matchSearch;
  });

  function resetFilters() {
    setSelectedCategory("All");
    setSearchQuery("");
  }

  return {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredProducts,
    resetFilters,
  };
}