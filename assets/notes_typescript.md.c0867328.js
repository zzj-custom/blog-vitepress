import{_ as a,c as p,a as n,b as t,t as o,d as e,o as c}from"./app.b68c4d44.js";const w='{"title":"Ts\u76F8\u5173\u95EE\u9898","description":"","frontmatter":{"title":"Ts\u76F8\u5173\u95EE\u9898"},"headers":[{"level":2,"title":"\u4E00\u4E36\u6570\u636E\u7C7B\u578B","slug":"\u4E00\u4E36\u6570\u636E\u7C7B\u578B"},{"level":2,"title":"\u4E8C\u4E36\u7C7B\u578B\u65AD\u8A00","slug":"\u4E8C\u4E36\u7C7B\u578B\u65AD\u8A00"},{"level":2,"title":"\u4E09\u4E36\u7C7B\u578B\u5B88\u536B","slug":"\u4E09\u4E36\u7C7B\u578B\u5B88\u536B"},{"level":2,"title":"\u56DB\u4E36\u8054\u5408\u7C7B\u578B\u548C\u7C7B\u578B\u522B\u540D","slug":"\u56DB\u4E36\u8054\u5408\u7C7B\u578B\u548C\u7C7B\u578B\u522B\u540D"},{"level":2,"title":"\u4E94\u4E36\u4EA4\u53C9\u7C7B\u578B","slug":"\u4E94\u4E36\u4EA4\u53C9\u7C7B\u578B"},{"level":2,"title":"\u516D\u4E36\u51FD\u6570","slug":"\u516D\u4E36\u51FD\u6570"},{"level":2,"title":"\u4E03\u4E36\u6570\u7EC4","slug":"\u4E03\u4E36\u6570\u7EC4"},{"level":2,"title":"\u516B\u4E36\u5BF9\u8C61","slug":"\u516B\u4E36\u5BF9\u8C61"},{"level":2,"title":"\u4E5D\u4E36\u63A5\u53E3","slug":"\u4E5D\u4E36\u63A5\u53E3"},{"level":2,"title":"\u5341\u4E36\u7C7B","slug":"\u5341\u4E36\u7C7B"}],"relativePath":"notes/typescript.md"}',l={},u={id:"frontmatter-title",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=e(`<h2 id="\u4E00\u4E36\u6570\u636E\u7C7B\u578B" tabindex="-1">\u4E00\u4E36\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u4E00\u4E36\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><ul><li>number\u7C7B\u578B</li></ul><div class="language-ts"><pre><code><span class="token keyword">const</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">12</span>
</code></pre></div><ul><li>\u5B57\u7B26\u4E32\u7C7B\u578B</li></ul><div class="language-ts"><pre><code><span class="token keyword">const</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;str&#39;</span>
</code></pre></div><ul><li>\u5E03\u5C14\u7C7B\u578B</li></ul><div class="language-ts"><pre><code><span class="token keyword">const</span> bool<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre></div><ul><li>\u6570\u7EC4\u7C7B\u578B</li></ul><div class="language-ts"><pre><code><span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token comment">//\u6CDB\u578B\u5199\u6CD5</span>
<span class="token keyword">const</span> arrar<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> arrString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
<span class="token comment">//\u6CDB\u578B\u5199\u6CD5</span>
<span class="token keyword">const</span> arrayString<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
</code></pre></div><ul><li>\u679A\u4E3E</li></ul><div class="language-ts"><pre><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  <span class="token constant">EAST</span><span class="token punctuation">,</span>
  <span class="token constant">SOUTH</span><span class="token punctuation">,</span>
  <span class="token constant">WEST</span><span class="token punctuation">,</span>
  <span class="token constant">NORTH</span>
<span class="token punctuation">}</span>
<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  <span class="token constant">EAST1</span> <span class="token operator">=</span> <span class="token number">5</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u9ED8\u8BA4\u4ECE\u96F6\u5F00\u59CB</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">EAST</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">EAST1</span><span class="token punctuation">)</span>


<span class="token keyword">enum</span> DirectionTwo <span class="token punctuation">{</span>
  <span class="token constant">EAST</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token constant">SOUTH</span><span class="token punctuation">,</span>
  <span class="token constant">WEST</span><span class="token punctuation">,</span>
  <span class="token constant">NORTH</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6DFB\u52A0\u9ED8\u8BA4\u4ECE3\u5F00\u59CB</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>DirectionTwo<span class="token punctuation">.</span><span class="token constant">EAST</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B57\u7B26\u4E32\u679A\u4E3E</span>
<span class="token keyword">enum</span> DirectionThree <span class="token punctuation">{</span>
  <span class="token constant">EAST</span> <span class="token operator">=</span> <span class="token string">&#39;EAST&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">SOUTH</span> <span class="token operator">=</span> <span class="token string">&#39;SOUTH&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">WEST</span> <span class="token operator">=</span> <span class="token string">&quot;WEST&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">NORTH</span> <span class="token operator">=</span> <span class="token string">&quot;NORTH&quot;</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>DirectionThree<span class="token punctuation">.</span><span class="token constant">EAST</span><span class="token punctuation">)</span>

<span class="token comment">// \u5F02\u6784\u679A\u4E3E</span>
<span class="token comment">//\u5B57\u7B26\u4E32\u4E0B\u9762\u8FD9\u4E2A\u5FC5\u987B\u586B\u5199\u4E00\u4E2A\u521D\u59CB\u503C</span>
<span class="token keyword">enum</span> DirectionFour <span class="token punctuation">{</span>
  <span class="token constant">ONE</span><span class="token punctuation">,</span>
  <span class="token constant">TWO</span><span class="token punctuation">,</span>
  <span class="token constant">THREE</span> <span class="token operator">=</span> <span class="token string">&#39;three&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">FOUR</span> <span class="token operator">=</span> <span class="token string">&#39;four&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">FIVE</span> <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">,</span>
  <span class="token constant">SIX</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>DirectionFour<span class="token punctuation">.</span><span class="token constant">TWO</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>DirectionFour<span class="token punctuation">.</span><span class="token constant">FOUR</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>DirectionFour<span class="token punctuation">.</span><span class="token constant">SIX</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>\u4EFB\u610F\u7C7B\u578B</li></ul><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token builtin">any</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">12</span>
<span class="token keyword">const</span> anyString<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;any&#39;</span>
<span class="token keyword">const</span> anyBoolean<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">const</span> anyArray<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
</code></pre></div><ul><li>unknewn\u7C7B\u578B(\u548Cany\u7C7B\u578B\u76F8\u4F3C)</li></ul><div class="language-ts"><pre><code><span class="token comment">//const stringType: string = type  //\u4E0D\u80FD\u5C06unknown\u7C7B\u578B\u5206\u914D\u7ED9string\u7C7B\u578B</span>
<span class="token comment">//unknown \u7C7B\u578B\u53EA\u80FD\u88AB\u8D4B\u503C\u7ED9 any \u7C7B\u578B\u548C unknown \u7C7B\u578B\u672C\u8EAB\u3002\u76F4\u89C2\u5730\u8BF4\uFF0C\u8FD9\u662F\u6709\u9053\u7406\u7684\uFF1A\u53EA\u6709\u80FD\u591F\u4FDD\u5B58\u4EFB\u610F\u7C7B\u578B\u503C\u7684\u5BB9\u5668\u624D\u80FD\u4FDD\u5B58 unknown \u7C7B\u578B\u7684\u503C\u3002\u6BD5\u7ADF\u6211\u4EEC\u4E0D\u77E5\u9053\u53D8\u91CF value \u4E2D\u5B58\u50A8\u4E86\u4EC0\u4E48\u7C7B\u578B\u7684\u503C\u3002</span>
<span class="token keyword">let</span> type<span class="token operator">:</span> <span class="token builtin">unknown</span>
<span class="token keyword">const</span> testUnknownType<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token string">&#39;12&#39;</span>
</code></pre></div><ul><li>\u5143\u7EC4\u7C7B\u578B</li></ul><div class="language-ts"><pre><code><span class="token comment">// \u5143\u7EC4\u548C\u6570\u7EC4\u662F\u7C7B\u4F3C\u7684\uFF0C\u4F7F\u7528\u5143\u7EC4\u5FC5\u987B\u63D0\u4F9B\u5C5E\u6027\u7C7B\u578B</span>
<span class="token keyword">const</span> tuple<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">boolean</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&#39;12&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span>
</code></pre></div><ul><li>void\u7C7B\u578B</li></ul><div class="language-ts"><pre><code><span class="token comment">//\u58F0\u660E\u4E00\u4E2A void \u7C7B\u578B\u7684\u53D8\u91CF\u6CA1\u6709\u4EC0\u4E48\u4F5C\u7528\uFF0C\u56E0\u4E3A\u5B83\u7684\u503C\u53EA\u80FD\u4E3A undefined \u6216 null</span>
<span class="token keyword">function</span> <span class="token function">voidType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u662F\u5C55\u793Avoid\u7C7B\u578B&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> voidConst<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">undefined</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u8BF4\u660E</p><p>\u67D0\u79CD\u7A0B\u5EA6\u4E0A\u6765\u8BF4\uFF0Cvoid \u7C7B\u578B\u50CF\u662F\u4E0E any \u7C7B\u578B\u76F8\u53CD\uFF0C\u5B83\u8868\u793A\u6CA1\u6709\u4EFB\u4F55\u7C7B\u578B</p></div><ul><li>null\u548Cundefined\u7C7B\u578B</li></ul><div class="language-ts"><pre><code><span class="token keyword">const</span> nullType<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">const</span> undefinedType<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u8BF4\u660E</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B <code>null</code> \u548C <code>undefined</code> \u662F\u6240\u6709\u7C7B\u578B\u7684\u5B50\u7C7B\u578B\u3002 \u5C31\u662F\u8BF4\u4F60\u53EF\u4EE5\u628A <code>null</code> \u548C <code>undefined</code> \u8D4B\u503C\u7ED9 number\u7C7B\u578B\u7684\u53D8\u91CF\u3002\u7136\u800C\uFF0C\u5982\u679C\u4F60\u6307\u5B9A\u4E86--<code>strictNullChecks</code> \u6807\u8BB0\uFF0C<code>null</code> \u548C <code>undefined</code> \u53EA\u80FD\u8D4B\u503C\u7ED9 <code>void</code> \u548C\u5B83\u4EEC\u5404\u81EA\u7684\u7C7B\u578B\u3002</p></div><ul><li>never\u7C7B\u578B</li></ul><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">neverType</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">infiniteLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528never\u7C7B\u578B\u7684\u7279\u6027\u6765\u505A\u5168\u9762\u6027\u68C0\u67E5</span>
<span class="token keyword">type</span> <span class="token class-name">CheckType</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span>
<span class="token function">controlCheckType</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">controlCheckType</span><span class="token punctuation">(</span>checkType<span class="token operator">:</span> CheckType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> checkType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;string&#39;</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD9\u662F\u5B57\u7B26\u4E32\u7C7B\u578B&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;number&#39;</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD9\u662F\u6570\u5B57\u7C7B\u578B&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;boolean&#39;</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD9\u662F\u5E03\u5C14\u7C7B\u578B&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token comment">//\u4FDD\u8BC1\u8FD9\u91CC\u4E00\u5B9A\u4F1A\u5C06\u7C7B\u578B\u90FD\u68C0\u67E5\u5B8C\u6210(\u4F7F\u7528 never \u907F\u514D\u51FA\u73B0\u65B0\u589E\u4E86\u8054\u5408\u7C7B\u578B\u6CA1\u6709\u5BF9\u5E94\u7684\u5B9E\u73B0\uFF0C\u76EE\u7684\u5C31\u662F\u5199\u51FA\u7C7B\u578B\u7EDD\u5BF9\u5B89\u5168\u7684\u4EE3\u7801)</span>
      <span class="token keyword">const</span> check<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> checkType
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u8BF4\u660E</p><p><code>never</code> \u8868\u793A\u7684\u662F\u90A3\u4E9B\u6C38\u4E0D\u5B58\u5728\u7684\u503C\u7684\u7C7B\u578B, \u662F\u90A3\u4E9B\u603B\u662F\u4F1A\u629B\u51FA\u5F02\u5E38\u6216\u6839\u672C\u5C31\u4E0D\u4F1A\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570\u8868\u8FBE\u5F0F\u6216\u7BAD\u5934\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u8FD4\u56DE\u503C\u7C7B\u578B</p></div><h2 id="\u4E8C\u4E36\u7C7B\u578B\u65AD\u8A00" tabindex="-1">\u4E8C\u4E36\u7C7B\u578B\u65AD\u8A00 <a class="header-anchor" href="#\u4E8C\u4E36\u7C7B\u578B\u65AD\u8A00" aria-hidden="true">#</a></h2><p>-- \u4F7F\u7528\u5C16\u62EC\u53F7\u8868\u793A</p><div class="language-ts"><pre><code><span class="token keyword">const</span> someString <span class="token operator">=</span> <span class="token string">&#39;this is string&#39;</span>
<span class="token comment">// \u7C7B\u578B\u65AD\u8A00</span>
<span class="token keyword">const</span> len <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>someString<span class="token punctuation">)</span><span class="token punctuation">.</span>length
</code></pre></div><ul><li>\u4F7F\u7528as\u8868\u793A</li></ul><div class="language-ts"><pre><code><span class="token keyword">const</span> someString <span class="token operator">=</span> <span class="token string">&#39;this is string&#39;</span>
<span class="token comment">//\u7C7B\u578B\u65AD\u8A00</span>
<span class="token keyword">const</span> lengthString <span class="token operator">=</span> <span class="token punctuation">(</span>someString <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>len<span class="token punctuation">,</span> lengthString<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4E09\u4E36\u7C7B\u578B\u5B88\u536B" tabindex="-1">\u4E09\u4E36\u7C7B\u578B\u5B88\u536B <a class="header-anchor" href="#\u4E09\u4E36\u7C7B\u578B\u5B88\u536B" aria-hidden="true">#</a></h2><blockquote><p>\u7C7B\u578B\u4FDD\u62A4\u662F\u53EF\u6267\u884C\u8FD0\u884C\u65F6\u68C0\u67E5\u7684\u4E00\u79CD\u8868\u8FBE\u5F0F\uFF0C\u7528\u4E8E\u786E\u4FDD\u8BE5\u7C7B\u578B\u5728\u4E00\u5B9A\u7684\u8303\u56F4\u5185\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u7C7B\u578B\u4FDD\u62A4\u53EF\u4EE5\u4FDD\u8BC1\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5C3D\u7BA1\u5B83\u7684\u503C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u6570\u503C\u3002\u7C7B\u578B\u4FDD\u62A4\u4E0E\u7279\u6027\u68C0\u6D4B\u5E76\u4E0D\u662F\u5B8C\u5168\u4E0D\u540C\uFF0C\u5176\u4E3B\u8981\u601D\u60F3\u662F\u5C1D\u8BD5\u68C0\u6D4B\u5C5E\u6027\u3001\u65B9\u6CD5\u6216\u539F\u578B\uFF0C\u4EE5\u786E\u5B9A\u5982\u4F55\u5904\u7406\u503C\uFF0C\u76EE\u524D\u4E3B\u8981\u6709\u56DB\u79CD\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u7C7B\u578B\u4FDD\u62A4</p></blockquote><ul><li>in\u5173\u952E\u5B57</li></ul><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Admin</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  privileges<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  startDate<span class="token operator">:</span> Date
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">UnknewEmployee</span> <span class="token operator">=</span> Admin <span class="token operator">|</span> Employee

<span class="token keyword">function</span> <span class="token function">printEmployeeInformation</span><span class="token punctuation">(</span>emp<span class="token operator">:</span> UnknewEmployee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>emp<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;privileges&quot;</span> <span class="token keyword">in</span> emp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">proviliges:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>emp<span class="token punctuation">.</span>privileges<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;startDate&quot;</span> <span class="token keyword">in</span> emp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">startDate:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>emp<span class="token punctuation">.</span>startDate<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">printEmployeeInformation</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> privileges<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u66F4\u65B0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5220\u9664&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">printEmployeeInformation</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> startDate<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>typeof\u5173\u952E\u5B57</li></ul><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">padLeft</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> padding<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> padding <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Array</span><span class="token punctuation">(</span>padding <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> value
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> padding <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> padding <span class="token operator">+</span> value
  <span class="token punctuation">}</span>

  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Expected string or number, got &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>padding<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">padLeft</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;key = &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>instanceof\u5173\u952E\u5B57</li></ul><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Padder</span> <span class="token punctuation">{</span>
  <span class="token function">getPaddingString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SpaceRepeatingPadder</span> <span class="token keyword">implements</span> <span class="token class-name">Padder</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> numSpace<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">getPaddingString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>numSpace <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">StringPadder</span> <span class="token keyword">implements</span> <span class="token class-name">Padder</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">getPaddingString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> padder<span class="token operator">:</span> Padder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpaceRepeatingPadder</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>

<span class="token comment">//\u7C7B\u578B\u6536\u7A84</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>padder <span class="token keyword">instanceof</span> <span class="token class-name">SpaceRepeatingPadder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>padder<span class="token punctuation">.</span><span class="token function">getPaddingString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>padder <span class="token keyword">instanceof</span> <span class="token class-name">StringPadder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>padder<span class="token punctuation">.</span><span class="token function">getPaddingString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u7C7B\u578B\u83B7\u53D6\u5931\u8D25&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u81EA\u5B9A\u4E49\u7C7B\u578B\u4FDD\u62A4\u7684\u7C7B\u578B\u8C13\u8BCD</li></ul><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">isNumber</span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> params <span class="token keyword">is</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> params <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isString</span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> params <span class="token keyword">is</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> params <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u56DB\u4E36\u8054\u5408\u7C7B\u578B\u548C\u7C7B\u578B\u522B\u540D" tabindex="-1">\u56DB\u4E36\u8054\u5408\u7C7B\u578B\u548C\u7C7B\u578B\u522B\u540D <a class="header-anchor" href="#\u56DB\u4E36\u8054\u5408\u7C7B\u578B\u548C\u7C7B\u578B\u522B\u540D" aria-hidden="true">#</a></h2><ul><li>\u8054\u5408\u7C7B\u578B</li></ul><div class="tip custom-block"><p class="custom-block-title">\u8BF4\u660E</p><p>\u8054\u5408\u7C7B\u578B\u901A\u5E38\u4E0Enull\u6216undefined\u4E00\u8D77\u4F7F\u7528</p></div><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u63A5\u53D7\u53C2\u6570\u7C7B\u578B\u53EF\u4EE5\u662Fstring\u6216\u8005null\u6216\u8005undefined</span>
<span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>

<span class="token comment">//\u53EF\u8FA8\u8BC6\u7684\u8054\u5408\uFF08\u53EF\u8FA8\u8BC6\u8981\u6C42\u8054\u5408\u7C7B\u578B\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u542B\u6709\u4E00\u4E2A\u5355\u4F8B\u7C7B\u578B\u5C5E\u6027\uFF09</span>

<span class="token keyword">enum</span> CarTransmission <span class="token punctuation">{</span>
  Automatic <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">,</span>
  Manual <span class="token operator">=</span> <span class="token number">300</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Motorcycle</span> <span class="token punctuation">{</span>
  vType<span class="token operator">:</span> <span class="token string">&#39;motorcycle&#39;</span>
  make<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  vType<span class="token operator">:</span> <span class="token string">&#39;car&#39;</span>
  transmission<span class="token operator">:</span> CarTransmission
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Truck</span> <span class="token punctuation">{</span>
  vType<span class="token operator">:</span> <span class="token string">&#39;truck&#39;</span>
  capacity<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u8BF4\u660E</p><p>\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u5206\u522B\u5B9A\u4E49\u4E86 Motorcycle\u3001 Car \u548C Truck \u4E09\u4E2A\u63A5\u53E3\uFF0C\u5728\u8FD9\u4E9B\u63A5\u53E3\u4E2D\u90FD\u5305\u542B\u4E00\u4E2A vType\u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u88AB\u79F0\u4E3A\u53EF\u8FA8\u8BC6\u7684\u5C5E\u6027\uFF0C\u800C\u5176\u5B83\u7684\u5C5E\u6027\u53EA\u8DDF\u7279\u6027\u7684\u63A5\u53E3\u76F8\u5173\u3002</p></div><ul><li>\u8054\u5408\u7C7B\u578B</li></ul><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Vehicle</span> <span class="token operator">=</span> Motorcycle <span class="token operator">|</span> Car <span class="token operator">|</span> Truck

<span class="token comment">//\u73B0\u5728\u6211\u4EEC\u5C31\u53EF\u4EE5\u5F00\u59CB\u4F7F\u7528 Vehicle \u8054\u5408\u7C7B\u578B\uFF0C\u5BF9\u4E8E Vehicle \u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u5B83\u53EF\u4EE5\u8868\u793A\u4E0D\u540C\u7C7B\u578B\u7684\u8F66\u8F86\u3002</span>

<span class="token comment">//\u7C7B\u578B\u5B88\u536B</span>

<span class="token keyword">const</span> <span class="token constant">EVALUATION_FACTOR</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span>
<span class="token keyword">function</span> <span class="token function">evaluatePrice</span><span class="token punctuation">(</span>vehicle<span class="token operator">:</span> Vehicle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>vehicle<span class="token punctuation">.</span>vType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;motorcycle&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> vehicle<span class="token punctuation">.</span>make <span class="token operator">*</span> <span class="token constant">EVALUATION_FACTOR</span>
    <span class="token keyword">case</span> <span class="token string">&#39;car&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> vehicle<span class="token punctuation">.</span>transmission <span class="token operator">*</span> <span class="token constant">EVALUATION_FACTOR</span>
    <span class="token keyword">case</span> <span class="token string">&#39;truck&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> vehicle<span class="token punctuation">.</span>capacity <span class="token operator">*</span> <span class="token constant">EVALUATION_FACTOR</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> myTruck<span class="token operator">:</span> Truck <span class="token operator">=</span> <span class="token punctuation">{</span> vType<span class="token operator">:</span> <span class="token string">&#39;truck&#39;</span><span class="token punctuation">,</span> capacity<span class="token operator">:</span> <span class="token number">9.5</span> <span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">evaluatePrice</span><span class="token punctuation">(</span>myTruck<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//\u7C7B\u578B\u522B\u540D</span>

<span class="token keyword">type</span> <span class="token class-name">Message</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token function-variable function">greet</span> <span class="token operator">=</span> <span class="token punctuation">(</span>_message<span class="token operator">:</span> Message<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E94\u4E36\u4EA4\u53C9\u7C7B\u578B" tabindex="-1">\u4E94\u4E36\u4EA4\u53C9\u7C7B\u578B <a class="header-anchor" href="#\u4E94\u4E36\u4EA4\u53C9\u7C7B\u578B" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u8BF4\u660E</p><p>TypeScript \u4EA4\u53C9\u7C7B\u578B\u662F\u5C06\u591A\u4E2A\u7C7B\u578B\u5408\u5E76\u4E3A\u4E00\u4E2A\u7C7B\u578B\u3002 \u8FD9\u8BA9\u6211\u4EEC\u53EF\u4EE5\u628A\u73B0\u6709\u7684\u591A\u79CD\u7C7B\u578B\u53E0\u52A0\u5230\u4E00\u8D77\u6210\u4E3A\u4E00\u79CD\u7C7B\u578B\uFF0C\u5B83\u5305\u542B\u4E86\u6240\u9700\u7684\u6240\u6709\u7C7B\u578B\u7684\u7279\u6027\u3002</p></div><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">IPersion</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IWorker</span> <span class="token punctuation">{</span>
  companyId<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5B9A\u4E49\u4EA4\u53C9\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">IStaff</span> <span class="token operator">=</span> IPersion <span class="token operator">&amp;</span> IWorker
<span class="token keyword">const</span> staff<span class="token operator">:</span> IStaff <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">&quot;number one&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  companyId<span class="token operator">:</span> <span class="token string">&quot;9527&quot;</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> staff<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u516D\u4E36\u51FD\u6570" tabindex="-1">\u516D\u4E36\u51FD\u6570 <a class="header-anchor" href="#\u516D\u4E36\u51FD\u6570" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">const</span> exampleArray<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token comment">//exampleArray.forEach(() =&gt; console.log(&#39;test&#39;));</span>
<span class="token comment">//exampleArray.forEach((value) =&gt; console.log(value))</span>
exampleArray<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">//\u539F\u59CB\u6570\u7EC4</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">exampleFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">//\u672A\u4F7F\u7528\u7BAD\u5934\u51FD\u6570</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F00\u59CB&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>

  <span class="token comment">//\u4F7F\u7528\u7BAD\u5934\u51FD\u6570</span>
  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F00\u59CB&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u53C2\u6570\u7C7B\u578B\u548C\u8FD4\u56DE\u7C7B\u578B</span>

<span class="token keyword">function</span> <span class="token function">createUserId</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> str
<span class="token punctuation">}</span>

<span class="token comment">//\u51FD\u6570\u7C7B\u578B</span>

<span class="token keyword">let</span> <span class="token function-variable function">IdGenerator</span><span class="token operator">:</span> <span class="token punctuation">(</span>chars<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">createIdGenerator</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> name <span class="token operator">+</span> id
<span class="token punctuation">}</span>
IdGenerator <span class="token operator">=</span> createIdGenerator

<span class="token comment">//\u53EF\u9009\u53C2\u6570\u53CA\u9ED8\u8BA4\u53C2\u6570</span>
<span class="token keyword">function</span> <span class="token function">exampleParamsFunction</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">9527</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> age <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u59D3\u540D:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\r\u5E74\u9F84:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\rId:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u59D3\u540D:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\rId:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">exampleParamsFunction</span><span class="token punctuation">(</span><span class="token number">9527</span><span class="token punctuation">,</span> <span class="token string">&#39;zzj&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//\u8BF4\u660E\uFF1A\u5728\u58F0\u660E\u51FD\u6570\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ? \u53F7\u6765\u5B9A\u4E49\u53EF\u9009\u53C2\u6570\uFF0C\u4F46\u662F\u53EF\u9009\u53C2\u6570\u5FC5\u987B\u653E\u5728\u666E\u901A\u51FD\u6570\u540E\u9762\uFF0C\u4E0D\u7136\u4F1A\u5BFC\u81F4\u7F16\u8BD1\u51FA\u73B0\u95EE\u9898</span>

<span class="token comment">//\u5269\u4F59\u53C2\u6570</span>

<span class="token keyword">function</span> <span class="token function">remainParams</span><span class="token punctuation">(</span>params1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token operator">...</span>params2<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> params1 <span class="token operator">+</span> params2<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u51FD\u6570\u91CD\u8F7D\uFF08\u51FD\u6570\u540D\u76F8\u540C\u4F46\u662F\u51FD\u6570\u53C2\u6570\u4E2A\u6570\u4EE5\u53CA\u7C7B\u578B\u4E0D\u540C\u7684\u51FD\u6570\uFF09</span>

<span class="token keyword">type</span> <span class="token class-name">overideType</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>

<span class="token keyword">function</span> <span class="token function">overide</span><span class="token punctuation">(</span>param1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> param2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">overide</span><span class="token punctuation">(</span>param1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> param2<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">overide</span><span class="token punctuation">(</span>param1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> param2<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">overide</span><span class="token punctuation">(</span>param1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> param2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token comment">//overide\u51FD\u6570\u5FC5\u987B\u51FA\u73B0\u5728\u58F0\u660E\u4E4B\u540E\uFF0C\u4E0D\u7136\u4F1A\u63D0\u793A\u9519\u8BEF\uFF0C\u4E2D\u95F4\u4E0D\u80FD\u6709\u4EFB\u4F55\u5176\u4ED6\u7684\u4EE3\u7801\u5757</span>
<span class="token keyword">function</span> <span class="token function">overide</span><span class="token punctuation">(</span>argu1<span class="token operator">:</span> overideType<span class="token punctuation">,</span> argu2<span class="token operator">:</span> overideType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> argu1 <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> argu2 <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> argu1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> argu2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> argu1 <span class="token operator">+</span> argu2
<span class="token punctuation">}</span>

<span class="token comment">//\u7C7B\u91CD\u8F7D</span>

<span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>
  <span class="token function">overide</span><span class="token punctuation">(</span>p1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> p2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token function">overide</span><span class="token punctuation">(</span>p1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> p2<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token function">overide</span><span class="token punctuation">(</span>p1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> p2<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token function">overide</span><span class="token punctuation">(</span>p1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> p2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token function">overide</span><span class="token punctuation">(</span>p1<span class="token operator">:</span> overideType<span class="token punctuation">,</span> p2<span class="token operator">:</span> overideType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> p1 <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> p2 <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> p1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> p2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> p1 <span class="token operator">+</span> p2
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> calcultor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
calcultor<span class="token punctuation">.</span><span class="token function">overide</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4E03\u4E36\u6570\u7EC4" tabindex="-1">\u4E03\u4E36\u6570\u7EC4 <a class="header-anchor" href="#\u4E03\u4E36\u6570\u7EC4" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">//\u89E3\u6784</span>

<span class="token keyword">const</span> arrayDeconstructor <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">]</span> <span class="token operator">=</span> arrayDeconstructor
<span class="token keyword">const</span> <span class="token punctuation">[</span>pm1<span class="token punctuation">,</span> <span class="token operator">...</span>pm2<span class="token punctuation">]</span> <span class="token operator">=</span> arrayDeconstructor

<span class="token comment">//\u6570\u7EC4\u5C55\u5F00\u7ED3\u6784</span>

<span class="token keyword">const</span> expand <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arrayDeconstructor<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>

<span class="token comment">//\u6570\u7EC4\u904D\u5386</span>

expand<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> expand<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//console.log(expand[key])</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> expand<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u516B\u4E36\u5BF9\u8C61" tabindex="-1">\u516B\u4E36\u5BF9\u8C61 <a class="header-anchor" href="#\u516B\u4E36\u5BF9\u8C61" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">//\u89E3\u6784</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> myName<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> myName<span class="token operator">:</span> <span class="token string">&#39;zzj&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myName<span class="token punctuation">,</span> age<span class="token punctuation">)</span>

<span class="token comment">//\u5BF9\u8C61\u5C55\u5F00\u8FD0\u7B97\u7B26</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">9527</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;\u90B9\u795D\u5BB6&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> personDetail <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>person<span class="token punctuation">,</span> mobile<span class="token operator">:</span> <span class="token string">&#39;18689223002&#39;</span><span class="token punctuation">,</span> email<span class="token operator">:</span> <span class="token string">&#39;1844066417@qq.com&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> <span class="token operator">...</span>detail <span class="token punctuation">}</span> <span class="token operator">=</span> personDetail
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token string">&quot;\\r&quot;</span><span class="token punctuation">,</span> detail<span class="token punctuation">,</span> <span class="token string">&quot;\\r&quot;</span><span class="token punctuation">,</span> personDetail<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4E5D\u4E36\u63A5\u53E3" tabindex="-1">\u4E5D\u4E36\u63A5\u53E3 <a class="header-anchor" href="#\u4E5D\u4E36\u63A5\u53E3" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">//\u5BF9\u8C61\u7684\u63CF\u8FF0</span>

<span class="token keyword">interface</span> <span class="token class-name">PersonInterface</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ShapeInterface<span class="token operator">:</span> PersonInterface <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;\u90B9\u795D\u5BB6&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">12</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u53EF\u9009\u548C\u53EA\u8BFB\u5C5E\u6027</span>

<span class="token keyword">interface</span> <span class="token class-name">OnlyInterface</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>  <span class="token comment">// \u53EF\u9009\u5C5E\u6027</span>
  mobile<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> onlyInterface<span class="token operator">:</span> OnlyInterface <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;\u90B9\u795D\u5BB6&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  mobile<span class="token operator">:</span> <span class="token number">18689223002</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u65E0\u6CD5\u91CD\u65B0\u5206\u914Dname\u5C5E\u6027\uFF0C\u56E0\u4E3A\u662F\u53EA\u8BFB\u5C5E\u6027</span>
<span class="token comment">//onlyInterface.name = &#39;zzj&#39; </span>

<span class="token comment">//\u53EA\u8BFB\u5C5E\u6027\u7528\u4E8E\u9650\u5236\u53EA\u80FD\u5728\u5BF9\u8C61\u521A\u521A\u521B\u5EFA\u7684\u65F6\u5019\u4FEE\u6539\u5176\u503C\u3002\u6B64\u5916 TypeScript \u8FD8\u63D0\u4F9B\u4E86 ReadonlyArray&lt;T&gt; \u7C7B\u578B\uFF0C\u5B83\u4E0E Array&lt;T&gt; \u76F8\u4F3C\uFF0C\u53EA\u662F\u628A\u6240\u6709\u53EF\u53D8\u65B9\u6CD5\u53BB\u6389\u4E86\uFF0C\u56E0\u6B64\u53EF\u4EE5\u786E\u4FDD\u6570\u7EC4\u521B\u5EFA\u540E\u518D\u4E5F\u4E0D\u80FD\u88AB\u4FEE\u6539\u3002</span>

<span class="token keyword">const</span> onlyArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> oA<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> onlyArray
<span class="token comment">//oA\u6570\u7EC4\u662F\u53EA\u8BFB\u7C7B\u578B\uFF0C\u4E0D\u80FD\u4FEE\u6539</span>
<span class="token comment">//oA[0] = 12</span>
</code></pre></div><h2 id="\u5341\u4E36\u7C7B" tabindex="-1">\u5341\u4E36\u7C7B <a class="header-anchor" href="#\u5341\u4E36\u7C7B" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u9759\u6001\u5C5E\u6027</span>
  <span class="token keyword">static</span> cname<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;greeter&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">//\u6210\u5458\u5C5E\u6027</span>
  greeting<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">//\u6784\u9020\u51FD\u6570</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>greeting <span class="token operator">=</span> message
  <span class="token punctuation">}</span>
  <span class="token comment">//\u9759\u6001\u65B9\u6CD5</span>
  <span class="token keyword">static</span> <span class="token function">getClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Class name is Greeter&quot;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//\u6210\u5458\u65B9\u6CD5</span>
  <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>greeting<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> greeter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Greeter</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//\u7C7B\u5916\u8C03\u7528\u9759\u6001\u65B9\u6CD5</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Greeter<span class="token punctuation">.</span><span class="token function">getClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeter<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div>`,61);function r(s,d,m,g,y,b){return c(),p("div",null,[n("h1",u,[t(o(s.$frontmatter.title)+" ",1),k]),i])}var v=a(l,[["render",r]]);export{w as __pageData,v as default};
