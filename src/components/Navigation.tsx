import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Témoignages", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-maternal-pink-light fixed w-full top-0 z-50 shadow-gentle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="font-poppins font-semibold text-xl text-foreground">
              OASIS <span className="text-primary">Maternité</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-poppins font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="maternal-outline" size="sm" asChild>
              <a href="tel:0153386120" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Appeler
              </a>
            </Button>
            <Button variant="maternal" size="sm" asChild>
              <a 
                href="https://wa.me/0153386120" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-maternal-pink-light">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 font-poppins font-medium rounded-lg transition-colors ${
                  location.pathname === item.href
                    ? "text-primary bg-primary-soft"
                    : "text-muted-foreground hover:text-primary hover:bg-maternal-pink-soft"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-maternal-pink-light">
              <Button variant="maternal-outline" size="sm" className="w-full mb-2" asChild>
                <a href="tel:0153386120" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  0153386120
                </a>
              </Button>
              <Button variant="maternal" size="sm" className="w-full" asChild>
                <a 
                  href="https://wa.me/0153386120" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;