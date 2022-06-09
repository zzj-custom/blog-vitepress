// import DefaultTheme from 'vitepress/theme';
// import './custom.styl';

// export default DefaultTheme;

// 导入vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import Theme from 'vitepress/dist/client/theme-default';

// 导入主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css';
import './custom.styl';

// 导入插件的主题
import { registerComponents } from './register-components.js';

export default {
  ...Theme,
  enhanceApp({ app }) {
    registerComponents(app);
  },
};
