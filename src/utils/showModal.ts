import { ContactUsOption, emitter } from '@src/components/common/emitter';
import { useTranslation } from 'react-i18next';

export function useShowModal() {
  const { i18n } = useTranslation();
  if (typeof document === 'undefined') return () => { };
  return (options: ContactUsOption = {}) => {
    const {
      type = 'default',
      qrCode = 'sf-01',
    } = options
    //if (i18n.language === 'zh') {
      emitter.emit('contact_us', { ...options, type, qrCode });
    //} else {
    //  window.open('https://ac-bg.juzibot.com/auth/login', '_blank');
    //}
  };
}

export const useContactUsModal = useShowModal;
