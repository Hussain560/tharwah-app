import { useTranslation } from 'react-i18next';

function WizardStep({ icon: Icon, title, description }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      <div className="p-6 bg-[#e6f2ec] rounded-full mb-6">
        <Icon size={48} className="text-[#8EB69B]" />
      </div>
      <h2 className="text-2xl font-bold text-black mb-4">
        {t(title)}
      </h2>
      <p className="text-neutral-700 text-lg leading-relaxed max-w-md">
        {t(description)}
      </p>
    </div>
  );
}

export default WizardStep;
