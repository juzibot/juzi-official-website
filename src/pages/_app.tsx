import type { AppProps } from 'next/app';
import { appWithTranslation, useTranslation } from 'next-i18next';
import 'antd/dist/antd.css';
import '@styles/global.scss';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { logHireInfo } from '@src/utils/hire';
import { useEffect } from 'react';
import Script from 'next/script';
import { ContactButtonNew } from '@src/components/common/ContactButtonNew';
import { useMediaQuery } from '@react-hookz/web';
import HeaderBarMobile from '@src/components/HeaderBarMobile';
import FooterMobile from '@src/components/FooterMobile';
import FooterNew from '@src/components/FooterNew';
import { useRouter } from 'next/router';
// import { setMobileStatusBarColor } from '@src/utils/mobileStatusBar';
import HeaderBar from '@src/components/HeaderBar';
import { HIDE_CONTACT_US } from '@src/config';
// import { juziAnalysis } from '@src/utils/analysis';


const JuziApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { i18n } = useTranslation('common');
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const { pathname } = useRouter();

  useEffect(() => {
    logHireInfo();
    // if (process.browser) {
    //   juziAnalysis();
    // }
  }, []);

  useEffect(() => {
    // if (isSmallDevice) {
    //   setMobileStatusBarColor('#BE1B2D');
    // }
  }, [isSmallDevice]);

  if (pathname === '/_version') {
    return <Component {...pageProps} />
  }

  return (
    <>
      {isSmallDevice ? <HeaderBarMobile /> : <HeaderBar /> }
      <div className={`app ${i18n.language}`}>
        <Component {...pageProps} />
      </div>
      {isSmallDevice ? <FooterMobile /> : <FooterNew />}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-855RJWL7LP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-855RJWL7LP');
        `}
      </Script>
      <Script id="baidu-analytics">
        {`
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?45faeee2378d9d538a057946597526ca";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `}
      </Script>
      {!isSmallDevice && !HIDE_CONTACT_US && <ContactButtonNew />}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', ['common', 'homepage'])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default appWithTranslation(JuziApp);
