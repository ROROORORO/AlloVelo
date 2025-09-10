import { BIKE_TYPES } from './constants';

export const calculateDistance = (departure: string, arrival: string): number => {
  // Simulation simplifiée de calcul de distance
  const distances: { [key: string]: { [key: string]: number } } = {
    'Paris': { 'Lyon': 460, 'Marseille': 775, 'Toulouse': 680, 'Nice': 930, 'Bordeaux': 580, 'Lille': 225, 'Nantes': 380 },
    'Lyon': { 'Paris': 460, 'Marseille': 315, 'Toulouse': 540, 'Nice': 470, 'Bordeaux': 550, 'Lille': 690, 'Nantes': 610 },
    'Marseille': { 'Paris': 775, 'Lyon': 315, 'Toulouse': 405, 'Nice': 200, 'Bordeaux': 650, 'Lille': 1000, 'Nantes': 900 },
    'Toulouse': { 'Paris': 680, 'Lyon': 540, 'Marseille': 405, 'Nice': 550, 'Bordeaux': 245, 'Lille': 900, 'Nantes': 580 },
    'Nice': { 'Paris': 930, 'Lyon': 470, 'Marseille': 200, 'Toulouse': 550, 'Bordeaux': 750, 'Lille': 1150, 'Nantes': 1050 },
    'Bordeaux': { 'Paris': 580, 'Lyon': 550, 'Marseille': 650, 'Toulouse': 245, 'Nice': 750, 'Lille': 800, 'Nantes': 330 },
    'Lille': { 'Paris': 225, 'Lyon': 690, 'Marseille': 1000, 'Toulouse': 900, 'Nice': 1150, 'Bordeaux': 800, 'Nantes': 600 },
    'Nantes': { 'Paris': 380, 'Lyon': 610, 'Marseille': 900, 'Toulouse': 580, 'Nice': 1050, 'Bordeaux': 330, 'Lille': 600 }
  };

  const defaultDistance = 400;
  return distances[departure]?.[arrival] || defaultDistance;
};

export const calculatePrice = (departure: string, arrival: string, bikeTypeId: string): number => {
  const bikeType = BIKE_TYPES.find(b => b.id === bikeTypeId);
  
  if (!bikeType) return 0;

  // Nettoyer le nom de la ville de départ (enlever "(pour l'instant)")
  const cleanDeparture = departure.replace(' (pour l\'instant)', '');
  
  const distance = calculateDistance(cleanDeparture, arrival);
  const basePrice = bikeType.basePrice;
  
  // Calcul du prix basé sur la distance (€0.15 par km)
  const distancePrice = distance * 0.15;
  
  // Prix total
  const totalPrice = basePrice + distancePrice;
  
  return Math.round(totalPrice);
};