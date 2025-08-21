import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const phoneNumber = "2250153386120";
  const message = "Bonjour, je souhaite prendre rendez-vous à OASIS de la Maternité.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      variant="maternal"
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
      onClick={handleWhatsAppClick}
    >
      <MessageCircle className="h-7 w-7" />
    </Button>
  );
};

export default WhatsAppFloat;