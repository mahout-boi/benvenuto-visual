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
            <h2 className="mt-4 font-serif-display text-4xl font-light leading-tight md:text-5xl">
              Tradição e<br />sabor italiano
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              No Benvenuto, cada prato é uma homenagem à autêntica cozinha italiana.
              Ingredientes frescos, receitas passadas por gerações e a paixão de
              quem cozinha com o coração fazem de cada refeição uma experiência única.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
