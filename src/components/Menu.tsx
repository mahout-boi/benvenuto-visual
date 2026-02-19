import { useEffect, useRef, useState } from "react";

import menu1 from "@/cardapio/menu-1.jpg";
import menu2 from "@/cardapio/menu-2.jpg";
import menu3 from "@/cardapio/menu-3.jpg";
import menu4 from "@/cardapio/menu-4.jpg";
import menu5 from "@/cardapio/menu-5.jpg";
import menu6 from "@/cardapio/menu-6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const imagensMenu = [menu1, menu2, menu3, menu4, menu5, menu6];

const Menu = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperNormalRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    document.body.style.overflow = fullscreen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [fullscreen]);

  return (
    <>
      {/* FULLSCREEN */}
      {fullscreen && (
        <div className="fixed inset-0 z-50 bg-black">
          <button
            onClick={() => setFullscreen(false)}
            className="absolute right-5 top-5 z-[9999] rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-widest text-white backdrop-blur-md transition hover:bg-white hover:text-black"
          >
            Fechar ✕
          </button>
          <div className="absolute left-5 top-5 z-[9999] rounded-full bg-black/50 px-4 py-2 text-xs text-white backdrop-blur-md">
            {activeIndex + 1} / {imagensMenu.length}
          </div>
          <Swiper
            modules={[Pagination, Navigation]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            loop
            initialSlide={activeIndex}
            speed={500}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            className="h-full w-full"
          >
            {imagensMenu.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Cardápio página ${i + 1}`}
                  className="mx-auto h-full w-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* NORMAL */}
      <section id="cardapio" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Cardápio
          </p>
          <h2 className="mt-4 text-center font-playfair-display text-4xl font-light md:text-5xl">
            Menu
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            {activeIndex + 1} / {imagensMenu.length}
          </p>

          <Swiper
            modules={[Pagination, Navigation]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            loop
            speed={500}
            onSwiper={(s) => (swiperNormalRef.current = s)}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            className="mt-10"
          >
            {imagensMenu.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Cardápio página ${i + 1}`}
                  loading="lazy"
                  onClick={() => { setActiveIndex(i); setFullscreen(true); }}
                  className="mx-auto h-[65vh] w-full cursor-pointer rounded-lg object-contain shadow-md transition-transform duration-300 hover:scale-[1.02]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Menu;
