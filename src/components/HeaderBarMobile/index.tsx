import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { host } from '@src/config';
import { useTranslation } from 'react-i18next';
import cx from '@src/utils/cx';
import ContactUsModal from '../ContactUsModal';
import MobileMenu from './mobileMenu';
import { useRouter } from 'next/router';
import { ContactUsOption } from '../common/emitter';

const HeaderBarMobile: NextPage = () => {
  const { i18n } = useTranslation(['common']);
  const isZh = i18n.language === 'zh';
  const [showContactUsModal, setShowContactUsModal] = useState(false);
  const { pathname } = useRouter();

  function changeLanguage() {
    location.href = host + (isZh ? '/en' : '/zh');
  }

  let qrCode: ContactUsOption['qrCode'] = 'sf-01';
  if (pathname === '/about-us-m') {
   qrCode = 'juzibot-01';
  } else if (pathname === '/culture-m') {
   qrCode = 'juzibot-02';
  }

  return (
    <div
      className={cx(
        i18n.language,
        'px-4 flex justify-between items-center bg-[#fff]'
      )}
    >
      <div className='h-[64px] flex items-center'>
      <a className="logo" href={`${host}/${i18n.language}`}>
        <Image
          alt='logo'
          src='https://s3.cn-north-1.amazonaws.com.cn/xiaoju-material/public/e454f977-c304-49cd-a9a4-989a49237a54/%E5%AE%98%E7%BD%91logo%201%20(1).png'
          width={106}
          height={30}
          draggable='false'
        />
      </a>
      </div>
      <div className='text-[#54657E] font-medium flex'>
        <span className='inline-flex items-center' onClick={changeLanguage}>
          {isZh ? 'EN' : '中文'}
          <img
            className='w-[16px] h-[16px]'
            src='https://s3.cn-north-1.amazonaws.com.cn/xiaoju-material/public/2f5c8a5d-1069-4be3-aa56-3ba5f1ce9205/Frame.jpg'
            alt=''
          />
        </span>
          <>
            <img
              className='ml-4 w-[20px] h-[20px]'
              src='https://s3.cn-north-1.amazonaws.com.cn/xiaoju-material/public/39e58645-fdf7-46a0-94c2-9cb4537734d1/%E5%AE%A2%E6%9C%8D.png'
              alt=''
              onClick={() => setShowContactUsModal(true)}
            />
            <img
              className='ml-4 w-[20px] h-[20px]'
              src='https://s3.cn-north-1.amazonaws.com.cn/xiaoju-material/public/51873a1e-18e9-4c10-bf64-adfb67909d55/%E7%99%BB%E5%BD%95.png'
              alt=''
              onClick={() => setShowContactUsModal(true)}
            />
            <MobileMenu />
          </>
      </div>
      <ContactUsModal
        qrCode={qrCode}
        open={showContactUsModal}
        onCancel={() => setShowContactUsModal(false)}
        onOk={() => setShowContactUsModal(false)}
      />
    </div>
  );
};

export default HeaderBarMobile;
