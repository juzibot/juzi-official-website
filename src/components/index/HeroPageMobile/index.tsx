import { IFeatureCardProps } from '@src/interfaces';
import Aos from 'aos';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Button, Input, message, Modal } from 'antd';
import axios from 'axios';
import { phoneErrMsg, phoneRegex } from '@src/utils/validatePhoneNum';
import PhotoCarousel from '@src/components/PhotoCarousel';

export const indexLogos = [3, 45, 5, 6, 46, 19, 22, 36, 38]
  .map(v => `https://cdn-official-website.juzibot.com/images/index-logos/${v}.png`);

const FeatureCard: NextPage<IFeatureCardProps> = (props) => {
  return (
    <div className="border border-[#F2F6FF] border-solid rounded-2xl bg-white p-6 mt-6 shadow-sm">
      <div className="flex items-center">
        <img
          alt="icon"
          className="flex-shrink-0 h-[54px] -ml-2"
          src={props.iconUrl}
        />
        <h4 className="flex-1 text-jz-text-1 text-[17px] mb-3">{props.title}</h4>
      </div>
      <p className="text-[15px]">{props.subTitle}</p>
    </div>
  );
}

const HeroPage: NextPage = () => {
  const [inputPhone, setInputPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (process.browser) {
      Aos.init();
    }
  }, []);

  const handleSubmit = () => {
    if (!phoneRegex.test(inputPhone)) {
      return message.info(phoneErrMsg);
    }
    setSubmitting(true);
    axios
      .post('/api/contact', { name: '', phone: inputPhone, company: '', remark: '' })
      .then(() => {
        Modal.success({
          centered: true,
          content: '提交成功，我们将在 24 小时内联系您！',
          okText: '继续浏览',
          okButtonProps: { className: '!bg-[#0555FF] !border-[#0555FF]' },
        });
      })
      .finally(() => setSubmitting(false));
  }

  return (
    <>
      <div className="bg-red pt-8 text-white">
        <h1 className="px-4 text-[1.75rem] text-center text-white font-bold mb-3">面向大组织的对话式营销云</h1>
        <p className="px-4 text-[13px]">面向大组织的对话式营销云，助力互联网时代党政军、央国企等大型组织建立以社交关系为核心（如 5G 消息、飞书、钉钉等）为核心的营销体系，高效触达与深度连接数以千万计的老百姓和终端用户，让消息触达和营销事半功倍。全力助力大型组织实现高效的数智化转型。</p>
        <div className="mx-4 px-4 bg-[#F9F9F9] rounded-3xl h-12 pl-4 pr-1 flex justify-between items-center max-w-[400px] border border-solid border-[#EEEEEE]">
          <Input
            className="!bg-[#F9F9F9] !border-none hover:!border-0 focus:!border-0 focus:!shadow-none !placeholder-[#AAB9CA]"
            placeholder="输入手机号立刻开始"
            maxLength={32}
            value={inputPhone}
            onChange={e => setInputPhone(e.target.value.trim()) }
          />
          <Button
            size="large"
            type="primary"
            className="ml-4 px-5 !rounded-3xl !bg-red font-semibold !border-red"
            loading={submitting}
            onClick={handleSubmit}
          >免费使用</Button>
        </div>
        <div className="px-4 flex justify-center pb-6">
          <img className="mt-6 max-w-full" src="https://cdn-official-website.juzibot.com/images/index-picture-mobile-20230331.svg" alt="" />
        </div>
      </div>

      <div className="">
        <h2 className="px-4 text-xl text-center text-jz-text-1 mt-[56px] mb-4">10倍提高政企、金融行业的服务效率</h2>
        <div className="w-full overflow-x-auto">
         <PhotoCarousel itemWidth={162} itemHeight={72} itemMarginRight={12} photos={indexLogos} />
        </div>

        <div className="px-4 pb-[72px] mt-10 bg-[url(https://cdn-official-website.juzibot.com/images/icons/index-hero-feature-bg-red.svg)] bg-no-repeat bg-left-bottom bg-contain">
          <FeatureCard
            iconUrl="https://cdn-official-website.juzibot.com/images/icons/cloud.png"
            title="智能对话服务"
            subTitle="对话式机器人24小时在线自动应答、多平台的会话消息聚合管理，句子互动帮你打造更高效的服务云中台。"
            iconWidth="93"
            iconHeight="77"
          />
          <FeatureCard
            iconUrl="https://cdn-official-website.juzibot.com/images/icons/solution.png"
            title="规模化服务解决方案提供商"
            subTitle="无需额外开发，即可上手规模化服务你的人群。10 倍提效，人均服务 20 万客户，并为你的人群提供千人千面的服务体验。"
            iconWidth="92"
            iconHeight="85"
          />
          <FeatureCard
            iconUrl="https://cdn-official-website.juzibot.com/images/icons/security.png"
            title="安全·可靠的数据保护"
            subTitle="句子互动支持私有化部署，部署过程简单、规范。全方面的保护你的企业数据。安全、放心的提升企业服务效率"
            iconWidth="92"
            iconHeight="73"
          />
        </div>
      </div>
    </>
  )
};

export default HeroPage;
