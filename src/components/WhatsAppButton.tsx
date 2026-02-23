import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5554996743601"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
      style={{ background: "hsl(142 70% 45%)", color: "white", height: "46px", width: "46px" }}
    >
      <MessageCircle size={20} />
    </a>
  );
};

export default WhatsAppButton;
