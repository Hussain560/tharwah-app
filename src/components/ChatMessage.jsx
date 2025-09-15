import { useTranslation } from 'react-i18next';

function ChatMessage({ message, sender }) {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const isAI = sender === 'ai';

  return (
    <div className={`flex mb-4 ${isAI ? (isRtl ? 'justify-end' : 'justify-start') : (isRtl ? 'justify-start' : 'justify-end')}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          isAI 
            ? 'bg-gray-100 text-gray-800' 
            : 'bg-emerald-600 text-white'
        } ${isRtl ? 'text-right' : 'text-left'}`}
      >
        {message}
      </div>
    </div>
  );
}

export default ChatMessage;