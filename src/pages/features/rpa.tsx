/* eslint-disable no-unreachable */
import { isBrowserChrome } from '@src/utils/isBrowserChrome';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import Seo from '@src/components/common/Seo';
import { useMediaQuery } from '@react-hookz/web';
import FooterBarWithButton from '@src/components/FooterBarWithButton';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

const CustomerAcquisitionPage: NextPage = () => {
  const { t, i18n } = useTranslation('common');
  const isZh = i18n.language === 'zh';
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const [, toggleChrome] = useState(true);
  useEffect(() => {
    toggleChrome(isBrowserChrome());
  }, []);
  // if (isSmallDevice) {
  //   return (
  //     <div className='m-auto'>
  //       <Seo page="features-rpa" />
  //       <img className='w-full' alt='' src='/_images/image-page/rpa-0.png' />
  //       <div className="wrapper appeal-bar">
  //         <div className="container !w-[100%]">
  //         <FooterBarWithButton
  //           contactUsOption={{ type: 'rpa', qrCode: 'sf-03' }}
  //         />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  if (isSmallDevice) {
    return (
      <div className='m-auto'>
        <Seo page="features-rpa" />
        <div className="relative">
        { isZh ? (
          <img className='w-full' alt='' src="/_images/image-page/rpa-top-20240920-m.png"/>
        ) : 
          <img className='w-full' alt='' src="/_images/image-page/rpa-top-20240206-m-en.png"/>
        }
          <div className="absolute top-0 h-[200px] w-full flex justify-center items-center">
            {/* 文字 */}
            { isZh ? (
            <div className="w-full font-sans">
              <div className="text-center text-[4.5vw] text-block">{t('rpa-title')}</div>
              <div className="flex text-[7vw] font-medium">
                <span className="w-1/2 flex-shrink-0 text-block text-right">{t('rpa-subtitle')}</span>
                <Typewriter
                  options={{
                    wrapperClassName: 'text-[7vw] text-[#0555FF]',
                    cursorClassName: 'text-[#0555FF]',
                    strings: ['微信客服', '微信公众号', '小程序', 'WhatsApp', '飞书', '5G消息', '小红书', '抖音'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            ) : 
            <div className="w-full font-sans">
              <div className="text-center text-[4.2vw] text-block">{t('rpa-title')}</div>
              <div className="flex text-[5vw] font-medium">
                <span className="w-[67%] flex-shrink-0 text-block text-right mr-[2vw]">{t('rpa-subtitle')}</span>
                <Typewriter
                  options={{
                    wrapperClassName: 'text-[5vw] text-[#0555FF]',
                    cursorClassName: 'text-[#0555FF]',
                    strings: ['WeCom', 'WeChat', 'WhatsApp', 'Lark', '5G SMS', 'Instagram', 'TikTok'],
                    delay: 80,
                    deleteSpeed: 0.8,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            }
          </div>
        </div>
        { isZh ? (
        <img className='w-full' alt='' src='/_images/image-page/rpa-middle-20240920-m.png' />
        ): 
        <img className='w-full' alt='' src='/_images/image-page/rpa-middle-20240206-m-en.png' />
        }
        <div className="wrapper appeal-bar">
          <div className="container !w-[100%]">
            <FooterBarWithButton
              contactUsOption={{ type: 'rpa', qrCode: 'sf-03' }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='m-auto'>
      <Seo page="features-rpa" />
      <div className="relative">
      { isZh ? (
        <img className='w-full' alt='' src="/_images/image-page/rpa-top-20240920.png"/>
      ):
        <img className='w-full' alt='' src="/_images/image-page/rpa-top-20240206-en.png"/>
      }
        <div className="absolute top-10 h-[50vh] w-full flex justify-center items-center">
          {/* 文字 */}
          { isZh ? (
          <div className="w-full font-sans">
            <div className="text-center text-[56px] text-block">{t('rpa-title')}</div>
            <div className="flex text-[65px] font-medium">
              <span className="w-1/2 flex-shrink-0 text-block text-right">{t('rpa-subtitle')}</span>
              <Typewriter
                options={{
                  wrapperClassName: 'text-[65px] text-[#0555FF]',
                  cursorClassName: 'text-[#0555FF]',
                  strings: ['微信客服', '微信公众号', '小程序', 'WhatsApp', '飞书', '5G消息', '小红书', '抖音'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          ): // English
          <div className="w-full font-sans">
            <div className="text-center text-[56px] text-block">{t('rpa-title')}</div>
            <div className="flex text-[65px] font-medium">
              <span className="w-[68%] flex-shrink-0 text-block text-right mr-4">{t('rpa-subtitle')}</span>
              <Typewriter
                options={{
                  wrapperClassName: 'text-[65px] text-[#0555FF]',
                  cursorClassName: 'text-[#0555FF]',
                  strings: ['WeCom', 'WeChat', 'WhatsApp', 'Lark', '5G SMS', 'Instagram', 'TikTok'],
                  delay: 80,
                  deleteSpeed: 0.8,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          }
        </div>
      </div>
      { isZh ? (
      <img className='w-full' alt='' src='/_images/image-page/rpa-middle-20240920.png' />
      ): 
      <img className='w-full' alt='' src='/_images/image-page/rpa-middle-20240206-en.png' style={{marginTop:-250}} />
      }
      <div className="wrapper appeal-bar">
        <div className="container">
          <FooterBarWithButton
            contactUsOption={{ type: 'rpa', qrCode: 'sf-03' }}
          />
        </div>
      </div>
    </div>
  )

  // 旧的
  return (
    <div className='m-auto'>
      <Seo page="features-rpa" />
      <img className='w-full mt-[72px]' alt='' src='/_images/image-page/rpa-00.jpg' />
      <div className="wrapper appeal-bar">
        <div className="container">
          <FooterBarWithButton
            contactUsOption={{ type: 'rpa', qrCode: 'sf-03' }}
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
