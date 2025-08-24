import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ChatBot from "@/components/ChatBot";
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
  MessageCircle,
  HelpCircle
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

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gradient-to-br from-maternal-soft/40 via-background to-secondary/20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-maternal/5 via-transparent to-secondary/5"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-maternal to-maternal-soft p-4 rounded-2xl shadow-lg shadow-maternal/20 mr-4 animate-pulse">
                <HelpCircle className="h-10 w-10 text-white" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-maternal via-secondary to-maternal bg-clip-text text-transparent">
                  Questions Fréquentes
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-maternal to-secondary rounded-full mt-2 mx-auto"></div>
              </div>
            </div>
            <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed">
              ✨ Découvrez les réponses bienveillantes à vos questions sur cette belle aventure qu'est la maternité
            </p>
          </div>

          <div className="space-y-12">
            {/* Grossesse & suivi médical */}
            <div className="group">
              <div className="bg-gradient-to-r from-maternal/10 to-secondary/10 p-6 rounded-3xl mb-6 backdrop-blur-sm border border-maternal/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-maternal mb-2 flex items-center">
                  <div className="bg-gradient-to-br from-maternal to-maternal-soft p-3 rounded-xl mr-4 shadow-lg">
                    <Baby className="h-7 w-7 text-white" />
                  </div>
                  Grossesse & Suivi Médical
                </h3>
                <p className="text-muted-foreground ml-16">Tout savoir sur votre suivi prénatal avec bienveillance</p>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="grossesse-1" className="bg-gradient-to-r from-background/90 to-maternal-soft/10 border border-maternal/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-maternal/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-maternal/20 p-2 rounded-full mr-4">🤱</span>
                      À partir de combien de semaines dois-je commencer les consultations prénatales ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-maternal-soft/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-maternal">
                      Il est recommandé de commencer le suivi prénatal dès les premières semaines de grossesse (idéalement avant la 12ᵉ semaine). Plus tôt vous commencez, mieux nous pouvons vous accompagner dans cette belle aventure ! 💕
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="grossesse-2" className="bg-gradient-to-r from-background/90 to-maternal-soft/10 border border-maternal/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-maternal/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-maternal/20 p-2 rounded-full mr-4">📸</span>
                      À quelle fréquence dois-je faire une échographie pendant ma grossesse ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-maternal-soft/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-maternal">
                      En général, trois échographies sont nécessaires : une au premier trimestre, une au deuxième et une au troisième. Selon votre état de santé, la sage-femme ou le médecin peut recommander un suivi plus rapproché. Ces moments précieux vous permettront de voir grandir votre petit trésor ! ✨
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="grossesse-3" className="bg-gradient-to-r from-background/90 to-maternal-soft/10 border border-maternal/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-maternal/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-maternal/20 p-2 rounded-full mr-4">⚠️</span>
                      Quels sont les signes qui doivent m'inquiéter pendant la grossesse ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-maternal-soft/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-maternal">
                      Des saignements, des douleurs abdominales intenses, une perte de liquide, une diminution des mouvements du bébé ou des maux de tête sévères doivent vous amener à consulter immédiatement. N'hésitez jamais à nous appeler, nous sommes là pour vous rassurer ! 🤗
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="grossesse-4" className="bg-gradient-to-r from-background/90 to-maternal-soft/10 border border-maternal/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-maternal/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-maternal/20 p-2 rounded-full mr-4">🥗</span>
                      Proposez-vous un suivi nutritionnel pour les femmes enceintes ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-maternal-soft/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-maternal">
                      Oui, nous donnons des conseils personnalisés pour une alimentation équilibrée et adaptée à chaque étape de la grossesse. Bien nourrir maman, c'est bien nourrir bébé ! 🌱
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Accouchement */}
            <div className="group">
              <div className="bg-gradient-to-r from-secondary/10 to-maternal/10 p-6 rounded-3xl mb-6 backdrop-blur-sm border border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-secondary mb-2 flex items-center">
                  <div className="bg-gradient-to-br from-secondary to-secondary/80 p-3 rounded-xl mr-4 shadow-lg">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  Accouchement & Naissance
                </h3>
                <p className="text-muted-foreground ml-16">L'accompagnement pour ce moment magique de la vie</p>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="accouchement-1" className="bg-gradient-to-r from-background/90 to-secondary/10 border border-secondary/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-secondary/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-secondary/20 p-2 rounded-full mr-4">🏥</span>
                      Est-ce que OASIS de la Maternité propose l'accouchement sur place ou uniquement le suivi ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-secondary/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-secondary">
                      Nous assurons principalement le suivi et la préparation. Pour l'accouchement, nous orientons nos patientes vers des établissements partenaires sécurisés. Votre sécurité et celle de votre bébé sont notre priorité absolue ! 🛡️
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accouchement-2" className="bg-gradient-to-r from-background/90 to-secondary/10 border border-secondary/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-secondary/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-secondary/20 p-2 rounded-full mr-4">🌸</span>
                      Puis-je choisir entre accouchement naturel et césarienne ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-secondary/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-secondary">
                      Le choix dépend de votre état de santé et de celui de votre bébé. Nos sages-femmes vous accompagnent et vous conseillent pour l'option la plus sûre. Chaque accouchement est unique et merveilleux ! ✨
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accouchement-3" className="bg-gradient-to-r from-background/90 to-secondary/10 border border-secondary/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-secondary/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-secondary/20 p-2 rounded-full mr-4">👨‍👩‍👶</span>
                      Est-ce que le papa peut assister à l'accouchement ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-secondary/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-secondary">
                      Oui, nous encourageons la présence du conjoint, car cela favorise le soutien émotionnel et le bien-être de la maman. Vivre ensemble ce moment magique renforce les liens familiaux ! 💕
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accouchement-4" className="bg-gradient-to-r from-background/90 to-secondary/10 border border-secondary/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-secondary/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-secondary/20 p-2 rounded-full mr-4">🤱</span>
                      Quels sont les services disponibles pour le post-partum (après l'accouchement) ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-secondary/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-secondary">
                      Nous proposons un suivi post-natal, des conseils pour l'allaitement, la récupération physique et le soutien psychologique. Nous restons à vos côtés même après la naissance ! 🌈
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Services & accompagnement */}
            <div className="group">
              <div className="bg-gradient-to-r from-maternal/10 to-secondary/10 p-6 rounded-3xl mb-6 backdrop-blur-sm border border-maternal/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-maternal mb-2 flex items-center">
                  <div className="bg-gradient-to-br from-maternal to-maternal-soft p-3 rounded-xl mr-4 shadow-lg">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  Services & Accompagnement
                </h3>
                <p className="text-muted-foreground ml-16">Une équipe dédiée pour votre bien-être complet</p>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="services-1" className="bg-gradient-to-r from-background/90 to-maternal/10 border border-maternal/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-maternal/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-maternal/20 p-2 rounded-full mr-4">👩‍⚕️</span>
                      Quelles sont les spécialités disponibles à OASIS de la Maternité ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-maternal-soft/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-maternal">
                      Nous travaillons avec des sages-femmes qualifiées, des échographistes expérimentés et des conseillers en santé maternelle. Une équipe passionnée et dévouée ! 👥
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="services-2" className="bg-gradient-to-r from-background/90 to-maternal/10 border border-maternal/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-maternal/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-maternal/20 p-2 rounded-full mr-4">🧘‍♀️</span>
                      Faites-vous des ateliers ou des séances de préparation à l'accouchement ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-maternal-soft/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-maternal">
                      Oui, nous organisons régulièrement des ateliers sur la respiration, la relaxation, l'allaitement et les soins du nouveau-né. Des moments d'apprentissage et de partage entre futures mamans ! 🌸
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="services-3" className="bg-gradient-to-r from-background/90 to-maternal/10 border border-maternal/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-maternal/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-maternal/20 p-2 rounded-full mr-4">💝</span>
                      Est-il possible d'avoir un accompagnement psychologique pendant et après la grossesse ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-maternal-soft/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-maternal">
                      Absolument, nous proposons un accompagnement adapté pour aider les futures mamans à vivre cette période avec sérénité. Votre bien-être émotionnel nous tient à cœur ! 💚
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="services-4" className="bg-gradient-to-r from-background/90 to-maternal/10 border border-maternal/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-maternal/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-maternal/20 p-2 rounded-full mr-4">🍼</span>
                      Proposez-vous des conseils pour l'allaitement et les soins du nouveau-né ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-maternal-soft/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-maternal">
                      Oui, nos équipes conseillent les mamans sur les bonnes pratiques pour l'allaitement, la nutrition et les premiers soins du bébé. Nous vous accompagnons dans ces premiers pas précieux ! 👶
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Organisation & rendez-vous */}
            <div className="group">
              <div className="bg-gradient-to-r from-secondary/10 to-maternal/10 p-6 rounded-3xl mb-6 backdrop-blur-sm border border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-secondary mb-2 flex items-center">
                  <div className="bg-gradient-to-br from-secondary to-secondary/80 p-3 rounded-xl mr-4 shadow-lg">
                    <Calendar className="h-7 w-7 text-white" />
                  </div>
                  Organisation & Rendez-vous
                </h3>
                <p className="text-muted-foreground ml-16">Prendre rendez-vous n'a jamais été aussi simple</p>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="organisation-1" className="bg-gradient-to-r from-background/90 to-secondary/10 border border-secondary/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-secondary/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-secondary/20 p-2 rounded-full mr-4">📞</span>
                      Comment prendre rendez-vous ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-secondary/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-secondary">
                      Vous pouvez nous contacter par téléphone, WhatsApp ou email pour planifier un rendez-vous. Nous sommes là pour vous faciliter la vie ! 📱
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="organisation-2" className="bg-gradient-to-r from-background/90 to-secondary/10 border border-secondary/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-secondary/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-secondary/20 p-2 rounded-full mr-4">⏰</span>
                      Quels sont vos horaires d'ouverture ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-secondary/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-secondary">
                      Nous sommes ouverts du lundi au samedi de 8h à 18h. Des horaires pratiques pour s'adapter à votre rythme de vie ! 🕐
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="organisation-3" className="bg-gradient-to-r from-background/90 to-secondary/10 border border-secondary/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-secondary/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-secondary/20 p-2 rounded-full mr-4">💻</span>
                      Est-il possible d'avoir une téléconsultation ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-secondary/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-secondary">
                      Oui, certaines consultations de suivi ou de conseils peuvent se faire en ligne. La technologie au service de votre confort ! 🌐
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="organisation-4" className="bg-gradient-to-r from-background/90 to-secondary/10 border border-secondary/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-secondary/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-secondary/20 p-2 rounded-full mr-4">📍</span>
                      Où se situe exactement OASIS de la Maternité ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-secondary/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-secondary">
                      Nous sommes situés à Angré Gestoci, Abidjan, Côte d'Ivoire. Vous pouvez retrouver notre localisation exacte sur Google Maps. Un cadre paisible pour votre bien-être ! 🗺️
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="organisation-5" className="bg-gradient-to-r from-background/90 to-secondary/10 border border-secondary/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-secondary/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-secondary/20 p-2 rounded-full mr-4">💰</span>
                      Quels sont vos tarifs pour les consultations et les échographies ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-secondary/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-secondary">
                      Nos tarifs varient selon le type de service. Pour plus d'informations précises, contactez-nous directement. Des prix justes pour un accompagnement de qualité ! 💎
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Autres préoccupations fréquentes */}
            <div className="group">
              <div className="bg-gradient-to-r from-maternal/10 to-secondary/10 p-6 rounded-3xl mb-6 backdrop-blur-sm border border-maternal/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-maternal mb-2 flex items-center">
                  <div className="bg-gradient-to-br from-maternal to-maternal-soft p-3 rounded-xl mr-4 shadow-lg">
                    <Stethoscope className="h-7 w-7 text-white" />
                  </div>
                  Conseils Santé & Bien-être
                </h3>
                <p className="text-muted-foreground ml-16">Toutes nos réponses pour une grossesse épanouie</p>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="autres-1" className="bg-gradient-to-r from-background/90 to-maternal/10 border border-maternal/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-maternal/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-maternal/20 p-2 rounded-full mr-4">🍽️</span>
                      Je suis enceinte et j'ai du mal à manger, est-ce normal ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-maternal-soft/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-maternal">
                      Il est fréquent d'avoir des changements d'appétit pendant la grossesse. Nous vous aidons à adapter votre alimentation pour couvrir vos besoins et ceux du bébé. C'est tout à fait normal ! 🌿
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="autres-2" className="bg-gradient-to-r from-background/90 to-maternal/10 border border-maternal/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-maternal/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-maternal/20 p-2 rounded-full mr-4">🥕</span>
                      Quels aliments dois-je privilégier pendant ma grossesse ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-maternal-soft/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-maternal">
                      Favorisez les fruits, légumes, protéines maigres, céréales complètes et buvez beaucoup d'eau. Limitez les produits trop gras ou sucrés. Une alimentation colorée pour une maman rayonnante ! 🌈
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="autres-3" className="bg-gradient-to-r from-background/90 to-maternal/10 border border-maternal/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-maternal/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-maternal/20 p-2 rounded-full mr-4">✈️</span>
                      Puis-je voyager en étant enceinte ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-maternal-soft/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-maternal">
                      Oui, sauf contre-indication médicale. Consultez toujours votre sage-femme avant de voyager, surtout après le 7ᵉ mois. Profitez de ces derniers moments à deux ! 🌍
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="autres-4" className="bg-gradient-to-r from-background/90 to-maternal/10 border border-maternal/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-maternal/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-maternal/20 p-2 rounded-full mr-4">🏃‍♀️</span>
                      Quels exercices ou activités physiques sont recommandés pendant la grossesse ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-maternal-soft/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-maternal">
                      La marche, la natation douce et le yoga prénatal sont conseillés, sauf avis contraire de votre médecin. Bouger en douceur pour votre bien-être ! 🧘‍♀️
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="autres-5" className="bg-gradient-to-r from-background/90 to-maternal/10 border border-maternal/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 hover:bg-maternal/5 text-left">
                    <span className="font-semibold text-foreground flex items-center">
                      <span className="bg-maternal/20 p-2 rounded-full mr-4">🚨</span>
                      Que faire en cas de contractions avant terme ?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-muted-foreground bg-gradient-to-br from-maternal-soft/5 to-transparent">
                    <div className="bg-white/50 p-6 rounded-xl border-l-4 border-maternal">
                      Consultez immédiatement un professionnel de santé pour vérifier si ce sont de "fausses contractions" ou un vrai travail prématuré. En cas de doute, n'hésitez jamais ! 🆘
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-maternal-soft/20 to-secondary/20 p-8 rounded-3xl border border-maternal/20 shadow-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-4">💝 Une question spécifique ?</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Notre équipe bienveillante est là pour vous accompagner avec tendresse et professionnalisme. 
                <br />N'hésitez pas à nous contacter, chaque question mérite une réponse personnalisée ! ✨
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="maternal" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="h-5 w-5 mr-2" />
                  Appeler maintenant
                </Button>
                <Button variant="maternal-soft" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <ChatBot />
    </div>
  );
};

export default Home;