import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Home, ShoppingCart, Car, Coffee, Gamepad2, Heart, TrendingUp, Sparkles } from 'lucide-react';
import Card from '../components/Card';
import BudgetCard from '../components/BudgetCard';
import TransactionItem from '../components/TransactionItem';
import Modal from '../components/Modal';
import HealthScore from '../components/HealthScore';
import Price from '../components/Price';

function AnalysisScreen({ isUpgraded = false, onSwitchTab }) {
  const { t, i18n } = useTranslation();
  const [selectedMonth, setSelectedMonth] = useState('september');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDiscussWithAi = () => {
    setIsModalOpen(false);
    if (onSwitchTab) {
      onSwitchTab('advisor');
    }
  };

  const months = [
    { key: 'july', label: t('july') },
    { key: 'august', label: t('august') },
    { key: 'september', label: t('september') },
    { key: 'october', label: t('october') }
  ];

  // Mock budget data
  const budgets = [
    { icon: Home, category: 'rent', spent: 2800, total: 3000, status: t('unlocksOn') + ' 28/09' },
    { icon: ShoppingCart, category: 'groceries', spent: 650, total: 800, status: t('unlocksOn') + ' 25/09' },
    { icon: Car, category: 'transportation', spent: 500, total: 500, status: t('locked') },
    { icon: Coffee, category: 'dining', spent: 280, total: 400, status: t('unlocksOn') + ' 22/09' },
    { icon: Gamepad2, category: 'entertainment', spent: 190, total: 200, status: t('locked') },
    { icon: Heart, category: 'healthcare', spent: 150, total: 300, status: t('unlocksOn') + ' 20/09' }
  ];

  // Mock recent transactions
  const recentTransactions = [
    { icon: Coffee, category: 'dining', date: '2:30 PM', amount: 45, type: 'expense' },
    { icon: ShoppingCart, category: 'groceries', date: '10:15 AM', amount: 120, type: 'expense' },
    { icon: Car, category: 'transportation', date: '6:45 PM', amount: 25, type: 'expense' }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{t('analysis')}</h1>
        <button className="bg-[#8EB69B] text-white rounded-lg px-4 py-2 flex items-center">
          <Plus size={16} className="mr-1" />
          {t('createNew')}
        </button>
      </div>

      {/* Month Filter */}
      <div className="mb-6">
        <div className="flex overflow-x-auto space-x-3 pb-2">
          {months.map((month) => (
            <button
              key={month.key}
              onClick={() => setSelectedMonth(month.key)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                selectedMonth === month.key
                  ? 'bg-[#8EB69B] text-white'
                  : 'bg-gray-100 text-black hover:bg-[#709d7e]'
              }`}
            >
              {month.label}
            </button>
          ))}
        </div>
      </div>

      {/* Financial Health Score - Premium Feature */}
      {isUpgraded && <HealthScore score={78} />}

      {/* Total Spending Card */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-400 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-600">{t('totalSpending')}</h3>
            <div className="text-2xl font-bold text-gray-900"><Price amount={4570} /></div>
            <p className="text-sm text-orange-600 flex items-center mt-1">
              <TrendingUp size={14} className="mr-1" />
              {t('higherThanAverage')}
            </p>
          </div>
          <div className="text-orange-500">
            <TrendingUp size={32} />
          </div>
        </div>
        
        {/* AI Analysis Button - Premium Feature */}
        {isUpgraded && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-4 py-2 flex items-center justify-center transition-colors"
          >
            <Sparkles size={16} className="mr-2" />
            {t('getAiAnalysis')}
          </button>
        )}
      </Card>

      {/* Smart Lock Budgets */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">{t('smartLockBudgets')}</h2>
        {budgets.map((budget, index) => (
          <BudgetCard
            key={index}
            icon={budget.icon}
            category={budget.category}
            spent={budget.spent}
            total={budget.total}
            status={budget.status}
          />
        ))}
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">{t('recentTransactions')}</h2>
        <Card>
          {recentTransactions.map((transaction, index) => (
            <TransactionItem
              key={index}
              icon={transaction.icon}
              category={transaction.category}
              date={transaction.date}
              amount={transaction.amount}
              type={transaction.type}
            />
          ))}
        </Card>
      </div>

      {/* AI Analysis Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={`${i18n.dir() === 'rtl' ? 'text-right' : 'text-left'}`}>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-emerald-600 mr-2" />
            <h2 className="text-xl font-bold">{t('aiSpendingAnalysis')}</h2>
          </div>
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            {t('aiAnalysisTitle', { month: t('september') })}
          </h3>
          <div className={`bg-gray-50 rounded-lg p-4 mb-6`}>
            <p className="text-gray-800">{t('aiAnalysisText')}</p>
          </div>
          <div className="flex justify-between space-x-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              {t('close', 'Close')}
            </button>
            <div className="flex space-x-2">
              <button
                onClick={handleDiscussWithAi}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Sparkles className="h-4 w-4 mr-1" />
                {t('discussWithAi')}
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                {t('getTips')}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AnalysisScreen;
