import Seo from '@src/components/common/Seo';
import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { chunk, debounce } from 'lodash';
import Link from 'next/link';
import { useMediaQuery } from '@react-hookz/web';
import { useTranslation } from 'react-i18next';
import ContactUsM from './about-us-m';

export const AboutUsAppealBar: NextPage = () => {
  const { i18n } = useTranslation('about-us');
  return (
    <>
      <h2>{i18n.language === 'en' ? 'Join Juzi.bot and work together with numerous top brands' :'加入句子互动，与众多头部品牌一起打造中国私域新生态'}</h2>
      <Link href='/join-us'>
        <a target='_blank'>
          <button className='primary-button start-button'>{i18n.language === 'en' ? 'Join Us' :'加入我们'}</button>
        </a>
      </Link>
    </>
  );
};

const NewsPage: NextPage = () => {
  const items: {
    imgUrl: string;
    title: string;
    subtitle: string;
    src: string;
  }[] = [
    {
      imgUrl:
        '/_images/media-reports/img-1.png',
      title: '「句子互动」完成数百万美元Pre-A轮融资，打造大模型驱动的下一代对话式营销云',
      subtitle:
        '北京句子互动科技有限公司已完成数百万美元Pre-A轮融资，由真成投资领投，奇绩创坛跟投。本轮融资主要用于搭建大模型驱动的下一代对话式营销云……',
      src:
        'https://mp.weixin.qq.com/s/TSMHK8niDFsbR-jOWWCC0g',
    },
    {
      imgUrl:
        '/_images/media-reports/img-2.png',
      title: '句子互动抢先获得微软 Azure OpenAI 服务授权,持续深耕智能对话领域',
      subtitle:
        '微软 Azure 作为 OpenAI 的独家云服务提供商，提供了不可或缺的技术支持和服务，助力 OpenAI 在人工智能和自然语言生成等领域持续发展和创新……',
      src: 'https://mp.weixin.qq.com/s/L33EkP_86rtgIlnWc0OHjA',
    },
    {
      imgUrl:
        '/_images/media-reports/img-3.png',
      title: '句子互动亮相 WAIC 2023，共话 Chatbot 产业新未来',
      subtitle:
        '“句子互动应上海人工智能投资基金邀请参会，在本次会展中，句子互动展示最新产品 — AI 知识库，与众多行业从业者探讨企业级 AI 机器人的落地应用以及在不同场景下的跨界创新……',
      src: 'https://mp.weixin.qq.com/s/_8erRH--gNVH4EGU_WUvKA',
    },
    {
      imgUrl:
        '/_images/media-reports/img-4.png',
      title: '130页 PPT 深入浅出了解 ChatGPT —— ChatGPT 从 0 到 1',
      subtitle:
        '130 页 PPT尽可能深入浅出地为大家做一个 ChatGPT 的介绍，从技术原理、发展背景、应用场景和 prompt 等多个角度来进行阐述，献给拥抱 AGI 时代来临的你们……',
      src: 'https://mp.weixin.qq.com/s?__biz=Mzk0NzQzNzIwMQ==&mid=2247484302&idx=1&sn=e8a3de361651e991a25819efc334fee1&scene=21#wechat_redirect',
    },
    {
      imgUrl:
        '/_images/media-reports/img-5.png',
      title: '12 节课 从 0 到 1 ，快速成为 ChatGPT 的受益者',
      subtitle:
        '希望通过本课程的学习，你能享受到 ChatGPT 带来的极致体验，如写代码、约会指南等，同时你将极大地拓展自己的技能和视野，真正体验 AI 技术与人类共生的奇妙之处……',
      src:
        'https://mp.weixin.qq.com/s?__biz=MzU3OTk2MzA1Nw==&mid=2247535279&idx=1&sn=cb7688563d61b753fdaf60741a8bd80d&chksm=fd5c1b71ca2b92675a2f955f35c654b83170a36f8080e818b588eb3418e5e2b54111aebe149e&scene=21#wechat_redirect',
    },
    {
      imgUrl:
        '/_images/media-reports/img-6.png',
      title: '句子互动整合ChatGPT等生成模型，通过Chatbot提供真正意义上基于对话的AI工具',
      subtitle:
        '句子互动创始人李佳芮作为全球最大的 RPA 聊天机器人开源框架 Wechaty 的联合作者，自 2016 年起致力于通过 Chatbot 将对话式服务落地的业务场景中……',
      src: 'https://mp.weixin.qq.com/s?__biz=MzU3OTk2MzA1Nw==&mid=2247528198&idx=1&sn=5af2a6a1d39cbd3979d167aec9f27c7c&chksm=fd5c3ed8ca2bb7ce72bdf8223dcd36651aef693ac99f73f25a9bb34eb3c20f30e846d06397bf&token=915112483&lang=zh_CN#rd',
    },
    {
      imgUrl:
        '/_images/media-reports/img-7.png',
      title: '句子互动参加硬核桃5G开发者社区两周年庆典，与百度、中国搜索、来也科技助力智能化，赋能5G产业！',
      subtitle:
        '很荣幸句子互动成为首批核能商店共创企业，并在庆典中与百度、中国搜索、来也等公司一起上台，共同见证了 5G 与新型技术金融应用联合实验室的揭牌仪式……',
      src: 'https://mp.weixin.qq.com/s/IEYjUlE480roE9I30bkbpg',
    },
    {
      imgUrl:
        '/_images/media-reports/img-8.png',
      title:
        '句子互动被 2000+ 品牌评选为“年度最值得推荐的私域工具”',
      subtitle:
        '从2022年 8月开始，业内知名媒体团队见实开展了一项私域行业调研，3 个月内共收到了来自 2000+ 品牌的有效问卷反馈……',
      src: 'https://mp.weixin.qq.com/s/gQTgvxMWagdpQnlYLzcRhw',
    },
    {
      imgUrl:
        '/_images/media-reports/img-9.png',
      title: '2023ChatGPT未来大会成功举办，《Chatbot从0到1》被推荐',
      subtitle:
        '微软技术俱乐部（苏州）执行主席潘淳带来主题分享《ChatGPT如何带动产业升级》。分享中潘淳向与会观众推荐了李佳芮《Chatbot 从 0 到 1：对话式交互设计实践指南》……',
      src:
        'https://mp.weixin.qq.com/s/t_-WStNg5YJh2vOXvundMA',
    },
    {
      imgUrl:
        '/_images/media-reports/img-10.png',
      title: '句子互动助力企业信息安全，荣获公安部颁发「国家信息安全等级保护三级」认证',
      subtitle:
        '经过公安厅的认证评估，句子互动旗下RPA营销服务一体化平台句子秒回成功获得了“信息系统安全等级保护备案证明第3级”（以下简称“等保三级”）证明。',
      src:
        'https://mp.weixin.qq.com/s/VkLkdpowpdJ5awgqSqIifA',
    },
    {
      imgUrl:
        '/_images/media-reports/img-11.png',
      title: '句子互动树立对话式营销行业新标杆，荣获 ISO9001 质量管理体系认证',
      subtitle:
        '句子互动申请并通过了 ISO9001 质量管理认证机构专家全面、严格、细致的审查，获得GB/T19001-2016 / ISO9001:2015 标准质量管理体系认证证书，认证范围为应用软件技术开发，自行开发的SaaS产品销售……',
      src:
        'https://mp.weixin.qq.com/s/r_uNiPIjNMm4mfUQ7_QKFg',
    },
    {
      imgUrl:
        '/_images/media-reports/img-12.png',
      title: '句子互动获得高新技术企业认定',
      subtitle:
        '句子互动通过北京市认定管理机构2021年认定的高新技术企业，于2021年12月公示。',
      src:
        'http://www.innocom.gov.cn/gqrdw/c101407/202112/dfb1d5c2a6eb47ddb3f00bfe5f02413b.shtml',
    },
  ];
  const data = chunk(items, 3);
  const [autoPlayInterval, setAutoPlayInterval] = useState<NodeJS.Timer>();
  const [swiper, setSwiper] = useState<SwiperType | undefined>(undefined);
  const [documentVisible, setDocumentVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  function autoplay(s?: SwiperType) {
    s = s || swiper;
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
    }
    const _autoPlayInterval = setInterval(() => {
      if (!s || !documentVisible) return;
      if (s.isEnd) {
        s.slideTo(0);
      } else {
        s.slideNext(300);
      }
    }, 6000);
    setAutoPlayInterval(_autoPlayInterval);
  }

  const debounceAutoPlay = debounce(() => autoplay(swiper));

  useEffect(() => {
    if (process.browser) {
      document.addEventListener('visibilitychange', () => {
        const visible = document.visibilityState === 'visible';
        setDocumentVisible(visible);
      });
    }
  }, []);

  return (
    <>
      <h1>新闻报道</h1>
      <Swiper
        className='news-swiper'
        spaceBetween={30}
        style={{ width: '100%' }}
        onSwiper={swiper => {
          setSwiper(swiper);
          autoplay(swiper);
        }}
        onActiveIndexChange={swiper => {
          setCurrentIndex(swiper.activeIndex);
          debounceAutoPlay();
        }}
      >
        {data.map((d, i) => {
          return (
            <SwiperSlide key={i}>
              <div className='news-item-container'>
                {d.map((item, idx) => {
                  return (
                    <Link href={item.src} key={`${i}-${idx}`}>
                      <a className='news' target='_blank'>
                        <img src={item.imgUrl} alt='news-cover'></img>
                        <div style={{ height: 116 }}>
                          <div className='title line-clamp-2 min-h-[50px]'>{item.title}</div>
                          <div className='subtitle line-clamp-2'>{item.subtitle}</div>
                        </div>
                        <div className='read-more'>点击查看 →</div>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className='pagination'>
        {data.map((_, idx) => (
          <div
            key={`p-${idx}`}
            className={currentIndex === idx ? 'active' : 'normal'}
            onClick={() => {
              swiper?.slideTo(idx);
            }}
          >
            <div
              style={{
                visibility: currentIndex === idx ? 'visible' : 'hidden',
                width: '100%',
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const Certificates: NextPage = () => {
  const [swiper, setSwiper] = useState<SwiperType | undefined>(undefined);
  const [current, setCurrent] = useState(1);
  const [imageLoadedCount, setImageLoadedCount] = useState(0);
  const { t } = useTranslation('about-us');
  const TOTAL_COUNT = 18;
  useEffect(() => {
    if (swiper) {
      setTimeout(() => {
        swiper.slideTo(1);
      }, 1000);
    }
  }, [imageLoadedCount]);
  return (
    <>
      <h1>{t('awards-title')}</h1>
      <Swiper
        className='certificate-swiper'
        slidesPerView='auto'
        centeredSlides
        spaceBetween={30}
        autoplay
        style={{ width: '100%' }}
        onSwiper={s => {
          setSwiper(s);
          s.slideNext();
        }}
        observer
        // controller={{ control: swiper }}
      >
        {Array(TOTAL_COUNT)
          .fill(null)
          .map((_, idx) => {
            return (
              <SwiperSlide key={idx} className='slide-item'>
                <img
                  src={`https://cdn-official-website.juzibot.com/images/about-us/certificate/图-${
                    idx + 1
                  }.png`}
                  alt='certificate'
                  draggable='false'
                  onLoad={() => {
                    setImageLoadedCount(imageLoadedCount + 1);
                  }}
                ></img>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className='slider'>
        <div
          className={`left ${current === 1 ? 'disable' : ''}`}
          onClick={() => {
            if (current - 1 > 0) {
              swiper?.slideTo(current - 1);
              setCurrent(current - 1);
            }
          }}
        >
          <img
            src='https://cdn-official-website.juzibot.com/images/icons/arrow-right.svg'
            alt='arrow'
          ></img>
        </div>

        <div
          className={`right ${current === TOTAL_COUNT - 3 ? 'disable' : ''}`}
          onClick={() => {
            if (current < TOTAL_COUNT - 3) {
              swiper?.slideTo(current + 1);
              setCurrent(current + 1);
            }
          }}
        >
          <img
            src='https://cdn-official-website.juzibot.com/images/icons/arrow-right.svg'
            alt='arrow'
          ></img>
        </div>
      </div>
    </>
  );
};

const CustomerDisplay: NextPage = () => {
  return (
    <>
      <h1>我们的客户</h1>
      <div className='subtitle'>以下为部分客户，排名不分前后</div>

      <img alt='' className="mt-10" src="/_images/image-page/customer-display-20240206.png" />
      {/* <div className='category'>消费品牌</div>
      <img
        src='https://cdn-official-website.juzibot.com/images/about-us/consumer-20220222.png'
        alt='consumer'
        draggable='false'
      ></img>
      <div className='category'>政务/金融/医疗</div>
      <img
        src='https://cdn-official-website.juzibot.com/images/about-us/finance-20220222.png'
        alt='finance'
        draggable='false'
      ></img>
      <div className='category'>互联网服务在线教育</div>
      <img
        src='https://cdn-official-website.juzibot.com/images/about-us/internal-20230316.png'
        alt='internal'
        draggable='false'
      ></img> */}
    </>
  );
};

const Popup: NextPage<{
  isReverse?: boolean;
  x: number;
  y: number;
  lineY?: number;
  title: string;
  style?: CSSProperties;
  flag: string;
  currentFlag: string;
  flagSetter: (f: string) => void;
}> = ({
  isReverse,
  children,
  title,
  x,
  y,
  style,
  lineY,
  flagSetter,
  flag,
  currentFlag,
}) => {
  if (isReverse) {
    return (
      <div
        className={`popup-container-reverse pop ${
          flag === currentFlag ? 'hover' : ''
        }`}
        style={{ transform: `translate(${x}px, ${y}px)` }}
        onMouseLeave={() => flagSetter('')}
        onMouseMove={() => flagSetter(flag)}
        id={`c${flag}`}
      >
        <div
          className='line'
          style={lineY ? { transform: `translateY(${lineY}px)` } : {}}
        ></div>
        <div className='popup' style={style}>
          <div>
            <strong>{title}</strong>
          </div>
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`popup-container ${currentFlag === flag ? 'hover' : ''}`}
        style={{ transform: `translate(${x}px, ${y}px)` }}
        onMouseLeave={() => flagSetter('')}
        onMouseMove={() => flagSetter(flag)}
      >
        <div className='popup' style={style}>
          <div>
            <strong>{title}</strong>
          </div>
          {children}
        </div>
        <div
          className='line'
          style={lineY ? { transform: `translateY(${lineY}px)` } : {}}
        ></div>
      </div>
    );
  }
};

const Dot: NextPage<{
  x: number;
  y: number;
  isWhite?: boolean;
  onClick?: () => void;
  flag: string;
  currentFlag: string;
  flagSetter: (f: string) => void;
}> = ({ x, y, isWhite, onClick, flag, currentFlag, flagSetter }) => {
  return (
    <div
      className={`dot-container ${currentFlag === flag ? 'hover' : ''}`}
      style={{
        transform: `translate(${x}px, ${y}px)`,
        borderWidth: isWhite ? 10 : 8,
      }}
      onMouseMove={() => flagSetter(flag)}
      onMouseLeave={() => flagSetter('')}
    >
      <div className={isWhite ? 'dot-white' : 'dot'} onClick={onClick}></div>
    </div>
  );
};

const ExtraDialog: NextPage<{ flag: string }> = ({ flag }) => {
  const { t } = useTranslation('about-us');
  const { i18n } = useTranslation('about-us');
  const isZh = i18n.language === 'zh';
  if (flag === '2015') {
    return (
      <div className='cover-dialog hover c-2015'>
        <strong>2015.02</strong>
        <div>
          {t('2015.02-text')}
        </div>
        <strong>2016.05</strong>
        <div>{t('2016.05-text')}</div>
        <strong>2016.06</strong>
        <div>{t('2016.06-text')}</div>
      </div>
    );
  }
  if (flag === '2017') {
    return (
      <div className='cover-dialog reverse hover c-2017'>
        <strong>2017.03</strong>
        <div>{t('2017.03-text')}</div>
        <strong>2017.04</strong>
        <div>{t('2017.04-text')}</div>
        <strong>2017.07</strong>
        <div>{t('2017.07-text')}</div>
        <strong>2017.12</strong>
        <div>{t('2017.12-text')}</div>
      </div>
    );
  }
  if (flag === '2018') {
    return (
      <div className='cover-dialog hover c-2018'>
        <strong>2018.01</strong>
        <div>
          {t('2018.01-text')}
        </div>
        <strong>2018.03</strong>
        <div>{t('2018.03-text')}</div>
        {isZh ? (
          <>
          <strong>2018.05</strong><div>
            {t('2018.05-text')}
          </div>
          </>
        ) : null}
        <strong>2018.08</strong>
        <div>
          {t('2018.08-text')}
        </div>
        <strong>2018.09</strong>
        <div>{t('2018.09-text')}</div>
        <strong>2018.12</strong>
        <div>{t('2018.12-text')}</div>
      </div>
    );
  }
  if (flag === '2019') {
    return (
      <div className='cover-dialog reverse hover c-2019'>
        <strong>2019.01</strong>
        <div>{t('2019.01-text')}</div>
        <strong>2019.04</strong>
        <div>
          {t('2019.04-text')}
        </div>
        <strong>2019.07</strong>
        <div>{t('2019.07-text')}</div>
        <strong>2019.10</strong>
        <div>{t('2019.10-text')}</div>
        <strong>2019.12</strong>
        <div>
          {t('2019.12-text')}
        </div>
      </div>
    );
  }
  if (flag === '2020') {
    return (
      <div className='cover-dialog hover c-2020'>
        <strong>2020.03</strong>
        <div>
          {t('2020.03-text')}
        </div>
        <strong>2020.05</strong>
        <div>{t('2020.05-text')}</div>
        {isZh ? (
          <>
          <strong>2020.08</strong>
          <div>{t('2020.08-text')}</div>
          </>
        ) : null }
        <strong>2020.09</strong>
        <div>
          {t('2020.09-text')}
        </div>
        <strong>2020.11</strong>
        <div>{t('2020.11-text')}</div>
        <strong>2020.12</strong>
        <div>{t('2020.12-text')}</div>
      </div>
    );
  }
  if (flag === '2021') {
    return (
      <div className='cover-dialog reverse hover c-2021'>
        <strong>2021.01</strong>
        <div>{t('2021.01-text')}</div>
        <strong>2021.03</strong>
        <div>{t('2021.03-text')}</div>
        <strong>2021.05</strong>
          <div>
            {t('2021.05-text')}
          </div>
        {isZh ? (
          <>
          <strong>2021.07</strong>
          <div>
            {t('2021.07-text')}
          </div>
          </>
        ) : null }
        <strong>2021.08</strong>
        <div>
          {t('2021.08-text')}
        </div>
        <strong>2021.09</strong>
        <div>
          {t('2021.09-text')}
        </div>
        <strong>2021.12</strong>
        <div>{t('2021.12-text')}</div>
      </div>
    );
  }
  if (flag === '2022') {
    return (
      <div className='cover-dialog hover c-2022'>
        <strong>2022.01</strong>
        <div>{t('2022.01-text')}</div>
        <strong>2022.03</strong>
        <div>{t('2022.03-text')}</div>
      </div>
    );
  }
  return null;
};

const GrowthWall: NextPage = () => {
  const { t } = useTranslation('about-us');
  const { i18n } = useTranslation('about-us');
  const isZh = i18n.language === 'zh';
  const [flag, setFlag] = useState('');
  const popupFlags = [
    '2015',
    '2016-05',
    '2017',
    '2017-12',
    '2018',
    '2018-12',
    '2019',
    '2019-01',
    '2020',
    '2020-03',
    '2021',
    '2021-07',
    '2022',
    '2022-01',
  ];
  const autoPlayRef = useRef<NodeJS.Timer>();
  const [extraPopopVisible, toggleExtraPopopVisible] = useState(false);

  useEffect(() => {
    if (popupFlags?.length) {
      autoPlayRef.current = setTimeout(() => {
        if (!flag) return;
        let idx = popupFlags.indexOf(flag) + 1;
        if (idx > popupFlags.length - 1) {
          idx = 0;
        }
        setFlag(popupFlags[idx]);
      }, 5000);
    }
  }, [flag]);

  useEffect(() => {
    startAutoPlay();
  }, []);

  function startAutoPlay() {
    autoPlayRef.current = setTimeout(() => {
      if (!flag) {
        setFlag('2016-05');
      }
    }, 2000);
  }

  return (
    <>
      <h3>{t('timeline-title')}</h3>
      <div
        className='growth-data'
        onMouseMove={() => {
          autoPlayRef.current && clearTimeout(autoPlayRef.current);
          toggleExtraPopopVisible(true);
        }}
        onMouseLeave={() => {
          toggleExtraPopopVisible(false);
          startAutoPlay();
        }}
      >
        <ExtraDialog flag={extraPopopVisible ? flag : ''} />
        <Popup
          title='2016.05'
          x={123}
          y={104}
          lineY={182}
          flag='2016-05'
          flagSetter={setFlag}
          currentFlag={flag}
        >
          <div>{t('2016.05-text')}</div>
        </Popup>

        <Popup
          title='2017.12'
          x={284}
          y={194}
          lineY={162}
          isReverse
          flag='2017-12'
          flagSetter={setFlag}
          currentFlag={flag}
        >
          <div>{t('2017.12-text')}</div>
        </Popup>

        <Popup
          title='2018.12'
          x={480}
          y={93}
          lineY={182}
          style={{ width: 260 }}
          flag='2018-12'
          flagSetter={setFlag}
          currentFlag={flag}
        >
          <div>{t('2018.12-text')}</div>
        </Popup>

        <Popup
          title='2019.01'
          isReverse
          x={624}
          y={168}
          lineY={160}
          style={{ width: 128 }}
          flag='2019-01'
          flagSetter={setFlag}
          currentFlag={flag}
        >
          <div>{t('2019.01-text')}</div>
        </Popup>

        <Popup
          title='2020.03'
          x={792}
          y={-100}
          lineY={315}
          style={{ width: 280 }}
          flag='2020-03'
          flagSetter={setFlag}
          currentFlag={flag}
        >
          <div>{t('2020.03-text')}</div>
          {isZh ? (
          <>
          <div style={{ marginTop: 8 }}>
            <strong>2020.11</strong>
          </div>
          <div>{t('2020.11-text')}</div>
          </>
          ): null }
        </Popup>

        <Popup
          title='2021.07'
          x={1000}
          y={70}
          lineY={159}
          style={{ width: 310 }}
          isReverse
          flag='2021-07'
          flagSetter={setFlag}
          currentFlag={flag}
        >
          <div>
          {t('2021.07-text')}
          </div>
          <div style={{ marginTop: 8 }}>
            <strong>2021.12</strong>
          </div>
          <div>{t('2021.12-text')}</div>
        </Popup>

        <Popup
          title='2022.01'
          x={1093}
          y={-40}
          lineY={140}
          style={{ width: 230 }}
          flag='2022-01'
          flagSetter={setFlag}
          currentFlag={flag}
        >
          <div>{t('2022.01-text')}</div>
        </Popup>

        <Dot
          x={15}
          y={338}
          currentFlag={extraPopopVisible ? flag : ''}
          flagSetter={setFlag}
          flag='2015'
        />
        <Dot
          x={109}
          y={338}
          isWhite
          currentFlag={flag}
          flagSetter={setFlag}
          flag='2016-05'
        />
        <Dot
          x={187}
          y={335}
          currentFlag={extraPopopVisible ? flag : ''}
          flagSetter={setFlag}
          flag='2017'
        />
        <Dot
          x={270}
          y={334}
          isWhite
          currentFlag={flag}
          flagSetter={setFlag}
          flag='2017-12'
        />
        <Dot
          x={357}
          y={330}
          currentFlag={extraPopopVisible ? flag : ''}
          flagSetter={setFlag}
          flag='2018'
        />
        <Dot
          x={466}
          y={323}
          isWhite
          currentFlag={flag}
          flagSetter={setFlag}
          flag='2018-12'
        />
        <Dot
          x={527}
          y={315}
          currentFlag={extraPopopVisible ? flag : ''}
          flagSetter={setFlag}
          flag='2019'
        />
        <Dot
          x={610}
          y={305}
          isWhite
          currentFlag={flag}
          flagSetter={setFlag}
          flag='2019-01'
        />
        <Dot
          x={697}
          y={286}
          currentFlag={extraPopopVisible ? flag : ''}
          flagSetter={setFlag}
          flag='2020'
        />
        <Dot
          x={779}
          y={266}
          isWhite
          currentFlag={flag}
          flagSetter={setFlag}
          flag='2020-03'
        />
        <Dot
          x={867}
          y={237}
          currentFlag={extraPopopVisible ? flag : ''}
          flagSetter={setFlag}
          flag='2021'
        />
        <Dot
          x={986}
          y={192}
          isWhite
          currentFlag={flag}
          flagSetter={setFlag}
          flag='2021-07'
        />
        <Dot
          x={1038}
          y={169}
          currentFlag={extraPopopVisible ? flag : ''}
          flagSetter={setFlag}
          flag='2022'
        />
        <Dot
          x={1080}
          y={152}
          isWhite
          currentFlag={flag}
          flagSetter={setFlag}
          flag='2022-01'
        />
      </div>
    </>
  );
};

const AboutUsHeroPage: NextPage = () => {
  const { t } = useTranslation('about-us');
  return (
    <div className='first-page'>
      <Seo page='about-us' />
      <h1 style={{paddingLeft: "10%", paddingRight: "10%" }}>{t('hero-title')}</h1>

      <div className='info-box'>
        <div className='left'>
          <Image
            src='https://cdn-official-website.juzibot.com/images/about-us/photo.png'
            width={660}
            height={400}
            alt='photo'
            draggable='false'
          />
          <div className='logo-box'>
            <img
              src='https://cdn-official-website.juzibot.com/images/logo.png'
              alt='logo'
              draggable='false'
            />
          </div>
        </div>

        <div className='right'>
          <div>{t('content-1')}</div>
          <div
            style={{ marginTop: 24 }}
            dangerouslySetInnerHTML={{ __html: t('content-2') }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const AboutAiNativePage: NextPage = () => {
  const { i18n } = useTranslation('about-us');
  const isZh = i18n.language === 'zh';
  const { t } = useTranslation('about-us');
  return (
    <div className='first-page !pt-0'>
      <Seo page='about-us' />
      <div className='flex flex-col items-center justify-center'>
        <div className='!text-[32px] font-semibold'>{t('section-2-title')}</div>
        <div className='!text-[32px] font-semibold'>
        {t('section-2-subtitle')}
        </div>
      </div>

      <div className='info-box justify-center'>
        <div className='flex-1 flex items-center justify-center'>
        {isZh ? (
          <img
            src='_images/image-page/about-us-1.png'
            alt='photo'
            className='w-[1220px]'
            draggable='false'
          />
        ) : 
        <img
            src='_images/image-page/about-us-1-en.png'
            alt='photo'
            className='w-[1220px]'
            draggable='false'
          />
        }
        </div>
      </div>
    </div>
  );
};

const AboutUsPage: NextPage = () => {
  function initPlayer() {
    const s = document.createElement('script');
    s.innerHTML = `if (typeof DPlayer !== 'undefined') {
        const dp = new DPlayer({
          container: document.getElementById('video'),
            video: {
              url: 'https://cdn-official-website.juzibot.com/images/about-us/about-juzi.mp4',
              pic: 'https://cdn-official-website.juzibot.com/images/about-us/cover-02.jpg'
            },
        });
      }`;
    document.querySelector('body')!.appendChild(s);
  }
  useEffect(() => {
    initPlayer();
  }, []);
  const { i18n } = useTranslation('about-us');
  const isZh = i18n.language === 'zh';
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)');

  if (isSmallDevice) {
    return (
      <ContactUsM />
    )
  }

  return (
    <div className={i18n.language}>
      <Seo page='about-us' />
      <div className='wrapper about-us-page'>
        <div className='container'>
          <AboutUsHeroPage />
        </div>
      </div>
      <div className='wrapper about-us-page' style={{ background: 'unset' }}>
        <div className='container'>
          <AboutAiNativePage />
        </div>
      </div>
      <div className='horizontal-line'></div>
      <div className='wrapper growth-wall'>
            <div className='container'>
              <GrowthWall />
            </div>
          </div>
      {isZh ? (
        <>
          <div className='wrapper video-box'>
            <div className='container'>
              <div className='video-container'>
                <div className='video' id='video'></div>
              </div>
            </div>
            <Script
              src='https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js'
              onLoad={initPlayer}
              async
            ></Script>
          </div>

          <div className='wrapper customer-display'>
            <div className='container'>
              <CustomerDisplay />
            </div>
          </div>
        </>
      ) : null}
      <div className='wrapper certificates'>
            <div className='container'>
              <Certificates />
            </div>
          </div>
      {isZh ? (
        <> 
          <div className='wrapper news'>
            <div className='container'>
              <NewsPage />
            </div>
          </div>

        </>
      ) : null}
      <div className='wrapper about-appeal'>
            <div className='container'>
              <AboutUsAppealBar />
            </div>
          </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', [
        'common',
        'homepage',
        'seos',
        'about-us',
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default AboutUsPage;
