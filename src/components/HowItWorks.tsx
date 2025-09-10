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
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            🤔 Plus Simple qu'un Changement de Vitesse !
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            ⚡ 4 étapes pour que votre vélo arrive frais comme un gardon pendant que vous carbo-loadez ! 🚴‍♂️
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 text-center group border border-slate-700/50 hover:border-blue-500/30 hover:-translate-y-2"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/25">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-40"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
          >
            🚀 Commencer maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;