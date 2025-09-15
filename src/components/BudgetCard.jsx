import { useTranslation } from 'react-i18next';
import Card from './Card';
import Price from './Price';

function BudgetCard({ icon: Icon, category, spent, total, status }) {
  const { t } = useTranslation();
  const percentage = Math.min(100, Math.round((spent / total) * 100));
  const isOverBudget = spent >= total;
  
  // Determine status color
  const getStatusColor = (status) => {
    if (status.includes('Locked') || status.includes('مقفل')) return 'text-red-600';
    if (status.includes('Unlocks') || status.includes('يفتح')) return 'text-green-600';
    return 'text-gray-600';
  };

  return (
    <Card className="mb-4">
      <div className="flex items-center mb-3">
        <div className="p-2 bg-purple-100 rounded-lg mr-3">
          <Icon size={20} className="text-purple-600" />
        </div>
        <h3 className="font-semibold text-lg">{t(category)}</h3>
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">{t('progress')}</span>
          <span className="font-medium">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${isOverBudget ? 'bg-orange-500' : 'bg-green-500'}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-gray-700 font-medium">
              <Price amount={spent} /> / <Price amount={total} />
        </span>
        <span className={`text-sm font-medium ${getStatusColor(status)}`}>
          {status}
        </span>
      </div>
    </Card>
  );
}

export default BudgetCard;
