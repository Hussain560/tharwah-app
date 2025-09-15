import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';


// If you want to use the modal globally, pass fixed=true. By default, it's absolute for phone frame overlay.
function Modal({ isOpen, onClose, children, fixed = false }) {
  const { i18n } = useTranslation();
  if (!isOpen) return null;

  // Use text-right for RTL, text-left for LTR
  const textAlign = i18n.dir() === 'rtl' ? 'text-right' : 'text-left';

  return (
    <div className={`${fixed ? 'fixed' : 'absolute'} inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40`}>
      <div className={`bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto ${textAlign}`}>
        <div className="p-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;