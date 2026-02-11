import aboutImg from "@/assets/about-restaurant.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="overflow-hidden">
            <img
              src={aboutImg}
              alt="Chef preparando massa fresca no Benvenuto"
              className="h-[500px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Nossa História
            </p>
            <h2 className="mt-4 font-playfair-display text-4xl font-light leading-tight md:text-5xl">
              Tradição e<br />sabor italiano
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              A história do Benvenuto nasce do legado do nonno Benvenuto, um
              descendente de italianos que amava reunir pessoas em torno de boa
              comida e vinho. Inspirados por suas memórias e pelas tabacarias italianas, os fundadores criaram em 2014 a Tabacaria Benvenuto, um
              espaço acolhedor onde a comida tem alma. Apesar dos desafios ini
              ciais, o restaurante amadureceu, consolidou seu cardápio e, após um
              rebranding, passou a se chamar apenas Benvenuto, reforçando sua es
              sência e clareza como restaurante. Hoje, com sua própria linha de
              vinhos e uma estrutura moderna, o Benvenuto segue evoluindo para
              atender as mais diversas demandas da Serra Gaúcha, sem perder o es
              pírito de hospitalidade, afeto e boas conversas herdado do seu nonno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
