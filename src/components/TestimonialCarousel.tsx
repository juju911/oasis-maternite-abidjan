import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    id: 1,
    name: "Aya Kouamé",
    text: "L'équipe d'OASIS m'a accompagnée avec tant de bienveillance pendant ma grossesse. Je me suis sentie en sécurité à chaque rendez-vous.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marie Traoré",
    text: "Les échographies étaient un moment magique à chaque fois. Dr. Kouassi prend le temps d'expliquer et de rassurer. Je recommande vivement !",
    rating: 5,
  },
  {
    id: 3,
    name: "Fatou Diabaté",
    text: "Les ateliers de préparation à l'accouchement m'ont donné confiance. L'atmosphère chaleureuse d'OASIS fait toute la différence.",
    rating: 5,
  },
  {
    id: 4,
    name: "Adjoua N'Guessan",
    text: "Suivi post-partum exceptionnel ! L'équipe est disponible et à l'écoute. Mon bébé et moi avons été choyés du début à la fin.",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="bg-gradient-card border-maternal-pink-light shadow-soft">
        <CardContent className="p-8">
          <div className="text-center">
            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-primary text-primary"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg text-foreground font-poppins font-medium mb-6 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Author */}
            <cite className="text-primary font-poppins font-semibold">
              — {testimonials[currentIndex].name}
            </cite>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Button
        variant="maternal-outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
        onClick={goToPrevious}
        aria-label="Témoignage précédent"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="maternal-outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
        onClick={goToNext}
        aria-label="Témoignage suivant"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-primary"
                : "bg-maternal-pink-light hover:bg-primary/50"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Aller au témoignage ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;