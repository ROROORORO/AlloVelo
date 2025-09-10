import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "🛡️ Mon vélo à 8000€, vous allez pas me le péter ?",
      answer: "🔒 Eh non ! On traite votre monture comme si c'était notre propre Cervélo S5 ! Emballage pro digne d'un transfert d'équipe WorldTour, sangles spéciales vélo (pas des sangles de déménagement hein !), et assurance tous risques. Nos chauffeurs sont des cyclistes, ils savent que toucher au réglage de selle = crime de lèse-majesté ! 🚴‍♂️"
    },
    {
      question: "⏰ J'ai oublié de réserver, je fais mon Ironman dans 3 jours !",
      answer: "📅 Aïe ! Comme quand on oublie de charger sa montre GPS... Idéalement 2 semaines avant pour être peinard, mais on comprend les coups de stress ! On fait du miracle selon nos dispos, avec un petit supplément 'mode panique' pour les réservations à moins de 48h. Promis, on ne vous jugera pas ! ⚡"
    },
    {
      question: "🚨 Et si vous arrivez en retard le jour J ?",
      answer: "📱 Alors là, c'est la cata ! Mais rassurez-vous, on est plus fiables qu'un Shimano Di2. Si jamais (mais vraiment JAMAIS), on vous prévient illico avec un nouveau créneau. Et si ça vous fait louper votre course, on rembourse tout + on assume les frais de votre weekend gâché. Parce qu'on sait ce que ça représente ! 💰"
    },
    {
      question: "🚲 Mon vélo bizarre/cher/électrique, ça passe ?",
      answer: "✅ Du vélo de mamie au TT bike de 15000€, on prend tout ! Route, VTT, gravel, électriques, tandems, vélos couchés, fatbikes... Même votre fixie hipster ! Pour les machines d'exception (on parle Colnago, Pinarello, etc.), on a un service premium avec emballage renforcé. Parce qu'on sait reconnaître une œuvre d'art ! 💎"
    },
    {
      question: "🏠 Vous venez le chercher où exactement ?",
      answer: "🚛 Où vous voulez ! Chez vous (même au 5ème sans ascenseur, on a l'habitude), au boulot, au club, chez belle-maman... On livre direct sur le site de course ou au plus près selon l'orga. Créneaux précis comme un départ de contre-la-montre et suivi GPS en temps réel ! 📍"
    },
    {
      question: "🔄 Et pour le retour ? Parce que moi après l'effort...",
      answer: "🎯 On vous comprend ! Après avoir tout donné, la dernière chose qu'on veut c'est se trimballer son vélo dans le TER... Service aller-retour complet : on récupère votre monture pendant que vous savourez votre médaille/bière de récup'/massage, et on vous la ramène proprement à la maison ! 🏠"
    },
    {
      question: "💰 Ça coûte combien ? (j'ai déjà claqué mon budget dans les roues...)",
      answer: "📊 On sait, après les roues carbone, le budget est serré ! Entre 45€ et 75€ l'aller selon la distance, le type de vélo et si c'est urgent. Moins cher qu'une sortie vélo avec les copains (quand on compte l'essence + le café + les barres énergétiques) ! Utilisez notre simulateur, c'est gratuit et sans engagement ! 🧮"
    },
    {
      question: "🔧 Si vous abîmez mon vélo, je fais comment pour ma course ?",
      answer: "🛠️ Catastrophe ! Mais on assume à 100% : assurance qui couvre réparation ou remplacement selon expertise (par de vrais vélocistes, pas des experts auto !). Réseau de vélocistes partenaires pour dépannage express. Déclaration immédiate à la livraison, pas de paperasse qui traîne. Parce qu'on sait que sans vélo, pas de course ! ⚡"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 to-slate-900/30"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ❓ Les Questions qu'on nous Pose Tout le Temps !
          </h2>
          <p className="text-xl text-slate-300">
            🎯 Parce qu\'entre passionnés, on se comprend ! Toutes les réponses à vos interrogations de perfectionnistes 🚴‍♂️
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-xl border border-slate-700/50 overflow-hidden hover:border-blue-500/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-cyan-400 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-slate-700/50 pt-4">
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">
            🤔 Vous ne trouvez pas la réponse à votre question ?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
          >
            📞 Contactez-nous
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;