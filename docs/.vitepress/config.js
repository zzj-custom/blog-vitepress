module.exports = {
  // 网站标题
  title: 'dream',
  // 网站描述
  description: '汤圆不太甜',
  base: 'blog-vitepress',
  // 打包目录
  dest: './dist',
  head: [
    // 添加图标
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  markdown: {
    lineNumbers: true
  },
  // 使用插件
  plugins: [
    '@vuepress/active-header-links', // 页面滚动时自动激活侧边栏链接的插件
    '@vuepress/back-to-top', // 返回顶部插件
    '@vuepress/medium-zoom', // 图片预览插件
    '@vuepress/nprogress', //页面顶部进度条
    ['vuepress-plugin-code-copy', true], // 代码复制
  ],
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
        children: [{
            text: '测试替身',
            link: '/phpunit/mock'
          },
        ],
        sidebarDepth: 3
      }
    ]
  }
}