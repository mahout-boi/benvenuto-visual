import {Instagram} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="font-serif-display text-2xl font-light">Benvenuto</p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://www.instagram.com/restaurantebenvenuto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            aria-label="Instagram"
            target="_blank"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Instagram size={20} />
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
