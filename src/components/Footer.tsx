import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-muted bg-neutral-100 py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="font-serif-display text-3xl font-light tracking-wide">
          Benvenuto
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href="https://www.instagram.com/restaurantebenvenuto"
            aria-label="Instagram"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground transition-all hover:scale-110 hover:text-foreground hover:border-foreground"
          >
            <Instagram size={18} />
          </a>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Benvenuto. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
