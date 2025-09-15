import { useTranslation } from 'react-i18next';
import Card from './Card';
import Price from './Price';

function BudgetPreview({ category, spent, total, lockDate }) {
  const { t } = useTranslation();
  const percentage = Math.min(100, Math.round((spent / total) * 100));
  const remaining = total - spent;

  return (
    <Card className="mb-3">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">{t(category)}</h3>
  <span className="text-sm text-neutral-700">
          {remaining} {t('remaining')}
        </span>
      </div>
      
      <div className="w-full bg-neutral-200 rounded-full h-2 mb-2">
        <div 
          className="bg-[#8EB69B] h-2 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between items-center text-xs">
                 <span><Price amount={spent} /> / <Price amount={total} /></span>
  <span className="text-[#8EB69B]">
          {lockDate ? `${t('unlocksOn')} ${lockDate}` : t('locked')}
        </span>
      </div>
    </Card>
  );
}

export default BudgetPreview;
