import { useTranslation } from 'react-i18next';

export function useShowModalMobile() {
  const { i18n } = useTranslation();
  if (typeof document === 'undefined') return () => {};
  return () => {
    if (i18n.language === 'zh') {
      document
        .getElementById('contact-modal')
        ?.setAttribute('style', 'display: flex');
    } else {
      window.open('https://ac-bg.juzibot.com/auth/login', '_blank');
    }
  };
}
