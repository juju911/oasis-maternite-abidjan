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
  {
    keywords: ['consultation', 'semaine', 'commencer', 'prénatal'],
    question: 'À partir de combien de semaines dois-je commencer les consultations prénatales ?',
    answer: 'Il est recommandé de commencer le suivi prénatal dès les premières semaines de grossesse (idéalement avant la 12ᵉ semaine). 🤱'
  },
  {
    keywords: ['échographie', 'fréquence', 'combien'],
    question: 'À quelle fréquence dois-je faire une échographie ?',
    answer: 'En général, trois échographies sont nécessaires : une au premier trimestre, une au deuxième et une au troisième. Selon votre état de santé, nous pouvons recommander un suivi plus rapproché. 👶'
  },
  {
    keywords: ['signes', 'inquiéter', 'danger', 'urgence', 'saignement'],
    question: 'Quels sont les signes qui doivent m\'inquiéter ?',
    answer: 'Des saignements, des douleurs abdominales intenses, une perte de liquide, une diminution des mouvements du bébé ou des maux de tête sévères doivent vous amener à consulter immédiatement. ⚠️'
  },
  {
    keywords: ['nutrition', 'alimentaire', 'manger', 'régime'],
    question: 'Proposez-vous un suivi nutritionnel ?',
    answer: 'Oui, nous donnons des conseils personnalisés pour une alimentation équilibrée et adaptée à chaque étape de la grossesse. 🥗'
  },
  {
    keywords: ['accouchement', 'sur place', 'lieu'],
    question: 'Où puis-je accoucher ?',
    answer: 'Nous assurons principalement le suivi et la préparation. Pour l\'accouchement, nous orientons nos patientes vers des établissements partenaires sécurisés. 🏥'
  },
  {
    keywords: ['papa', 'conjoint', 'présence', 'assister'],
    question: 'Le papa peut-il assister à l\'accouchement ?',
    answer: 'Oui, nous encourageons la présence du conjoint, car cela favorise le soutien émotionnel et le bien-être de la maman. 👨‍👩‍👶'
  },
  {
    keywords: ['post-partum', 'après', 'allaitement'],
    question: 'Quels services après l\'accouchement ?',
    answer: 'Nous proposons un suivi post-natal, des conseils pour l\'allaitement, la récupération physique et le soutien psychologique. 🤱'
  },
  {
    keywords: ['ateliers', 'préparation', 'cours'],
    question: 'Faites-vous des ateliers ?',
    answer: 'Oui, nous organisons régulièrement des ateliers sur la respiration, la relaxation, l\'allaitement et les soins du nouveau-né. 🧘‍♀️'
  },
  {
    keywords: ['rendez-vous', 'contact', 'prendre'],
    question: 'Comment prendre rendez-vous ?',
    answer: 'Vous pouvez nous contacter par téléphone, WhatsApp ou email pour planifier un rendez-vous. 📞'
  },
  {
    keywords: ['horaires', 'ouverture', 'heures'],
    question: 'Quels sont vos horaires ?',
    answer: 'Nous sommes ouverts du lundi au samedi de 8h à 18h. 🕐'
  },
  {
    keywords: ['téléconsultation', 'en ligne', 'distance'],
    question: 'Faites-vous des téléconsultations ?',
    answer: 'Oui, certaines consultations de suivi ou de conseils peuvent se faire en ligne. 💻'
  },
  {
    keywords: ['localisation', 'adresse', 'où', 'situé'],
    question: 'Où êtes-vous situés ?',
    answer: 'Nous sommes situés à Angré Gestoci, Abidjan, Côte d\'Ivoire. 📍'
  },
  {
    keywords: ['tarifs', 'prix', 'coût'],
    question: 'Quels sont vos tarifs ?',
    answer: 'Nos tarifs varient selon le type de service. Pour plus d\'informations précises, contactez-nous directement. 💰'
  },
  {
    keywords: ['voyager', 'voyage', 'déplacement'],
    question: 'Puis-je voyager enceinte ?',
    answer: 'Oui, sauf contre-indication médicale. Consultez toujours votre sage-femme avant de voyager, surtout après le 7ᵉ mois. ✈️'
  },
  {
    keywords: ['exercice', 'sport', 'activité', 'physique'],
    question: 'Quels exercices pendant la grossesse ?',
    answer: 'La marche, la natation douce et le yoga prénatal sont conseillés, sauf avis contraire de votre médecin. 🏊‍♀️'
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
    
    // Chercher dans les mots-clés
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
    
    // Réponses génériques
    if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut')) {
      return 'Bonjour ! 😊 Je suis là pour répondre à vos questions sur la maternité. N\'hésitez pas à me poser vos questions !';
    }
    
    if (lowerMessage.includes('merci')) {
      return 'De rien ! 😊 N\'hésitez pas si vous avez d\'autres questions. Notre équipe est là pour vous accompagner.';
    }
    
    return 'Je ne suis pas sûre de comprendre votre question. Pouvez-vous reformuler ou choisir parmi ces sujets : consultations prénatales, échographies, accouchement, post-partum, rendez-vous ? 🤔';
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