import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CreditCard, Eye, EyeOff, Smartphone, ToggleLeft, ToggleRight } from 'lucide-react';
import Modal from '../../components/Modal';

function MyCardsScreen({ onBack }) {
  const { t, i18n } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);
  const [onlinePaymentsEnabled, setOnlinePaymentsEnabled] = useState(true);
  const [modal, setModal] = useState({ open: false, title: '', message: '' });
  const isRtl = i18n.dir() === 'rtl';

  // Mock card data
  const cardData = {
    cardholderName: 'Ahmed Al-Rashid',
    cardholderNameAr: 'أحمد الراشد',
    partialNumber: '**** **** **** 1234',
    fullNumber: '4532 1234 5678 1234',
    expiryDate: '12/28',
    cvv: '456',
    cardType: 'Debit Card',
    cardTypeAr: 'بطاقة مدين',
    bank: 'Tharwah',
    bankAr: 'ثروة'
  };

  const handleAddToAppleWallet = () => {
    setModal({
      open: true,
      title: t('addToAppleWallet'),
      message: t('appleWalletSuccess')
    });
  };

  const toggleOnlinePayments = () => {
    setOnlinePaymentsEnabled(!onlinePaymentsEnabled);
    setModal({
      open: true,
      title: t('onlinePayments'),
      message: onlinePaymentsEnabled 
        ? t('onlinePaymentsDisabled')
        : t('onlinePaymentsEnabled')
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
        <h1 className="text-xl font-bold">{t('myCards')}</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Card Display */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden">
            {/* Card background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
            </div>
            
            {/* Card content */}
            <div className="relative z-10">
              {/* Bank name and card type */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-emerald-100 text-sm font-medium">
                    {isRtl ? cardData.bankAr : cardData.bank}
                  </p>
                  <p className="text-emerald-200 text-xs">
                    {isRtl ? cardData.cardTypeAr : cardData.cardType}
                  </p>
                </div>
                <CreditCard className="h-8 w-8 text-emerald-100" />
              </div>

              {/* Card number */}
              <div className="mb-6">
                <p className="text-2xl font-mono tracking-wider" style={{ direction: 'ltr', unicodeBidi: 'plaintext' }}>
                  {showDetails ? cardData.fullNumber : cardData.partialNumber}
                </p>
              </div>

              {/* Card details */}
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-emerald-100 text-xs mb-1">{t('cardHolder')}</p>
                  <p className="text-lg font-semibold">
                    {isRtl ? cardData.cardholderNameAr : cardData.cardholderName}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-emerald-100 text-xs mb-1">{t('expires')}</p>
                  <p className="text-lg font-semibold">{cardData.expiryDate}</p>
                  {showDetails && (
                    <div className="mt-2">
                      <p className="text-emerald-100 text-xs">{t('cvv')}</p>
                      <p className="text-sm font-mono">{cardData.cvv}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-6">
          {/* Show/Hide Details Button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            {showDetails ? (
              <EyeOff className={`h-5 w-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
            ) : (
              <Eye className={`h-5 w-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
            )}
            {showDetails ? t('hideDetails') : t('showDetails')}
          </button>

          {/* Add to Apple Wallet Button */}
          <button
            onClick={handleAddToAppleWallet}
            className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
          >
            <Smartphone className={`h-5 w-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
            {t('addToAppleWallet')}
          </button>
        </div>

        {/* Online Payments Section */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{t('onlinePayments')}</h3>
              <p className="text-sm text-gray-600">{t('onlinePaymentsDesc')}</p>
            </div>
            <button
              onClick={toggleOnlinePayments}
              className={`p-1 rounded-full transition-colors ${
                onlinePaymentsEnabled ? 'text-emerald-600' : 'text-gray-400'
              }`}
            >
              {onlinePaymentsEnabled ? (
                <ToggleRight className="h-8 w-8" />
              ) : (
                <ToggleLeft className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {/* Card Security Info */}
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">{t('cardSecurity')}</h4>
          <ul className="space-y-1 text-sm text-blue-800">
            <li>• {t('securityTip1')}</li>
            <li>• {t('securityTip2')}</li>
            <li>• {t('securityTip3')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyCardsScreen;