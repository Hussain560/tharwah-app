import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Lock } from 'lucide-react';

function AuthScreen({ onLoginSuccess }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate successful login
    if (onLoginSuccess) onLoginSuccess();
  };

  return (
    <div className="bg-white w-full h-full flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <img 
            src="/logo.png" 
            alt="Tharwah Logo" 
            className="w-24 h-24 mb-4 mx-auto"
          />
          <p className="text-neutral-700">{t('welcomeToTharwah')}</p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              {t('email')}
            </label>
            <div className="relative">
              <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-700" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8EB69B] focus:border-[#8EB69B] outline-none transition-colors"
                placeholder={t('emailPlaceholder')}
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              {t('password')}
            </label>
            <div className="relative">
              <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-700" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8EB69B] focus:border-[#8EB69B] outline-none transition-colors"
                placeholder={t('passwordPlaceholder')}
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#8EB69B] text-white py-3 rounded-lg font-semibold hover:bg-[#709d7e] transition-colors"
          >
            {t('login')}
          </button>

          {/* Secondary Actions */}
          <div className="space-y-3">
            <button className="w-full border border-gray-300 text-black py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              {t('createAccount')}
            </button>
            
            <div className="text-center">
              <button className="text-[#8EB69B] hover:text-[#709d7e] transition-colors">
                {t('forgotPassword')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthScreen;
