import { MapPin, Clock, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Contato
        </p>
        <h2 className="mt-4 text-center font-serif-display text-4xl font-light md:text-5xl">
          Visite-nos
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium">Endereço</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Rua Example, 123 — Centro<br />
                  São Paulo, SP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={20} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium">Horário</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ter a Dom — 12h às 15h / 19h às 23h<br />
                  Segunda — Fechado
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={20} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium">Telefone</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  (11) 0000-0000
                </p>
              </div>
            </div>
          </div>

          <div className="h-72 overflow-hidden rounded bg-muted md:h-auto">
            <iframe
              title="Localização do Benvenuto"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197529657!2d-46.654!3d-23.563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 288 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
