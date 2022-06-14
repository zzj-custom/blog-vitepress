// 参考 https://github.com/element-plus/element-plus/blob/dev/website/md-loader/index.js
// 参考 https://github.com/calebman/vuepress-plugin-demo-container/blob/master/src/index.js
const mdContainer = require('markdown-it-container');
const {
  highlight,
} = require('vitepress-theme-demoblock/node_modules/vitepress/dist/node/markdown/plugins/highlight');

const blockPlugin = (md) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      // const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1) {
        // const description = m && m.length > 1 ? m[1] : ''
        content =
          tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
        const vueDemoContent =
          content && tokens[idx + 1].info.trim() === 'vue'
            ? `<!--vue-demo:${content}:vue-demo-->`
            : content
            ? `<!--vue-demo:${tokens[idx].info
                .trim()
                .replace('demo', '')}:vue-demo-->`
            : '';
        return `<demo sourceCode="${md.utils.escapeHtml(content)}">${replaceStr(
          vueDemoContent
        )}`;
      }
      return '</demo>';
    },
  });
};

const codePlugin = (md, options) => {
  const lang = options?.lang || 'vue';
  const defaultRender = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    // 判断该 fence 是否在 :::demo 内
    const prevToken = tokens[idx - 1];
    const isInDemoContainer =
      prevToken &&
      prevToken.nesting === 1 &&
      prevToken.info.trim().match(/^demo\s*(.*)$/);
    if (isInDemoContainer) {
      const m = prevToken.info.trim().match(/^demo\s*(.*)$/);
      const description = m && m.length > 1 ? m[1] : '';
      const inContainerLang = token.info.trim();
      // md.render(description).html
      return `
        ${
          description && inContainerLang === 'vue'
            ? `<template #description>
          <div>${md.renderInline(description)}</div>
        </template>`
            : ''
        }
        <template #highlight>
          <div class="language-${inContainerLang}">${highlight(
        token.content,
        inContainerLang
      )}</div>
        </template>`;
    }
    return defaultRender(tokens, idx, options, env, self);
  };
};

const replaceStr = (str) => {
  if (!str) {
    return str;
  }
  if (!/`/.test(str)) {
    return str;
  }
  return str
    .split('`')
    .map((item, key, arr) => {
      return (
        item + `${key % 2 ? '</code>' : key === arr.length - 1 ? '' : '<code>'}`
      );
    })
    .join('');
};

const renderDemoBlock = require('vitepress-theme-demoblock/demoblock/render');
const scriptRegexp = /^.*(<script[^>]*>.*<\/script>).*$/s;
const styleRegexp = /^.*(<style[^>]*>.*<\/style>).*$/s;

const renderPlugin = (md, options) => {
  const render = md.render;
  md.render = (...args) => {
    let result = render.call(md, ...args);
    const startTag = '<!--vue-demo:';
    const endTag = ':vue-demo-->';
    if (result.indexOf(startTag) !== -1 && result.indexOf(endTag) !== -1) {
      const { template, script, style } = renderDemoBlock(result, options);
      result = template;
      const data = md.__data;
      const hoistedTags = data.hoistedTags || (data.hoistedTags = []);
      hoistedTags.push(script);
      hoistedTags.push(style);
    }
    return result;
  };
};

const demoBlockPlugin = (md, options = {}) => {
  md.use(blockPlugin, options);
  md.use(codePlugin, options);
  md.use(renderPlugin, options);
};

module.exports = {
  blockPlugin,
  codePlugin,
  renderPlugin,
  demoBlockPlugin,
};
