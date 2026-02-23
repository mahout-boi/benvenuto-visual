import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import menu1 from "@/cardapio/menu-1.jpg";
import menu2 from "@/cardapio/menu-2.jpg";
import menu3 from "@/cardapio/menu-3.jpg";
import menu4 from "@/cardapio/menu-4.jpg";
import menu5 from "@/cardapio/menu-5.jpg";
import menu6 from "@/cardapio/menu-6.jpg";

const imagensMenu = [menu1, menu2, menu3, menu4, menu5, menu6];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const Menu = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const header = useInView();
  const body = useInView(0.05);

  useEffect(() => {
    document.body.style.overflow = fullscreen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [fullscreen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!fullscreen) return;
      if (e.key === "Escape") setFullscreen(false);
      if (e.key === "ArrowRight") setActiveIndex(i => (i + 1) % imagensMenu.length);
      if (e.key === "ArrowLeft") setActiveIndex(i => (i - 1 + imagensMenu.length) % imagensMenu.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [fullscreen]);

  // Touch swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setActiveIndex(i => (i + 1) % imagensMenu.length);
      else setActiveIndex(i => (i - 1 + imagensMenu.length) % imagensMenu.length);
    }
  };

  const prev = () => setActiveIndex(i => (i - 1 + imagensMenu.length) % imagensMenu.length);
  const next = () => setActiveIndex(i => (i + 1) % imagensMenu.length);

  return (
    <>
      {/* ── FULLSCREEN LIGHTBOX ─────────────────── */}
      {fullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
            <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-[0.3em]">
              {activeIndex + 1} / {imagensMenu.length}
            </span>
            <button
              onClick={() => setFullscreen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
            >
              <X size={16} />
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-2 sm:px-14"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={prev}
              className="absolute left-2 sm:left-4 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10 z-10"
            >
              <ChevronLeft size={16} />
            </button>

            <img
              src={imagensMenu[activeIndex]}
              alt={`Cardápio página ${activeIndex + 1}`}
              className="max-h-full max-w-full object-contain"
            />

            <button
              onClick={next}
              className="absolute right-2 sm:right-4 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10 z-10"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="flex justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-3 sm:py-4 overflow-x-auto">
            {imagensMenu.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-10 w-7 sm:h-12 sm:w-9 shrink-0 overflow-hidden rounded-sm border-2 transition-all duration-200 ${
                  i === activeIndex ? "border-white opacity-100" : "border-transparent opacity-40 hover:opacity-70"
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── SECTION NORMAL ──────────────────────── */}
      <section id="cardapio" className="py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">

          <div
            ref={header.ref}
            className={`text-center transition-all duration-700 ease-out ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Cardápio
            </p>
            <h2 className="mt-3 sm:mt-4 font-playfair-display text-3xl sm:text-4xl md:text-5xl font-light">
              Menu
            </h2>
            <div className="mt-4 sm:mt-6 h-px w-12 bg-accent mx-auto" />
          </div>

          <div
            ref={body.ref}
            className={`mt-8 sm:mt-12 transition-all duration-700 delay-150 ease-out ${body.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Main image with swipe */}
            <div
              className="relative overflow-hidden rounded-sm shadow-lg group"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={imagensMenu[activeIndex]}
                alt={`Cardápio página ${activeIndex + 1}`}
                loading="lazy"
                onClick={() => setFullscreen(true)}
                className="mx-auto max-h-[60vh] sm:max-h-[72vh] w-full cursor-zoom-in object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 pointer-events-none">
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="pointer-events-auto flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-background/80 border border-border text-foreground shadow transition hover:bg-background"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="pointer-events-auto flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-background/80 border border-border text-foreground shadow transition hover:bg-background"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Thumbnails — scrollable on mobile */}
            <div className="mt-4 sm:mt-5 flex justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-1">
              {imagensMenu.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-11 w-8 sm:h-14 sm:w-10 shrink-0 overflow-hidden rounded-sm border-2 transition-all duration-200 ${
                    i === activeIndex
                      ? "border-accent opacity-100"
                      : "border-border opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>

            <p className="mt-3 sm:mt-4 text-center text-[10px] sm:text-xs text-muted-foreground tracking-wider">
              {activeIndex + 1} / {imagensMenu.length} &nbsp;·&nbsp; clique na imagem para expandir
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
