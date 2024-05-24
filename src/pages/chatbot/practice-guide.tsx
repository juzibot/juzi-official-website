/* eslint-disable no-unreachable */
import { isBrowserChrome } from '@src/utils/isBrowserChrome';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import Seo from '@src/components/common/Seo';
import { useMediaQuery } from '@react-hookz/web';
import FooterBarWithButton from '@src/components/FooterBarWithButton';
import { PureModalInfoNoContent } from '@src/components/PureModal';
import Link from 'next/link';

const PracticeGuidePage: NextPage = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const [, toggleChrome] = useState(true);
  useEffect(() => {
    toggleChrome(isBrowserChrome());
  }, []);

  const showModal = () => {
    PureModalInfoNoContent({
      width: 512,
      content: (
        <div
          style={{ background: 'linear-gradient(180deg, rgba(102, 71, 255, 0.09) 0.13%, rgba(5, 85, 255, 0.00) 99.8%), #FFF' }}
          className="h-[480px] flex flex-col items-center justify-center gap-4" 
        >
          <img className="h-[190px] w-[190px]" alt='' src="/_images/image-page/practice-guide-qrcode.jpeg" />
          <div className="text-[#333] text-[21px] font-semibold">
            扫码领取
            <span className="text-[#FC790D] text-[32px] ml-1">5</span>
            <span className="text-[#FC790D] text-[21px] mr-1">折</span>
            优惠链接
          </div>
          <div className="text-[#666] text-[15px]">立即扫码联系我吧!</div>
        </div>
      )
    })
  }

  if (isSmallDevice) {
    return (
      <div className='m-auto'>
        <Seo page="features-ai" />
        <div className="relative">
          <img className='w-full' alt='' src="/_images/image-page/practice-guide-content-0524-1-m.png" />
          <img className='w-full' alt='' src="/_images/image-page/practice-guide-content-0524-2-m.png" />
          <img className='w-full' alt='' src="/_images/image-page/practice-guide-content-0524-3-m.png" />

          <div className="absolute w-full top-[5.10%] flex justify-center">
            <div className="bg-white flex items-center rounded-full border border-solid border-[#C8D4E0]">
              <div className="flex flex-col justify-end items-end pl-4 pr-2 gap-0">
                <div className="text-[#AAB9CA] line-through text-[10px] leading-[1]">原价￥119</div>
                <div className="text-[#FC790D] font-medium text-[13px]">句子互动专属优惠价：￥59.5[5折]</div>
              </div>
              <div
                className="h-[44px] px-[26px] bg-[#0555FF] rounded-full font-semibold text-[16px] text-white flex justify-start items-center cursor-pointer"
                style={{ boxShadow: '0px 35px 50px -15px rgba(52, 128, 239, 0.30)' }}
                onClick={showModal}
              >
                立即购买
              </div>
            </div>
          </div>

          <div className="absolute w-full top-[13.90%] flex justify-center">
            <Link passHref href='/features/ai'>
              <div
                className="w-[calc(100vw-90px)] h-[40px] border border-solid border-[#0555FF] rounded-full px-6 text-[#0555FF] text-[16px] flex justify-center items-center font-medium cursor-pointer"
              >
                了解句子互动AI产品
              </div>
            </Link>
          </div>
        </div>
        <div className="wrapper appeal-bar">
          <div className="container !w-[100%]">
            <FooterBarWithButton
              contactUsOption={{ type: 'ai', qrCode: 'sf-02' }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='m-auto'>
      <Seo page="features-ai" />
      <div className="relative">
        <img className='w-full' alt='' src="/_images/image-page/practice-guide-content-0.png" />

        <div
          className="w-[13%] h-[4vw] min-h-[56px] absolute top-[41.5%] left-[64.5%] cursor-pointer"
          onClick={showModal}
        />

        <Link passHref href='/features/ai'>
          <div className="w-[14.3%] h-[2.9vw] min-h-[42px] absolute top-[80.2%] left-[75.3%] cursor-pointer"/>
        </Link>
      </div>

      <img className='w-full' alt='' src='/_images/image-page/practice-guide-content-0524-1.png' />
      <img className='w-full' alt='' src='/_images/image-page/practice-guide-content-0524-2.png' />
      <img className='w-full' alt='' src='/_images/image-page/practice-guide-content-0524-3.png' />
      <div className="wrapper appeal-bar">
        <div className="container">
          <FooterBarWithButton
            contactUsOption={{ type: 'ai', qrCode: 'sf-02' }}
          />
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
        'features',
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default PracticeGuidePage;
