import { useInView } from "@/hooks/use-in-view";
import { FADE_UP, FADE_IN } from "@/lib/constants";
import pratoImg from "@/assets/prato-1.jpg";
import mesaImg from "@/assets/mesa-1.jpg";
import nonoBenvenuto from "@/assets/nono-benvenuto.jpg";

const rows = [
  {
    label: "Nossa História",
    title: <>Tradição e <br className="hidden sm:block" /> sabor italiano</>,
    texts: [
      "A história do Benvenuto nasce do legado do nonno Benvenuto, um descendente de italianos que amava reunir pessoas em torno de boa comida e vinho. Inspirados por suas memórias e pelas tabacarias italianas, os fundadores criaram em 2014 a Tabacaria Benvenuto — um espaço acolhedor onde a comida tem alma.",
      "Após um rebranding, passou a se chamar apenas Benvenuto, reforçando sua essência como restaurante. Hoje, com sua própria linha de vinhos e estrutura moderna, o Benvenuto segue evoluindo sem perder o espírito de hospitalidade e afeto herdado do seu nonno.",
    ],
    img: nonoBenvenuto,
    alt: "Ambiente do restaurante Benvenuto",
    imgFirst: false,
  },
  {
    label: "Por que nos escolher",
    title: <>Onde cada detalhe <br className="hidden sm:block" /> é uma memória</>,
    texts: [
      "Escolher o Benvenuto é escolher um lugar onde as pessoas importam. Onde cada detalhe é pensado com carinho, tempo e presença — porque sabemos que momentos especiais não se repetem.",
      "Aqui, cada celebração tem a sua própria história. Escutamos, acolhemos e transformamos sentimentos em experiências, com boa comida, vinhos que acompanham a conversa e um ambiente que convida a ficar.",
    ],
    img: pratoImg,
    alt: "Prato típico do Benvenuto",
    imgFirst: true,
  },
  {
    label: "Nossa Missão",
    title: <>Autenticidade em <br className="hidden sm:block" /> cada refeição</>,
    texts: [
      "Oferecer uma experiência que celebra a autenticidade e a riqueza de sabores, com ingredientes frescos e comida de verdade — tornando cada refeição uma oportunidade para criar memórias inesquecíveis ao lado de quem você ama.",
    ],
    img: mesaImg,
    alt: "Mesa posta no restaurante Benvenuto",
    imgFirst: false,
  },
];

const Divider = () => (
  <div className="my-14 sm:my-20 md:my-24 flex items-center gap-4 sm:gap-6">
    <div className="h-px flex-1 bg-border" />
    <span className="font-playfair-display text-lg sm:text-xl text-muted-foreground/50">✦</span>
    <div className="h-px flex-1 bg-border" />
  </div>
);

const ImageBlock = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative">
    <div className="absolute -inset-3 border border-accent/20 rounded-sm pointer-events-none hidden sm:block" />
    <div className="overflow-hidden rounded-sm">
      <img
        src={src}
        alt={alt}
        className="h-[280px] sm:h-[360px] md:h-[460px] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
        loading="lazy"
      />
    </div>
  </div>
);

const About = () => {
  const observers = [useInView(0.1), useInView(0.1), useInView(0.1)];

  return (
    <section id="sobre" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {rows.map((row, i) => {
          const obs = observers[i];
          const HeadingTag = i === 0 ? "h2" : "h3";
          const headingClass = i === 0
            ? "mt-3 sm:mt-4 font-playfair-display text-3xl sm:text-4xl md:text-5xl font-light leading-snug"
            : "mt-3 sm:mt-4 font-playfair-display text-2xl sm:text-3xl md:text-4xl font-light leading-snug";

          return (
            <div key={row.label}>
              {i > 0 && <Divider />}
              <div
                ref={obs.ref}
                className={`grid items-center gap-8 sm:gap-12 md:grid-cols-2 md:gap-20 ${FADE_UP} ${obs.visible ? FADE_IN : ""}`}
              >
                <div className={row.imgFirst ? "order-2 md:order-2" : ""}>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{row.label}</p>
                  <HeadingTag className={headingClass}>{row.title}</HeadingTag>
                  <div className="mt-4 sm:mt-6 h-px w-10 bg-accent" />
                  {row.texts.map((text, j) => (
                    <p key={j} className={`${j === 0 ? "mt-4 sm:mt-6" : "mt-3 sm:mt-4"} text-sm leading-[1.9] text-muted-foreground`}>
                      {text}
                    </p>
                  ))}
                </div>
                <div className={row.imgFirst ? "order-1 md:order-1" : ""}>
                  <ImageBlock src={row.img} alt={row.alt} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
