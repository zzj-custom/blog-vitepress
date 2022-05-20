// const plugins = require("./plugins.js")

module.exports = {
  plugins: {
    '@vuepress/back-to-top': true
  },
  // 网站标题
  title: 'dream',
  // 网站描述
  description: '小乖乖',
  // 打包目录
  dest: './dist',
  base:'/blog-vitepress/',
  head: [
    // 添加图标
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  markdown: {
    lineNumbers: false,  // 显示行号
    html: true,
    xhtmlOut: true,
    breaks: true
  },
  // 主题配置
  themeConfig: {
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: 'Last Updated', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    nav: [{
        text: '我的个人网站',
        link: 'https://github.com/zzj-custom'
      },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/976022057793207'
      },
      {
        text: 'Github',
        link: 'https://github.com/zzj-custom'
      }
    ],
    sidebar: [{
        text: 'php单元测试',
        children: [
          {
            text: '测试替身',
            link: '/phpunit/mock'
          },
        ],
        sidebarDepth: 3
      }
    ]
  }
}