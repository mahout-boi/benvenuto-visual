import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Galeria
        </p>
        <h2 className="mt-4 text-center font-serif-display text-4xl font-light md:text-5xl">
          Nossos Pratos
        </h2>

        {/* <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {dishes.map((dish, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="group relative aspect-square overflow-hidden focus:outline-none"
            >
              <img
                src={dish.src}
                alt={dish.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-4 font-serif-display text-lg text-white">
                  {dish.name}
                </span>
              </div>
            </button>
          ))}
        </div> */}
      </div>

      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          {selected !== null && (
            <img
            //   src={dishes[selected].src}
            //   alt={dishes[selected].name}
            //   className="h-auto w-full rounded"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
