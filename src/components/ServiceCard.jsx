import { useTranslation } from 'react-i18next';

function ServiceCard({ icon: Icon, label, onClick }) {
  const { t } = useTranslation();

  return (
    <div 
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="p-3 bg-[#e6f2ec] rounded-full mb-3">
        <Icon size={24} className="text-[#8EB69B]" />
      </div>
      <span className="text-sm font-medium text-black text-center">
        {t(label)}
      </span>
    </div>
  );
}

export default ServiceCard;
