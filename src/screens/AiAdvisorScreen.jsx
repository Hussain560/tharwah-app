import { useTranslation } from 'react-i18next';
import { Sparkles, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import Card from '../components/Card';

function AiAdvisorScreen() {
  const { t } = useTranslation();

  // Mock AI insights
  const insights = [
    {
      icon: AlertTriangle,
      type: 'warning',
      title: t('spendingAlert'),
      message: t('diningOverspend'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: CheckCircle,
      type: 'success',
      title: t('goodJob'),
      message: t('savingsOnTrack'),
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: TrendingUp,
      type: 'insight',
      title: t('monthlyInsight'),
      message: t('grocerySavings'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Sparkles,
      type: 'tip',
      title: t('smartTip'),
      message: t('budgetOptimization'),
  color: 'text-[#8EB69B]',
  bgColor: 'bg-[#e6f2ec]'
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold flex items-center">
          <Sparkles size={24} className="text-[#8EB69B] mr-2" />
          {t('aiAdvisor')}
        </h1>
        <p className="text-gray-600 mt-1">{t('personalizedInsights')}</p>
      </div>
      
      <div>
        {insights.map((insight, index) => (
          <Card key={index} className="mb-4">
            <div className="flex items-start">
              <div className={`p-2 ${insight.bgColor} rounded-lg mr-3 mt-1`}>
                <insight.icon size={20} className={insight.color} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{insight.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{insight.message}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
  <Card className="mt-6 bg-gradient-to-r from-[#e6f2ec] to-blue-50">
        <div className="text-center">
          <Sparkles size={32} className="text-[#8EB69B] mx-auto mb-2" />
          <h3 className="font-semibold text-gray-900 mb-1">{t('premiumInsights')}</h3>
          <p className="text-gray-600 text-sm mb-3">{t('upgradeMessage')}</p>
          <button className="bg-[#8EB69B] text-white px-4 py-2 rounded-lg text-sm font-medium">
            {t('upgradePremium')}
          </button>
        </div>
      </Card>
    </div>
  );
}

export default AiAdvisorScreen;
