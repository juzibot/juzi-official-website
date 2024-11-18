import { isBrowserChrome } from '@src/utils/isBrowserChrome';
import { GetServerSideProps, NextPage } from 'next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import AppealBar from '@src/components/index/AppealBar';
import Seo from '@src/components/common/Seo';
import Image from 'next/image';

const ContactPlatformPage: NextPage = () => {
  const [isChrome, toggleChrome] = useState(true);
  useEffect(() => {
    toggleChrome(isBrowserChrome());
  }, []);
  return (
    <>
      <Seo page="feature-contact-platform" />
      <div className="wrapper security">
        <div className={`bg ${!isChrome && 'moz'}`}></div>
        <div
          className="container"
          style={{
            backgroundImage: `url('https://cdn-official-website.juzibot.com/images/icons/features/security.svg')`,
            height: 600,
          }}
        >
          <h1>安全与合规</h1>
          <div className="subtitle">
            数据保护技术措施、数据保护管理组织措施、信息安全事件的响应、第三方支持
          </div>
        </div>

        <div className="container brief">
          <h3>简要介绍</h3>
          <article className="content">
            感谢您关注与垂询北京句子科技有限公司（以下简称“句子互动”或“我们”）的产品与服务。句子互动成立于
            2017 年，集成国内外主流 IM
            平台，为企业与开发者提供基于即时通信软件的规模化运营服务，是国内领先的对话式营销云。句子互动团队在
            RPA、智能对话与私域运营服务领域不断创新，每日提升 100
            万人次的私域体验。目前，句子互动在规模化获客、自动化营销等领域积累了丰富的经验，并已为消费品、教育、医疗健康、金融保险、政务服务等多个领域的客户提供了优质高效的支持。
          </article>

          <article className="content">
            在注重业务能力发展，提高运营效率的同时，句子互动也时刻关注着数据安全体系建设，强调如何加强数据保护而不仅仅是唯效率论。我们不仅在公司内部管理及宣导方面，与国内法律法规和国际通用规则保持同步更新，还定期通过聘请专业第三方机构进行业务安全规范的审查来提高和完善数据合规能力。
          </article>
        </div>
      </div>

      <div className="wrapper security-measures">
        <div className="container">
          <h3>安全与合规措施</h3>
          <div className="measures">
            <div className="item">
              <Image
                draggable="false"
                src="https://cdn-official-website.juzibot.com/images/icons/security-1.svg"
                alt="security-icon"
                width="64"
                height="64"
              />
              <h4>数据保护技术措施</h4>
              <div className="content">
                我们已采取符合业界标准、合理可行的安全防护措施保护您的数据，防止数据遭到未经授权访问、公开披露、使用、修改、损坏或丢失。例如，我们会使用加密技术提高数据的安全性，在您本地与服务器之间交换数据时受
                SSL 协议加密保护，我们提供 HTTPS
                协议安全浏览方式；我们会使用受信赖的保护机制防止系统遭到恶意攻击；我们会部署访问控制机制，尽力确保只有授权人员才可访问相关信息。
              </div>
            </div>

            <div className="item">
              <Image
                draggable="false"
                src="https://cdn-official-website.juzibot.com/images/icons/security-2.svg"
                alt="security-icon"
                width="64"
                height="64"
              />
              <h4>数据保护管理组织措施</h4>
              <div className="content">
                我们建立了以数据为核心、围绕数据生命周期进行的数据安全管理体系，从组织建设、制度设计、人员管理及产品技术的维度提升个人信息的安全性。我们已经设置了信息安全保护专职部门，并指定了专人负责信息安全保护。我们通过培训宣传，不断加强员工对于信息保护重要性的认识。
              </div>
            </div>

            <div className="item">
              <Image
                draggable="false"
                src="https://cdn-official-website.juzibot.com/images/icons/security-3.svg"
                alt="security-icon"
                width="64"
                height="64"
              />
              <h4>信息安全事件的响应</h4>
              <div className="content">
                如果我们的物理、技术或管理防护设施遭到破坏，导致信息被非授权访问、公开披露、篡改或毁坏，导致您的合法权益受损的，我们会及时采取合理必要的措施，以尽可能降低对您个人的影响。如发生个人信息安全事件，我们还将按照法律法规的要求向您告知安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施。我们将以短信、电话、推送通知及其他合理渠道告知您，难以逐一告知的，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，上报信息安全事件的处置情况。
              </div>
            </div>

            <div className="item">
              <Image
                draggable="false"
                src="https://cdn-official-website.juzibot.com/images/icons/security-4.svg"
                alt="security-icon"
                width="64"
                height="64"
              />
              <h4>第三方支持</h4>
              <div className="content">
                我们一向关注数据安全与保护，2021
                年句子互动专门立项拨款，聘请律师团队对公司的业务模式进行了体系化的合规检查，并严格按照律师提出的合规建议进行了流程完善。自
                2022
                年起，我们持续针对业务执行过程中产生的数据问题及时咨询专业律师，以维护客户和自身的权益。
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper appeal-bar">
        <div className="container">
          <AppealBar />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  locale;
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
  // return {
  //   props: {
  //     ...(await serverSideTranslations(locale || 'zh', [
  //       'common',
  //       'homepage',
  //       'seos',
  //     ])),
  //     locale: locale?.toLowerCase() ?? 'zh',
  //   },
  // };
};

export default ContactPlatformPage;
