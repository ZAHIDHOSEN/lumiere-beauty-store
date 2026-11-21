import { Hero } from "../components/home/Hero";
import { ProductGrid } from "../components/home/ProductGrid";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { PRODUCTS } from "../data/products";
import { useProductFilter } from "../hooks/useProductFilter";



export default function HomePage() {
    const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredProducts,
    resetFilters,
  } = useProductFilter(PRODUCTS);
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917]">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery}></Navbar>

      <main>
         <Hero></Hero>

        <ProductGrid
          products={filteredProducts}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onResetFilters={resetFilters}
        />

        {/* Brand Philosophy Strip */}
        <section
          id="philosophy"
          className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
        >
          <div className="rounded-3xl bg-[#EFECE6] p-8 text-center sm:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A5B3A]">
              Our Philosophy
            </span>
            <h2 className="mx-auto mt-2 max-w-2xl text-2xl font-semibold text-[#1C1917] sm:text-3xl">
              100% Cruelty-Free, Dermatologist Tested & Sustainably Packaged
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-[#57534E]">
              Every formula is crafted without parabens or harsh sulfates—delivering visible glow with gentle botanical ingredients.
            </p>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </div>
  )
}
