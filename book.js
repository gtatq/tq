let plugins = [
  '-lunr',
  '-sharing',
  '-search',
  '-favicon',
  'code',
  '-livereload',
  'expandable-chapters',
  'theme-lou',
  'back-to-top-button',
  'search-pro',
 "lightbox",
  'insert-logo',
  "hide-element"
];
// build时候，livereload无需使用
if (process.env.NODE_ENV == 'dev') plugins.push('livereload');

module.exports = {
  title: 'TQ教程',
  author: 'TQ',
  lang: 'zh-cn',
  description: 'TQ使用教程',
  plugins,
  // 插件配置
  pluginsConfig: {
    // gitbook-plugin-code 插件配置
    code: {
      copyButtons: true,
    },
    // gitbook-plugin-theme-lou 主题插件配置
    'theme-lou': {
      color: '#2096FF', // 主题色
      favicon: 'assets/favicon.ico', // 网站图标
      logo: 'assets/logo.png', // Logo
      copyrightLogo: 'assets/copyright.png', // 背景水印版权图
      autoNumber: 3, // 自动给标题添加编号(如1.1.1)
      forbidCopy: true, // 页面是否禁止复制
      'search-placeholder': 'TQ全菜单使用教程', // 搜索框默认文本
      'hide-elements': ['.summary .gitbook-link'], // 需要隐藏的标签
      copyright: {
        author: 'TQ', // 底部版权展示的作者名
      },
    },
  },
  // 插件变量
  variables: {
    // 主题插件变量
    themeLou: {
      // 顶部导航栏配置
      nav: [
        {
          target: '_blank', // 跳转方式: 打开新页面
          url: 'https://jq.qq.com/?_wv=1027&k=Avx57sBz', // 跳转页面
          name: 'QQ群', // 导航名称
        },
        {
          target: '_blank', // 跳转方式: 打开新页面
          url: 'http://gta5tq.vip/', // 跳转页面
          name: '发卡网', // 导航名称
        },
        {
          target: '_blank', // 跳转方式: 打开新页面
          url: 'https://edu.csdn.net/course/detail/32032', // 跳转页面
          name: '客服QQ', // 导航名称
        },
      ],
    },
  },



 "pluginsConfig": {
      "insert-logo": {
        "url": "https://s2.loli.net/2022/04/11/IaSENu1p9eHkCzy.jpg",
        "style": "background: none; max-height: 100px; min-height: 100px"
      }
    }


     
};




