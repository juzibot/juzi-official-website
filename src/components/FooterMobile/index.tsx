import { IFooterMenu, IFriendLink } from '@src/interfaces';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import cx from '@src/utils/cx';
import { Button, Collapse } from 'antd';
import styles from './index.module.scss';
import { CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useSessionStorageValue } from '@react-hookz/web';
import ContactForm from '../ContactForm';
import { ContactUsModalWithButton } from '../ContactUsModal';
import cls from 'classnames';
import { HIDE_CONTACT_US } from '@src/config';

const { Panel } = Collapse;
const FooterMobile: NextPage = () => {
  const { t, i18n } = useTranslation(['common']);

  const [isCloseFixed, setIsCloseFixed] = useSessionStorageValue<boolean>('isCloseFixed');
  const [isScanQrcode, setIsScanQrcode] = useState(true);
  const isZh = i18n.language === 'zh';

  const menus: (IFooterMenu | undefined)[] = [
    {
      title: t('footer-menu-1-title'),
      child: [
        {
          title: t('footer-menu-1-1-title'),
          url: '/features/customer-acquisition',
        },
        { title: t('footer-menu-1-2-title'), url: '/features/sop' },
        {
          title: t('footer-menu-1-3-title'),
          url: '/features/contact-platform',
        },
        { title: t('footer-menu-1-4-title'), url: '/features/data-center' },
      ].concat(
        isZh
          ? [
            {
              title: t('footer-menu-1-5-title'),
              url: '/features/management',
            },
            { title: t('footer-menu-1-6-title'), url: '/features/security' },
          ]
          : []
      ),
    },
    isZh
      ? {
        title: t('footer-menu-2-title'),
        child: [
          { title: t('footer-menu-2-1-title'), url: '/solutions/general' },
          { title: t('footer-menu-2-2-title'), url: '/solutions/increase' },
          { title: t('footer-menu-2-3-title'), url: '/solutions/operate' },
          {
            title: t('footer-menu-2-4-title'),
            url: '/solutions/customer-service',
          },
          {
            title: t('footer-menu-2-5-title'),
            url: '/solutions/consumer-goods',
          },
          { title: t('footer-menu-2-6-title'), url: '/solutions/education' },
          { title: t('footer-menu-2-7-title'), url: '/solutions/finance' },
          { title: t('footer-menu-2-8-title'), url: '/solutions/health' },
        ],
      }
      : undefined,
    {
      title: t('footer-menu-3-title'),
      child: [
        // {
        //   title: t('footer-menu-3-1-title'),
        //   url: 'https://k0auuqcihb.feishu.cn/docs/doccnJMlpBUC1NAHW7ujCXVxaUB',
        // },
        // { title: t('footer-menu-3-2-title'), url: 'https://docs.juzibot.com/' },
        { title: t('footer-menu-3-3-title'), url: 'https://wechaty.js.org/' },
        { title: t('footer-menu-3-4-title'), url: '/cases' },
        { title: t('footer-menu-3-5-title'), url: 'https://blog.juzibot.com/' },
        {
          title: t('footer-menu-3-6-title'),
          url: 'https://work.weixin.qq.com/nl/learning',
        },
      ],
    },
    {
      title: t('footer-menu-4-title'),
      child: [
        {
          title: t('footer-menu-4-1-title'),
          url: `/${i18n.language}/about-us`,
        },
        {
          title: t('footer-menu-4-3-title'),
          url: 'https://juzibot.com/join-us',
        },
        {
          title: t('footer-menu-4-4-title'),
          url: 'https://ac-bg.juzibot.com/agreement',
        },
        {
          title: t('footer-menu-4-5-title'),
          tooltip:
            i18n.language === 'zh'
              ? '北京市海淀区中关村智造大街 F 座五层'
              : 'Click to View',
          url: 'https://j.map.baidu.com/bb/gw1c',
        },
        { title: t('footer-menu-4-6-title'), url: 'mailto: sales@juzi.bot' },
      ],
    },
  ];

  const friendLinks: IFriendLink[] = [
    {
      title: '36kr',
      url: 'https://36kr.com/',
    },
    {
      title: t('friendlink-telrobot'),
      url: 'https://www.telrobot.top/',
    },
    {
      title: t('friendlink-authing'),
      url: 'https://www.authing.cn/',
    },
    {
      title: t('friendlink-5g-msg'),
      url: 'https://www.5g-msg.com/',
    },
  ];

  const fixedNode = (
    <div className={cx('px-4 pt-8 pb-5 mx-4 bg-white mt-5 mb-7 relative', styles.footerFixedForm)}>
      <CloseOutlined className="!text-[#AAB9CA] text-[18px] absolute top-4 right-4" onClick={() => setIsCloseFixed(true)}/>
      {
        isScanQrcode ? (
          <div className="flex flex-col items-center justify-center bf-tr">
            <p className="text-lg text-center font-medium mb-2">
              <span>{t('contact-us-title')}</span>
            </p>
            <p className="text-[#54657E] text-[15px] text-center mb-2">{t('contact-footer')}</p>
            <img src='/_images/qrcodes/ai-01.png' height={124} width={124} alt="" className="flex-shrink-0 mr-[10px]" />
          </div>
        ) : (
          <ContactForm
            className="!bg-transparent !pb-0 !pt-0 px-6 mb-0"
            classNameForTitle="!text-[#54657E]"
            classNameForDesc="text-[#54657E] !mb-6"
            classNameForInput="!bg-white"
            classNameForSubmit={cls('!rounded-full !border-0 !bg-[#0555FF]')}
          />
        )
      }
      <div className="text-[#869BB9] text-center mt-1 flex items-center justify-center cursor-pointer" onClick={() => setIsScanQrcode(!isScanQrcode)}>
        <svg
          className="icon mr-1"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="9463"
          width="16"
          height="16"
        >
          <path
            d="M956.994933 307.22722c4.950755-11.95017 2.214435-25.705452-6.931876-34.851763L799.528576 121.840976l-45.227064 45.227064 95.941096 95.941096-722.30068 0 0 63.960731 799.507086 0C940.384627 326.969866 952.046225 319.179436 956.994933 307.22722zM959.430402 646.774543L159.923316 646.774543c-12.935614 0-24.596188 7.791453-29.54592 19.741623-4.950755 11.95017-2.214435 25.705452 6.931876 34.851763l150.534482 150.534482 45.227064-45.226041-95.941096-95.941096 722.30068 0L959.430402 646.774543z"
            p-id="9464"
            fill="#869BB9"
          ></path>
        </svg>
        {isScanQrcode
          ? t('unable-to-scan')
          : t('go-to-scan') }
      </div>
    </div>
  );
  return (
    <>
      <footer className={cx(i18n.language, styles.footer, 'pb-24 bg-[#F9F9F9]')}>
        <div className="pl-2 pt-5 hidden">
          <Image
            src={ isZh ? "/_images/image-page/logo-black.svg" : "/_images/image-page/logo-black-en.svg"}
            width={120}
            height={64}
            draggable="false"
            alt="logo"
          />
        </div>

        <div className="hidden">
          <Collapse
            ghost
            expandIconPosition="end"
          >
            {
              menus.filter(d => d).map((d, i) => (
                <Panel header={t(d!.title)} key={i}>
                  {
                    d?.child.map((e, j) => (
                      <p key={j}>
                        <a
                          href={e.url}
                          {...(e.url?.includes('http')
                            ? { target: '_blank', rel: 'noreferrer' }
                            : { target: '_self' })}
                        >
                          {t(e.title)}</a>
                      </p>
                    ))
                  }
                </Panel>
              ))
            }
          </Collapse>
        </div>

        <div className="pt-14">
          <div className="text-[#54657E] text-center">
            <span className="friendlink">{t('friendlink')}</span>
            {friendLinks.map(({ title, url }) => (
              <Link key={title} href={url}>
                <a className="text-[#54657E] hover:text-[#AAB9CA] mr-2" target="_blank" rel="noreferrer">
                  {title}
                </a>
              </Link>
            ))}
          </div>

          <div className="text-[#AAB9CA] text-center leading-7 mt-2">
            <div className="copyright">{t('copyright')}</div>
            <div>
              <Link href="https://beian.miit.gov.cn/">
                <a className="text-[#AAB9CA] hover:text-[#AAB9CA]" target="_blank" rel="noreferrer">
                  {t('registration')}
                </a>
              </Link>
            </div>
            <div>
              <Link href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802033527">
                <a className="text-[#AAB9CA] hover:text-[#AAB9CA] inline-flex items-center" target="_blank" rel="noreferrer">
                  <img
                    src="https://cdn-official-website.juzibot.com/images/icons/beian.png"
                    alt="beian"
                    width="16"
                    height="16"
                  />
                  <span style={{ marginLeft: 4 }}>
                    {t('registration-portal')}
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={cx('fixed bottom-0 bg-transparent w-full z-50')}>
          {!HIDE_CONTACT_US && !isCloseFixed && fixedNode }
          <div className="px-4 flex h-[64px] items-center bg-white">
            {!HIDE_CONTACT_US && (
              <ContactUsModalWithButton contactUsOption={{ type: 'ai' }}>
                <Button block size="large" className="mx-2 h-[44px] !rounded-3xl !border-[#0555FF] !text-[#0555FF] ">{t('bullet-button-1')}</Button>
              </ContactUsModalWithButton>
            )}
            <Button
              block
              size="large"
              type="primary"
              className="mx-2 h-[44px] !rounded-3xl !bg-[#0555FF] !border-[#0555FF]"
              onClick={() => {
                open('https://chat.juzibot.com');
              }}
            >{t('title-button')}</Button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterMobile;
