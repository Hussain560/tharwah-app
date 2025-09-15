import { useState } from 'react';
import Modal from '../../components/Modal';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Camera, Type, QrCode, AlertCircle } from 'lucide-react';
import Price from '../../components/Price';

function ScanToPayScreen({ onBack }) {
  const { t, i18n } = useTranslation();
  const [mode, setMode] = useState('scan'); // 'scan' or 'manual'
  const [manualCode, setManualCode] = useState('');
  const [scannedData, setScannedData] = useState(null);
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const isRtl = i18n.dir() === 'rtl';
  const [modal, setModal] = useState({ open: false, title: '', message: '' });

  const simulateQrScan = () => {
    setIsProcessing(true);
    // Simulate scanning delay
    setTimeout(() => {
      const mockQrData = {
        merchantName: 'Coffee Corner',
        merchantNameAr: 'كافي كورنر',
        merchantId: 'QR123456789',
        suggestedAmount: 25.00,
        currency: 'SAR'
      };
      setScannedData(mockQrData);
      setAmount(mockQrData.suggestedAmount.toString());
      setIsProcessing(false);
    }, 2000);
  };

  const handleManualSubmit = () => {
    if (!manualCode.trim()) return;
    
    setIsProcessing(true);
    setTimeout(() => {
      // Simulate processing manual QR code
      const mockQrData = {
        merchantName: 'Manual Merchant',
        merchantNameAr: 'التاجر اليدوي',
        merchantId: manualCode,
        suggestedAmount: 0,
        currency: 'SAR'
      };
      setScannedData(mockQrData);
      setIsProcessing(false);
    }, 1500);
  };

  const handlePayment = () => {
    if (!amount || parseFloat(amount) <= 0) return;
    setIsProcessing(true);
    setTimeout(() => {
      setModal({
        open: true,
        title: t('scanToPay'),
        message: `${t('paymentOf')} ${amount} SAR ${t('to')} ${scannedData ? (isRtl ? scannedData.merchantNameAr : scannedData.merchantName) : ''}\n${t('paymentSuccess') || 'Payment processed successfully!'}`
      });
      setIsProcessing(false);
    }, 2000);
  };

  const renderScanMode = () => (
    <div className="flex-1 flex flex-col">
      {/* Camera Viewfinder */}
      <div className="flex-1 bg-black rounded-lg overflow-hidden mb-6 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* QR Code overlay frame */}
            <div className="w-64 h-64 border-2 border-white relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-emerald-400"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-emerald-400"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-emerald-400"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-emerald-400"></div>
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <QrCode className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm opacity-75">{t('pointCameraAtQr')}</p>
                </div>
              </div>
            </div>
            
            {/* Scanning animation line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400 animate-pulse"></div>
          </div>
        </div>
        
        {/* Camera placeholder text */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
          {t('cameraViewfinder')}
        </div>
      </div>

      {/* Scan Button */}
      <button
        onClick={simulateQrScan}
        disabled={isProcessing}
        className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-emerald-700 transition-colors mb-4"
      >
        {isProcessing ? t('scanning') : t('tapToScan')}
      </button>

      {/* Manual input option */}
      <button
        onClick={() => setMode('manual')}
        className="w-full border border-emerald-600 text-emerald-600 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors flex items-center justify-center"
      >
        <Type className={`h-5 w-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
        {t('enterCodeManually')}
      </button>
    </div>
  );

  const renderManualMode = () => (
    <div className="flex-1 flex flex-col">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('qrCodeOrId')}
        </label>
        <textarea
          value={manualCode}
          onChange={(e) => setManualCode(e.target.value)}
          placeholder={t('enterQrCodeOrMerchantId')}
          rows={4}
          className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none ${
            isRtl ? 'text-right' : 'text-left'
          }`}
        />
      </div>

      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <div className="flex">
          <AlertCircle className={`h-5 w-5 text-blue-400 flex-shrink-0 ${isRtl ? 'ml-3' : 'mr-3'} mt-0.5`} />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">{t('manualEntryTip')}</p>
            <p>{t('manualEntryDescription')}</p>
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-3">
        <button
          onClick={handleManualSubmit}
          disabled={!manualCode.trim() || isProcessing}
          className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-emerald-700 transition-colors"
        >
          {isProcessing ? t('processing') : t('processCode')}
        </button>

        <button
          onClick={() => setMode('scan')}
          className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
        >
          <Camera className={`h-5 w-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
          {t('backToCamera')}
        </button>
      </div>
    </div>
  );

  const renderPaymentConfirmation = () => (
    <div className="flex-1 flex flex-col">
      {/* Merchant Info */}
      <div className="bg-emerald-50 rounded-lg p-6 mb-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <QrCode className="h-8 w-8 text-emerald-600" />
          </div>
          <h3 className="text-lg font-semibold text-emerald-800 mb-1">
            {isRtl ? scannedData.merchantNameAr : scannedData.merchantName}
          </h3>
          <p className="text-sm text-emerald-600">{t('merchantId')}: {scannedData.merchantId}</p>
        </div>
      </div>

      {/* Payment Amount */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('paymentAmount')}
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
        {scannedData.suggestedAmount > 0 && (
          <p className="text-sm text-gray-600 mt-1">
            {t('suggestedAmount')}: <Price amount={scannedData.suggestedAmount} />
          </p>
        )}
      </div>

      {/* Payment Summary */}
      {amount && parseFloat(amount) > 0 && (
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-gray-900 mb-2">{t('paymentSummary')}</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">{t('merchant')}:</span>
              <span>{isRtl ? scannedData.merchantNameAr : scannedData.merchantName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t('amount')}:</span>
              <span className="font-semibold text-emerald-600">
                <Price amount={parseFloat(amount)} />
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-auto space-y-3">
        <button
          onClick={handlePayment}
          disabled={!amount || parseFloat(amount) <= 0 || isProcessing}
          className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-emerald-700 transition-colors"
        >
          {isProcessing ? t('processing') : t('payNow')}
        </button>

        <button
          onClick={() => {
            setScannedData(null);
            setAmount('');
            setManualCode('');
            setMode('scan');
          }}
          className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          {t('scanAnother')}
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => {
            if (scannedData) {
              setScannedData(null);
              setAmount('');
              setManualCode('');
              setMode('scan');
            } else {
              onBack();
            }
          }}
          className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${isRtl ? 'ml-3' : 'mr-3'}`}
        >
          <ArrowLeft className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
        </button>
        <h1 className="text-xl font-bold">
          {scannedData ? t('confirmPayment') : t('scanToPay')}
        </h1>
      </div>

      {!scannedData && mode === 'scan' && renderScanMode()}
      {!scannedData && mode === 'manual' && renderManualMode()}
      {scannedData && renderPaymentConfirmation()}
      <Modal isOpen={modal.open} onClose={() => {
        setModal({ ...modal, open: false });
        setScannedData(null);
        setAmount('');
        setManualCode('');
        setMode('scan');
      }}>
        <h2 className="text-lg font-bold mb-2">{modal.title}</h2>
        <pre className="whitespace-pre-wrap text-gray-700 mb-4">{modal.message}</pre>
        <button onClick={() => {
          setModal({ ...modal, open: false });
          setScannedData(null);
          setAmount('');
          setManualCode('');
          setMode('scan');
        }} className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold mt-2">{t('close')}</button>
      </Modal>
    </div>
  );
}

export default ScanToPayScreen;