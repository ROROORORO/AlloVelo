import React from 'react';
import { MapPin, Package, Truck, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: MapPin,
      title: '📍 Réservez',
      description: '🎯 Dites-nous d\'où vous partez et où vous voulez briller ! Devis plus rapide qu\'un sprint de Cavendish !'
    },
    {
      icon: Package,
      title: '📦 Préparez',
      description: '🏠 On vient chercher votre bébé avec plus de précautions qu\'un mécanicien pro ! Emballage digne d\'un Pinarello 🛡️'
    },
    {
      icon: Truck,
      title: '🚛 Transportons',
      description: '🛣️ Votre monture voyage comme un VIP ! Nos camions sont plus douillets qu\'un bus d\'équipe WorldTour 🔒'
    },
    {
      icon: CheckCircle,
      title: '✅ Récupérez',
      description: '🏁 Retrouvez votre vélo prêt à en découdre ! Plus frais qu\'après une sortie de récup\' 🎉'
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            🤔 Plus Simple qu'un Changement de Vitesse !
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ⚡ 4 étapes pour que votre vélo arrive frais comme un gardon pendant que vous carbo-loadez ! 🚴‍♂️
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group border border-gray-700"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#9001FE] to-[#6FFE01] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="bg-gradient-to-r from-[#9001FE] to-[#6FFE01] p-4 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#9001FE] to-[#6FFE01] opacity-30"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#9001FE] to-[#6FFE01] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            🚀 Commencer maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;