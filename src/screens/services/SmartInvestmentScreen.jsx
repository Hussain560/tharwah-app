import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, TrendingUp, Target, Shield, Eye, Zap, Calendar, DollarSign } from 'lucide-react';
import Modal from '../../components/Modal';
import Price from '../../components/Price';

function SmartInvestmentScreen({ onBack }) {
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState({ open: false, title: '', message: '' });
  const isRtl = i18n.dir() === 'rtl';

  // Mock data for user profile
  const investmentProfile = {
    goal: t('moderate'),
    riskTolerance: t('moderate'),
    currentPortfolioValue: '25,400'
  };

  // Mock investment options
  const investmentOptions = [
    {
      id: 1,
      name: t('diversifiedGrowthFund'),
      description: t('balancedPortfolio'),
      projectedReturn: '+8.5%',
      icon: Target,
      riskLevel: t('moderate'),
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      id: 2,
      name: t('greenEnergyPortfolio'),
      description: t('sustainableInvestments'),
      projectedReturn: '+12.2%',
      icon: Shield,
      riskLevel: t('moderate'),
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 3,
      name: t('techInnovationFund'),
      description: t('highGrowthTech'),
      projectedReturn: '+15.8%',
      icon: Zap,
      riskLevel: t('aggressive'),
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  // Mock investment history
  const investmentHistory = [
    {
      id: 1,
      date: 'Jan 2025',
      investment: t('diversifiedGrowthFund'),
      performance: '+1.2%',
      color: 'text-emerald-600'
    },
    {
      id: 2,
      date: 'Dec 2024',
      investment: t('greenEnergyPortfolio'),
      performance: '+0.8%',
      color: 'text-emerald-600'
    },
    {
      id: 3,
      date: 'Nov 2024',
      investment: t('techInnovationFund'),
      performance: '+2.1%',
      color: 'text-emerald-600'
    }
  ];

  const handleViewDetails = (investment) => {
    setModal({
      open: true,
      title: investment.name,
      message: `${investment.description}\n\n${t('projectedReturn')}: ${investment.projectedReturn}\n${t('riskTolerance')}: ${investment.riskLevel}\n\n${t('comingSoon')}: ${t('viewDetails')}`
    });
  };

  const handleInvestNow = (investment) => {
    setModal({
      open: true,
      title: t('investNow'),
      message: `${t('comingSoon')}: ${t('investNow')} - ${investment.name}\n\n${t('projectedReturn')}: ${investment.projectedReturn}`
    });
  };

  const handleStartInvesting = () => {
    setModal({
      open: true,
      title: t('startInvesting'),
      message: `${t('comingSoon')}: ${t('smartInvestmentDesc')}`
    });
  };

  return (
    <div className="p-6 h-full flex flex-col">
      <Modal isOpen={modal.open} onClose={() => setModal({ ...modal, open: false })}>
        <h2 className="text-lg font-bold mb-2">{modal.title}</h2>
        <p className="text-gray-700 mb-4 whitespace-pre-line">{modal.message}</p>
        <button 
          onClick={() => setModal({ ...modal, open: false })} 
          className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold"
        >
          {t('close')}
        </button>
      </Modal>

      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${isRtl ? 'ml-3' : 'mr-3'}`}
        >
          <ArrowLeft className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
        </button>
        <h1 className="text-xl font-bold">{t('smartInvestment')}</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Current Portfolio Overview */}
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-emerald-100 text-sm">{t('totalBalance')}</p>
              <p className="text-3xl font-bold">
                <Price amount={investmentProfile.currentPortfolioValue} />
              </p>
            </div>
            <TrendingUp className="h-12 w-12 text-emerald-200" />
          </div>
          <p className="text-emerald-100 text-sm">{t('smartInvestmentDesc')}</p>
        </div>

        {/* Investment Profile Section */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">{t('investmentGoal')}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">{t('investmentGoal')}</p>
              <p className="font-medium text-gray-900">{investmentProfile.goal}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">{t('riskTolerance')}</p>
              <p className="font-medium text-gray-900">{investmentProfile.riskTolerance}</p>
            </div>
          </div>
        </div>

        {/* AI Recommendations Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Zap className={`h-5 w-5 text-emerald-600 ${isRtl ? 'ml-2' : 'mr-2'}`} />
            {t('aiPoweredRecommendations')}
          </h2>
          
          <div className="space-y-4">
            {investmentOptions.map((investment) => (
              <div key={investment.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className={`p-2 rounded-lg ${investment.color} ${isRtl ? 'ml-3' : 'mr-3'}`}>
                        <investment.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{investment.name}</h3>
                        <p className="text-xs text-gray-500">{t('riskTolerance')}: {investment.riskLevel}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{investment.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">{t('projectedReturn')}</p>
                    <p className="text-lg font-bold text-emerald-600">{investment.projectedReturn}</p>
                    <p className="text-xs text-gray-400">p.a.</p>
                  </div>
                </div>
                
                <button
                  onClick={() => handleInvestNow(investment)}
                  className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center"
                >
                  <DollarSign className={`h-4 w-4 ${isRtl ? 'ml-2' : 'mr-2'}`} />
                  {t('investNow')}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Investment History Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Calendar className={`h-5 w-5 text-emerald-600 ${isRtl ? 'ml-2' : 'mr-2'}`} />
            {t('investmentHistory')}
          </h2>
          
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 border-b border-gray-200">
              <p className="text-sm font-medium text-gray-700">{t('date')}</p>
              <p className="text-sm font-medium text-gray-700">{t('investment')}</p>
              <p className="text-sm font-medium text-gray-700 text-right">{t('performance')}</p>
            </div>
            <div className="divide-y divide-gray-100">
              {investmentHistory.map((item) => (
                <div key={item.id} className="grid grid-cols-3 gap-4 p-4">
                  <p className="text-sm text-gray-600">{item.date}</p>
                  <p className="text-sm text-gray-900 truncate">{item.investment}</p>
                  <p className={`text-sm font-semibold text-right ${item.color}`}>{item.performance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Start Investing Button */}
      <button
        onClick={handleStartInvesting}
        className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center"
      >
        <TrendingUp className={`h-5 w-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
        {t('startInvesting')}
      </button>
    </div>
  );
}

export default SmartInvestmentScreen;