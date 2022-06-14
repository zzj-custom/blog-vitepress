// import DefaultTheme from 'vitepress/theme';
// import './custom.styl';

// export default DefaultTheme;

// 导入vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import Theme from 'vitepress/dist/client/theme-default';

import axios from 'axios';

import NotFound from './components/NotFound.vue';

// 导入主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css';
import './css/custom.styl';

// 导入插件的主题
import { registerComponents } from './register-components.js';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

export default {
  ...Theme,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    registerComponents(app);
    app.use(ElementPlus);
  },
};
