import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Baby } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleWhatsAppClick = () => {
    const phoneNumber = "2250566997785";
    const message = "Bonjour, je viens du site internet OASIS de la Maternité...";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const menuItems = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Services", href: "#services" },
    { name: "Témoignages", href: "#témoignages" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-maternal/10 p-2 rounded-full">
              <Heart className="h-6 w-6 text-maternal" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">OASIS</h1>
              <p className="text-xs text-muted-foreground -mt-1">de la Maternité</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-maternal transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="maternal-outline" size="sm">
              <Baby className="h-4 w-4 mr-2" />
              Rendez-vous
            </Button>
            <Button variant="maternal" size="sm" onClick={handleWhatsAppClick}>
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-maternal hover:bg-maternal-soft/20 rounded-md transition-colors"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-3">
                <Button variant="maternal-outline" size="sm">
                  <Baby className="h-4 w-4 mr-2" />
                  Rendez-vous
                </Button>
                <Button variant="maternal" size="sm" onClick={handleWhatsAppClick}>
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;