import { MapPin, Clock, Phone, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

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
  const header = useInView();
  const content = useInView(0.05);

  return (
    <section id="contato" className="bg-secondary/40 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center transition-all duration-700 ease-out ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Contato
          </p>
          <h2 className="mt-3 sm:mt-4 font-playfair-display text-3xl sm:text-4xl md:text-5xl font-light">
            Visite-nos
          </h2>
          <div className="mt-4 sm:mt-6 h-px w-12 bg-accent mx-auto" />
        </div>

        {/* Content */}
        <div
          ref={content.ref}
          className={`mt-10 sm:mt-14 grid gap-8 sm:gap-10 md:grid-cols-2 items-start transition-all duration-700 delay-150 ease-out ${content.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Info column */}
          <div className="space-y-6 sm:space-y-8">

            {/* Endereço */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="mt-0.5 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                <MapPin size={15} className="text-accent" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Endereço</p>
                <p className="text-sm leading-relaxed text-foreground">
                  Rua Dante Grossi, 249<br />
                  Garibaldi — RS
                </p>
              </div>
            </div>

            {/* Horários */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="mt-0.5 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                <Clock size={15} className="text-accent" />
              </div>
              <div className="w-full min-w-0">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex w-full items-center justify-between"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Horários</p>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 text-muted-foreground ${open ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[500px] opacity-100 mt-3 sm:mt-4" : "max-h-0 opacity-0"}`}
                >
                  <div className="space-y-1.5 sm:space-y-2">
                    {horarios.map((item) => (
                      <div
                        key={item.dia}
                        className="flex items-center justify-between rounded-sm border border-border bg-background px-3 sm:px-4 py-2.5 sm:py-3 gap-2"
                      >
                        <p className="text-[11px] sm:text-xs font-medium shrink-0">{item.dia}</p>
                        <div className="flex gap-1.5 sm:gap-2 flex-wrap justify-end">
                          {item.periodos.map((periodo, i) => (
                            <span
                              key={i}
                              className="rounded-full bg-secondary px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] tracking-wide text-muted-foreground whitespace-nowrap"
                            >
                              {periodo}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {!open && (
                  <p className="mt-1 text-sm text-foreground">Seg–Dom &nbsp;·&nbsp; Almoço e Jantar</p>
                )}
              </div>
            </div>

            {/* Telefone */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="mt-0.5 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                <Phone size={15} className="text-accent" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Telefone / WhatsApp</p>
                <a
                  href="https://wa.me/5554996743601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground underline-offset-4 hover:underline transition-colors hover:text-accent"
                >
                  (54) 9674-3601
                </a>
              </div>
            </div>

            {/* CTA WhatsApp */}
            <a
              href="https://wa.me/5554996743601"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 sm:px-8 py-3 sm:py-3.5 text-[10px] uppercase tracking-[0.25em] text-background transition-opacity hover:opacity-80"
            >
              Reservar via WhatsApp
            </a>
          </div>

          {/* Mapa */}
          <div className="h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-sm border border-border shadow-sm">
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
