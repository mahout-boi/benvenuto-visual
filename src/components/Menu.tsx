const menuData = {
  Antipasti: [
    { name: "Bruschetta al Pomodoro", desc: "Pão tostado com tomate fresco e manjericão", price: "R$ 28" },
    { name: "Carpaccio di Manzo", desc: "Finas fatias de carne com rúcula e parmesão", price: "R$ 42" },
    { name: "Burrata con Prosciutto", desc: "Burrata cremosa com presunto de Parma", price: "R$ 52" },
  ],
  Primi: [
    { name: "Tagliatelle ai Funghi", desc: "Massa fresca com cogumelos porcini e trufa", price: "R$ 58" },
    { name: "Risotto allo Zafferano", desc: "Risoto cremoso com açafrão", price: "R$ 54" },
    { name: "Spaghetti alla Carbonara", desc: "Receita tradicional romana", price: "R$ 48" },
  ],
  Secondi: [
    { name: "Branzino alla Griglia", desc: "Robalo grelhado com limão siciliano e ervas", price: "R$ 78" },
    { name: "Ossobuco alla Milanese", desc: "Ossobuco cozido lentamente com gremolata", price: "R$ 85" },
    { name: "Filetto al Pepe Verde", desc: "Filé mignon ao molho de pimenta verde", price: "R$ 92" },
  ],
  Dolci: [
    { name: "Tiramisù", desc: "Clássico italiano com mascarpone e café", price: "R$ 32" },
    { name: "Panna Cotta", desc: "Creme de baunilha com calda de frutas vermelhas", price: "R$ 28" },
  ],
  Bevande: [
    { name: "Vinho da Casa (taça)", desc: "Tinto ou branco selecionado", price: "R$ 24" },
    { name: "Aperol Spritz", desc: "Aperol, prosecco e água com gás", price: "R$ 32" },
    { name: "Limoncello", desc: "Licor artesanal de limão siciliano", price: "R$ 22" },
  ],
};

const Menu = () => {
  return (
    <section id="cardapio" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Cardápio
        </p>
        <h2 className="mt-4 text-center font-playfair-display text-4xl font-light md:text-5xl">
          Menu
        </h2>

        <div className="mt-16 space-y-14">
          {Object.entries(menuData).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-playfair-display text-2xl font-light italic text-accent">
                {category}
              </h3>
              <div className="mt-6 space-y-5">
                {items.map((item) => (
                  <div key={item.name} className="flex items-baseline justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <span className="shrink-0 text-sm font-light text-muted-foreground">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
