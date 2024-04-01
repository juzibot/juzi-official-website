/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { useMediaQuery } from '@react-hookz/web';
import Seo from '@src/components/common/Seo';
import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MobileIndexPage from './index-mobile';
import { useShowModal } from '@src/utils/showModal';
import FooterBarWithButton from '@src/components/FooterBarWithButton';
import Typewriter from 'typewriter-effect';
import { RightArrow } from '@src/components/Icon';
import { ContactUsModalWithButton } from '@src/components/ContactUsModal';
import LogosWallNew from '../components/index/LogosWallNew';

const Home: NextPage = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const [, setWidth] = useState(0);
  useEffect(() => {
    if (process.browser) {
      window.addEventListener('resize', () =>
        setWidth(document.body.clientWidth)
      );
      setWidth(document.body.clientWidth);
    }
  }, []);

  const { t, i18n } = useTranslation('common');
  const isZh = i18n.language === 'zh';
  const showModal = useShowModal();

  if (isSmallDevice) {
    return <MobileIndexPage />;
  }

  return (
    <div className={i18n.language}>
      <Seo page="homepage" />
      <div
        style={{ backgroundImage: 'url(/_images/image-page/index-top-bg-3.png)'}}
        className="h-[calc(100vh-0px)] bg-cover flex justify-center items-center"
        
      >
        <div className="flex flex-col justify-center items-center mt-[180px]">
            {/* <img src="/_images/image-page/index-top-logo.png" alt='' className='w-[1200px]' /> */}
            {/* 文字+按钮 */}
            {isZh ? (
              <div className="w-full font-sans">
              <div className="text-center text-[56px] text-white">{t('title')}</div>
                <div className="flex text-[65px] font-medium">
                  <span className="w-1/2 flex-shrink-0 text-white text-right">{t('subtitle')}</span>
                  <Typewriter
                    options={{
                      wrapperClassName: 'text-[65px] text-[#DA37E8]',
                      cursorClassName: 'text-[#DA37E8]',
                      strings: ["数字销售", "数字 SDR", "数字网格员", "数字民警", "数字电力管家"],
                      autoStart: true,
                      loop: true,
                    }}/>
                </div>            
                <div className='w-full mt-8 flex justify-center'>
                  <a
                    style={{ background: 'linear-gradient(96deg, #EF3BFB 0.67%, #6721FF 98.48%)' }}
                    className="rounded-full px-10 py-4 text-white cursor-pointer text-[18px] hover:text-white"
                    href="https://chat.juzibot.com/" rel="noreferrer" target="_blank"
                  >
                    {t('title-button')}
                  </a>
                </div>
              </div>
            ) : // English
              <div className="w-full">
              <div className="text-center font-semibold text-[55px] text-white" style={{ fontFamily: '"Gill Sans", sans-serif' }}>{t('title-1')}</div>
              <div className="text-center font-semibold text-[65px] text-white mb-2" style={{ fontFamily: '"Gill Sans", sans-serif' }}>{t('title-2')}</div>
                <div className="flex text-[50px] font-sans">
                  <span className="w-[45%] flex-shrink-0 text-white text-right mr-4">{t('subtitle')}</span>
                  <Typewriter
                    options={{
                      wrapperClassName: 'text-[50px] text-[#DA37E8]',
                      cursorClassName: 'text-[#DA37E8]',
                      delay: 80,
                      deleteSpeed: 0.8,
                      strings: ["Sales Promotion", "Data Analysis", "Client Management", "Issue Resolution", "Support Center"],
                      autoStart: true,
                      loop: true,
                    }}/>
                </div>            
                <div className='w-full mt-4 flex justify-center'>
                  <a
                    style={{ background: 'linear-gradient(96deg, #EF3BFB 0.67%, #6721FF 98.48%)' }}
                    className="rounded-full px-10 py-4 text-white cursor-pointer text-[18px] hover:text-white"
                    href="https://chat.juzibot.com/" rel="noreferrer" target="_blank"
                  >
                    {t('title-button')}
                  </a>
                </div>
              </div>
            }

            

            {/* 两个卡片 */}
            <div className="flex gap-6 justify-center mt-[50px]">
              <div className="w-[400px] h-[170px] p-5 rounded-xl bg-black flex flex-col">
                <div className="text-white text-[21px] font-medium mb-2">{t('try-gpt')}</div>
                <p className="flex-1 text-white">{t('try-gpt-subtitle')}</p>
                <a className="text-[#EF3BFB] hover:text-[#EF3BFB] mt-2 inline-flex items-center gap-2 cursor-pointer" href="https://chat.juzibot.com/" rel="noreferrer" target="_blank">{t('lets-chat')} <RightArrow /> </a>
              </div>
              <div className="w-[400px] h-[170px] p-5 rounded-xl bg-black flex flex-col">
                <div className="text-white text-[21px] font-medium mb-2">{t('discover-products')}</div>
                <p className="flex-1 text-white">{t('discover-products-subtitle')}</p>
                <ContactUsModalWithButton contactUsOption={{ type: 'ai', qrCode: 'sf-02' }}>
                  <span className="text-[#EF3BFB] mt-2 inline-flex items-center gap-2 cursor-pointer">{t('contact')} <RightArrow /> </span>
                </ContactUsModalWithButton>
              </div>
            </div>
        </div>
      </div>
      <div>
        {isZh ? (
        <img className='w-full' alt='' src="/_images/image-page/index-content.png"/>
        ) :
        <><img className='w-full' alt='' src="/_images/image-page/index-content-en.png" />
          <LogosWallNew />
        </>
        }
      </div>
      <div className="wrapper appeal-bar">
        <div className="container">
          <FooterBarWithButton />
        </div>
      </div>
    </div>
  )

  return (
    <div className={i18n.language}>
      <Seo page="homepage" />
      <div className='m-auto pt-[60px]'>
        <div className='relative'>
          <img className='w-full' alt='' src="_images/image-page/index-20231207.png" />
          <a
            // href="https://insight.juzibot.com/"
            onClick={() =>{ showModal({}) }}
            target="_blank"
            rel="noreferrer"
            className="w-[calc(11%)] h-[calc(3.25%)] rounded-full flex justify-center items-center text-[18px] font-semibold text-white absolute top-[19.4%] left-[50%] cursor-pointer"
            style={{ transform: 'translate(-50%)' }}
          >
          </a>
        </div>
        <div className="wrapper appeal-bar">
          <div className="container">
            <FooterBarWithButton />
          </div>
        </div>
      </div>
    </div>
  );

  // 旧的
  return (
    <div className={i18n.language}>
      <Seo page="homepage" />
      <div className='m-auto pt-[60px]'>
        <div className='relative'>
          <img className='w-full' alt='' src="_images/image-page/index-20231207.png" />
          <a
            // href="https://insight.juzibot.com/"
            onClick={() =>{ showModal({}) }}
            target="_blank"
            rel="noreferrer"
            className="w-[calc(11%)] h-[calc(3.25%)] rounded-full flex justify-center items-center text-[18px] font-semibold text-white absolute top-[19.4%] left-[50%] cursor-pointer"
            style={{ transform: 'translate(-50%)' }}
          >
          </a>
        </div>
        <div className="wrapper appeal-bar">
          <div className="container">
            <FooterBarWithButton />
          </div>
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
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default Home;
