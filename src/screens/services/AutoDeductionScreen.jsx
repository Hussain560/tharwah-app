import { useState } from 'react';
import Modal from '../../components/Modal';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import Price from '../../components/Price';

function AutoDeductionScreen({ onBack }) {
  const { t, i18n } = useTranslation();
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const isRtl = i18n.dir() === 'rtl';
  const [modal, setModal] = useState({ open: false, title: '', message: '' });

  const handleActivate = () => {
    setModal({
      open: true,
      title: t('recurringDeduction'),
      message: `${t('planActivated') || 'Plan activated'}: ${amount} SAR ${t(frequency)}`
    });
  };

  return (
    <div className="p-6 h-full flex flex-col">
      <Modal isOpen={modal.open} onClose={() => { setModal({ ...modal, open: false }); onBack(); }}>
        <h2 className="text-lg font-bold mb-2">{modal.title}</h2>
        <pre className="whitespace-pre-wrap text-gray-700 mb-4">{modal.message}</pre>
        <button onClick={() => { setModal({ ...modal, open: false }); onBack(); }} className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold mt-2">{t('close')}</button>
      </Modal>
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${isRtl ? 'ml-3' : 'mr-3'}`}
        >
          <ArrowLeft className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
        </button>
        <h1 className="text-xl font-bold">{t('recurringDeduction')}</h1>
      </div>

      {/* Form */}
      <div className="flex-1 space-y-6">
        {/* Amount Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('amount')}
          </label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg ${
                isRtl ? 'text-right' : 'text-left'
              }`}
            />
          </div>
        </div>

        {/* Frequency Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t('frequency')}
          </label>
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setFrequency('weekly')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                frequency === 'weekly'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('weekly')}
            </button>
            <button
              onClick={() => setFrequency('monthly')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                frequency === 'monthly'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('monthly')}
            </button>
          </div>
        </div>

        {/* Summary */}
        {amount && (
          <div className="bg-emerald-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-emerald-800 mb-2">
              {t('summary')}
            </h3>
            <p className="text-sm text-emerald-700">
              {t('autoDeductionSummary', {
                amount: amount,
                frequency: t(frequency),
                interpolation: { escapeValue: false }
              })}
            </p>
          </div>
        )}
      </div>

      {/* Action Button */}
      <button
        onClick={handleActivate}
        disabled={!amount || parseFloat(amount) <= 0}
        className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-emerald-700 transition-colors"
      >
        {t('activatePlan')}
      </button>
    </div>
  );
}

export default AutoDeductionScreen;