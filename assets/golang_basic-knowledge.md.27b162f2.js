var C=Object.defineProperty;var f=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var d=(o,t,a)=>t in o?C(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,c=(o,t)=>{for(var a in t||(t={}))D.call(t,a)&&d(o,a,t[a]);if(f)for(var a of f(t))A.call(t,a)&&d(o,a,t[a]);return o};import{_ as x,c as P,a as n,b as s,t as S,e,w as u,r as p,o as R,V as m}from"./app.b68c4d44.js";const q={name:"component-doc",components:{"render-demo-0":function(){const{openBlock:o,createElementBlock:t}=m;function a(i,k){return o(),t("div",null,"Hello World")}return c({render:a},{})}(),"render-demo-1":function(){const{openBlock:o,createElementBlock:t}=m;function a(i,k){return o(),t("div",null,"\u5FAA\u73AF")}return c({render:a},{})}(),"render-demo-2":function(){const{openBlock:o,createElementBlock:t}=m;function a(i,k){return o(),t("div",null,"\u793A\u4F8B")}return c({render:a},{})}(),"render-demo-3":function(){const{openBlock:o,createElementBlock:t}=m;function a(i,k){return o(),t("div",null,"\u793A\u4F8B")}return c({render:a},{})}(),"render-demo-4":function(){const{openBlock:o,createElementBlock:t}=m;function a(i,k){return o(),t("div",null,"\u793A\u4F8B\u4E00")}return c({render:a},{})}(),"render-demo-5":function(){const{openBlock:o,createElementBlock:t}=m;function a(i,k){return o(),t("div",null,"\u793A\u4F8B\u4E8C")}return c({render:a},{})}(),"render-demo-6":function(){const{openBlock:o,createElementBlock:t}=m;function a(i,k){return o(),t("div",null,"\u793A\u4F8B\u4E09")}return c({render:a},{})}(),"render-demo-7":function(){const{openBlock:o,createElementBlock:t}=m;function a(i,k){return o(),t("div",null,"\u793A\u4F8B\u4E00")}return c({render:a},{})}(),"render-demo-8":function(){const{openBlock:o,createElementBlock:t}=m;function a(i,k){return o(),t("div",null,"\u793A\u4F8B\u4E8C")}return c({render:a},{})}(),"render-demo-9":function(){const{openBlock:o,createElementBlock:t}=m;function a(i,k){return o(),t("div",null,"\u5B9E\u4F8B\u4E09")}return c({render:a},{})}()}},sn='{"title":"golang\u5B66\u4E60\u4E4B\u8DEF\u4E4B\u57FA\u7840\u7BC7","description":"","frontmatter":{"title":"golang\u5B66\u4E60\u4E4B\u8DEF\u4E4B\u57FA\u7840\u7BC7"},"headers":[{"level":2,"title":"\u4E00\u4E36 \u8F93\u51FA Hello World","slug":"\u4E00\u4E36-\u8F93\u51FA-hello-world"},{"level":2,"title":"\u4E8C\u4E36\u8FED\u4EE3\u5668","slug":"\u4E8C\u4E36\u8FED\u4EE3\u5668"},{"level":2,"title":"\u4E09\u4E36\u4F20\u9012\u53C2\u6570file\uFF0C\u5E76\u627E\u51FA\u91CD\u590D\u9879","slug":"\u4E09\u4E36\u4F20\u9012\u53C2\u6570file\uFF0C\u5E76\u627E\u51FA\u91CD\u590D\u9879"},{"level":2,"title":"\u56DB\u4E36web\u9875\u9762\u8F93\u51FA\u5229\u838E\u56FE","slug":"\u56DB\u4E36web\u9875\u9762\u8F93\u51FA\u5229\u838E\u56FE"},{"level":2,"title":"\u4E94\u4E36Http\u8BF7\u6C42","slug":"\u4E94\u4E36http\u8BF7\u6C42"},{"level":2,"title":"\u516D\u4E36\u6574\u5F62\u548C\u6D6E\u70B9\u6570\u5904\u7406","slug":"\u516D\u4E36\u6574\u5F62\u548C\u6D6E\u70B9\u6570\u5904\u7406"}],"relativePath":"golang/basic-knowledge.md"}',H={id:"frontmatter-title",tabindex:"-1"},z=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),L=n("h2",{id:"\u4E00\u4E36-\u8F93\u51FA-hello-world",tabindex:"-1"},[s("\u4E00\u4E36 \u8F93\u51FA Hello World "),n("a",{class:"header-anchor",href:"#\u4E00\u4E36-\u8F93\u51FA-hello-world","aria-hidden":"true"},"#")],-1),W=n("div",{class:"language-go"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" n1 "),n("span",{class:"token builtin"},"int32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"12"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" n2 "),n("span",{class:"token builtin"},"int64"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" n3 "),n("span",{class:"token builtin"},"int8"),s(`
	n2 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"int64"),n("span",{class:"token punctuation"},"("),s("n1 "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),s(`
	n3 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"int8"),n("span",{class:"token punctuation"},"("),s("n1 "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Hello, World"'),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"n2=%d, n3=%d\\n"'),n("span",{class:"token punctuation"},","),s(" n2"),n("span",{class:"token punctuation"},","),s(" n3"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),I=n("h2",{id:"\u4E8C\u4E36\u8FED\u4EE3\u5668",tabindex:"-1"},[s("\u4E8C\u4E36\u8FED\u4EE3\u5668 "),n("a",{class:"header-anchor",href:"#\u4E8C\u4E36\u8FED\u4EE3\u5668","aria-hidden":"true"},"#")],-1),U=n("div",{class:"language-go"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"os"'),s(`
	`),n("span",{class:"token string"},'"strings"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("os"),n("span",{class:"token punctuation"},"."),s("Args"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token comment"},"// os.Args \u7684\u7B2C\u4E00\u4E2A\u6570\u662F\uFF1A/var/folders/6j/z0r0dtds5n5fx2qfc6y6tybh0000gn/T/go-build880041827/b001/exe/study1"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("strings"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Join"),n("span",{class:"token punctuation"},"("),s("os"),n("span",{class:"token punctuation"},"."),s("Args"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"example1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"example2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"example3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u8FED\u4EE31"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"example1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},'// \u5B57\u7B26\u4E32\u521D\u59CB\u5316\u5C31\u662F""'),s(`
	`),n("span",{class:"token keyword"},"var"),s(" str"),n("span",{class:"token punctuation"},","),s(" sep "),n("span",{class:"token builtin"},"string"),s(`

	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("os"),n("span",{class:"token punctuation"},"."),s("Args"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		str `),n("span",{class:"token operator"},"+="),s(" sep "),n("span",{class:"token operator"},"+"),s(" os"),n("span",{class:"token punctuation"},"."),s("Args"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(`
		sep `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'" "'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u8FED\u4EE3\u4E8C"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"example2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	s`),n("span",{class:"token punctuation"},","),s(" sep "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" os"),n("span",{class:"token punctuation"},"."),s("Args"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
		s `),n("span",{class:"token operator"},"+="),s(" sep "),n("span",{class:"token operator"},"+"),s(` value
		sep `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'" "'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u8FED\u4EE33"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"example3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" key"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" os"),n("span",{class:"token punctuation"},"."),s("Args"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"key: %d, value: %s \\n"'),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])])],-1),N=n("h2",{id:"\u4E09\u4E36\u4F20\u9012\u53C2\u6570file\uFF0C\u5E76\u627E\u51FA\u91CD\u590D\u9879",tabindex:"-1"},[s("\u4E09\u4E36\u4F20\u9012\u53C2\u6570file\uFF0C\u5E76\u627E\u51FA\u91CD\u590D\u9879 "),n("a",{class:"header-anchor",href:"#\u4E09\u4E36\u4F20\u9012\u53C2\u6570file\uFF0C\u5E76\u627E\u51FA\u91CD\u590D\u9879","aria-hidden":"true"},"#")],-1),T=n("div",{class:"language-go"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"bufio"'),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},`/**
\u627E\u51FA\u91CD\u590D\u9879
*/`),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"//\u521B\u5EFA\u4E00\u4E2Amap"),s(`
	counts `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token comment"},"//\u83B7\u53D6\u6587\u4EF6\u5217\u8868"),s(`
	files `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),s("Args"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("files"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`

	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" files "),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token comment"},"//\u6253\u5F00\u6587\u4EF6"),s(`
			f`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Open"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},"="),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fprintf"),n("span",{class:"token punctuation"},"("),s("os"),n("span",{class:"token punctuation"},"."),s("Stderr"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"dup2: %v\\n"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
				`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
					fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Fprintf\u51FD\u6570\u4F7F\u7528\u5931\u8D25"'),n("span",{class:"token punctuation"},")"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
				`),n("span",{class:"token keyword"},"continue"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token function"},"countLines"),n("span",{class:"token punctuation"},"("),s("f"),n("span",{class:"token punctuation"},","),s(" counts"),n("span",{class:"token punctuation"},")"),s(`
			err `),n("span",{class:"token operator"},"="),s(" f"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
				fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"[%s]\u6587\u4EF6\u5173\u95ED\u5931\u8D25"'),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("counts"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(" line"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" counts "),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(" value "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"{"),s(`
				fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"line: %s, n: %d\\n"'),n("span",{class:"token punctuation"},","),s(" line"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"countLines"),n("span",{class:"token punctuation"},"("),s("f "),n("span",{class:"token operator"},"*"),s("os"),n("span",{class:"token punctuation"},"."),s("File"),n("span",{class:"token punctuation"},","),s(" counts "),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	inputs `),n("span",{class:"token operator"},":="),s(" bufio"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewScanner"),n("span",{class:"token punctuation"},"("),s("f"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" inputs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Scan"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u9010\u884C\u8BFB\u53D6\u6570\u636E"),s(`
		counts`),n("span",{class:"token punctuation"},"["),s("inputs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Text"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"++"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u4E0A\u9762\u65B9\u6CD5\u7684\u7B80\u6613\u5B9E\u73B0"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"simple"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	counts `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" os"),n("span",{class:"token punctuation"},"."),s("Args"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
		data`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" ioutil"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadFile"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fprintf"),n("span",{class:"token punctuation"},"("),s("os"),n("span",{class:"token punctuation"},"."),s("Stderr"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"dup3: %v\\n"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" item "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" strings"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"\\n"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			counts`),n("span",{class:"token punctuation"},"["),s("item"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"++"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" line"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" counts "),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" value "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"{"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"line: %s, n: %d \\n"'),n("span",{class:"token punctuation"},","),s(" line"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),j=n("h2",{id:"\u56DB\u4E36web\u9875\u9762\u8F93\u51FA\u5229\u838E\u56FE",tabindex:"-1"},[s("\u56DB\u4E36web\u9875\u9762\u8F93\u51FA\u5229\u838E\u56FE "),n("a",{class:"header-anchor",href:"#\u56DB\u4E36web\u9875\u9762\u8F93\u51FA\u5229\u838E\u56FE","aria-hidden":"true"},"#")],-1),G=n("div",{class:"language-go"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"image"'),s(`
	`),n("span",{class:"token string"},'"image/color"'),s(`
	`),n("span",{class:"token string"},'"image/gif"'),s(`
	`),n("span",{class:"token string"},'"io"'),s(`
	`),n("span",{class:"token string"},'"log"'),s(`
	`),n("span",{class:"token string"},'"math"'),s(`
	`),n("span",{class:"token string"},'"math/rand"'),s(`
	`),n("span",{class:"token string"},'"net/http"'),s(`
	`),n("span",{class:"token string"},'"os"'),s(`
	`),n("span",{class:"token string"},'"time"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"var"),s(" palette "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s("color"),n("span",{class:"token punctuation"},"."),s("Color"),n("span",{class:"token punctuation"},"{"),s("color"),n("span",{class:"token punctuation"},"."),s("White"),n("span",{class:"token punctuation"},","),s(" color"),n("span",{class:"token punctuation"},"."),s("Black"),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"("),s(`
	WhiteIndex `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token comment"},"// \u753B\u677F\u4E2D\u7684\u7B2C\u4E00\u79CD\u989C\u8272"),s(`
	BlackIndex `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token comment"},"//\u753B\u677F\u4E2D\u7684\u7B2C\u4E8C\u79CD\u989C\u8272"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// \u4E3A\u4E0B\u9762\u7684rand.Float64\u65B9\u6CD5\u751F\u6210\u968F\u673A\u6570"),s(`
	rand`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Seed"),n("span",{class:"token punctuation"},"("),s("time"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"UTC"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"UnixNano"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("os"),n("span",{class:"token punctuation"},"."),s("Args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"&&"),s(" os"),n("span",{class:"token punctuation"},"."),s("Args"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'"web"'),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u533F\u540D\u51FD\u6570"),s(`
		handler `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("w http"),n("span",{class:"token punctuation"},"."),s("ResponseWriter"),n("span",{class:"token punctuation"},","),s(" r "),n("span",{class:"token operator"},"*"),s("http"),n("span",{class:"token punctuation"},"."),s("Request"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token function"},"lissajous"),n("span",{class:"token punctuation"},"("),s("w"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// \u6DFB\u52A0\u76D1\u542C\u7684\u8DEF\u7531"),s(`
		http`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"HandleFunc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/"'),n("span",{class:"token punctuation"},","),s(" handler"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"// \u76D1\u542C\u5730\u5740"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fatal"),n("span",{class:"token punctuation"},"("),s("http"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ListenAndServe"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"localhost:8000"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"lissajous"),n("span",{class:"token punctuation"},"("),s("out io"),n("span",{class:"token punctuation"},"."),s("Writer"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"("),s(`
		cycles `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),s("    "),n("span",{class:"token comment"},"//\u5B8C\u6574\u7684x\u632F\u8361\u5668\u53D8\u5316\u7684\u4E2A\u6570"),s(`
		res    `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0.01"),s(),n("span",{class:"token comment"},"//\u89D2\u5EA6\u5206\u8FA8\u7387"),s(`
		size   `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"100"),s("  "),n("span",{class:"token comment"},"//\u56FE\u50CF\u753B\u5E03\u5305\u542B[-size...+size]"),s(`
		frames `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"64"),s("   "),n("span",{class:"token comment"},"//\u52A8\u753B\u7684\u5E27\u6570"),s(`
		delay  `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"8"),s("    "),n("span",{class:"token comment"},"//\u4EE510ms\u4E3A\u5355\u4F4D\u7684\u5E27\u95F4\u5EF6\u8FDF"),s(`
	`),n("span",{class:"token punctuation"},")"),s(`
	freq `),n("span",{class:"token operator"},":="),s(" rand"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Float64"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"3.0"),s(),n("span",{class:"token comment"},"//y\u632F\u8361\u5668\u7684\u76F8\u5BF9\u9891\u7387"),s(`
	anim `),n("span",{class:"token operator"},":="),s(" gif"),n("span",{class:"token punctuation"},"."),s("GIF"),n("span",{class:"token punctuation"},"{"),s("LoopCount"),n("span",{class:"token punctuation"},":"),s(" frames"),n("span",{class:"token punctuation"},"}"),s(`
	phase `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0.0"),s(),n("span",{class:"token comment"},"//phase difference"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" frames"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		rect `),n("span",{class:"token operator"},":="),s(" image"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Rect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token operator"},"*"),s("size"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token operator"},"*"),s("size"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
		img `),n("span",{class:"token operator"},":="),s(" image"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewPaletted"),n("span",{class:"token punctuation"},"("),s("rect"),n("span",{class:"token punctuation"},","),s(" palette"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"for"),s(" t "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0.0"),n("span",{class:"token punctuation"},";"),s(" t "),n("span",{class:"token operator"},"<"),s(" cycles"),n("span",{class:"token operator"},"*"),n("span",{class:"token number"},"2"),n("span",{class:"token operator"},"*"),s("math"),n("span",{class:"token punctuation"},"."),s("Pi"),n("span",{class:"token punctuation"},";"),s(" t "),n("span",{class:"token operator"},"+="),s(" res "),n("span",{class:"token punctuation"},"{"),s(`
			x `),n("span",{class:"token operator"},":="),s(" math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sin"),n("span",{class:"token punctuation"},"("),s("t"),n("span",{class:"token punctuation"},")"),s(`
			y `),n("span",{class:"token operator"},":="),s(" math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sin"),n("span",{class:"token punctuation"},"("),s("t"),n("span",{class:"token operator"},"*"),s("freq "),n("span",{class:"token operator"},"+"),s(" phase"),n("span",{class:"token punctuation"},")"),s(`
			img`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SetColorIndex"),n("span",{class:"token punctuation"},"("),s("size"),n("span",{class:"token operator"},"+"),n("span",{class:"token function"},"int"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token operator"},"*"),s("size"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token operator"},"+"),n("span",{class:"token function"},"int"),n("span",{class:"token punctuation"},"("),s("y"),n("span",{class:"token operator"},"*"),s("size"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" BlackIndex"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		phase `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"0.1"),s(`
		anim`),n("span",{class:"token punctuation"},"."),s("Delay "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("anim"),n("span",{class:"token punctuation"},"."),s("Delay"),n("span",{class:"token punctuation"},","),s(" delay"),n("span",{class:"token punctuation"},")"),s(`
		anim`),n("span",{class:"token punctuation"},"."),s("Image "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("anim"),n("span",{class:"token punctuation"},"."),s("Image"),n("span",{class:"token punctuation"},","),s(" img"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	gif`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"EncodeAll"),n("span",{class:"token punctuation"},"("),s("out"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),s("anim"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])])],-1),V=n("h2",{id:"\u4E94\u4E36http\u8BF7\u6C42",tabindex:"-1"},[s("\u4E94\u4E36Http\u8BF7\u6C42 "),n("a",{class:"header-anchor",href:"#\u4E94\u4E36http\u8BF7\u6C42","aria-hidden":"true"},"#")],-1),$=n("div",{class:"language-go"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"io/ioutil"'),s(`
	`),n("span",{class:"token string"},'"net/http"'),s(`
	`),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// \u6839\u636E\u7EC8\u7AEF\u7684\u53C2\u6570\u83B7\u53D6\u8BF7\u6C42url\u5730\u5740"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" url "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" os"),n("span",{class:"token punctuation"},"."),s("Args"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
		resp`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" http"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Get"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fprintf"),n("span",{class:"token punctuation"},"("),s("os"),n("span",{class:"token punctuation"},"."),s("Stderr"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"fetch: %v\\n"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
			os`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// \u8BFB\u53D6response"),s(`
		body`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" ioutil"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadAll"),n("span",{class:"token punctuation"},"("),s("resp"),n("span",{class:"token punctuation"},"."),s("Body"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"// \u5173\u95EDioutil\u8BFB\u53D6\u7684\u6570\u636E"),s(`
		resp`),n("span",{class:"token punctuation"},"."),s("Body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fprintf"),n("span",{class:"token punctuation"},"("),s("os"),n("span",{class:"token punctuation"},"."),s("Stderr"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"fetch1: reading %s %v\\n"'),n("span",{class:"token punctuation"},","),s(" url"),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%s"'),n("span",{class:"token punctuation"},","),s(" body"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])])],-1),M=n("div",{class:"language-go"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"io/ioutil"'),s(`
	`),n("span",{class:"token string"},'"net/http"'),s(`
	`),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" url "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" os"),n("span",{class:"token punctuation"},"."),s("Args"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
		resp`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" http"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Get"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fprintf"),n("span",{class:"token punctuation"},"("),s("os"),n("span",{class:"token punctuation"},"."),s("Stderr"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"fetch: %v\\n"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
			os`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		body`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" ioutil"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadAll"),n("span",{class:"token punctuation"},"("),s("resp"),n("span",{class:"token punctuation"},"."),s("Body"),n("span",{class:"token punctuation"},")"),s(`
		resp`),n("span",{class:"token punctuation"},"."),s("Body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
			fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fprintf"),n("span",{class:"token punctuation"},"("),s("os"),n("span",{class:"token punctuation"},"."),s("Stderr"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"fetch1: reading %s %v\\n"'),n("span",{class:"token punctuation"},","),s(" url"),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%s"'),n("span",{class:"token punctuation"},","),s(" body"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])])],-1),J=n("div",{class:"language-go"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"log"'),s(`
	`),n("span",{class:"token string"},'"net/http"'),s(`
	`),n("span",{class:"token string"},'"sync"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"var"),s(" mu sync"),n("span",{class:"token punctuation"},"."),s(`Mutex
`),n("span",{class:"token keyword"},"var"),s(" count "),n("span",{class:"token builtin"},"int64"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	http`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"HandleFunc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/"'),n("span",{class:"token punctuation"},","),s(" handlerSimply"),n("span",{class:"token punctuation"},")"),s(`
	http`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"HandleFunc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/count"'),n("span",{class:"token punctuation"},","),s(" counter"),n("span",{class:"token punctuation"},")"),s(`
	log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fatal"),n("span",{class:"token punctuation"},"("),s("http"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ListenAndServe"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"localhost:8080"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"//\u6D4B\u8BD5"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"handlerSimply"),n("span",{class:"token punctuation"},"("),s("w http"),n("span",{class:"token punctuation"},"."),s("ResponseWriter"),n("span",{class:"token punctuation"},","),s(" r "),n("span",{class:"token operator"},"*"),s("http"),n("span",{class:"token punctuation"},"."),s("Request"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fprintf"),n("span",{class:"token punctuation"},"("),s("w"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"method: %s, url: %s, proto: %s\\n"'),n("span",{class:"token punctuation"},","),s(" r"),n("span",{class:"token punctuation"},"."),s("Method"),n("span",{class:"token punctuation"},","),s(" r"),n("span",{class:"token punctuation"},"."),s("URL"),n("span",{class:"token punctuation"},","),s(" r"),n("span",{class:"token punctuation"},"."),s("Proto"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" k"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" r"),n("span",{class:"token punctuation"},"."),s("Header "),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fprintf"),n("span",{class:"token punctuation"},"("),s("w"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Head[%q] = %q\\n"'),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},","),s(" v"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fprintf"),n("span",{class:"token punctuation"},"("),s("w"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Host: %q\\n"'),n("span",{class:"token punctuation"},","),s(" r"),n("span",{class:"token punctuation"},"."),s("Host"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fprintf"),n("span",{class:"token punctuation"},"("),s("w"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"RemoteAddr: %q\\n"'),n("span",{class:"token punctuation"},","),s(" r"),n("span",{class:"token punctuation"},"."),s("RemoteAddr"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},":="),s(" r"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ParseForm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Print"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" k"),n("span",{class:"token punctuation"},","),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" r"),n("span",{class:"token punctuation"},"."),s("Form "),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fprintf"),n("span",{class:"token punctuation"},"("),s("w"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Form[%q] = %q\\n"'),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},","),s(" v"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	mu`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	count`),n("span",{class:"token operator"},"++"),s(`
	mu`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fprintf"),n("span",{class:"token punctuation"},"("),s("w"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"URL.path= %q\\n"'),n("span",{class:"token punctuation"},","),s(" r"),n("span",{class:"token punctuation"},"."),s("URL"),n("span",{class:"token punctuation"},"."),s("Path"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"counter"),n("span",{class:"token punctuation"},"("),s("w http"),n("span",{class:"token punctuation"},"."),s("ResponseWriter"),n("span",{class:"token punctuation"},","),s(" r "),n("span",{class:"token operator"},"*"),s("http"),n("span",{class:"token punctuation"},"."),s("Request"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	mu`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Lock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fprintf"),n("span",{class:"token punctuation"},"("),s("w"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"count: %d\\n"'),n("span",{class:"token punctuation"},","),s(" count"),n("span",{class:"token punctuation"},")"),s(`
	mu`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])])],-1),O=n("h2",{id:"\u516D\u4E36\u6574\u5F62\u548C\u6D6E\u70B9\u6570\u5904\u7406",tabindex:"-1"},[s("\u516D\u4E36\u6574\u5F62\u548C\u6D6E\u70B9\u6570\u5904\u7406 "),n("a",{class:"header-anchor",href:"#\u516D\u4E36\u6574\u5F62\u548C\u6D6E\u70B9\u6570\u5904\u7406","aria-hidden":"true"},"#")],-1),K=n("div",{class:"language-go"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" a"),n("span",{class:"token punctuation"},","),s(" b "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"32.0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"212.0"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%g\u534E\u6C0F = %g\u2103\\n"'),n("span",{class:"token punctuation"},","),s(" a"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"convert"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%g\u534E\u6C0F = %g\u2103\\n"'),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"convert"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"convert"),n("span",{class:"token punctuation"},"("),s("a "),n("span",{class:"token builtin"},"float64"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"float64"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s("a "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"9"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])])],-1),Q=n("div",{class:"language-go"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" p "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"f"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("a"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token operator"},"*"),s("a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"9"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("a"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Print"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"f"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
	i `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"1"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"&"),s(`i
`),n("span",{class:"token punctuation"},"}"),s(`

`)])])],-1),X=n("div",{class:"language-go"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token comment"},"//\u8BA1\u7B97\u4E24\u4E2A\u6574\u6570\u7684\u6700\u5927\u516C\u7EA6\u6570"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"gcd"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"235778942"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2458"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fb"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"gcd"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" y "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
		x`),n("span",{class:"token punctuation"},","),s(" y "),n("span",{class:"token operator"},"="),s(" y"),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token operator"},"%"),s(`y
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` x
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"fb"),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
	a`),n("span",{class:"token punctuation"},","),s(" b "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" x"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		a`),n("span",{class:"token punctuation"},","),s(" b "),n("span",{class:"token operator"},"="),s(" b"),n("span",{class:"token punctuation"},","),s(" a"),n("span",{class:"token operator"},"+"),s(`b
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` a
`),n("span",{class:"token punctuation"},"}"),s(`

`)])])],-1);function Y(o,t,a,l,i,k){const g=p("render-demo-0"),r=p("demo"),E=p("render-demo-1"),F=p("render-demo-2"),h=p("render-demo-3"),y=p("render-demo-4"),B=p("render-demo-5"),_=p("render-demo-6"),w=p("render-demo-7"),b=p("render-demo-8"),v=p("render-demo-9");return R(),P("div",null,[n("h1",H,[s(S(o.$frontmatter.title)+" ",1),z]),L,e(r,{sourceCode:`package main

import "fmt"

func main() {
	var n1 int32 = 12
	var n2 int64
	var n3 int8
	n2 = int64(n1 + 20)
	n3 = int8(n1 + 10)
	fmt.Println("Hello, World")
	fmt.Printf("n2=%d, n3=%d\\n", n2, n3)
}
`},{highlight:u(()=>[W]),default:u(()=>[e(g)]),_:1}),I,e(r,{sourceCode:`package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	fmt.Println(os.Args)
  // os.Args \u7684\u7B2C\u4E00\u4E2A\u6570\u662F\uFF1A/var/folders/6j/z0r0dtds5n5fx2qfc6y6tybh0000gn/T/go-build880041827/b001/exe/study1
	fmt.Println(strings.Join(os.Args[1:], " "))
	example1()
	example2()
	example3()
}

// \u8FED\u4EE31
func example1() {
	// \u5B57\u7B26\u4E32\u521D\u59CB\u5316\u5C31\u662F""
	var str, sep string

	for i := 1; i < len(os.Args); i++ {
		str += sep + os.Args[i]
		sep = " "
	}
	fmt.Println(str)
}

// \u8FED\u4EE3\u4E8C

func example2() {
	s, sep := "", ""
	for _, value := range os.Args[1:] {
		s += sep + value
		sep = " "
	}
	fmt.Println(s)
}

// \u8FED\u4EE33
func example3() {
	for key, value := range os.Args[1:] {
		fmt.Printf("key: %d, value: %s \\n", key, value)
	}
}

`},{highlight:u(()=>[U]),default:u(()=>[e(E)]),_:1}),N,e(r,{sourceCode:`package main

import (
	"bufio"
	"fmt"
	"os"
)

/**
\u627E\u51FA\u91CD\u590D\u9879
*/

func main() {
	//\u521B\u5EFA\u4E00\u4E2Amap
	counts := make(map[string]int)
	//\u83B7\u53D6\u6587\u4EF6\u5217\u8868
	files := os.Args[1:]
	if len(files) == 0 {

	} else {
		for _, value := range files {
			//\u6253\u5F00\u6587\u4EF6
			f, err := os.Open(value)
			if err != nil {
				_, err = fmt.Fprintf(os.Stderr, "dup2: %v\\n", err)
				if err != nil {
					fmt.Println("Fprintf\u51FD\u6570\u4F7F\u7528\u5931\u8D25")
				}
				continue
			}
			countLines(f, counts)
			err = f.Close()
			if err != nil {
				fmt.Printf("[%s]\u6587\u4EF6\u5173\u95ED\u5931\u8D25", value)
			}
		}
	}
	if len(counts) > 0 {
		for line, value := range counts {
			if value > 1 {
				fmt.Printf("line: %s, n: %d\\n", line, value)
			}
		}
	}
}

func countLines(f *os.File, counts map[string]int) {
	inputs := bufio.NewScanner(f)
	for inputs.Scan() {
    // \u9010\u884C\u8BFB\u53D6\u6570\u636E
		counts[inputs.Text()]++
	}
}

// \u4E0A\u9762\u65B9\u6CD5\u7684\u7B80\u6613\u5B9E\u73B0

func simple() {
	counts := make(map[string]int)
	for _, value := range os.Args[1:] {
		data, err := ioutil.ReadFile(value)
		if err != nil {
			fmt.Fprintf(os.Stderr, "dup3: %v\\n", err)
		}
		for _, item := range strings.Split(string(data), "\\n") {
			counts[item]++
		}
	}
	for line, value := range counts {
		if value > 1 {
			fmt.Printf("line: %s, n: %d \\n", line, value)
		}
	}
}
`},{highlight:u(()=>[T]),default:u(()=>[e(F)]),_:1}),j,e(r,{sourceCode:`package main

import (
	"image"
	"image/color"
	"image/gif"
	"io"
	"log"
	"math"
	"math/rand"
	"net/http"
	"os"
	"time"
)

var palette = []color.Color{color.White, color.Black}

const (
	WhiteIndex = 0 // \u753B\u677F\u4E2D\u7684\u7B2C\u4E00\u79CD\u989C\u8272
	BlackIndex = 1 //\u753B\u677F\u4E2D\u7684\u7B2C\u4E8C\u79CD\u989C\u8272
)

func main() {
  // \u4E3A\u4E0B\u9762\u7684rand.Float64\u65B9\u6CD5\u751F\u6210\u968F\u673A\u6570
	rand.Seed(time.Now().UTC().UnixNano())
	if len(os.Args) > 1 && os.Args[1] == "web" {
    // \u533F\u540D\u51FD\u6570
		handler := func(w http.ResponseWriter, r *http.Request) {
			lissajous(w)
		}

    // \u6DFB\u52A0\u76D1\u542C\u7684\u8DEF\u7531
		http.HandleFunc("/", handler)

    // \u76D1\u542C\u5730\u5740
		log.Fatal(http.ListenAndServe("localhost:8000", nil))
		return
	}
}

func lissajous(out io.Writer) {
	const (
		cycles = 5    //\u5B8C\u6574\u7684x\u632F\u8361\u5668\u53D8\u5316\u7684\u4E2A\u6570
		res    = 0.01 //\u89D2\u5EA6\u5206\u8FA8\u7387
		size   = 100  //\u56FE\u50CF\u753B\u5E03\u5305\u542B[-size...+size]
		frames = 64   //\u52A8\u753B\u7684\u5E27\u6570
		delay  = 8    //\u4EE510ms\u4E3A\u5355\u4F4D\u7684\u5E27\u95F4\u5EF6\u8FDF
	)
	freq := rand.Float64() * 3.0 //y\u632F\u8361\u5668\u7684\u76F8\u5BF9\u9891\u7387
	anim := gif.GIF{LoopCount: frames}
	phase := 0.0 //phase difference
	for i := 0; i < frames; i++ {
		rect := image.Rect(0, 0, 2*size+1, 2*size+1)
		img := image.NewPaletted(rect, palette)
		for t := 0.0; t < cycles*2*math.Pi; t += res {
			x := math.Sin(t)
			y := math.Sin(t*freq + phase)
			img.SetColorIndex(size+int(x*size+0.5), size+int(y*size+0.5), BlackIndex)
		}
		phase += 0.1
		anim.Delay = append(anim.Delay, delay)
		anim.Image = append(anim.Image, img)
	}
	gif.EncodeAll(out, &anim)
}

`},{highlight:u(()=>[G]),default:u(()=>[e(h)]),_:1}),V,e(r,{sourceCode:`package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

func main() {
  // \u6839\u636E\u7EC8\u7AEF\u7684\u53C2\u6570\u83B7\u53D6\u8BF7\u6C42url\u5730\u5740
	for _, url := range os.Args[1:] {
		resp, err := http.Get(url)
		if err != nil {
			fmt.Fprintf(os.Stderr, "fetch: %v\\n", err)
			os.Exit(1)
		}

    // \u8BFB\u53D6response
		body, err := ioutil.ReadAll(resp.Body)

    // \u5173\u95EDioutil\u8BFB\u53D6\u7684\u6570\u636E
		resp.Body.Close()
		if err != nil {
			fmt.Fprintf(os.Stderr, "fetch1: reading %s %v\\n", url, err)
		}
		fmt.Printf("%s", body)
	}
}

`},{highlight:u(()=>[$]),default:u(()=>[e(y)]),_:1}),e(r,{sourceCode:`package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

func main() {
	for _, url := range os.Args[1:] {
		resp, err := http.Get(url)
		if err != nil {
			fmt.Fprintf(os.Stderr, "fetch: %v\\n", err)
			os.Exit(1)
		}
		body, err := ioutil.ReadAll(resp.Body)
		resp.Body.Close()
		if err != nil {
			fmt.Fprintf(os.Stderr, "fetch1: reading %s %v\\n", url, err)
		}
		fmt.Printf("%s", body)
	}
}

`},{highlight:u(()=>[M]),default:u(()=>[e(B)]),_:1}),e(r,{sourceCode:`package main

import (
	"fmt"
	"log"
	"net/http"
	"sync"
)

var mu sync.Mutex
var count int64

func main() {
	http.HandleFunc("/", handlerSimply)
	http.HandleFunc("/count", counter)
	log.Fatal(http.ListenAndServe("localhost:8080", nil))
}

//\u6D4B\u8BD5
func handlerSimply(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "method: %s, url: %s, proto: %s\\n", r.Method, r.URL, r.Proto)
	for k, v := range r.Header {
		fmt.Fprintf(w, "Head[%q] = %q\\n", k, v)
	}
	fmt.Fprintf(w, "Host: %q\\n", r.Host)
	fmt.Fprintf(w, "RemoteAddr: %q\\n", r.RemoteAddr)
	if err := r.ParseForm(); err != nil {
		log.Print(err)
	}
	for k, v := range r.Form {
		fmt.Fprintf(w, "Form[%q] = %q\\n", k, v)
	}
	mu.Lock()
	count++
	mu.Unlock()
	fmt.Fprintf(w, "URL.path= %q\\n", r.URL.Path)
}

func counter(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	fmt.Fprintf(w, "count: %d\\n", count)
	mu.Unlock()
}

`},{highlight:u(()=>[J]),default:u(()=>[e(_)]),_:1}),O,e(r,{sourceCode:`package main

import "fmt"

func main() {
	const a, b = 32.0, 212.0
	fmt.Printf("%g\u534E\u6C0F = %g\u2103\\n", a, convert(a))
	fmt.Printf("%g\u534E\u6C0F = %g\u2103\\n", b, convert(b))
}

func convert(a float64) float64 {
	return (a - 32) * 5 / 9
}

`},{highlight:u(()=>[K]),default:u(()=>[e(w)]),_:1}),e(r,{sourceCode:`package main

import "fmt"

func main() {
	var p = f()
	var a = new(int)
	fmt.Println(a)
	fmt.Println(*a)
	*a = 9
	fmt.Println(a)
	fmt.Println(*a)
	fmt.Print(p)
}
func f() *int {
	i := 1
	return &i
}

`},{highlight:u(()=>[Q]),default:u(()=>[e(b)]),_:1}),e(r,{sourceCode:`package main

import "fmt"

//\u8BA1\u7B97\u4E24\u4E2A\u6574\u6570\u7684\u6700\u5927\u516C\u7EA6\u6570
func main() {
	fmt.Println(gcd(235778942, 2458))
	fmt.Println(fb(16))
}

func gcd(x, y int) int {
	for y != 0 {
		x, y = y, x%y
	}
	return x
}

func fb(x int) int {
	a, b := 0, 1
	for i := 0; i < x; i++ {
		a, b = b, a+b
	}
	return a
}

`},{highlight:u(()=>[X]),default:u(()=>[e(v)]),_:1})])}var tn=x(q,[["render",Y]]);export{sn as __pageData,tn as default};
