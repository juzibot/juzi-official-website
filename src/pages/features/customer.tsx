/* eslint-disable no-unreachable */
import { useMediaQuery } from '@react-hookz/web';
import ContactUsModal, { ContactUsModalWithButton } from '@src/components/ContactUsModal';
import FooterBarWithButton from '@src/components/FooterBarWithButton';
import Seo from '@src/components/common/Seo';
import { useShowModal } from '@src/utils/showModal';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroPageNew from '@src/components/index/HeroPageNew';
import SolutionPageNew from '@src/components/index/SolutionPageNew';
import LogosWallNew from '@src/components/index/LogosWallNew';
import { HIDE_CONTACT_US } from '@src/config';

const CustomerAcquisitionPage: NextPage = () => {
  const { t, i18n } = useTranslation('homepage');
  const isZh = i18n.language === 'zh';
  const [showModal, setShowModal] = useState(false);
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const showPcModal = useShowModal();
  if (isSmallDevice) {
    return (
      <div className='m-auto relative'>
        <Seo page="features-customer" />
        { isZh ? (
          <>
          <img className='w-full' alt='' src='/_images/image-page/customer-0-no-button.png' />
          {!HIDE_CONTACT_US &&(
            <div
              onClick={() => setShowModal(true)}
              className='bg-[#0555FF] text-white w-[calc(41%)] h-[48px] rounded-full flex justify-center items-center text-[18px] font-semibold absolute top-[25.6%] left-[48.9%] cursor-pointer'
              style={{ transform: 'translate(-50%)', boxShadow: '0px 35px 50px -15px rgba(52, 128, 239, 0.30)' }}
            >获取解决方案</div>
          )}

          <div className="wrapper appeal-bar">
              <div className="container !w-[100%]">
                <FooterBarWithButton
                  contactUsOption={{ qrCode: 'sf-04' }} />
              </div>
            </div><ContactUsModal
              qrCode='sf-04'
              open={showModal}
              onCancel={() => setShowModal(false)} />
          </>
        ): // English mobile
          <>
          <img className='w-full' alt='' src='/_images/image-page/customer-top-en.png'/><div>
          <div className="logos-wall">
            <div className="container">
              <h1 className="title" style={{fontSize: 20, lineHeight:2, padding: 8}}>{t('logos-wall-title')}</h1> 
              <LogosWallNew />
            </div>
          </div>
          <img className='w-full' style={{marginBottom:30, marginTop:-94}} alt='' src='/_images/image-page/customer-middle-en.png'/></div>
            <div className="wrapper appeal-bar">
              <div className="container !w-[100%]">
                <FooterBarWithButton
                  contactUsOption={{ qrCode: 'sf-04' }} />
              </div>
            </div><ContactUsModal
              qrCode='sf-04'
              open={showModal}
              onCancel={() => setShowModal(false)} />
          </>
        } 
      </div>
    );
  }

  return (
    <div className='m-auto relative'>
      <Seo page="features-customer" />
      { isZh ? (
        <>
      {HIDE_CONTACT_US ? (
        <div
          className='bg-white w-[calc(13.4%)] h-[calc(12.8%)] rounded flex justify-center items-center text-[18px] font-semibold text-white absolute top-[32.5%] left-[50%] cursor-pointer shadow-lg shadow-white'
          style={{ transform: 'translate(-50%)' }}
        />
      ) : (
        <div
          onClick={() => showPcModal({ qrCode: 'sf-04' })}
          className=' text-white w-[calc(13.4%)] h-[calc(10.7%)] rounded-full flex justify-center items-center text-[18px] font-semibold absolute top-[28.5%] left-[50%] cursor-pointer'
          style={{ transform: 'translate(-50%)' }}
        />
      )}
        <img className='w-full' alt='' src='/_images/image-page/customer-0.svg' /><div className="wrapper appeal-bar">
            <div className="container">
              <FooterBarWithButton
                contactUsOption={{ qrCode: 'sf-04' }} />
            </div>
          </div>
        </>
      ): // English
        <>
        <div
          onClick={() => showPcModal({ qrCode: 'sf-04' })}
          className='w-[calc(15%)] h-[calc(8.25%)] rounded-full flex justify-center items-center text-[18px] font-semibold text-white absolute top-[28.7%] left-[50%] cursor-pointer'
          style={{ transform: 'translate(-50%)' }}
        ></div>   

        <div className="hero-page-new-bg" style={{ background: "linear-gradient(#FF8000, #FF8000)" }}>
            <div className="hero-page-new" data-aos="fade-in">
              <div className="bannar">
                <h1
                  className="slogan max-w-[566px]"
                  style={{ fontSize: 55, fontFamily: '"Gill Sans", sans-serif' }}
                >
                  {t('government-title')}
                </h1>
                <div className="description">{t('government-body')}</div>
                {!HIDE_CONTACT_US && (
                  <ContactUsModalWithButton>
                    <button className="white-button-pure-en start-button !shadow-none">
                      {t('start-free')}
                    </button>
                  </ContactUsModalWithButton>
                )}
              </div>
            </div>
          </div>

          <div className="m-auto">
            <div className="logos-wall">
              <div className="container" style={{marginLeft:60}}>
                <h1 className="title">{t('logos-wall-title')}</h1> 
                <LogosWallNew />
              </div>
            </div>
          </div>
      
          <div className="wrapper index-page">
            <div className="container" style={{minWidth:1200}}>
              <HeroPageNew />
            </div>
          </div>

          <div className="wrapper solution-page">
            <div className="container" style={{marginBottom:20, minWidth:1200}}>
              <SolutionPageNew />
            </div>
          </div>

          <div className="wrapper appeal-bar">
            <div className="container" style={{minWidth:1200}}>
              <FooterBarWithButton
                contactUsOption={{ qrCode: 'sf-04' }} />
            </div>
          </div>
        </>
      }
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
