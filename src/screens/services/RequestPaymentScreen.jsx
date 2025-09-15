import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Copy, Share2 } from 'lucide-react';
import Price from '../../components/Price';

function RequestPaymentScreen({ onBack }) {
  const { t, i18n } = useTranslation();
  const [isGenerated, setIsGenerated] = useState(false);
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const isRtl = i18n.dir() === 'rtl';

  const handleGenerate = () => {
    if (amount && parseFloat(amount) > 0) {
      setIsGenerated(true);
    }
  };

  const handleCreateNew = () => {
    setIsGenerated(false);
    setAmount('');
    setNote('');
  };

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${isRtl ? 'ml-3' : 'mr-3'}`}
        >
          <ArrowLeft className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
        </button>
        <h1 className="text-xl font-bold">{t('requestPayment')}</h1>
      </div>

      <div className="flex-1">
        {!isGenerated ? (
          /* Input Form */
          <div className="space-y-6">
            {/* Amount Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('amount')}
              </label>
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

            {/* Note Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('note')} ({t('optional')})
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder={t('addNote')}
                rows={3}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none ${
                  isRtl ? 'text-right' : 'text-left'
                }`}
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={!amount || parseFloat(amount) <= 0}
              className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-emerald-700 transition-colors"
            >
              {t('generateRequest')}
            </button>
          </div>
        ) : (
          /* Result View */
          <div className="text-center space-y-6">
            {/* QR Code Placeholder */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 mx-auto max-w-xs">
              <div className="w-32 h-32 bg-black mx-auto rounded-lg flex items-center justify-center">
                <div className="text-white text-xs font-mono">QR CODE</div>
              </div>
            </div>

            {/* Amount Display */}
            <div>
              <p className="text-sm text-gray-600 mb-1">{t('requestedAmount')}</p>
              <div className="text-3xl font-bold text-gray-900">
                <Price amount={parseFloat(amount)} />
              </div>
            </div>

            {/* Note Display */}
            {note && (
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">{t('note')}</p>
                <p className="text-gray-900">{note}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Copy className={`h-5 w-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
                {t('copyLink')}
              </button>
              
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Share2 className={`h-5 w-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
                {t('share')}
              </button>
              
              <button
                onClick={handleCreateNew}
                className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                {t('createNewRequest')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RequestPaymentScreen;