import { MapPin, Clock, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";

/* ===== HORÁRIOS ===== */
const horarios = [
  { dia: "Sexta-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
  { dia: "Sábado", periodos: ["11:30–14:00", "19:00–22:00"] },
  { dia: "Domingo", periodos: ["11:30–14:00"] },
  { dia: "Segunda-feira", periodos: ["18:30–22:00"] },
  { dia: "Terça-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
  { dia: "Quarta-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
  { dia: "Quinta-feira", periodos: ["11:30–13:15", "19:00–22:00"] },
];

const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="contato"
      className="bg-[#e6ddcf] py-24 md:py-32 text-foreground"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Contato
        </p>

        <h2 className="mt-4 text-center font-serif-display text-4xl font-light md:text-5xl">
          Visite-nos
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2 items-start">
          {/* ===== COLUNA ESQUERDA ===== */}
          <div className="space-y-10">
            {/* ENDEREÇO */}
            <div className="flex items-start gap-4">
              <MapPin size={20} className="mt-1 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium">Endereço</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Rua Dante Grossi, 249<br />
                  Garibaldi — RS
                </p>
              </div>
            </div>

            {/* HORÁRIOS */}
            <div className="flex items-start gap-4">
              <Clock size={20} className="mt-1 shrink-0 text-accent" />

              <div className="w-full">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex w-full items-center justify-between text-sm font-medium"
                >
                  Horários de funcionamento
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>

                {open && (
                  <div className="mt-5 space-y-4">
                    {horarios.map((item) => (
                      <div
                        key={item.dia}
                        className="rounded-lg border border-muted/40 bg-background px-4 py-3"
                      >
                        <p className="text-sm font-medium mb-2">
                          {item.dia}
                        </p>

                        <div className="flex flex-wrap gap-2">
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

            {/* TELEFONE */}
            <div className="flex items-start gap-4">
              <Phone size={20} className="mt-1 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium">Telefone</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  (54) 9674-3601
                </p>
              </div>
            </div>
          </div>

          {/* ===== MAPA (NÃO EXPANDE) ===== */}
          <div className="sticky top-24 h-[420px] overflow-hidden rounded-xl bg-muted">
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
