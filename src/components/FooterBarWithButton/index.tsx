import React, { useState } from 'react';
import { useShowModal } from '@src/utils/showModal';
import cls from 'classnames';
import { ContactUsOption } from '../common/emitter';
import { useMediaQuery } from '@react-hookz/web';
import ContactUsModal from '../ContactUsModal';
import { pick } from 'lodash';
import { useTranslation } from 'react-i18next';

type Props = {
  // title?: string
  // buttonText?: string
  contactUsOption?: ContactUsOption
  onButtonClick?: () => void
  onClick?: () => void
}

const FooterBarWithButton = (props: Props = {}) => {
  const {
    // title = 'RPA + AI，打造下一代基于 IM 跨平台，对话式营销云',
    // buttonText = '免费使用',
    contactUsOption,
    onButtonClick,
    onClick,
  } = props
  const isMobile = useMediaQuery('only screen and (max-width : 600px)');
  const showPcModal = useShowModal();
  const [showMobileModal, setShowMobileModal] = useState(false);

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
      return
    }
    if (isMobile) {
      setShowMobileModal(true);
      return;
    }
    showPcModal(contactUsOption);
  };

  const { t, i18n } = useTranslation('common');
  const pcTitle = (
    <div className={cls('title')}>
      <span>{t('title-1')}</span>
      <span className="text-[#EF3BFB] ml-2">{t('title-2')}</span>
    </div>
  );
  const mobileTitle = (
    <div className={cls('title')}>
      <div className='text-center text-[28px]' style={{marginLeft: i18n.language === 'en' ? 0 : 20 }}>{t('mobile-title-1')}</div>
      <div style={{ fontSize: i18n.language === 'en' ? "60%" : 20 }}>
        <span>{t('mobile-title-2')}</span>
        <span className="text-[#EF3BFB]" style={{marginLeft: i18n.language === 'en' ? 0: 6}}>{t('mobile-title-3')}</span>
      </div>
    </div>
  );

  return (
    <div className="content" onClick={onClick}>
      {isMobile ? mobileTitle : pcTitle}
      <span
        style={{ background: 'linear-gradient(96deg, #EF3BFB 0.67%, #6721FF 98.48%)' }}
        className="rounded-full px-10 py-4 text-white cursor-pointer text-[18px]"
        onClick={handleClick}
      >
        {t('contact')}
      </span>
      <ContactUsModal
        {...pick(props.contactUsOption, ['type', 'qrCode'])}
        open={showMobileModal}
        onCancel={() => setShowMobileModal(false)}
      />
    </div>
  );
};

export default FooterBarWithButton;