import { getPageDescription } from '@src/utils/seo';
import { NextPage } from 'next';
import { NextSeo, NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const Seo: NextPage<NextSeoProps & { page?: string; keywords?: string }> = (
  props
) => {
  const { t } = useTranslation(['seos']);
  const { page } = props;
  const router = useRouter();
  return (
    <>
      <NextSeo
        {...props}
        {...(page ? { title: t(`${page}-title`) } : null)}
        description={getPageDescription(router.asPath) || t('description')}
        openGraph={{
          title: page ? t(`${page}-title`) : t('homepage-title'),
          type: 'website',
          url: 'https://juzibot.com/',
          site_name: '句子互动 JuziBot',
          images: [
            {
              url: 'https://cdn-official-website.juzibot.com/images/logo@192.png',
              width: 192,
              height: 192,
            },
            {
              url: 'https://cdn-official-website.juzibot.com/images/logo@256.png',
              width: 256,
              height: 256,
            },
            {
              url: 'https://cdn-official-website.juzibot.com/images/logo@512.png',
              width: 512,
              height: 512,
            },
          ],
        }}
      />
    </>
  );
};

export default Seo;
