import { isBrowserChrome } from '@src/utils/isBrowserChrome';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import Script from 'next/script';
import Link from 'next/link';
import { AboutUsAppealBar } from './about-us';
import Seo from '@src/components/common/Seo';

const StarStaffPage: NextPage<{
  onCurrentChange: (c: number | undefined) => void;
  currentIndex?: number;
  options: {
    scale: number;
    depth: number;
    name: string;
    title: string;
    brief: string;
  }[];
}> = ({ onCurrentChange, options, currentIndex }) => {
  function initParallax() {
    const s = document.createElement('script');
    s.innerHTML = `
      if (typeof Parallax !== 'undefined') {
        const scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
      }`;
    document.querySelector('body')!.appendChild(s);
  }

  useEffect(() => {
    initParallax();
  }, []);

  return (
    <>
      <Script
        src="https://cdn-official-website.juzibot.com/images/parallax.js"
        onLoad={initParallax}
        async
      ></Script>
      {Array(7)
        .fill(null)
        .map((_, i) => {
          return (
            <div
              className="item"
              key={i}
              data-depth={options[i].depth.toString()}
              onMouseMove={() => onCurrentChange(i)}
              onMouseLeave={() => onCurrentChange(undefined)}
            >
              <img
                src={`https://cdn-official-website.juzibot.com/images/about-us/culture/图-0${
                  i + 1
                }.png`}
                alt="staff"
                draggable="false"
                style={{
                  transform: `scale(${options[i].scale})`,
                  borderColor: currentIndex === i ? '#d0d8f8' : undefined,
                }}
              ></img>
            </div>
          );
        })}
    </>
  );
};

const VideoPage: NextPage = () => {
  function initPlayer() {
    const s = document.createElement('script');
    s.innerHTML = `if (typeof DPlayer !== 'undefined') {
        const dp = new DPlayer({
          container: document.getElementById('video'),
            video: {
              url: 'https://cdn-official-website.juzibot.com/images/about-us/culture/thanksgiving.mp4',
              pic: 'https://cdn-official-website.juzibot.com/images/about-us/cover-01.jpg'
            },
        });
      }`;
    document.querySelector('body')!.appendChild(s);
  }
  useEffect(() => {
    initPlayer();
  }, []);
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js"
        onLoad={initPlayer}
        async
      ></Script>
      <div className="video" id="video"></div>

      <div className="quote">
        <div className="left">
          <img
            src="https://cdn-official-website.juzibot.com/images/about-us/culture/quote.png"
            alt="icon"
            draggable="false"
          ></img>
        </div>
        <div className="center">
          <h2>在不确定的日子，拥有确定的未来</h2>
          <div className="extra">
            <div className="name">李佳芮 CEO</div>
            <Link href="https://blog.juzibot.com/1944/">
              <a className="link" target="_blank">
                写在句子互动的 2024 年 →
              </a>
            </Link>
          </div>
        </div>
        <div className="right">
          <img
            src="https://cdn-official-website.juzibot.com/images/about-us/culture/quote.png"
            alt="icon"
            draggable="false"
          ></img>
        </div>
      </div>
    </>
  );
};

const ValuePage: NextPage = () => {
  const items = [
    {
      title: '客户第一',
      subtitle:
        '帮客户达成他的业务目标，是所有事情的第一优先级。呈现给客户我们的专业，而不是单纯的态度好',
    },
    {
      title: '主人翁精神',
      subtitle:
        '主动发现问题，提出问题，并想办法解决问题，敢于承担责任。为结果负责，关注任务的结果和产出，过程中遇到困难，想办法解决困难，努力做100分交付',
    },
    {
      title: '高效协同',
      subtitle:
        "If it didn't happened on the document, it didn't happen。高质量交付，交付自己能力范围内的最好，最大程度减少不必要沟通",
    },
    {
      title: '批判精神',
      subtitle:
        '对所有事情保持理智的质疑，并敢于质疑。批判的同时，也同样给出自己的看法和建议',
    },
    {
      title: '始终好奇',
      subtitle: '跳出思维定式去思考，发掘创新点。能明智地冒险，拥抱挑战',
    },
    {
      title: '真诚透明',
      subtitle:
        '有问题先沟通解决，并且主动沟通。直截了当得表达自己的观点和想法，不隐藏，也不需要他人来猜',
    },
  ];
  return (
    <>
      <h2>持续成长，独当一面</h2>
      <section className="content">
        {Array(6)
          .fill(null)
          .map((_, i) => {
            return (
              <div className="item" key={i} id={`staff-${i}`}>
                <img
                  src={`https://cdn-official-website.juzibot.com/images/about-us/culture/图标-${
                    i + 1
                  }.png`}
                  alt="icon"
                  draggable="false"
                ></img>
                <div className="title">{items[i].title}</div>
                <div className="subtitle">{items[i].subtitle}</div>
              </div>
            );
          })}
      </section>
    </>
  );
};

