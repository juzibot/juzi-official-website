import { isBrowserChrome } from '@src/utils/isBrowserChrome';
import { GetServerSideProps, NextPage } from 'next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { FeatureHeroPage } from '@src/components/features/FeatureHeroPage';
import { FeatureDescription } from '@src/components/features/FeatureDescription';
import { FeatureAppealBar } from '@src/components/features/FeatureAppealBar';
import AppealBar from '@src/components/index/AppealBar';
import FeatureBar from '@src/components/features/FeatureBar';
import Seo from '@src/components/common/Seo';
import { useTranslation } from 'react-i18next';

const SopPage: NextPage = () => {
  const [isChrome, toggleChrome] = useState(true);
  useEffect(() => {
    toggleChrome(isBrowserChrome());
  }, []);
  const { t } = useTranslation('features', {
    keyPrefix: 'sop',
  });
  return (
    <>
      <Seo page="feature-sop" />
      <div className="wrapper feature sop">
        <div className={`bg ${!isChrome && 'moz'}`}></div>
        <div
          className="container"
          style={{
            backgroundImage: `url('https://cdn-official-website.juzibot.com/images/feat-06.png')`,
          }}
        >
          <FeatureHeroPage
            title={t('title')}
            brief={t('subtitle')}
            docsUrl="https://k0auuqcihb.feishu.cn/docs/doccnJMlpBUC1NAHW7ujCXVxaUB#nvwxlQ"
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-08.png',
                title: '1000%',
                subtitle: t('table-title-1'),
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-09.png',
                title: '80%',
                subtitle: t('table-title-2'),
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/ca-10.png',
                title: '500%',
                subtitle: t('table-title-3'),
              },
            ]}
          />
        </div>
      </div>

      <div className="wrapper feature-description">
        <div className="container">
          <FeatureDescription
            firstTitle={t('description-title')}
            firstSubtitle={t('discription-subtitle')}
            secondTitle={t('discription-second-title')}
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/sop-04.svg',
                title: t('data-title-1'),
                subtitle: t('data-subtitle-1'),
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/sop-05.svg',
                title: t('data-title-2'),
                subtitle: t('data-subtitle-2'),
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/sop-06.svg',
                title: t('data-title-3'),
                subtitle: t('data-subtitle-3'),
              },
            ]}
            photo="https://cdn-official-website.juzibot.com/images/icons/features/sop-07.png"
            photoPosition="left"
          />
        </div>
      </div>

      <div className="wrapper feature-appeal">
        <div className="container">
          <FeatureAppealBar
            title={t('appeal-title')}
            datas={[
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/sop-08.png',
                title: t('appeal-title-1'),
                subtitle: t('appeal-subtitle-1'),
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/sop-09.png',
                title: t('appeal-title-2'),
                subtitle: t('appeal-subtitle-2'),
              },
              {
                icon: 'https://cdn-official-website.juzibot.com/images/icons/features/sop-10.png',
                title: t('appeal-title-3'),
                subtitle: t('appeal-subtitle-3'),
              },
            ]}
          />
        </div>
      </div>

      <div className="wrapper feature-bar">
        <div className="container">
          <h1>{t('more-features')}</h1>
          <FeatureBar hideTitle="精准触达" />
        </div>
      </div>

      <div className="wrapper appeal-bar">
        <div className="container">
          <AppealBar />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  locale;
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
  // return {
  //   props: {
  //     ...(await serverSideTranslations(locale || 'zh', [
  //       'common',
  //       'homepage',
  //       'seos',
  //       'features',
  //     ])),
  //     locale: locale?.toLowerCase() ?? 'zh',
  //   },
  // };
};

export default SopPage;
