import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Sparkles } from 'lucide-react';
import ChatMessage from '../components/ChatMessage';

function AiChatScreen() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  
  const [messages, setMessages] = useState([
    { sender: 'ai', message: t('aiWelcomeMessage') }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const suggestedPrompts = [
    { key: 'analyzeSpending', text: t('analyzeSpendingPrompt') },
    { key: 'saveTips', text: t('saveTipsPrompt') },
    { key: 'budgetHelp', text: t('budgetHelpPrompt') },
    { key: 'goalSetting', text: t('goalSettingPrompt') }
  ];

  const aiResponses = {
    analyzeSpending: t('analyzeSpendingResponse'),
    saveTips: t('saveTipsResponse'),
    budgetHelp: t('budgetHelpResponse'),
    goalSetting: t('goalSettingResponse')
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages(prev => [...prev, { sender: 'user', message: inputMessage }]);
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          sender: 'ai', 
          message: t('aiGenericResponse')
        }]);
      }, 1000);
      
      setInputMessage('');
    }
  };

  const handleSuggestedPrompt = (promptKey) => {
    const promptText = suggestedPrompts.find(p => p.key === promptKey)?.text;
    const responseText = aiResponses[promptKey];
    
    setMessages(prev => [
      ...prev,
      { sender: 'user', message: promptText },
      { sender: 'ai', message: responseText }
    ]);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b bg-white">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-emerald-600" />
          <h1 className="font-semibold">{t('aiAdvisor')}</h1>
        </div>
        <p className="text-sm text-gray-600 mt-1">{t('aiChatSubtitle')}</p>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((msg, index) => (
          <ChatMessage 
            key={index}
            message={msg.message}
            sender={msg.sender}
          />
        ))}
      </div>

      {/* Suggested Prompts */}
      <div className="p-4 bg-white border-t">
        <div className="mb-3">
          <p className="text-sm font-medium text-gray-700 mb-2">{t('suggestedPrompts')}</p>
          <div className="grid grid-cols-2 gap-2">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt.key}
                onClick={() => handleSuggestedPrompt(prompt.key)}
                className="p-2 text-xs bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors text-left"
              >
                {prompt.text}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={t('typeYourMessage')}
            className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
              isRtl ? 'text-right' : 'text-left'
            }`}
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AiChatScreen;