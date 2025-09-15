import { useTranslation } from 'react-i18next';
import Price from './Price';

function TransactionItem({ icon: Icon, category, date, amount, type }) {
  const { t } = useTranslation();
  
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center">
        <div className="p-2 bg-gray-100 rounded-lg mr-3">
          <Icon size={18} className="text-gray-600" />
        </div>
        <div>
          <p className="font-medium text-gray-900">{t(category)}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      
      <div className="text-right">
        <p className={`font-semibold ${type === 'income' ? 'text-green-600' : 'text-gray-900'}`}>
          {type === 'income' ? '+' : '-'}<Price amount={amount} />
        </p>
      </div>
    </div>
  );
}

export default TransactionItem;
