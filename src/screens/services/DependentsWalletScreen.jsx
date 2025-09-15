import { useTranslation } from 'react-i18next';
import { ArrowLeft, Plus } from 'lucide-react';
import DependentCard from '../../components/DependentCard';

function DependentsWalletScreen({ onBack }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  // Mock data for dependents
  const dependents = [
    { id: 1, name: 'Ahmed', balance: 250 },
    { id: 2, name: 'Fatima', balance: 180 },
    { id: 3, name: 'Omar', balance: 320 }
  ];

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button
            onClick={onBack}
            className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${isRtl ? 'ml-3' : 'mr-3'}`}
          >
            <ArrowLeft className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
          <h1 className="text-xl font-bold">{t('dependentsWallet')}</h1>
        </div>
      </div>

      {/* Add New Dependent Button */}
      <button className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-medium mb-6 flex items-center justify-center hover:bg-emerald-700 transition-colors">
        <Plus className={`h-5 w-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
        {t('addNewDependent')}
      </button>

      {/* Dependents List */}
      <div className="flex-1 overflow-y-auto">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          {t('yourDependents')}
        </h2>
        
        {dependents.map((dependent) => (
          <DependentCard
            key={dependent.id}
            name={dependent.name}
            balance={dependent.balance}
          />
        ))}
        
        {dependents.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>{t('noDependents')}</p>
            <p className="text-sm mt-1">{t('addFirstDependent')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DependentsWalletScreen;