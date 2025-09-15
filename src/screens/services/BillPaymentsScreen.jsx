import { useState } from 'react';
import Modal from '../../components/Modal';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Search, Zap, Droplets, Wifi, Phone, Building2, Car } from 'lucide-react';
import Price from '../../components/Price';

function BillPaymentsScreen({ onBack }) {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBiller, setSelectedBiller] = useState(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [step, setStep] = useState('select'); // 'select', 'payment', 'confirm'
  const isRtl = i18n.dir() === 'rtl';
  const [modal, setModal] = useState({ open: false, title: '', message: '' });

  const popularBillers = [
    { id: 1, name: 'Saudi Electricity Company (SEC)', nameAr: 'شركة الكهرباء السعودية', icon: Zap, category: 'utilities' },
    { id: 2, name: 'National Water Company', nameAr: 'شركة المياه الوطنية', icon: Droplets, category: 'utilities' },
    { id: 3, name: 'STC', nameAr: 'الاتصالات السعودية', icon: Phone, category: 'telecom' },
    { id: 4, name: 'Mobily', nameAr: 'موبايلي', icon: Phone, category: 'telecom' },
    { id: 5, name: 'Zain', nameAr: 'زين', icon: Phone, category: 'telecom' },
    { id: 6, name: 'stc Internet', nameAr: 'الإنترنت stc', icon: Wifi, category: 'internet' },
    { id: 7, name: 'Government Services', nameAr: 'الخدمات الحكومية', icon: Building2, category: 'government' },
    { id: 8, name: 'Salik (Dubai Toll)', nameAr: 'ساليك (رسوم دبي)', icon: Car, category: 'transport' }
  ];

  const filteredBillers = popularBillers.filter(biller =>
    biller.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    biller.nameAr.includes(searchQuery)
  );

  const handleBillerSelect = (biller) => {
    setSelectedBiller(biller);
    setStep('payment');
  };

  const handlePayment = () => {
    if (!accountNumber || !amount) return;
    setStep('confirm');
  };

  const handleConfirmPayment = () => {
    setModal({
      open: true,
      title: t('billPayments'),
      message: `${t('paymentOf')} ${amount} SAR ${t('to')} ${selectedBiller ? (isRtl ? selectedBiller.nameAr : selectedBiller.name) : ''}\n${t('accountNumber')}: ${accountNumber}\n${t('paymentSuccess') || 'Payment processed successfully!'}`
    });
    // Reset form after modal closes
  };

  const renderBillerSelection = () => (
    <div className="flex-1 overflow-y-auto">
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className={`absolute top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 ${
            isRtl ? 'right-3' : 'left-3'
          }`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('searchBillers')}
            className={`w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
              isRtl ? 'pr-10 text-right' : 'pl-10 text-left'
            }`}
          />
        </div>
      </div>

      {/* Popular Billers */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('popularBillers')}</h3>
        <div className="grid grid-cols-1 gap-3">
          {filteredBillers.map((biller) => {
            const Icon = biller.icon;
            return (
              <button
                key={biller.id}
                onClick={() => handleBillerSelect(biller)}
                className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-colors text-left"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>
                <div className={`flex-1 ${isRtl ? 'mr-4' : 'ml-4'}`}>
                  <h4 className="font-semibold text-gray-900">
                    {isRtl ? biller.nameAr : biller.name}
                  </h4>
                  <p className="text-sm text-gray-500 capitalize">{t(biller.category)}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderPaymentForm = () => (
    <div className="flex-1 overflow-y-auto">
      {/* Biller Info */}
      <div className="bg-emerald-50 rounded-lg p-4 mb-6">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
            <selectedBiller.icon className="h-6 w-6 text-emerald-600" />
          </div>
          <div className={`flex-1 ${isRtl ? 'mr-4' : 'ml-4'}`}>
            <h3 className="font-semibold text-emerald-800">
              {isRtl ? selectedBiller.nameAr : selectedBiller.name}
            </h3>
            <p className="text-sm text-emerald-600 capitalize">{t(selectedBiller.category)}</p>
          </div>
        </div>
      </div>

      {/* Payment Form */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('accountNumber')}
          </label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder={t('enterAccountNumber')}
            className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
              isRtl ? 'text-right' : 'text-left'
            }`}
          />
        </div>

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
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="flex-1 overflow-y-auto">
      {/* Payment Summary */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('paymentSummary')}</h3>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">{t('biller')}:</span>
            <span className="font-semibold">
              {isRtl ? selectedBiller.nameAr : selectedBiller.name}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">{t('accountNumber')}:</span>
            <span className="font-semibold">{accountNumber}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">{t('amount')}:</span>
            <span className="font-semibold text-emerald-600">
              <Price amount={parseFloat(amount)} />
            </span>
          </div>
          
          <hr className="border-gray-200" />
          
          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold">{t('totalToPay')}:</span>
            <span className="font-bold text-emerald-600">
              <Price amount={parseFloat(amount)} />
            </span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-800">
          {t('paymentConfirmationNote')}
        </p>
      </div>
    </div>
  );

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => {
            if (step === 'select') {
              onBack();
            } else if (step === 'payment') {
              setStep('select');
              setSelectedBiller(null);
            } else if (step === 'confirm') {
              setStep('payment');
            }
          }}
          className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${isRtl ? 'ml-3' : 'mr-3'}`}
        >
          <ArrowLeft className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
        </button>
        <h1 className="text-xl font-bold">
          {step === 'select' ? t('billPayments') : 
           step === 'payment' ? t('paymentDetails') : 
           t('confirmPayment')}
        </h1>
      </div>

      {step === 'select' && renderBillerSelection()}
      {step === 'payment' && renderPaymentForm()}
      {step === 'confirm' && renderConfirmation()}

      {/* Action Button */}
      {step === 'payment' && (
        <button
          onClick={handlePayment}
          disabled={!accountNumber || !amount || parseFloat(amount) <= 0}
          className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-emerald-700 transition-colors"
        >
          {t('proceedToPayment')}
        </button>
      )}

      {step === 'confirm' && (
        <button
          onClick={handleConfirmPayment}
          className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
        >
          {t('confirmAndPay')}
        </button>
      )}
      <Modal isOpen={modal.open} onClose={() => {
        setModal({ ...modal, open: false });
        setSelectedBiller(null);
        setAccountNumber('');
        setAmount('');
        setStep('select');
      }}>
        <h2 className="text-lg font-bold mb-2">{modal.title}</h2>
        <pre className="whitespace-pre-wrap text-gray-700 mb-4">{modal.message}</pre>
        <button onClick={() => {
          setModal({ ...modal, open: false });
          setSelectedBiller(null);
          setAccountNumber('');
          setAmount('');
          setStep('select');
        }} className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold mt-2">{t('close')}</button>
      </Modal>
    </div>
  );
}

export default BillPaymentsScreen;