import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-6">

        {/* Top row */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <p className="font-benvenuto-display text-3xl font-light tracking-wide text-foreground">
            Benvenuto
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/restaurantebenvenuto"
              aria-label="Instagram do Benvenuto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
            >
              <Instagram size={15} />
            </a>
            <a
              href="https://wa.me/5554996743601"
              aria-label="WhatsApp do Benvenuto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
            >
              <MessageCircle size={15} />
            </a>
          </div>

          <p className="text-[11px] tracking-wide text-muted-foreground">
            © {new Date().getFullYear()} Benvenuto · Todos os direitos reservados.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-border/50" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-center gap-2 md:flex-row md:justify-between">
          <p className="text-[11px] text-muted-foreground/60">
            Rua Dante Grossi, 249 · Garibaldi — RS
          </p>
          <p className="font-playfair-display text-[11px] italic text-muted-foreground/60">
            Alimentando bons momentos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
