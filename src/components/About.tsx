import { useEffect, useRef, useState } from "react";
import aboutImg from "@/assets/benvenuto-restaurante.jpg";
import pratoImg from "@/assets/prato-1.jpg";
import mesaImg from "@/assets/mesa-1.jpg";

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

const fadeUp = "opacity-0 translate-y-8 transition-all duration-700 ease-out";
const fadeIn = "opacity-100 translate-y-0";

const About = () => {
  const row1 = useInView(0.1);
  const row2 = useInView(0.1);
  const row3 = useInView(0.1);

  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* ROW 1 — Texto + Imagem */}
        <div
          ref={row1.ref}
          className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 ${fadeUp} ${row1.visible ? fadeIn : ""}`}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Nossa História
            </p>
            <h2 className="mt-4 font-playfair-display text-4xl font-light leading-snug md:text-5xl">
              Tradição e <br /> sabor italiano
            </h2>
            <div className="mt-6 h-px w-10 bg-accent" />
            <p className="mt-6 text-sm leading-[1.9] text-muted-foreground">
              A história do Benvenuto nasce do legado do nonno Benvenuto, um
              descendente de italianos que amava reunir pessoas em torno de boa
              comida e vinho. Inspirados por suas memórias e pelas tabacarias
              italianas, os fundadores criaram em 2014 a Tabacaria Benvenuto —
              um espaço acolhedor onde a comida tem alma.
            </p>
            <p className="mt-4 text-sm leading-[1.9] text-muted-foreground">
              Após um rebranding, passou a se chamar apenas Benvenuto,
              reforçando sua essência como restaurante. Hoje, com sua própria
              linha de vinhos e estrutura moderna, o Benvenuto segue evoluindo
              sem perder o espírito de hospitalidade e afeto herdado do seu nonno.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 border border-accent/20 rounded-sm pointer-events-none" />
            <div className="overflow-hidden rounded-sm">
              <img
                src={aboutImg}
                alt="Ambiente do restaurante Benvenuto"
                className="h-[460px] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-24 flex items-center gap-6">
          <div className="h-px flex-1 bg-border" />
          <span className="font-playfair-display text-xl text-muted-foreground/50">✦</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* ROW 2 — Imagem + Texto */}
        <div
          ref={row2.ref}
          className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 ${fadeUp} ${row2.visible ? fadeIn : ""}`}
        >
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-3 border border-accent/20 rounded-sm pointer-events-none" />
            <div className="overflow-hidden rounded-sm">
              <img
                src={pratoImg}
                alt="Prato típico do Benvenuto"
                className="h-[460px] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Por que nos escolher
            </p>
            <h3 className="mt-4 font-playfair-display text-3xl font-light leading-snug md:text-4xl">
              Onde cada detalhe <br /> é uma memória
            </h3>
            <div className="mt-6 h-px w-10 bg-accent" />
            <p className="mt-6 text-sm leading-[1.9] text-muted-foreground">
              Escolher o Benvenuto é escolher um lugar onde as pessoas importam.
              Onde cada detalhe é pensado com carinho, tempo e presença — porque
              sabemos que momentos especiais não se repetem.
            </p>
            <p className="mt-4 text-sm leading-[1.9] text-muted-foreground">
              Aqui, cada celebração tem a sua própria história. Escutamos,
              acolhemos e transformamos sentimentos em experiências, com boa
              comida, vinhos que acompanham a conversa e um ambiente que convida
              a ficar.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-24 flex items-center gap-6">
          <div className="h-px flex-1 bg-border" />
          <span className="font-playfair-display text-xl text-muted-foreground/50">✦</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* ROW 3 — Texto + Imagem */}
        <div
          ref={row3.ref}
          className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 ${fadeUp} ${row3.visible ? fadeIn : ""}`}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Nossa Missão
            </p>
            <h3 className="mt-4 font-playfair-display text-3xl font-light leading-snug md:text-4xl">
              Autenticidade em <br /> cada refeição
            </h3>
            <div className="mt-6 h-px w-10 bg-accent" />
            <p className="mt-6 text-sm leading-[1.9] text-muted-foreground">
              Oferecer uma experiência que celebra a autenticidade e a riqueza
              de sabores, com ingredientes frescos e comida de verdade —
              tornando cada refeição uma oportunidade para criar memórias
              inesquecíveis ao lado de quem você ama.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 border border-accent/20 rounded-sm pointer-events-none" />
            <div className="overflow-hidden rounded-sm">
              <img
                src={mesaImg}
                alt="Mesa posta no restaurante Benvenuto"
                className="h-[460px] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
