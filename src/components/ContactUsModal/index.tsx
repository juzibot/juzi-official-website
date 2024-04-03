import { Modal } from "antd";
import { FC, Fragment, ReactElement, useState } from "react";
import { CloseOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import React from "react";
import ContactForm from "../ContactForm";
import cls from 'classnames';
import { RightIcon } from "../common/ContactModal";
import { ContactUsOption } from "../common/emitter";
import { leftStyleMap, LeftTipMap, qrCodeMap } from "../common/contactOptionsMap";
import { useMediaQuery } from "@react-hookz/web";
import { useShowModal } from "@src/utils/showModal";
import { pick } from "lodash";
import { useTranslation } from 'react-i18next';

type Props = Pick<ContactUsOption, 'type' | 'qrCode'> & {
  open?: boolean,
  onCancel?: () => void,
  onOk?: () => void,
}

const ContactUsModal: FC<Props> = ({ type = 'default', qrCode = 'sf-01', open, onCancel, onOk }) => {
  const handleCancel = () => {
    onCancel?.()
  }

  const FooterMap = () => {
    const { t, i18n } = useTranslation(['common']);
    return {
      default: (
        <>
          <p className="text-[#666666] mb-0" style={{ fontSize: i18n.language === 'en' ? '2.5vw' : '3.5vw' }}>{t('contact-footer')}</p>
        </>
      ),
      ai: <>
            <p className="text-[#666666] mb-0" style={{ fontSize: i18n.language === 'en' ? '3vw' : '4vw' }}>{t('contact-footer-1')}</p>
            <p className="text-[#666666] mb-0" style={{ fontSize: i18n.language === 'en' ? '3vw' : '4vw' }}>{t('contact-footer-2')}</p>
          </>,
      rpa: <>
            <p className="text-[#666666] mb-0" style={{ fontSize: i18n.language === 'en' ? '3vw' : '4vw' }}>{t('contact-footer-1')}</p>
            <p className="text-[#666666] mb-0" style={{ fontSize: i18n.language === 'en' ? '3vw' : '4vw' }}>{t('contact-footer-2')}</p>
          </>,
  }}

  const AppealMap = () => {
    const { t } = useTranslation(['common']);
    return {
      default: (
        <span>
          <span className='text-[3.8vw]'>{t('appeal-1')}</span>
          <br />
          <span className='text-[3vw]'>{t('appeal-2')}</span>
        </span>
      ),
      ai: (
        <span>
          <span className="text-[18px]">{t('appeal-ai-m-1')}</span>
          <br />
          <span className=''>{t('appeal-ai-m-2')}</span>
        </span>
      ),
      rpa: (
        <span>
          <span className='text-[18px]'>{t('appeal-rpa-m-1')}</span>
          <br />
          <span>{t('appeal-rpa-m-2')}</span>
        </span>
      ),
  }}

  const qrCodeUrl = qrCodeMap[qrCode!];
  const leftTips = LeftTipMap()[type!] || [];
  const leftStyle = leftStyleMap[type!]
  const appeal = AppealMap()[type!];
  const footer = FooterMap()[type!];
  const { t } = useTranslation(['common']);

  return (
    <Modal
      open={open}
      destroyOnClose
      title={null}
      footer={null}
      closable={false}
      className={styles.box}
      width={'100vw'}
    >
      <div className={styles.content} style={{ ...leftStyle }}>
        <h2 className="px-6 mt-10 text-center text-2xl">{t('contact-us-title')}</h2>
        <p className="px-6 text-center">
          <span className="text-[#555555]">{t('contact-scan-submit')}</span>
          <span className="text-[#F5790D]"> {t('learn-more')} {`>>>`}</span>
        </p>

        <div className="px-8">
          {
            leftTips.map((d, i) => (
              <Fragment key={d.title}>
                <div className="text-[#F5790D] font-semibold text-base mt-3">
                  <span className="mr-1 text-[24px]">{`0${i + 1}`}</span>
                  {d.title}
                </div>
                {
                  d.items?.map(e => (
                    <div key={e} className="text-[#555] flex">
                      <span className="flex-shrink-0"><RightIcon /></span>
                      <span className="ml-1">{e}</span>
                    </div>
                  ))
                }
              </Fragment>
            ))
          }
        </div>

        <div className="px-4 mx-4 py-5 bg-white rounded-lg flex mt-5 mb-7">
          <img
            src={qrCodeUrl}
            height={124}
            width={124}
            alt={`type-${type}`}
            className="flex-shrink-0 mr-[10px]"
            onClick={() => window.open('https://chat.juzibot.com')}
          />
          <div className="flex flex-col justify-center text-[15px]">
            <p className="text-[#FF5E1E] text-[15px] font-medium mb-2">{appeal}</p>
            {footer}
          </div>
        </div>

        <ContactForm
          className="bg-white pb-3"
          classNameForInput="!bg-[#FAFAFA] !border-[#EEEEEE]"
          classNameForDesc="text-[16px] !mb-6"
          classNameForSubmit={cls('!rounded-full !border-0 !bg-[#0555FF]')}
          onOk={onOk}
        />
        <p className="bg-white text-[#0555FF] text-center text-base pt-0 pb-7 mb-0">{t('have-account-m')}</p>
        <CloseOutlined className="absolute top-3 right-3 !text-[#AAB9CA] p-1 cursor-pointer" onClick={handleCancel} />
      </div>
    </Modal>
  );
}

const ContactUsModalWithButton: FC<{ children: ReactElement, contactUsOption?: ContactUsOption }> = ({
  children, contactUsOption
}) => {
  const isMobile = useMediaQuery('only screen and (max-width : 600px)');
  const showPcModal = useShowModal();
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    if (isMobile) {
      setVisible(true);
      return;
    }
    showPcModal(contactUsOption);
  };
  return (
    <>
      {React.cloneElement(children, { onClick: handleClick })}
      <ContactUsModal
        open={visible}
        {... pick(contactUsOption, ['type', 'qrCode'])}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      />
    </>
  );
};

export { ContactUsModalWithButton };
export default ContactUsModal;
