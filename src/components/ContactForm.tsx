import React, { useState } from 'react';
import { useEffect } from 'react';
import { Send, CheckCircle, Mail, Phone, User, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { FRENCH_CITIES, DEPARTURE_CITIES } from '../utils/constants';
import type { ContactForm, SimulatorData } from '../types';

interface ContactFormProps {
  simulatorData: SimulatorData;
}

const ContactFormComponent: React.FC<ContactFormProps> = ({ simulatorData }) => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    departure: simulatorData.departure,
    arrival: simulatorData.arrival,
    date: simulatorData.date,
    remarks: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  // Mettre à jour le formulaire quand les données du simulateur changent
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      departure: simulatorData.departure,
      arrival: simulatorData.arrival,
      date: simulatorData.date
    }));
  }, [simulatorData]);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.phone.trim()) newErrors.phone = 'Le téléphone est requis';
    if (!formData.departure) newErrors.departure = 'Le lieu de départ est requis';
    if (!formData.arrival) newErrors.arrival = 'Le lieu d\'arrivée est requis';
    if (!formData.date) newErrors.date = 'La date est requise';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        departure: '',
        arrival: '',
        date: '',
        remarks: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-[#9001FE] to-[#6FFE01]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="bg-green-100 rounded-full p-6 w-fit mx-auto mb-6">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Demande envoyée !
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Merci pour votre demande. Nous vous recontacterons dans les plus brefs délais avec un devis personnalisé.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-sm text-gray-600">
                <strong>Délai de réponse :</strong> Sous 2 heures en journée
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#9001FE] to-[#6FFE01]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            📋 On Prépare Votre Victoire !
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            📝 Quelques infos et hop ! On s\'occupe de tout pendant que vous peaufinez votre position aéro 🎯
          </p>
        </div>

        <div className="bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                  <User className="h-4 w-4 text-[#9001FE]" />
                  <span>👤 Nom complet *</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-4 border rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-[#9001FE] focus:border-transparent transition-all ${
                    errors.name ? 'border-red-400' : 'border-gray-600'
                  }`}
                  placeholder="Votre nom et prénom"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-[#9001FE]" />
                  <span>✉️ Email *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-4 border rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-[#9001FE] focus:border-transparent transition-all ${
                    errors.email ? 'border-red-400' : 'border-gray-600'
                  }`}
                  placeholder="votre@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-[#9001FE]" />
                  <span>📞 Téléphone *</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-4 border rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-[#9001FE] focus:border-transparent transition-all ${
                    errors.phone ? 'border-red-400' : 'border-gray-600'
                  }`}
                  placeholder="06 12 34 56 78"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              {/* Departure */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-[#9001FE]" />
                  <span>🏠 Lieu de départ *</span>
                </label>
                <select
                  name="departure"
                  value={formData.departure}
                  onChange={handleChange}
                  className={`w-full p-4 border rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-[#9001FE] focus:border-transparent transition-all ${
                    errors.departure ? 'border-red-400' : 'border-gray-600'
                  }`}
                >
                  <option value="" className="bg-gray-700">📍 Sélectionnez votre ville</option>
                  {DEPARTURE_CITIES.map(city => (
                    <option key={city} value={city} className="bg-gray-700">{city}</option>
                  ))}
                </select>
                {errors.departure && <p className="mt-1 text-sm text-red-600">{errors.departure}</p>}
              </div>

              {/* Arrival */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-[#9001FE]" />
                  <span>🏁 Lieu d'arrivée *</span>
                </label>
                <select
                  name="arrival"
                  value={formData.arrival}
                  onChange={handleChange}
                  className={`w-full p-4 border rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-[#9001FE] focus:border-transparent transition-all ${
                    errors.arrival ? 'border-red-400' : 'border-gray-600'
                  }`}
                >
                  <option value="" className="bg-gray-700">🎯 Sélectionnez la ville d'arrivée</option>
                  {FRENCH_CITIES.map(city => (
                    <option key={city} value={city} className="bg-gray-700">{city}
                    </option>
                  ))}
                </select>
                {errors.arrival && <p className="mt-1 text-sm text-red-600">{errors.arrival}</p>}
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-[#9001FE]" />
                  <span>📅 Date de transport *</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full p-4 border rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-[#9001FE] focus:border-transparent transition-all ${
                    errors.date ? 'border-red-400' : 'border-gray-600'
                  }`}
                />
                {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
              </div>
            </div>

            {/* Remarks */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                <MessageSquare className="h-4 w-4 text-[#9001FE]" />
                <span>💬 Remarques ou demandes spéciales</span>
              </label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                rows={4}
                className="w-full p-4 border border-gray-600 bg-gray-700 text-white rounded-xl focus:ring-2 focus:ring-[#9001FE] focus:border-transparent transition-all resize-none"
                placeholder="🚴‍♂️ Précisez le type de vélo, des demandes particulières, etc."
                placeholder="🚴‍♂️ Précisez le type de vélo, des demandes particulières, autre ville de départ, etc."
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#9001FE] to-[#6FFE01] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2 mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>📤 Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>🚀 Envoyer la demande</span>
                  </>
                )}
              </button>
              <p className="mt-4 text-sm text-gray-600">
                ⚡ * Champs obligatoires - Réponse sous 2h en journée 📞
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormComponent;