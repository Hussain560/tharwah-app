import { useState } from 'react';
import Modal from '../../components/Modal';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';
import Price from '../../components/Price';

function SplitBillScreen({ onBack }) {
  const { t, i18n } = useTranslation();
  const [billAmount, setBillAmount] = useState('');
  const [splitType, setSplitType] = useState('even'); // 'even' or 'uneven'
  const [participants, setParticipants] = useState([
    { id: 1, name: 'Ahmed', amount: 0 },
    { id: 2, name: 'Sara', amount: 0 },
    { id: 3, name: 'Omar', amount: 0 }
  ]);
  const isRtl = i18n.dir() === 'rtl';
  const [modal, setModal] = useState({ open: false, title: '', message: '' });

  const addParticipant = () => {
    const newParticipant = {
      id: Date.now(),
      name: `Person ${participants.length + 1}`,
      amount: 0
    };
    setParticipants([...participants, newParticipant]);
  };

  const removeParticipant = (id) => {
    if (participants.length > 1) {
      setParticipants(participants.filter(p => p.id !== id));
    }
  };

  const updateParticipantAmount = (id, amount) => {
    setParticipants(participants.map(p => 
      p.id === id ? { ...p, amount: parseFloat(amount) || 0 } : p
    ));
  };

  const calculateEvenSplit = () => {
    const amount = parseFloat(billAmount) || 0;
    return amount / participants.length;
  };

  const getTotalUnevenAmount = () => {
    return participants.reduce((sum, p) => sum + p.amount, 0);
  };

  const handleCalculateAndShare = () => {
    const total = parseFloat(billAmount) || 0;
    if (splitType === 'even') {
      const perPerson = calculateEvenSplit();
      setModal({
        open: true,
        title: t('splitBill'),
        message: `${t('totalBill')}: ${billAmount} SAR\n${t('participants')}: ${participants.length}\n${t('splitEvenly')}: ${perPerson.toFixed(2)} SAR ${t('perPerson') || 'per person'}`
      });
    } else {
      const totalAssigned = getTotalUnevenAmount();
      if (Math.abs(totalAssigned - total) > 0.01) {
        setModal({
          open: true,
          title: t('error'),
          message: `${t('totalAssigned')}: ${totalAssigned.toFixed(2)} SAR\n${t('totalBill')}: ${total.toFixed(2)} SAR` + `\n${t('splitError') || 'Assigned amounts do not match bill total.'}`
        });
        return;
      }
      setModal({
        open: true,
        title: t('splitBill'),
        message: t('billSplitSuccess') || 'Bill split successfully! Sharing details...'
      });
    }
  };

  return (
    <div className="p-6 h-full flex flex-col">
      <Modal isOpen={modal.open} onClose={() => setModal({ ...modal, open: false })}>
        <h2 className="text-lg font-bold mb-2">{modal.title}</h2>
        <pre className="whitespace-pre-wrap text-gray-700 mb-4">{modal.message}</pre>
        <button onClick={() => setModal({ ...modal, open: false })} className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold mt-2">{t('close')}</button>
      </Modal>
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${isRtl ? 'ml-3' : 'mr-3'}`}
        >
          <ArrowLeft className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
        </button>
        <h1 className="text-xl font-bold">{t('splitBill')}</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Bill Amount */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('totalBillAmount')}
          </label>
          <input
            type="number"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            placeholder="0"
            className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg ${
              isRtl ? 'text-right' : 'text-left'
            }`}
          />
        </div>

        {/* Split Type */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t('splitType')}
          </label>
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setSplitType('even')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                splitType === 'even'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('splitEvenly')}
            </button>
            <button
              onClick={() => setSplitType('uneven')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                splitType === 'uneven'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('splitUnevenly')}
            </button>
          </div>
        </div>

        {/* Participants */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-700">
              {t('participants')} ({participants.length})
            </label>
            <button
              onClick={addParticipant}
              className="flex items-center text-emerald-600 text-sm font-medium hover:text-emerald-700"
            >
              <Plus className={`h-4 w-4 ${isRtl ? 'ml-1' : 'mr-1'}`} />
              {t('addParticipant')}
            </button>
          </div>

          <div className="space-y-3">
            {participants.map((participant, index) => (
              <div key={participant.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">
                        {participant.name}
                      </span>
                      {participants.length > 1 && (
                        <button
                          onClick={() => removeParticipant(participant.id)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{t('amount')}:</span>
                      {splitType === 'even' ? (
                        <div className="font-semibold text-emerald-600">
                          <Price amount={calculateEvenSplit()} />
                        </div>
                      ) : (
                        <input
                          type="number"
                          value={participant.amount || ''}
                          onChange={(e) => updateParticipantAmount(participant.id, e.target.value)}
                          placeholder="0"
                          className={`w-24 px-2 py-1 border border-gray-300 rounded text-sm ${
                            isRtl ? 'text-right' : 'text-left'
                          }`}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        {billAmount && (
          <div className="bg-emerald-50 rounded-lg p-4 mb-6">
            <h3 className="text-sm font-medium text-emerald-800 mb-2">
              {t('summary')}
            </h3>
            <div className="space-y-1 text-sm text-emerald-700">
              <div className="flex justify-between">
                <span>{t('totalBill')}:</span>
                <span className="font-semibold">
                  <Price amount={parseFloat(billAmount)} />
                </span>
              </div>
              <div className="flex justify-between">
                <span>{t('participants')}:</span>
                <span>{participants.length}</span>
              </div>
              {splitType === 'uneven' && (
                <div className="flex justify-between">
                  <span>{t('totalAssigned')}:</span>
                  <span className={`font-semibold ${
                    Math.abs(getTotalUnevenAmount() - parseFloat(billAmount)) > 0.01 
                      ? 'text-red-600' : 'text-emerald-600'
                  }`}>
                    <Price amount={getTotalUnevenAmount()} />
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Action Button */}
      <button
        onClick={handleCalculateAndShare}
        disabled={!billAmount || parseFloat(billAmount) <= 0 || participants.length === 0}
        className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-emerald-700 transition-colors"
      >
        {t('calculateAndShare')}
      </button>
    </div>
  );
}

export default SplitBillScreen;