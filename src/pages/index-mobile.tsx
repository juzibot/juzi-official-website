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
import { LlmLogos } from "@src/components/LlmLogos";

const MobileIndexPage: NextPage<{}> = () => {
  const { t, i18n } = useTranslation('common');
  const isZh = i18n.language === 'zh';
  const [showContactUs, setShowContactUs] = useState(false);
  return (
    <div className="relative">
      <Seo page="homepage" />
      <div className='index-mobile'>
        <img className='w-full' src="/_images/image-page/index-top-bg-m.png" alt='' />
        <div className="absolute top-[2.9%] w-full font-sans">
            {isZh ? (
              <>
              <div className="container">
                <div className="text-center text-[6vw] text-white ml-[1vw] mr-[1vw]">{t('title')}</div>
                <div className="flex text-[5vw] font-medium">
                <span className="w-1/2 flex-shrink-0 text-white text-right mr-[1vw]">{t('subtitle')}</span><Typewriter
                  options={{
                    wrapperClassName: 'text-[5vw] text-[#DA37E8]',
                    cursorClassName: 'text-[#DA37E8]',
                    strings: ["数字销售", "数字 SDR", "数字网格员", "数字民警", "数字电力管家"],
                    autoStart: true,
                    loop: true,
                  }} />
                  </div>
                </div>
                </>
                ) : 
                <>
                <div className="text-center text-[5vw] text-white mt-[calc(2vw)] ml-[1vw] mr-[1vw]">{t('title')}</div>
                <div className="flex text-[4vw] font-medium">
                <span className="w-[40%] flex-shrink-0 text-white text-right mr-[1vw]">{t('subtitle')}</span><Typewriter
                options={{
                  wrapperClassName: 'text-[4vw] text-[#DA37E8]',
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
          <div className='w-full mt-[8vw] flex justify-center'>
            <a
              style={{ background: 'linear-gradient(96deg, #EF3BFB 0.67%, #6721FF 98.48%)' }}
              className="h-[10vw] px-10 flex justify-center items-center rounded-full text-white cursor-pointer text-[3.6vw] hover:text-white"
              href="https://chat.juzibot.com/" rel="noreferrer" target="_blank"
            >
              {t('title-button')}
            </a>
          </div>
          {/* 两个卡片 */}
          <div className="flex flex-col gap-6 justify-center items-center mt-[calc(12vw)]">
            <div className="w-[calc(100vw-60px)] h-[42vw] p-5 rounded-xl bg-black flex flex-col">
              <div className="text-white font-medium mb-[1vw]" style={{ fontSize: i18n.language === 'en' ? 'calc(4vw)' : 'calc(4vw)' }}>{t('try-gpt')}</div>
              <p className="flex-1 text-white" style={{ fontSize: i18n.language === 'en' ? '3vw' : '3vw' }}>{t('try-gpt-subtitle')}</p>
              <a className="text-[#EF3BFB] hover:text-[#EF3BFB] text-[3vw] inline-flex items-center gap-2 cursor-pointer" href="https://chat.juzibot.com/" rel="noreferrer" target="_blank">{t('lets-chat')} <RightArrow /> </a>
            </div>
            <div className="w-[calc(100vw-60px)] h-[42vw] p-5 rounded-xl bg-black flex flex-col">
              <div className="text-white font-medium mb-[1vw]" style={{ fontSize: i18n.language === 'en' ? 'calc(4vw)' : 'calc(4vw)' }}>{t('discover-products')}</div>
              <p className="flex-1 text-white" style={{ fontSize: i18n.language === 'en' ? '3vw' : '3vw' }}>{t('discover-products-subtitle')}</p>
              <ContactUsModalWithButton>
                <span className="text-[#EF3BFB] text-[3vw] inline-flex items-center gap-2 cursor-pointer">{t('contact')} <RightArrow /> </span>
              </ContactUsModalWithButton>
            </div>
          </div>
        </div>
      </div>

      { isZh ? (
        <>
          <img className='w-full' alt='' src="/_images/image-page/index-content-20240516-1-m.png" />
          <div className='relative'>
            <img className='w-full' alt='' src="/_images/image-page/index-content-20240516-2-m.png" />
            <LlmLogos className="absolute bottom-[6.3%] h-[calc(63.5%)] w-[81.2%] right-[7%]" />
          </div>
          <img className='w-full' alt='' src="/_images/image-page/index-content-20240516-3-m.png" />
        </>
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
};

export default MobileIndexPage;
