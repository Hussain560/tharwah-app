import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Gift, DollarSign, TrendingUp, Award, Calendar } from 'lucide-react';
import Modal from '../../components/Modal';

function LoyaltyPointsScreen({ onBack }) {
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState({ open: false, title: '', message: '' });
  const isRtl = i18n.dir() === 'rtl';

  // Mock data for loyalty points
  const currentPoints = 1250;
  const recentActivity = [
    { id: 1, type: 'earned', amount: 50, description: 'Bill payment', date: '2024-09-12', icon: TrendingUp },
    { id: 2, type: 'redeemed', amount: -100, description: 'Coffee voucher', date: '2024-09-10', icon: Gift },
    { id: 3, type: 'earned', amount: 25, description: 'Transfer to friend', date: '2024-09-08', icon: TrendingUp },
    { id: 4, type: 'earned', amount: 75, description: 'Monthly bonus', date: '2024-09-05', icon: Award }
  ];

  const redemptionOptions = [
    { id: 1, name: 'vouchers', nameKey: 'vouchers', icon: Gift, color: 'bg-purple-100 text-purple-600' },
    { id: 2, name: 'cashback', nameKey: 'cashback', icon: DollarSign, color: 'bg-green-100 text-green-600' }
  ];

  const handleRedemption = (option) => {
    setModal({
      open: true,
      title: t('loyaltyPoints'),
      message: `${t('comingSoon')}: ${t(option.nameKey)} ${t('redemption')}`
    });
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
        <h1 className="text-xl font-bold">{t('loyaltyPoints')}</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Current Points Balance */}
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-6 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm mb-1">{t('currentPointsBalance')}</p>
              <h2 className="text-3xl font-bold">{currentPoints.toLocaleString()}</h2>
              <p className="text-emerald-100 text-sm">{t('points')}</p>
            </div>
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Award className="h-8 w-8" />
            </div>
          </div>
        </div>

        {/* Redeem Options */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('redeemOptions')}</h3>
          <div className="grid grid-cols-2 gap-4">
            {redemptionOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => handleRedemption(option)}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-emerald-500 hover:bg-emerald-50 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-lg ${option.color} flex items-center justify-center mb-3 mx-auto`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-medium text-gray-900">{t(option.nameKey)}</h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Points Activity */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('recentPointsActivity')}</h3>
          <div className="space-y-3">
            {recentActivity.map((activity) => {
              const Icon = activity.icon;
              const isEarned = activity.type === 'earned';
              return (
                <div key={activity.id} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isEarned ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className={`${isRtl ? 'mr-3' : 'ml-3'}`}>
                        <p className="font-medium text-gray-900">{t(activity.description) || activity.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className={`h-4 w-4 ${isRtl ? 'ml-1' : 'mr-1'}`} />
                          {activity.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-lg font-semibold ${
                        isEarned ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {isEarned ? '+' : ''}{activity.amount}
                      </span>
                      <p className="text-sm text-gray-500">{t('points')}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoyaltyPointsScreen;