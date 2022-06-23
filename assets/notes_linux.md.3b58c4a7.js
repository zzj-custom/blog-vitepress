var m=Object.defineProperty;var B=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var i=(s,a,e)=>a in s?m(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,E=(s,a)=>{for(var e in a||(a={}))k.call(a,e)&&i(s,e,a[e]);if(B)for(var e of B(a))C.call(a,e)&&i(s,e,a[e]);return s};import{_ as h,c as g,a as u,b as n,t as f,e as t,w as F,d as x,r as o,o as v,V as d}from"./app.b68c4d44.js";const b={name:"component-doc",components:{"render-demo-0":function(){const{openBlock:s,createElementBlock:a}=d;function e(p,c){return s(),a("div",null,"\u67E5\u770B\u7AEF\u53E3\u53F7")}return E({render:e},{})}(),"render-demo-1":function(){const{openBlock:s,createElementBlock:a}=d;function e(p,c){return s(),a("div",null,"\u793A\u4F8B")}return E({render:e},{})}()}},j='{"title":"linux\u76F8\u5173\u95EE\u9898","description":"","frontmatter":{"title":"linux\u76F8\u5173\u95EE\u9898"},"headers":[{"level":2,"title":"\u4E00\u4E36netstat","slug":"\u4E00\u4E36netstat"},{"level":2,"title":"\u4E8C\u4E36\u67E5\u770Blinux\u7248\u672C","slug":"\u4E8C\u4E36\u67E5\u770Blinux\u7248\u672C"},{"level":2,"title":"\u4E09\u4E36\u67E5\u770B\u8FDB\u7A0B\u60C5\u51B5","slug":"\u4E09\u4E36\u67E5\u770B\u8FDB\u7A0B\u60C5\u51B5"},{"level":2,"title":"\u56DB\u4E36\u67E5\u627E\u67D0\u4E2A\u6587\u4EF6\u91CC\u9762\u5B58\u5728\u4EC0\u4E48\u5B57\u7B26","slug":"\u56DB\u4E36\u67E5\u627E\u67D0\u4E2A\u6587\u4EF6\u91CC\u9762\u5B58\u5728\u4EC0\u4E48\u5B57\u7B26"},{"level":2,"title":"\u4E94\u4E36 \u91CD\u542Fnginx","slug":"\u4E94\u4E36-\u91CD\u542Fnginx"},{"level":2,"title":"\u516D\u4E36limux\u538B\u7F29\u6587\u4EF6","slug":"\u516D\u4E36limux\u538B\u7F29\u6587\u4EF6"},{"level":2,"title":"\u4E03\u4E36\u5C06\u672C\u5730\u6587\u4EF6\u4E0A\u4F20\u5230\u670D\u52A1\u5668","slug":"\u4E03\u4E36\u5C06\u672C\u5730\u6587\u4EF6\u4E0A\u4F20\u5230\u670D\u52A1\u5668"},{"level":2,"title":"\u516B\u4E36vim\u6587\u672C\u66FF\u6362\u4F7F\u7528","slug":"\u516B\u4E36vim\u6587\u672C\u66FF\u6362\u4F7F\u7528"},{"level":2,"title":"\u4E5D\u4E36\u6740\u6B7B\u8FDB\u7A0B\u540D\u79F0","slug":"\u4E5D\u4E36\u6740\u6B7B\u8FDB\u7A0B\u540D\u79F0"},{"level":2,"title":"\u5341\u4E36linux\u4E0B\u9762\u4F7F\u7528curl\u4E0B\u8F7D\u6587\u4EF6","slug":"\u5341\u4E36linux\u4E0B\u9762\u4F7F\u7528curl\u4E0B\u8F7D\u6587\u4EF6"},{"level":2,"title":"\u5341\u4E00\u4E36\u7CFB\u7EDF\u547D\u4EE4","slug":"\u5341\u4E00\u4E36\u7CFB\u7EDF\u547D\u4EE4"},{"level":2,"title":"\u5341\u4E8C\u4E36\u67E5\u627E\u6587\u4EF6\u6216\u8005\u76EE\u5F55","slug":"\u5341\u4E8C\u4E36\u67E5\u627E\u6587\u4EF6\u6216\u8005\u76EE\u5F55"},{"level":2,"title":"\u5341\u4E09\u4E36wget\u547D\u4EE4","slug":"\u5341\u4E09\u4E36wget\u547D\u4EE4"},{"level":2,"title":"\u5341\u56DB\u4E36\u67E5\u770B\u7AEF\u53E3\u53F7\u4F7F\u7528\u60C5\u51B5","slug":"\u5341\u56DB\u4E36\u67E5\u770B\u7AEF\u53E3\u53F7\u4F7F\u7528\u60C5\u51B5"},{"level":2,"title":"\u5341\u4E94\u4E36Mac\u5220\u9664\uFF08\u6DFB\u52A0\uFF09\u8DEF\u7531\uFF0C\u7F51\u5173","slug":"\u5341\u4E94\u4E36mac\u5220\u9664\uFF08\u6DFB\u52A0\uFF09\u8DEF\u7531\uFF0C\u7F51\u5173"}],"relativePath":"notes/linux.md"}',_={id:"frontmatter-title",tabindex:"-1"},w=u("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=x(`<h2 id="\u4E00\u4E36netstat" tabindex="-1">\u4E00\u4E36netstat <a class="header-anchor" href="#\u4E00\u4E36netstat" aria-hidden="true">#</a></h2><div class="language-php"><pre><code>netstat <span class="token operator">-</span><span class="token class-name">nltp</span> <span class="token operator">|</span> <span class="token class-name">grep</span> \u7AEF\u53E3\u53F7

<span class="token comment">// \u67E5\u770B\u672C\u5730\u7535\u8111\u7684\u8DEF\u7531trance(mac)</span>
netstat <span class="token operator">-</span>nr 
</code></pre></div><ul><li>-a\uFF1A\u663E\u793A\u672C\u673A\u6240\u6709\u8FDE\u63A5\u548C\u76D1\u542C\u5730\u7AEF\u53E3</li><li>-n\uFF1A\u7F51\u7EDC <code>IP</code> \u5730\u5740\u7684\u5F62\u5F0F\uFF0C\u663E\u793A\u5F53\u524D\u5EFA\u7ACB\u7684\u6709\u6548\u8FDE\u63A5\u548C\u7AEF\u53E3</li><li>-r\uFF1A\u663E\u793A\u8DEF\u7531\u8868\u4FE1\u606F</li><li>-s\uFF1A\u663E\u793A\u6309\u534F\u8BAE\u7684\u7EDF\u8BA1\u4FE1\u606F</li><li>-v\uFF1A\u663E\u793A\u5F53\u524D\u6709\u6548\u7684\u8FDE\u63A5</li><li>-t\uFF1A\u663E\u793A\u6240\u6709 <code>TCP</code> \u534F\u8BAE\u8FDE\u63A5\u60C5\u51B5</li><li>-u\uFF1A\u663E\u793A\u6240\u6709 <code>UDP</code> \u534F\u8BAE\u8FDE\u63A5\u60C5\u51B5</li><li>-i\uFF1A\u663E\u793A\u81EA\u52A8\u914D\u7F6E\u7AEF\u53E3\u7684\u72B6\u6001</li><li>-l\uFF1A\u4EC5\u4EC5\u663E\u793A\u8FDE\u63A5\u72B6\u6001\u4E3A <code>listening</code> \u7684\u670D\u52A1\u7F51\u7EDC\u72B6\u6001</li><li>-p\uFF1A\u663E\u793A <code>pid/program name</code></li></ul><h2 id="\u4E8C\u4E36\u67E5\u770Blinux\u7248\u672C" tabindex="-1">\u4E8C\u4E36\u67E5\u770Blinux\u7248\u672C <a class="header-anchor" href="#\u4E8C\u4E36\u67E5\u770Blinux\u7248\u672C" aria-hidden="true">#</a></h2><div class="language-json"><pre><code>cat /proc/version
</code></pre></div><h2 id="\u4E09\u4E36\u67E5\u770B\u8FDB\u7A0B\u60C5\u51B5" tabindex="-1">\u4E09\u4E36\u67E5\u770B\u8FDB\u7A0B\u60C5\u51B5 <a class="header-anchor" href="#\u4E09\u4E36\u67E5\u770B\u8FDB\u7A0B\u60C5\u51B5" aria-hidden="true">#</a></h2><div class="language-php"><pre><code>ps <span class="token operator">-</span><span class="token class-name">ef</span> <span class="token operator">|</span> <span class="token class-name">grep</span> \u540D\u79F0
</code></pre></div><blockquote><p>\u53C2\u6570\uFF1A</p></blockquote><ul><li>-A \uFF1A\u6240\u6709\u7684\u8FDB\u7A0B\u5747\u663E\u793A\u51FA\u6765\uFF0C\u4E0E <code>-e</code> \u5177\u6709\u540C\u6837\u7684\u6548\u7528\uFF1B</li><li>-a \uFF1A \u663E\u793A\u73B0\u884C\u7EC8\u7AEF\u673A\u4E0B\u7684\u6240\u6709\u8FDB\u7A0B\uFF0C\u5305\u62EC\u5176\u4ED6\u7528\u6237\u7684\u8FDB\u7A0B\uFF1B</li><li>-u \uFF1A\u4EE5\u7528\u6237\u4E3A\u4E3B\u7684\u8FDB\u7A0B\u72B6\u6001 \uFF1B</li><li>x \uFF1A\u901A\u5E38\u4E0E <code>a</code> \u8FD9\u4E2A\u53C2\u6570\u4E00\u8D77\u4F7F\u7528\uFF0C\u53EF\u5217\u51FA\u8F83\u5B8C\u6574\u4FE1\u606F\u3002 \u8F93\u51FA\u683C\u5F0F\u89C4\u5212\uFF1A</li><li>l \uFF1A\u8F83\u957F\u3001\u8F83\u8BE6\u7EC6\u7684\u5C06\u8BE5 <code>PID</code> \u7684\u7684\u4FE1\u606F\u5217\u51FA\uFF1B</li><li>j \uFF1A\u5DE5\u4F5C\u7684\u683C\u5F0F (<code>jobs format</code>)</li><li>-f \uFF1A\u505A\u4E00\u4E2A\u66F4\u4E3A\u5B8C\u6574\u7684\u8F93\u51FA\u3002</li></ul><h2 id="\u56DB\u4E36\u67E5\u627E\u67D0\u4E2A\u6587\u4EF6\u91CC\u9762\u5B58\u5728\u4EC0\u4E48\u5B57\u7B26" tabindex="-1">\u56DB\u4E36\u67E5\u627E\u67D0\u4E2A\u6587\u4EF6\u91CC\u9762\u5B58\u5728\u4EC0\u4E48\u5B57\u7B26 <a class="header-anchor" href="#\u56DB\u4E36\u67E5\u627E\u67D0\u4E2A\u6587\u4EF6\u91CC\u9762\u5B58\u5728\u4EC0\u4E48\u5B57\u7B26" aria-hidden="true">#</a></h2><div class="language-php"><pre><code>grep \u9700\u8981\u67E5\u627E\u7684\u5B57\u7B26  \u76EE\u5F55\u540D\u79F0<span class="token punctuation">(</span>\u76EE\u5F55\u4E0B\u9762\u662F\u6587\u4EF6<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4E94\u4E36-\u91CD\u542Fnginx" tabindex="-1">\u4E94\u4E36 \u91CD\u542Fnginx <a class="header-anchor" href="#\u4E94\u4E36-\u91CD\u542Fnginx" aria-hidden="true">#</a></h2><div class="language-php"><pre><code>nginx <span class="token operator">-</span>s reload
</code></pre></div><h2 id="\u516D\u4E36limux\u538B\u7F29\u6587\u4EF6" tabindex="-1">\u516D\u4E36limux\u538B\u7F29\u6587\u4EF6 <a class="header-anchor" href="#\u516D\u4E36limux\u538B\u7F29\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-php"><pre><code>zip <span class="token operator">-</span>r \u538B\u7F29\u540E\u6587\u4EF6\u540D \u538B\u7F29\u6587\u4EF6\u8DEF\u5F84
</code></pre></div><h2 id="\u4E03\u4E36\u5C06\u672C\u5730\u6587\u4EF6\u4E0A\u4F20\u5230\u670D\u52A1\u5668" tabindex="-1">\u4E03\u4E36\u5C06\u672C\u5730\u6587\u4EF6\u4E0A\u4F20\u5230\u670D\u52A1\u5668 <a class="header-anchor" href="#\u4E03\u4E36\u5C06\u672C\u5730\u6587\u4EF6\u4E0A\u4F20\u5230\u670D\u52A1\u5668" aria-hidden="true">#</a></h2><div class="language-php"><pre><code>scp <span class="token operator">-</span><span class="token constant">P</span> \u6307\u5B9A\u7AEF\u53E3\u53F7 \u9700\u8981\u4E0A\u4F20\u7684\u6587\u4EF6\u8DEF\u5F84 root@<span class="token number">255.255</span><span class="token number">.255</span><span class="token number">.255</span><span class="token punctuation">:</span>\u4E0A\u4F20\u540E\u7684\u6587\u4EF6\u8DEF\u5F84
</code></pre></div><h2 id="\u516B\u4E36vim\u6587\u672C\u66FF\u6362\u4F7F\u7528" tabindex="-1">\u516B\u4E36vim\u6587\u672C\u66FF\u6362\u4F7F\u7528 <a class="header-anchor" href="#\u516B\u4E36vim\u6587\u672C\u66FF\u6362\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-php"><pre><code><span class="token operator">%</span>s<span class="token operator">/</span><span class="token function">from</span><span class="token punctuation">(</span>\u88AB\u66FF\u6362\u5185\u5BB9<span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">to</span><span class="token punctuation">(</span>\u66FF\u6362\u540E\u7684\u5185\u5BB9<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4E5D\u4E36\u6740\u6B7B\u8FDB\u7A0B\u540D\u79F0" tabindex="-1">\u4E5D\u4E36\u6740\u6B7B\u8FDB\u7A0B\u540D\u79F0 <a class="header-anchor" href="#\u4E5D\u4E36\u6740\u6B7B\u8FDB\u7A0B\u540D\u79F0" aria-hidden="true">#</a></h2><div class="language-php"><pre><code>killall php<span class="token operator">-</span>fpm <span class="token operator">&amp;&amp;</span> php<span class="token operator">-</span>fpm

\u547D\u4EE4\u76F8\u5F53\u4E8Eps <span class="token operator">-</span><span class="token class-name">ef</span> <span class="token operator">|</span> <span class="token class-name">grep</span> \u8FDB\u7A0B\u540D \u548C kill pid
</code></pre></div><h2 id="\u5341\u4E36linux\u4E0B\u9762\u4F7F\u7528curl\u4E0B\u8F7D\u6587\u4EF6" tabindex="-1">\u5341\u4E36linux\u4E0B\u9762\u4F7F\u7528curl\u4E0B\u8F7D\u6587\u4EF6 <a class="header-anchor" href="#\u5341\u4E36linux\u4E0B\u9762\u4F7F\u7528curl\u4E0B\u8F7D\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-php"><pre><code>curl <span class="token operator">-</span><span class="token constant">O</span> \u6587\u4EF6\u8DEF\u5F84\uFF08\u4E0B\u8F7D\u7684\u662F\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u540C\u540D\u6587\u4EF6\uFF09

curl <span class="token operator">-</span>o \u81EA\u5B9A\u4E49\u6587\u4EF6\u540D\u79F0  \u8FDC\u7A0B\u670D\u52A1\u5668\u6587\u4EF6\u5730\u5740
</code></pre></div><h2 id="\u5341\u4E00\u4E36\u7CFB\u7EDF\u547D\u4EE4" tabindex="-1">\u5341\u4E00\u4E36\u7CFB\u7EDF\u547D\u4EE4 <a class="header-anchor" href="#\u5341\u4E00\u4E36\u7CFB\u7EDF\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-php"><pre><code><span class="token comment">// \u67E5\u770B\u78C1\u76D8\u60C5\u51B5</span>
df <span class="token operator">-</span>h 

<span class="token comment">// \u67E5\u770B\u5185\u5B58\u60C5\u51B5</span>
free <span class="token operator">-</span>h

<span class="token comment">// \u67E5\u770B\u5F53\u524D\u5185\u6838\u7248\u672C</span>
uname <span class="token operator">-</span>r

<span class="token comment">// \u67E5\u770B\u7CFB\u7EDF\u8BE6\u60C5</span>
cat <span class="token operator">/</span>etc<span class="token operator">/</span>os<span class="token operator">-</span>release
</code></pre></div><h2 id="\u5341\u4E8C\u4E36\u67E5\u627E\u6587\u4EF6\u6216\u8005\u76EE\u5F55" tabindex="-1">\u5341\u4E8C\u4E36\u67E5\u627E\u6587\u4EF6\u6216\u8005\u76EE\u5F55 <a class="header-anchor" href="#\u5341\u4E8C\u4E36\u67E5\u627E\u6587\u4EF6\u6216\u8005\u76EE\u5F55" aria-hidden="true">#</a></h2><div class="language-php"><pre><code><span class="token comment">// \u67E5\u627E\u76EE\u5F55</span>
find <span class="token operator">/</span>\uFF08\u67E5\u627E\u8303\u56F4\uFF09 <span class="token operator">-</span>name <span class="token string single-quoted-string">&#39;\u67E5\u627E\u5173\u952E\u5B57&#39;</span> <span class="token operator">-</span>type d

<span class="token comment">// \u67E5\u627E\u6587\u4EF6</span>
find <span class="token operator">/</span>\uFF08\u67E5\u627E\u8303\u56F4\uFF09 <span class="token operator">-</span>name \u67E5\u627E\u5173\u952E\u5B57 <span class="token operator">-</span><span class="token keyword">print</span>
</code></pre></div><h2 id="\u5341\u4E09\u4E36wget\u547D\u4EE4" tabindex="-1">\u5341\u4E09\u4E36wget\u547D\u4EE4 <a class="header-anchor" href="#\u5341\u4E09\u4E36wget\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-php"><pre><code><span class="token comment">//\u4E0B\u8F7D\u6587\u4EF6</span>
wget url \u5730\u5740

<span class="token comment">// \u65AD\u70B9\u7EED\u4F20\u4E0B\u8F7D\u6587\u4EF6</span>
wget <span class="token operator">--</span><span class="token keyword">continue</span> https<span class="token punctuation">:</span><span class="token comment">//www.lxlinux.net/linux-distro.iso</span>

<span class="token comment">//\u5982\u679C\u4F60\u4E0D\u60F3\u5C06\u4E0B\u8F7D\u7684\u6587\u4EF6\u4FDD\u5B58\u5728\u672C\u5730\uFF0C\u800C\u53EA\u662F\u60F3\u5C06\u5176\u663E\u793A\u5728\u6807\u51C6\u8F93\u51FA\uFF08stdout\uFF09\u91CC</span>
wget http<span class="token punctuation">:</span><span class="token comment">//www.lxlinux.net --output-document newfile.html </span>

<span class="token comment">//\u6279\u91CF\u4E0B\u8F7D\u6587\u4EF6</span>
wget http<span class="token punctuation">:</span><span class="token comment">//www.lxlinux.net/file_{1..4}.txt</span>
</code></pre></div><h2 id="\u5341\u56DB\u4E36\u67E5\u770B\u7AEF\u53E3\u53F7\u4F7F\u7528\u60C5\u51B5" tabindex="-1">\u5341\u56DB\u4E36\u67E5\u770B\u7AEF\u53E3\u53F7\u4F7F\u7528\u60C5\u51B5 <a class="header-anchor" href="#\u5341\u56DB\u4E36\u67E5\u770B\u7AEF\u53E3\u53F7\u4F7F\u7528\u60C5\u51B5" aria-hidden="true">#</a></h2>`,30),N=u("div",{class:"language-php"},[u("pre",null,[u("code",null,[n(`
`),u("span",{class:"token comment"},"// lsof\u547D\u4EE4"),n(`

`),u("span",{class:"token comment"},"// \u67E5\u770B8080\u7AEF\u53E3\u5360\u7528"),n(`
lsof `),u("span",{class:"token operator"},"-"),n("i"),u("span",{class:"token punctuation"},":"),u("span",{class:"token number"},"8080"),n(`
`),u("span",{class:"token comment"},"// \u663E\u793A\u5F00\u542F\u6587\u4EF6abc.txt\u7684\u8FDB\u7A0B"),n(`
lsof abc`),u("span",{class:"token operator"},"."),n(`txt
`),u("span",{class:"token comment"},"// \u663E\u793Aabc\u8FDB\u7A0B\u73B0\u5728\u6253\u5F00\u7684\u6587\u4EF6"),n(`
lsof `),u("span",{class:"token operator"},"-"),n(`c abc
`),u("span",{class:"token comment"},"// \u5217\u51FA\u8FDB\u7A0B\u53F7\u4E3A1234\u7684\u8FDB\u7A0B\u6240\u6253\u5F00\u7684\u6587\u4EF6"),n(`
lsof `),u("span",{class:"token operator"},"-"),n("c "),u("span",{class:"token operator"},"-"),n("p "),u("span",{class:"token number"},"1234"),n(`
`),u("span",{class:"token comment"},"// \u663E\u793A\u5F52\u5C5Egid\u7684\u8FDB\u7A0B\u60C5\u51B5"),n(`
lsof `),u("span",{class:"token operator"},"-"),n(`g gid
`),u("span",{class:"token comment"},"// \u663E\u793A\u76EE\u5F55\u4E0B\u88AB\u8FDB\u7A0B\u5F00\u542F\u7684\u6587\u4EF6"),n(`
lsof `),u("span",{class:"token operator"},"+"),n("d "),u("span",{class:"token operator"},"/"),n("usr"),u("span",{class:"token operator"},"/"),n("local"),u("span",{class:"token operator"},"/"),n(`
`),u("span",{class:"token comment"},"// \u540C\u4E0A\uFF0C\u4F46\u662F\u4F1A\u641C\u7D22\u76EE\u5F55\u4E0B\u7684\u76EE\u5F55\uFF0C\u65F6\u95F4\u8F83\u957F"),n(`
lsof `),u("span",{class:"token operator"},"+"),u("span",{class:"token constant"},"D"),n(),u("span",{class:"token operator"},"/"),n("usr"),u("span",{class:"token operator"},"/"),n("local"),u("span",{class:"token operator"},"/"),n(`
`),u("span",{class:"token comment"},"// \u663E\u793A\u4F7F\u7528fd\u4E3A4\u7684\u8FDB\u7A0B"),n(`
lsof `),u("span",{class:"token operator"},"-"),n("d "),u("span",{class:"token number"},"4"),n(`
`),u("span",{class:"token comment"},"// \u663E\u793A\u6240\u6709\u6253\u5F00\u7684\u7AEF\u53E3\u548CUNIX domain\u6587\u4EF6"),n(`
lsof `),u("span",{class:"token operator"},"-"),n("i "),u("span",{class:"token operator"},"-"),u("span",{class:"token constant"},"U"),n(`

`),u("span",{class:"token comment"},"// netstat\u547D\u4EE4"),n(`
`),u("span",{class:"token comment"},"// -t (tcp) \u4EC5\u663E\u793Atcp\u76F8\u5173\u9009\u9879"),n(`
`),u("span",{class:"token comment"},"// -u (udp)\u4EC5\u663E\u793Audp\u76F8\u5173\u9009\u9879"),n(`
`),u("span",{class:"token comment"},"// -n \u62D2\u7EDD\u663E\u793A\u522B\u540D\uFF0C\u80FD\u663E\u793A\u6570\u5B57\u7684\u5168\u90E8\u8F6C\u5316\u4E3A\u6570\u5B57"),n(`
`),u("span",{class:"token comment"},"// -l \u4EC5\u5217\u51FA\u5728Listen(\u76D1\u542C)\u7684\u670D\u52A1\u72B6\u6001"),n(`
`),u("span",{class:"token comment"},"// -p \u663E\u793A\u5EFA\u7ACB\u76F8\u5173\u94FE\u63A5\u7684\u7A0B\u5E8F\u540D \uFF08mac\u4E0B\u9762\u7684netstat\u8FD9\u4E2A\u53C2\u6570\u4E0D\u80FD\u4F7F\u7528\uFF09"),n(`
netstat `),u("span",{class:"token operator"},"-"),u("span",{class:"token class-name"},"tunlp"),n(),u("span",{class:"token operator"},"|"),n(),u("span",{class:"token class-name"},"grep"),n(` \u7AEF\u53E3\u53F7


`)])])],-1),P=u("h2",{id:"\u5341\u4E94\u4E36mac\u5220\u9664\uFF08\u6DFB\u52A0\uFF09\u8DEF\u7531\uFF0C\u7F51\u5173",tabindex:"-1"},[n("\u5341\u4E94\u4E36Mac\u5220\u9664\uFF08\u6DFB\u52A0\uFF09\u8DEF\u7531\uFF0C\u7F51\u5173 "),u("a",{class:"header-anchor",href:"#\u5341\u4E94\u4E36mac\u5220\u9664\uFF08\u6DFB\u52A0\uFF09\u8DEF\u7531\uFF0C\u7F51\u5173","aria-hidden":"true"},"#")],-1),V=u("div",{class:"language-php"},[u("pre",null,[u("code",null,[u("span",{class:"token comment"},"// route -v delete -net 10.10.12.0\uFF08\u67D0\u7F51\u6BB5\uFF09 -gateway 10.10.12.1\uFF08\u67D0\u7F51\u5173\uFF09"),n(`
sudo route `),u("span",{class:"token operator"},"-"),n("v delete "),u("span",{class:"token operator"},"-"),n("net "),u("span",{class:"token number"},"47.99"),u("span",{class:"token number"},".180"),u("span",{class:"token operator"},"/"),u("span",{class:"token number"},"24"),n("  "),u("span",{class:"token operator"},"-"),n("gateway "),u("span",{class:"token number"},"192.168"),u("span",{class:"token number"},".150"),u("span",{class:"token number"},".173"),n(`

sudo route `),u("span",{class:"token operator"},"-"),n("n add "),u("span",{class:"token operator"},"-"),n("net "),u("span",{class:"token number"},"192.168"),u("span",{class:"token number"},".0"),u("span",{class:"token number"},".0"),n("\uFF08\u9700\u8FDB\u5165\u7684\u7F51\u6BB5\uFF09 "),u("span",{class:"token operator"},"-"),n("netmask "),u("span",{class:"token number"},"255.255"),u("span",{class:"token number"},".255"),u("span",{class:"token number"},".0"),n(" \uFF08\u63A9\u7801\uFF09"),u("span",{class:"token number"},"192.168"),u("span",{class:"token number"},".5"),u("span",{class:"token number"},".254"),n(` \uFF08\u8FDB\u8BE5\u7F51\u6BB5\u7684\u7F51\u5173\uFF09

`),u("span",{class:"token comment"},"// \u7136\u540E\u53EF\u4EE5\u4F7F\u7528netstat -nr\u67E5\u770B"),n(`
`)])])],-1);function U(s,a,e,l,p,c){const A=o("render-demo-0"),r=o("demo"),D=o("render-demo-1");return v(),g("div",null,[u("h1",_,[n(f(s.$frontmatter.title)+" ",1),w]),y,t(r,{sourceCode:`
// lsof\u547D\u4EE4

// \u67E5\u770B8080\u7AEF\u53E3\u5360\u7528
lsof -i:8080
// \u663E\u793A\u5F00\u542F\u6587\u4EF6abc.txt\u7684\u8FDB\u7A0B
lsof abc.txt
// \u663E\u793Aabc\u8FDB\u7A0B\u73B0\u5728\u6253\u5F00\u7684\u6587\u4EF6
lsof -c abc
// \u5217\u51FA\u8FDB\u7A0B\u53F7\u4E3A1234\u7684\u8FDB\u7A0B\u6240\u6253\u5F00\u7684\u6587\u4EF6
lsof -c -p 1234
// \u663E\u793A\u5F52\u5C5Egid\u7684\u8FDB\u7A0B\u60C5\u51B5
lsof -g gid
// \u663E\u793A\u76EE\u5F55\u4E0B\u88AB\u8FDB\u7A0B\u5F00\u542F\u7684\u6587\u4EF6
lsof +d /usr/local/
// \u540C\u4E0A\uFF0C\u4F46\u662F\u4F1A\u641C\u7D22\u76EE\u5F55\u4E0B\u7684\u76EE\u5F55\uFF0C\u65F6\u95F4\u8F83\u957F
lsof +D /usr/local/
// \u663E\u793A\u4F7F\u7528fd\u4E3A4\u7684\u8FDB\u7A0B
lsof -d 4
// \u663E\u793A\u6240\u6709\u6253\u5F00\u7684\u7AEF\u53E3\u548CUNIX domain\u6587\u4EF6
lsof -i -U

// netstat\u547D\u4EE4
// -t (tcp) \u4EC5\u663E\u793Atcp\u76F8\u5173\u9009\u9879
// -u (udp)\u4EC5\u663E\u793Audp\u76F8\u5173\u9009\u9879
// -n \u62D2\u7EDD\u663E\u793A\u522B\u540D\uFF0C\u80FD\u663E\u793A\u6570\u5B57\u7684\u5168\u90E8\u8F6C\u5316\u4E3A\u6570\u5B57
// -l \u4EC5\u5217\u51FA\u5728Listen(\u76D1\u542C)\u7684\u670D\u52A1\u72B6\u6001
// -p \u663E\u793A\u5EFA\u7ACB\u76F8\u5173\u94FE\u63A5\u7684\u7A0B\u5E8F\u540D \uFF08mac\u4E0B\u9762\u7684netstat\u8FD9\u4E2A\u53C2\u6570\u4E0D\u80FD\u4F7F\u7528\uFF09
netstat -tunlp | grep \u7AEF\u53E3\u53F7


`},{highlight:F(()=>[N]),default:F(()=>[t(A)]),_:1}),P,t(r,{sourceCode:`// route -v delete -net 10.10.12.0\uFF08\u67D0\u7F51\u6BB5\uFF09 -gateway 10.10.12.1\uFF08\u67D0\u7F51\u5173\uFF09
sudo route -v delete -net 47.99.180/24  -gateway 192.168.150.173

sudo route -n add -net 192.168.0.0\uFF08\u9700\u8FDB\u5165\u7684\u7F51\u6BB5\uFF09 -netmask 255.255.255.0 \uFF08\u63A9\u7801\uFF09192.168.5.254 \uFF08\u8FDB\u8BE5\u7F51\u6BB5\u7684\u7F51\u5173\uFF09

// \u7136\u540E\u53EF\u4EE5\u4F7F\u7528netstat -nr\u67E5\u770B
`},{highlight:F(()=>[V]),default:F(()=>[t(D)]),_:1})])}var q=h(b,[["render",U]]);export{j as __pageData,q as default};
