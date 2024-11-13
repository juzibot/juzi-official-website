import { NextPage } from 'next';
import { Fragment, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { validatePhoneNum } from '@src/utils/validatePhoneNum';
import { useRouter } from 'next/router';
import { shuffle } from 'lodash';
import { EventType, emitter } from './emitter';
import { AppealMap, FooterMap, leftStyleMap, LeftTipMap, qrCodeMap } from './contactOptionsMap';
import { useTranslation } from 'react-i18next';

export function getQrcode(routerPathname: string) {
  const arr = [
    '/',
    '/features/customer-acquisition',
    '/features/sop',
    '/features/contact-platform',
    '/features/data-center',
    '/features/management',
    '/features/security',
    '/solutions/general',
    '/solutions/customer-service',
    '/solutions/increase',
    '/solutions/operate',
    '/solutions/consumer-goods',
    '/solutions/education',
    '/solutions/health',
    '/solutions/finance',
    '/about-us',
    '/culture',
    '/cases',
  ];
  const map: { [url: string]: number } = {};
  arr.forEach((s, i) => {
    map[s] = i + 1;
  });
  const _arr = arr.sort((b, a) => b.length - a.length);
  let res = 1;
  _arr.forEach((s) => {
    if (routerPathname.includes(s)) {
      res = map[s];
    }
  });
  return `https://cdn-official-website.juzibot.com/images/qrcodes/官网弹窗${res}.png`;
}

const DetentionModal: NextPage<{
  onConfirm: () => void;
  onCancel: () => void;
  text: string;
}> = ({ onCancel, onConfirm, text }) => {
  const { t, i18n } = useTranslation(['common']);
  const contents: string[] = [
    t('miss-out')
  ];
  return (
    <div className="detention-modal" style={{ height: i18n.language === 'en' ? 240 : 220 }}>
      <div className="title" style={{ fontSize: i18n.language === 'en' ? 16 : 18 }}>{t('close-contact-question')}</div>
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: shuffle(contents)[0],
        }}
      />

      <div className="buttons">
        <div className="btn primary" onClick={onConfirm}>
          {text}
        </div>
        <div className="btn" onClick={onCancel}>
          {t('close-contact-yes')}
        </div>
      </div>
    </div>
  );
};

export const RightIcon = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 6.75L3.24 8.84C3.40463 8.96572 3.59527 9.05306 3.79799 9.09563C4.00071 9.1382 4.21039 9.13491 4.41168 9.08603C4.61297 9.03714 4.80079 8.94389 4.96141 8.81308C5.12203 8.68227 5.25138 8.51723 5.34 8.33L8.87 1"
        stroke="#F15A24"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

