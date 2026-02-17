import { useState, useEffect } from "react";

type NavbarProps = {
  setAbaAtiva: (aba: string) => void;
};

const navLinks = [
  { id: "home", label: "Início" },
  { id: "eventos", label: "Eventos" },
  { id: "galeria", label: "Galeria" },
  { id: "cardapio", label: "Cardápio" },
  { id: "contato", label: "Contato" },
];

const Navbar = ({ setAbaAtiva }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${scrolled
        ? "bg-background/90 py-3 shadow-sm backdrop-blur"
        : "bg-transparent py-4"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => setAbaAtiva("home")}
          className={`font-serif-display text-xl font-light transition-colors ${scrolled ? "text-foreground" : "text-white"
            }`}
        >
          Benvenuto
        </button>
        <div className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setAbaAtiva(link.id)}
              className={`text-xs uppercase tracking-[0.2em] transition-colors ${scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/70 hover:text-white"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
