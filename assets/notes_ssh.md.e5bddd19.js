import{_ as a,c as t,a as s,b as n,t as o,d as r,o as c}from"./app.b68c4d44.js";const S='{"title":"ssh\u76F8\u5173\u95EE\u9898","description":"","frontmatter":{"title":"ssh\u76F8\u5173\u95EE\u9898"},"headers":[{"level":2,"title":"\u4E00\u4E36\u751F\u6210\u5BC6\u94A5(SSH key)","slug":"\u4E00\u4E36\u751F\u6210\u5BC6\u94A5-ssh-key"},{"level":2,"title":"\u4E8C\u4E36\u6DFB\u52A0\u5BC6\u94A5(SSH key)\uFF0C\u5E76\u9A8C\u8BC1\u662F\u5426\u6210\u529F","slug":"\u4E8C\u4E36\u6DFB\u52A0\u5BC6\u94A5-ssh-key-\uFF0C\u5E76\u9A8C\u8BC1\u662F\u5426\u6210\u529F"},{"level":2,"title":"\u4E09\u4E36\u817E\u8BAF\u4E91\u670D\u52A1\u5668\u914D\u7F6E\u597D\u79D8\u94A5\u8FD8\u662F\u4E0D\u80FD\u767B\u5F55\uFF0C\u63D0\u793A\u6743\u9650\u4E0D\u8DB3\u7684\u95EE\u9898","slug":"\u4E09\u4E36\u817E\u8BAF\u4E91\u670D\u52A1\u5668\u914D\u7F6E\u597D\u79D8\u94A5\u8FD8\u662F\u4E0D\u80FD\u767B\u5F55\uFF0C\u63D0\u793A\u6743\u9650\u4E0D\u8DB3\u7684\u95EE\u9898"},{"level":2,"title":"\u56DB\u4E36\u6E05\u9664\u5F53\u524D\u673A\u5668\u5173\u4E8E\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u7F13\u5B58\u548C\u516C\u94A5\u4FE1\u606F","slug":"\u56DB\u4E36\u6E05\u9664\u5F53\u524D\u673A\u5668\u5173\u4E8E\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u7F13\u5B58\u548C\u516C\u94A5\u4FE1\u606F"}],"relativePath":"notes/ssh.md"}',p={},d={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=r(`<h2 id="\u4E00\u4E36\u751F\u6210\u5BC6\u94A5-ssh-key" tabindex="-1">\u4E00\u4E36\u751F\u6210\u5BC6\u94A5(SSH key) <a class="header-anchor" href="#\u4E00\u4E36\u751F\u6210\u5BC6\u94A5-ssh-key" aria-hidden="true">#</a></h2><div class="language-php"><pre><code>ssh<span class="token operator">-</span>keygen <span class="token operator">-</span>t rsa <span class="token operator">-</span><span class="token constant">C</span> <span class="token string double-quoted-string">&quot;your_email@youremail.com&quot;</span>
</code></pre></div><h2 id="\u4E8C\u4E36\u6DFB\u52A0\u5BC6\u94A5-ssh-key-\uFF0C\u5E76\u9A8C\u8BC1\u662F\u5426\u6210\u529F" tabindex="-1">\u4E8C\u4E36\u6DFB\u52A0\u5BC6\u94A5(SSH key)\uFF0C\u5E76\u9A8C\u8BC1\u662F\u5426\u6210\u529F <a class="header-anchor" href="#\u4E8C\u4E36\u6DFB\u52A0\u5BC6\u94A5-ssh-key-\uFF0C\u5E76\u9A8C\u8BC1\u662F\u5426\u6210\u529F" aria-hidden="true">#</a></h2><ul><li><p>\u6DFB\u52A0\u5BC6\u94A5\uFF1A\u5C06\u4E0A\u4E00\u6B65\u9AA4\u751F\u6210\u7684\u5BC6\u94A5\u5373 <code>.ssh/id_rsa.pub</code> \u4E2D\u5185\u5BB9\u5168\u90E8\u590D\u5236\u3002\u5728 <code>github</code> \u7684 <code>Settings-&gt;SSH and GPG keys--&gt;New SSH key</code>\uFF0C<code>key</code> \u4E2D\u7C98\u8D34\u590D\u5236\u7684\u5185\u5BB9( <code>Title</code> \u81EA\u5B9A\u4E49)\u3002</p></li><li><p>\u9A8C\u8BC1\uFF1A<code>github</code> \u8F93\u5165\u7B2C\u4E00\u6761\u7684\u547D\u4EE4</p></li></ul><div class="language-php"><pre><code>ssh <span class="token operator">-</span><span class="token constant">T</span> git@github<span class="token operator">.</span>com
ssh <span class="token operator">-</span><span class="token constant">T</span> git@gitee<span class="token operator">.</span>com
</code></pre></div><h2 id="\u4E09\u4E36\u817E\u8BAF\u4E91\u670D\u52A1\u5668\u914D\u7F6E\u597D\u79D8\u94A5\u8FD8\u662F\u4E0D\u80FD\u767B\u5F55\uFF0C\u63D0\u793A\u6743\u9650\u4E0D\u8DB3\u7684\u95EE\u9898" tabindex="-1">\u4E09\u4E36\u817E\u8BAF\u4E91\u670D\u52A1\u5668\u914D\u7F6E\u597D\u79D8\u94A5\u8FD8\u662F\u4E0D\u80FD\u767B\u5F55\uFF0C\u63D0\u793A\u6743\u9650\u4E0D\u8DB3\u7684\u95EE\u9898 <a class="header-anchor" href="#\u4E09\u4E36\u817E\u8BAF\u4E91\u670D\u52A1\u5668\u914D\u7F6E\u597D\u79D8\u94A5\u8FD8\u662F\u4E0D\u80FD\u767B\u5F55\uFF0C\u63D0\u793A\u6743\u9650\u4E0D\u8DB3\u7684\u95EE\u9898" aria-hidden="true">#</a></h2><div class="language-php"><pre><code><span class="token comment">// \u4FEE\u6539 PasswordAuthentication \u4E3A yes</span>
sudo vi <span class="token operator">/</span>etc<span class="token operator">/</span>ssh<span class="token operator">/</span>sshd_config

<span class="token comment">// \u91CD\u542Fsshd</span>
sudo systemctl restart sshd 
</code></pre></div><h2 id="\u56DB\u4E36\u6E05\u9664\u5F53\u524D\u673A\u5668\u5173\u4E8E\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u7F13\u5B58\u548C\u516C\u94A5\u4FE1\u606F" tabindex="-1">\u56DB\u4E36\u6E05\u9664\u5F53\u524D\u673A\u5668\u5173\u4E8E\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u7F13\u5B58\u548C\u516C\u94A5\u4FE1\u606F <a class="header-anchor" href="#\u56DB\u4E36\u6E05\u9664\u5F53\u524D\u673A\u5668\u5173\u4E8E\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u7F13\u5B58\u548C\u516C\u94A5\u4FE1\u606F" aria-hidden="true">#</a></h2><div class="language-php"><pre><code>ssh<span class="token operator">-</span>keygen <span class="token operator">-</span><span class="token constant">R</span> <span class="token string double-quoted-string">&quot;\u4F60\u7684\u8FDC\u7A0B\u670D\u52A1\u5668 ip \u5730\u5740&quot;</span> 
</code></pre></div>`,9);function h(e,k,u,_,g,y){return c(),t("div",null,[s("h1",d,[n(o(e.$frontmatter.title)+" ",1),i]),l])}var f=a(p,[["render",h]]);export{S as __pageData,f as default};