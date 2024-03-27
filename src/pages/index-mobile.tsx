/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unreachable */
import { NextPage } from "next";
import Seo from "@src/components/common/Seo";
import { useState } from "react";
import ContactUsModal from "@src/components/ContactUsModal";
import FooterBarWithButton from "@src/components/FooterBarWithButton";
import Typewriter from 'typewriter-effect';
import { RightArrow } from '@src/components/Icon';
import { ContactUsModalWithButton } from '@src/components/ContactUsModal';
import { useTranslation } from 'react-i18next';

const MobileIndexPage: NextPage<{}> = () => {
  const { t, i18n } = useTranslation('common');
  const isZh = i18n.language === 'zh';
  const [showContactUs, setShowContactUs] = useState(false);
  return (
    <div className="text-jz-text-3 relative">
      <Seo page="homepage" />

      <div>
        <img className='w-full' src="/_images/image-page/index-top-bg-m.png" alt='' />
        <div className="absolute top-[80px] w-full font-sans">
          <div className="text-center text-[22px] text-white">{t('title')}</div>
            {isZh ? (
              <>
              <div className="flex text-[22px] font-medium">
              <span className="w-1/2 flex-shrink-0 text-white text-right mr-2">{t('subtitle')}</span><Typewriter
                options={{
                  wrapperClassName: 'text-[22px] text-[#DA37E8]',
                  cursorClassName: 'text-[#DA37E8]',
                  strings: ["数字销售", "数字 SDR", "数字网格员", "数字民警", "数字电力管家"],
                  autoStart: true,
                  loop: true,
                }} />
                </div>
                </>
                ) : 
                <>
                <div className="flex text-[20px] font-medium">
                <span className="w-[40%] flex-shrink-0 text-white text-right mr-2">{t('subtitle')}</span><Typewriter
                options={{
                  wrapperClassName: 'text-[20px] text-[#DA37E8]',
                  cursorClassName: 'text-[#DA37E8]',
                  strings: ["Sales Promotion", "Data Analysis", "Client Management", "Issue Resolution", "Support Center"],
                  autoStart: true,
                  delay: 80,
                  deleteSpeed: 0.8,
                  loop: true,
                }} />
                </div>
                </>
            }
          <div className='w-full mt-8 flex justify-center'>
            <a
              style={{ background: 'linear-gradient(96deg, #EF3BFB 0.67%, #6721FF 98.48%)' }}
              className="h-12 px-10 flex justify-center items-center rounded-full text-white cursor-pointer text-[18px] hover:text-white"
              href="https://chat.juzibot.com/" rel="noreferrer" target="_blank"
            >
              {t('title-button')}
            </a>
          </div>
          {/* 两个卡片 */}
          <div className="flex flex-col gap-5 justify-center items-center mt-10">
            <div className="w-[calc(100vw-60px)] h-[20%] p-5 rounded-xl bg-black flex flex-col">
              <div className="text-white font-medium mb-2" style={{ fontSize: i18n.language === 'en' ? 18 : 20 }}>{t('try-gpt')}</div>
              <p className="flex-1 text-white" style={{ fontSize: i18n.language === 'en' ? 12 : 15 }}>{t('try-gpt-subtitle')}</p>
              <a className="text-[#EF3BFB] hover:text-[#EF3BFB] mt-1 inline-flex items-center gap-2 cursor-pointer" href="https://chat.juzibot.com/" rel="noreferrer" target="_blank">{t('lets-chat')} <RightArrow /> </a>
            </div>
            <div className="w-[calc(100vw-60px)] h-[20%] p-5 rounded-xl bg-black flex flex-col">
              <div className="text-white font-medium mb-2" style={{ fontSize: i18n.language === 'en' ? 18 : 20 }}>{t('discover-products')}</div>
              <p className="flex-1 text-white" style={{ fontSize: i18n.language === 'en' ? 12 : 15 }}>{t('discover-products-subtitle')}</p>
              <ContactUsModalWithButton>
                <span className="text-[#EF3BFB] inline-flex mt-1 items-center gap-2 cursor-pointer">{t('contact')} <RightArrow /> </span>
              </ContactUsModalWithButton>
            </div>
          </div>
        </div>
      </div>

      { isZh ? (
        <img alt="" className='w-full' src="/_images/image-page/index-content-m.png" />
      ): 
        <img alt="" className='w-full' src="/_images/image-page/index-content-m-en.png" />
      }

      <div className="wrapper appeal-bar !px-[16px]">
        <div className="container !w-[100%]">
          <FooterBarWithButton />
        </div>
      </div>
      <ContactUsModal
        open={showContactUs}
        onCancel={() => setShowContactUs(false)}
      />
    </div>
  )
  return (
    <div className="text-jz-text-3 relative">
      <Seo page="homepage" />
      <div className="absolute top-[221px] flex items-center justify-center w-[100%]">
        <a onClick={() => setShowContactUs(true)} target="_blank" className="w-[150px] h-[50px]" style={{ border: 'unset' }}></a>
      </div>
      <img alt="" className='w-full' src="/_images/image-page/index-20231207-m.png" />
      <div className="wrapper appeal-bar !px-[16px]">
        <div className="container !w-[100%]">
          <FooterBarWithButton />
        </div>
      </div>
      <ContactUsModal
        open={showContactUs}
        onCancel={() => setShowContactUs(false)}
      />
    </div>
  );
};

export default MobileIndexPage;
