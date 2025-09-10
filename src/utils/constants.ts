import { BikeType, Event } from '../types';

export const BIKE_TYPES: BikeType[] = [
  {
    id: 'route',
    name: 'Vélo de route',
    description: 'Vélo léger pour la route et la compétition',
    basePrice: 45
  },
  {
    id: 'vtt',
    name: 'VTT',
    description: 'Vélo tout-terrain pour les sentiers',
    basePrice: 50
  },
  {
    id: 'gravel',
    name: 'Gravel',
    description: 'Vélo polyvalent route et chemin',
    basePrice: 55
  },
  {
    id: 'electrique',
    name: 'Vélo électrique',
    description: 'Vélo à assistance électrique',
    basePrice: 75
  }
];

export const EVENTS: Event[] = [
  {
    id: 'tour-france-etape',
    name: "L'Étape du Tour",
    location: 'Alpes',
    date: '2024-07-15',
    distance: 150
  },
  {
    id: 'paris-roubaix',
    name: 'Paris-Roubaix Challenge',
    location: 'Nord',
    date: '2024-04-14',
    distance: 250
  },
  {
    id: 'bordeaux-paris',
    name: 'Bordeaux-Paris',
    location: 'Bordeaux',
    date: '2024-05-20',
    distance: 600
  },
  {
    id: 'mont-ventoux',
    name: 'Défi Mont Ventoux',
    location: 'Provence',
    date: '2024-06-10',
    distance: 120
  },
  {
    id: 'alpe-dhuez',
    name: 'Montée de l\'Alpe d\'Huez',
    location: 'Isère',
    date: '2024-08-05',
    distance: 80
  }
];

export const FRENCH_CITIES = [
  'Aix-en-Provence', 'Amiens', 'Angers', 'Annecy', 'Argenteuil', 'Avignon',
  'Bordeaux', 'Boulogne-Billancourt', 'Brest', 'Caen', 'Clermont-Ferrand',
  'Dijon', 'Grenoble', 'Le Havre', 'Lille', 'Limoges', 'Lyon', 'Marseille',
  'Montpellier', 'Mulhouse', 'Nancy', 'Nantes', 'Nanterre', 'Nice', 'Nîmes',
  'Orléans', 'Paris', 'Perpignan', 'Reims', 'Rennes', 'Rouen', 'Roubaix',
  'Saint-Étienne', 'Saint-Paul', 'Strasbourg', 'Toulon', 'Toulouse', 'Tourcoing', 'Tours'
];

export const DEPARTURE_CITIES = [
  'Lyon (demande spécifique par formulaire de contact)'
];