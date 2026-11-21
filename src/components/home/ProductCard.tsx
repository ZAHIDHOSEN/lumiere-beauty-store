import { motion } from "framer-motion";
import type { Product } from "../../types/product";


interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-2xl border border-[#1C1917]/10 bg-white transition hover:shadow-md"
    >
      <div className="relative aspect-4/5 overflow-hidden bg-[#EFECE6]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 rounded-full bg-[#1C1917] px-3 py-1 text-[11px] font-medium text-[#FAF8F5]">
            {product.tag}
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-[#9A5B3A]">
          {product.category}
        </p>
        <h3 className="mt-1 text-base font-semibold text-[#1C1917]">
          {product.name}
        </h3>
        <p className="mt-2 text-sm font-semibold text-[#44403C]">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
}