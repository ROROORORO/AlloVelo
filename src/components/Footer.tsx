import React from 'react';
import { Bike, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 to-slate-900/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-lg shadow-lg">
                <Bike className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#9001FE] to-[#6FFE01] bg-clip-text text-transparent">
                AlloVélo
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              🚴‍♂️ Créé par des triathlètes pour des triathlètes ! On connaît vos galères parce qu'on les a vécues. 
              Votre partenaire de confiance depuis 2020 (et quelques DNF qui nous ont appris l'humilité). 🏆
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">🚀 Nos Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#simulator" className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">🚴‍♂️ Transport premium</a></li>
              <li><a href="#simulator" className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">⚡ Mode panique accepté</a></li>
              <li><a href="#simulator" className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">📦 Emballage digne d'un pro</a></li>
              <li><a href="#simulator" className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">🛡️ Assurance "même contre les aliens"</a></li>
              <li><a href="#simulator" className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">📱 Suivi GPS temps réel</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">📞 Contact</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+33123456789" className="hover:text-cyan-400 transition-all duration-300">
                  📞 01 23 45 67 89
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:contact@allovelo.fr" className="hover:text-cyan-400 transition-all duration-300">
                  ✉️ contact@allovelo.fr
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span>
                  🏢 123 Avenue des Cyclistes<br />
                  📍 75001 Paris, France
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">🕐 Horaires</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm">📅 Lun - Ven : 8h - 19h</span>
              </li>
              <li className="ml-6 text-sm">🏖️ Samedi : 9h - 17h</li>
              <li className="ml-6 text-sm">🏠 Dimanche : Sur demande</li>
            </ul>
            
            <div className="mt-6 p-4 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-700/50">
              <h4 className="font-semibold text-cyan-400 mb-2">🚨 SOS Vélo Weekend</h4>
              <p className="text-sm text-slate-300">
                ⏰ Parce que les courses c'est souvent le weekend ! Dispo 24h/24 pour vos urgences 🏁
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:justify-between md:items-center">
            <div className="text-sm text-slate-400">
              © 2024 AlloVélo. Fait avec ❤️ par des passionnés pour des passionnés. 🚴‍♂️
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap space-x-6 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-all duration-300">📋 Mentions légales</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-all duration-300">🔒 Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-all duration-300">📄 CGV</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;