const ContactModal: NextPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const remarkRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const refs = [nameRef, phoneRef, companyRef, remarkRef];
  const [countdown, setCountdown] = useState(0);
  const [isScanQrcode, toggleScanQrcode] = useState(true);
  const [isDetentionModalVisible, toggleDetentionModalVisible] =
    useState(false);
  const router = useRouter();
  const [state, setState] = useState<EventType['contact_us']>();
  const { t, i18n } = useTranslation(['common']);
  const isZh = i18n.language === 'zh';

  function hideModal() {
    refs.forEach((item) => {
      item.current?.removeAttribute('disabled');
      item.current!.value = '';
    });
    buttonRef.current?.removeAttribute('disabled');
    buttonRef.current!.innerText = t('submit')
    document
      .getElementById('contact-modal')
      ?.setAttribute('style', 'display: none');
  }

  function handleCloseModal() {
    toggleDetentionModalVisible(true);
  }

  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => setCountdown((c) => c - 1), 1000);
    } else {
      hideModal();
    }
  }, [countdown]);

  useEffect(() => {
    const onShowEvent = (options: EventType['contact_us']) => {
      document.getElementById('contact-modal')?.setAttribute('style', 'display: flex');
      setState({ ...options, type: 'ai' });
    }
    emitter.on('contact_us', onShowEvent);
    return () => {
      emitter.off('contact_us', onShowEvent);
    }
  }, [])

  async function submit() {
    const [name, phone, company, remark] = refs.map(
      (item) => item.current?.value || ''
    );
    nameRef.current?.setAttribute(
      'style',
      `border-color: ${name ? '#eee' : '#265cf3'}`
    );
    phoneRef.current?.setAttribute(
      'style',
      `border-color: ${phone && validatePhoneNum(phone) ? '#eee' : '#265cf3'}`
    );
    if (!name || !phone || !validatePhoneNum(phone)) {
      return;
    }
    refs.forEach((item) => (item.current!.disabled = true));
    buttonRef.current?.setAttribute('disabled', 'true');
    buttonRef.current!.innerText = t('submitting')
    const data = { name, phone, company, remark };
    if (process.browser) {
      axios
        .post('/api/contact', data)
        .then((res) => {
          console.log(res);
        })
        .finally(() => {
          setCountdown(3);
        });
    }
  }

  const qrCode = qrCodeMap['ai-01'];
  const leftTips = LeftTipMap()[state?.type!] || [];
  const leftStyle = leftStyleMap[state?.type!]
  const appeal = AppealMap()[state?.type!];
  const footer = FooterMap(router)[state?.type!]

  return (
    <>
      <div
        id="contact-modal"
        style={isDetentionModalVisible ? { filter: 'blur(4px)', pointerEvents: 'none' } : {}}
      >
        <div
          className="modal"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="left !px-10" style={leftStyle}>
            <h2 style={{ fontSize: i18n.language === 'en' ? 19 : 22, marginTop: i18n.language === 'en' ? -8 : 0}}>{t('contact-us-title')}</h2>
            {isZh ? (
              <div style={{ marginTop: 8 }}>
              {isScanQrcode ? t('contact-us-subtitle-1') : t('contact-us-subtitle-2')}{t('contact-us-subtitle-3')}，
              <span className="orange">
                {t('learn-more')}
                {' >>>'}
              </span>
            </div>
            ):
            <div style={{ marginTop: 6 }}>
              {isScanQrcode ? t('contact-us-subtitle-1') : t('contact-us-subtitle-2')} {t('contact-us-subtitle-3')}，
              <span className="orange">
                {t('learn-more')}
                {' >>>'}
              </span>
            </div>
            }

            <div className="content pt-[14px]">
              {
               leftTips?.map((d, i) => (
                  <Fragment key={d.title}>
                    <div className="title" style={{ marginTop: i18n.language === 'en' ? 16: 28, marginBottom: 16}}>
                      <span className="num">{`0${i + 1}`}</span>
                      {d.title}
                    </div>
                    {
                      d.items?.map(e => (
                        <div key={e} className="item flex" style={{ fontSize: i18n.language === 'en' ? 12 : 13}}>
                          <span className="flex-shrink-0"><RightIcon /></span>
                          <span>{e}</span>
                        </div>
                      ))
                    }
                  </Fragment>
                ))
              }
            </div>
          </div>
          <div className="right">
            <div
              className="qrcode-bar"
              style={{
                display: isScanQrcode ? 'flex' : 'none',
              }}
            >
              <img src={qrCode} alt={`type-${state?.type}`} className="qrcode" />
              <div className="tips" style={{ fontSize: i18n.language === 'en' ? 12 : 14 }}>
                {t('scan-wechat')}
              </div>
              <div className="appeal">{appeal}</div>
              {footer}
            </div>
            <div
              className="form"
              style={{
                display: !isScanQrcode && countdown === 0 ? 'block' : 'none',
              }}
            >
              <input
                placeholder={t('name')}
                name="name"
                ref={nameRef}
                maxLength={16}
              />
              <input
                placeholder={t('phone')}
                name="phone"
                type="number"
                ref={phoneRef}
                maxLength={11}
              />
              <input
                placeholder={t('company')}
                name="company"
                ref={companyRef}
                maxLength={48}
              />
              <input
                placeholder={t('notes')}
                name="remark"
                ref={remarkRef}
                maxLength={100}
              />

              <button ref={buttonRef} onClick={submit}>
                {t('submit')}
              </button>

              <div className="tips">{t('contact-us-tips')}</div>
              {footer}
            </div>

            <div
              className="success-tips"
              style={{
                display: !isScanQrcode && countdown > 0 ? 'block' : 'none',
              }}
            >
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9030"
                width="64"
                height="64"
              >
                <path
                  d="M512 0C229.004 0 0 229.004 0 512s229.004 512 512 512 512-229.004 512-512S794.996 0 512 0z m260.655 425.425L493.382 704.698c-5.586 5.586-13.033 9.31-21.411 9.31-10.24 1.861-20.48-0.932-27.927-8.379L268.102 528.756a30.906 30.906 0 0 1 0-43.752l14.894-14.895c12.102-12.102 31.651-12.102 43.753 0l141.498 141.498 244.83-244.829c12.101-12.102 31.65-12.102 43.752 0l15.826 14.895c12.101 12.102 12.101 31.65 0 43.752z"
                  p-id="9031"
                  fill="#7cba59"
                ></path>
              </svg>

              <h4 style={{ marginTop: 24 }}>
                {t('submit-complete')}
              </h4>

              { isZh ? (
                <div className="auto-close">{countdown} 秒后自动关闭</div>
              ) : 
                <div className="auto-close">Will close in {countdown} seconds</div>
              }
            </div>
          </div>
          <div className="close-bar">
            <div
              className="switch-mode"
              onClick={() => toggleScanQrcode(!isScanQrcode)}
            >
              <svg
                className="icon"
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
                  fill="#666666"
                ></path>
              </svg>
              <span className="tips">
                {isScanQrcode
                  ? t('unable-to-scan')
                  : t('go-to-scan') }
              </span>
            </div>
            <div className="close-btn" onClick={handleCloseModal}>
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9123"
                width="36"
                height="36"
              >
                <path
                  d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z"
                  p-id="9124"
                  fill="#ccc"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {isDetentionModalVisible ? (
        <DetentionModal
          text={isScanQrcode ? t('understand') : t('fill-out')}
          onCancel={() => {
            toggleDetentionModalVisible(false);
            hideModal();
          }}
          onConfirm={() => {
            toggleDetentionModalVisible(false);
          }}
        />
      ) : null}
    </>
  );
};

export default ContactModal;
