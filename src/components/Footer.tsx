import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="font-serif-display text-2xl font-light tracking-wide text-foreground">
            Benvenuto
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/restaurantebenvenuto"
              aria-label="Instagram do Benvenuto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-foreground hover:text-foreground"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://wa.me/5554996743601"
              aria-label="WhatsApp do Benvenuto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-foreground hover:text-foreground"
            >
              <MessageCircle size={16} />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Benvenuto · Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
