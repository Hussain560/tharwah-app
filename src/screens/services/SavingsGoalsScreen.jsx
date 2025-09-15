import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Plus, Target, Edit3, TrendingUp } from 'lucide-react';
import Price from '../../components/Price';
import Modal from '../../components/Modal';

function SavingsGoalsScreen({ onBack }) {
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState({ open: false, title: '', message: '' });
  const isRtl = i18n.dir() === 'rtl';

  // Mock data for savings goals
  const savingsGoals = [
    {
      id: 1,
      name: 'Vacation Fund',
      nameKey: 'vacationFund',
      targetAmount: 10000,
      savedAmount: 8000,
      icon: '🏖️',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      name: 'New Car',
      nameKey: 'newCar',
      targetAmount: 50000,
      savedAmount: 15000,
      icon: '🚗',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      name: 'Emergency Fund',
      nameKey: 'emergencyFund',
      targetAmount: 20000,
      savedAmount: 12500,
      icon: '🛡️',
      color: 'from-red-500 to-red-600'
    }
  ];

  const handleCreateNewGoal = () => {
    setModal({
      open: true,
      title: t('savingsGoals'),
      message: `${t('comingSoon')}: ${t('createNewGoal')}`
    });
  };

  const handleAddFunds = (goal) => {
    setModal({
      open: true,
      title: t('addFunds'),
      message: `${t('comingSoon')}: ${t('addFunds')} - ${t(goal.nameKey)}`
    });
  };

  const handleEditGoal = (goal) => {
    setModal({
      open: true,
      title: t('editGoal'),
      message: `${t('comingSoon')}: ${t('editGoal')} - ${t(goal.nameKey)}`
    });
  };

  const calculateProgress = (saved, target) => {
    return Math.min((saved / target) * 100, 100);
  };

  const getTotalSaved = () => {
    return savingsGoals.reduce((sum, goal) => sum + goal.savedAmount, 0);
  };

  const getTotalTarget = () => {
    return savingsGoals.reduce((sum, goal) => sum + goal.targetAmount, 0);
  };

  return (
    <div className="p-6 h-full flex flex-col">
      <Modal isOpen={modal.open} onClose={() => setModal({ ...modal, open: false })}>
        <h2 className="text-lg font-bold mb-2">{modal.title}</h2>
        <p className="text-gray-700 mb-4">{modal.message}</p>
        <button 
          onClick={() => setModal({ ...modal, open: false })} 
          className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold"
        >
          {t('close')}
        </button>
      </Modal>

      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${isRtl ? 'ml-3' : 'mr-3'}`}
        >
          <ArrowLeft className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
        </button>
        <h1 className="text-xl font-bold">{t('savingsGoals')}</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Overview Card */}
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-6 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm mb-1">{t('totalSaved')}</p>
              <h2 className="text-2xl font-bold">
                <Price amount={getTotalSaved()} />
              </h2>
              <p className="text-emerald-100 text-sm">
                {t('of')} <Price amount={getTotalTarget()} />
              </p>
            </div>
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Target className="h-8 w-8" />
            </div>
          </div>
        </div>

        {/* Create New Goal Button */}
        <button
          onClick={handleCreateNewGoal}
          className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold mb-6 flex items-center justify-center hover:bg-emerald-700 transition-colors"
        >
          <Plus className={`h-5 w-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
          {t('createNewGoal')}
        </button>

        {/* Savings Goals */}
        <div className="space-y-4 mb-6">
          {savingsGoals.map((goal) => {
            const progress = calculateProgress(goal.savedAmount, goal.targetAmount);
            const remaining = goal.targetAmount - goal.savedAmount;
            
            return (
              <div key={goal.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                {/* Goal Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{goal.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{t(goal.nameKey)}</h3>
                      <p className="text-sm text-gray-500">{t('savingsGoal')}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleEditGoal(goal)}
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{progress.toFixed(1)}% {t('completed')}</span>
                    <span>
                      <Price amount={goal.savedAmount} /> / <Price amount={goal.targetAmount} />
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`bg-gradient-to-r ${goal.color} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Goal Stats */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm">
                    <p className="text-gray-600">{t('remaining')}</p>
                    <p className="font-semibold text-gray-900">
                      <Price amount={Math.max(remaining, 0)} />
                    </p>
                  </div>
                  <div className="text-sm text-right">
                    <p className="text-gray-600">{t('progress')}</p>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="font-semibold">{progress.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleAddFunds(goal)}
                    className="flex-1 bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                  >
                    {t('addFunds')}
                  </button>
                  <button
                    onClick={() => handleEditGoal(goal)}
                    className="px-6 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    {t('edit')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {savingsGoals.length === 0 && (
          <div className="text-center py-8">
            <Target className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500 mb-1">{t('noSavingsGoals')}</p>
            <p className="text-sm text-gray-400">{t('createFirstGoal')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SavingsGoalsScreen;