var d=Object.defineProperty;var e=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var o=(a,s,t)=>s in a?d(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,c=(a,s)=>{for(var t in s||(s={}))C.call(s,t)&&o(a,t,s[t]);if(e)for(var t of e(s))m.call(s,t)&&o(a,t,s[t]);return a};import{_ as h,c as A,a as u,b as n,t as f,e as p,w as l,d as r,r as i,o as b,V as _}from"./app.b68c4d44.js";const $={name:"component-doc",components:{"render-demo-0":function(){const{openBlock:a,createElementBlock:s}=_;function t(D,k){return a(),s("div",null,"\u793A\u4F8B\uFF1A\u6570\u7EC4\u7684\u7B80\u5355\u64CD\u4F5C")}return c({render:t},{})}()}},P='{"title":"\u57FA\u7840\u6D4B\u8BD5","description":"","frontmatter":{"title":"\u57FA\u7840\u6D4B\u8BD5"},"headers":[{"level":2,"title":"\u4E00\u4E36\u57FA\u7840\u6D4B\u8BD5","slug":"\u4E00\u4E36\u57FA\u7840\u6D4B\u8BD5"},{"level":2,"title":"\u4E8C\u4E36 \u6D4B\u8BD5\u7684\u4F9D\u8D56\u5173\u7CFB","slug":"\u4E8C\u4E36-\u6D4B\u8BD5\u7684\u4F9D\u8D56\u5173\u7CFB"}],"relativePath":"phpunit/base.md"}',g={id:"frontmatter-title",tabindex:"-1"},y=u("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),v=r('<h2 id="\u4E00\u4E36\u57FA\u7840\u6D4B\u8BD5" tabindex="-1">\u4E00\u4E36\u57FA\u7840\u6D4B\u8BD5 <a class="header-anchor" href="#\u4E00\u4E36\u57FA\u7840\u6D4B\u8BD5" aria-hidden="true">#</a></h2><blockquote><p>\u901A\u8FC7\u7F16\u5199\u5BF9\u6570\u7EC4\u7684\u7B80\u5355\u6D4B\u8BD5, \u5B8C\u6574\u4E86\u89E3\u6D4B\u8BD5\u7684\u57FA\u672C\u60EF\u4F8B\u4E0E\u6B65\u9AA4\uFF1A</p></blockquote><ul><li>\u9488\u5BF9\u7C7B <code>Class</code> \u7684\u6D4B\u8BD5\u5199\u5728\u7C7B <code>ClassTest</code> \u4E2D\u3002</li><li><code>ClassTest</code>\uFF08\u901A\u5E38\uFF09\u7EE7\u627F\u81EA <code>PHPUnit\\Framework\\TestCase</code>\u3002</li><li>\u6D4B\u8BD5\u90FD\u662F\u547D\u540D\u4E3A <code>test*</code> \u7684\u516C\u7528\u65B9\u6CD5\u3002\u4E5F\u53EF\u4EE5\u5728\u65B9\u6CD5\u7684\u6587\u6863\u6CE8\u91CA\u5757 <code>docblock</code> \u4E2D\u4F7F\u7528 <code>@test</code> \u6807\u6CE8\u5C06\u5176\u6807\u8BB0\u4E3A\u6D4B\u8BD5\u65B9\u6CD5\u3002</li><li>\u5728\u6D4B\u8BD5\u65B9\u6CD5\u5185\uFF0C\u7C7B\u4F3C\u4E8E <code>assertSame()</code>\uFF08<a href="./mock.html">\u53C2\u89C1\u65AD\u8A00</a>\uFF09\u8FD9\u6837\u7684\u65AD\u8A00\u65B9\u6CD5\u7528\u6765\u5BF9\u5B9E\u9645\u503C\u4E0E\u9884\u671F\u503C\u7684\u5339\u914D\u505A\u51FA\u65AD\u8A00\u3002</li></ul><hr>',4),w=u("div",{class:"language-php"},[u("pre",null,[u("code",null,[u("span",{class:"token php language-php"},[u("span",{class:"token delimiter important"},"<?php"),n(`

`),u("span",{class:"token keyword"},"declare"),u("span",{class:"token punctuation"},"("),n("strict_types"),u("span",{class:"token operator"},"="),u("span",{class:"token number"},"1"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";"),n(`
`),u("span",{class:"token comment"},`/**
 * This file is part of Hyperf.
 *
 * @link     https://www.hyperf.io
 * @document https://hyperf.wiki
 * @contact  group@hyperf.io
 * @license  https://github.com/hyperf/hyperf/blob/master/LICENSE
 */`),n(`
`),u("span",{class:"token keyword"},"namespace"),n(),u("span",{class:"token package"},[n("HyperfTest"),u("span",{class:"token punctuation"},"\\"),n("Cases"),u("span",{class:"token punctuation"},"\\"),n("BaseTest")]),u("span",{class:"token punctuation"},";"),n(`

`),u("span",{class:"token keyword"},"use"),n(),u("span",{class:"token package"},[n("PHPUnit"),u("span",{class:"token punctuation"},"\\"),n("Framework"),u("span",{class:"token punctuation"},"\\"),n("TestCase")]),u("span",{class:"token punctuation"},";"),n(`

`),u("span",{class:"token comment"},`/**
 * @internal
 * @coversNothing
 */`),n(`
`),u("span",{class:"token keyword"},"class"),n(),u("span",{class:"token class-name-definition class-name"},"SimpleOperatorTest"),n(),u("span",{class:"token keyword"},"extends"),n(),u("span",{class:"token class-name"},"TestCase"),n(`
`),u("span",{class:"token punctuation"},"{"),n(`
    `),u("span",{class:"token comment"},`/**
     * @test
     */`),n(`
    `),u("span",{class:"token keyword"},"public"),n(),u("span",{class:"token keyword"},"function"),n(),u("span",{class:"token function-definition function"},"arrayOperator"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),n(`
    `),u("span",{class:"token punctuation"},"{"),n(`
        `),u("span",{class:"token comment"},"// \u4F7F\u7528@test\u53EF\u4EE5\u6807\u6CE8\u5F53\u524D\u65B9\u6CD5\u662F\u6D4B\u8BD5\u65B9\u6CD5\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u4F7F\u7528test+\u65B9\u6CD5\u540D\u6765\u547D\u540D"),n(`
        `),u("span",{class:"token variable"},"$stack"),n(),u("span",{class:"token operator"},"="),n(),u("span",{class:"token punctuation"},"["),u("span",{class:"token punctuation"},"]"),u("span",{class:"token punctuation"},";"),n(`
        `),u("span",{class:"token variable"},"$this"),u("span",{class:"token operator"},"->"),u("span",{class:"token function"},"assertSame"),u("span",{class:"token punctuation"},"("),u("span",{class:"token number"},"0"),u("span",{class:"token punctuation"},","),n(),u("span",{class:"token function"},"count"),u("span",{class:"token punctuation"},"("),u("span",{class:"token variable"},"$stack"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";"),n(`

        `),u("span",{class:"token variable"},"$stack"),n(),u("span",{class:"token operator"},"="),n(),u("span",{class:"token class-name static-context"},"Arr"),u("span",{class:"token operator"},"::"),u("span",{class:"token function"},"prepend"),u("span",{class:"token punctuation"},"("),u("span",{class:"token variable"},"$stack"),u("span",{class:"token punctuation"},","),n(),u("span",{class:"token string single-quoted-string"},"'test'"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";"),n(`
        `),u("span",{class:"token variable"},"$this"),u("span",{class:"token operator"},"->"),u("span",{class:"token function"},"assertSame"),u("span",{class:"token punctuation"},"("),u("span",{class:"token string single-quoted-string"},"'test'"),u("span",{class:"token punctuation"},","),n(),u("span",{class:"token class-name static-context"},"Arr"),u("span",{class:"token operator"},"::"),u("span",{class:"token function"},"first"),u("span",{class:"token punctuation"},"("),u("span",{class:"token variable"},"$stack"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";"),n(`
        `),u("span",{class:"token variable"},"$this"),u("span",{class:"token operator"},"->"),u("span",{class:"token function"},"assertSame"),u("span",{class:"token punctuation"},"("),u("span",{class:"token number"},"1"),u("span",{class:"token punctuation"},","),n(),u("span",{class:"token function"},"count"),u("span",{class:"token punctuation"},"("),u("span",{class:"token variable"},"$stack"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";"),n(`

        `),u("span",{class:"token variable"},"$this"),u("span",{class:"token operator"},"->"),u("span",{class:"token function"},"assertSame"),u("span",{class:"token punctuation"},"("),u("span",{class:"token string single-quoted-string"},"'test'"),u("span",{class:"token punctuation"},","),n(),u("span",{class:"token function"},"array_pop"),u("span",{class:"token punctuation"},"("),u("span",{class:"token variable"},"$stack"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";"),n(`
        `),u("span",{class:"token variable"},"$this"),u("span",{class:"token operator"},"->"),u("span",{class:"token function"},"assertSame"),u("span",{class:"token punctuation"},"("),u("span",{class:"token number"},"0"),u("span",{class:"token punctuation"},","),n(),u("span",{class:"token function"},"count"),u("span",{class:"token punctuation"},"("),u("span",{class:"token variable"},"$stack"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";"),n(`
    `),u("span",{class:"token punctuation"},"}"),n(`
`),u("span",{class:"token punctuation"},"}"),n(`

`)])])])],-1),S=r('<hr><h2 id="\u4E8C\u4E36-\u6D4B\u8BD5\u7684\u4F9D\u8D56\u5173\u7CFB" tabindex="-1">\u4E8C\u4E36 \u6D4B\u8BD5\u7684\u4F9D\u8D56\u5173\u7CFB <a class="header-anchor" href="#\u4E8C\u4E36-\u6D4B\u8BD5\u7684\u4F9D\u8D56\u5173\u7CFB" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">\u8BF4\u660E\u6D4B\u8BD5\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB</p><p>\u5355\u5143\u6D4B\u8BD5\u4E3B\u8981\u662F\u4F5C\u4E3A\u4E00\u79CD\u826F\u597D\u5B9E\u8DF5\u6765\u7F16\u5199\u7684\uFF0C\u5B83\u80FD\u5E2E\u52A9\u5F00\u53D1\u4EBA\u5458\u8BC6\u522B\u5E76\u4FEE\u590D <code>bug</code>\u3001\u91CD\u6784\u4EE3\u7801\uFF0C\u8FD8\u53EF\u4EE5\u770B\u4F5C\u88AB\u6D4B\u8F6F\u4EF6\u5355\u5143\u7684\u6587\u6863\u3002\u8981\u5B9E\u73B0\u8FD9\u4E9B\u597D\u5904\uFF0C\u7406\u60F3\u7684\u5355\u5143\u6D4B\u8BD5\u5E94\u5F53\u8986\u76D6\u7A0B\u5E8F\u4E2D\u6240\u6709\u53EF\u80FD\u7684\u8DEF\u5F84\u3002\u4E00\u4E2A\u5355\u5143\u6D4B\u8BD5\u901A\u5E38\u8986\u76D6\u4E00\u4E2A\u51FD\u6570\u6216\u65B9\u6CD5\u4E2D\u7684\u4E00\u4E2A\u7279\u5B9A\u8DEF\u5F84\u3002\u4F46\u662F\uFF0C\u6D4B\u8BD5\u65B9\u6CD5\u4E0D\u4E00\u5B9A\u662F\u5C01\u88C5\u826F\u597D\u7684\u72EC\u7ACB\u5B9E\u4F53\u3002\u6D4B\u8BD5\u65B9\u6CD5\u4E4B\u95F4\u7ECF\u5E38\u6709\u9690\u542B\u7684\u4F9D\u8D56\u5173\u7CFB\u6697\u85CF\u5728\u6D4B\u8BD5\u7684\u5B9E\u73B0\u65B9\u6848\u4E2D\u3002</p></div><blockquote><p><code>PHPUnit</code> \u652F\u6301\u5BF9\u6D4B\u8BD5\u65B9\u6CD5\u4E4B\u95F4\u7684\u663E\u5F0F\u4F9D\u8D56\u5173\u7CFB\u8FDB\u884C\u58F0\u660E\u3002\u8FD9\u79CD\u4F9D\u8D56\u5173\u7CFB\u5E76\u4E0D\u662F\u5B9A\u4E49\u5728\u6D4B\u8BD5\u65B9\u6CD5\u7684\u6267\u884C\u987A\u5E8F\u4E2D\uFF0C\u800C\u662F\u5141\u8BB8\u751F\u4EA7\u8005\uFF08<code>producer</code>\uFF09\u8FD4\u56DE\u4E00\u4E2A\u6D4B\u8BD5\u57FA\u5883\uFF08<code>fixture</code>\uFF09\u7684\u5B9E\u4F8B\uFF0C\u5E76\u5C06\u6B64\u5B9E\u4F8B\u4F20\u9012\u7ED9\u4F9D\u8D56\u4E8E\u5B83\u7684\u6D88\u8D39\u8005\uFF08<code>consumer</code>\uFF09\u4EEC\u3002</p></blockquote><ul><li>\u751F\u4EA7\u8005\uFF08producer\uFF09\uFF0C\u662F\u80FD\u751F\u6210\u88AB\u6D4B\u5355\u5143\u5E76\u5C06\u5176\u4F5C\u4E3A\u8FD4\u56DE\u503C\u7684\u6D4B\u8BD5\u65B9\u6CD5\u3002</li><li>\u6D88\u8D39\u8005\uFF08consumer\uFF09\uFF0C\u662F\u4F9D\u8D56\u4E8E\u4E00\u4E2A\u6216\u591A\u4E2A\u751F\u4EA7\u8005\u53CA\u5176\u8FD4\u56DE\u503C\u7684\u6D4B\u8BD5\u65B9\u6CD5\u3002</li></ul><hr><blockquote><p>\u793A\u4F8B\uFF1A \u7528 <code>@depends</code> \u6807\u6CE8\u6765\u8868\u793A\u6D4B\u8BD5\u65B9\u6CD5\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB</p></blockquote>',7);function T(a,s,t,F,D,k){const B=i("render-demo-0"),E=i("demo");return b(),A("div",null,[u("h1",g,[n(f(a.$frontmatter.title)+" ",1),y]),v,p(E,{sourceCode:`<?php

declare(strict_types=1);
/**
 * This file is part of Hyperf.
 *
 * @link     https://www.hyperf.io
 * @document https://hyperf.wiki
 * @contact  group@hyperf.io
 * @license  https://github.com/hyperf/hyperf/blob/master/LICENSE
 */
namespace HyperfTest\\Cases\\BaseTest;

use PHPUnit\\Framework\\TestCase;

/**
 * @internal
 * @coversNothing
 */
class SimpleOperatorTest extends TestCase
{
    /**
     * @test
     */
    public function arrayOperator()
    {
        // \u4F7F\u7528@test\u53EF\u4EE5\u6807\u6CE8\u5F53\u524D\u65B9\u6CD5\u662F\u6D4B\u8BD5\u65B9\u6CD5\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u4F7F\u7528test+\u65B9\u6CD5\u540D\u6765\u547D\u540D
        $stack = [];
        $this->assertSame(0, count($stack));

        $stack = Arr::prepend($stack, 'test');
        $this->assertSame('test', Arr::first($stack));
        $this->assertSame(1, count($stack));

        $this->assertSame('test', array_pop($stack));
        $this->assertSame(0, count($stack));
    }
}

`},{highlight:l(()=>[w]),default:l(()=>[p(B)]),_:1}),S])}var H=h($,[["render",T]]);export{P as __pageData,H as default};
