import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import heroImg from "@/assets/optimized/hero-restaurant.webp";

const Hero = () => (
  <section id="home" className="relative h-[100svh] w-full overflow-hidden">
    <img src={heroImg} alt="Interior elegante do restaurante Benvenuto" className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />

    <div className="relative z-10 flex h-full flex-col items-center justify-center pb-8 text-center px-4 sm:px-6">
      <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.6em] text-white/60">Garibaldi · RS</p>
      <h1 className="mt-4 sm:mt-5 font-benvenuto-display text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-light tracking-wide text-white leading-none">Benvenuto</h1>
      <div className="mt-4 sm:mt-5 h-px w-10 sm:w-12 bg-white/40" />
      <p className="mt-4 sm:mt-5 font-playfair-display text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.5em] text-white/70 italic">Alimentando bons momentos</p>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 sm:mt-10 inline-flex items-center gap-2 sm:gap-2.5 border border-white/50 px-6 sm:px-9 py-3 sm:py-3.5 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white transition-all duration-300 hover:bg-white hover:text-foreground">
        <MessageCircle size={13} />
        Reservar Mesa
      </a>
    </div>

    <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50 hidden sm:flex">
      <span className="text-white text-[9px] uppercase tracking-[0.4em]">scroll</span>
      <div className="h-10 w-px bg-gradient-to-b from-white/70 to-transparent" />
    </div>
  </section>
);

export default Hero;
