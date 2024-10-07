export const host =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://juzibot.com';

export const hireUrl = 'https://k0auuqcihb.jobs.feishu.cn/611573';
export const juziToken = process.env.JUZI_API_TOKEN || '';
export const juziHelloMsg = process.env.JUZI_HELLO_MSG || '';
export const feishuBotUrl = process.env.FEISHU_BOT_URL || '';
export const juziApiUrl = process.env.JUZI_API_URL || '';

export const indexLogos = [2, 3, 45, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]
  .map(v => `https://cdn-official-website.juzibot.com/images/index-logos/${v}.png`);

export const HIDE_CONTACT_US = true;