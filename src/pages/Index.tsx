import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Menu />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
