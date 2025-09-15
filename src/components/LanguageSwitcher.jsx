import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          i18n.language === 'en'
            ? 'bg-[#8EB69B] text-white'
            : 'bg-white text-black border border-gray-300 hover:bg-[#709d7e]'
        }`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          i18n.language === 'ar'
            ? 'bg-[#8EB69B] text-white'
            : 'bg-white text-black border border-gray-300 hover:bg-[#709d7e]'
        }`}
      >
        العربية
      </button>
    </div>
  );
}

export default LanguageSwitcher;
