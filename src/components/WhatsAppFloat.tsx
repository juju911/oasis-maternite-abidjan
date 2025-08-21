import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="maternal"
        size="icon"
        className="w-14 h-14 rounded-full shadow-maternal animate-pulse hover:animate-none"
        asChild
      >
        <a
          href="https://wa.me/0153386120?text=Bonjour, j'aimerais prendre rendez-vous à OASIS de la Maternité"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter via WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;