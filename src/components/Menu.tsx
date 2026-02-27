import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useInView } from "@/hooks/use-in-view";

import menu1 from "@/cardapio/menu-1.jpg";
import menu2 from "@/cardapio/menu-2.jpg";
import menu3 from "@/cardapio/menu-3.jpg";
import menu4 from "@/cardapio/menu-4.jpg";
import menu5 from "@/cardapio/menu-5.jpg";
import menu6 from "@/cardapio/menu-6.jpg";
import cardapiopd from "@/cardapiopdf/Menu Benvenuto 2026_Compressed.pdf";

const imagensMenu = [menu1, menu2, menu3, menu4, menu5, menu6];

const Menu = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const touchStartX = useRef(0);
  const header = useInView();
  const body = useInView(0.05);

  const goTo = useCallback((newIndex: number, dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setTimeout(() => setAnimating(false), 400);
    }, 10);
  }, [animating]);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + imagensMenu.length) % imagensMenu.length, "left");
  }, [activeIndex, goTo]);

  const next = useCallback(() => {
    goTo((activeIndex + 1) % imagensMenu.length, "right");
  }, [activeIndex, goTo]);
  const changeImage = (newIndex: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setTimeout(() => setIsAnimating(false), 50);
    }, 200);
  };

  const prev = () =>
    changeImage((activeIndex - 1 + imagensMenu.length) % imagensMenu.length);

  const next = () =>
    changeImage((activeIndex + 1) % imagensMenu.length);

  useEffect(() => {
    if (!fullscreen) return;
    document.body.style.overflow = "hidden";
    if (!fullscreen) return;

    document.body.style.overflow = "hidden";

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [fullscreen, next, prev]);

  const handleSwipe = (startX: number, endX: number) => {
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => { handleSwipe(touchStartX.current, e.changedTouches[0].clientX); };

  const slideClass = animating
    ? direction === "right"
      ? "animate-slide-in-right"
      : "animate-slide-in-left"
    : "";
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [fullscreen, activeIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  const imageClasses = `
    transition-all duration-300 ease-out
    ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}
  `;

  return (
    <>
      {/* Fullscreen lightbox */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 flex flex-col transition-opacity duration-300 ${fullscreen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!fullscreen}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-xs text-white/50 uppercase tracking-[0.3em]">{activeIndex + 1} / {imagensMenu.length}</span>
          <button onClick={() => setFullscreen(false)} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white">
            <X size={16} />
          </button>
        </div>
        <div className="relative flex flex-1 items-center justify-center px-4 overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <button onClick={prev} className="absolute left-3 sm:left-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-110 active:scale-95">
            <ChevronLeft size={20} />
          </button>
          <img
            key={activeIndex}
            src={imagensMenu[activeIndex]}
            alt={`Cardápio página ${activeIndex + 1}`}
            className={`max-h-full max-w-full object-contain ${slideClass}`}
            style={{ animation: "menu-fade-scale 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
          />
          <button onClick={next} className="absolute right-3 sm:right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-110 active:scale-95">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      {/* FULLSCREEN */}
      {fullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          <div className="flex items-center justify-between px-6 py-4">
            <span className="text-xs text-white/50 uppercase tracking-[0.3em]">
              {activeIndex + 1} / {imagensMenu.length}
            </span>

            <button
              onClick={() => setFullscreen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              <X size={16} />
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              onClick={prev}
              className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 hover:scale-110 transition"
            >
              <ChevronLeft size={18} />
            </button>

            <img
              src={imagensMenu[activeIndex]}
              alt={`Cardápio página ${activeIndex + 1}`}
              className={`max-h-full max-w-full object-contain ${imageClasses}`}
            />

            <button
              onClick={next}
              className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 hover:scale-110 transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* SECTION */}
      <section id="cardapio" className="py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div ref={header.ref} className={`text-center transition-all duration-700 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Cardápio</p>
            <h2 className="mt-4 font-playfair-display text-4xl font-light">Menu</h2>
          <div
            ref={header.ref}
            className={`text-center transition-all duration-700 ${
              header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Cardápio
            </p>
            <h2 className="mt-4 font-playfair-display text-4xl font-light">
              Menu
            </h2>
            <div className="mt-6 h-px w-12 bg-accent mx-auto" />
          </div>

          <div ref={body.ref} className={`mt-12 transition-all duration-700 delay-150 ${body.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="group relative overflow-hidden rounded-sm shadow-lg" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <div className="relative overflow-hidden">
                <img
                  key={activeIndex}
                  src={imagensMenu[activeIndex]}
                  alt={`Cardápio página ${activeIndex + 1}`}
                  onClick={() => setFullscreen(true)}
                  className="mx-auto max-h-[70vh] w-full cursor-zoom-in object-contain"
                  style={{ animation: "menu-fade-slide 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
                />
              </div>
              <button onClick={prev} aria-label="Página anterior" className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border/50 bg-background/80 text-foreground/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-accent hover:text-accent-foreground hover:scale-110 active:scale-95 focus:opacity-100">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} aria-label="Próxima página" className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border/50 bg-background/80 text-foreground/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-accent hover:text-accent-foreground hover:scale-110 active:scale-95 focus:opacity-100">
                <ChevronRight size={18} />
              </button>
          <div
            ref={body.ref}
            className={`mt-12 transition-all duration-700 delay-150 ${
              body.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className="relative overflow-hidden rounded-sm shadow-lg"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={imagensMenu[activeIndex]}
                alt={`Cardápio página ${activeIndex + 1}`}
                onClick={() => setFullscreen(true)}
                className={`mx-auto max-h-[70vh] w-full cursor-zoom-in object-contain ${imageClasses}`}
              />
            </div>

            <div className="mt-5 flex justify-center gap-2 overflow-x-auto">
              {imagensMenu.map((img, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (i === activeIndex) return;
                    goTo(i, i > activeIndex ? "right" : "left");
                  }}
                  className={`h-14 w-10 overflow-hidden rounded-sm border-2 transition-all duration-300 ${i === activeIndex ? "border-accent scale-105 opacity-100" : "border-border opacity-40 hover:opacity-70 hover:scale-105"}`}
                  onClick={() => changeImage(i)}
                  className={`h-14 w-10 overflow-hidden rounded-sm border-2 transition ${
                    i === activeIndex
                      ? "border-accent"
                      : "border-border opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground tracking-wider">{activeIndex + 1} / {imagensMenu.length} · clique na imagem para expandir</p>
            <p className="mt-4 text-center text-xs text-muted-foreground tracking-wider">
              {activeIndex + 1} / {imagensMenu.length} · clique na imagem para expandir
            </p>

            <div className="mt-8 flex justify-center">
              <a href={cardapiopd} download className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-light tracking-wide transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-md">📄 Baixar cardápio em PDF</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
