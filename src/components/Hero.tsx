import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-restaurant.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Interior elegante do restaurante Benvenuto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-24 text-center">
        <h1 className="font-benvenuto-display text-7xl font-light tracking-wide text-white md:text-[10rem]">
          Benvenuto
        </h1>
        <p className="mt-2 text-sm font-playfair-display uppercase tracking-[0.5em] text-white/80 md:text-base">
          Alimentando bons momentos
        </p>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 border border-white/40 px-8 py-3 text-xs uppercase tracking-[0.3em] text-white transition-all hover:bg-white hover:text-foreground"
        >
          <MessageCircle size={16} />
          Reservar Mesa
        </a>
      </div>
      <div id = 'scroll-indicator' className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce rounded-full border-2 border-white/80 p-2">
        
      </div>
    </section>
  );
};

export default Hero;
