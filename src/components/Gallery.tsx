import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

import prato1 from "@/assets/optimized/prato-1.webp";
import mesa1 from "@/assets/optimized/mesa-1.webp";
import restaurante from "@/assets/optimized/benvenuto-restaurante.webp";
import eventos1 from "@/assets/optimized/eventos-1.webp";

const images = [
  { src: prato1, label: "Prato da Casa" },
  { src: mesa1, label: "Ambiente" },
  { src: restaurante, label: "Salão Principal" },
  { src: eventos1, label: "Eventos" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const header = useInView();
  const grid = useInView(0.05);

  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [selected]);

  return (
    <>
      <section id="galeria" className="bg-secondary/40 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            ref={header.ref}
            className={`text-center transition-all duration-700 ease-out ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Galeria</p>
            <h2 className="mt-3 sm:mt-4 font-playfair-display text-3xl sm:text-4xl md:text-5xl font-light">Nossos Momentos</h2>
            <div className="mt-4 sm:mt-6 h-px w-12 bg-accent mx-auto" />
          </div>

          <div
            ref={grid.ref}
            className={`mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 transition-all duration-700 delay-150 ease-out ${grid.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div
              className="sm:col-span-2 sm:row-span-2 cursor-pointer overflow-hidden rounded-sm group"
              onClick={() => setSelected(0)}
            >
              <img src={images[0].src} alt={images[0].label} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" style={{ minHeight: "240px" }} />
            </div>

            {images.slice(1).map((img, i) => (
              <div key={i} className="cursor-pointer overflow-hidden rounded-sm group aspect-square" onClick={() => setSelected(i + 1)}>
                <div className="relative h-full w-full">
                  <img src={img.src} alt={img.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-3">
                    <span className="text-xs uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={() => setSelected(null)}>
          <button onClick={() => setSelected(null)} className="absolute right-3 top-3 sm:right-5 sm:top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10">
            <X size={16} />
          </button>
          <img src={images[selected].src} alt={images[selected].label} className="max-h-[85vh] max-w-full sm:max-w-[90vw] rounded-sm object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/60">{images[selected].label}</p>
        </div>
      )}
    </>
  );
};

export default Gallery;
