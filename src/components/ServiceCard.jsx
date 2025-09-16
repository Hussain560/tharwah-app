import { useTranslation } from 'react-i18next';

function ServiceCard({ icon: Icon, label, onClick, premium }) {
  const { t, i18n } = useTranslation();

  return (
    <div 
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow cursor-pointer relative"
      onClick={onClick}
    >
      {premium && (
        <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded shadow text-white" style={{zIndex:2}}>
          {i18n.language === 'ar' ? 'بريميوم' : 'Premium'}
        </span>
      )}
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
