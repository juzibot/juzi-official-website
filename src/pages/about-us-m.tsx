/* eslint-disable @next/next/no-html-link-for-pages */
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const ContactUsM: NextPage = () => {
  const { i18n } = useTranslation('about-us');
  const isZh = i18n.language === 'zh';
  return (
    <div className='m-auto relative'>
      {isZh ? (
        <>
          <img className='w-full' alt='' src='/_images/image-page/about-us-20240524-m.png' />
          <a
            className="w-[44%] h-[1.3%] absolute top-[62.53%] left-[27.8%]"
            href='/chatbot/practice-guide'
          />
        </>
        ): 
          <img className='w-full' alt='' src='/_images/image-page/about-us-20220207-m-en.png' />
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
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default ContactUsM;
