import { useTranslation } from 'react-i18next';

function QuickServiceCard({ icon: Icon, label, color = 'green' }) {
  const { t } = useTranslation();

  const colorClasses = {
    green: 'bg-[#e6f2ec] text-[#8EB69B]',
    blue: 'bg-blue-100 text-blue-700',
    orange: 'bg-orange-100 text-orange-700'
  };

  return (
    <div className={`${colorClasses[color] || colorClasses.green} rounded-lg p-4 min-w-[120px] flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity`}>
      <Icon size={20} className="mb-2" />
      <span className="text-xs font-medium text-center">{t(label)}</span>
    </div>
  );
}

export default QuickServiceCard;
