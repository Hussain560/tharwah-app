import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Lock, PieChart, Sparkles } from 'lucide-react';
import WizardStep from '../components/WizardStep';

function OnboardingScreen({ onComplete }) {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);

  const steps = [
    {
      icon: Lock,
      title: 'controlSpendingTitle',
      description: 'controlSpendingDesc'
    },
    {
      icon: PieChart,
      title: 'analyzeHabitsTitle',
      description: 'analyzeHabitsDesc'
    },
    {
      icon: Sparkles,
      title: 'smartAdviceTitle',
      description: 'smartAdviceDesc'
    }
  ];

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="bg-white w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Tharwah Logo" 
            className="w-16 h-16 mb-2"
          />
        </div>
        <button 
          onClick={onComplete}
          className="text-neutral-700 hover:text-black transition-colors"
        >
          {t('skip')}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <WizardStep
          icon={steps[step - 1].icon}
          title={steps[step - 1].title}
          description={steps[step - 1].description}
        />
      </div>

      {/* Footer */}
      <div className="p-6">
        {/* Progress Indicator */}
        <div className="flex justify-center space-x-2 mb-6">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index + 1 === step ? 'bg-[#8EB69B]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-full bg-[#8EB69B] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#709d7e] transition-colors"
        >
          {step === steps.length ? t('finish') : t('next')}
        </button>
      </div>
    </div>
  );
}

export default OnboardingScreen;
