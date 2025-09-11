import React from 'react';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSimulator = () => {
    document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/src/assets/oleg-kukharuk-aKrqZqpZgDE-unsplash.jpg)'
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-cyan-900/90"></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            🚴‍♂️ Bonjour les Galères !
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent animate-pulse">Votre Vélo Arrive Avant Vous ! 🏆</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            🎯 Votre vélo vaut plus cher que votre voiture ! On le transporte comme le nôtre. 
            Concentrez-vous sur votre PB, on s'occupe du reste ! 💪
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToSimulator}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 flex items-center space-x-2"
            >
              <span>🧮 Simuler un devis</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
            >
              📞 Nous contacter
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg">🛡️ 100% Sécurisé</h3>
              <p className="text-sm opacity-80">Plus protégé qu'un maillot jaune ! 🔒</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg">⏰ Ponctuel</h3>
              <p className="text-sm opacity-80">Plus ponctuel qu'un chrono TT ! ⚡</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg">🏅 Expert</h3>
              <p className="text-sm opacity-80">+5000 vélos choyés comme des bébés ! 🚴‍♀️</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-16 fill-slate-900">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;