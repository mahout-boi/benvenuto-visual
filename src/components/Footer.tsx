import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="font-serif-display text-2xl font-light">Benvenuto</p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Facebook size={20} />
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Benvenuto. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
