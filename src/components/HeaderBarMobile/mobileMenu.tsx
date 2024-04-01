/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ContactUsSimpleModal from '../ContactUsSimpleModal';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const MobileMenu = () => {
  const { t, i18n } = useTranslation('common');
  const isZh = i18n.language === 'zh';
  const [showMenu, setShowMenu] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  return (
    <div className='relative'>
      <ContactUsSimpleModal open={showContactModal} onCancel={() => setShowContactModal(false)} />
      <img
        className='ml-4 w-[20px] h-[20px]'
        src='https://s3.cn-north-1.amazonaws.com.cn/xiaoju-material/public/782f029c-4f82-44ed-ba38-959f5ea573cd/%E6%9B%B4%E5%A4%9A.png'
        alt=''
        onClick={() => setShowMenu(true)}
      />
      {showMenu && createPortal(
        <div
          className='fixed top-[0px] bg-[#fff] z-[100] w-[100%] pt-[16px] overflow-auto'
          style={{ height: 'calc(100% - 20px)' }}
        >
          <div className='relative'>
            <img onClick={() => setShowMenu(false)} className="absolute w-[24px] right-[28px] top-[-12px] cursor-pointer" src="https://s3.cn-north-1.amazonaws.com.cn/xiaoju-material/public/141abebc-9772-4a56-8c38-fe84f8f9c841/close.png" alt="close" />
            <div
              className='mt-[16px] h-[188px] px-[28px]'
              style={{ borderBottom: '1px solid rgba(221, 227, 234, 0.5)' }}
            >
              <div className='text-[17px] leading-[24px] mt-[24px] font-semibold text-[#364256]'>
                {t('products')}
              </div>
              <Link href="/features/ai" passHref>
                <div onClick={() => setShowMenu(false)} className="text-[#364256] w-full text-[16px] mt-[32px] inline-block">
                  {t('products-1')}
                </div>
              </Link>
              <Link href="/features/rpa" passHref>
                <div onClick={() => setShowMenu(false)} className='text-[#364256] w-full text-[16px] mt-[32px] inline-block'>
                {t('products-2')}
                </div>
              </Link>
            </div>
            {isZh ? (
              <div className='flex flex-col px-[28px] pt-[24px] pb-[32px] gap-[32px]'>
              <div className='text-[17px] leading-[24px] mt-[24px] font-semibold text-[#364256]'>
              {t('solutions')}
              </div>
              <Link href="/features/government" passHref>
                <div onClick={() => setShowMenu(false)} className='text-[#364256] w-full text-[16px] inline-block'>
                  政务解决方案
                </div>
              </Link>
              <Link href="/features/internet" passHref>
                <div onClick={() => setShowMenu(false)} className='text-[#364256] w-full text-[16px] inline-block'>
                  互联网解决方案
                </div>
              </Link>
              <Link href="/features/customer" passHref>
                <div onClick={() => setShowMenu(false)} className='text-[#364256] w-full text-[16px] inline-block'>
                  消费品解决方案
                </div>
              </Link>
              </div>
              ): 
              <>
              <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
              <div className='h-[72px] flex items-center px-[28px]'>
                <Link href="/features/customer" passHref>
                  <div onClick={() => setShowMenu(false)} className="w-[100%] text-[17px] text-[#364256]">
                    {t('solutions')}
                  </div>
                </Link>
              </div>
            </>
            }
            <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
            {/* <div className='h-[72px] flex items-center px-[28px]'>
              <Link href="/features/case" passHref>
                <div onClick={() => setShowMenu(false)} className='w-[100%] text-[17px] text-[#364256]'>
                  客户案例
                </div>
              </Link>
            </div> */}
            {isZh ? (
              <>
              <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
              <div className='h-[72px] flex items-center px-[28px]'>
                <a href="/chatbot/practice-guide" rel="noreferrer" target="_self" className='w-[100%] text-[17px] text-[#364256]'>{t('chatbot')}</a>
              </div>
              <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
              <div className='h-[72px] flex items-center px-[28px]'>
                <a href="https://juzibot.com/blog/" rel="noreferrer" target="_blank" className='w-[100%] text-[17px] text-[#364256]'>{t('course')}</a>
              </div>
              </>
            ) : null }
            <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
            <div className='h-[72px] flex items-center px-[28px]'>
              <a href="https://wechaty.js.org/" rel="noreferrer" target="_blank" className='w-[100%] text-[17px] text-[#364256]'>{t('developer')}</a>
            </div>
            <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
            <div className='h-[72px] flex items-center px-[28px]'>
              <a href="https://chat.juzibot.com/" rel="noreferrer" target="_blank" className='w-[100%] text-[17px] text-[#364256]'>
                {t('gpt')}
              </a>
            </div>
            <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
            <div className='h-[72px] flex items-center px-[28px]'>
              <Link href="/about-us-m" passHref>
                <div onClick={() => setShowMenu(false)} className='w-[100%] text-[17px] text-[#364256]'>
                  {t('about')}
                </div>
              </Link>
            </div>
            {isZh ? (
              <>
              <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
              <div className='h-[72px] flex items-center px-[28px]'>
                <Link href="/culture-m" passHref>
                  <div onClick={() => setShowMenu(false)} className='w-[100%] text-[17px] text-[#364256]'>
                    {t('about-culture')}
                  </div>
                </Link>
              </div>
              </>
            ) : null }
            <div className="h-[1px] bg-[rgba(221,227,234,0.5)]" />
            <div className='h-[35px]' />
          </div>
        </div>,
        document.getElementsByTagName('body')[0]
      )}
    </div>
  );
};

export default MobileMenu;
