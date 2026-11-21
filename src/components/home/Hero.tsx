import { motion } from "framer-motion";
import { Button } from "../common/Button";

export function Hero() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A5B3A]">
            Botanical Luxury
          </span>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-[#1C1917] sm:text-5xl lg:text-6xl">
            Radiance Rooted in Pure Nature
          </h1>
          <p className="mt-4 max-w-md text-base text-[#57534E]">
            Clean, cruelty-free skincare and cosmetics crafted to bring out your natural everyday glow.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button onClick={scrollToProducts}>Explore Collection</Button>
            <Button
              variant="outline"
              onClick={() =>
                document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Our Philosophy
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-t-full rounded-b-3xl border border-[#1C1917]/10 bg-[#EFECE6]"
        >
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80"
            alt="Véloura Cosmetics Collection"
            className="h-95 w-full object-cover sm:h-115"
          />
        </motion.div>
      </div>
    </section>
  );
}