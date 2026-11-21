import { CATEGORIES } from "../../data/products";
import type { Category, Product } from "../../types/product";
import { Button } from "../common/Button";
import { ProductCard } from "./ProductCard";


interface ProductGridProps {
  products: Product[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  onResetFilters: () => void;
}

export function ProductGrid({
  products,
  selectedCategory,
  onSelectCategory,
  onResetFilters,
}: ProductGridProps) {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Header & Category Filter */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A5B3A]">
            Curated Essentials
          </span>
          <h2 className="mt-2 text-3xl font-semibold text-[#1C1917]">
            Explore Our Collection
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition cursor-pointer ${
                  active
                    ? "bg-[#1C1917] text-[#FAF8F5]"
                    : "border border-[#1C1917]/15 bg-white text-[#44403C] hover:border-[#1C1917]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Cards Grid */}
      {products.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-[#1C1917]/10 bg-white py-14 text-center">
          <p className="text-base text-[#57534E]">
            No products matched your search or category filter.
          </p>
          <Button variant="outline" onClick={onResetFilters} className="mt-4">
            Reset Filters
          </Button>
        </div>
      )}
    </section>
  );
}