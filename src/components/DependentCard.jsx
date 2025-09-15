import { useTranslation } from 'react-i18next';
import Price from './Price';

function DependentCard({ name, balance }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 mb-3">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{t('currentBalance')}</p>
        </div>
        <div className={`${isRtl ? 'text-left' : 'text-right'}`}>
          <div className="text-lg font-bold text-gray-900">
            <Price amount={balance} />
          </div>
        </div>
      </div>
      
      <div className="flex gap-2">
        <button className="flex-1 bg-emerald-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors">
          {t('addMoney')}
        </button>
        <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
          {t('setLimits')}
        </button>
      </div>
    </div>
  );
}

export default DependentCard;