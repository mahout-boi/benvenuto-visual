import { useEffect, useRef, useState } from "react";
import eventosImg from "@/assets/eventos-1.png";
import restauranteImg from "@/assets/benvenuto-restaurante.jpg";
import mesaImg from "@/assets/mesa-1.jpg";

const fadeUp = "opacity-0 translate-y-8 transition-all duration-700 ease-out";
const fadeIn = "opacity-100 translate-y-0";

function useInView(threshold = 0.15) {
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

const tiposEvento = [
  { icon: "💍", titulo: "Aniversários", descricao: "Celebramos junto com você com uma proposta única, cheia de afeto, vinho e momentos que ficam na memória." },
  { icon: "👨‍👩‍👧‍👦", titulo: "Reuniões de Família", descricao: "Para os casos que sonham com um dia inesquecível, o Benvenuto está pronto para transformar cada reunião em uma experiência única." },
  { icon: "🎊", titulo: "Celebrações Especiais", descricao: "Formaturas, noivados, conquistas ou qualquer motivo para brindar. Cada celebração merece atenção, cuidado e afeto." },
  { icon: "🍷", titulo: "Confraternizações", descricao: "Para os casos que sonham com um dia inesquecível. Cuidamos de cada detalhe para que o grande dia seja repleto de sabor, elegância e emoção." },
];

const diferenciais = [
  { titulo: "Menu Personalizado", descricao: "Cada menu é pensado de acordo com o seu momento especial. Adaptamos pratos, estilos e harmonizações para que cada preferência reflita seus gostos, sua história e o clima da celebração.", img: restauranteImg },
  { titulo: "Ambiente Privativo", descricao: "Oferecemos espaços reservados para quem busca mais intimidade e conforto. Um ambiente exclusivo e cuidadosamente escolhido, perfeito para viver o momento com quem realmente importa.", img: mesaImg },
  { titulo: "Liberdade na Decoração", descricao: "Aqui, a celebração tem a sua assinatura. Damos liberdade para que a decoração traduz exatamente o que você sente, criando um ambiente com seu sentido para você e para o seu evento.", img: eventosImg },
];

const Eventos = () => {
  const heroSection = useInView(0.1);
  const missaoSection = useInView(0.1);
  const tiposSection = useInView(0.1);
  const diferencialSection = useInView(0.1);
  const ctaSection = useInView(0.1);

  return (
    <div className="bg-background">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[320px] sm:min-h-[400px] md:min-h-[480px] overflow-hidden">
        <img
          src={eventosImg}
          alt="Eventos Benvenuto"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/70 mb-3 sm:mb-4">
            Benvenuto
          </p>
          <h1 className="font-playfair-display text-4xl sm:text-5xl md:text-7xl font-light leading-tight text-white">
            Eventos
          </h1>
          <div className="mt-4 sm:mt-5 h-px w-12 sm:w-16 bg-white/40" />
          <p className="mt-4 sm:mt-5 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
            Momentos especiais o ano todo
          </p>
        </div>
      </section>

      {/* ── MISSÃO ───────────────────────────────── */}
      <section className="py-14 sm:py-20 md:py-28">
        <div
          ref={missaoSection.ref}
          className={`mx-auto max-w-3xl px-4 sm:px-6 text-center ${fadeUp} ${missaoSection.visible ? fadeIn : ""}`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Nossa Missão
          </p>
          <h2 className="mt-3 sm:mt-4 font-playfair-display text-3xl sm:text-4xl md:text-5xl font-light leading-snug">
            Uma experiência que celebra a autenticidade
          </h2>
          <p className="mt-4 sm:mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Oferecer uma experiência que celebra a autenticidade e a riqueza de sabores, com ingredientes frescos e rituais de verdade, tornando cada refeição uma oportunidade única para criar novas e inesquecíveis perspectivas.
          </p>
          <div className="mt-6 sm:mt-8 h-px w-16 bg-accent mx-auto" />
        </div>
      </section>

      {/* ── HISTÓRIA ─────────────────────────────── */}
      <section className="bg-secondary/30 py-14 sm:py-20 md:py-28">
        <div
          ref={heroSection.ref}
          className={`mx-auto max-w-6xl px-4 sm:px-6 ${fadeUp} ${heroSection.visible ? fadeIn : ""}`}
        >
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2 md:gap-20 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Nossa História
              </p>
              <h2 className="mt-3 sm:mt-4 font-playfair-display text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
                Uma tradição que nasce do amor à mesa
              </h2>
              <p className="mt-4 sm:mt-6 text-sm leading-[1.9] text-muted-foreground">
                A história do Benvenuto nasce do legado do mesmo Benvenuto, um descendente de italianos que amava reunir pessoas em torno de boa comida e vinho. Inspirado por suas memórias e pela laboriosa Ro Roma, os fundadores criaram em 2012 a Trattoria Benvenuto, um espaço acolhedor onde a comida fala mais alto.
              </p>
              <p className="mt-3 sm:mt-4 text-sm leading-[1.9] text-muted-foreground">
                Após anos antenados, evoluíram, resultando em colhendo o que se chamou por longo tempo, após um rebranding, passou a ser chamado apenas Benvenuto, voltado para a beleza e clareza como restaurante. Hoje, com uma pequena linha de tijolo e uma estrutura moderna, o Benvenuto segue evoluindo para atender às mais diversas demandas da Nova Galeria, sem perder o espírito de hospitalidade, afeto e boas conversas inesquecíveis sem nomes.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 sm:-inset-4 border border-accent/20 rounded-lg hidden sm:block" />
              <img
                src={restauranteImg}
                alt="História do Benvenuto"
                className="relative rounded-lg object-cover w-full aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TIPOS DE EVENTO ─────────────────────── */}
      <section className="py-14 sm:py-20 md:py-28">
        <div
          ref={tiposSection.ref}
          className={`mx-auto max-w-6xl px-4 sm:px-6 ${fadeUp} ${tiposSection.visible ? fadeIn : ""}`}
        >
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              O que fazemos para você
            </p>
            <h2 className="mt-3 sm:mt-4 font-playfair-display text-3xl sm:text-4xl md:text-5xl font-light leading-snug">
              Momentos especiais o ano todo
            </h2>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {tiposEvento.map((tipo) => (
              <div
                key={tipo.titulo}
                className="group rounded-lg border border-border/60 p-5 sm:p-7 hover:border-accent/50 hover:shadow-sm transition-all duration-300 bg-background"
              >
                <span className="text-2xl sm:text-3xl">{tipo.icon}</span>
                <h3 className="mt-3 sm:mt-4 font-playfair-display text-base sm:text-lg font-light">
                  {tipo.titulo}
                </h3>
                <p className="mt-2 sm:mt-3 text-xs leading-relaxed text-muted-foreground">
                  {tipo.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ─────────────────────────── */}
      <section className="bg-secondary/30 py-14 sm:py-20 md:py-28">
        <div
          ref={diferencialSection.ref}
          className={`mx-auto max-w-6xl px-4 sm:px-6 ${fadeUp} ${diferencialSection.visible ? fadeIn : ""}`}
        >
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Nossa forma de cuidar
            </p>
            <h2 className="mt-3 sm:mt-4 font-playfair-display text-3xl sm:text-4xl md:text-5xl font-light">
              Cada detalhe importa
            </h2>
          </div>
          <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {diferenciais.map((d) => (
              <div key={d.titulo} className="flex flex-col gap-4 sm:gap-5">
                <div className="overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src={d.img}
                    alt={d.titulo}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-playfair-display text-lg sm:text-xl font-light">{d.titulo}</h3>
                  <p className="mt-1.5 sm:mt-2 text-xs leading-relaxed text-muted-foreground">{d.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-14 sm:py-20 md:py-28">
        <div
          ref={ctaSection.ref}
          className={`mx-auto max-w-2xl px-4 sm:px-6 text-center ${fadeUp} ${ctaSection.visible ? fadeIn : ""}`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Vamos celebrar juntos
          </p>
          <h2 className="mt-3 sm:mt-4 font-playfair-display text-3xl sm:text-4xl md:text-5xl font-light leading-snug">
            Transforme seu evento em uma memória inesquecível
          </h2>
          <p className="mt-4 sm:mt-6 text-sm leading-[1.9] text-muted-foreground">
            Entre em contato conosco e conte sua história. Vamos criar juntos uma experiência que valorize cada detalhe da sua celebração.
          </p>
          <a
            href="https://wa.me/5554996743601"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 sm:px-8 py-3 sm:py-3.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-80"
          >
            Fale Conosco
          </a>
        </div>
      </section>

    </div>
  );
};

export default Eventos;
