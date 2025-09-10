import React, { useState, useEffect } from 'react';
import { Calculator, MapPin, Calendar, Bike } from 'lucide-react';
import { BIKE_TYPES, FRENCH_CITIES, DEPARTURE_CITIES } from '../utils/constants';
import { calculatePrice } from '../utils/pricing';
import type { SimulatorData } from '../types';

interface PriceSimulatorProps {
  onDataChange: (data: SimulatorData) => void;
}

const PriceSimulator: React.FC<PriceSimulatorProps> = ({ onDataChange }) => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedBikeType, setSelectedBikeType] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    // Mettre à jour les données du simulateur dans le parent
    onDataChange({
      departure,
      arrival,
      date: selectedDate,
      bikeType: selectedBikeType
    });

    if (departure && arrival && selectedDate && selectedBikeType) {
      setIsCalculating(true);
      
      // Simulate calculation delay for better UX
      const timer = setTimeout(() => {
        const price = calculatePrice(departure, arrival, selectedBikeType);
        setEstimatedPrice(price);
        setIsCalculating(false);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setEstimatedPrice(null);
    }
  }, [departure, arrival, selectedDate, selectedBikeType, onDataChange]);

  const selectedBikeData = BIKE_TYPES.find(b => b.id === selectedBikeType);

  return (
    <section id="simulator" className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 to-slate-900/30"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              <Calculator className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            💰 Calculez Votre Budget Matos !
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            ⚡ Parce qu\'on sait que vous comptez chaque gramme ET chaque euro ! Estimation plus précise qu\'un capteur de puissance 🚴‍♂️
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form */}
              <div className="space-y-6">
                {/* Departure */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>🏠 Lieu de départ</span>
                  </label>
                  <select
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    className="w-full p-4 border border-slate-300 bg-white text-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
                  >
                    <option value="">📍 Sélectionnez votre ville</option>
                    {DEPARTURE_CITIES.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                {/* Arrival */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>🏁 Ville d'arrivée</span>
                  </label>
                  <select
                    value={arrival}
                    onChange={(e) => setArrival(e.target.value)}
                    className="w-full p-4 border border-slate-300 bg-white text-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
                  >
                    <option value="">🎯 Sélectionnez votre ville d'arrivée</option>
                    {FRENCH_CITIES.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span>📅 Date de transport</span>
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-4 border border-slate-300 bg-white text-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
                  />
                </div>

                {/* Bike Type */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center space-x-2">
                    <Bike className="h-4 w-4 text-blue-600" />
                    <span>🚴‍♂️ Catégorie de vélo</span>
                  </label>
                  <select
                    value={selectedBikeType}
                    onChange={(e) => setSelectedBikeType(e.target.value)}
                    className="w-full p-4 border border-slate-300 bg-white text-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
                  >
                    <option value="">🚲 Sélectionnez la catégorie</option>
                    {BIKE_TYPES.map(bike => (
                      <option key={bike.id} value={bike.id}>
                        {bike.name} - {bike.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-600/50 lg:col-span-1">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  💰 Estimation du Prix
                </h3>
                
                {isCalculating ? (
                  <div className="text-center py-12">
                    <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-slate-300">⚡ Calcul en cours...</p>
                  </div>
                ) : estimatedPrice !== null ? (
                  <div className="text-center py-8">
                    <div className="text-5xl font-bold bg-gradient-to-r from-[#9001FE] to-[#6FFE01] bg-clip-text text-transparent mb-2">
                      {estimatedPrice}€
                    </div>
                    <p className="text-slate-300 mb-6">🎯 Prix estimé tout compris</p>
                    
                    {/* Details */}
                    <div className="space-y-3 text-left bg-slate-700/50 rounded-xl p-4 backdrop-blur-sm">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">🏠 Départ :</span>
                        <span className="font-medium text-white">{departure}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">🏁 Arrivée :</span>
                        <span className="font-medium text-white">{arrival}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">🚴‍♂️ Catégorie :</span>
                        <span className="font-medium text-white">{selectedBikeData?.name}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">📅 Date :</span>
                        <span className="font-medium text-white">{selectedDate ? new Date(selectedDate).toLocaleDateString('fr-FR') : ''}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
                    >
                      📋 Demander un devis détaillé
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="bg-slate-700/50 rounded-full p-6 w-fit mx-auto mb-4">
                      <Calculator className="h-12 w-12 text-slate-400" />
                    </div>
                    <p className="text-slate-400">
                      📝 Remplissez les champs pour obtenir une estimation
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSimulator;