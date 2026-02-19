import aboutImg from "@/assets/benvenuto-restaurante.jpg";
import pratoImg from "@/assets/prato-1.jpg";
import mesaImg from "@/assets/mesa-1.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* ROW 1 — Texto + Imagem */}
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Nossa História
            </p>
            <h2 className="mt-4 font-playfair-display text-4xl font-light leading-snug md:text-5xl">
              Tradição e <br /> sabor italiano
            </h2>
            <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
              A história do Benvenuto nasce do legado do nonno Benvenuto, um
              descendente de italianos que amava reunir pessoas em torno de boa
              comida e vinho. Inspirados por suas memórias e pelas tabacarias
              italianas, os fundadores criaram em 2014 a Tabacaria Benvenuto —
              um espaço acolhedor onde a comida tem alma. Após um rebranding,
              passou a se chamar apenas Benvenuto, reforçando sua essência como
              restaurante. Hoje, com sua própria linha de vinhos e estrutura
              moderna, o Benvenuto segue evoluindo sem perder o espírito de
              hospitalidade e afeto herdado do seu nonno.
            </p>
          </div>

          <div className="overflow-hidden rounded-sm">
            <img
              src={aboutImg}
              alt="Ambiente do restaurante Benvenuto"
              className="h-[460px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-20 flex items-center gap-6">
          <div className="h-px flex-1 bg-border" />
          <span className="font-serif-display text-2xl font-light text-muted-foreground">✦</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* ROW 2 — Imagem + Texto */}
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1 overflow-hidden rounded-sm">
            <img
              src={pratoImg}
              alt="Prato típico do Benvenuto"
              className="h-[460px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              loading="lazy"
            />
          </div>

          <div className="order-1 md:order-2">
            <h3 className="font-playfair-display text-3xl font-light leading-snug md:text-4xl">
              Por que escolher o Benvenuto?
            </h3>
            <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
              Escolher o Benvenuto é escolher um lugar onde as pessoas importam.
              Onde cada detalhe é pensado com carinho, tempo e presença — porque
              sabemos que momentos especiais não se repetem.
              <br /><br />
              Aqui, cada celebração tem a sua própria história. Escutamos,
              acolhemos e transformamos sentimentos em experiências, com boa
              comida, vinhos que acompanham a conversa e um ambiente que convida
              a ficar. Somos o cenário para aniversários, casamentos e encontros
              de quem gosta de estar junto.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-20 flex items-center gap-6">
          <div className="h-px flex-1 bg-border" />
          <span className="font-serif-display text-2xl font-light text-muted-foreground">✦</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* ROW 3 — Texto + Imagem */}
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="font-playfair-display text-3xl font-light leading-snug md:text-4xl">
              Nossa Missão
            </h3>
            <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
              Oferecer uma experiência que celebra a autenticidade e a riqueza
              de sabores, com ingredientes frescos e comida de verdade —
              tornando cada refeição uma oportunidade para criar memórias
              inesquecíveis ao lado de quem você ama.
            </p>
          </div>

          <div className="overflow-hidden rounded-sm">
            <img
              src={mesaImg}
              alt="Mesa posta no restaurante Benvenuto"
              className="h-[460px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
