import { useTranslation } from 'react-i18next';
import { Plus, ArrowUpRight, ArrowDownLeft, FileText } from 'lucide-react';
import Card from '../components/Card';
import BudgetPreview from '../components/BudgetPreview';
import Header from '../components/Header';
import QuickServiceCard from '../components/QuickServiceCard';
import Price from '../components/Price';

function HomeScreen() {
  const { t, i18n } = useTranslation();

  // Mock data for budget previews
  const budgets = [
    { category: 'rent', spent: 2000, total: 3000, lockDate: '28/09' },
    { category: 'groceries', spent: 450, total: 800, lockDate: '25/09' },
    { category: 'transportation', spent: 300, total: 500, lockDate: null },
    { category: 'entertainment', spent: 150, total: 200, lockDate: '20/09' }
  ];

  const quickServices = [
  { icon: Plus, label: 'addExpense', color: 'green' },
    { icon: ArrowUpRight, label: 'transfer', color: 'green' },
    { icon: ArrowDownLeft, label: 'request', color: 'blue' },
    { icon: FileText, label: 'bills', color: 'orange' }
  ];

  return (
    <div className="p-6">
      <Header />
      
  <Card className="bg-[#8EB69B] text-white mb-6">
        <div className="mb-2">
          <h2 className="text-sm font-medium opacity-90">{t('totalBalance')}</h2>
                     <div className="text-3xl font-bold"><Price amount={8540} /></div>
        </div>
        
        <div className="pt-3 border-t border-white/20">
          <h2 className="text-sm font-medium opacity-90">{t('availableBalance')}</h2>
                     <div className="text-xl font-semibold"><Price amount={5640} /></div>
        </div>
      </Card>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">{t('quickServices')}</h2>
        <div
          className={
            `flex overflow-x-auto pb-2 ` +
            (i18n.dir() === 'rtl' ? 'space-x-reverse space-x-4' : 'space-x-4')
          }
        >
          {quickServices.map((service, index) => (
            <QuickServiceCard
              key={index}
              icon={service.icon}
              label={service.label}
              color={service.color}
            />
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-bold mb-4">{t('activeBudgets')}</h2>
        {budgets.map((budget) => (
          <BudgetPreview 
            key={budget.category}
            category={budget.category}
            spent={budget.spent}
            total={budget.total}
            lockDate={budget.lockDate}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
