import { useTranslation } from 'react-i18next';
import { HandCoins, Users, QrCode, FileText, CreditCard, Repeat, Wallet, PiggyBank, TrendingUp, Star } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

function ServicesScreen({ onSelectService, showPremiumBadge = false }) {
  const { t } = useTranslation();

  const services = [
      { icon: CreditCard, label: 'myCards', id: 'myCards' }, // My Cards - Priority 1
      { icon: TrendingUp, label: 'smartInvestment', id: 'smartInvestment' }, // Smart Investment - Priority 2
      { icon: Wallet, label: 'dependentsWallet', id: 'dependentsWallet' }, // Dependents' Wallet - Priority 3
      { icon: HandCoins, label: 'requestPayment', id: 'requestPayment' }, // Request Payment - Priority 4
      { icon: Users, label: 'splitBill', id: 'splitBill' }, // Split Bill - Priority 5
      { icon: FileText, label: 'billPayments', id: 'billPayments' }, // Bill Payments - Priority 6
      { icon: QrCode, label: 'scanToPay', id: 'scanToPay' }, // Scan to Pay - Priority 7
      { icon: Star, label: 'loyaltyPoints', id: 'loyaltyPoints' }, // Loyalty Points - Priority 8
      { icon: Repeat, label: 'recurringPayments', id: 'recurringPayments' }, // Recurring Payments
      { icon: PiggyBank, label: 'savingsGoals', id: 'savingsGoals' } // Savings Goals
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t('services')}</h1>
        <p className="text-gray-600 mt-1">{t('servicesSubtitle')}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            label={service.label}
            premium={service.id === 'smartInvestment' && showPremiumBadge}
            onClick={() => onSelectService && onSelectService(service.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesScreen;
