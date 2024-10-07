import { IFooterMenu, IFriendLink } from '@src/interfaces';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import ContactModal from '../common/ContactModal';
import { useState } from 'react';
import ContactUsSimpleModal from '../ContactUsSimpleModal';
const ReactTooltip = dynamic(() => import('react-tooltip'), { ssr: false });

const Footer: NextPage = () => {
  const { t, i18n } = useTranslation(['common']);
  const isZh = i18n.language === 'zh';
  const [showContactUs, setShowContactUs] = useState(false);

  const menus: (IFooterMenu | undefined)[] = [
    {
      title: t('footer-menu-1-title'),
      cIndex: '1',
      child: [
        {
          title: t('products-1'),
          url: t('products-1-url'),
        },
        // { title: t('products-2'), url: t('products-2-url') },
      ]
    },
    // i18n.language === 'zh'
    //   ? {
    //     title: t('footer-menu-2-title'),
    //     cIndex: '2',
    //     child: [
    //       { title: t('政务解决方案'), url: '/features/government' },
    //       { title: t('互联网解决方案'), url: '/features/internet' },
    //       { title: t('消费品解决方案'), url: '/features/customer' },
    //     ],
    //   }
    //   : undefined,
    {
      title: t('footer-menu-3-title'),
      cIndex: '3',
      child: [
        { title: t('footer-menu-3-3-title'), url: 'https://wechaty.js.org/' },
        // { title: t('footer-menu-3-4-title'), url: '/cases', isDisable: true, },
        { title: t('footer-menu-3-5-title'), url: 'https://blog.juzibot.com/' },
        {
          title: t('footer-menu-3-6-title'),
          url: 'https://work.weixin.qq.com/nl/learning',
        },
      ],
    },
    {
      title: t('footer-menu-4-title'),
      cIndex: '4',
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

  const handleClickHideMenu = () => {
    setShowContactUs(true);
  };

  return (
    <>
      <ContactModal />
      <footer className={i18n.language}>
        <div className="wrapper footer-bar">
          <div className="container">
            <div className="menu-container !flex justify-evenly">
              <div className="logo">
                <Image
                  src={ isZh ? "/_images/image-page/logo-black.svg" : "/_images/image-page/logo-black-en.svg"}
                  width={120}
                  height={64}
                  draggable="false"
                  alt="logo"
                ></Image>
              </div>

              {menus.map((menu) => {

                if (menu) {
                  return (
                    <div key={menu.title} className="menu-group">
                      <div className="title">{menu.title}{menu.isDisable}</div>
                      <div className="menus">
                        {menu.child.map((item, idx) => {
                          const isDisable = menu.isDisable || item.isDisable;
                          return item.tooltip ? (
                            <div className="tooltips" key={idx}>
                              <a
                                data-tip
                                data-for="address"
                                href={isDisable ? undefined : item.url}
                                {...(item.url?.includes('http')
                                  ? { target: '_blank', rel: 'noreferrer' }
                                  : { target: '_self' })}
                                onClick={isDisable ? handleClickHideMenu : undefined}
                              >
                                {item.title}
                              </a>
                              <ReactTooltip
                                id="address"
                                place="right"
                                effect="solid"
                                type="dark"
                              >
                                <span>{item.tooltip}</span>
                              </ReactTooltip>
                            </div>
                          ) : (
                            <a
                              href={isDisable ? undefined : item.url}
                              key={idx}
                              {...(item.url?.includes('http')
                                ? { target: '_blank', rel: 'noreferrer' }
                                : { target: '_self' })}
                              onClick={isDisable ? handleClickHideMenu : undefined}
                            >
                              {item.title}
                            </a>
                          );
                        })}
                      </div>
                        {menu.cIndex === '1' && isZh && (
                          <div className="mt-[18px]">
                            <div className="title">客户故事</div>
                            <div className="menus">
                              <Link
                                href="/features/case"
                              >
                                客户案例
                              </Link>
                            </div>
                          </div>
                        )}
                    </div>
                  );
                }
                return null;
              }

              )}
            </div>
          </div>
        </div>

        <div className="wrapper registration">
          <div className="container registration-container">
            <div className="friendship-links">
              <span className="friendlink">{t('friendlink')}</span>
              {friendLinks.map(({ title, url }) => (
                <Link key={title} href={url}>
                  <a className="friendlink" target="_blank" rel="noreferrer">
                    {title}
                  </a>
                </Link>
              ))}
            </div>

            <div className="registration">
              <span className="copyright">{t('copyright')}</span>
              <Link href="https://beian.miit.gov.cn/">
                <a className="beian" target="_blank" rel="noreferrer">
                  {t('registration')}
                </a>
              </Link>
              <Link href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802033527">
                <a className="beian-portal" target="_blank" rel="noreferrer">
                  <Image
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
      </footer>
      <ContactUsSimpleModal open={showContactUs} onCancel={() => setShowContactUs(false)} />
    </>
  );
};

export default Footer;
