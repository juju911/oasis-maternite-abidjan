import { Heart, Users, Award, Calendar, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import heroImage from "@/assets/hero-maternite.jpg";

const Home = () => {
  const services = [
    {
      icon: Heart,
      title: "Suivi de Grossesse",
      description: "Consultations régulières et personnalisées pour accompagner chaque étape de votre grossesse en toute sérénité.",
    },
    {
      icon: Users,
      title: "Échographies 3D/4D",
      description: "Technologies de pointe pour des échographies haute définition et des moments inoubliables avec votre bébé.",
    },
    {
      icon: Award,
      title: "Ateliers de Préparation",
      description: "Cours de préparation à l'accouchement, techniques de respiration et conseils nutritionnels adaptés.",
    },
    {
      icon: Calendar,
      title: "Suivi Post-Partum",
      description: "Accompagnement après la naissance pour vous et votre bébé dans les premiers mois de vie.",
    },
  ];

  const stats = [
    { number: "98%", label: "Satisfaction Client" },
    { number: "500+", label: "Mamans Accompagnées" },
    { number: "15+", label: "Années d'Expérience" },
    { number: "24/7", label: "Support Disponible" },
  ];

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Accompagner les femmes,{" "}
                <span className="text-primary">rassurer les mamans</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                À OASIS de la Maternité, nous créons un environnement chaleureux et bienveillant 
                pour vous accompagner dans cette belle aventure qu'est la maternité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="maternal" size="lg" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Prendre Rendez-vous
                </Button>
                <Button variant="maternal-outline" size="lg" asChild>
                  <a href="tel:0153386120" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    01 53 38 61 20
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="OASIS de la Maternité - Accompagnement bienveillant"
                className="rounded-2xl shadow-maternal w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-maternal-pink-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Nos Services <span className="text-primary">Dédiés</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              De la conception à l'après-naissance, nous vous accompagnons avec expertise 
              et bienveillance à chaque étape de votre parcours maternel.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-maternal-pink-light shadow-soft hover:shadow-maternal transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-maternal-green-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Témoignages de nos <span className="text-primary">Mamans</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Découvrez les expériences de celles qui nous ont fait confiance pour 
              les accompagner dans leur parcours maternel.
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Contactez-nous <span className="text-primary">Facilement</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans votre projet de maternité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <Card className="bg-gradient-card border-maternal-pink-light shadow-soft hover:shadow-maternal transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Téléphone
                </h3>
                <p className="text-muted-foreground mb-4">
                  Disponible du lundi au vendredi de 8h à 18h
                </p>
                <Button variant="maternal-outline" asChild>
                  <a href="tel:0153386120">01 53 38 61 20</a>
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-gradient-card border-maternal-pink-light shadow-soft hover:shadow-maternal transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Email
                </h3>
                <p className="text-muted-foreground mb-4">
                  Écrivez-nous, nous vous répondons sous 24h
                </p>
                <Button variant="maternal-outline" asChild>
                  <a href="mailto:oasisdelamaternite@gmail.com">Nous écrire</a>
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="bg-gradient-card border-maternal-pink-light shadow-soft hover:shadow-maternal transition-all duration-300 md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  WhatsApp
                </h3>
                <p className="text-muted-foreground mb-4">
                  Chat direct pour une réponse immédiate
                </p>
                <Button variant="maternal" asChild>
                  <a 
                    href="https://wa.me/0153386120?text=Bonjour, j'aimerais prendre rendez-vous"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chatter maintenant
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Address */}
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Cocody, Abidjan, Côte d'Ivoire</span>
            </div>
            <Button variant="maternal-soft" asChild>
              <a 
                href="https://maps.google.com/?q=Cocody,Abidjan,Côte+d'Ivoire"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir sur Google Maps
              </a>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  );
};

export default Home;