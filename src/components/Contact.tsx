import { MapPin, Clock, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";

const horarios = [
  { dia: "Segunda-feira", periodos: ["18:30–22:00"] },
  { dia: "Terça-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
  { dia: "Quarta-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
  { dia: "Quinta-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
  { dia: "Sexta-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
  { dia: "Sábado", periodos: ["11:30–14:00", "19:00–22:00"] },
  { dia: "Domingo", periodos: ["11:30–14:00"] },
];

const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="contato" className="bg-secondary py-20 md:py-28 text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Contato
        </p>
        <h2 className="mt-4 text-center font-serif-display text-4xl font-light md:text-5xl">
          Visite-nos
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-2 items-start">
          {/* Coluna esquerda */}
          <div className="space-y-8">
            {/* Endereço */}
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                <MapPin size={16} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium">Endereço</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Rua Dante Grossi, 249<br />
                  Garibaldi — RS
                </p>
              </div>
            </div>

            {/* Horários */}
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                <Clock size={16} className="text-accent" />
              </div>
              <div className="w-full">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex w-full items-center justify-between text-sm font-medium"
                >
                  Horários de funcionamento
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 text-muted-foreground ${open ? "rotate-180" : ""}`}
                  />
                </button>

                {open && (
                  <div className="mt-4 space-y-2">
                    {horarios.map((item) => (
                      <div
                        key={item.dia}
                        className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3"
                      >
                        <p className="text-sm font-medium">{item.dia}</p>
                        <div className="flex gap-2">
                          {item.periodos.map((periodo, i) => (
                            <span
                              key={i}
                              className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                            >
                              {periodo}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Telefone */}
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                <Phone size={16} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium">Telefone / WhatsApp</p>
                <a
                  href="https://wa.me/5554996743601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  (54) 9674-3601
                </a>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="h-[380px] overflow-hidden rounded-xl border border-border bg-muted shadow-sm">
            <iframe
              title="Localização do Benvenuto"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.9022036808595!2d-51.5349504!3d-29.2551131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c17e9146c5e15%3A0xc47fa6e8cacd107b!2sBenvenuto%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
              className="h-full w-full border-0"
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
