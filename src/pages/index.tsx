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
import { LlmLogos } from '@src/components/LlmLogos';
import { LlmIntegration } from '@src/components/LlmIntegration';
import cls from 'classnames';

const Home: NextPage = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const [, setWidth] = useState(0);
  const [safeCardIndex, setSafeCardIndex] = useState(0);
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
          <>
            <img className='w-full' alt='' src="/_images/image-page/index-content-20240620-1.png" />
            <LlmIntegration />
            <img className='w-full' alt='' src="/_images/image-page/index-content-20240620-3.png" />
            <div className="relative">
              {/* <img className='w-full' alt='' src="/_images/image-page/index-content-safe-0620.png" /> */}
              <img className='w-full' alt='' src="/_images/image-page/index-content-safe-blank-0620.png" />
              <div className="w-[83.29%] h-[63.1%] absolute left-[8.325%] bottom-[12.06%]">
                <img className={(cls('w-full h-full', safeCardIndex === 0 ? 'block' : 'hidden'))} alt='' src="/_images/image-page/index-content-safe-card1-0620.png" />
                <img className={(cls('w-full h-full', safeCardIndex === 1 ? 'block' : 'hidden'))} alt='' src="/_images/image-page/index-content-safe-card2-0620.png" />
                <img className={(cls('w-full h-full', safeCardIndex === 2 ? 'block' : 'hidden'))} alt='' src="/_images/image-page/index-content-safe-card3-0620.png" />
                <img className={(cls('w-full h-full', safeCardIndex === 3 ? 'block' : 'hidden'))} alt='' src="/_images/image-page/index-content-safe-card4-0620.png" />
                <div className="absolute w-[29%] h-[10%] left-[3.6%] top-[18%] cursor-pointer" onClick={() => setSafeCardIndex(0)} />
                <div className="absolute w-[29%] h-[10%] left-[3.6%] top-[calc(18%+18%)] cursor-pointer" onClick={() => setSafeCardIndex(1)}  />
                <div className="absolute w-[29%] h-[10%] left-[3.6%] top-[calc(18%+36%)] cursor-pointer" onClick={() => setSafeCardIndex(2)}  />
                <div className="absolute w-[29%] h-[10%] left-[3.6%] top-[calc(18%+54%)] cursor-pointer" onClick={() => setSafeCardIndex(3)}  />
              </div>
            </div>
          </>
        ) :
        <>
          <img className='w-full' alt='' src="/_images/image-page/index-content-20240516-en.png" />
          <LlmIntegration />
          <img className='w-full' alt='' src="/_images/image-page/index-logos-title-20240516-en.png" />
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
