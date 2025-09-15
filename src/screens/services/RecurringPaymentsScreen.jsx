import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Plus, Calendar, User, Building2, DollarSign } from 'lucide-react';
import Price from '../../components/Price';
import Modal from '../../components/Modal';

function RecurringPaymentsScreen({ onBack }) {
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState({ open: false, title: '', message: '' });
  const isRtl = i18n.dir() === 'rtl';

  // Mock data for recurring payments
  const activePayments = [
    {
      id: 1,
      recipient: 'Netflix',
      recipientAr: 'نتفليكس',
      amount: 55.99,
      frequency: 'monthly',
      nextPayment: '2024-09-15',
      icon: Building2,
      status: 'active'
    },
    {
      id: 2,
      recipient: 'Mom',
      recipientAr: 'أمي',
      amount: 500,
      frequency: 'monthly', 
      nextPayment: '2024-09-20',
      icon: User,
      status: 'active'
    },
    {
      id: 3,
      recipient: 'Spotify',
      recipientAr: 'سبوتيفاي',
      amount: 19.99,
      frequency: 'monthly',
      nextPayment: '2024-09-25',
      icon: Building2,
      status: 'active'
    }
  ];

  const handleAddNewPayment = () => {
    setModal({
      open: true,
      title: t('recurringPayments'),
      message: `${t('comingSoon')}: ${t('addNewRecurringPayment')}`
    });
  };

  const handleEditPayment = (payment) => {
    setModal({
      open: true,
      title: t('editPayment'),
      message: `${t('comingSoon')}: ${t('editPayment')} - ${isRtl ? payment.recipientAr : payment.recipient}`
    });
  };

  const getNextPaymentDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US');
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
        <h1 className="text-xl font-bold">{t('recurringPayments')}</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Add New Payment Button */}
        <button
          onClick={handleAddNewPayment}
          className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold mb-6 flex items-center justify-center hover:bg-emerald-700 transition-colors"
        >
          <Plus className={`h-5 w-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
          {t('addNewRecurringPayment')}
        </button>

        {/* Active Recurring Payments */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('activeRecurringPayments')}</h3>
          
          {activePayments.length === 0 ? (
            <div className="text-center py-8">
              <DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">{t('noRecurringPayments')}</p>
              <p className="text-sm text-gray-400">{t('addFirstRecurringPayment')}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {activePayments.map((payment) => {
                const Icon = payment.icon;
                return (
                  <div key={payment.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center flex-1">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className={`flex-1 ${isRtl ? 'mr-3' : 'ml-3'}`}>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {isRtl ? payment.recipientAr : payment.recipient}
                              </h4>
                              <p className="text-sm text-gray-500">{t('recipient')}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-emerald-600">
                                <Price amount={payment.amount} />
                              </p>
                              <p className="text-sm text-gray-500">{t(payment.frequency)}</p>
                            </div>
                          </div>
                          
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center text-gray-600">
                                <Calendar className={`h-4 w-4 ${isRtl ? 'ml-1' : 'mr-1'}`} />
                                <span>{t('nextPayment')}</span>
                              </div>
                              <span className="font-medium text-gray-900">
                                {getNextPaymentDate(payment.nextPayment)}
                              </span>
                            </div>
                            
                            <div className="flex justify-end mt-2">
                              <button
                                onClick={() => handleEditPayment(payment)}
                                className="text-emerald-600 text-sm font-medium hover:text-emerald-700"
                              >
                                {t('edit')}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Summary */}
        {activePayments.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">{t('summary')}</h4>
            <div className="text-sm text-gray-600">
              <div className="flex justify-between">
                <span>{t('totalMonthlyPayments')}:</span>
                <span className="font-semibold">
                  <Price amount={activePayments.reduce((sum, payment) => 
                    payment.frequency === 'monthly' ? sum + payment.amount : sum, 0
                  )} />
                </span>
              </div>
              <div className="flex justify-between mt-1">
                <span>{t('activePayments')}:</span>
                <span className="font-semibold">{activePayments.length}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecurringPaymentsScreen;