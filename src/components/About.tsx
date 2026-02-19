import aboutImg from "@/assets/benvenuto-restaurante.jpg";
import pratoImg from "@/assets/prato-1.jpg";
import mesaImg from "@/assets/mesa-1.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">

          {/* NOSSA HISTÓRIA */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Nossa História
            </p>

            <h2 className="mt-4 font-playfair-display text-4xl font-light leading-tight md:text-5xl">
              Tradição e <br /> sabor italiano
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg md:leading-loose">
              A história do Benvenuto nasce do legado do nonno Benvenuto, um
              descendente de italianos que amava reunir pessoas em torno de boa
              comida e vinho. Inspirados por suas memórias e pelas tabacarias
              italianas, os fundadores criaram em 2014 a Tabacaria Benvenuto, um
              espaço acolhedor onde a comida tem alma. Apesar dos desafios
              iniciais, o restaurante amadureceu, consolidou seu cardápio e,
              após um rebranding, passou a se chamar apenas Benvenuto,
              reforçando sua essência e clareza como restaurante. Hoje, com
              sua própria linha de vinhos e uma estrutura moderna, o Benvenuto
              segue evoluindo para atender as mais diversas demandas da Serra
              Gaúcha, sem perder o espírito de hospitalidade, afeto e boas
              conversas herdado do seu nonno.
            </p>
          </div>

          {/* IMAGEM */}
          <div className="overflow-hidden">
            <img
              src={aboutImg}
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden">
            <img
              src={pratoImg}
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div className="md:col-start-2 mt-6">
            <p className="mt-4 font-playfair-display text-3xl font-light leading-tight md:text-4xl">
              Porque escolher o Benvenuto?
            </p>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg md:leading-loose">
              Escolher o Benvenuto é escolher um lugar onde as pessoas importam.
              Onde cada detalhe é pensado com carinho, tempo e presença, porque
              sabemos que momentos especiais não se repetem. Eles ficam na
              memória.
              <br />
              Aqui, cada celebração tem a sua própria história. Escutamos,
              acolhemos e transformamos sentimentos em experiências, com boa
              comida, vinhos que acompanham a conversa e um ambiente que convida
              a ficar.
              <br />
              O Benvenuto é o cenário para aniversários sem pressa, casamentos
              cheios de afeto, encontros a dois e reuniões de quem gosta de estar
              junto. Nossa equipe cuida de tudo para que você possa aproveitar o
              que realmente importa.
              <br />
              Mais do que um restaurante, somos um espaço para celebrar
              histórias, criar memórias e brindar momentos que ficam
            </p>
          </div>

          {/* NOSSA MISSÃO */}
          <div>
            <p className="mt-4 font-playfair-display text-4xl font-light leading-tight md:text-5xl">
              Nossa Missão
            </p>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg md:leading-loose">
              Oferecer uma experiência que <br />
              celebra a autenticidade e a <br />
              riqueza de sabores, com <br />
              ingredientes frescos e comida <br />
              de verdade, tornando cada re- <br />
              feição uma oportunidade para <br />
              criar memórias inesquecíveis
            </p>
          </div>

          <div className="overflow-hidden">
            <img
              src={mesaImg}
              className="h-[500px] w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
