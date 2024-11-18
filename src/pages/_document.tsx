/* eslint-disable react/no-unescaped-entities */
import { getPageKeywords } from '@src/utils/seo';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import React from 'react';

class JuziSiteDocument extends Document<{
  keywords: string;
}> {
  static getInitialProps = async (ctx: DocumentContext) => {
    const pathname = ctx.asPath;
    const keywords = getPageKeywords(pathname);
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      keywords,
    };
  };

  componentDidUpdate() {}

  render() {
    const { keywords } = this.props;
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=1440, initial-scale=1.0" />
          <meta name="baidu-site-verification" content="code-a7uFgEHa8D" />
          <meta name="baidu-site-verification" content="code-napTkvGp7b" />
          <meta name="keywords" content={keywords} />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body style={{ height: '100vh', overflowY: 'auto' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default JuziSiteDocument;
