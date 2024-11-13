import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactUsPureModal from '../ContactUsPureModal';
import { useShowModal } from '@src/utils/showModal';

const TIMEOUT = 5 * 1000;

export const ContactButtonNew: NextPage = () => {
  const [popupVisible, togglePopupVisible] = useState(false);
  const [autoVisible, toggleAutoVisible] = useState(false);
  const { t, i18n } = useTranslation(['common']);

  const [showContactUsPureModal, setShowContactUsPureModal] = useState(false);
  const showModal = useShowModal();

  useEffect(() => {
    setTimeout(() => {
      toggleAutoVisible(true);
    }, TIMEOUT);
  }, []);

  return (
    <>
      {autoVisible && !popupVisible ? (
        <div className="contact-popup" style={{ height: i18n.language === 'en' ? 130 : 90, bottom: i18n.language === 'en' ? 208 : 230 }}>
          <strong>{t('contact-button-question')}</strong>
          <div>{t('contact-button-click')}</div>
          <div className="close-btn" onClick={() => toggleAutoVisible(false)}>
            <svg
              className="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9086"
              width="16"
              height="16"
            >
              <path
                d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z"
                p-id="9087"
              ></path>
            </svg>
          </div>
        </div>
      ) : null}

      {popupVisible ? (
        <div className="contact-popup" style={{ height: i18n.language === 'en' ? 130 : 90, bottom: i18n.language === 'en' ? 208 : 230 }}>
          <strong>{t('contact-button-click-1')}</strong>
          <div>{t('contact-button-click-2')}</div>
        </div>
      ) : null}
      <div
        className="contact-button-container"
        onMouseMove={() => togglePopupVisible(true)}
        onMouseLeave={() => togglePopupVisible(false)}
        onClick={() => {
          toggleAutoVisible(false);
          showModal({ qrCode: 'sf-04' });
        }}
      >
        <div className="wave w1"></div>
        <div className="wave w2"></div>
        <div className="contact-button"></div>
      </div>
      <ContactUsPureModal
        visible={showContactUsPureModal}
        onCancel={() => setShowContactUsPureModal(false)}
        onOk={() => setShowContactUsPureModal(false)}
      />
    </>
  )
};
