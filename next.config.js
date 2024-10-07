const { i18n } = require('./next-i18next.config');
const dotenv = require('dotenv');
dotenv.config();

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['cdn-official-website.juzibot.com', 's3.cn-north-1.amazonaws.com.cn'],
  },
  publicRuntimeConfig: {
    appVersion: process.env.npm_package_version,
    startTime: new Date().toLocaleString(),
  },
  async redirects() {
    return [
      {
        source: '/join-us',
        destination: 'https://juzihudong.jobs.feishu.cn/juzibot',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/en/start',
        permanent: true,
      },
      {
        source: '/start',
        destination: '/',
        permanent: true,
      },
      {
        source: '/features/rpa',
        destination: '/404',
        permanent: true,
      },
    ];
  },
};
