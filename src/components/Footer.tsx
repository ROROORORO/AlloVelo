import React from 'react';
import { Bike, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-[#9001FE] to-[#6FFE01] p-2 rounded-lg">
                <Bike className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#9001FE] to-[#6FFE01] bg-clip-text text-transparent">
                AlloVélo
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              🚴‍♂️ Créé par des triathlètes pour des triathlètes ! On connaît vos galères parce qu'on les a vécues. 
              Votre partenaire de confiance depuis 2020 (et quelques DNF qui nous ont appris l'humilité). 🏆
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#6FFE01] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#6FFE01] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#6FFE01] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">🚀 Nos Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#simulator" className="hover:text-[#6FFE01] transition-colors">🚴‍♂️ Transport premium</a></li>
              <li><a href="#simulator" className="hover:text-[#6FFE01] transition-colors">⚡ Mode panique accepté</a></li>
              <li><a href="#simulator" className="hover:text-[#6FFE01] transition-colors">📦 Emballage digne d'un pro</a></li>
              <li><a href="#simulator" className="hover:text-[#6FFE01] transition-colors">🛡️ Assurance "même contre les aliens"</a></li>
              <li><a href="#simulator" className="hover:text-[#6FFE01] transition-colors">📱 Suivi GPS temps réel</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">📞 Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#9001FE]" />
                <a href="tel:+33123456789" className="hover:text-[#6FFE01] transition-colors">
                  📞 01 23 45 67 89
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#9001FE]" />
                <a href="mailto:contact@allovelo.fr" className="hover:text-[#6FFE01] transition-colors">
                  ✉️ contact@allovelo.fr
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#9001FE] mt-0.5" />
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
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[#9001FE]" />
                <span className="text-sm">📅 Lun - Ven : 8h - 19h</span>
              </li>
              <li className="ml-6 text-sm">🏖️ Samedi : 9h - 17h</li>
              <li className="ml-6 text-sm">🏠 Dimanche : Sur demande</li>
            </ul>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-[#6FFE01] mb-2">🚨 SOS Vélo Weekend</h4>
              <p className="text-sm text-gray-300">
                ⏰ Parce que les courses c'est souvent le weekend ! Dispo 24h/24 pour vos urgences 🏁
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:justify-between md:items-center">
            <div className="text-sm text-gray-400">
              © 2024 AlloVélo. Fait avec ❤️ par des passionnés pour des passionnés. 🚴‍♂️
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap space-x-6 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#6FFE01] transition-colors">📋 Mentions légales</a></li>
                <li><a href="#" className="hover:text-[#6FFE01] transition-colors">🔒 Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-[#6FFE01] transition-colors">📄 CGV</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;