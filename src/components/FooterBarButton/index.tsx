import { useTranslation } from 'react-i18next';
import ContactUsSimpleModal from '../ContactUsSimpleModal';
import React, { useState } from 'react';

const FooterBarButton = ({ url, isMobile, useModal, imageNode }: { url: string; isMobile?: boolean; useModal?: boolean; imageNode?: React.ReactNode }) => {
  const { t } = useTranslation(['homepage']);
  const [showContactUs, setShowContactUs] = useState(false);
  const handleClick = () => {
    if (useModal) {
      setShowContactUs(true);
    } else {
      window.open(url);
    }
  };
  return (
    <div className="content">
      {isMobile ? (
        <div className="title text-center">
          RPA + AI，打造下一代基于 IM 跨平台，对话式营销云
        </div>
      ) : (
        <div className="title">RPA + AI，打造下一代基于 IM 跨平台，对话式营销云</div>
      )}
      <button className="white-button start-button !shadow-none" onClick={handleClick}>
        {t('appeal-start-free')}
      </button>
      <ContactUsSimpleModal
        open={showContactUs}
        onCancel={() => setShowContactUs(false)}
        imageNode={imageNode}
      />
    </div>
  );
};

export default FooterBarButton;
