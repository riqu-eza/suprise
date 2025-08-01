/* eslint-disable react/jsx-key */
"use client";
import { SetStateAction, useState } from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import YogurtSelection from '../components/YogurtSelection';
import YogurtGlass from '../components/YogurtGlass';

export default function Home() {
  const [step, setStep] = useState(0);
  const [selectedYogurt, setSelectedYogurt] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleYogurtSelect = (yogurt: SetStateAction<null>) => {
    setSelectedYogurt(yogurt);
    setStep(2);
  };

 

  const steps = [
    <WelcomeScreen onStart={() => setStep(1)} />,
    <YogurtSelection onSelect={handleYogurtSelect} />,
    <div className="text-center">
      
      <YogurtGlass yogurt={selectedYogurt} toppings={selectedToppings} />
    </div>
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      {steps[step]}
    </div>
  );
}