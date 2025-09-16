import React, { useState } from "react";
import Layout from "./Layout";
import HomeScreen from "../screens/HomeScreen";
import AnalysisScreen from "../screens/AnalysisScreen";
import ServicesScreen from "../screens/ServicesScreen";
import AiAdvisorScreen from "../screens/AiAdvisorScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DependentsWalletScreen from "../screens/services/DependentsWalletScreen";
import RequestPaymentScreen from "../screens/services/RequestPaymentScreen";
import SplitBillScreen from "../screens/services/SplitBillScreen";
import BillPaymentsScreen from "../screens/services/BillPaymentsScreen";
import ScanToPayScreen from "../screens/services/ScanToPayScreen";
import LoyaltyPointsScreen from "../screens/services/LoyaltyPointsScreen";
import MyCardsScreen from "../screens/services/MyCardsScreen";
import RecurringPaymentsScreen from "../screens/services/RecurringPaymentsScreen";
import SavingsGoalsScreen from "../screens/services/SavingsGoalsScreen";
import { useTranslation } from 'react-i18next';

export default function MainAppPhone() {
  const { i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('home');
  const [activeService, setActiveService] = useState(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  let ScreenComponent;
  switch (activeTab) {
    case 'analysis':
      ScreenComponent = () => <AnalysisScreen isUpgraded={false} />;
      break;
    case 'services':
      // Handle service navigation
      if (activeService === 'dependentsWallet') {
        ScreenComponent = () => <DependentsWalletScreen onBack={() => setActiveService(null)} />;
      } else if (activeService === 'requestPayment') {
        ScreenComponent = () => <RequestPaymentScreen onBack={() => setActiveService(null)} />;
      } else if (activeService === 'splitBill') {
        ScreenComponent = () => <SplitBillScreen onBack={() => setActiveService(null)} />;
      } else if (activeService === 'billPayments') {
        ScreenComponent = () => <BillPaymentsScreen onBack={() => setActiveService(null)} />;
      } else if (activeService === 'scanToPay') {
        ScreenComponent = () => <ScanToPayScreen onBack={() => setActiveService(null)} />;
      } else if (activeService === 'loyaltyPoints') {
        ScreenComponent = () => <LoyaltyPointsScreen onBack={() => setActiveService(null)} />;
      } else if (activeService === 'myCards') {
        ScreenComponent = () => <MyCardsScreen onBack={() => setActiveService(null)} />;
      } else if (activeService === 'recurringPayments') {
        ScreenComponent = () => <RecurringPaymentsScreen onBack={() => setActiveService(null)} />;
      } else if (activeService === 'savingsGoals') {
        ScreenComponent = () => <SavingsGoalsScreen onBack={() => setActiveService(null)} />;
      } else {
        // Intercept Smart Investment selection
        ScreenComponent = () => <ServicesScreen 
          onSelectService={(id) => {
            if (id === 'smartInvestment') {
              setShowUpgradeModal(true);
            } else {
              setActiveService(id);
            }
          }} 
          showPremiumBadge={true}
        />;
      }
      break;
    case 'advisor':
      ScreenComponent = AiAdvisorScreen;
      break;
    case 'settings':
      ScreenComponent = SettingsScreen;
      break;
    case 'home':
    default:
      ScreenComponent = HomeScreen;
  }

  return (
    <div className="relative bg-black rounded-3xl shadow-2xl flex items-center justify-center" style={{ width: 430, height: 932, overflow: "hidden", border: "8px solid #222" }}>
      <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
        <div className="relative w-full h-full">
          <ScreenComponent />
          {showUpgradeModal && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-8 shadow-xl max-w-xs w-full text-center mx-auto">
                <h2 className="text-xl font-bold mb-2">{i18n.language === 'ar' ? 'خدمة بريميوم' : 'Premium Service'}</h2>
                <p className="mb-4 text-gray-700">{i18n.language === 'ar' ? 'هذه الخدمة متاحة فقط للمستخدمين البريميوم. يرجى الترقية للوصول إلى الاستثمار الذكي.' : 'This service is available for premium users only. Please upgrade to access Smart Investment.'}</p>
                <button className="bg-yellow-400 text-white font-bold px-4 py-2 rounded" onClick={() => setShowUpgradeModal(false)}>
                  {i18n.language === 'ar' ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
}
