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

const Navbar = ({ setAbaAtiva }: NavbarProps) => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-40 bg-white py-3 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => setAbaAtiva("home")}
          className="font-serif-display text-xl font-light text-foreground transition-colors"
        >
          Benvenuto
        </button>
        <div className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setAbaAtiva(link.id)}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
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
