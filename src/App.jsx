import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';
import AnalysisScreen from './screens/AnalysisScreen';
import ServicesScreen from './screens/ServicesScreen';
import AiAdvisorScreen from './screens/AiAdvisorScreen';
import SettingsScreen from './screens/SettingsScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import AuthScreen from './screens/AuthScreen';
import OnboardingPhone from './components/OnboardingPhone';
import MainAppPhone from './components/MainAppPhone';
import UpgradedAppPhone from './components/UpgradedAppPhone';
import LanguageSwitcher from './components/LanguageSwitcher';

// Main App Shell - contains phone frame with info section above
function MainAppShell() {
  const [activeScreen, setActiveScreen] = useState('home');
  const { t, i18n } = useTranslation();
  
  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen />;
      case 'analysis':
        return <AnalysisScreen />;
      case 'services':
        return <ServicesScreen />;
      case 'advisor':
        return <AiAdvisorScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center p-4">
      {/* Info Section Above */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center max-w-2xl">
        <h1 className="text-3xl font-bold text-black mb-2">
          ثروه (Tharwah) - Financial Management App
        </h1>
        <p className="text-neutral-700">
          {t('appDescription')}
        </p>
        <div className="mt-4">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Phone Frame with Main App */}
      <div className="mt-20">
        <Layout activeTab={activeScreen} setActiveTab={setActiveScreen}>
          {renderScreen()}
        </Layout>
      </div>
    </div>
  );
}

// Onboarding Flow - manages wizard and auth screens within phone frame
function OnboardingFlow({ onAuthSuccess }) {
  const [flowState, setFlowState] = useState('wizard');
  const { t, i18n } = useTranslation();

  const renderOnboardingContent = () => {
    if (flowState === 'wizard') {
      return <OnboardingScreen onComplete={() => setFlowState('auth')} />;
    }
    return <AuthScreen onLoginSuccess={onAuthSuccess} />;
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center p-4">
      {/* Info Section Above */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center max-w-2xl">
        <h1 className="text-3xl font-bold text-black mb-2">
          ثروه (Tharwah) - Demo Preview
        </h1>
        <p className="text-neutral-700">
          {flowState === 'wizard' 
            ? t('onboardingPreview') 
            : t('authPreview')
          }
        </p>
      </div>

      {/* Phone Frame with Onboarding/Auth Content */}
      <div className="mt-20">
        <Layout>
          {renderOnboardingContent()}
        </Layout>
      </div>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { i18n } = useTranslation();
  
  // Control the page direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n.language]);

    const { t } = useTranslation();
    return (
      <div className="bg-slate-100 min-h-screen p-8 flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-800">ثروه (Tharwah)</h1>
          <LanguageSwitcher />
        </div>

        {/* First-Time User Journey Box */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-xl font-semibold text-gray-700">{t('firstTimeUserJourney', 'First-Time User Journey: Onboarding & Authentication')}</h2>
          <div className="flex justify-center mt-4">
            <OnboardingPhone />
          </div>
        </div>

        {/* Main Application Experience Box */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-xl font-semibold text-gray-700">{t('mainAppExperience', 'Main Application Experience (Logged-In User)')}</h2>
          <div className="flex justify-center mt-4">
            <MainAppPhone />
          </div>
        </div>

        {/* Premium Upgrade Experience Box */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-xl font-semibold text-gray-700">{t('premiumAppExperience', 'Main Application Experience (Premium Upgrade)')}</h2>
          <div className="flex justify-center mt-4">
            <UpgradedAppPhone />
          </div>
        </div>
      </div>
    );
}

export default App;
