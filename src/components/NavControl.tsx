import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Eventos from "@/components/Eventos";

function NavControl() {
    const [abaAtiva, setAbaAtiva] = useState("home");

    return (
        <>
            <Navbar setAbaAtiva={setAbaAtiva} />
            {abaAtiva === "home" && <Hero />}
            {abaAtiva !== "home" && (
                <div className="pt-24">
                    {abaAtiva === "eventos" && <Eventos />}
                    {abaAtiva === "sobre" && <About />}
                    {abaAtiva === "galeria" && <Gallery />}
                    {abaAtiva === "cardapio" && <Menu />}
                    {abaAtiva === "contato" && <Contact />}
                </div>
            )}
        </>
    );
};
export default NavControl;