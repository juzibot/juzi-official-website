import mitt from 'mitt'

export type EventType = {
  'contact_us': ContactUsOption
}

export type ContactUsOption = {
  type?: 'default' | 'ai' | 'rpa' // style type
  qrCode?: 'sf-01' | 'sf-02' | 'sf-03' | 'sf-04' | 'juzibot-01' | 'juzibot-02' | 'ai-01' // https://juzihudong.feishu.cn/sheets/WUqgsmlJKhLZjvt2UlmcLb6In5c
}


export const emitter = mitt<EventType>();