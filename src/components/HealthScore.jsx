import { useTranslation } from 'react-i18next';

function HealthScore({ score = 78 }) {
  const { t } = useTranslation();
  
  // Calculate circle properties
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  // Determine color based on score
  const getColor = (score) => {
    if (score >= 80) return '#10b981'; // green
    if (score >= 60) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  };

  const color = getColor(score);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">{t('financialHealthScore')}</h3>
      
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* Background circle */}
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#e5e7eb"
              strokeWidth="6"
              fill="transparent"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke={color}
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-in-out"
            />
          </svg>
          
          {/* Score text in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color }}>
                {score}
              </div>
              <div className="text-xs text-gray-500">
                /100
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Score description */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          {score >= 80 && t('excellentHealth')}
          {score >= 60 && score < 80 && t('goodHealth')}
          {score < 60 && t('needsImprovement')}
        </p>
        
        {/* Tips button */}
        <button className="mt-2 text-emerald-600 text-sm font-medium hover:text-emerald-700 transition-colors">
          {t('getTips')}
        </button>
      </div>
    </div>
  );
}

export default HealthScore;