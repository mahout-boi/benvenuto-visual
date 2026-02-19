import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-restaurant.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Interior elegante do restaurante Benvenuto"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-20 text-center px-6">
        <p className="mb-3 text-xs uppercase tracking-[0.5em] text-white/60">
          Garibaldi · RS
        </p>
        <h1 className="font-benvenuto-display text-7xl font-light tracking-wide text-white md:text-[9rem] leading-none">
          Benvenuto
        </h1>
        <p className="mt-3 text-sm font-playfair-display uppercase tracking-[0.5em] text-white/70 md:text-base">
          Alimentando bons momentos
        </p>
        <a
          href="https://wa.me/5554996743601"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2.5 border border-white/50 px-8 py-3.5 text-xs uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white hover:text-foreground"
        >
          <MessageCircle size={15} />
          Reservar Mesa
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-white text-[10px] uppercase tracking-[0.3em]">scroll</span>
        <div className="h-8 w-px bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
