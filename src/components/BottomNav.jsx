import { useTranslation } from 'react-i18next';
import { Home, PieChart, Receipt, Sparkles, Settings, LayoutGrid } from 'lucide-react';
import BottomNavItem from './BottomNavItem';

function BottomNav({ activeTab, setActiveTab }) {
  const { t } = useTranslation();

  const navItems = [
    { id: 'home', icon: Home, label: t('home') },
    { id: 'analysis', icon: PieChart, label: t('analysis') },
    { id: 'services', icon: LayoutGrid, label: t('services') },
    { id: 'advisor', icon: Sparkles, label: t('advisor') },
    { id: 'settings', icon: Settings, label: t('settings') }
  ];

  return (
    <div className="flex justify-around bg-neutral-100 p-2 rounded-b-[30px]">
      {navItems.map((item) => (
        <BottomNavItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          isActive={activeTab === item.id}
          onClick={() => setActiveTab(item.id)}
        />
      ))}
    </div>
  );
}

export default BottomNav;
