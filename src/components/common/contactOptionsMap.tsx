import { CSSProperties, ReactNode } from "react"
import { ContactUsOption } from "./emitter"
import { NextRouter } from "next/router";
import { host } from "@src/config";
import { useTranslation } from 'react-i18next';

type Key = Required<ContactUsOption>['type'];
export const LeftTipMap = () => { 
const { t } = useTranslation(['common']);
return {
  default: [
    {
      title: t('contact-business-title'),
      items: [
        t('contact-business-1'),
        t('contact-business-2')
      ],
    },
    {
      title: t('contact-assistance-title'),
      items: [
        t('contact-assistance-1'),
        t('contact-assistance-2')
      ],
    },
    {
      title: t('contact-community-title'),
      items: [
        t('contact-community-1'),
        t('contact-community-2'),
        t('contact-community-3'),
      ],
    },
  ],
  ai: [
    {
      title: t('contact-business-title'),
      items: [
        t('contact-business-ai-1'),
        t('contact-business-ai-2'),
        t('contact-business-ai-3'),
      ],
    },
    {
      title: t('contact-assistance-title'),
      items: [
        t('contact-assistance-ai-1'),
        t('contact-assistance-ai-2'),
      ],
    },
    {
      title: t('contact-community-title'),
      items: [
        t('contact-community-ai-1'),
        t('contact-community-ai-2'),
        t('contact-community-ai-3'),
      ],
    },
  ],
  rpa: [
    {
      title: t('contact-assistance-title'),
      items: [
        t('contact-assistance-rpa-1'),
        t('contact-assistance-rpa-2'),
        t('contact-assistance-rpa-3'),
      ],
    },
    {
      title: t('contact-operations-title'),
      items: [
        t('contact-operations-1'),
        t('contact-operations-2'),
      ],
    },
    {
      title: t('contact-community-title'),
      items: [
        t('contact-community-rpa-1'),
        t('contact-community-rpa-2'),
        t('contact-community-rpa-3'),
      ],
    },
  ],
}
}

export const leftStyleMap: { [key in Key]: CSSProperties } = {
  default: { background: 'linear-gradient(169deg, #F6F7FD 4.15%, #EAF2FF 94.03%)' },
  ai: { background: 'linear-gradient(174deg, #FBF5FF 2.78%, #F0E1FF 95.55%)' },
  rpa: { background: 'linear-gradient(147.8deg, rgba(102, 71, 255, 0.1) 19.05%, rgba(5, 85, 255, 0.1) 87.88%)' },
}

export const AppealMap = () => {
  const { t, i18n } = useTranslation(['common']);
  return {
    default: (
      <span>
        <span style={{ fontSize: i18n.language === 'en' ? 13 : 18 }}>{t('appeal-1')}</span>
        <br />
        <span className='text-[3vw]'>{t('appeal-2')}</span>
      </span>
    ),

    ai: (
      <span>
        <span style={{ fontSize: i18n.language === 'en' ? 15 : 18 }}>{t('appeal-ai')}</span>
      </span>
    ),
    rpa: (
      <span>
        <span className='text-[18px]'>{t('appeal-rpa')}</span>
      </span>
    ),
  }
}

export const FooterMap = (router: NextRouter) => {
  const { t,i18n } = useTranslation(['common']);
  return (
    {
      default: (
        <div className="login relative " style={{ marginTop: 22 }}>
          <div className='w-[300px] absolute flex justify-between left-1/2' style={{ transform: 'translateX(-50%)' }}>
            <span>
             {t('login-only')}
              <a href={`https://insight.juzibot.com/auth/login?from=juzibot.com`} target="_blank" rel="noreferrer"> {t('ai-knowledge-center')}</a>
            </span>
            <span>
            {t('login-only')}
              <a href={`https://miaohui.juzibot.com/auth/login?from=login&rediect=${host + router.pathname}`} target="_blank" rel="noreferrer"> {t('juzibot')}</a>
            </span>
          </div>
        </div>
      ),
      ai: (
        <div className="login" style={{ marginTop: i18n.language === 'en' ? 20 : 42 }}>
          {t('have-account')}
          <a href="https://insight.juzibot.com/auth/login?from=juzibot.com" target="_blank" rel="noreferrer">
            {t('login-now')}
          </a>
        </div>
      ),
      rpa: (
        <div className="login" style={{ marginTop: i18n.language === 'en' ? 20 : 42 }}>
          {t('have-account')}
          <a href={`https://miaohui.juzibot.com/auth/login?from=login&rediect=${host + router.pathname}`} target="_blank" rel="noreferrer">
          {t('login-now')}
          </a>
        </div>
      ),
    } as { [key in Required<ContactUsOption>['type']]: ReactNode }
  )
}

// https://juzihudong.feishu.cn/sheets/WUqgsmlJKhLZjvt2UlmcLb6In5c
export const qrCodeMap: { [key in Required<ContactUsOption>['qrCode']]: string } = {
  'sf-01': '/_images/qrcodes/sf-01.png',
  'sf-02': '/_images/qrcodes/sf-02.png',
  'sf-03': '/_images/qrcodes/sf-03.png',
  'sf-04': '/_images/qrcodes/sf-04.png',
  'juzibot-01': '/_images/qrcodes/juzibot-01.png',
  'juzibot-02': '/_images/qrcodes/juzibot-02.png',
}
