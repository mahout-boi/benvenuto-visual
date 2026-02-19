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
            <Navbar abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />
            <div className={abaAtiva === "home" ? "block" : "hidden"}>
                <Hero />
                <About />
                <Menu />
                <Contact />
            </div>

            <div className={abaAtiva === "eventos" ? "block pt-24" : "hidden"}>
                <Eventos />
            </div>

            <div className={abaAtiva === "galeria" ? "block pt-24" : "hidden"}>
                <Gallery />
            </div>

            <div className={abaAtiva === "cardapio" ? "block pt-24" : "hidden"}>
                <Menu />
            </div>

            <div className={abaAtiva === "contato" ? "block pt-24" : "hidden"}>
                <Contact />
            </div>
        </>
    );
}
export default NavControl;