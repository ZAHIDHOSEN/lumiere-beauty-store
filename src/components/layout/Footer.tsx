import { Camera, Share2, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-[#1C1917]/10 bg-[#F3EFEA]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold tracking-[0.2em] text-[#1C1917]">
              LUMIÈRE
            </p>
            <p className="mt-3 text-sm text-[#57534E]">
              Thoughtfully formulated botanical cosmetics designed for radiant, healthy skin.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#1C1917]">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#57534E]">
              <li><a href="#top" className="hover:text-[#9A5B3A]">Home</a></li>
              <li><a href="#products" className="hover:text-[#9A5B3A]">Collection</a></li>
              <li><a href="#philosophy" className="hover:text-[#9A5B3A]">Our Philosophy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#1C1917]">Categories</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#57534E]">
              <li><a href="#products" className="hover:text-[#9A5B3A]">Skincare</a></li>
              <li><a href="#products" className="hover:text-[#9A5B3A]">Makeup</a></li>
              <li><a href="#products" className="hover:text-[#9A5B3A]">Fragrance</a></li>
              <li><a href="#products" className="hover:text-[#9A5B3A]">Haircare</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#1C1917]">Connect</h3>
            <div className="mt-3 flex gap-4 text-[#44403C]">
              <a href="#footer" aria-label="Gallery" className="hover:text-[#9A5B3A]">
                <Camera className="h-5 w-5" />
              </a>
              <a href="#footer" aria-label="Share" className="hover:text-[#9A5B3A]">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="#footer" aria-label="Global" className="hover:text-[#9A5B3A]">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#1C1917]/10 pt-6 text-center text-xs text-[#78716C]">
          © {new Date().getFullYear()} LUMIÈRE Cosmetics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}