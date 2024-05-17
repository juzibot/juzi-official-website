import { FC, useState } from "react";
import { LlmLogos } from "../LlmLogos";
import { useMediaQuery } from "@react-hookz/web";
import { useTranslation } from "next-i18next";

type Props = {
}

export const LlmIntegration: FC<Props> = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');
  const { i18n } = useTranslation('common');
  const isZh = i18n.language === 'zh';
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const handleImageLoad = () => {
    setTimeout(() => {
      setIsImageLoaded(true);
    }, 10);
  };

  if (isSmallDevice) {
    const url = isZh ? '/_images/image-page/index-content-20240516-2-m.png': '/_images/image-page/index-content-20240516-2-m-en.png';
    return (
      <div className='relative'>
        <img className='w-full' alt='' src={url} onLoad={handleImageLoad} />
        <LlmLogos isImageLoaded={isImageLoaded} className="absolute bottom-[6.3%] h-[calc(63.5%)] w-[81.2%] right-[7%]" />
      </div>
    )
  }

  const url = isZh ? '/_images/image-page/index-content-20240516-2.png': '/_images/image-page/index-content-20240516-2-en.png';
  return (
    <div className='relative'>
      <img className='w-full' alt='' src={url} onLoad={handleImageLoad} />
      <LlmLogos isImageLoaded={isImageLoaded} className="absolute bottom-[8.3%] h-[calc(74.5%)] w-[30%] right-[8.4%]" />
    </div>
  );
};