const CautureHeroPage: NextPage = () => {
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
      <h1>与优秀的人一起，打造大模型驱动的数字员工</h1>
      <Swiper
        spaceBetween={30}
        style={{ width: '100%', borderRadius: 16, marginTop: 40 }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
          autoplay(swiper);
        }}
        onActiveIndexChange={(swiper) => {
          setCurrentIndex(swiper.activeIndex);
          debounceAutoPlay();
        }}
      >
        {Array(3)
          .fill(null)
          .map((_, i) => {
            return (
              <SwiperSlide key={i} className="photo-swiper">
                <img
                  src={`https://cdn-official-website.juzibot.com/images/about-us/culture/photo-${
                    i + 1
                  }.png`}
                  alt="photo"
                  draggable="false"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>

      <div className="pagination">
        {Array(3)
          .fill(null)
          .map((_, idx) => (
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

const CulturePage: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number | undefined>();
  const starStaffData = [
    {
      scale: 1,
      depth: 0.2,
      name: '李双',
      title: '行政',
      brief: '革新性的规划了员工福利活动，高标准交付，事事有着落。',
      x: 150,
      y: 126,
    },
    {
      scale: 1,
      depth: 0.3,
      name: '田荣生',
      title: '客户成功',
      brief:
        '未来我会和公司共同成长，一起进步，尽自己的绵薄之力，承担更多责任！',
      x: 260,
      y: 334,
    },
    {
      scale: 0.9,
      depth: 0.4,
      name: '苏畅',
      title: '后端工程师',
      brief:
        'WhatsApp 项目组的主心骨，代码的主要编写者之一；合理拆解项目，每个 PR 都有 issue / 描述，提升了长期价值。',
      x: 444,
      y: 80,
    },
    {
      scale: 0.9,
      depth: 0.5,
      name: '韩祥宇',
      title: '解决方案专家',
      brief:
        '以高标准为锚定，以写好每一份文档为基础标准。希望在句子的每一天都能比昨天多进步一点点。',
      x: 819,
      y: 442,
    },
    {
      scale: 0.8,
      depth: 0.4,
      name: '闫小娟',
      title: '客户成功',
      brief:
        '主导句子互动企业微信产品的涨粉功能模块重构测试、提交整理 bug 和推进技术修复进度；主人翁意识，认真负责、严谨仔细。',
      x: 943,
      y: 116,
    },
    {
      scale: 1,
      depth: 0.3,
      name: '曹康龙',
      title: '管培生',
      brief: '句子互动年轻人的代名词：持续学习、拥有激情和梦想、保持好奇。',
      x: 1099,
      y: 280,
    },
    {
      scale: 1,
      depth: 0.2,
      name: '曹啸',
      title: '客户成功',
      brief:
        '与句子团队在一起特别踏实，虽然会遇到困难、会遇到压力，但却有信心和团队一起去面对，去解决。',
      x: 1189,
      y: 80,
    },
  ];
  const isChrome = isBrowserChrome();

  return (
    <>
      <Seo page="culture" />
      <div className="wrapper culture-hero-page">
        <div className={`bg ${!isChrome && 'moz'}`}></div>
        <div className="container" style={{minWidth:1200}}>
          <CautureHeroPage />
        </div>
      </div>

      <div className="wrapper value-page">
        <div className="container" style={{minWidth:1200}}>
          <ValuePage />
        </div>
      </div>

      <div className="wrapper video-page">
        <div className="container" style={{minWidth:1200}}>
          <VideoPage />
        </div>
      </div>

      <div className="wrapper star-staff">
        <div className="container" id="scene" style={{minWidth:1200}}>
          <StarStaffPage
            options={starStaffData}
            currentIndex={currentIndex}
            onCurrentChange={setCurrentIndex}
          />
          <div className="info">
            <h2>与优秀的人一起，挑战更多不可能</h2>
            <Link href="https://juzihudong.feishu.cn/docs/doccnxnzqL1sk2MvW7JHDpA1lRh">
              <a className="read-more" target="_blank">
                认识他们 →
              </a>
            </Link>
          </div>
          {currentIndex !== undefined ? (
            <div
              className="brief-box"
              style={{
                marginLeft:
                  starStaffData[currentIndex].x +
                  120 +
                  (currentIndex >= 3 ? -20 : 0) +
                  (currentIndex >= 5 ? -540 : 0),
                // 120 -
                // (1 - starStaffData[currentIndex].scale) * 88
                marginTop: starStaffData[currentIndex].y,
              }}
            >
              <div className="top">
                <div className="name">{starStaffData[currentIndex].name}</div>
                <div className="title">{starStaffData[currentIndex].title}</div>
              </div>
              <div className="bottom">{starStaffData[currentIndex].brief}</div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="wrapper about-appeal">
        <div className="container" style={{ marginTop: 100, minWidth:1200 }}>
          <AboutUsAppealBar />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', [
        'common',
        'homepage',
        'seos',
      ])),
      locale: locale?.toLowerCase() ?? 'zh',
    },
  };
};

export default CulturePage;
