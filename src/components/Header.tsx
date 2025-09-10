import React from 'react';
import { Bike, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 shadow-lg border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-[#9001FE] to-[#6FFE01] p-2 rounded-lg">
              <Bike className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#9001FE] to-[#6FFE01] bg-clip-text text-transparent">
              AlloVélo
            </span>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+33123456789" className="flex items-center space-x-2 text-gray-300 hover:text-[#6FFE01] transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">📞 01 23 45 67 89</span>
            </a>
            <a href="mailto:contact@allovelo.fr" className="flex items-center space-x-2 text-gray-300 hover:text-[#6FFE01] transition-colors">
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">✉️ contact@allovelo.fr</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;