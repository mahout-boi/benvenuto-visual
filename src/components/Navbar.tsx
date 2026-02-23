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
];

// ====== HORÁRIOS ======
const horarios = [
  { dia: "Segunda-feira", periodos: ["18:30–22:00"] },
  { dia: "Terça-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
  { dia: "Quarta-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
  { dia: "Quinta-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
  { dia: "Sexta-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
  { dia: "Sábado", periodos: ["11:30–14:00", "19:00–22:00"] },
  { dia: "Domingo", periodos: ["11:30–14:00"] },
];

const feriados = ["01/01", "21/04", "25/12"];
const diaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const diasMap: Record<string, string> = {
  Dom: "Domingo", Seg: "Segunda-feira", Ter: "Terça-feira",
  Qua: "Quarta-feira", Qui: "Quinta-feira", Sex: "Sexta-feira", Sáb: "Sábado",
};

function toMin(hora: string) {
  const [h, m] = hora.split(":").map(Number);
  return h * 60 + m;
}

function verificarStatus() {
  const agora = new Date();
  const minutosAtuais = agora.getHours() * 60 + agora.getMinutes();
  const diaAtual = diasMap[diaSemana[agora.getDay()]];
  const data = agora.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
  const [dia, mes] = data.split("/");

  if (feriados.includes(`${dia}/${mes}`)) return { texto: "Fechado (Feriado)", aberto: false };

  const diaHorario = horarios.find(h => h.dia === diaAtual);
  if (!diaHorario) return { texto: "Fechado", aberto: false };

  for (const periodo of diaHorario.periodos) {
    const [inicio, fim] = periodo.split("–");
    const ini = toMin(inicio);
    const fimMin = toMin(fim);
    if (minutosAtuais >= ini && minutosAtuais <= fimMin) return { texto: "Aberto agora", aberto: true };
    if (minutosAtuais < ini) return { texto: `Abre às ${inicio}`, aberto: false };
  }
  return { texto: "Fechado", aberto: false };
}

const Navbar = ({ setAbaAtiva, abaAtiva }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState(verificarStatus());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    const interval = setInterval(() => setStatus(verificarStatus()), 1000);
    return () => { window.removeEventListener("scroll", onScroll); clearInterval(interval); };
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
            ? "bg-background/95 shadow-sm backdrop-blur-md py-2 sm:py-3"
            : "bg-background/80 backdrop-blur-sm py-3 sm:py-4"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo + Status */}
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <button
              onClick={() => handleNav("home")}
              className="font-serif-display text-lg sm:text-xl font-light text-foreground hover:opacity-70 shrink-0"
            >
              Benvenuto
            </button>

            <span className="opacity-50 hidden xs:inline">·</span>

            <span
              className={`font-serif-display text-xs sm:text-sm md:text-xl font-light truncate ${
                status.aberto ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.texto}
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden gap-6 lg:gap-8 md:flex">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`relative text-xs uppercase tracking-[0.2em] ${
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

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex h-10 w-10 items-center justify-center"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-64 sm:w-72 bg-background shadow-xl flex flex-col animate-in slide-in-from-right duration-300">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button onClick={() => setMenuOpen(false)} className="flex h-10 w-10 items-center justify-center">
                <X size={22} />
              </button>
            </div>

            {/* Status */}
            <div className="px-6 pb-4 border-b border-border">
              <span
                className={`text-sm font-serif-display ${
                  status.aberto ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.texto}
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-col py-4">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`px-6 py-4 text-left text-sm uppercase tracking-[0.2em] transition-colors ${
                    abaAtiva === link.id
                      ? "text-foreground bg-secondary/50 border-l-2 border-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
