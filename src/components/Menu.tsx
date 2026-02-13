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

const imagensMenu = [
  menu1,
  menu2,
  menu3,
  menu4,
  menu5,
  menu6,
];

const Menu = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperNormalRef = useRef<SwiperType | null>(null);

  // Bloqueia scroll do body no fullscreen
  useEffect(() => {
    document.body.style.overflow = fullscreen ? "hidden" : "auto";
  }, [fullscreen]);

  return (
    <>
      {/* ================= TELA CHEIA ================= */}
      {fullscreen && (
        <div className="fixed inset-0 z-50 bg-black">

          {/* FECHAR */}
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-6 right-6 z-[9999]
                       rounded-full border border-white/40
                       px-4 py-2 text-sm text-white
                       backdrop-blur-md
                       hover:bg-white hover:text-black transition"
          >
            Fechar ✕
          </button>

          {/* CONTADOR */}
          <div className="absolute top-6 left-6 z-[9999]
                          rounded-full bg-black/60
                          px-4 py-2 text-sm text-white
                          backdrop-blur-md">
            {activeIndex + 1} / {imagensMenu.length}
          </div>

          <Swiper
            modules={[Pagination, Navigation]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            loop
            initialSlide={activeIndex}
            speed={600}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="h-full w-full"
          >
            {imagensMenu.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Cardápio página ${index + 1}`}
                  className="mx-auto h-full w-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* ================= CARDÁPIO NORMAL ================= */}
      <section id="cardapio" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Cardápio
          </p>

          <h2 className="mt-4 text-center font-playfair-display text-4xl font-light md:text-5xl">
            Menu
          </h2>

          {/* CONTADOR NORMAL */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            {activeIndex + 1} / {imagensMenu.length}
          </div>

          <Swiper
            modules={[Pagination, Navigation]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={32}
            slidesPerView={1}
            loop
            speed={600}
            onSwiper={(swiper) => (swiperNormalRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="mt-10"
          >
            {imagensMenu.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Cardápio página ${index + 1}`}
                  onClick={() => {
                    setActiveIndex(index);
                    setFullscreen(true);
                  }}
                  className="mx-auto h-[70vh] w-full cursor-pointer
                            rounded-xl object-contain shadow-lg
                            transition-transform duration-300
                            hover:scale-[1.03]"
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
