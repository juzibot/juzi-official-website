import { ISolutionItemProp } from '@src/interfaces';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Aos from 'aos';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const SolutionItem: NextPage<ISolutionItemProp> = ({
  imagePosition,
  imageUrl,
  title,
  dividerUrl,
  brief,
  style,
}) => {
  useEffect(() => {
    if (process.browser) {
      Aos.init({
        offset: 120,
        duration: 800,
      });
    }
  }, []);
  return (
    <div
      className="solution-item"
      style={{
        flexDirection: imagePosition === 'left' ? 'row' : 'row-reverse',
      }}
      data-aos="fade-in"
    >
      <Image
        className="solution-image"
        src={imageUrl}
        alt={title}
        draggable="false"
        width="560"
        height="448"
      ></Image>
      <div className="solution-content" style={style}>
        <div
          className="title"
          style={{ backgroundImage: `url(${dividerUrl})` }}
        >
          {title}
        </div>
        <div className="brief">{brief}</div>
      </div>
    </div>
  );
};

const SolutionPage: NextPage = () => {
  const { t, i18n } = useTranslation(['homepage']);
  useEffect(() => {
    if (process.browser) {
      Aos.init({
        offset: 120,
        duration: 800,
      });
    }
  }, []);
  return (
    <>
      <h1 className="title" data-aos="fade-in">
        {t('solution-card-title')}
      </h1>

      <div className="solution-groups">
        <SolutionItem
          title={t('solution-card-1-title')}
          brief={t('solution-card-1-subtitle')}
          imagePosition="left"
          imageUrl="https://cdn-official-website.juzibot.com/images/solution-05-divider.svg"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-03-divider.svg"
          style={{ transform: 'translateY(-30px)' }}
        />

        <SolutionItem
          title={t('solution-card-2-title')}
          brief={t('solution-card-2-subtitle')}
          imagePosition="right"
          imageUrl="https://cdn-official-website.juzibot.com/images/solution-06-divider.svg"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-02-divider.svg"
          style={{ transform: 'translateY(-51px)' }}
        />

        <SolutionItem
          title={t('solution-card-3-title')}
          brief={t('solution-card-3-subtitle')}
          imagePosition="left"
          imageUrl="https://cdn-official-website.juzibot.com/images/solution-07-divider.svg"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-03-divider.svg"
          style={{ transform: 'translateY(-42px)' }}
        />

        <SolutionItem
          title={t('solution-card-4-title')}
          brief={t('solution-card-4-subtitle')}
          imagePosition="right"
          imageUrl="https://cdn-official-website.juzibot.com/images/solution-08-divider.svg"
          dividerUrl="https://cdn-official-website.juzibot.com/images/solution-04-divider.svg"
          style={{ transform: i18n.language === 'en' ? 'translateY(-20px)' : 'translateY(-62px)' }}
        />
      </div>
    </>
  );
};

export default SolutionPage;
