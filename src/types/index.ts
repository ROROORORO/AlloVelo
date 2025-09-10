export interface BikeType {
  id: string;
  name: string;
  description: string;
  basePrice: number;
}

export interface Event {
  id: string;
  name: string;
  location: string;
  date: string;
  distance?: number;
}

export interface PriceSimulation {
  departure: string;
  event: string;
  bikeType: string;
  estimatedPrice: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  departure: string;
  arrival: string;
  date: string;
  remarks: string;
}

export interface SimulatorData {
  departure: string;
  arrival: string;
  date: string;
  bikeType: string;
}