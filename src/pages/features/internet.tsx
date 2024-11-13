/* eslint-disable no-unreachable */
import { useMediaQuery } from '@react-hookz/web';
import ContactUsModal from '@src/components/ContactUsModal';
import FooterBarWithButton from '@src/components/FooterBarWithButton';
import Seo from '@src/components/common/Seo';
import { HIDE_CONTACT_US } from '@src/config';
import { useShowModal } from '@src/utils/showModal';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';

const CustomerAcquisitionPage: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const showPcModal = useShowModal();
  if (isSmallDevice) {
    return (
      <div className='m-auto pt-[60px] relative'>
        <Seo page="features-internet" />
        <img className='w-full' alt='' src='/_images/image-page/internet-20231023-no-button-m.png' />
        <div className="wrapper appeal-bar">
          <div className="container !w-[100%]">
            <FooterBarWithButton
              contactUsOption={{ qrCode: 'sf-04' }}
            />
          </div>
        </div>

        {/* 获取解决方案-按钮 */}
        {!HIDE_CONTACT_US && (
          <div
            onClick={() => setShowModal(true)}
            className='bg-[#0555FF] w-[calc(41%)] h-[48px] rounded-full flex justify-center items-center text-[18px] font-semibold text-white absolute top-[28.7%] left-[48.5%] cursor-pointer'
            style={{ transform: 'translate(-50%)', boxShadow: '0px 35px 50px -15px rgba(52, 128, 239, 0.30)' }}
          >获取解决方案</div>
        )}
        <ContactUsModal
          qrCode='sf-04'
          open={showModal}
          onCancel={() => setShowModal(false)}
        />
      </div>
    );
  }
  return (
    <div className='m-auto pt-[60px] relative'>
      <Seo page="features-internet" />
      {HIDE_CONTACT_US ? (
        <div
          className='bg-white w-[calc(14.2%)] h-[calc(11.7%)] rounded flex justify-center items-center text-[18px] font-semibold text-white absolute top-[32.5%] left-[50%] cursor-pointer shadow-xl shadow-white'
          style={{ transform: 'translate(-50%)' }}
        />
      ) : (
        <div
          onClick={() => showPcModal({ qrCode: 'sf-04' })}
          className='w-[calc(13.4%)] h-[calc(7.7%)] rounded-full flex justify-center items-center text-[18px] font-semibold text-white absolute top-[29.5%] left-[50%] cursor-pointer'
          style={{ transform: 'translate(-50%)' }}
        ></div>
      )}
      <img className='w-full' alt='' src='/_images/image-page/internet-20231023.png' />
      <div className="wrapper appeal-bar">
        <div className="container">
          <FooterBarWithButton 
            contactUsOption={{ qrCode: 'sf-04' }}
          />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', [
        'common',
        'homepage',
        'seos',
        'features',
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default CustomerAcquisitionPage;
