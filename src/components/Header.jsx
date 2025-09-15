import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Bell, User, Eye, EyeOff } from 'lucide-react';

function Header() {
  const { t } = useTranslation();
  const [balanceVisible, setBalanceVisible] = useState(true);

  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">
          {t('greeting')}, Ahmed!
        </h1>
        <p className="text-gray-600 text-sm">{t('welcomeBack')}</p>
      </div>
      
      <div className="flex gap-2">
        <button 
          onClick={() => setBalanceVisible(!balanceVisible)}
          className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          {balanceVisible ? <Eye size={20} className="text-gray-600" /> : <EyeOff size={20} className="text-gray-600" />}
        </button>
        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <Bell size={20} className="text-gray-600" />
        </button>
        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <User size={20} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}

export default Header;
