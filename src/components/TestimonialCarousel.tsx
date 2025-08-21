import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aminata Koné",
    content: "Un accueil chaleureux et un suivi exceptionnel pendant toute ma grossesse. L'équipe d'OASIS m'a rassurée à chaque étape.",
    rating: 5,
    location: "Abidjan, Cocody"
  },
  {
    name: "Marie-Claire Diallo",
    content: "Les consultations sont très professionnelles et le personnel est d'une grande bienveillance. Je recommande vivement !",
    rating: 5,
    location: "Abidjan, Marcory"
  },
  {
    name: "Fatou Touré",
    content: "Grâce aux conseils nutritionnels d'OASIS, j'ai vécu une grossesse sereine. Merci pour votre accompagnement !",
    rating: 5,
    location: "Abidjan, Yopougon"
  },
  {
    name: "Adjoua Assi",
    content: "L'accompagnement post-partum a été formidable. Je me suis sentie soutenue même après l'accouchement.",
    rating: 5,
    location: "Abidjan, Plateau"
  },
  {
    name: "Awa Traoré",
    content: "Les échographies sont réalisées avec beaucoup de soin et les explications sont toujours claires et rassurantes.",
    rating: 5,
    location: "Abidjan, Adjamé"
  }
];

const TestimonialCarousel = () => {
  return (
    <section className="py-16 bg-maternal-soft/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Témoignages de nos mamans
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez les expériences de femmes qui nous ont fait confiance pour leur accompagnement maternel.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="text-foreground font-semibold ml-2">98% de satisfaction</span>
            <span className="text-muted-foreground">• 500+ mamans accompagnées</span>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-background/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-maternal/40 mr-3" />
                      <div className="flex text-yellow-500">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="maternal-outline" />
          <CarouselNext variant="maternal-outline" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;