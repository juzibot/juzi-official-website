import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { host } from '@src/config';
import { useTranslation } from 'react-i18next';
import cx from '@src/utils/cx';
import ContactUsModal from '../ContactUsModal';

const HeaderBarMobile: NextPage = () => {
  const { i18n } = useTranslation(['common']);
  const isZh = i18n.language === 'zh';
  const [showContactUsModal, setShowContactUsModal] = useState(false);

  function changeLanguage() {
    location.href = host + (isZh ? '/en' : '/zh');
  }

  return (
    <div className={cx(i18n.language, 'px-4 flex justify-between items-center bg-red')}>
      <Image
        alt="logo"
        src="https://cdn-official-website.juzibot.com/images/logo-white.svg"
        width={106}
        height={64}
        draggable="false"
      />
      <div className="text-white font-medium flex">
        <span className="inline-flex" onClick={changeLanguage}>
          {isZh ? 'EN' : '中文'}
          <img src="https://cdn-official-website.juzibot.com/images/icons/arrow-white.svg" alt="" />
        </span>
        {isZh && (
          <>
            <img className="ml-4" src="https://cdn-official-website.juzibot.com/images/icons/contact-us-white.svg" alt="" onClick={() => setShowContactUsModal(true)} />
            <img className="ml-4" src="https://cdn-official-website.juzibot.com/images/icons/user-white.svg" alt="" onClick={() => setShowContactUsModal(true)} />
            <img className="ml-4 hidden" src="https://cdn-official-website.juzibot.com/images/icons/menu-more-white.svg" alt="" />
          </>
        )}
      </div>
      <ContactUsModal
        visible={showContactUsModal}
        onCancel={() => setShowContactUsModal(false)}
        onOk={() => setShowContactUsModal(false)}
      />
    </div>
  )
};

export default HeaderBarMobile;
