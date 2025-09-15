import { useTranslation } from 'react-i18next';
import { User, Bell, Shield, Globe, CreditCard, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import Card from '../components/Card';

function SettingsScreen() {
  const { t } = useTranslation();

  const settingsSections = [
    {
      title: t('account'),
      items: [
        { icon: User, label: t('profile'), hasArrow: true },
        { icon: CreditCard, label: t('linkedAccounts'), hasArrow: true }
      ]
    },
    {
      title: t('preferences'),
      items: [
        { icon: Bell, label: t('notifications'), hasArrow: true },
        { icon: Globe, label: t('language'), hasArrow: true }
      ]
    },
    {
      title: t('security'),
      items: [
        { icon: Shield, label: t('securityPrivacy'), hasArrow: true }
      ]
    },
    {
      title: t('support'),
      items: [
        { icon: HelpCircle, label: t('helpSupport'), hasArrow: true }
      ]
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t('settings')}</h1>
      </div>
      
      {/* User Profile Card */}
      <Card className="mb-6">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-[#e6f2ec] rounded-full flex items-center justify-center mr-4">
            <User size={24} className="text-[#8EB69B]" />
          </div>
          <div>
            <h2 className="font-semibold text-lg">Ahmed Al-Rashid</h2>
            <p className="text-gray-600">ahmed@example.com</p>
          </div>
        </div>
      </Card>

      {/* Settings Sections */}
      {settingsSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h3 className="font-semibold text-gray-700 mb-3 px-2">{section.title}</h3>
          <Card>
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex items-center justify-between py-3 cursor-pointer hover:bg-gray-50 -mx-4 px-4 rounded-lg transition-colors"
              >
                <div className="flex items-center">
                  <item.icon size={20} className="text-gray-600 mr-3" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.hasArrow && <ChevronRight size={16} className="text-gray-400" />}
              </div>
            ))}
          </Card>
        </div>
      ))}

      {/* Logout Button */}
      <Card className="mt-6">
        <div className="flex items-center justify-center py-2 cursor-pointer hover:bg-red-50 -mx-4 px-4 rounded-lg transition-colors">
          <LogOut size={20} className="text-red-600 mr-2" />
          <span className="font-medium text-red-600">{t('logout')}</span>
        </div>
      </Card>
    </div>
  );
}

export default SettingsScreen;
