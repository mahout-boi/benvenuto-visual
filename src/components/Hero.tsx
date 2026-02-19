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
      {/* Gradiente aprimorado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center pb-8 text-center px-6">
        <p className="text-[10px] uppercase tracking-[0.6em] text-white/60 animate-fade-in">
          Garibaldi · RS
        </p>

        <h1
          className="mt-5 font-benvenuto-display text-[5rem] font-light tracking-wide text-white md:text-[9rem] leading-none"
          style={{ animationDelay: "0.15s" }}
        >
          Benvenuto
        </h1>

        <div className="mt-5 h-px w-12 bg-white/40" />

        <p className="mt-5 font-playfair-display text-sm uppercase tracking-[0.5em] text-white/70 md:text-base italic">
          Alimentando bons momentos
        </p>

        <a
          href="https://wa.me/5554996743601"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2.5 border border-white/50 px-9 py-3.5 text-[10px] uppercase tracking-[0.35em] text-white transition-all duration-300 hover:bg-white hover:text-foreground"
        >
          <MessageCircle size={13} />
          Reservar Mesa
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-[9px] uppercase tracking-[0.4em]">scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-white/70 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
