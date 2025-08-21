import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import heroImage from "@/assets/hero-maternite.jpg";
import {
  Heart,
  Baby,
  Stethoscope,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Award,
  Star,
  ChevronDown,
  MessageCircle
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="accueil" className="relative bg-gradient-to-br from-maternal-soft/20 to-secondary/20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Accompagner les femmes,
                  <span className="text-maternal block">rassurer les mamans</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  À OASIS de la Maternité, nous offrons un suivi médical complet et bienveillant 
                  pour toutes les futures mamans d'Abidjan.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="maternal" className="text-lg px-8 py-4">
                  <Calendar className="mr-2 h-5 w-5" />
                  Prendre rendez-vous
                </Button>
                <Button size="lg" variant="maternal-outline" className="text-lg px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  01 53 38 61 20
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-maternal">500+</div>
                  <div className="text-sm text-muted-foreground">Mamans accompagnées</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-maternal">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-maternal">15+</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={heroImage}
                  alt="Femme enceinte souriante dans un environnement médical chaleureux"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maternal/10 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-maternal text-maternal-foreground p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-2">
                  <Heart className="h-8 w-8" />
                  <div>
                    <div className="font-bold">OASIS</div>
                    <div className="text-sm opacity-90">de la Maternité</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-maternal" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Un accompagnement complet et personnalisé pour chaque étape de votre maternité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Consultations prénatales",
                description: "Suivi médical régulier avec des professionnels expérimentés pour surveiller votre santé et celle de votre bébé.",
                color: "maternal"
              },
              {
                icon: Baby,
                title: "Échographies",
                description: "Examens échographiques de haute qualité pour suivre le développement de votre enfant en temps réel.",
                color: "secondary"
              },
              {
                icon: Heart,
                title: "Conseils nutritionnels",
                description: "Accompagnement nutritionnel personnalisé pour une grossesse saine et équilibrée.",
                color: "maternal"
              },
              {
                icon: Users,
                title: "Ateliers préparation",
                description: "Cours de préparation à l'accouchement et ateliers pour futures mamans et papas.",
                color: "secondary"
              },
              {
                icon: Shield,
                title: "Accompagnement psychologique",
                description: "Soutien émotionnel et psychologique pour vivre sereinement votre grossesse.",
                color: "maternal"
              },
              {
                icon: Award,
                title: "Suivi post-partum",
                description: "Accompagnement après l'accouchement pour vous aider dans vos premiers pas de maman.",
                color: "secondary"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50 bg-background/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto p-4 rounded-2xl bg-${service.color}/10 w-fit mb-4`}>
                    <service.icon className={`h-8 w-8 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="maternal-outline" size="lg">
              Découvrir tous nos services
            </Button>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="py-20 bg-maternal-soft/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Votre bien-être, notre mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Depuis plus de 15 ans, OASIS de la Maternité accompagne les femmes enceintes 
                d'Abidjan avec dévouement et professionnalisme. Notre équipe de spécialistes 
                s'engage à vous offrir les meilleurs soins dans un environnement chaleureux et rassurant.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-maternal/10 p-2 rounded-full mt-1">
                    <Heart className="h-4 w-4 text-maternal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Approche humaine</h3>
                    <p className="text-muted-foreground">Un accompagnement personnalisé et bienveillant</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-maternal/10 p-2 rounded-full mt-1">
                    <Shield className="h-4 w-4 text-maternal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Excellence médicale</h3>
                    <p className="text-muted-foreground">Équipements modernes et protocoles rigoureux</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-maternal/10 p-2 rounded-full mt-1">
                    <Award className="h-4 w-4 text-maternal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Expertise reconnue</h3>
                    <p className="text-muted-foreground">Plus de 500 mamans accompagnées avec succès</p>
                  </div>
                </div>
              </div>
              <Button variant="maternal" size="lg">
                En savoir plus sur notre équipe
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="bg-maternal/5 border-maternal/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-maternal mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Mamans heureuses</div>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/5 border-secondary/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Années d'expérience</div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="bg-maternal/5 border-maternal/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-maternal mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction client</div>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/5 border-secondary/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support disponible</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <TestimonialCarousel />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contactez-nous
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Nous sommes là pour répondre à toutes vos questions et vous accompagner
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-maternal/10 p-4 rounded-full w-fit mx-auto mb-4">
                      <Phone className="h-6 w-6 text-maternal" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
                    <p className="text-muted-foreground">01 53 38 61 20</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-maternal/10 p-4 rounded-full w-fit mx-auto mb-4">
                      <Mail className="h-6 w-6 text-maternal" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">oasisdelamaternite@gmail.com</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-maternal/10 p-4 rounded-full w-fit mx-auto mb-4">
                      <MapPin className="h-6 w-6 text-maternal" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                    <p className="text-muted-foreground text-sm">Abidjan, Côte d'Ivoire</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-maternal/10 p-4 rounded-full w-fit mx-auto mb-4">
                      <Clock className="h-6 w-6 text-maternal" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Horaires</h3>
                    <p className="text-muted-foreground text-sm">Lun-Sam: 8h-18h</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-maternal-soft/30 p-6 rounded-2xl">
                <h3 className="font-semibold text-foreground mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 text-maternal mr-2" />
                  Contact rapide WhatsApp
                </h3>
                <p className="text-muted-foreground mb-4">
                  Besoin d'une réponse rapide ? Contactez-nous directement sur WhatsApp !
                </p>
                <Button variant="maternal-soft" className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Ouvrir WhatsApp
                </Button>
              </div>
            </div>

            <div className="bg-maternal-soft/20 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Demande de rendez-vous
              </h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Prénom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-maternal"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-maternal"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-maternal"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service souhaité</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-maternal">
                    <option>Consultation prénatale</option>
                    <option>Échographie</option>
                    <option>Conseils nutritionnels</option>
                    <option>Suivi post-partum</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-maternal resize-none"
                    placeholder="Décrivez votre demande..."
                  ></textarea>
                </div>
                <Button type="submit" variant="maternal" size="lg" className="w-full">
                  Envoyer la demande
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-maternal/10 p-2 rounded-full">
                  <Heart className="h-6 w-6 text-maternal" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">OASIS de la Maternité</h3>
                  <p className="text-muted-foreground text-sm">Accompagner les femmes, rassurer les mamans</p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md">
                Centre médical spécialisé dans l'accompagnement des futures mamans à Abidjan, 
                offrant des soins de qualité dans un environnement chaleureux et bienveillant.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Consultations prénatales</li>
                <li>Échographies</li>
                <li>Conseils nutritionnels</li>
                <li>Suivi post-partum</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>01 53 38 61 20</li>
                <li>oasisdelamaternite@gmail.com</li>
                <li>Abidjan, Côte d'Ivoire</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 OASIS de la Maternité. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
};

export default Home;