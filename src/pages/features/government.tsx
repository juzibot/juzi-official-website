/* eslint-disable no-unreachable */
// import { useMediaQuery } from '@react-hookz/web';
import { useMediaQuery } from '@react-hookz/web';
import { ContactUsPureModalWithButton } from '@src/components/ContactUsPureModal';
import Seo from '@src/components/common/Seo';
import AppealBarNew from '@src/components/index/AppealBarNew';
import HeroPageNew from '@src/components/index/HeroPageNew';
import LogosWallNew from '@src/components/index/LogosWallNew';
import SolutionPageNew from '@src/components/index/SolutionPageNew';
import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import MobileIndexPage from '../index-mobile';

const Home: NextPage = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const [, setWidth] = useState(0);
  const { t, i18n } = useTranslation('homepage');
  const isZh = i18n.language === 'zh';
  useEffect(() => {
    if (process.browser) {
      window.addEventListener('resize', () =>
        setWidth(document.body.clientWidth)
      );
      setWidth(document.body.clientWidth);
    }
  }, []);

  // if (isSmallDevice) {
  //   return <MobileIndexPage />
  // }
  if (isSmallDevice) {
    return (
      <div className='m-auto relative'>
        <Seo page="features-government" />
        <img className='w-full' alt='' src='/_images/image-page/government-top.png' />
        <div className="logos-wall">
          <div className="container">
            <h1 className="title" style={{fontSize: 20, lineHeight:2, padding: 8}}>{t('logos-wall-title')}</h1> 
            <LogosWallNew />
          </div>
        </div>
        <img className='w-full' style={{marginTop:-94}} alt='' src='/_images/image-page/government-middle.png' />
        <div className="wrapper appeal-bar-new">
          <div className="container !w-[100%]">
            <AppealBarNew isRed />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    { isZh ? (
        <div className="hero-page-new-bg" >
        <div className="hero-page-new" data-aos="fade-in">
          <div className="bannar">
            <h1
              className="slogan max-w-[566px]"
              style={{ fontSize: i18n.language === 'en' ? 36 : 46 }}
            >
              {t('government-title')}
            </h1>
            <div className="description">{t('government-body')}</div>
            <ContactUsPureModalWithButton>
              <button className="white-button-pure start-button bg-white text-red !shadow-none">
                {t('start-free')}
              </button>
            </ContactUsPureModalWithButton>
          </div>
        </div>
      </div>
      ): // English
      <div className="hero-page-new-bg" style={{ background: "linear-gradient(#FE9900, #FE9900)" }}>
      <div className="hero-page-new" data-aos="fade-in">
        <div className="bannar">
          <h1
            className="slogan max-w-[566px]"
            style={{ fontSize: 55, fontFamily: '"Gill Sans", sans-serif' }}
          >
            {t('government-title')}
          </h1>
          <div className="description">{t('government-body')}</div>
          <ContactUsPureModalWithButton>
            <button className="white-button-pure start-button bg-white text-red !shadow-none">
              {t('start-free')}
            </button>
          </ContactUsPureModalWithButton>
        </div>
      </div>
    </div>
      }

      <div className="m-auto">
        <div className="logos-wall">
          <div className="container">
            <h1 className="title" style={{marginLeft:'8vw', marginBottom:-80}}>{t('logos-wall-title')}</h1> 
            </div>
            <LogosWallNew />
            <div className="container"></div>
        </div>
      </div>


      <Seo page="features-government" />
      <div className="wrapper index-page">
        <div className="container" style={{minWidth:1200}}>
          <HeroPageNew />
        </div>
      </div>

      <div className="wrapper solution-page">
        <div className="container" style={{minWidth:1200, marginBottom:20}}>
          <SolutionPageNew />
        </div>
      </div>

      <div className="wrapper appeal-bar-new">
        <div className="container" style={{minWidth:1200}}>
          <AppealBarNew isRed />
        </div>
      </div>
    </>
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
