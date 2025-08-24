import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, X, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const faqData = [
  // Grossesse & suivi médical
  {
    keywords: ['consultation', 'semaine', 'commencer', 'prénatal', 'suivi'],
    question: 'À partir de combien de semaines dois-je commencer les consultations prénatales ?',
    answer: 'Il est recommandé de commencer le suivi prénatal dès les premières semaines de grossesse, idéalement avant la 12ᵉ semaine. 🤱'
  },
  {
    keywords: ['échographie', 'fréquence', 'combien', 'trimestre'],
    question: 'À quelle fréquence dois-je faire une échographie pendant ma grossesse ?',
    answer: 'En général, trois échographies sont nécessaires : une au premier trimestre, une au deuxième et une au troisième. Selon votre état de santé, la sage-femme ou le médecin peut recommander un suivi plus rapproché. 👶'
  },
  {
    keywords: ['signes', 'inquiéter', 'danger', 'urgence', 'saignement', 'douleur', 'liquide'],
    question: 'Quels sont les signes qui doivent m\'inquiéter pendant la grossesse ?',
    answer: 'Des saignements, des douleurs abdominales intenses, une perte de liquide, une diminution des mouvements du bébé ou des maux de tête sévères doivent vous amener à consulter immédiatement. 🚨'
  },
  {
    keywords: ['nutrition', 'alimentaire', 'manger', 'régime', 'nourriture'],
    question: 'Proposez-vous un suivi nutritionnel pour les femmes enceintes ?',
    answer: 'Oui, nous donnons des conseils personnalisés pour une alimentation équilibrée et adaptée à chaque étape de la grossesse. 🥗'
  },
  {
    keywords: ['appétit', 'mal', 'manger', 'nausée'],
    question: 'Je suis enceinte et j\'ai du mal à manger, est-ce normal ?',
    answer: 'Il est fréquent d\'avoir des changements d\'appétit pendant la grossesse. Nous vous aidons à adapter votre alimentation pour couvrir vos besoins et ceux du bébé. 💚'
  },
  {
    keywords: ['aliments', 'privilégier', 'alimentation', 'conseils'],
    question: 'Quels aliments dois-je privilégier pendant ma grossesse ?',
    answer: 'Favorisez les fruits, légumes, protéines maigres, céréales complètes et buvez beaucoup d\'eau. Limitez les produits trop gras ou sucrés. 🍎'
  },

  // Accouchement
  {
    keywords: ['accouchement', 'sur place', 'lieu', 'où'],
    question: 'Est-ce que OASIS de la Maternité propose l\'accouchement sur place ou uniquement le suivi ?',
    answer: 'Nous assurons principalement le suivi et la préparation. Pour l\'accouchement, nous orientons nos patientes vers des établissements partenaires sécurisés. 🏥'
  },
  {
    keywords: ['choisir', 'naturel', 'césarienne', 'accouchement'],
    question: 'Puis-je choisir entre accouchement naturel et césarienne ?',
    answer: 'Le choix dépend de votre état de santé et de celui de votre bébé. Nos sages-femmes vous accompagnent et vous conseillent pour l\'option la plus sûre. 👩‍⚕️'
  },
  {
    keywords: ['papa', 'conjoint', 'présence', 'assister', 'père'],
    question: 'Est-ce que le papa peut assister à l\'accouchement ?',
    answer: 'Oui, nous encourageons la présence du conjoint, car cela favorise le soutien émotionnel et le bien-être de la maman. 👨‍👩‍👶'
  },
  {
    keywords: ['post-partum', 'après', 'services', 'accouchement'],
    question: 'Quels sont les services disponibles pour le post-partum (après l\'accouchement) ?',
    answer: 'Nous proposons un suivi post-natal, des conseils pour l\'allaitement, la récupération physique et le soutien psychologique. 🤱'
  },

  // Services & accompagnement
  {
    keywords: ['spécialités', 'équipe', 'professionnels'],
    question: 'Quelles sont les spécialités disponibles à OASIS de la Maternité ?',
    answer: 'Nous travaillons avec des sages-femmes qualifiées, des échographistes expérimentés et des conseillers en santé maternelle. 👩‍⚕️'
  },
  {
    keywords: ['ateliers', 'préparation', 'cours', 'séances'],
    question: 'Faites-vous des ateliers ou des séances de préparation à l\'accouchement ?',
    answer: 'Oui, nous organisons régulièrement des ateliers sur la respiration, la relaxation, l\'allaitement et les soins du nouveau-né. 🧘‍♀️'
  },
  {
    keywords: ['psychologique', 'accompagnement', 'soutien', 'stress'],
    question: 'Est-il possible d\'avoir un accompagnement psychologique pendant et après la grossesse ?',
    answer: 'Absolument, nous proposons un accompagnement adapté pour aider les futures mamans à vivre cette période avec sérénité. 💜'
  },
  {
    keywords: ['allaitement', 'conseils', 'soins', 'nouveau-né', 'bébé'],
    question: 'Proposez-vous des conseils pour l\'allaitement et les soins du nouveau-né ?',
    answer: 'Oui, nos équipes conseillent les mamans sur les bonnes pratiques pour l\'allaitement, la nutrition et les premiers soins du bébé. 🍼'
  },

  // Organisation & rendez-vous
  {
    keywords: ['rendez-vous', 'contact', 'prendre', 'réserver'],
    question: 'Comment prendre rendez-vous ?',
    answer: 'Vous pouvez nous contacter par téléphone (01 53 38 61 20), WhatsApp ou email (oasisdelamaternite@gmail.com) pour planifier un rendez-vous. 📞'
  },
  {
    keywords: ['horaires', 'ouverture', 'heures', 'ouverts'],
    question: 'Quels sont vos horaires d\'ouverture ?',
    answer: 'Nous sommes ouverts du lundi au samedi de 8h à 18h. 🕐'
  },
  {
    keywords: ['téléconsultation', 'en ligne', 'distance', 'vidéo'],
    question: 'Est-il possible d\'avoir une téléconsultation ?',
    answer: 'Oui, certaines consultations de suivi ou de conseils peuvent se faire en ligne. 💻'
  },
  {
    keywords: ['localisation', 'adresse', 'où', 'situé', 'lieu'],
    question: 'Où se situe exactement OASIS de la Maternité ?',
    answer: 'Nous sommes situés à Angré Gestoci, Abidjan, Côte d\'Ivoire. Vous pouvez retrouver notre localisation exacte sur Google Maps. 📍'
  },
  {
    keywords: ['tarifs', 'prix', 'coût', 'combien'],
    question: 'Quels sont vos tarifs pour les consultations et les échographies ?',
    answer: 'Nos tarifs varient selon le type de service. Pour plus d\'informations précises, contactez-nous directement. 💰'
  },

  // Autres préoccupations fréquentes
  {
    keywords: ['voyager', 'voyage', 'déplacement', 'avion'],
    question: 'Puis-je voyager en étant enceinte ?',
    answer: 'Oui, sauf contre-indication médicale. Consultez toujours votre sage-femme avant de voyager, surtout après le 7ᵉ mois. ✈️'
  },
  {
    keywords: ['exercice', 'sport', 'activité', 'physique'],
    question: 'Quels exercices ou activités physiques sont recommandés pendant la grossesse ?',
    answer: 'La marche, la natation douce et le yoga prénatal sont conseillés, sauf avis contraire de votre médecin. 🏊‍♀️'
  },
  {
    keywords: ['contractions', 'avant', 'terme', 'prématuré'],
    question: 'Que faire en cas de contractions avant terme ?',
    answer: 'Consultez immédiatement un professionnel de santé pour vérifier si ce sont de "fausses contractions" ou un vrai travail prématuré. 🚨'
  }
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! 👋 Je suis l\'assistante virtuelle d\'OASIS de la Maternité. Comment puis-je vous aider aujourd\'hui ?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestMatch = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // 1. Chercher d'abord dans la FAQ
    let bestMatch = null;
    let maxMatches = 0;
    
    for (const faq of faqData) {
      const matches = faq.keywords.filter(keyword => 
        lowerMessage.includes(keyword.toLowerCase())
      ).length;
      
      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = faq;
      }
    }
    
    if (bestMatch && maxMatches > 0) {
      return bestMatch.answer;
    }
    
    // 2. Chercher dans la knowledge base OASIS
    const knowledgeBaseTopics = {
      // Services généraux
      'bien-être': 'OASIS de la Maternité est un centre dédié au bien-être des femmes enceintes, des futures mamans et des jeunes parents. Nous vous accompagnons avec bienveillance tout au long de votre parcours. 💕',
      'équipe': 'Notre équipe est composée de sages-femmes qualifiées, d\'échographistes expérimentés et de conseillers en santé maternelle pour vous offrir le meilleur accompagnement. 👩‍⚕️',
      'sécurité': 'Nous mettons en avant la sécurité, la bienveillance et la proximité dans tous nos services pour votre tranquillité d\'esprit. 🛡️',
      
      // Services spécifiques
      'échographies': 'Nous réalisons des échographies obstétricales au premier, deuxième et troisième trimestre avec des équipements modernes. 👶',
      'préparation': 'Nos séances de préparation à l\'accouchement incluent la respiration, la relaxation et le yoga prénatal. 🧘‍♀️',
      'nutrition': 'Nous proposons un accompagnement nutritionnel personnalisé avec des conseils alimentaires adaptés à chaque étape de la grossesse. 🥗',
      'post-natal': 'Notre suivi post-natal comprend l\'accompagnement pour la récupération physique, psychologique et les conseils d\'allaitement. 🤱',
      
      // Informations pratiques
      'angré': 'Nous sommes situés à Angré Gestoci, Abidjan, Côte d\'Ivoire, dans un cadre chaleureux et accueillant. 📍',
      'établissements': 'Nous travaillons avec des établissements partenaires sécurisés pour vous orienter vers les meilleurs soins d\'accouchement. 🏥'
    };
    
    // Chercher les mots-clés dans la knowledge base
    for (const [topic, response] of Object.entries(knowledgeBaseTopics)) {
      if (lowerMessage.includes(topic)) {
        return response;
      }
    }
    
    // 3. Réponses génériques courantes
    if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut') || lowerMessage.includes('hello')) {
      return 'Bonjour ! 😊 Je suis là pour répondre à vos questions sur la maternité et vous accompagner dans cette belle aventure. N\'hésitez pas à me poser vos questions !';
    }
    
    if (lowerMessage.includes('merci') || lowerMessage.includes('remercie')) {
      return 'De rien ! 😊 C\'est un plaisir de vous accompagner. N\'hésitez pas si vous avez d\'autres questions, notre équipe est toujours là pour vous soutenir. 💕';
    }

    if (lowerMessage.includes('au revoir') || lowerMessage.includes('bye')) {
      return 'Au revoir ! 👋 Prenez soin de vous et n\'hésitez pas à revenir si vous avez des questions. Nous vous souhaitons le meilleur pour votre parcours maternel ! 💕';
    }
    
    // 4. Message de contact élégant si aucune réponse trouvée
    return `Je vous remercie pour votre question. Afin de mieux vous accompagner et répondre de manière personnalisée à votre demande, nous vous invitons à nous contacter directement :

📍 [Voir sur la carte](https://maps.app.goo.gl/en3veG11g4mxaGBWA) – Abidjan, Côte d'Ivoire
📞 01 53 38 61 20
✉️ oasisdelamaternite@gmail.com

Notre équipe se fera un plaisir de vous répondre rapidement et vous accompagner avec toute la bienveillance que vous méritez. 💕`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simuler le temps de réponse
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBestMatch(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "h-14 w-14 rounded-full shadow-elegant transition-all duration-300 transform hover:scale-110",
            "bg-gradient-primary hover:shadow-glow border-0",
            "flex items-center justify-center group relative overflow-hidden",
            isOpen && "rotate-180"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {isOpen ? (
            <X className="h-6 w-6 text-white transition-transform duration-300" />
          ) : (
            <MessageCircle className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
          )}
          
          {/* Badge de notification */}
          <div className="absolute -top-2 -right-2 h-6 w-6 bg-accent rounded-full flex items-center justify-center">
            <Bot className="h-3 w-3 text-white" />
          </div>
        </Button>
      </div>

      {/* Interface de chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 sm:w-96">
          <Card className="shadow-elegant border-0 bg-gradient-to-br from-background via-background to-secondary/5 backdrop-blur-sm">
            {/* En-tête */}
            <div className="bg-gradient-primary p-4 rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Assistant OASIS</h3>
                  <p className="text-xs text-white/80">En ligne • Répond rapidement</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="h-80 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.isBot ? "justify-start" : "justify-end"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-2xl px-4 py-2 transition-all duration-200",
                        message.isBot
                          ? "bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground shadow-sm"
                          : "bg-gradient-primary text-white shadow-sm"
                      )}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={cn(
                        "text-xs mt-1 opacity-70",
                        message.isBot ? "text-muted-foreground" : "text-white/70"
                      )}>
                        {message.timestamp.toLocaleTimeString('fr-FR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Indicateur de frappe */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-secondary rounded-2xl px-4 py-2 shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Zone de saisie */}
            <div className="p-4 border-t bg-gradient-to-r from-background to-secondary/5">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre question..."
                  className="flex-1 border-secondary/30 focus:border-primary transition-colors"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="h-10 w-10 p-0 bg-gradient-primary hover:shadow-glow transition-all duration-200"
                >
                  <Send className="h-4 w-4 text-white" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Posez vos questions sur la grossesse et la maternité 💕
              </p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;