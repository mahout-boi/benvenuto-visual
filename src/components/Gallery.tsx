import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Galeria
        </p>
        <h2 className="mt-4 text-center font-playfair-display text-4xl font-light md:text-5xl">
          Nossos Pratos
        </h2>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Em breve.
        </p>
      </div>

      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          {selected !== null && <img className="h-auto w-full rounded" />}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
