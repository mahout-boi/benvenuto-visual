import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  setAbaAtiva: (aba: string) => void;
  abaAtiva: string;
};

const navLinks = [
  { id: "home", label: "Início" },
  { id: "eventos", label: "Eventos" },
  { id: "galeria", label: "Galeria" },
  { id: "cardapio", label: "Cardápio" },
  { id: "contato", label: "Contato" },
];

const Navbar = ({ setAbaAtiva, abaAtiva }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setAbaAtiva(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 shadow-sm backdrop-blur-md py-3"
            : "bg-background/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="font-serif-display text-xl font-light text-foreground transition-opacity hover:opacity-70"
          >
            Benvenuto
          </button>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`relative text-xs uppercase tracking-[0.2em] transition-colors ${
                  abaAtiva === link.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {abaAtiva === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`font-playfair-display text-3xl font-light transition-colors ${
                  abaAtiva === link.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
