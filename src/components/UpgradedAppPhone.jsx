import React, { useState } from "react";
import Layout from "./Layout";
import HomeScreen from "../screens/HomeScreen";
import AnalysisScreen from "../screens/AnalysisScreen";
import ServicesScreen from "../screens/ServicesScreen";
import AiChatScreen from "../screens/AiChatScreen"; // Using the new chat screen instead
import SettingsScreen from "../screens/SettingsScreen";
import AutoDeductionScreen from "../screens/services/AutoDeductionScreen";
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

export default function UpgradedAppPhone() {
  const { i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('home');
  const [activeService, setActiveService] = useState(null);

  let ScreenComponent;
  switch (activeTab) {
    case 'analysis':
      ScreenComponent = () => <AnalysisScreen isUpgraded={true} />;
      break;
    case 'services':
      // Handle service navigation
      if (activeService === 'autoDeduction') {
        ScreenComponent = () => <AutoDeductionScreen onBack={() => setActiveService(null)} />;
      } else if (activeService === 'dependentsWallet') {
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
        ScreenComponent = () => <ServicesScreen onSelectService={setActiveService} />;
      }
      break;
    case 'advisor':
      ScreenComponent = AiChatScreen; // Premium feature: Interactive AI Chat
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
        <ScreenComponent />
      </Layout>
    </div>
  );
}