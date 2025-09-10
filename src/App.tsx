import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import PriceSimulator from './components/PriceSimulator';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import type { SimulatorData } from './types';

function App() {
  const [simulatorData, setSimulatorData] = React.useState<SimulatorData>({
    departure: '',
    arrival: '',
    date: '',
    bikeType: ''
  });

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <HowItWorks />
      <PriceSimulator onDataChange={setSimulatorData} />
      <ContactForm simulatorData={simulatorData} />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;