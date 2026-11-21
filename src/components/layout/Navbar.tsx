import { X, Search } from "lucide-react";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function Navbar({ searchQuery, onSearchChange }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1C1917]/10 bg-[#FAF8F5]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-xl font-bold tracking-[0.2em] text-[#1C1917]">
          VÉLOURA
        </a>

        <nav className="hidden gap-7 text-sm font-medium text-[#44403C] md:flex">
          <a href="#products" className="hover:text-[#9A5B3A]">Collection</a>
          <a href="#philosophy" className="hover:text-[#9A5B3A]">Philosophy</a>
          <a href="#footer" className="hover:text-[#9A5B3A]">Contact</a>
        </nav>

        <div className="relative w-full sm:w-64">
          <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#78716C]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-full border border-[#1C1917]/15 bg-white py-2 pr-9 pl-10 text-sm outline-none focus:border-[#9A5B3A]"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-[#78716C] hover:text-[#1C1917]"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}