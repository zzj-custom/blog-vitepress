// const plugins = require("./plugins.js")

module.exports = {
  plugins: [
    [ 
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ]
  ],
  // 网站标题
  title: '求贤若渴，求知若愚',
  // 网站描述
  description: '知识文章和随笔记录',
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
    breaks: true,
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    // config: (md) => {
    //   // use more markdown-it plugins!
    //   md.use(require('markdown-it-xxx'))
    // }
  },
  // 主题配置
  themeConfig: {
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: '上次更新时间', // string | boolean
    // 启动页面丝滑滚动
    search: false,
    searchMaxSuggestions: 10,
    smoothScroll: true,
    logo: '/favicon.ico',
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
            text: '基础内容',
            link: '/phpunit/base'
          },
          {
            text: '断言',
            link: '/phpunit/assert'
          },
          {
            text: '测试替身',
            link: '/phpunit/mock'
          }
        ],
        sidebarDepth: 3
      }
    ]
  }
}