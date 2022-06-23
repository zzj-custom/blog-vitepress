import{_ as n,c as t,o as s,d as a}from"./app.b68c4d44.js";const q='{"title":"\u751F\u4EA7\u8005\u6D88\u8D39\u8005\u95EE\u9898","description":"","frontmatter":{},"headers":[],"relativePath":"golang/article/index1.md"}',o={},p=a(`<p>Go \u8BED\u8A00\u4FDD\u59C6\u7EA7\u6559\u7A0B\uFF082021\u7248\u4E0B\uFF09</p><p>\u539F\u521B \u74DC\u54E5 \u4EE3\u7801\u60C5\u7F18 2021-06-14 16:08 \u6536\u5F55\u4E8E\u5408\u96C6 #go\u8BED\u8A00 2 \u4E2A #\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5 4 \u4E2A \u54C8\u55BD\uFF0C\u5927\u5BB6\u597D\uFF0C\u6211\u662F\u74DC\u54E5\uFF0C\u81F4\u529B\u4E8E\u5206\u4EAB\u4E92\u8054\u7F51\u5404\u9886\u57DF\u5E72\u8D27\u3002 \u8FD9\u7BC7\u6587\u7AE0\u53EF\u4EE5\u8BF4\u53C8\u662F\u4E00\u672C\u4E66\u4E86\uFF0C\u6392\u7248\uFF0C\u7801\u5B57\u8017\u8D39\u4E86\u5F88\u957F\u7684\u65F6\u95F4\uFF0C10W+\u5B57 Go \u8BED\u8A00\u5165\u95E8\u4FDD\u59C6\u7EA7\u6559\u7A0B2021\u5E74\u7248\uFF0C\u89C9\u5F97\u6709\u4EF7\u503C\u8BB0\u5F97\u4E00\u952E\u56DB\u8FDE\u652F\u6301\u3002 \u5207\u7247 \u65E0\u8BBA\u662FC\u8BED\u8A00\u4E2D\u7684\u6570\u7EC4\u8FD8\u662FGo\u8BED\u8A00\u4E2D\u7684\u6570\u7EC4,\u6570\u7EC4\u7684\u957F\u5EA6\u4E00\u65E6\u786E\u5B9A\u5C31\u4E0D\u80FD\u6539\u53D8, \u4F46\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u6211\u4EEC\u53EF\u80FD\u4E8B\u5148\u4E0D\u80FD\u786E\u5B9A\u6570\u7EC4\u7684\u957F\u5EA6, \u4E3A\u4E86\u89E3\u51B3\u8FD9\u7C7B\u95EE\u9898Go\u8BED\u8A00\u4E2D\u63A8\u51FA\u4E86\u4E00\u79CD\u65B0\u7684\u6570\u636E\u7C7B\u578B\u5207\u7247 \u5207\u7247\u53EF\u4EE5\u7B80\u5355\u7684\u7406\u89E3\u4E3A\u957F\u5EA6\u53EF\u4EE5\u53D8\u5316\u7684\u6570\u7EC4, \u4F46\u662FGo\u8BED\u8A00\u4E2D\u7684\u5207\u7247\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u7ED3\u6784\u4F53 type slice struct{ array unsafe.Pointer // \u6307\u5411\u5E95\u5C42\u6570\u7EC4\u6307\u9488 len int // \u5207\u7247\u957F\u5EA6(\u4FDD\u5B58\u4E86\u591A\u5C11\u4E2A\u5143\u7D20) cap int // \u5207\u7247\u5BB9\u91CF(\u53EF\u4EE5\u4FDD\u5B58\u591A\u5C11\u4E2A\u5143\u7D20) } \u5207\u7247\u6E90\u7801 \u5207\u7247\u521B\u5EFA\u7684\u4E09\u79CD\u65B9\u5F0F \u65B9\u5F0F\u4E00: \u901A\u8FC7\u6570\u7EC4\u521B\u5EFA\u5207\u7247array[startIndex:endIndex] package main import &quot;fmt&quot; func main() { var arr = [5]int{1, 3, 5, 7, 9} // \u4ECE\u6570\u7EC40\u4E0B\u6807\u5F00\u59CB\u53D6,\u4E00\u76F4\u53D6\u52302\u4E0B\u6807\u524D\u9762\u4E00\u4E2A\u7D22\u5F15 var sce = arr[0:2] fmt.Println(sce) // [1 3] // \u5207\u7247len = \u7ED3\u675F\u4F4D\u7F6E - \u5F00\u59CB\u4F4D\u7F6E fmt.Println(len(sce)) // 2 - 0 = 2 fmt.Println(cap(sce)) // 5 - 0 = 5 // \u6570\u7EC4\u5730\u5740\u5C31\u662F\u6570\u7EC4\u9996\u5143\u7D20\u7684\u5730\u5740 fmt.Printf(&quot;%p\\n&quot;, &amp;arr) // 0xc04200a330 fmt.Printf(&quot;%p\\n&quot;, &amp;arr[0]) // 0xc04200a330 // \u5207\u7247\u5730\u5740\u5C31\u662F\u6570\u7EC4\u4E2D\u6307\u5B9A\u7684\u5F00\u59CB\u5143\u7D20\u7684\u5730\u5740 // arr[0:2]\u5F00\u59CB\u5730\u5740\u4E3A0, \u6240\u4EE5\u5C31\u662Farr[0]\u7684\u5730\u5740 fmt.Printf(&quot;%p\\n&quot;, sce) // 0xc04200a330 } \u56FE\u7247 image.png package main import &quot;fmt&quot; func main() { var arr = [5]int{1, 3, 5, 7, 9} // \u6839\u636E\u6570\u7EC4\u7684\u7D22\u5F15\u7247\u6BB5\u521B\u5EFA\u5207\u7247 var sce = arr[2:4] fmt.Println(sce) // [5 7] fmt.Println(len(sce)) // 4 - 2 = 2 fmt.Println(cap(sce)) // 5 - 2 = 3 fmt.Printf(&quot;%p\\n&quot;, &amp;arr[2]) // 0xc042076070 fmt.Printf(&quot;%p\\n&quot;, sce) // 0xc042076070 } \u56FE\u7247 \u6307\u5B9A\u8D77\u59CB\u4F4D\u7F6E\u65F6\u6709\u4E09\u79CD\u65B9\u5F0F\u53EF\u4EE5\u6307\u5B9A \u5F00\u59CB\u4F4D\u7F6E\u548C\u7ED3\u675F\u4F4D\u7F6E\u90FD\u6307\u5B9A \u53EA\u6307\u5B9A\u5F00\u59CB\u4F4D\u7F6E\u6216\u7ED3\u675F\u4F4D\u7F6E \u5F00\u59CB\u4F4D\u7F6E\u548C\u7ED3\u675F\u4F4D\u7F6E\u90FD\u4E0D\u6307\u5B9A package main import &quot;fmt&quot; func main() { var arr = [5]int{1, 3, 5, 7, 9} // \u540C\u65F6\u6307\u5B9A\u5F00\u59CB\u4F4D\u7F6E\u548C\u7ED3\u675F\u4F4D\u7F6E var sce1 = arr[0:2] fmt.Println(sce1) // [1 3]</p><p>// \u53EA\u6307\u5B9A\u7ED3\u675F\u4F4D\u7F6E var sce3 = arr[:2] fmt.Println(sce3) // [1 3]</p><p>// \u53EA\u6307\u5B9A\u5F00\u59CB\u4F4D\u7F6E var sce2 = arr[0:] fmt.Println(sce2) // [1 3 5 7 9]</p><p>// \u90FD\u4E0D\u6307\u5B9A var sce4 = arr[:] fmt.Println(sce4) // [1 3 5 7 9] } \u65B9\u5F0F\u4E8C: \u901A\u8FC7make\u51FD\u6570\u521B\u5EFAmake(\u7C7B\u578B, \u957F\u5EA6, \u5BB9\u91CF) \u5185\u90E8\u4F1A\u5148\u521B\u5EFA\u4E00\u4E2A\u6570\u7EC4, \u7136\u540E\u8BA9\u5207\u7247\u6307\u5411\u6570\u7EC4 \u5982\u679C\u6CA1\u6709\u6307\u5B9A\u5BB9\u91CF,\u90A3\u4E48\u5BB9\u91CF\u548C\u957F\u5EA6\u4E00\u6837 package main import &quot;fmt&quot; func main() { // \u7B2C\u4E00\u4E2A\u53C2\u6570: \u6307\u5B9A\u5207\u7247\u6570\u636E\u7C7B\u578B // \u7B2C\u4E8C\u4E2A\u53C2\u6570: \u6307\u5B9A\u5207\u7247\u7684\u957F\u5EA6 // \u7B2C\u4E09\u4E2A\u53C2\u6570: \u6307\u5B9A\u5207\u7247\u7684\u5BB9\u91CF var sce = make([]int, 3, 5) fmt.Println(sce) // [0 0 0] fmt.Println(len(sce)) // 3 fmt.Println(cap(sce)) // 5 /* \u5185\u90E8\u5B9E\u73B0\u539F\u7406 var arr = [5]int{0, 0, 0} var sce = arr[0:3] <em>/ } \u65B9\u5F0F\u4E09:\u901A\u8FC7Go\u63D0\u4F9B\u7684\u8BED\u6CD5\u7CD6\u5FEB\u901F\u521B\u5EFA \u548C\u521B\u5EFA\u6570\u7EC4\u4E00\u6A21\u4E00\u6837, \u4F46\u662F\u4E0D\u80FD\u6307\u5B9A\u957F\u5EA6 \u901A\u8FC7\u8BE5\u65B9\u5F0F\u521B\u5EFA\u65F6, \u5207\u7247\u7684\u957F\u5EA6\u548C\u5BB9\u91CF\u76F8\u7B49 package main import &quot;fmt&quot; func main() { var sce = []int{1, 3, 5} fmt.Println(sce) // [1 3 5] fmt.Println(len(sce)) // 3 fmt.Println(cap(sce)) // 3 } \u5207\u7247\u7684\u4F7F\u7528 package main import &quot;fmt&quot; func main() { var sce = []int{1, 3, 5} // \u4F7F\u7528\u5207\u7247, \u5F80\u5207\u7247\u4E2D\u5B58\u653E\u6570\u636E sce[1] = 666 // \u8BBF\u95EE\u5207\u7247, \u4ECE\u5207\u7247\u4E2D\u83B7\u53D6\u6570\u636E fmt.Println(sce) // [1 666 5] } package main import &quot;fmt&quot; func main() { var sce = []int{1, 3, 5} // \u7F16\u8BD1\u62A5\u9519, \u8D8A\u754C sce[3] = 666 } package main import &quot;fmt&quot; func main() { var sce = []int{1, 3, 5} fmt.Println(&quot;\u8FFD\u52A0\u6570\u636E\u524D:&quot;, sce) // [1 3 5] fmt.Println(&quot;\u8FFD\u52A0\u6570\u636E\u524D:&quot;, len(sce)) // 3 fmt.Println(&quot;\u8FFD\u52A0\u6570\u636E\u524D:&quot;, cap(sce)) // 3 fmt.Printf(&quot;\u8FFD\u52A0\u6570\u636E\u524D: %p\\n&quot;, sce) // 0xc0420600a0 // \u7B2C\u4E00\u4E2A\u53C2\u6570: \u9700\u8981\u628A\u6570\u636E\u8FFD\u52A0\u5230\u54EA\u4E2A\u5207\u7247\u4E2D // \u7B2C\u4E8C\u4E2A\u53C2\u6570: \u9700\u8981\u8FFD\u52A0\u7684\u6570\u636E, \u53EF\u4EE5\u662F\u4E00\u4E2A\u6216\u591A\u4E2A sce = append(sce, 666) fmt.Println(&quot;\u8FFD\u52A0\u6570\u636E\u540E:&quot;, sce) // [1 3 5 666] fmt.Println(&quot;\u8FFD\u52A0\u6570\u636E\u540E:&quot;, len(sce)) // 4 fmt.Println(&quot;\u8FFD\u52A0\u6570\u636E\u540E:&quot;, cap(sce)) // 6 fmt.Printf(&quot;\u8FFD\u52A0\u6570\u636E\u524D: %p\\n&quot;, sce) // 0xc042076b60 } package main import &quot;fmt&quot; func main() { var sce1 = []int{1, 3, 5} var sce2 = make([]int, 5) fmt.Printf(&quot;\u8D4B\u503C\u524D:%p\\n&quot;, sce1) // 0xc0420600a0 fmt.Printf(&quot;\u8D4B\u503C\u524D:%p\\n&quot;, sce2) // 0xc042076060 // \u5C06sce2\u7684\u6307\u5411\u4FEE\u6539\u4E3Asce1, \u6B64\u65F6sce1\u548Csce2\u5E95\u5C42\u6307\u5411\u540C\u4E00\u4E2A\u6570\u7EC4 sce2 = sce1 fmt.Printf(&quot;\u8D4B\u503C\u540E:%p\\n&quot;, sce1) // 0xc0420600a0 fmt.Printf(&quot;\u8D4B\u503C\u540E:%p\\n&quot;, sce2) // 0xc0420600a0 //copy(sce2, sce1) fmt.Println(sce1) // [1 3 5] fmt.Println(sce2) // [1 3 5] sce2[1] = 666 fmt.Println(sce1) // [1 666 5] fmt.Println(sce2) // [1 666 5] } package main import &quot;fmt&quot; func main() { var sce1 = []int{1, 3, 5} var sce2 = make([]int, 5) fmt.Printf(&quot;\u8D4B\u503C\u524D:%p\\n&quot;, sce1) // 0xc0420600a0 fmt.Printf(&quot;\u8D4B\u503C\u524D:%p\\n&quot;, sce2) // 0xc042076060 // \u5C06sce1\u4E2D\u7684\u6570\u636E\u62F7\u8D1D\u5230sce2\u4E2D,, \u6B64\u65F6sce1\u548Csce2\u5E95\u5C42\u6307\u5411\u4E0D\u540C\u6570\u7EC4 copy(sce2, sce1) fmt.Printf(&quot;\u8D4B\u503C\u540E:%p\\n&quot;, sce1) // 0xc0420600a0 fmt.Printf(&quot;\u8D4B\u503C\u540E:%p\\n&quot;, sce2) // 0xc042076060 //copy(sce2, sce1) fmt.Println(sce1) // [1 3 5] fmt.Println(sce2) // [1 3 5 0 0] sce2[1] = 666 fmt.Println(sce1) // [1 3 5] fmt.Println(sce2) // [1 666 5 0 0] } package main import &quot;fmt&quot; func main() { // \u5BB9\u91CF\u4E3A3 var sce1 = []int{1, 3, 5} // \u5BB9\u91CF\u4E3A5 var sce2 = make([]int, 5) fmt.Println(&quot;\u62F7\u8D1D\u524D:&quot;, sce2) // [0 0 0 0 0] // sce2\u5BB9\u91CF\u8DB3\u591F, \u4F1A\u5C06sce1\u6240\u6709\u5185\u5BB9\u62F7\u8D1D\u5230sce2 copy(sce2, sce1) fmt.Println(&quot;\u62F7\u8D1D\u540E:&quot;, sce2) // [1 3 5 0 0] } package main import &quot;fmt&quot; func main() { // \u5BB9\u91CF\u4E3A3 var sce1 = []int{1, 3, 5} // \u5BB9\u91CF\u4E3A2 var sce2 = make([]int, 2) fmt.Println(&quot;\u62F7\u8D1D\u524D:&quot;, sce2) // [0 0] // sce2\u5BB9\u91CF\u4E0D\u591F, \u4F1A\u5C06sce1\u524D2\u4E2A\u5143\u7D20\u62F7\u8D1D\u5230sce2\u4E2D copy(sce2, sce1) fmt.Println(&quot;\u62F7\u8D1D\u540E:&quot;, sce2) // [1 3] } copy\u51FD\u6570\u5728\u62F7\u8D1D\u6570\u636E\u65F6\u6C38\u8FDC\u4EE5\u5C0F\u5BB9\u91CF\u4E3A\u51C6 \u683C\u5F0F: copy(\u76EE\u6807\u5207\u7247, \u6E90\u5207\u7247), \u4F1A\u5C06\u6E90\u5207\u7247\u4E2D\u6570\u636E\u62F7\u8D1D\u5230\u76EE\u6807\u5207\u7247\u4E2D \u9664\u4E86append\u51FD\u6570\u5916,Go\u8BED\u8A00\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2Acopy\u51FD\u6570, \u7528\u4E8E\u4E24\u4E2A\u5207\u7247\u4E4B\u95F4\u6570\u636E\u7684\u5FEB\u901F\u62F7\u8D1D append\u51FD\u6570\u4F1A\u5728\u5207\u7247\u672B\u5C3E\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20, \u5E76\u8FD4\u56DE\u4E00\u4E2A\u8FFD\u52A0\u6570\u636E\u4E4B\u540E\u7684\u5207\u7247 \u5229\u7528append\u51FD\u6570\u8FFD\u52A0\u6570\u636E\u65F6,\u5982\u679C\u8FFD\u52A0\u4E4B\u540E\u6CA1\u6709\u8D85\u51FA\u5207\u7247\u7684\u5BB9\u91CF,\u90A3\u4E48\u8FD4\u56DE\u539F\u6765\u7684\u5207\u7247, \u5982\u679C\u8FFD\u52A0\u4E4B\u540E\u8D85\u51FA\u4E86\u5207\u7247\u7684\u5BB9\u91CF,\u90A3\u4E48\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5207\u7247 append\u51FD\u6570\u6BCF\u6B21\u7ED9\u5207\u7247\u6269\u5BB9\u90FD\u4F1A\u6309\u7167\u539F\u6709\u5207\u7247\u5BB9\u91CF</em>2\u7684\u65B9\u5F0F\u6269\u5BB9 \u5982\u679C\u5E0C\u671B\u5207\u7247\u81EA\u52A8\u6269\u5BB9,\u90A3\u4E48\u6DFB\u52A0\u6570\u636E\u65F6\u5FC5\u987B\u4F7F\u7528append\u65B9\u6CD5 \u548C\u6570\u7EC4\u4E00\u6837, \u5982\u679C\u901A\u8FC7\u5207\u7247\u540D\u79F0[\u7D22\u5F15]\u65B9\u5F0F\u64CD\u4F5C\u5207\u7247, \u4E0D\u80FD\u8D8A\u754C \u5207\u7247\u7684\u57FA\u672C\u4F7F\u7528\u65B9\u5F0F\u548C\u6570\u7EC4\u4E00\u6837, \u53EF\u4EE5\u901A\u8FC7\u5207\u7247\u540D\u79F0[\u7D22\u5F15]\u65B9\u5F0F\u64CD\u4F5C\u5207\u7247 \u5207\u7247\u7684\u6CE8\u610F\u70B9 package main import &quot;fmt&quot; func main() { arr := [5]int{1, 3, 5, 7, 9} sce1 := arr[0:4] sce2 := sce1[0:3] fmt.Println(sce1) // [1 3 5 7] fmt.Println(sce2) // [1 3 5] // \u7531\u4E8E\u5E95\u5C42\u6307\u5411\u540C\u4E00\u6570\u7EC4, \u6240\u4EE5\u4FEE\u6539sce2\u4F1A\u5F71\u54CDsce1 sce2[1] = 666 fmt.Println(sce1) // [1 666 5 7] fmt.Println(sce2) // [1 666 5] } package main import &quot;fmt&quot; func main() { var arr1 [3]int = [3]int{1, 3, 5} var arr2 [3]int = [3]int{1, 3, 5} var arr3 [3]int = [3]int{2, 4, 6} // \u9996\u5148\u4F1A\u5224\u65AD<code>\u6570\u636E\u7C7B\u578B</code>\u662F\u5426\u76F8\u540C,\u5982\u679C\u76F8\u540C\u4F1A\u4F9D\u6B21\u53D6\u51FA\u6570\u7EC4\u4E2D<code>\u5BF9\u5E94\u7D22\u5F15\u7684\u5143\u7D20</code>\u8FDB\u884C\u6BD4\u8F83, // \u5982\u679C\u6240\u6709\u5143\u7D20\u90FD\u76F8\u540C\u8FD4\u56DEtrue,\u5426\u5219\u8FD4\u56DEfalse fmt.Println(arr1 == arr2) // true fmt.Println(arr1 == arr3) // false</p><pre><code>sce1 := []int{1, 3, 5}
sce2 := []int{1, 3, 5}
//fmt.Println(sce1 == sce2) // \u7F16\u8BD1\u62A5\u9519
fmt.Println(sce1 != nil) // true
fmt.Println(sce2 == nil) // false
</code></pre><p>} package main import &quot;fmt&quot; func main() { // \u6570\u7EC4\u58F0\u660E\u540E\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528, \u58F0\u660E\u65F6\u5C31\u4F1A\u5F00\u8F9F\u5B58\u50A8\u7A7A\u95F4 var arr [3]int arr[0] = 2 arr[1] = 4 arr[2] = 6 fmt.Println(arr) // [2 4 6]</p><p>// \u5207\u7247\u58F0\u660E\u540E\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528, \u53EA\u6709\u901A\u8FC7make\u6216\u8BED\u6CD5\u7CD6\u521B\u5EFA\u4E4B\u540E\u624D\u4F1A\u5F00\u8F9F\u7A7A\u95F4,\u624D\u80FD\u4F7F\u7528 var sce []int sce[0] = 2 // \u7F16\u8BD1\u62A5\u9519 sce[1] = 4 sce[2] = 6 fmt.Println(sce) } package main import &quot;fmt&quot; func main() { str := &quot;abcdefg&quot; // \u901A\u8FC7\u5B57\u7B26\u4E32\u751F\u6210\u5207\u7247 sce1 := str[3:] fmt.Println(sce1) // defg</p><p>sce2 := make([]byte, 10) // \u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EA\u80FD\u662Fslice\u6216\u8005\u662F\u6570\u7EC4 // \u5C06\u5B57\u7B26\u4E32\u62F7\u8D1D\u5230\u5207\u7247\u4E2D copy(sce2, str) fmt.Println(sce2) //[97 98 99 100 101 102 103 0 0 0] } \u5B57\u7B26\u4E32\u7684\u5E95\u5C42\u662F[]byte\u6570\u7EC4, \u6240\u4EE5\u5B57\u7B26\u4E5F\u652F\u6301\u5207\u7247\u76F8\u5173\u64CD\u4F5C \u53EA\u58F0\u660E\u5F53\u6CA1\u6709\u88AB\u521B\u5EFA\u7684\u5207\u7247\u662F\u4E0D\u80FD\u4F7F\u7528\u7684 \u548C\u6570\u7EC4\u4E0D\u540C, \u5207\u7247\u53EA\u652F\u6301\u5224\u65AD\u662F\u5426\u4E3Anil, \u4E0D\u652F\u6301==\u3001!=\u5224\u65AD \u53EF\u4EE5\u901A\u8FC7\u5207\u7247\u518D\u6B21\u751F\u6210\u65B0\u7684\u5207\u7247, \u4E24\u4E2A\u5207\u7247\u5E95\u5C42\u6307\u5411\u540C\u4E00\u6570\u7EC4 map(\u5B57\u5178\u3001\u6620\u5C04) map\u7FFB\u8BD1\u8FC7\u6765\u5C31\u662F\u5B57\u5178\u6216\u8005\u6620\u5C04, \u53EF\u4EE5\u628Amap\u770B\u505A\u662F\u5207\u7247\u7684\u5347\u7EA7\u7248 \u53EA\u8981\u662F\u53EF\u4EE5\u505A==\u3001!=\u5224\u65AD\u7684\u6570\u636E\u7C7B\u578B\u90FD\u53EF\u4EE5\u4F5C\u4E3Akey(\u6570\u503C\u7C7B\u578B\u3001\u5B57\u7B26\u4E32\u3001\u6570\u7EC4\u3001\u6307\u9488\u3001\u7ED3\u6784\u4F53\u3001\u63A5\u53E3) map\u7684key\u7684\u6570\u636E\u7C7B\u578B\u4E0D\u80FD\u662F:slice\u3001map\u3001function map\u548C\u5207\u7247\u4E00\u6837\u5BB9\u91CF\u90FD\u4E0D\u662F\u56FA\u5B9A\u7684, \u5F53\u5BB9\u91CF\u4E0D\u8DB3\u65F6\u5E95\u5C42\u4F1A\u81EA\u52A8\u6269\u5BB9 \u5207\u7247\u662F\u7528\u6765\u5B58\u50A8\u4E00\u7EC4\u76F8\u540C\u7C7B\u578B\u7684\u6570\u636E\u7684, map\u4E5F\u662F\u7528\u6765\u5B58\u50A8\u4E00\u7EC4\u76F8\u540C\u7C7B\u578B\u7684\u6570\u636E\u7684 \u5728\u5207\u7247\u4E2D\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7D22\u5F15\u83B7\u53D6\u5BF9\u5E94\u7684\u5143\u7D20, \u5728map\u4E2D\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7key\u83B7\u53D6\u5BF9\u5E94\u7684\u5143\u7D20 \u5207\u7247\u7684\u7D22\u5F15\u662F\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210\u7684,\u4ECE0\u5F00\u59CB\u9012\u589E. map\u4E2D\u7684key\u9700\u8981\u6211\u4EEC\u81EA\u5DF1\u6307\u5B9A map\u683C\u5F0F:var dic map[key\u6570\u636E\u7C7B\u578B]value\u6570\u636E\u7C7B\u578B package main import &quot;fmt&quot; func main() { var dic map[int]int = map[int]int{0:1, 1:3, 2:5} fmt.Println(dic) // map[0:1 1:3 2:5]</p><p>// \u83B7\u53D6map\u4E2D\u67D0\u4E2Akey\u5BF9\u5E94\u7684\u503C fmt.Println(dic[0]) // 1</p><p>// \u4FEE\u6539map\u4E2D\u67D0\u4E2Akey\u5BF9\u5E94\u7684\u503C dic[1] = 666 fmt.Println(dic) // map[0:1 1:666 2:5] } package main import &quot;fmt&quot; func main() { var dict map[string]string = map[string]string{&quot;name&quot;:&quot;lnj&quot;, &quot;age&quot;:&quot;33&quot;, &quot;gender&quot;:&quot;male&quot;} fmt.Println(dict)// map[name:lnj age:33 gender:male] } \u56FE\u7247 \u521B\u5EFAmap\u7684\u4E09\u79CD\u65B9\u5F0F \u65B9\u5F0F\u4E00: \u901A\u8FC7Go\u63D0\u4F9B\u7684\u8BED\u6CD5\u7CD6\u5FEB\u901F\u521B\u5EFA package main import &quot;fmt&quot; func main() { dict := map[string]string{&quot;name&quot;:&quot;lnj&quot;, &quot;age&quot;:&quot;33&quot;, &quot;gender&quot;:&quot;male&quot;} fmt.Println(dict)// map[name:lnj age:33 gender:male] } \u65B9\u5F0F\u4E8C:\u901A\u8FC7make\u51FD\u6570\u521B\u5EFAmake(\u7C7B\u578B, \u5BB9\u91CF) package main import &quot;fmt&quot; func main() { var dict = make(map[string]string, 3) dict[&quot;name&quot;] = &quot;lnj&quot; dict[&quot;age&quot;] = &quot;33&quot; dict[&quot;gender&quot;] = &quot;male&quot; fmt.Println(dict)// map[age:33 gender:male name:lnj] } \u65B9\u5F0F\u4E8C:\u901A\u8FC7make\u51FD\u6570\u521B\u5EFAmake(\u7C7B\u578B) package main import &quot;fmt&quot; func main() { var dict = make(map[string]string) dict[&quot;name&quot;] = &quot;lnj&quot; dict[&quot;age&quot;] = &quot;33&quot; dict[&quot;gender&quot;] = &quot;male&quot; fmt.Println(dict)// map[age:33 gender:male name:lnj] } \u548C\u5207\u7247\u4E00\u6837,\u6CA1\u6709\u88AB\u521B\u5EFA\u7684map\u662F\u4E0D\u80FD\u4F7F\u7528\u7684 package main import &quot;fmt&quot; func main() { // map\u58F0\u660E\u540E\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528, \u53EA\u6709\u901A\u8FC7make\u6216\u8BED\u6CD5\u7CD6\u521B\u5EFA\u4E4B\u540E\u624D\u4F1A\u5F00\u8F9F\u7A7A\u95F4,\u624D\u80FD\u4F7F\u7528 var dict map[string]string dict[&quot;name&quot;] = &quot;lnj&quot; // \u7F16\u8BD1\u62A5\u9519 dict[&quot;age&quot;] = &quot;33&quot; dict[&quot;gender&quot;] = &quot;male&quot; fmt.Println(dict) } map\u7684\u589E\u5220\u6539\u67E5 \u589E\u52A0: \u5F53map\u4E2D\u6CA1\u6709\u6307\u5B9A\u7684key\u65F6\u5C31\u4F1A\u81EA\u52A8\u589E\u52A0 package main import &quot;fmt&quot; func main() { var dict = make(map[string]string) fmt.Println(&quot;\u589E\u52A0\u524D:&quot;, dict) // map[] dict[&quot;name&quot;] = &quot;lnj&quot; fmt.Println(&quot;\u589E\u52A0\u540E:&quot;, dict) // map[name:lnj] } \u4FEE\u6539: \u5F53map\u4E2D\u6709\u6307\u5B9A\u7684key\u65F6\u5C31\u4F1A\u81EA\u52A8\u4FEE\u6539 package main import &quot;fmt&quot; func main() { var dict = map[string]string{&quot;name&quot;:&quot;lnj&quot;, &quot;age&quot;:&quot;33&quot;, &quot;gender&quot;:&quot;male&quot;} fmt.Println(&quot;\u4FEE\u6539\u524D:&quot;, dict) // map[name:lnj age:33 gender:male] dict[&quot;name&quot;] = &quot;zs&quot; fmt.Println(&quot;\u4FEE\u6539\u540E:&quot;, dict) // map[age:33 gender:male name:zs] } \u5220\u9664: \u53EF\u4EE5\u901A\u8FC7Go\u8BED\u8A00\u5185\u7F6Edelete\u51FD\u6570\u5220\u9664\u6307\u5B9A\u5143\u7D20 package main import &quot;fmt&quot; func main() { var dict = map[string]string{&quot;name&quot;:&quot;lnj&quot;, &quot;age&quot;:&quot;33&quot;, &quot;gender&quot;:&quot;male&quot;} fmt.Println(&quot;\u5220\u9664\u524D:&quot;, dict) // map[name:lnj age:33 gender:male] // \u7B2C\u4E00\u4E2A\u53C2\u6570: \u88AB\u64CD\u4F5C\u7684\u5B57\u5178 // \u7B2C\u4E8C\u4E2A\u53C2\u6570: \u9700\u8981\u5220\u9664\u5143\u7D20\u5BF9\u5E94\u7684key delete(dict, &quot;name&quot;) fmt.Println(&quot;\u5220\u9664\u540E:&quot;, dict) // map[age:33 gender:male] } \u67E5\u8BE2: \u901A\u8FC7ok-idiom\u6A21\u5F0F\u5224\u65AD\u6307\u5B9A\u952E\u503C\u5BF9\u662F\u5426\u5B58\u50A8 package main import &quot;fmt&quot; func main() { var dict = map[string]string{&quot;name&quot;:&quot;lnj&quot;, &quot;age&quot;:&quot;33&quot;, &quot;gender&quot;:&quot;male&quot;} //value, ok := dict[&quot;age&quot;] //if(ok){ // fmt.Println(&quot;\u6709age\u8FD9\u4E2Akey,\u503C\u4E3A&quot;, value) //}else{ // fmt.Println(&quot;\u6CA1\u6709age\u8FD9\u4E2Akey,\u503C\u4E3A&quot;, value) //} if value, ok := dict[&quot;age&quot;]; ok{ fmt.Println(&quot;\u6709age\u8FD9\u4E2Akey,\u503C\u4E3A&quot;, value) } }</p><div class="language-go"><pre><code><span class="token operator">-</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token keyword">map</span>\u904D\u5386<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
  <span class="token operator">+</span> \u6CE8\u610F<span class="token punctuation">:</span> <span class="token keyword">map</span>\u548C\u6570\u7EC4\u4EE5\u53CA\u5207\u7247\u4E0D\u540C<span class="token punctuation">,</span><span class="token keyword">map</span>\u4E2D\u5B58\u50A8\u7684\u6570\u636E\u662F\u65E0\u5E8F\u7684<span class="token punctuation">,</span> \u6240\u4EE5\u591A\u6B21\u6253\u5370\u8F93\u51FA\u7684\u987A\u5E8F\u53EF\u80FD\u4E0D\u540C
<span class="token string">\`\`</span><span class="token string">\`go
 var dict = map[string]string{&quot;name&quot;:&quot;lnj&quot;, &quot;age&quot;:&quot;33&quot;, &quot;gender&quot;:&quot;male&quot;}
 for key, value := range dict{
  fmt.Println(key, value)
 }
\u7ED3\u6784\u4F53
Go\u8BED\u8A00\u4E2D\u7684\u7ED3\u6784\u4F53\u548CC\u8BED\u8A00\u4E2D\u7ED3\u6784\u4F53\u4E00\u6837, \u90FD\u662F\u7528\u6765\u4FDD\u5B58\u4E00\u7EC4\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E
Go\u8BED\u8A00\u4E2D\u7684\u7ED3\u6784\u4F53\u548CC\u8BED\u8A00\u4E2D\u7ED3\u6784\u4F53\u4E00\u6837, \u90FD\u9700\u8981\u5148\u5B9A\u4E49\u7ED3\u6784\u4F53\u7C7B\u578B\u518D\u5229\u7528\u7ED3\u6784\u4F53\u7C7B\u578B\u5B9A\u4E49\u7ED3\u6784\u4F53\u53D8\u91CF
\u5B9A\u4E49\u7ED3\u6784\u4F53\u7C7B\u578B
type \u7C7B\u578B\u540D\u79F0 struct{
  \u5C5E\u6027\u540D\u79F0 \u5C5E\u6027\u7C7B\u578B
  \u5C5E\u6027\u540D\u79F0 \u5C5E\u6027\u7C7B\u578B
  ... ...
}
type Studentstruct {
 name string
 age int
}
\u521B\u5EFA\u7ED3\u6784\u4F53\u53D8\u91CF\u7684\u4E24\u79CD\u65B9\u5F0F
package main
import &quot;fmt&quot;
func main() {
type Student struct {
 name string
 age int
} 

// \u5B8C\u5168\u521D\u59CB\u5316
var stu1= Student{&quot;lnj&quot;, 33}
fmt.Println(stu1)
// \u90E8\u5206\u521D\u59CB\u5316
// \u90E8\u5206\u521D\u59CB\u5316\u5FC5\u987B\u901A\u8FC7 \u5C5E\u6027\u540D\u79F0: \u65B9\u5F0F\u6307\u5B9A\u8981\u521D\u59CB\u5316\u7684\u5C5E\u6027
var stu2 = Student{name:&quot;lnj&quot;}
fmt.Println(stu2)
}
package main
import &quot;fmt&quot;
func main() {
// \u6CE8\u610F: \u8FD9\u91CC\u4E0D\u7528\u5199type\u548C\u7ED3\u6784\u4F53\u7C7B\u578B\u540D\u79F0
var stu2 = struct {
 name string
 age int
}{
 name: &quot;lnj&quot;,
 age: 33,
}
fmt.Println(stu2)
}
\u548CC\u8BED\u8A00\u4E2D\u7684\u7ED3\u6784\u4F53\u4E00\u6837, \u5982\u679C\u7ED3\u6784\u4F53\u7C7B\u578B\u53EA\u9700\u8981\u4F7F\u7528\u4E00\u6B21, \u90A3\u4E48\u5EFA\u8BAE\u5B9A\u4E49\u7C7B\u578B\u540C\u65F6\u5B9A\u4E49\u53D8\u91CF
\u65B9\u5F0F\u4E8C: \u5B9A\u4E49\u7ED3\u6784\u4F53\u7C7B\u578B\u540C\u65F6\u5B9A\u4E49\u7ED3\u6784\u4F53\u53D8\u91CF(\u533F\u540D\u7ED3\u6784\u4F53)
\u548CC\u8BED\u8A00\u4E2D\u7684\u7ED3\u6784\u4F53\u4E00\u6837, \u5982\u679C\u7ED3\u6784\u4F53\u7C7B\u578B\u9700\u8981\u591A\u6B21\u4F7F\u7528, \u90A3\u4E48\u5EFA\u8BAE\u5148\u5B9A\u4E49\u7C7B\u578B\u518D\u5B9A\u4E49\u53D8\u91CF
\u65B9\u5F0F\u4E00: \u5148\u5B9A\u4E49\u7ED3\u6784\u4F53\u7C7B\u578B, \u518D\u5B9A\u4E49\u7ED3\u6784\u4F53\u53D8\u91CF
\u7ED3\u6784\u4F53\u7C7B\u578B\u64CD\u4F5C
  package main
  import &quot;fmt&quot;
  type Student struct {
   name string
   age int
  }
  func main() {
 var stu= Student{&quot;lnj&quot;, 33}
 // \u83B7\u53D6\u7ED3\u6784\u4F53\u4E2D\u67D0\u4E2A\u5C5E\u6027\u5BF9\u5E94\u7684\u503C
 fmt.Println(stu.name)

 // \u4FEE\u6539\u7ED3\u6784\u4F53\u4E2D\u67D0\u4E2A\u5C5E\u6027\u5BF9\u5E94\u7684\u503C
 stu.name = &quot;zs&quot;
 fmt.Println(stu)
  }
\u548Cslice\u3001map\u4E0D\u540C\u7684\u662F, \u53EA\u8981\u5B9A\u4E49\u4E86\u7ED3\u6784\u4F53\u53D8\u91CF\u5C31\u53EF\u4EE5\u4F7F\u7528\u7ED3\u6784\u4F53\u53D8\u91CF
\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u7ED3\u6784\u4F53\u4E2D\u7684\u6240\u6709\u5C5E\u6027\u90FD\u662F\u5C5E\u6027\u5BF9\u5E94\u7C7B\u578B\u7684\u9ED8\u8BA4\u503C
  package main
  import &quot;fmt&quot;
  type Student struct {
   name string
   age int
  }
  func main() {
 var stu Student // \u76F8\u5F53\u4E8E var stu = Student{}
 fmt.Println(stu) // { 0}
 stu.name = &quot;lnj&quot; // \u4E0D\u4F1A\u62A5\u9519
 stu.age = 33
 fmt.Println(stu) // {lnj 33}
  }
\u590D\u6742\u7ED3\u6784\u4F53\u6210\u5458
package main
import &quot;fmt&quot;
type Student struct {
  name string
  age int
}
func main() {
type Demo struct {
 age int // \u57FA\u672C\u7C7B\u578B\u4F5C\u4E3A\u5C5E\u6027
 arr [3]int // \u6570\u7EC4\u7C7B\u578B\u4F5C\u4E3A\u5C5E\u6027
 sce []int // \u5207\u7247\u7C7B\u578B\u4F5C\u4E3A\u5C5E\u6027
 mp map[string]string // \u5B57\u5178\u7C7B\u578B\u4F5C\u4E3A\u5C5E\u6027
 stu Student // \u7ED3\u6784\u4F53\u7C7B\u578B\u4F5C\u4E3A\u5C5E\u6027
}

var d Demo = Demo{
 33,
 [3]int{1, 3, 5},
 []int{2, 4, 6},
 map[string]string{&quot;class&quot;:&quot;one&quot;},
 Student{
  &quot;lnj&quot;,
  33,
 },
}
fmt.Println(d) // {33 [1 3 5] [2 4 6] map[class:one] {lnj 33}}
}
package main
import &quot;fmt&quot;
type Student struct {
  name string
  age int
}
func main() {
type Demo struct {
 age int // \u57FA\u672C\u7C7B\u578B\u4F5C\u4E3A\u5C5E\u6027
 arr [3]int // \u6570\u7EC4\u7C7B\u578B\u4F5C\u4E3A\u5C5E\u6027
 sce []int // \u5207\u7247\u7C7B\u578B\u4F5C\u4E3A\u5C5E\u6027
 mp map[string]string // \u5B57\u5178\u7C7B\u578B\u4F5C\u4E3A\u5C5E\u6027
 stu Student // \u7ED3\u6784\u4F53\u7C7B\u578B\u4F5C\u4E3A\u5C5E\u6027
}

// \u5B9A\u4E49\u7ED3\u6784\u4F53\u53D8\u91CF
var d Demo
// \u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u57FA\u672C\u7C7B\u578B\u5C5E\u6027
d.age = 33
// \u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u6570\u7EC4\u7C7B\u578B\u5C5E\u6027
d.arr[0] = 666
// \u4E0D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5207\u7247\u7C7B\u578B\u5C5E\u6027
//d.sce[0] = 888 // \u7F16\u8BD1\u62A5\u9519
d.sce = make([]int, 5) // \u5148\u521B\u5EFA
d.sce[0] = 888 // \u540E\u4F7F\u7528
// \u4E0D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5B57\u5178\u7C7B\u578B\u5C5E\u6027
//d.mp[&quot;class&quot;] = &quot;one&quot; // \u7F16\u8BD1\u62A5\u9519
d.mp = make(map[string]string)// \u5148\u521B\u5EFA
d.mp[&quot;class&quot;] = &quot;one&quot;// \u540E\u4F7F\u7528
// \u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u7ED3\u6784\u4F53\u7C7B\u578B\u5C5E\u6027
d.stu.name = &quot;lnj&quot;
fmt.Println(d) // {33 [666 0 0] [888 0 0 0 0] map[class:one] {lnj 0}}
}
slice\u3001map\u7C7B\u578B\u5C5E\u6027\u9ED8\u8BA4\u503C\u662Fnil,\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528
\u521B\u5EFA\u65F6\u53EF\u4EE5\u6309\u7167\u5C5E\u6027\u5355\u72EC\u5B58\u5728\u65F6\u521D\u59CB\u5316\u65B9\u5F0F\u521D\u59CB\u5316
\u7ED3\u6784\u4F53\u7C7B\u578B\u8F6C\u6362
\u5C5E\u6027\u540D\u3001\u5C5E\u6027\u7C7B\u578B\u3001\u5C5E\u6027\u4E2A\u6570\u3001\u6392\u5217\u987A\u5E8F\u90FD\u662F\u7C7B\u578B\u7EC4\u6210\u90E8\u5206
\u53EA\u6709\u5C5E\u6027\u540D\u3001\u5C5E\u6027\u7C7B\u578B\u3001\u5C5E\u6027\u4E2A\u6570\u3001\u6392\u5217\u987A\u5E8F\u90FD\u76F8\u540C\u7684\u7ED3\u6784\u4F53\u7C7B\u578B\u624D\u80FD\u8F6C\u6362
  package main
  import &quot;fmt&quot;
  func main() {
 type Person1 struct {
  name string
  age int
 }
 type Person2 struct {
  name string
  age int
 }
 type Person3 struct {
  age int
  name string
 }
 type Person4 struct {
  nm string
  age int
 }
 type Person5 struct {
  name string
  age string
 }
 type Person6 struct {
  age int
  name string
  gender string
 }

 var p1 Person1 = Person1{&quot;lnj&quot;, 33}
 var p2 Person2
 // \u7C7B\u578B\u540D\u79F0\u4E0D\u4E00\u6837\u4E0D\u80FD\u76F4\u63A5\u8D4B\u503C(Person1\u3001Person2)
 //p2 = p1

 // \u867D\u7136\u7C7B\u578B\u540D\u79F0\u4E0D\u4E00\u6837, \u4F46\u662F\u4E24\u4E2A\u7C7B\u578B\u4E2D\u7684\`</span>\u5C5E\u6027\u540D\u79F0<span class="token string">\`\u3001\`</span>\u5C5E\u6027\u7C7B\u578B<span class="token string">\`\u3001\`</span>\u5C5E\u6027\u4E2A\u6570<span class="token string">\`\u3001\`</span>\u6392\u5217\u987A\u5E8F<span class="token string">\`\u90FD\u4E00\u6837,\u6240\u4EE5\u53EF\u4EE5\u5F3A\u5236\u8F6C\u6362
 p2 = Person2(p1)
 fmt.Println(p2)
 // \u4E24\u4E2A\u7ED3\u6784\u4F53\u7C7B\u578B\u4E2D\u7684\`</span>\u5C5E\u6027\u540D\u79F0<span class="token string">\`\u3001\`</span>\u5C5E\u6027\u7C7B\u578B<span class="token string">\`\u3001\`</span>\u5C5E\u6027\u4E2A\u6570<span class="token string">\`\u90FD\u4E00\u6837,\u4F46\u662F\`</span>\u6392\u5217\u987A\u5E8F<span class="token string">\`\u4E0D\u4E00\u6837,\u6240\u4EE5\u4E0D\u80FD\u5F3A\u5236\u8F6C\u6362
 //var p3 Person3
 //p3 = Person3(p1)
 //fmt.Println(p3)

 // \u4E24\u4E2A\u7ED3\u6784\u4F53\u7C7B\u578B\u4E2D\u7684\`</span>\u5C5E\u6027\u7C7B\u578B<span class="token string">\`\u3001\`</span>\u5C5E\u6027\u4E2A\u6570<span class="token string">\`\u3001\`</span>\u6392\u5217\u987A\u5E8F<span class="token string">\`\u90FD\u4E00\u6837,\u4F46\u662F\`</span>\u5C5E\u6027\u540D\u79F0<span class="token string">\`\u4E0D\u4E00\u6837,\u6240\u4EE5\u4E0D\u80FD\u5F3A\u5236\u8F6C\u6362
 //var p4 Person4
 //p4 = Person4(p1)
 //fmt.Println(p4)

 // \u4E24\u4E2A\u7ED3\u6784\u4F53\u7C7B\u578B\u4E2D\u7684\`</span>\u5C5E\u6027\u540D\u79F0<span class="token string">\`\u3001\`</span>\u5C5E\u6027\u4E2A\u6570<span class="token string">\`\u3001\`</span>\u6392\u5217\u987A\u5E8F<span class="token string">\`\u90FD\u4E00\u6837,\u4F46\u662F\`</span>\u5C5E\u6027\u7C7B\u578B<span class="token string">\`\u4E0D\u4E00\u6837,\u6240\u4EE5\u4E0D\u80FD\u5F3A\u5236\u8F6C\u6362
 //var p5 Person5
 //p5 = Person5(p1)
 //fmt.Println(p5)

 // \u4E24\u4E2A\u7ED3\u6784\u4F53\u7C7B\u578B\u4E2D\u7684\`</span>\u5C5E\u6027\u540D\u79F0<span class="token string">\`\u3001\`</span>\u5C5E\u6027\u7C7B\u578B<span class="token string">\`\u3001\`</span>\u6392\u5217\u987A\u5E8F<span class="token string">\`\u90FD\u4E00\u6837,\u4F46\u662F\`</span>\u5C5E\u6027\u4E2A\u6570<span class="token string">\`\u4E0D\u4E00\u6837,\u6240\u4EE5\u4E0D\u80FD\u5F3A\u5236\u8F6C\u6362
 //var p6 Person6
 //p6 = Person6(p1)
 //fmt.Println(p6)
  }
\u533F\u540D\u5C5E\u6027
package main
import &quot;fmt&quot;
func main() {
type Person struct {
 int
 float32
 bool
 string
}
// \u4E0D\u6307\u5B9A\u540D\u79F0\u521D\u59CB\u5316
per1 := Person{3, 3.14, false, &quot;lnj&quot;}
fmt.Println(per1)

// \u53EF\u4EE5\u628A\u6570\u636E\u7C7B\u578B\u4F5C\u4E3A\u540D\u5B57\u663E\u793A\u521D\u59CB\u5316
per2 := Person{
 int: 3,
 float32: 3.14,
 bool: true,
 string: &quot;lnj&quot;,
}
fmt.Println(per2)

// \u53EF\u4EE5\u628A\u6570\u636E\u7C7B\u578B\u5F53\u505A\u5C5E\u6027\u540D\u79F0\u64CD\u4F5C\u7ED3\u6784\u4F53
per2.int = 666
fmt.Println(per2.int) // 666
}
package main
import &quot;fmt&quot;
func main() {
type Person struct {
 name string
 age int
}
type Student struct {
 Person // \u533F\u540D\u5C5E\u6027
 class string
}

stu := Student{
 Person{&quot;lnj&quot;, 33},
 &quot;\u5B66\u524D\u4E00\u73ED&quot;,
}
fmt.Println(stu) // {{lnj 33} \u5B66\u524D\u4E00\u73ED}
}
package main
import &quot;fmt&quot;
func main() {
type Person struct {
 name string
 age int
}
type Student struct {
 Person // \u533F\u540D\u5C5E\u6027
 class string
}

stu := Student{
 Person{&quot;lnj&quot;, 33},
 &quot;\u5B66\u524D\u4E00\u73ED&quot;,
}
fmt.Println(stu) // {{lnj 33} \u5B66\u524D\u4E00\u73ED}

// \u65B9\u5F0F\u4E00: \u5148\u627E\u5230\u533F\u540D\u5C5E\u6027,\u518D\u8BBF\u95EE\u533F\u540D\u5C5E\u6027\u4E2D\u7684\u5C5E\u6027
stu.Person.name = &quot;zs&quot;
fmt.Println(stu) // {{zs 33} \u5B66\u524D\u4E00\u73ED}
// \u65B9\u5F0F\u4E8C: \u76F4\u63A5\u8BBF\u95EE\u533F\u540D\u5C5E\u6027\u4E2D\u7684\u5C5E\u6027
// \u7CFB\u7EDF\u4F1A\u5148\u67E5\u627E\u5F53\u524D\u7ED3\u6784\u4F53\u6709\u6CA1\u6709\u540D\u79F0\u53EB\u505Aname\u7684\u5C5E\u6027
// \u5982\u679C\u6CA1\u6709\u4F1A\u7EE7\u7EED\u67E5\u627E\u533F\u540D\u5C5E\u6027\u4E2D\u6709\u6CA1\u6709\u540D\u79F0\u53EB\u505Aname\u7684\u5C5E\u6027
stu.name = &quot;ww&quot;
fmt.Println(stu) // {{ww 33} \u5B66\u524D\u4E00\u73ED}
}
package main
import &quot;fmt&quot;
func main() {
type Person struct {
 name string
 age int
}
type Class struct {
 name string
 time string
}
type Student struct {
 Person // \u533F\u540D\u5C5E\u6027
 Class // \u533F\u540D\u5C5E\u6027
}
stu := Student{
 Person{&quot;lnj&quot;, 33},
 Class{&quot;\u5B66\u524D\u4E00\u73ED&quot;, &quot;2020-12-12&quot;},
}
fmt.Println(stu) // {{lnj 33} {\u5B66\u524D\u4E00\u73ED 2020-12-12}}
// \u7F16\u8BD1\u62A5\u9519, \u7CFB\u7EDF\u641E\u4E0D\u6E05\u695A\u8981\u627E\u54EA\u4E2Aname
//stu.name = &quot;zs&quot;

stu.Person.name = &quot;zs&quot;
stu.Class.name = &quot;\u5C0F\u5B66\u4E00\u5E74\u7EA7&quot;
fmt.Println(stu) // {{zs 33} {\u5C0F\u5B66\u4E00\u5E74\u7EA7 2020-12-12}}
}
package main
import &quot;fmt&quot;
func main() {
type Person struct {
 name string
}
type Student struct {
 per Person
 age int
}

var stu Student = Student{Person{&quot;lnj&quot;}, 18}
//fmt.Println(stu.name) // \u62A5\u9519
fmt.Println(stu.per.name) // \u5FC5\u987B\u901A\u8FC7\u5C5E\u6027\u8FDB\u4E00\u6B65\u67E5\u627E
fmt.Println(stu.age)
}
package main
import &quot;fmt&quot;
func main() {
type Person struct {
 Person // \u9519\u8BEF
 name string
}
type Student struct {
 *Student  // \u6B63\u786E, \u94FE\u8868
 age int
}
}
\u6CE8\u610F\u70B9: \u5982\u679C\u533F\u540D\u5C5E\u6027\u662F\u4E00\u4E2A\u7ED3\u6784\u4F53\u7C7B\u578B, \u90A3\u4E48\u8FD9\u4E2A\u7ED3\u6784\u4F53\u7C7B\u578B\u4E0D\u80FD\u662F\u81EA\u5DF1
\u6CE8\u610F\u70B9: \u53EA\u6709\u533F\u540D\u7ED3\u6784\u4F53\u624D\u652F\u6301\u5411\u4E0A\u67E5\u627E
\u6CE8\u610F\u70B9: \u5982\u679C\u591A\u4E2A\u533F\u540D\u5C5E\u6027\u7684\u5C5E\u6027\u540D\u79F0\u76F8\u540C,\u90A3\u4E48\u4E0D\u80FD\u901A\u8FC7\u65B9\u5F0F\u4E8C\u64CD\u4F5C,\u53EA\u80FD\u901A\u8FC7\u65B9\u5F0F\u4E00
\u5982\u679C\u7ED3\u6784\u4F53\u4F5C\u4E3A\u533F\u540D\u5C5E\u6027, \u60F3\u8BBF\u95EE\u533F\u540D\u5C5E\u6027\u7684\u5C5E\u6027\u6709\u4E24\u79CD\u65B9\u5F0F
Go\u8BED\u8A00\u4E2D\u6700\u5E38\u89C1\u7684\u533F\u540D\u5C5E\u6027\u662F\u7528\u7ED3\u6784\u4F53\u7C7B\u578B\u4F5C\u4E3A\u533F\u540D\u5C5E\u6027
\u6CA1\u6709\u6307\u5B9A\u5C5E\u6027\u540D\u79F0,\u53EA\u6709\u5C5E\u6027\u7684\u7C7B\u578B, \u6211\u4EEC\u79F0\u4E4B\u4E3A\u533F\u540D\u5C5E\u6027
\u4EFB\u4F55\u6709\u547D\u540D\u7684\u6570\u636E\u7C7B\u578B\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u533F\u540D\u5C5E\u6027(int\u3001float\u3001bool\u3001string\u3001struct\u7B49)
\u666E\u901A\u6307\u9488
\u548CC\u8BED\u8A00\u4E00\u6837, \u5141\u8BB8\u7528\u4E00\u4E2A\u53D8\u91CF\u6765\u5B58\u653E\u5176\u5B83\u53D8\u91CF\u7684\u5730\u5740, \u8FD9\u79CD\u4E13\u95E8\u7528\u4E8E\u5B58\u50A8\u5176\u5B83\u53D8\u91CF\u5730\u5740\u7684\u53D8\u91CF, \u6211\u4EEC\u79F0\u4E4B\u4E3A\u6307\u9488\u53D8\u91CF
\u548CC\u8BED\u8A00\u4E00\u6837, Go\u8BED\u8A00\u4E2D\u7684\u6307\u9488\u65E0\u8BBA\u662F\u4EC0\u4E48\u7C7B\u578B\u5360\u7528\u5185\u5B58\u90FD\u4E00\u6837(32\u4F4D4\u4E2A\u5B57\u8282, 64\u4F4D8\u4E2A\u5B57\u8282)
package main

import (
 &quot;fmt&quot;
 &quot;unsafe&quot;
)

func main() {

 var p1 *int;
 var p2 *float64;
 var p3 *bool;
 fmt.Println(unsafe.Sizeof(p1)) // 8
 fmt.Println(unsafe.Sizeof(p2)) // 8
 fmt.Println(unsafe.Sizeof(p3)) // 8
}
\u548CC\u8BED\u8A00\u4E00\u6837, \u53EA\u8981\u4E00\u4E2A\u6307\u9488\u53D8\u91CF\u4FDD\u5B58\u4E86\u53E6\u4E00\u4E2A\u53D8\u91CF\u5BF9\u5E94\u7684\u5185\u5B58\u5730\u5740, \u90A3\u4E48\u5C31\u53EF\u4EE5\u901A\u8FC7*\u6765\u8BBF\u95EE\u6307\u9488\u53D8\u91CF\u6307\u5411\u7684\u5B58\u50A8\u7A7A\u95F4
package main

import (
 &quot;fmt&quot;
)

func main() {

 // 1.\u5B9A\u4E49\u4E00\u4E2A\u666E\u901A\u53D8\u91CF
 var num int = 666
 // 2.\u5B9A\u4E49\u4E00\u4E2A\u6307\u9488\u53D8\u91CF
 var p *int = &amp;num
 fmt.Printf(&quot;%p\\n&quot;, &amp;num) // 0xc042064080
 fmt.Printf(&quot;%p\\n&quot;, p) // 0xc042064080
 fmt.Printf(&quot;%T\\n&quot;, p) // *int
 // 3.\u901A\u8FC7\u6307\u9488\u53D8\u91CF\u64CD\u4F5C\u6307\u5411\u7684\u5B58\u50A8\u7A7A\u95F4
 *p = 888
 // 4.\u6307\u9488\u53D8\u91CF\u64CD\u4F5C\u7684\u5C31\u662F\u6307\u5411\u53D8\u91CF\u7684\u5B58\u50A8\u7A7A\u95F4
 fmt.Println(num) // 888
 fmt.Println(*p) // 888
}
\u6307\u5411\u6570\u7EC4\u6307\u9488
\u5728C\u8BED\u8A00\u4E2D, \u6570\u7EC4\u540D,&amp;\u6570\u7EC4\u540D,&amp;\u6570\u7EC4\u9996\u5143\u7D20\u4FDD\u5B58\u7684\u90FD\u662F\u540C\u4E00\u4E2A\u5730\u5740
#include &lt;stdio.h&gt;

int main(){
     int arr[3] = {1, 3, 5};
     printf(&quot;%p\\n&quot;, arr); // 0060FEA4
     printf(&quot;%p\\n&quot;, &amp;arr); // 0060FEA4
     printf(&quot;%p\\n&quot;, &amp;arr[0]); // 0060FEA4
}
\u5728Go\u8BED\u8A00\u4E2D\u901A\u8FC7\u6570\u7EC4\u540D\u65E0\u6CD5\u76F4\u63A5\u83B7\u53D6\u6570\u7EC4\u7684\u5185\u5B58\u5730\u5740
package main
import &quot;fmt&quot;

func main() {
 var arr [3]int = [3]int{1, 3, 5}
 fmt.Printf(&quot;%p\\n&quot;, arr) // \u4E71\u4E03\u516B\u7CDF\u4E1C\u897F
 fmt.Printf(&quot;%p\\n&quot;, &amp;arr) // 0xc0420620a0
 fmt.Printf(&quot;%p\\n&quot;, &amp;arr[0]) // 0xc0420620a0
}
\u5728C\u8BED\u8A00\u4E2D, \u65E0\u8BBA\u6211\u4EEC\u5C06\u6570\u7EC4\u540D,&amp;\u6570\u7EC4\u540D,&amp;\u6570\u7EC4\u9996\u5143\u7D20\u8D4B\u503C\u7ED9\u6307\u9488\u53D8\u91CF, \u90FD\u4EE3\u8868\u6307\u9488\u53D8\u91CF\u6307\u5411\u4E86\u8FD9\u4E2A\u6570\u7EC4
#include &lt;stdio.h&gt;

int main(){
     int arr[3] = {1, 3, 5};
     int *p1 = arr;
     p1[1] = 6;
     printf(&quot;%d\\n&quot;, arr[1]);

     int *p2 = &amp;arr;
     p2[1] = 7;
     printf(&quot;%d\\n&quot;, arr[1]);

     int *p3 = &amp;arr[0];
     p3[1] = 8;
     printf(&quot;%d\\n&quot;, arr[1]);
}
\u5728Go\u8BED\u8A00\u4E2D, \u56E0\u4E3A\u53EA\u6709\u6570\u636E\u7C7B\u578B\u4E00\u6A21\u4E00\u6837\u624D\u80FD\u8D4B\u503C, \u6240\u4EE5\u53EA\u80FD\u901A\u8FC7&amp;\u6570\u7EC4\u540D\u8D4B\u503C\u7ED9\u6307\u9488\u53D8\u91CF, \u624D\u4EE3\u8868\u6307\u9488\u53D8\u91CF\u6307\u5411\u4E86\u8FD9\u4E2A\u6570\u7EC4
package main

import &quot;fmt&quot;

func main() {
 // 1.\u9519\u8BEF, \u5728Go\u8BED\u8A00\u4E2D\u5FC5\u987B\u7C7B\u578B\u4E00\u6A21\u4E00\u6837\u624D\u80FD\u8D4B\u503C
 // arr\u7C7B\u578B\u662F[3]int, p1\u7684\u7C7B\u578B\u662F*[3]int
 var p1 *[3]int
 fmt.Printf(&quot;%T\\n&quot;, arr)
 fmt.Printf(&quot;%T\\n&quot;, p1)
 p1 = arr // \u62A5\u9519
 p1[1] = 6
 fmt.Println(arr[1])

 // 2.\u6B63\u786E, &amp;arr\u7684\u7C7B\u578B\u662F*[3]int, p2\u7684\u7C7B\u578B\u4E5F\u662F*[3]int
 var p2 *[3]int
 fmt.Printf(&quot;%T\\n&quot;, &amp;arr)
 fmt.Printf(&quot;%T\\n&quot;, p2)
 p2 = &amp;arr
 p2[1] = 6
 fmt.Println(arr[1])

 // 3.\u9519\u8BEF, &amp;arr[0]\u7684\u7C7B\u578B\u662F*int, p3\u7684\u7C7B\u578B\u4E5F\u662F*[3]int
 var p3 *[3]int
 fmt.Printf(&quot;%T\\n&quot;, &amp;arr[0])
 fmt.Printf(&quot;%T\\n&quot;, p3)
 p3 = &amp;arr[0] // \u62A5\u9519
 p3[1] = 6
 fmt.Println(arr[1])
}
\u6CE8\u610F\u70B9:
Go\u8BED\u8A00\u4E2D\u7684\u6307\u9488, \u4E0D\u652F\u6301C\u8BED\u8A00\u4E2D\u7684+1 -1\u548C++ -- \u64CD\u4F5C
package main

import &quot;fmt&quot;

func main() {


 var arr [3]int = [3]int{1, 3, 5}
 var p *[3]int
 p = &amp;arr
 fmt.Printf(&quot;%p\\n&quot;, &amp;arr) // 0xc0420620a0
 fmt.Printf(&quot;%p\\n&quot;, p) // 0xc0420620a0
 fmt.Println(&amp;arr) // &amp;[1 3 5]
 fmt.Println(p) // &amp;[1 3 5]
 // \u6307\u9488\u6307\u5411\u6570\u7EC4\u4E4B\u540E\u64CD\u4F5C\u6570\u7EC4\u7684\u51E0\u79CD\u65B9\u5F0F
 // 1.\u76F4\u63A5\u901A\u8FC7\u6570\u7EC4\u540D\u64CD\u4F5C
 arr[1] = 6
 fmt.Println(arr[1])
 // 2.\u901A\u8FC7\u6307\u9488\u95F4\u63A5\u64CD\u4F5C
 (*p)[1] = 7
 fmt.Println((*p)[1])
 fmt.Println(arr[1])
 // 3.\u901A\u8FC7\u6307\u9488\u95F4\u63A5\u64CD\u4F5C
 p[1] = 8
 fmt.Println(p[1])
 fmt.Println(arr[1])

 // \u6CE8\u610F\u70B9: Go\u8BED\u8A00\u4E2D\u7684\u6307\u9488, \u4E0D\u652F\u6301+1 -1\u548C++ --\u64CD\u4F5C
 *(p + 1) = 9 // \u62A5\u9519
 fmt.Println(*p++) // \u62A5\u9519
 fmt.Println(arr[1])
}
\u6307\u5411\u5207\u7247\u7684\u6307\u9488
\u503C\u5F97\u6CE8\u610F\u70B9\u7684\u662F\u5207\u7247\u7684\u672C\u8D28\u5C31\u662F\u4E00\u4E2A\u6307\u9488\u6307\u5411\u6570\u7EC4, \u6240\u4EE5\u6307\u5411\u5207\u7247\u7684\u6307\u9488\u662F\u4E00\u4E2A\u4E8C\u7EA7\u6307\u9488\u56FE\u7247\u56FE\u7247
package main

import &quot;fmt&quot;

func main() {
 // 1.\u5B9A\u4E49\u4E00\u4E2A\u5207\u7247
 var sce[]int = []int{1, 3, 5}
 // 2.\u6253\u5370\u5207\u7247\u7684\u5730\u5740
 // \u5207\u7247\u53D8\u91CF\u4E2D\u4FDD\u5B58\u7684\u5730\u5740, \u4E5F\u5C31\u662F\u6307\u5411\u7684\u90A3\u4E2A\u6570\u7EC4\u7684\u5730\u5740 sce = 0xc0420620a0
 fmt.Printf(&quot;sce = %p\\n&quot;,sce )
 fmt.Println(sce) // [1 3 5]
 // \u5207\u7247\u53D8\u91CF\u81EA\u5DF1\u7684\u5730\u5740, &amp;sce = 0xc04205e3e0
 fmt.Printf(&quot;&amp;sce = %p\\n&quot;,&amp;sce )
 fmt.Println(&amp;sce) // &amp;[1 3 5]
 // 3.\u5B9A\u4E49\u4E00\u4E2A\u6307\u5411\u5207\u7247\u7684\u6307\u9488
 var p *[]int
 // \u56E0\u4E3A\u5FC5\u987B\u7C7B\u578B\u4E00\u81F4\u624D\u80FD\u8D4B\u503C, \u6240\u4EE5\u5C06\u5207\u7247\u53D8\u91CF\u81EA\u5DF1\u7684\u5730\u5740\u7ED9\u4E86\u6307\u9488
 p = &amp;sce
 // 4.\u6253\u5370\u6307\u9488\u4FDD\u5B58\u7684\u5730\u5740
 // \u76F4\u63A5\u6253\u5370p\u6253\u5370\u51FA\u6765\u7684\u662F\u4FDD\u5B58\u7684\u5207\u7247\u53D8\u91CF\u7684\u5730\u5740 p = 0xc04205e3e0
 fmt.Printf(&quot;p = %p\\n&quot;, p)
 fmt.Println(p) // &amp;[1 3 5]
 // \u6253\u5370*p\u6253\u5370\u51FA\u6765\u7684\u662F\u5207\u7247\u53D8\u91CF\u4FDD\u5B58\u7684\u5730\u5740, \u4E5F\u5C31\u662F\u6570\u7EC4\u7684\u5730\u5740 *p = 0xc0420620a0
 fmt.Printf(&quot;*p = %p\\n&quot;, *p)
 fmt.Println(*p) // [1 3 5]
 
 // 5.\u4FEE\u6539\u5207\u7247\u7684\u503C
 // \u901A\u8FC7*p\u627E\u5230\u5207\u7247\u53D8\u91CF\u6307\u5411\u7684\u5B58\u50A8\u7A7A\u95F4(\u6570\u7EC4), \u7136\u540E\u4FEE\u6539\u6570\u7EC4\u4E2D\u4FDD\u5B58\u7684\u6570\u636E
 (*p)[1] = 666
 fmt.Println(sce[1])
}
\u6307\u5411\u5B57\u5178\u6307\u9488
\u4E0E\u666E\u901A\u6307\u9488\u5E76\u65E0\u5DEE\u5F02
package main
import &quot;fmt&quot;
func main() {

 var dict map[string]string = map[string]string{&quot;name&quot;:&quot;lnj&quot;, &quot;age&quot;:&quot;33&quot;}
 var p *map[string]string = &amp;dict
 (*p)[&quot;name&quot;] = &quot;zs&quot;
 fmt.Println(dict)
}
\u6307\u5411\u7ED3\u6784\u4F53\u6307\u9488
Go\u8BED\u8A00\u4E2D\u6307\u5411\u7ED3\u6784\u4F53\u7684\u6307\u9488\u548CC\u8BED\u8A00\u4E00\u6837
\u7ED3\u6784\u4F53\u548C\u6307\u9488
package main
import &quot;fmt&quot;
type Student struct {
  name string
  age int
}
func main() {
// \u521B\u5EFA\u65F6\u5229\u7528\u53D6\u5730\u5740\u7B26\u53F7\u83B7\u53D6\u7ED3\u6784\u4F53\u53D8\u91CF\u5730\u5740
var p1 = &amp;Student{&quot;lnj&quot;, 33}
fmt.Println(p1) // &amp;{lnj 33}

// \u901A\u8FC7new\u5185\u7F6E\u51FD\u6570\u4F20\u5165\u6570\u636E\u7C7B\u578B\u521B\u5EFA
// \u5185\u90E8\u4F1A\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684\u7ED3\u6784\u4F53\u53D8\u91CF, \u7136\u540E\u8FD4\u56DE\u8FD9\u4E2A\u7ED3\u6784\u4F53\u53D8\u91CF\u7684\u5730\u5740
var p2 = new(Student)
fmt.Println(p2) // &amp;{ 0}
}
package main
import &quot;fmt&quot;
type Student struct {
  name string
  age int
}
func main() {
var p = &amp;Student{}
// \u65B9\u5F0F\u4E00: \u4F20\u7EDF\u65B9\u5F0F\u64CD\u4F5C
// \u4FEE\u6539\u7ED3\u6784\u4F53\u4E2D\u67D0\u4E2A\u5C5E\u6027\u5BF9\u5E94\u7684\u503C
// \u6CE8\u610F: \u7531\u4E8E.\u8FD0\u7B97\u7B26\u4F18\u5148\u7EA7\u6BD4*\u9AD8, \u6240\u4EE5\u4E00\u5B9A\u8981\u52A0\u4E0A()
(*p).name = &quot;lnj&quot;
// \u83B7\u53D6\u7ED3\u6784\u4F53\u4E2D\u67D0\u4E2A\u5C5E\u6027\u5BF9\u5E94\u7684\u503C
fmt.Println((*p).name) // lnj

// \u65B9\u5F0F\u4E8C: \u901A\u8FC7Go\u8BED\u6CD5\u7CD6\u64CD\u4F5C
// Go\u8BED\u8A00\u4F5C\u8005\u4E3A\u4E86\u7A0B\u5E8F\u5458\u4F7F\u7528\u8D77\u6765\u66F4\u52A0\u65B9\u4FBF, \u5728\u64CD\u4F5C\u6307\u5411\u7ED3\u6784\u4F53\u7684\u6307\u9488\u65F6\u53EF\u4EE5\u50CF\u64CD\u4F5C\u63A5\u5934\u4F53\u53D8\u91CF\u4E00\u6837\u901A\u8FC7.\u6765\u64CD\u4F5C
// \u7F16\u8BD1\u65F6\u5E95\u5C42\u4F1A\u81EA\u52A8\u8F6C\u53D1\u4E3A(*p).age\u65B9\u5F0F
p.age = 33
fmt.Println(p.age) // 33
}
\u5229\u7528\u7ED3\u6784\u4F53\u6307\u9488\u64CD\u4F5C\u7ED3\u6784\u4F53\u5C5E\u6027
\u521B\u5EFA\u7ED3\u6784\u4F53\u6307\u9488\u53D8\u91CF\u6709\u4E24\u79CD\u65B9\u5F0F
\u6307\u9488\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570\u548C\u8FD4\u56DE\u503C
\u5982\u679C\u6307\u9488\u7C7B\u578B\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570, \u4FEE\u6539\u5F62\u53C2\u4F1A\u5F71\u54CD\u5B9E\u53C2
\u4E0D\u80FD\u5C06\u51FD\u6570\u5185\u7684\u6307\u5411\u5C40\u90E8\u53D8\u91CF\u7684\u6307\u9488\u4F5C\u4E3A\u8FD4\u56DE\u503C, \u51FD\u6570\u7ED3\u675F\u6307\u5411\u7A7A\u95F4\u4F1A\u88AB\u91CA\u653E
\u53EF\u4EE5\u5C06\u51FD\u6570\u5185\u7684\u5C40\u90E8\u53D8\u91CF\u4F5C\u4E3A\u8FD4\u56DE\u503C, \u672C\u8D28\u662F\u62F7\u8D1D\u4E00\u4EFD
\u65B9\u6CD5
Go\u8BED\u8A00\u4E2D\u7684\u65B9\u6CD5\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u7279\u6B8A\u51FD\u6570, \u53EA\u4E0D\u8FC7\u8FD9\u4E2A\u51FD\u6570\u662F\u548C\u67D0\u79CD\u5C5E\u6027\u7C7B\u578B\u7ED1\u5B9A\u5728\u4E00\u8D77\u7684\u800C\u5DF2
Go\u8BED\u8A00\u4E2D\u7684\u65B9\u6CD5\u4E00\u822C\u7528\u4E8E\u5C06\u51FD\u6570\u548C\u7ED3\u6784\u4F53\u7ED1\u5B9A\u5728\u4E00\u8D77, \u8BA9\u7ED3\u6784\u4F53\u9664\u4E86\u80FD\u591F\u4FDD\u5B58\u6570\u636E\u5916\u8FD8\u80FD\u5177\u5907\u67D0\u4E9B\u884C\u4E3A
\u5C06\u51FD\u6570\u548C\u6570\u636E\u7C7B\u578B\u7ED1\u5B9A\u7684\u683C\u5F0F
\u53EA\u9700\u8981\u5728\u51FD\u6570\u540D\u79F0\u524D\u9762\u52A0\u4E0A(\u63A5\u6536\u8005 \u6570\u636E\u7C7B\u578B), \u5373\u53EF\u5C06\u51FD\u6570\u548C\u67D0\u79CD\u6570\u636E\u7C7B\u578B\u7ED1\u5B9A\u5728\u4E00\u8D77
func (\u63A5\u6536\u8005 \u6570\u636E\u7C7B\u578B)\u65B9\u6CD5\u540D\u79F0(\u5F62\u53C2\u5217\u8868)(\u8FD4\u56DE\u503C\u5217\u8868){
  \u65B9\u6CD5\u4F53
}
\u793A\u4F8B: \u7ED9\u7ED3\u6784\u4F53\u6DFB\u52A0\u4E00\u4E2A\u65B9\u6CD5,\u6B64\u65F6\u7ED3\u6784\u4F53\u9664\u4E86\u53EF\u4EE5\u4FDD\u5B58\u6570\u636E,\u8FD8\u5177\u5907\u8BF4\u51FA\u81EA\u5DF1\u540D\u5B57\u548C\u5E74\u9F84\u7684\u884C\u4E3A
package main
import &quot;fmt&quot;
// 1.\u5B9A\u4E49\u4E00\u4E2A\u7ED3\u6784\u4F53
type Person struct {
 name string
 age int
}
// 2.\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570, \u5E76\u5C06\u8FD9\u4E2A\u51FD\u6570\u548CPerson\u7ED3\u6784\u4F53\u7ED1\u5B9A\u5728\u4E00\u8D77
func (p Person)say()  {
 fmt.Println(&quot;my name is&quot;, p.name, &quot;my age is&quot;, p.age)
}
func main() {
 // 3.\u521B\u5EFA\u4E00\u4E2A\u7ED3\u6784\u4F53\u53D8\u91CF
 per := Person{&quot;lnj&quot;, 33}
 // 4.\u5229\u7528\u7ED3\u6784\u4F53\u53D8\u91CF\u8C03\u7528\u548C\u7ED3\u6784\u4F53\u7ED1\u5B9A\u7684\u65B9\u6CD5
 // \u8C03\u7528\u65F6\u4F1A\u81EA\u52A8\u5C06\u8C03\u7528\u8005(per)\u4F20\u9012\u7ED9\u65B9\u6CD5\u7684\u63A5\u6536\u8005(p)
 // \u6240\u4EE5\u53EF\u4EE5\u5728\u65B9\u6CD5\u5185\u90E8\u901A\u8FC7p\u65B9\u6CD5\u7ED3\u6784\u4F53\u53D8\u91CF\u7684\u5C5E\u6027
 per.say()
}
\u65B9\u6CD5\u548C\u51FD\u6570\u5F02\u540C
package main
import &quot;fmt&quot;
type Person struct {
name string
age int
}
// \u5B9A\u4E49\u4E00\u4E2A\u65B9\u6CD5
func (p Person)say()  {
fmt.Println(&quot;say\u65B9\u6CD5&quot;)
}
// \u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570
func say()  {
fmt.Println(&quot;say\u51FD\u6570&quot;)
}
func main() {
p := Person{&quot;lnj&quot;, 33}
fmt.Printf(&quot;%T\\n&quot;, p.say) // func()
fmt.Printf(&quot;%T\\n&quot;, say) // func()

// \u5B9A\u4E49\u4E00\u4E2A\u4FDD\u5B58\u6CA1\u6709\u5F62\u53C2\u6CA1\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570\u7C7B\u578B\u53D8\u91CF
var fn func()
// \u5229\u7528\u51FD\u6570\u7C7B\u578B\u53D8\u91CF\u4FDD\u5B58\u4E00\u4E2A\u65B9\u6CD5
fn = p.say
// \u5229\u7528\u51FD\u6570\u7C7B\u578B\u53D8\u91CF\u8C03\u7528\u4E00\u4E2A\u65B9\u6CD5
fn()

// \u5229\u7528\u51FD\u6570\u7C7B\u578B\u53D8\u91CF\u4FDD\u5B58\u4E00\u4E2A\u51FD\u6570
fn = say
// \u5229\u7528\u51FD\u6570\u7C7B\u578B\u53D8\u91CF\u8C03\u7528\u4E00\u4E2A\u51FD\u6570
fn()
}
package main
import &quot;fmt&quot;
type Person struct {
 name string
 age int
}
// \u5B9A\u4E49\u4E00\u4E2A\u65B9\u6CD5
func (p Person)say()  {
   fmt.Println(&quot;my name is&quot;, p.name, &quot;my age is&quot;, p.age)
}
// \u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570
func test()  {
 fmt.Println(&quot;test&quot;)
}
func main() {
 per := Person{&quot;lnj&quot;, 33}
 per.say() // \u65B9\u6CD5\u53EA\u80FD\u901A\u8FC7\u7ED1\u5B9A\u7C7B\u578B\u7684\u53D8\u91CF\u8C03\u7528
 //say() // \u7F16\u8BD1\u62A5\u9519, \u4E0D\u80FD\u76F4\u63A5\u8C03\u7528
 test() // \u7F16\u8BD1\u901A\u8FC7, \u53EF\u4EE5\u76F4\u63A5\u8C03\u7528
}
package main
import &quot;fmt&quot;
type Person struct {
 name string
 age int
}
// \u5B9A\u4E49\u4E00\u4E2A\u65B9\u6CD5
func (p Person)say()  {
   fmt.Println(&quot;my name is&quot;, p.name, &quot;my age is&quot;, p.age)
}
// \u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570
func test(p Person)  {
 fmt.Println(&quot;my name is&quot;, p.name, &quot;my age is&quot;, p.age)
}
func main() {
 per := Person{&quot;lnj&quot;, 33}
 per.say() // my name is lnj my age is 33
 test(per) // my name is lnj my age is 33
}
package main
import &quot;fmt&quot;
type Person struct {
 name string
 age int
}
// \u63A5\u6536\u8005\u662F\u4E00\u4E2A\u53D8\u91CF
func (p Person)setName(name string)  {
 p.name = name
}
// \u63A5\u6536\u8005\u662F\u4E00\u4E2A\u6307\u9488
func (p *Person)setAge(age int)  {
 p.age = age
}
func main() {
 per := Person{&quot;lnj&quot;, 33}
 fmt.Println(per) // {lnj 33}
 // \u503C\u4F20\u9012, \u65B9\u6CD5\u5185\u90E8\u4FEE\u6539\u4E0D\u4F1A\u5F71\u54CD\u65B9\u6CD5\u5916\u90E8
 per.setName(&quot;zs&quot;)
 fmt.Println(per) // {lnj 33}
 p := &amp;per
 // \u5730\u5740\u4F20\u9012, \u65B9\u6CD5\u5185\u90E8\u4FEE\u6539\u4F1A\u5F71\u54CD\u65B9\u6CD5\u5916\u90E8
 (*p).setAge(18)
 fmt.Println(per) // {lnj 18}
}
package main
import &quot;fmt&quot;
type Person struct {
 name string
 age int
}
// \u63A5\u6536\u8005\u662F\u4E00\u4E2A\u53D8\u91CF
func (p Person)setName(name string)  {
 p.name = name
}
// \u63A5\u6536\u8005\u662F\u4E00\u4E2A\u6307\u9488
func (p *Person)setAge(age int)  {
 p.age = age
}
func main() {
 per := Person{&quot;lnj&quot;, 33}
 // \u65B9\u5F0F\u4E00: \u5148\u62FF\u5230\u6307\u9488,\u7136\u540E\u518D\u901A\u8FC7\u6307\u9488\u8C03\u7528
 p := &amp;per
 (*p).setAge(18)
 fmt.Println(per) // {lnj 18}
 // \u65B9\u5F0F\u4E8C: \u76F4\u63A5\u5229\u7528\u53D8\u91CF\u8C03\u7528, \u5E95\u5C42\u4F1A\u81EA\u52A8\u83B7\u53D6\u53D8\u91CF\u5730\u5740\u4F20\u9012\u7ED9\u63A5\u6536\u8005
 per.setAge(66)
 fmt.Println(per) // {lnj 66}
}
\u5730\u5740\u4F20\u9012\u7684\u51E0\u79CD\u8C03\u7528\u65B9\u5F0F
\u65E2\u7136\u53EF\u4EE5\u770B\u505A\u5F62\u53C2, \u90A3\u4E48\u81EA\u7136\u4E5F\u5177\u5907\u5F62\u53C2\u7684\u7279\u70B9(\u503C\u4F20\u9012\u548C\u5730\u5740\u4F20\u9012)
\u65B9\u6CD5\u7684\u63A5\u6536\u8005\u53EF\u4EE5\u770B\u505A\u5C31\u662F\u51FD\u6570\u7684\u4E00\u4E2A\u5F62\u53C2
\u65B9\u6CD5\u53EA\u80FD\u901A\u8FC7\u7ED1\u5B9A\u7C7B\u578B\u7684\u53D8\u91CF\u8C03\u7528, \u51FD\u6570\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528
\u65B9\u6CD5\u7684\u6570\u636E\u7C7B\u578B\u4E5F\u662F\u51FD\u6570\u7C7B\u578B, \u6240\u4EE5\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u53D8\u91CF\u4FDD\u5B58(\u4F5C\u4E3A\u53C2\u6570\u8FD4\u56DE\u503C\u7B49)
\u63A5\u53E3
Go\u8BED\u8A00\u4E2D\u7684\u63A5\u53E3\u548C\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684USB\u63D2\u69FD\u5F88\u50CF, \u5B83\u5B9A\u4E49\u67D0\u79CD\u6807\u51C6, \u4F46\u4E0D\u5173\u5FC3\u5177\u4F53\u5B9E\u73B0
\u65E0\u8BBA\u4F60\u5230\u54EA\u4E2A\u5546\u5E97\u91CC\u9762\u53BB\u8D2D\u4E70USB\u7EBF,\u53EA\u8981\u4F60\u544A\u8BC9\u5546\u5BB6\u4F60\u9700\u8981\u4E00\u6839USB\u7EBF, \u4E70\u56DE\u5BB6\u4E4B\u540E\u5C31\u4E00\u5B9A\u80FD\u63D2\u5230\u7535\u8111\u4E0A\u4F7F\u7528. \u4E4B\u6240\u4EE5\u80FD\u7528,\u539F\u56E0\u5C31\u662F\u7535\u8111\u5382\u5546\u5728\u6307\u5B9A\u4E86USB\u63D2\u69FD\u7684\u6807\u51C6(\u5C3A\u5BF8\u3001\u6392\u7EBF\u7B49\u7B49), \u751F\u4EA7\u5382\u5BB6\u53EA\u9700\u8981\u6309\u7167\u6807\u51C6\u751F\u4EA7\u5373\u53EF
\u540C\u6837\u5728Go\u8BED\u8A00\u4E2D\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u63A5\u53E3\u6765\u5B9A\u4E49\u67D0\u79CD\u6807\u51C6(\u51FD\u6570\u58F0\u660E),\u4F46\u4E0D\u7528\u4E0D\u5173\u5FC3\u5177\u4F53\u5B9E\u73B0(\u51FD\u6570\u5B9E\u73B0), \u53EA\u8981\u5C06\u6765\u6709\u4EBA\u6309\u7167\u6807\u51C6\u5B9E\u73B0\u4E86\u63A5\u53E3,\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528
\u5B9A\u4E49\u63A5\u53E3\u683C\u5F0F
type \u63A5\u53E3\u540D\u79F0 interface{
  \u51FD\u6570\u58F0\u660E
}
\u793A\u4F8B: \u5B9A\u4E49\u4E00\u4E2A\u901A\u7528\u7684USB\u63A5\u53E3
package main
import &quot;fmt&quot;
// 1.\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3
type usber interface {
 start()
 stop()
}
type Computer struct {
 name string
 model string
}
// 2.\u5B9E\u73B0\u63A5\u53E3\u4E2D\u7684\u6240\u6709\u65B9\u6CD5
func (cm Computer)start() {
 fmt.Println(&quot;\u542F\u52A8\u7535\u8111&quot;)
}
func (cm Computer)stop() {
 fmt.Println(&quot;\u5173\u95ED\u7535\u8111&quot;)
}

type Phone struct {
 name string
 model string
}
// 2.\u5B9E\u73B0\u63A5\u53E3\u4E2D\u7684\u6240\u6709\u65B9\u6CD5
func (p Phone)start()  {
 fmt.Println(&quot;\u542F\u52A8\u624B\u673A&quot;)
}
func (p Phone)stop()  {
 fmt.Println(&quot;\u5173\u95ED\u624B\u673A&quot;)
}

// 3.\u4F7F\u7528\u63A5\u53E3\u5B9A\u4E49\u7684\u65B9\u6CD5
func working(u usber)  {
 u.start()
 u.stop()
}
func main() {
 cm := Computer{&quot;\u6234\u5C14&quot;, &quot;F1234&quot;}
 working(cm) // \u542F\u52A8\u7535\u8111 \u5173\u95ED\u7535\u8111

 p := Phone{&quot;\u534E\u4E3A&quot;, &quot;M10&quot;}
 working(p)  // \u542F\u52A8\u624B\u673A \u5173\u95ED\u624B\u673A
}
\u63A5\u53E3\u6CE8\u610F\u70B9
type usber interface {
  func start(){ // \u9519\u8BEF
   fmt.Println(&quot;\u542F\u52A8&quot;)
  }
  func stop()  { // \u9519\u8BEF
   fmt.Println(&quot;\u505C\u6B62&quot;)
  }
}
type usber interface {
  name string // \u9519\u8BEF
  start()
  stop()
}
package main
import &quot;fmt&quot;
// 1.\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3
type usber interface {
  start()
  stop()
}
type Computer struct {
  name string
  model string
}
// 2.\u5B9E\u73B0\u63A5\u53E3\u4E2D\u7684\u6240\u6709\u65B9\u6CD5
func (cm Computer)start() {
  fmt.Println(&quot;\u542F\u52A8\u7535\u8111&quot;)
}
func (cm Computer)stop() {
  fmt.Println(&quot;\u5173\u95ED\u7535\u8111&quot;)
}
// 2.\u53EA\u5B9E\u73B0\u4E86\u63A5\u53E3\u4E2D\u90E8\u5206\u65B9\u6CD5
type Phone struct {
  name string
  model string
}
func (p Phone)start()  {
  fmt.Println(&quot;\u542F\u52A8\u624B\u673A&quot;)
}
func main() {
  // 1.\u5B9A\u4E49\u4E00\u4E2Ausber\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF
  var i usber
  // 2.\u7528usber\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF\u63A5\u6536Computer\u7C7B\u578B\u7ED3\u6784\u4F53
  i = Computer{&quot;\u6234\u5C14&quot;, &quot;F1234&quot;} // \u5B9E\u73B0\u4E86\u6240\u6709\u65B9\u6CD5, \u4E0D\u4F1A\u62A5\u9519
  // 3.\u7528usber\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF\u63A5\u6536Phone\u7C7B\u578B\u7ED3\u6784\u4F53
  //i = Phone{&quot;\u534E\u4E3A&quot;, &quot;M10&quot;} // \u53EA\u5B9E\u73B0\u4E86\u90E8\u5206\u65B9\u6CD5, \u4F1A\u62A5\u9519
  fmt.Println(i)
}
package main
import &quot;fmt&quot;
type A interface {
  fna()
}
type B interface {
  fnb()
}
type C interface {
  A // \u5D4C\u5165A\u63A5\u53E3
  B // \u5D4C\u5165B\u63A5\u53E3
  fnc()
}
type Person struct {}
func (p Person)fna()  {
  fmt.Println(&quot;\u5B9E\u73B0A\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5&quot;)
}
func (p Person)fnb()  {
  fmt.Println(&quot;\u5B9E\u73B0B\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5&quot;)
}
func (p Person)fnc()  {
  fmt.Println(&quot;\u5B9E\u73B0C\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5&quot;)
}
func main() {
  p := Person{}
  p.fna() // \u5B9E\u73B0A\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5
  p.fnb() // \u5B9E\u73B0B\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5
  p.fnc() // \u5B9E\u73B0C\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5
}
type A interface {
  A // \u62A5\u9519, \u4E0D\u80FD\u81EA\u5DF1\u641E\u81EA\u5DF1
}
type A interface {
  fn()
}
type B interface {
  fn()
}
type C interface {
  A 
  B // \u62A5\u9519, A\u63A5\u53E3\u548CB\u63A5\u53E3\u90FD\u6709\u540D\u79F0\u53EB\u505Afn\u7684\u65B9\u6CD5
  fnc()
}
package main
import &quot;fmt&quot;
type aer interface {
  fna()
}
type ber interface {
  aer
  fnb()
}
// Person\u5B9E\u73B0\u4E86\u8D85\u96C6\u63A5\u53E3\u6240\u6709\u65B9\u6CD5
type Person struct {}
func (p Person)fna()  {
  fmt.Println(&quot;\u5B9E\u73B0A\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5&quot;)
}
func (p Person)fnb()  {
  fmt.Println(&quot;\u5B9E\u73B0B\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5&quot;)
}
// Student\u5B9E\u73B0\u4E86\u5B50\u96C6\u63A5\u53E3\u6240\u6709\u65B9\u6CD5
type Student struct { }
func (p Student)fna()  {
fmt.Println(&quot;\u5B9E\u73B0A\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5&quot;)
}
func main() {
  var i ber
  // \u5B50\u96C6\u63A5\u53E3\u53D8\u91CF\u4E0D\u80FD\u8F6C\u6362\u4E3A\u8D85\u96C6\u63A5\u53E3\u53D8\u91CF
  //i = Student{}
  fmt.Println(i)
  var j aer
  // \u8D85\u96C6\u63A5\u53E3\u53D8\u91CF\u53EF\u4EE5\u81EA\u52A8\u8F6C\u6362\u6210\u5B50\u96C6\u63A5\u53E3\u53D8\u91CF,
  j = Person{}
  fmt.Println(j)
}
package main
import &quot;fmt&quot;
func main() {
  // 1.\u5B9A\u4E49\u4E00\u4E2A\u7A7A\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF
  var i interface{}
  // 2.\u7528\u63A5\u53E3\u7C7B\u578B\u4FDD\u5B58\u4EFB\u610F\u7C7B\u578B\u6570\u636E
  i = 123
  fmt.Println(i) // 123
  i = 3.14
  fmt.Println(i) // 3.14
  i = &quot;lnj&quot;
  fmt.Println(i) // lnj
  i = [3]int{1, 3, 5}
  fmt.Println(i) // [1 3 5]
  i = []int{2, 4, 6}
  fmt.Println(i) // [2 4 6]
  i = map[string]string{&quot;name&quot;: &quot;lnj&quot;}
  fmt.Println(i) // map[name:lnj]
  i = Computer{&quot;\u6234\u5C14&quot;, &quot;F1234&quot;}
  fmt.Println(i) // {\u6234\u5C14 F1234}
}
package main
import &quot;fmt&quot;
// 1.\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3
type usber interface {
  start()
  stop()
}
// 2.\u81EA\u5B9A\u4E49int\u7C7B\u578B
type integer int
// 2.\u5B9E\u73B0\u63A5\u53E3\u4E2D\u7684\u6240\u6709\u65B9\u6CD5
func (i integer)start()  {
  fmt.Println(&quot;int\u7C7B\u578B\u5B9E\u73B0\u63A5\u53E3&quot;)
}
func (i integer)stop()  {
  fmt.Println(&quot;int\u7C7B\u578B\u5B9E\u73B0\u63A5\u53E3&quot;)
}
func main() {
  var i integer = 666
  i.start() // int\u7C7B\u578B\u5B9E\u73B0\u63A5\u53E3
  i.stop() // int\u7C7B\u578B\u5B9E\u73B0\u63A5\u53E3
}
\u53EA\u8981\u662F\u81EA\u5B9A\u4E49\u7C7B\u578B\u5C31\u53EF\u4EE5\u5B9E\u73B0\u63A5\u53E3
\u7A7A\u63A5\u53E3\u7C7B\u578B\u53EF\u4EE5\u63A5\u6536\u4EFB\u610F\u7C7B\u578B\u6570\u636E
\u8D85\u96C6\u63A5\u53E3\u53D8\u91CF\u53EF\u4EE5\u81EA\u52A8\u8F6C\u6362\u6210\u5B50\u96C6\u63A5\u53E3\u53D8\u91CF, \u5B50\u96C6\u63A5\u53E3\u53D8\u91CF\u4E0D\u80FD\u8F6C\u6362\u4E3A\u8D85\u96C6\u63A5\u53E3\u53D8\u91CF(\u672C\u8D28\u5C31\u662F\u6CA1\u6709\u5B9E\u73B0\u6240\u6709\u65B9\u6CD5)
\u63A5\u53E3\u4E2D\u5D4C\u5165\u63A5\u53E3\u65F6\u4E0D\u80FD\u51FA\u73B0\u76F8\u540C\u7684\u65B9\u6CD5\u540D\u79F0
\u548C\u7ED3\u6784\u4F53\u4E00\u6837,\u63A5\u53E3\u4E2D\u5D4C\u5165\u63A5\u53E3\u65F6\u4E0D\u80FD\u5D4C\u5165\u81EA\u5DF1
\u548C\u7ED3\u6784\u4F53\u4E00\u6837,\u63A5\u53E3\u4E2D\u4E5F\u53EF\u4EE5\u5D4C\u5165\u63A5\u53E3
\u53EA\u6709\u5B9E\u73B0\u4E86\u63A5\u53E3\u4E2D\u6240\u6709\u7684\u65B9\u6CD5, \u624D\u7B97\u5B9E\u73B0\u4E86\u63A5\u53E3, \u624D\u80FD\u7528\u8BE5\u63A5\u53E3\u7C7B\u578B\u63A5\u6536
\u63A5\u53E3\u4E2D\u53EA\u80FD\u6709\u65B9\u6CD5\u4EC0\u4E48\u4E0D\u80FD\u6709\u5B57\u6BB5
\u63A5\u53E3\u4E2D\u53EA\u80FD\u6709\u65B9\u6CD5\u7684\u58F0\u660E\u4E0D\u80FD\u6709\u65B9\u6CD5\u7684\u5B9E\u73B0
\u63A5\u53E3\u7C7B\u578B\u8F6C\u6362
package main
import &quot;fmt&quot;
type studier interface {
  read()
}
type Person struct {
  name string
  age int
}
func (p Person)read()  {
  fmt.Println(p.name, &quot;\u6B63\u5728\u5B66\u4E60&quot;)
}
func main() {
  // 1.\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF
  var s studier
  // 2.\u7528\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF\u63A5\u6536\u5B9E\u73B0\u4E86\u63A5\u53E3\u7684\u7ED3\u6784\u4F53
  s = Person{&quot;lnj&quot;, 33}
  s.name = &quot;zs&quot; // \u62A5\u9519, \u7531\u4E8Es\u662F\u63A5\u53E3\u7C7B\u578B, \u6240\u4EE5\u4E0D\u80FD\u8BBF\u95EE\u5C5E\u6027
  fmt.Println(s)
}
package main
import &quot;fmt&quot;
type studier interface {
  read()
}
type Person struct {
  name string
  age int
}
func (p Person)read()  {
  fmt.Println(p.name, &quot;\u6B63\u5728\u5B66\u4E60&quot;)
}
func main() {
  var s studier
  s = Person{&quot;lnj&quot;, 33}
  s.name = &quot;zs&quot; // \u62A5\u9519, \u7531\u4E8Es\u662F\u63A5\u53E3\u7C7B\u578B, \u6240\u4EE5\u4E0D\u80FD\u8BBF\u95EE\u5C5E\u6027
  // 2.\u5B9A\u4E49\u4E00\u4E2A\u7ED3\u6784\u4F53\u7C7B\u578B\u53D8\u91CF
  //var p Person
  // \u4E0D\u80FD\u7528\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\u65B9\u5F0F\u5C06\u63A5\u53E3\u7C7B\u578B\u8F6C\u6362\u4E3A\u539F\u59CB\u7C7B\u578B
  //p = Person(s) // \u62A5\u9519

  // 2.\u5229\u7528ok-idiom\u6A21\u5F0F\u5C06\u63A5\u53E3\u7C7B\u578B\u8FD8\u539F\u4E3A\u539F\u59CB\u7C7B\u578B
  // s.(Person)\u8FD9\u79CD\u683C\u5F0F\u6211\u4EEC\u79F0\u4E4B\u4E3A: \u7C7B\u578B\u65AD\u8A00
  if p, ok := s.(Person); ok {
   p.name = &quot;zs&quot;
   fmt.Println(p)
  }

  // 2.\u901A\u8FC7 type switch\u5C06\u63A5\u53E3\u7C7B\u578B\u8FD8\u539F\u4E3A\u539F\u59CB\u7C7B\u578B
 // \u6CE8\u610F: type switch\u4E0D\u652F\u6301fallthrought
  switch p := s.(type) {
   case Person:
    p.name = &quot;zs&quot;
    fmt.Println(p) // {zs 33}
   default:
    fmt.Println(&quot;\u4E0D\u662FPerson\u7C7B\u578B&quot;)
  }
}
package main
import &quot;fmt&quot;
type studier interface {
  read()
}
type Person struct {
  name string
  age int
}
func (p Person)read()  {
  fmt.Println(p.name, &quot;\u6B63\u5728\u5B66\u4E60&quot;)
}
func main() {
  // 1.\u5B9A\u4E49\u4E00\u4E2A\u62BD\u8C61\u63A5\u53E3\u7C7B\u578B
  var i interface{}
  i = Person{&quot;lnj&quot;, 33}
  // \u4E0D\u80FD\u8C03\u7528read\u65B9\u6CD5, \u56E0\u4E3A\u62BD\u8C61\u63A5\u53E3\u4E2D\u6CA1\u6709\u8FD9\u4E2A\u65B9\u6CD5
  //i.read()
  // 2.\u5229\u7528ok-idiom\u6A21\u5F0F\u5C06\u62BD\u8C61\u63A5\u53E3\u8F6C\u6362\u4E3A\u5177\u4F53\u63A5\u53E3
  if s, ok := i.(studier); ok{
   // \u53EF\u4EE5\u8C03\u7528read\u65B9\u6CD5,\u56E0\u4E3Astudier\u4E2D\u58F0\u660E\u4E86\u8FD9\u4E2A\u65B9\u6CD5,\u5E76\u4E14\u7ED3\u6784\u4F53\u4E2D\u5B9E\u73B0\u4E86\u8FD9\u4E2A\u65B9\u6CD5
   s.read() // lnj \u6B63\u5728\u5B66\u4E60
  }
  }
\u9664\u4E86\u53EF\u4EE5\u5C06\u63A5\u53E3\u7C7B\u578B\u8F6C\u6362\u4E3A\u539F\u59CB\u7C7B\u578B\u4EE5\u5916, \u4F01\u4E1A\u5F00\u53D1\u4E2D\u6709\u65F6\u5019\u53EF\u80FD\u6211\u4EEC\u8FD8\u9700\u8981\u5C06\u62BD\u8C61\u63A5\u53E3\u7C7B\u578B\u8F6C\u6362\u4E3A\u5177\u4F53\u63A5\u53E3\u7C7B\u578B
\u60F3\u8981\u8BBF\u95EE\u53D8\u91CF\u4E2D\u7684\u5C5E\u6027, \u5FC5\u987B\u5C06\u63A5\u53E3\u7C7B\u578B\u8FD8\u539F\u4E3A\u539F\u59CB\u7C7B\u578B
\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF\u53EF\u4EE5\u63A5\u6536\u5B9E\u73B0\u4E86\u8BE5\u63A5\u53E3\u7C7B\u578B\u7684\u53D8\u91CF, \u4F46\u662F\u53EA\u80FD\u8C03\u7528\u8BE5\u53D8\u91CF\u4E2D\u7684\u65B9\u6CD5, \u4E0D\u80FD\u8BBF\u95EE\u8BE5\u53D8\u91CF\u7684\u5C5E\u6027
\u9762\u5411\u5BF9\u8C61\u57FA\u672C\u6982\u5FF5
\u9762\u5411\u5BF9\u8C61\u601D\u60F3
\u9762\u5411\u5BF9\u8C61(Object Oriented,OO)\u662F\u8F6F\u4EF6\u5F00\u53D1\u65B9\u6CD5
\u9762\u5411\u5BF9\u8C61\u662F\u4E00\u79CD\u5BF9\u73B0\u5B9E\u4E16\u754C\u62BD\u8C61\u7684\u7406\u89E3\uFF0C\u662F\u8BA1\u7B97\u673A\u7F16\u7A0B\u6280\u672F\u53D1\u5C55\u5230\u4E00\u5B9A\u9636\u6BB5\u540E\u7684\u4EA7\u7269
Object Oriented Programming-OOP \u2014\u2014\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u56FE\u7247
\u9762\u5411\u5BF9\u8C61\u548C\u9762\u5411\u8FC7\u7A0B\u533A\u522B
\u9762\u5411\u5BF9\u8C61\u662F\u76F8\u5BF9\u9762\u5411\u8FC7\u7A0B\u800C\u8A00
\u9762\u5411\u5BF9\u8C61\u548C\u9762\u5411\u8FC7\u7A0B\u90FD\u662F\u4E00\u79CD\u601D\u60F3
\u9762\u5411\u8FC7\u7A0B
\u5F3A\u8C03\u7684\u662F\u529F\u80FD\u884C\u4E3A
\u5173\u6CE8\u7684\u662F\u89E3\u51B3\u95EE\u9898\u9700\u8981\u54EA\u4E9B\u6B65\u9AA4
\u56DE\u60F3\u4E0B\u524D\u9762\u6211\u4EEC\u5B8C\u6210\u4E00\u4E2A\u9700\u6C42\u7684\u6B65\u9AA4\uFF1A
\u9996\u5148\u641E\u6E05\u695A\u6211\u4EEC\u8981\u505A\u4EC0\u4E48
\u7136\u540E\u5206\u6790\u600E\u4E48\u505A
\u6700\u540E\u6211\u7528\u4EE3\u7801\u4F53\u73B0
\u4E00\u6B65\u4E00\u6B65\u53BB\u5B9E\u73B0\uFF0C\u800C\u5177\u4F53\u7684\u6BCF\u4E00\u6B65\u90FD\u9700\u8981\u6211\u4EEC\u53BB\u5B9E\u73B0\u548C\u64CD\u4F5C
\u5728\u4E0A\u9762\u6BCF\u4E00\u4E2A\u5177\u4F53\u6B65\u9AA4\u4E2D\u6211\u4EEC\u90FD\u662F\u53C2\u4E0E\u8005\uFF0C \u5E76\u4E14\u9700\u8981\u9762\u5BF9\u5177\u4F53\u7684\u6BCF\u4E00\u4E2A\u6B65\u9AA4\u548C\u8FC7\u7A0B\uFF0C \u8FD9\u5C31\u662F\u9762\u5411\u8FC7\u7A0B\u6700\u76F4\u63A5\u7684\u4F53\u73B0
\u9762\u5411\u5BF9\u8C61
\u5C06\u529F\u80FD\u5C01\u88C5\u8FDB\u5BF9\u8C61\uFF0C\u5F3A\u8C03\u5177\u5907\u4E86\u529F\u80FD\u7684\u5BF9\u8C61
\u5173\u6CE8\u7684\u662F\u89E3\u51B3\u95EE\u9898\u9700\u8981\u54EA\u4E9B\u5BF9\u8C61
\u5F53\u9700\u6C42\u5355\u4E00\uFF0C \u6216\u8005\u7B80\u5355\u65F6\uFF0C \u6211\u4EEC\u4E00\u6B65\u4E00\u6B65\u53BB\u64CD\u4F5C\u6CA1\u95EE\u9898\uFF0C \u5E76\u4E14\u6548\u7387\u4E5F\u633A\u9AD8\u3002\u53EF\u968F\u7740\u9700\u6C42\u7684\u66F4\u6539\uFF0C \u529F\u80FD\u7684\u589E\u52A0\uFF0C \u53D1\u73B0\u9700\u8981\u9762\u5BF9\u6BCF\u4E00\u4E2A\u6B65\u9AA4\u975E\u5E38\u9EBB\u70E6\uFF0C \u8FD9\u65F6\u5C31\u5F00\u59CB\u601D\u7D22\uFF0C \u80FD\u4E0D\u80FD\u628A\u8FD9\u4E9B\u6B65\u9AA4\u548C\u529F\u80FD\u518D\u8FDB\u884C\u5C01\u88C5\uFF0C \u5C01\u88C5\u65F6\u6839\u636E\u4E0D\u540C\u7684\u529F\u80FD\uFF0C\u8FDB\u884C\u4E0D\u540C\u7684\u5C01\u88C5\uFF0C\u529F\u80FD\u7C7B\u4F3C\u7684\u5C01\u88C5\u5728\u4E00\u8D77\u3002\u8FD9\u6837\u7ED3\u6784\u5C31\u6E05\u6670\u591A\u4E86\uFF0C \u7528\u7684\u65F6\u5019\uFF0C \u627E\u5230\u5BF9\u5E94\u7684\u7C7B\u5C31\u53EF\u4EE5\u4E86\uFF0C \u8FD9\u5C31\u662F\u9762\u5411\u5BF9\u8C61\u601D\u60F3
\u793A\u4F8B
\u4E70\u7535\u8111
\u627E\u73ED\u957F
\u63CF\u8FF0\u9700\u6C42
\u73ED\u957F\u628A\u7535\u8111\u4E70\u56DE\u6765 *
\u4E86\u89E3\u7535\u8111
\u4E86\u89E3\u81EA\u5DF1\u7684\u9700\u6C42
\u5BF9\u6BD4\u53C2\u6570
\u53BB\u7535\u8111\u57CE
\u780D\u4EF7\uFF0C\u4ED8\u94B1
\u4E70\u56DE\u7535\u8111
\u88AB\u5751
\u9762\u5411\u8FC7\u7A0B
\u9762\u5411\u5BF9\u8C61
\u5403\u996D
\u53BB\u996D\u5E97
\u70B9\u83DC
\u5403
\u53BB\u8D85\u5E02\u5356\u83DC
\u6458\u83DC
\u6D17\u83DC
\u5207\u83DC
\u7092\u83DC
\u76DB\u83DC
\u5403
\u9762\u5411\u8FC7\u7A0B
\u9762\u5411\u5BF9\u8C61
\u6D17\u8863\u670D
\u4E70\u7535\u8111/\u5403\u996D/\u6D17\u8863\u670D
\u627E\u4E2A\u5BF9\u8C61
\u8131\u8863\u670D
\u6253\u5F00\u6D17\u8863\u673A
\u4E22\u8FDB\u53BB
\u4E00\u952E\u6D17\u8863\u70D8\u5E72
\u8131\u8863\u670D
\u653E\u8FDB\u76C6\u91CC
\u653E\u6D17\u8863\u6DB2
\u52A0\u6C34
\u653E\u8863\u670D
\u6413\u4E00\u6413
\u6E05\u4E00\u6E05
\u62E7\u4E00\u62E7
\u6652\u8D77\u6765
\u9762\u5411\u8FC7\u7A0B
\u9762\u5411\u5BF9\u8C61
\u7EC8\u6781\u9762\u5411\u5BF9\u8C61
\u73B0\u5B9E\u751F\u6D3B\u4E2D\u6211\u4EEC\u662F\u5982\u4F55\u5E94\u7528\u9762\u76F8\u5BF9\u8C61\u601D\u60F3\u7684
\u5305\u5DE5\u5934
\u6C7D\u8F66\u574F\u4E86
\u9762\u8BD5
\u9762\u5411\u5BF9\u8C61\u7684\u7279\u70B9
\u662F\u4E00\u79CD\u7B26\u5408\u4EBA\u4EEC\u601D\u8003\u4E60\u60EF\u7684\u601D\u60F3
\u53EF\u4EE5\u5C06\u590D\u6742\u7684\u4E8B\u60C5\u7B80\u5355\u5316
\u5C06\u7A0B\u5E8F\u5458\u4ECE\u6267\u884C\u8005\u8F6C\u6362\u6210\u4E86\u6307\u6325\u8005
\u5B8C\u6210\u9700\u6C42\u65F6\uFF1A
\u5148\u8981\u53BB\u627E\u5177\u6709\u6240\u9700\u7684\u529F\u80FD\u7684\u5BF9\u8C61\u6765\u7528
\u5982\u679C\u8BE5\u5BF9\u8C61\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u521B\u5EFA\u4E00\u4E2A\u5177\u6709\u6240\u9700\u529F\u80FD\u7684\u5BF9\u8C61
\u8FD9\u6837\u7B80\u5316\u5F00\u53D1\u5E76\u63D0\u9AD8\u590D\u7528
\u7C7B\u4E0E\u5BF9\u8C61\u7684\u5173\u7CFB
\u9762\u5411\u5BF9\u8C61\u7684\u6838\u5FC3\u5C31\u662F\u5BF9\u8C61,\u90A3\u600E\u4E48\u521B\u5EFA\u5BF9\u8C61?
\u73B0\u5B9E\u751F\u6D3B\u4E2D\u53EF\u4EE5\u6839\u636E\u6A21\u677F\u521B\u5EFA\u5BF9\u8C61,\u7F16\u7A0B\u8BED\u8A00\u4E5F\u4E00\u6837,\u4E5F\u5FC5\u987B\u5148\u6709\u4E00\u4E2A\u6A21\u677F,\u5728\u8FD9\u4E2A\u6A21\u677F\u4E2D\u8BF4\u6E05\u695A\u5C06\u6765\u521B\u5EFA\u51FA\u6765\u7684\u5BF9\u8C61\u6709\u54EA\u4E9B\u5C5E\u6027\u548C\u884C\u4E3A\u56FE\u7247
Go\u8BED\u8A00\u4E2D\u7684\u7C7B\u76F8\u5F53\u4E8E\u56FE\u7EB8\uFF0C\u7528\u6765\u63CF\u8FF0\u4E00\u7C7B\u4E8B\u7269\u3002\u4E5F\u5C31\u662F\u8BF4\u8981\u60F3\u521B\u5EFA\u5BF9\u8C61\u5FC5\u987B\u5148\u6709\u7C7B
Go\u8BED\u8A00\u5229\u7528\u7C7B\u6765\u521B\u5EFA\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u662F\u7C7B\u7684\u5177\u4F53\u5B58\u5728, \u56E0\u6B64\u9762\u5411\u5BF9\u8C61\u89E3\u51B3\u95EE\u9898\u5E94\u8BE5\u662F\u5148\u8003\u8651\u9700\u8981\u8BBE\u8BA1\u54EA\u4E9B\u7C7B\uFF0C\u518D\u5229\u7528\u7C7B\u521B\u5EFA\u591A\u5C11\u4E2A\u5BF9\u8C61
\u5982\u4F55\u8BBE\u8BA1\u4E00\u4E2A\u7C7B
\u751F\u6D3B\u4E2D\u63CF\u8FF0\u4E8B\u7269\u65E0\u975E\u5C31\u662F\u63CF\u8FF0\u4E8B\u7269\u7684\u5C5E\u6027\u548C\u884C\u4E3A\u3002
\u5982\uFF1A\u4EBA\u6709\u8EAB\u9AD8\uFF0C\u4F53\u91CD\u7B49\u5C5E\u6027\uFF0C\u6709\u8BF4\u8BDD\uFF0C\u6253\u67B6\u7B49\u884C\u4E3A\u3002
\u4E8B\u7269\u540D\u79F0(\u7C7B\u540D):\u4EBA(Person)
\u5C5E\u6027:\u8EAB\u9AD8(height)\u3001\u5E74\u9F84(age)
\u884C\u4E3A(\u529F\u80FD):\u8DD1(run)\u3001\u6253\u67B6(fight)
Go\u8BED\u8A00\u4E2D\u7528\u7C7B\u6765\u63CF\u8FF0\u4E8B\u7269\u4E5F\u662F\u5982\u6B64
\u5C5E\u6027\uFF1A\u5BF9\u5E94\u7C7B\u4E2D\u7684\u6210\u5458\u53D8\u91CF\u3002
\u884C\u4E3A\uFF1A\u5BF9\u5E94\u7C7B\u4E2D\u7684\u6210\u5458\u65B9\u6CD5\u3002
\u5B9A\u4E49\u7C7B\u5176\u5B9E\u5728\u5B9A\u4E49\u7C7B\u4E2D\u7684\u6210\u5458(\u6210\u5458\u53D8\u91CF\u548C\u6210\u5458\u65B9\u6CD5)
\u62E5\u6709\u76F8\u540C\u6216\u8005\u7C7B\u4F3C\u5C5E\u6027\uFF08\u72B6\u6001\u7279\u5F81\uFF09\u548C\u884C\u4E3A\uFF08\u80FD\u5E72\u4EC0\u4E48\u4E8B\uFF09\u7684\u5BF9\u8C61\u90FD\u53EF\u4EE5\u62BD\u50CF\u6210\u4E3A\u4E00\u4E2A\u7C7B\u56FE\u7247
\u5982\u4F55\u5206\u6790\u4E00\u4E2A\u7C7B
\u4E00\u822C\u540D\u8BCD\u90FD\u662F\u7C7B(\u540D\u8BCD\u63D0\u70BC\u6CD5)
\u98DE\u673A\u53D1\u5C04\u4E24\u9897\u70AE\u5F39\u6467\u6BC1\u4E868\u8F86\u88C5\u7532\u8F66
\u98DE\u673A
\u70AE\u5F39
\u88C5\u7532\u8F66
\u9694\u58C1\u8001\u738B\u5728\u516C\u8F66\u4E0A\u7275\u7740\u4E00\u6761\u53FC\u7740\u70ED\u72D7\u7684\u8349\u6CE5\u9A6C
\u8001\u738B
\u70ED\u72D7
\u8349\u6CE5\u9A6C
\u5982\u4F55\u5B9A\u4E49\u4E00\u4E2A\u7C7B
\u7C7B\u662F\u7528\u4E8E\u63CF\u8FF0\u4E8B\u7269\u7684\u7684\u5C5E\u6027\u548C\u884C\u4E3A\u7684, \u800CGo\u8BED\u8A00\u4E2D\u7684\u7ED3\u6784\u4F53\u6B63\u597D\u53EF\u4EE5\u7528\u4E8E\u63CF\u8FF0\u4E8B\u7269\u7684\u5C5E\u6027\u548C\u884C\u4E3A
\u6240\u4EE5\u5728Go\u8BED\u8A00\u4E2D\u6211\u4EEC\u4F7F\u7528\u7ED3\u6784\u4F53\u6765\u5B9A\u4E49\u4E00\u4E2A\u7C7B\u578B
type Person struct {
    name string // \u4EBA\u7684\u5C5E\u6027
    age int // \u4EBA\u7684\u5C5E\u6027
}
// \u4EBA\u7684\u884C\u4E3A
func (p Person)Say()  {
    fmt.Println(&quot;my name is&quot;, p.name, &quot;my age is&quot;, p.age)
}
\u5982\u4F55\u901A\u8FC7\u7C7B\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61
\u4E0D\u8FC7\u5C31\u662F\u521B\u5EFA\u7ED3\u6784\u4F53\u7684\u65F6\u5019, \u6839\u636E\u6BCF\u4E2A\u5BF9\u8C61\u7684\u7279\u5F81\u8D4B\u503C\u4E0D\u540C\u7684\u5C5E\u6027\u7F62\u4E86
// 3.\u521B\u5EFA\u4E00\u4E2A\u7ED3\u6784\u4F53\u53D8\u91CF
    p1 := Person{&quot;lnj&quot;, 33}
    per.say()

    p2 := Person{&quot;zs&quot;, 18}
    per.Say()
\u4E0D\u540C\u5305\u4E2D\u53D8\u91CF\u3001\u51FD\u6570\u3001\u65B9\u6CD5\u3001\u7C7B\u578B\u516C\u79C1\u6709\u95EE\u9898
\u5728Go\u8BED\u8A00\u4E2D\u901A\u8FC7\u9996\u5B57\u6BCD\u5927\u5C0F\u5199\u6765\u63A7\u5236\u53D8\u91CF\u3001\u51FD\u6570\u3001\u65B9\u6CD5\u3001\u7C7B\u578B\u7684\u516C\u79C1\u6709
\u5982\u679C\u9996\u5B57\u6BCD\u5C0F\u5199, \u90A3\u4E48\u4EE3\u8868\u79C1\u6709, \u4EC5\u5728\u5F53\u524D\u5305\u4E2D\u53EF\u4EE5\u4F7F\u7528
\u5982\u679C\u9996\u5B57\u6BCD\u5927\u5199, \u90A3\u4E48\u4EE3\u8868\u5171\u6709, \u5176\u5B83\u5305\u4E2D\u4E5F\u53EF\u4EE5\u4F7F\u7528
package demo

import &quot;fmt&quot;

var num1 int = 123 // \u5F53\u524D\u5305\u53EF\u7528
var Num1 int = 123 // \u5176\u5B83\u5305\u4E5F\u53EF\u7528

type person struct { // \u5F53\u524D\u5305\u53EF\u7528
 name string // \u5F53\u524D\u5305\u53EF\u7528
 age int // \u5F53\u524D\u5305\u53EF\u7528
}

type Student struct { // \u5176\u5B83\u5305\u4E5F\u53EF\u7528
 Name string // \u5176\u5B83\u5305\u4E5F\u53EF\u7528
 Age int // \u5176\u5B83\u5305\u4E5F\u53EF\u7528
}

func test1()  { // \u5F53\u524D\u5305\u53EF\u7528
 fmt.Println(&quot;test1&quot;)
}
func Test2()  { // \u5176\u5B83\u5305\u4E5F\u53EF\u7528
 fmt.Println(&quot;Test2&quot;)
}

func (p person)say()  { // \u5F53\u524D\u5305\u53EF\u7528
 fmt.Println(p.name, p.age)
}
func (s Student)Say()  { // \u5176\u5B83\u5305\u4E5F\u53EF\u7528
 fmt.Println(s.Name, s.Age)
}
\u9762\u5411\u5BF9\u8C61\u4E09\u5927\u7279\u6027
\u5C01\u88C5\u6027
\u5C01\u88C5\u6027\u5C31\u662F\u9690\u85CF\u5B9E\u73B0\u7EC6\u8282\uFF0C\u4EC5\u5BF9\u5916\u516C\u5F00\u63A5\u53E3\u56FE\u7247
\u7C7B\u662F\u6570\u636E\u4E0E\u529F\u80FD\u7684\u5C01\u88C5\uFF0C\u6570\u636E\u5C31\u662F\u6210\u5458\u53D8\u91CF\uFF0C\u529F\u80FD\u5C31\u662F\u65B9\u6CD5
\u4E3A\u4EC0\u4E48\u8981\u5C01\u88C5?
\u4E0D\u5C01\u88C5\u7684\u7F3A\u70B9\uFF1A\u5F53\u4E00\u4E2A\u7C7B\u628A\u81EA\u5DF1\u7684\u6210\u5458\u53D8\u91CF\u66B4\u9732\u7ED9\u5916\u90E8\u7684\u65F6\u5019,\u90A3\u4E48\u8BE5\u7C7B\u5C31\u5931\u53BB\u5BF9\u8BE5\u6210\u5458\u53D8\u91CF\u7684\u7BA1\u7406\u6743\uFF0C\u522B\u4EBA\u53EF\u4EE5\u4EFB\u610F\u7684\u4FEE\u6539\u4F60\u7684\u6210\u5458\u53D8\u91CF
\u5C01\u88C5\u5C31\u662F\u5C06\u6570\u636E\u9690\u85CF\u8D77\u6765,\u53EA\u80FD\u7528\u6B64\u7C7B\u7684\u65B9\u6CD5\u624D\u53EF\u4EE5\u8BFB\u53D6\u6216\u8005\u8BBE\u7F6E\u6570\u636E,\u4E0D\u53EF\u88AB\u5916\u90E8\u4EFB\u610F\u4FEE\u6539\u662F\u9762\u5411\u5BF9\u8C61\u8BBE\u8BA1\u672C\u8D28(\u5C06\u53D8\u5316\u9694\u79BB)\u3002\u8FD9\u6837\u964D\u4F4E\u4E86\u6570\u636E\u88AB\u8BEF\u7528\u7684\u53EF\u80FD (\u63D0\u9AD8\u5B89\u5168\u6027\u548C\u7075\u6D3B\u6027)
package model
import &quot;fmt&quot;
type Person struct { // \u5176\u5B83\u5305\u4E5F\u53EF\u7528
 name string // \u5F53\u524D\u5305\u53EF\u7528
 age int // \u5F53\u524D\u5305\u53EF\u7528
}
func (p *person)SetAge(age int)  {
 // \u5B89\u5168\u6821\u9A8C
 if age &lt; 0 {
  fmt.Println(&quot;\u5E74\u9F84\u4E0D\u80FD\u4E3A\u8D1F\u6570&quot;)
 }
 p.age = age
}
package main
import (
 &quot;fmt&quot;
 &quot;main/model&quot;
)
func main()  {
 // \u62A5\u9519, \u56E0\u4E3Aname\u548Cage\u4E0D\u662F\u516C\u5F00\u7684
 //p := model.Person{&quot;lnj&quot;, 18}

 // \u65B9\u5F0F\u4E00
 //p := model.Person{}
 //p.SetAge(18)
 //fmt.Println(p)

 // \u65B9\u5F0F\u4E8C
 //p := new(model.Person)
 //p.SetAge(18)
 //fmt.Println(p)
}
\u5C01\u88C5\u539F\u5219
\u5C06\u4E0D\u9700\u8981\u5BF9\u5916\u63D0\u4F9B\u7684\u5185\u5BB9\u90FD\u9690\u85CF\u8D77\u6765,\u628A\u5C5E\u6027\u90FD\u9690\u85CF,\u63D0\u4F9B\u516C\u5171\u7684\u65B9\u6CD5\u5BF9\u5176\u8BBF\u95EE
\u7EE7\u627F\u6027
Go\u8BED\u8A00\u8BA4\u4E3A\u867D\u7136\u7EE7\u627F\u80FD\u591F\u63D0\u5347\u4EE3\u7801\u7684\u590D\u7528\u6027, \u4F46\u662F\u4F1A\u8BA9\u4EE3\u7801\u8150\u70C2, \u5E76\u589E\u52A0\u4EE3\u7801\u7684\u590D\u6742\u5EA6.
\u6240\u4EE5go\u8BED\u8A00\u575A\u6301\u4E86\u3003\u7EC4\u5408\u4F18\u4E8E\u7EE7\u627F\u3003\u7684\u539F\u5219, Go\u8BED\u8A00\u4E2D\u6240\u8C13\u7684\u7EE7\u627F\u5176\u5B9E\u662F\u5229\u7528\u7EC4\u5408\u5B9E\u73B0\u7684(\u533F\u540D\u7ED3\u6784\u4F53\u5C5E\u6027)\u56FE\u7247\u56FE\u7247
\u666E\u901A\u7EE7\u627F(\u7EC4\u5408)
package main

import &quot;fmt&quot;

type Person struct {
 name string
 age int
}
type Student struct {
 Person // \u5B66\u751F\u7EE7\u627F\u4E86\u4EBA\u7684\u7279\u6027
 score int
}
type Teacher struct {
 Person // \u8001\u5E08\u7EE7\u627F\u4E86\u4EBA\u7684\u7279\u6027
 Title string
}
func main()  {
 s := Student{Person{&quot;lnj&quot;, 18}, 99}
 //fmt.Println(s.Person.name)
 fmt.Println(s.name) // \u4E24\u79CD\u65B9\u5F0F\u90FD\u80FD\u8BBF\u95EE
 //fmt.Println(s.Person.age)
 fmt.Println(s.age) // \u4E24\u79CD\u65B9\u5F0F\u90FD\u80FD\u8BBF\u95EE
 fmt.Println(s.score)
}
\u7EE7\u627F\u7ED3\u6784\u4E2D\u51FA\u73B0\u91CD\u540D\u60C5\u51B5, \u91C7\u7528\u5C31\u8FD1\u539F\u5219
package main

import &quot;fmt&quot;

type Person struct {
 name string // \u5C5E\u6027\u91CD\u540D
 age int
}
type Student struct {
 Person
 name string // \u5C5E\u6027\u91CD\u540D
 score int
}
func main()  {
 s := Student{Person{&quot;zs&quot;, 18}, &quot;ls&quot;, 99}

 fmt.Println(s.Person.name) // zs
 fmt.Println(s.name) // ls
 //fmt.Println(s.Person.age)
 fmt.Println(s.age) // \u4E24\u79CD\u65B9\u5F0F\u90FD\u80FD\u8BBF\u95EE
 fmt.Println(s.score)
}
\u591A\u91CD\u7EE7\u627F
package main

import &quot;fmt&quot;

type Object struct {
 life int
}
type Person struct {
 Object
 name string
 age int
}
type Student struct {
 Person
 score int
}
func main()  {
 s := Student{Person{Object{77}, &quot;zs&quot;, 33}, 99}
 //fmt.Println(s.Person.Object.life)
 //fmt.Println(s.Person.life)
 fmt.Println(s.life) // \u4E09\u79CD\u65B9\u5F0F\u90FD\u53EF\u4EE5
 //fmt.Println(s.Person.name)
 fmt.Println(s.name) // \u4E24\u79CD\u65B9\u5F0F\u90FD\u80FD\u8BBF\u95EE
 //fmt.Println(s.Person.age)
 fmt.Println(s.age) // \u4E24\u79CD\u65B9\u5F0F\u90FD\u80FD\u8BBF\u95EE
 fmt.Println(s.score)
}
package main

import &quot;fmt&quot;

type Object struct {
 life int
}
type Person struct {
 name string
 age int
}
type Student struct {
 Object
 Person
 score int
}
func main()  {
 s := Student{Object{77}, Person{&quot;zs&quot;, 33}, 99}
 //fmt.Println(s.Person.life)
 fmt.Println(s.life) // \u4E24\u79CD\u65B9\u5F0F\u90FD\u53EF\u4EE5
 //fmt.Println(s.Person.name)
 fmt.Println(s.name) // \u4E24\u79CD\u65B9\u5F0F\u90FD\u80FD\u8BBF\u95EE
 //fmt.Println(s.Person.age)
 fmt.Println(s.age) // \u4E24\u79CD\u65B9\u5F0F\u90FD\u80FD\u8BBF\u95EE
 fmt.Println(s.score)
\u65B9\u6CD5\u7EE7\u627F
\u5728Go\u8BED\u8A00\u4E2D\u5B50\u7C7B\u4E0D\u4EC5\u4EC5\u80FD\u591F\u7EE7\u627F\u7236\u7C7B\u7684\u5C5E\u6027, \u8FD8\u80FD\u591F\u7EE7\u627F\u7236\u7C7B\u7684\u65B9\u6CD5
package main

import &quot;fmt&quot;
type Person struct {
 name string
 age int
}
// \u7236\u7C7B\u65B9\u6CD5
func (p Person)say()  {
 fmt.Println(&quot;name is &quot;, p.name, &quot;age is &quot;, p.age)
}

type Student struct {
 Person
 score float32
} 

func main() {
 stu := Student{Person{&quot;zs&quot;, 18}, 59.9}
 stu.say()
}
\u7EE7\u627F\u4E2D\u7684\u65B9\u6CD5\u91CD\u5199
\u5982\u679C\u5B50\u7C7B\u6709\u548C\u7236\u7C7B\u540C\u540D\u7684\u65B9\u6CD5, \u90A3\u4E48\u6211\u4EEC\u79F0\u4E4B\u4E3A\u65B9\u6CD5\u91CD\u5199
package main

import &quot;fmt&quot;
type Person struct {
 name string
 age int
}
// \u7236\u7C7B\u65B9\u6CD5
func (p Person)say()  {
 fmt.Println(&quot;name is &quot;, p.name, &quot;age is &quot;, p.age)
}

type Student struct {
 Person
 score float32
}
// \u5B50\u7C7B\u65B9\u6CD5
func (s Student)say()  {
 fmt.Println(&quot;name is &quot;, s.name, &quot;age is &quot;, s.age, &quot;score is &quot;, s.score)
}
func main() {
 stu := Student{Person{&quot;zs&quot;, 18}, 59.9}
 // \u548C\u5C5E\u6027\u4E00\u6837, \u8BBF\u95EE\u65F6\u91C7\u7528\u5C31\u8FD1\u539F\u5219
 stu.say() 
 // \u548C\u5C5E\u6027\u4E00\u6837, \u65B9\u6CD5\u540C\u540D\u65F6\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A\u7236\u7C7B\u540D\u79F0\u7684\u65B9\u5F0F, \u8BBF\u95EE\u7236\u7C7B\u65B9\u6CD5
 stu.Person.say()
}
\u6CE8\u610F\u70B9:
\u65E0\u8BBA\u662F\u5C5E\u6027\u7EE7\u627F\u8FD8\u662F\u65B9\u6CD5\u7EE7\u627F, \u90FD\u53EA\u80FD\u5B50\u7C7B\u8BBF\u95EE\u7236\u7C7B, \u4E0D\u80FD\u7236\u7C7B\u8BBF\u95EE\u5B50\u7C7B
\u591A\u6001\u6027
\u591A\u6001\u5C31\u662F\u67D0\u4E00\u7C7B\u4E8B\u7269\u7684\u591A\u79CD\u5F62\u6001
\u732B: \u732B--&gt;\u52A8\u7269
\u72D7: \u72D7--&gt;\u52A8\u7269
\u7537\u4EBA : \u7537\u4EBA --&gt;\u4EBA --&gt;\u9AD8\u7EA7\u52A8\u7269
\u5973\u4EBA : \u5973\u4EBA --&gt;\u4EBA --&gt;\u9AD8\u7EA7\u52A8\u7269
Go\u8BED\u8A00\u4E2D\u7684\u591A\u6001\u662F\u91C7\u7528\u63A5\u53E3\u6765\u5B9E\u73B0\u7684
package main

import &quot;fmt&quot;
// 1.\u5B9A\u4E49\u63A5\u53E3
type Animal interface { 
 Eat()
}
type Dog struct {
 name string
 age int
}
// 2.\u5B9E\u73B0\u63A5\u53E3\u65B9\u6CD5
func (d Dog)Eat()  {
 fmt.Println(d.name, &quot;\u6B63\u5728\u5403\u4E1C\u897F&quot;)
}

type Cat struct {
 name string
 age int
}
// 2.\u5B9E\u73B0\u63A5\u53E3\u65B9\u6CD5
func (c Cat)Eat()  {
 fmt.Println(c.name, &quot;\u6B63\u5728\u5403\u4E1C\u897F&quot;)
}
// 3.\u5BF9\u8C61\u7279\u6709\u65B9\u6CD5
func (c Cat)Special()  {
 fmt.Println(c.name, &quot;\u7279\u6709\u65B9\u6CD5&quot;)
}

func main()  {
 // 1.\u5229\u7528\u63A5\u53E3\u7C7B\u578B\u4FDD\u5B58\u5B9E\u73B0\u4E86\u6240\u6709\u63A5\u53E3\u65B9\u6CD5\u7684\u5BF9\u8C61
 var a Animal
 a = Dog{&quot;\u65FA\u8D22&quot;, 18}
 // 2.\u5229\u7528\u63A5\u53E3\u7C7B\u578B\u8C03\u7528\u5BF9\u8C61\u4E2D\u5B9E\u73B0\u7684\u65B9\u6CD5
 a.Eat()
 a = Cat{&quot;\u55B5\u55B5&quot;, 18}
 a.Eat()
 // 3.\u5229\u7528\u63A5\u53E3\u7C7B\u578B\u8C03\u7528\u5BF9\u8C61\u7279\u6709\u7684\u65B9\u6CD5
 //a.Special() // \u63A5\u53E3\u7C7B\u578B\u53EA\u80FD\u8C03\u7528\u63A5\u53E3\u4E2D\u58F0\u660E\u7684\u65B9\u6CD5, \u4E0D\u80FD\u8C03\u7528\u5BF9\u8C61\u7279\u6709\u65B9\u6CD5
 if cat, ok := a.(Cat); ok{
  cat.Special() // \u53EA\u6709\u5BF9\u8C61\u672C\u8EAB\u624D\u80FD\u8C03\u7528\u5BF9\u8C61\u7684\u7279\u6709\u65B9\u6CD5
 }
}
\u591A\u6001\u4F18\u70B9
\u591A\u6001\u7684\u4E3B\u8981\u597D\u5904\u5C31\u662F\u7B80\u5316\u4E86\u7F16\u7A0B\u63A5\u53E3\u3002\u5B83\u5141\u8BB8\u5728\u7C7B\u548C\u7C7B\u4E4B\u95F4\u91CD\u7528\u4E00\u4E9B\u4E60\u60EF\u6027\u7684\u547D\u540D,\u800C\u4E0D\u7528\u4E3A\u6BCF\u4E00\u4E2A\u65B0\u7684\u65B9\u6CD5\u547D\u540D\u4E00\u4E2A\u65B0\u540D\u5B57\u3002\u8FD9\u6837,\u7F16\u7A0B\u63A5\u53E3\u5C31\u662F\u4E00\u4E9B\u62BD\u8C61\u7684\u884C\u4E3A\u7684\u96C6\u5408,\u4ECE\u800C\u548C\u5B9E\u73B0\u63A5\u53E3\u7684\u7C7B\u7684\u533A\u5206\u5F00\u6765
\u591A\u6001\u4E5F\u4F7F\u5F97\u4EE3\u7801\u53EF\u4EE5\u5206\u6563\u5728\u4E0D\u540C\u7684\u5BF9\u8C61\u4E2D\u800C\u4E0D\u7528\u8BD5\u56FE\u5728\u4E00\u4E2A\u65B9\u6CD5\u4E2D\u8003\u8651\u5230\u6240\u6709\u53EF\u80FD\u7684\u5BF9\u8C61\u3002\u8FD9\u6837\u4F7F\u5F97\u60A8\u7684\u4EE3\u7801\u6269\u5C55\u6027\u548C\u590D\u7528\u6027\u66F4\u597D\u4E00\u4E9B\u3002\u5F53\u4E00\u4E2A\u65B0\u7684\u60C5\u666F\u51FA\u73B0\u65F6,\u60A8\u65E0\u987B\u5BF9\u73B0\u6709\u7684\u4EE3\u7801\u8FDB\u884C\u6539\u52A8,\u800C\u53EA\u9700\u8981\u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u7C7B\u548C\u65B0\u7684\u540C\u540D\u65B9\u6CD5
\u5F02\u5E38\u5904\u7406
\u7A0B\u5E8F\u8FD0\u884C\u65F6\uFF0C\u53D1\u751F\u7684\u4E0D\u88AB\u671F\u671B\u7684\u4E8B\u4EF6\uFF0C\u5B83\u963B\u6B62\u4E86\u7A0B\u5E8F\u6309\u7167\u7A0B\u5E8F\u5458\u7684\u9884\u671F\u6B63\u5E38\u6267\u884C\uFF0C\u8FD9\u5C31\u662F\u5F02\u5E38
golang\u4E2D\u63D0\u4F9B\u4E86\u4E24\u79CD\u5904\u7406\u5F02\u5E38\u7684\u65B9\u5F0F
\u4E00\u79CD\u662F\u7A0B\u5E8F\u53D1\u751F\u5F02\u5E38\u65F6, \u5C06\u5F02\u5E38\u4FE1\u606F\u53CD\u9988\u7ED9\u4F7F\u7528\u8005
\u4E00\u79CD\u662F\u7A0B\u5E8F\u53D1\u751F\u5F02\u5E38\u65F6, \u7ACB\u523B\u9000\u51FA\u7EC8\u6B62\u7A0B\u5E8F\u7EE7\u7EED\u8FD0\u884C
\u6253\u5370\u5F02\u5E38\u4FE1\u606F
Go\u8BED\u8A00\u4E2D\u63D0\u4F9B\u4E86\u4E24\u79CD\u521B\u5EFA\u5F02\u5E38\u4FE1\u606F\u7684\u65B9\u5F0F
\u65B9\u5F0F\u4E00: \u901A\u8FC7fmt\u5305\u4E2D\u7684Errorf\u51FD\u6570\u521B\u5EFA\u9519\u8BEF\u4FE1\u606F, \u7136\u540E\u6253\u5370
package main
import &quot;fmt&quot;
func main() {
 // 1.\u521B\u5EFA\u9519\u8BEF\u4FE1\u606F
 var err error = fmt.Errorf(&quot;\u8FD9\u91CC\u662F\u9519\u8BEF\u4FE1\u606F&quot;)
 // 2.\u6253\u5370\u9519\u8BEF\u4FE1\u606F
 fmt.Println(err) // \u8FD9\u91CC\u662F\u9519\u8BEF\u4FE1\u606F
}
\u65B9\u5F0F\u4E8C: \u901A\u8FC7errors\u5305\u4E2D\u7684New\u51FD\u6570\u521B\u5EFA\u9519\u8BEF\u4FE1\u606F,\u7136\u540E\u6253\u5370
package main
import &quot;fmt&quot;
func main() {
 // 1.\u521B\u5EFA\u9519\u8BEF\u4FE1\u606F
 var err error = errors.New(&quot;\u8FD9\u91CC\u662F\u9519\u8BEF\u4FE1\u606F&quot;)
 // 2.\u6253\u5370\u9519\u8BEF\u4FE1\u606F
 fmt.Println(err) // \u8FD9\u91CC\u662F\u9519\u8BEF\u4FE1\u606F
}
\u4E24\u79CD\u521B\u5EFA\u5F02\u5E38\u4FE1\u606F\u5B9E\u73B0\u539F\u7406\u89E3\u6790
Go\u8BED\u8A00\u4E2D\u521B\u5EFA\u5F02\u5E38\u4FE1\u606F\u5176\u5B9E\u90FD\u662F\u901A\u8FC7\u4E00\u4E2Aerror\u63A5\u53E3\u5B9E\u73B0\u7684
Go\u8BED\u8A00\u518Dbuiltin\u5305\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A\u540D\u79F0\u53EB\u505Aerror\u7684\u63A5\u53E3. \u6E90\u7801\u5982\u4E0B
package builtin
// \u5B9A\u4E49\u4E86\u4E00\u4E2A\u540D\u79F0\u53EB\u505Aerror\u7684\u63A5\u53E3
// \u63A5\u53E3\u4E2D\u58F0\u660E\u4E86\u4E00\u4E2A\u53EB\u505AError() \u7684\u65B9\u6CD5
type error interface {
 Error() string
}
\u5728errors\u5305\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A\u540D\u79F0\u53EB\u505A\u505AerrorString\u7684\u7ED3\u6784\u4F53, \u5229\u7528\u8FD9\u4E2A\u7ED3\u6784\u4F53\u5B9E\u73B0\u4E86error\u63A5\u53E3\u4E2D\u6307\u5B9A\u7684\u65B9\u6CD5
\u5E76\u4E14\u5728errors \u5305\u4E2D\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2ANew\u65B9\u6CD5, \u7528\u4E8E\u521B\u5EFA\u5B9E\u73B0\u4E86error\u63A5\u53E3\u7684\u7ED3\u6784\u4F53\u5BF9\u8C61, \u5E76\u4E14\u5728\u521B\u5EFA\u65F6\u5C31\u4F1A\u628A\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\u4F20\u9012\u7ED9\u8FD9\u4E2A\u7ED3\u6784\u4F53
// \u6307\u5B9A\u5305\u540D\u4E3Aerrors
package errors 
// \u5B9A\u4E49\u4E86\u4E00\u4E2A\u540D\u79F0\u53EB\u505AerrorString\u7684\u7ED3\u6784\u4F53, \u91CC\u9762\u6709\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u5C5E\u6027s
type errorString struct {
 s string
}
// \u5B9E\u73B0\u4E86error\u63A5\u53E3\u4E2D\u7684Error\u65B9\u6CD5
// \u5185\u90E8\u76F4\u63A5\u5C06\u7ED3\u6784\u4F53\u4E2D\u4FDD\u5B58\u7684\u5B57\u7B26\u4E32\u8FD4\u56DE
func (e *errorString) Error() string {
 return e.s
}
// \u5B9A\u4E49\u4E86\u4E00\u4E2ANew\u51FD\u6570, \u7528\u4E8E\u521B\u5EFA\u5F02\u5E38\u4FE1\u606F
// \u6CE8\u610F: New\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u63A5\u53E3\u7C7B\u578B
func New(text string) error {
        // \u8FD4\u56DE\u4E00\u4E2A\u521B\u5EFA\u597D\u7684errorString\u7ED3\u6784\u4F53\u5730\u5740
 return &amp;errorString{text}
}
fmt\u5305\u4E2DErrorf\u5E95\u5C42\u7684\u5B9E\u73B0\u539F\u7406\u5176\u5B9E\u5C31\u662F\u5728\u5185\u90E8\u81EA\u52A8\u8C03\u7528\u4E86errors\u5305\u4E2D\u7684New\u51FD\u6570
func Errorf(format string, a ...interface{}) error {
 return errors.New(Sprintf(format, a...))
}
\u5E94\u7528\u573A\u666F
package main
import &quot;fmt&quot;
func div(a, b int) (res int, err error) {
 if(b == 0){
  // \u4E00\u65E6\u4F20\u5165\u7684\u9664\u6570\u4E3A0, \u5C31\u4F1A\u8FD4\u56DEerror\u4FE1\u606F
  err = errors.New(&quot;\u9664\u6570\u4E0D\u80FD\u4E3A0&quot;)
 }else{
  res = a / b
 }
 return
}
func main() {
 //res, err := div(10, 5)
 res, err := div(10, 0)
 if(err != nil){
  fmt.Println(err) // \u9664\u6570\u4E0D\u80FD\u4E3A0
 }else{
  fmt.Println(res) // 2
 }
}
\u4E2D\u65AD\u7A0B\u5E8F
Go\u8BED\u8A00\u4E2D\u63D0\u4F9B\u4E86\u4E00\u4E2A\u53EB\u505Apanic\u51FD\u6570, \u7528\u4E8E\u53D1\u751F\u5F02\u5E38\u65F6\u7EC8\u6B62\u7A0B\u5E8F\u7EE7\u7EED\u8FD0\u884C
package main
import &quot;fmt&quot;
func div(a, b int) (res int) {
 if(b == 0){
  //\u4E00\u65E6\u4F20\u5165\u7684\u9664\u6570\u4E3A0, \u7A0B\u5E8F\u5C31\u4F1A\u7EC8\u6B62
  panic(&quot;\u9664\u6570\u4E0D\u80FD\u4E3A0&quot;)
 }else{
  res = a / b
 }
 return
}
func main() {
 res := div(10, 0)
 fmt.Println(res)
}
Go\u8BED\u8A00\u4E2D\u6709\u4E24\u79CD\u65B9\u5F0F\u53EF\u4EE5\u89E6\u53D1panic\u7EC8\u6B62\u7A0B\u5E8F
\u6211\u4EEC\u81EA\u5DF1\u624B\u52A8\u8C03\u7528panic\u51FD\u6570
\u7A0B\u5E8F\u5185\u90E8\u51FA\u73B0\u95EE\u9898\u81EA\u52A8\u89E6\u53D1panic\u51FD\u6570
package main
import &quot;fmt&quot;
func main() {
 // \u4F8B\u5982:\u6570\u7EC4\u89D2\u6807\u8D8A\u754C, \u5C31\u4F1A\u81EA\u52A8\u89E6\u53D1panic
 var arr = [3]int{1, 3, 5}
 arr[5] = 666 // \u62A5\u9519
 fmt.Println(arr)

 // \u4F8B\u5982:\u9664\u6570\u4E3A0, \u5C31\u4F1A\u81EA\u52A8\u89E6\u53D1panic
 var res = 10 / 0
 fmt.Println(res)
}
\u9664\u975E\u662F\u4E0D\u53EF\u6062\u590D\u6027\u3001\u5BFC\u81F4\u7CFB\u7EDF\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u7684\u9519\u8BEF, \u5426\u5219\u4E0D\u5EFA\u8BAE\u4F7F\u7528panic
\u6062\u590D\u7A0B\u5E8F
\u7A0B\u5E8F\u548C\u4EBA\u4E00\u6837\u90FD\u9700\u8981\u5177\u5907\u4E00\u5B9A\u7684\u5BB9\u9519\u80FD\u529B, \u5B66\u4F1A\u77E5\u9519\u5C31\u6539. \u6240\u4EE5\u5982\u679C\u4E0D\u662F\u4E0D\u53EF\u6062\u590D\u6027\u3001\u5BFC\u81F4\u7CFB\u7EDF\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u7684\u9519\u8BEF, \u5982\u679C\u53D1\u751F\u4E86panic\u6211\u4EEC\u9700\u8981\u6062\u590D\u7A0B\u5E8F, \u8BA9\u7A0B\u5E8F\u7EE7\u7EED\u6267\u884C,\u5E76\u4E14\u9700\u8981\u8BB0\u5F55\u5230\u5E95\u72AF\u4E86\u4EC0\u4E48\u9519\u8BEF
\u5728Go\u8BED\u8A00\u4E2D\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7defer\u548Crecover\u6765\u5B9E\u73B0panic\u5F02\u5E38\u7684\u6355\u83B7, \u8BA9\u7A0B\u5E8F\u7EE7\u7EED\u6267\u884C
package main
import &quot;fmt&quot;
func div(a, b int) (res int) {
 // \u5B9A\u4E49\u4E00\u4E2A\u5EF6\u8FDF\u8C03\u7528\u7684\u51FD\u6570, \u7528\u4E8E\u6355\u83B7panic\u5F02\u5E38
 // \u6CE8\u610F: \u4E00\u5B9A\u8981\u5728panic\u4E4B\u524D\u5B9A\u4E49
 defer func() {
  if err := recover(); err != nil{
   res = -1
   fmt.Println(err) // \u9664\u6570\u4E0D\u80FD\u4E3A0
  }
 }()
 if(b == 0){
  //err = errors.New(&quot;\u9664\u6570\u4E0D\u80FD\u4E3A0&quot;)
  panic(&quot;\u9664\u6570\u4E0D\u80FD\u4E3A0&quot;)
 }else{
  res = a / b
 }
 return
}

func setValue(arr []int, index int ,value int)  {
 arr[index] = value
}
func main() {
 res := div(10, 0)
 fmt.Println(res) // -1
}
panic\u6CE8\u610F\u70B9
panic\u5F02\u5E38\u4F1A\u6CBF\u7740\u8C03\u7528\u5806\u6808\u5411\u5916\u4F20\u9012, \u6240\u4EE5\u4E5F\u53EF\u4EE5\u5728\u5916\u5C42\u6355\u83B7
package main
import &quot;fmt&quot;
func div(a, b int) (res int) {
 if(b == 0){
  //err = errors.New(&quot;\u9664\u6570\u4E0D\u80FD\u4E3A0&quot;)
  panic(&quot;\u9664\u6570\u4E0D\u80FD\u4E3A0&quot;)
 }else{
  res = a / b
 }
 return
}
func main() {
 // panic\u5F02\u5E38\u4F1A\u6CBF\u7740\u8C03\u7528\u5806\u6808\u5411\u5916\u4F20\u9012, \u6240\u4EE5\u4E5F\u53EF\u4EE5\u5728\u5916\u5C42\u6355\u83B7
 defer func() {
  if err := recover(); err != nil{
   fmt.Println(err) // \u9664\u6570\u4E0D\u80FD\u4E3A0
  }
 }()
 div(10, 0)
}
\u591A\u4E2A\u5F02\u5E38,\u53EA\u6709\u7B2C\u4E00\u4E2A\u4F1A\u88AB\u6355\u83B7
package main
import &quot;fmt&quot;
func test1()  {
 // \u591A\u4E2A\u5F02\u5E38,\u53EA\u6709\u7B2C\u4E00\u4E2A\u4F1A\u88AB\u6355\u83B7
 defer func() {
  if err := recover(); err != nil{
   fmt.Println(err) // \u5F02\u5E38A
  }
 }()
 panic(&quot;\u5F02\u5E38A&quot;) // \u76F8\u5F53\u4E8Ereturn, \u540E\u9762\u4EE3\u7801\u4E0D\u4F1A\u7EE7\u7EED\u6267\u884C
 panic(&quot;\u5F02\u5E38B&quot;)
}
func main() {
 test1(10, 0)
}
\u5982\u679C\u6709\u5F02\u5E38\u5199\u5728defer\u4E2D, \u90A3\u4E48\u53EA\u6709defer\u4E2D\u7684\u5F02\u5E38\u4F1A\u88AB\u6355\u83B7
package main
import &quot;fmt&quot;
func test2()  {
 // \u5982\u679C\u6709\u5F02\u5E38\u5199\u5728defer\u4E2D, \u5E76\u4E14\u5176\u5B83\u5F02\u5E38\u5199\u5728defer\u540E\u9762, \u90A3\u4E48\u53EA\u6709defer\u4E2D\u7684\u5F02\u5E38\u4F1A\u88AB\u6355\u83B7
 defer func() {
  if err := recover(); err != nil{
   fmt.Println(err) // \u5F02\u5E38A
  }
 }()
 
 defer func() { 
  panic(&quot;\u5F02\u5E38B&quot;)
 }()
 panic(&quot;\u5F02\u5E38A&quot;)
}
func main() {
 test1(10, 0)
}
\u5B57\u7B26\u4E32\u76F8\u5173\u65B9\u6CD5
\u83B7\u53D6\u5B57\u7B26\u4E32\u957F\u5EA6
\u6CE8\u610F: Go\u8BED\u8A00\u7F16\u7801\u65B9\u5F0F\u662FUTF-8,\u5728UTF-8\u4E2D\u4E00\u4E2A\u6C49\u5B57\u53603\u4E2A\u5B57\u8282
package main
import &quot;fmt&quot;
func main() {
 str1 := &quot;lnj&quot;
 fmt.Println(len(str1)) // 3
 str2 := &quot;\u516C\u53F7\uFF1A\u4EE3\u7801\u60C5\u7F18&quot;
 fmt.Println(len(str2)) // 12
}
\u5982\u679C\u5B57\u7B26\u4E32\u4E2D\u5305\u542B\u4E2D\u6587, \u53C8\u60F3\u7CBE\u786E\u7684\u8BA1\u7B97\u5B57\u7B26\u4E32\u4E2D\u5B57\u7B26\u7684\u4E2A\u6570\u800C\u4E0D\u662F\u5360\u7528\u7684\u5B57\u8282, \u90A3\u4E48\u5FC5\u987B\u5148\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3Arune\u7C7B\u578B\u6570\u7EC4
Go\u8BED\u8A00\u4E2Dbyte\u7528\u4E8E\u4FDD\u5B58\u5B57\u7B26, rune\u7528\u4E8E\u4FDD\u5B58\u6C49\u5B57
package main
import &quot;fmt&quot;
func main() {
 str := &quot;\u516C\u53F7\uFF1A\u4EE3\u7801\u60C5\u7F18&quot;
 // \u6CE8\u610Fbyte\u53601\u4E2A\u5B57\u8282, \u53EA\u80FD\u4FDD\u5B58\u5B57\u7B26\u4E0D\u80FD\u4FDD\u5B58\u6C49\u5B57,\u56E0\u4E3A\u4E00\u4E2A\u6C49\u5B57\u5360\u75283\u4E2A\u5B57\u8282
 arr1 := []byte(str) // 12
 fmt.Println(len(arr1))
 for _, v := range arr1{
  fmt.Printf(&quot;%c&quot;, v) // lnj\xE6\x9D\x8E\xE5\x8D\x97\xE6\xB1\x9F
 }

 // Go\u8BED\u8A00\u4E2Drune\u7C7B\u578B\u5C31\u662F\u4E13\u95E8\u7528\u4E8E\u4FDD\u5B58\u6C49\u5B57\u7684
 arr2 := []rune(str)
 fmt.Println(len(arr2)) // 6
 for _, v := range arr2{
  fmt.Printf(&quot;%c&quot;, v) // lnj\u674E\u5357\u6C5F
 }
}
\u67E5\u627E\u5B50\u4E32\u5728\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u7684\u4F4D\u7F6E
func Index(s, sep string) int
func IndexByte(s string, c byte) int
func IndexRune(s string, r rune) int
func IndexAny(s, chars string) int
func IndexFunc(s string, f func(rune) bool) int
func LastIndex(s, sep string) int
func LastIndexByte(s string, c byte) int
func LastIndexAny(s, chars string) int
func LastIndexFunc(s string, f func(rune) bool) int
package main
import (
 &quot;strings&quot;
 &quot;fmt&quot;
)
func main() {
 // \u67E5\u627E\`</span>\u5B57\u7B26<span class="token string">\`\u5728\u5B57\u7B26\u4E32\u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E, \u627E\u4E0D\u5230\u8FD4\u56DE-1
 res := strings.IndexByte(&quot;hello \u674E\u5357\u6C5F&quot;, &#39;l&#39;)
 fmt.Println(res) // 2

 // \u67E5\u627E\`</span>\u6C49\u5B57<span class="token string">\`OR\`</span>\u5B57\u7B26<span class="token string">\`\u5728\u5B57\u7B26\u4E32\u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E, \u627E\u4E0D\u5230\u8FD4\u56DE-1
 res = strings.IndexRune(&quot;hello \u674E\u5357\u6C5F&quot;, &#39;\u674E&#39;)
 fmt.Println(res) // 6
 res = strings.IndexRune(&quot;hello \u674E\u5357\u6C5F&quot;, &#39;l&#39;)
 fmt.Println(res) // 2

 // \u67E5\u627E\`</span>\u6C49\u5B57<span class="token string">\`OR\`</span>\u5B57\u7B26<span class="token string">\`\u4E2D\u4EFB\u610F\u4E00\u4E2A\u5728\u5B57\u7B26\u4E32\u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E, \u627E\u4E0D\u5230\u8FD4\u56DE-1
 res = strings.IndexAny(&quot;hello \u674E\u5357\u6C5F&quot;, &quot;wml&quot;)
 fmt.Println(res) // 2
 // \u4F1A\u628Awmhl\u62C6\u5F00\u9010\u4E2A\u67E5\u627E, w\u3001m\u3001h\u3001l\u53EA\u8981\u4EFB\u610F\u4E00\u4E2A\u88AB\u627E\u5230, \u7ACB\u523B\u505C\u6B62\u67E5\u627E
 res = strings.IndexAny(&quot;hello \u674E\u5357\u6C5F&quot;, &quot;wmhl&quot;)
 fmt.Println(res) // 0
 // \u67E5\u627E\`</span>\u5B50\u4E32<span class="token string">\`\u5728\u5B57\u7B26\u4E32\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E, \u627E\u4E0D\u5230\u8FD4\u56DE-1
 res = strings.Index(&quot;hello \u674E\u5357\u6C5F&quot;, &quot;llo&quot;)
 fmt.Println(res) // 2
 // \u4F1A\u628Alle\u5F53\u505A\u4E00\u4E2A\u6574\u4F53\u53BB\u67E5\u627E, \u800C\u4E0D\u662F\u62C6\u5F00
 res = strings.Index(&quot;hello \u674E\u5357\u6C5F&quot;, &quot;lle&quot;)
 fmt.Println(res) // -1
 // \u53EF\u4EE5\u67E5\u627E\u5B57\u7B26\u4E5F\u53EF\u4EE5\u67E5\u627E\u6C49\u5B57
 res = strings.Index(&quot;hello \u674E\u5357\u6C5F&quot;, &quot;\u674E&quot;)
 fmt.Println(res) // 6

 // \u4F1A\u5C06\u5B57\u7B26\u4E32\u5148\u8F6C\u6362\u4E3A[]rune, \u7136\u540E\u904D\u5386rune\u5207\u7247\u9010\u4E2A\u53D6\u51FA\u4F20\u7ED9\u81EA\u5B9A\u4E49\u51FD\u6570
 // \u53EA\u8981\u51FD\u6570\u8FD4\u56DEtrue,\u4EE3\u8868\u7B26\u5408\u6211\u4EEC\u7684\u9700\u6C42, \u65E2\u7ACB\u5373\u505C\u6B62\u67E5\u627E
 res = strings.IndexFunc(&quot;hello \u674E\u5357\u6C5F&quot;, custom)
 fmt.Println(res) // 6

 // \u5012\u5E8F\u67E5\u627E\`</span>\u5B50\u4E32<span class="token string">\`\u5728\u5B57\u7B26\u4E32\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E, \u627E\u4E0D\u5230\u8FD4\u56DE-1
 res := strings.LastIndex(&quot;hello \u674E\u5357\u6C5F&quot;, &quot;l&quot;)
 fmt.Println(res) // 3
}
func custom(r rune) bool {
 fmt.Printf(&quot;\u88AB\u8C03\u7528\u4E86, \u5F53\u524D\u4F20\u5165\u7684\u662F%c\\n&quot;, r)
 if r == &#39;o&#39; {
  return true
 }
 return false
}
\u5224\u65AD\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5305\u542B\u5B50\u4E32
func Contains(s, substr string) bool
func ContainsRune(s string, r rune) bool
func ContainsAny(s, chars string) bool
func HasPrefix(s, prefix string) bool
func HasSuffix(s, suffix string) bool
package main
import (
 &quot;strings&quot;
 &quot;fmt&quot;
)
func main() {
 // \u67E5\u627E\`</span>\u5B50\u4E32<span class="token string">\`\u5728\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5B58\u5728, \u5B58\u5728\u8FD4\u56DEtrue, \u4E0D\u5B58\u5728\u8FD4\u56DEfalse
 // \u5E95\u5C42\u5B9E\u73B0\u5C31\u662F\u8C03\u7528strings.Index\u51FD\u6570
 res := strings.Contains( &quot;hello \u4EE3\u7801\u60C5\u7F18&quot;, &quot;llo&quot;)
 fmt.Println(res) // true

 // \u67E5\u627E\`</span>\u6C49\u5B57<span class="token string">\`OR\`</span>\u5B57\u7B26<span class="token string">\`\u5728\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5B58\u5728, \u5B58\u5728\u8FD4\u56DEtrue, \u4E0D\u5B58\u5728\u8FD4\u56DEfalse
 // \u5E95\u5C42\u5B9E\u73B0\u5C31\u662F\u8C03\u7528strings.IndexRune\u51FD\u6570
 res = strings.ContainsRune( &quot;hello \u4EE3\u7801\u60C5\u7F18&quot;, &#39;l&#39;)
 fmt.Println(res) // true
 res = strings.ContainsRune( &quot;hello \u4EE3\u7801\u60C5\u7F18&quot;, &#39;\u674E&#39;)
 fmt.Println(res) // true

 // \u67E5\u627E\`</span>\u6C49\u5B57<span class="token string">\`OR\`</span>\u5B57\u7B26<span class="token string">\`\u4E2D\u4EFB\u610F\u4E00\u4E2A\u5728\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5B58\u5728, \u5B58\u5728\u8FD4\u56DEtrue, \u4E0D\u5B58\u5728\u8FD4\u56DEfalse
 // \u5E95\u5C42\u5B9E\u73B0\u5C31\u662F\u8C03\u7528strings.IndexAny\u51FD\u6570
 res = strings.ContainsAny( &quot;hello \u4EE3\u7801\u60C5\u7F18&quot;, &quot;wmhl&quot;)
 fmt.Println(res) // true

 // \u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u5DF2\u67D0\u4E2A\u5B57\u7B26\u4E32\u5F00\u5934
 res = strings.HasPrefix(&quot;lnj-book.avi&quot;, &quot;lnj&quot;)
 fmt.Println(res) // true

 // \u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u5DF2\u67D0\u4E2A\u5B57\u7B26\u4E32\u7ED3\u5C3E
 res = strings.HasSuffix(&quot;lnj-book.avi&quot;, &quot;.avi&quot;)
 fmt.Println(res) // true
}
\u5B57\u7B26\u4E32\u6BD4\u8F83
func Compare(a, b string) int
func EqualFold(s, t string) bool
package main
import (
 &quot;strings&quot;
 &quot;fmt&quot;
)
func main() {
 // \u6BD4\u8F83\u4E24\u4E2A\u5B57\u7B26\u4E32\u5927\u5C0F, \u4F1A\u9010\u4E2A\u5B57\u7B26\u5730\u8FDB\u884C\u6BD4\u8F83ASCII\u503C
 // \u7B2C\u4E00\u4E2A\u53C2\u6570 &gt;  \u7B2C\u4E8C\u4E2A\u53C2\u6570 \u8FD4\u56DE 1
 // \u7B2C\u4E00\u4E2A\u53C2\u6570 &lt;  \u7B2C\u4E8C\u4E2A\u53C2\u6570 \u8FD4\u56DE -1
 // \u7B2C\u4E00\u4E2A\u53C2\u6570 == \u7B2C\u4E8C\u4E2A\u53C2\u6570 \u8FD4\u56DE 0
 res := strings.Compare(&quot;bcd&quot;, &quot;abc&quot;)
 fmt.Println(res) // 1
 res = strings.Compare(&quot;bcd&quot;, &quot;bdc&quot;)
 fmt.Println(res) // -1
 res = strings.Compare(&quot;bcd&quot;, &quot;bcd&quot;)
 fmt.Println(res) // 0

 // \u5224\u65AD\u4E24\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u76F8\u7B49, \u53EF\u4EE5\u5224\u65AD\u5B57\u7B26\u548C\u4E2D\u6587
 // \u5224\u65AD\u65F6\u4F1A\u5FFD\u7565\u5927\u5C0F\u5199\u8FDB\u884C\u5224\u65AD
 res2 := strings.EqualFold(&quot;abc&quot;, &quot;def&quot;)
 fmt.Println(res2) // false
 res2 = strings.EqualFold(&quot;abc&quot;, &quot;abc&quot;)
 fmt.Println(res2) // true
 res2 = strings.EqualFold(&quot;abc&quot;, &quot;ABC&quot;)
 fmt.Println(res2) // true
 res2 = strings.EqualFold(&quot;\u4EE3\u7801\u60C5\u7F18&quot;, &quot;\u4EE3\u7801\u60C5\u7F18&quot;)
 fmt.Println(res2) // true
}
\u5B57\u7B26\u4E32\u8F6C\u6362
func ToUpper(s string) string
func ToLower(s string) string
func ToTitle(s string) string
func ToUpperSpecial(_case unicode.SpecialCase, s string) string
func ToLowerSpecial(_case unicode.SpecialCase, s string) string
func ToTitleSpecial(_case unicode.SpecialCase, s string) string
func Title(s string) string
package main
import (
 &quot;strings&quot;
 &quot;fmt&quot;
)
func main() {
 // \u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5C0F\u5199
 res := strings.ToLower(&quot;ABC&quot;)
 fmt.Println(res) // abc
 
 // \u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5927\u5199
 res = strings.ToUpper(&quot;abc&quot;)
 fmt.Println(res) // ABC

 // \u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6807\u9898\u683C\u5F0F, \u5927\u90E8\u5206\`</span>\u5B57\u7B26<span class="token string">\`\u6807\u9898\u683C\u5F0F\u5C31\u662F\u5927\u5199
 res = strings.ToTitle(&quot;hello world&quot;)
 fmt.Println(res) // HELLO WORLD
 res = strings.ToTitle(&quot;HELLO WORLD&quot;)
 fmt.Println(res) // HELLO WORLD

 // \u5C06\u5355\u8BCD\u9996\u5B57\u6BCD\u53D8\u4E3A\u5927\u5199, \u5176\u5B83\u5B57\u7B26\u4E0D\u53D8
 // \u5355\u8BCD\u4E4B\u95F4\u7528\u7A7A\u683COR\u7279\u6B8A\u5B57\u7B26\u9694\u5F00
 res = strings.Title(&quot;hello world&quot;)
 fmt.Println(res) // Hello World
}
\u5B57\u7B26\u4E32\u62C6\u5408
func Split(s, sep string) []string
func SplitN(s, sep string, n int) []string
func SplitAfter(s, sep string) []string
func SplitAfterN(s, sep string, n int) []string
func Fields(s string) []string
func FieldsFunc(s string, f func(rune) bool) []string
func Join(a []string, sep string) string
func Repeat(s string, count int) string
func Replace(s, old, new string, n int) string
package main
import (
 &quot;strings&quot;
 &quot;fmt&quot;
)
func main() {
 // \u6309\u7167\u6307\u5B9A\u5B57\u7B26\u4E32\u5207\u5272\u539F\u5B57\u7B26\u4E32
 // \u7528,\u5207\u5272\u5B57\u7B26\u4E32
 arr1 := strings.Split(&quot;a,b,c&quot;, &quot;,&quot;)
 fmt.Println(arr1) // [a b c]
 arr2 := strings.Split(&quot;ambmc&quot;, &quot;m&quot;)
 fmt.Println(arr2) // [a b c]

 // \u6309\u7167\u6307\u5B9A\u5B57\u7B26\u4E32\u5207\u5272\u539F\u5B57\u7B26\u4E32, \u5E76\u4E14\u6307\u5B9A\u5207\u5272\u4E3A\u51E0\u4EFD
 // \u5982\u679C\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u4E3A0, \u90A3\u4E48\u4F1A\u8303\u56F4\u4E00\u4E2A\u7A7A\u6570\u7EC4
 arr3 := strings.SplitN(&quot;a,b,c&quot;, &quot;,&quot;, 2)
 fmt.Println(arr3) // [a b,c]
 arr4 := strings.SplitN(&quot;a,b,c&quot;, &quot;,&quot;, 0)
 fmt.Println(arr4) // []

 // \u6309\u7167\u6307\u5B9A\u5B57\u7B26\u4E32\u5207\u5272\u539F\u5B57\u7B26\u4E32, \u5207\u5272\u65F6\u5305\u542B\u6307\u5B9A\u5B57\u7B26\u4E32
 arr5 := strings.SplitAfter(&quot;a,b,c&quot;, &quot;,&quot;)
 fmt.Println(arr5) // [a, b, c]

 // \u6309\u7167\u6307\u5B9A\u5B57\u7B26\u4E32\u5207\u5272\u539F\u5B57\u7B26\u4E32, \u5207\u5272\u65F6\u5305\u542B\u6307\u5B9A\u5B57\u7B26\u4E32, \u5E76\u4E14\u6307\u5B9A\u5207\u5272\u4E3A\u51E0\u4EFD
 arr6 := strings.SplitAfterN(&quot;a,b,c&quot;, &quot;,&quot;, 2)
 fmt.Println(arr6) // [a, b,c]

 // \u6309\u7167\u7A7A\u683C\u5207\u5272\u5B57\u7B26\u4E32, \u591A\u4E2A\u7A7A\u683C\u4F1A\u5408\u5E76\u4E3A\u4E00\u4E2A\u7A7A\u683C\u5904\u7406
 arr7 := strings.Fields(&quot;a  b c    d&quot;)
 fmt.Println(arr7) // [a b c d]

 // \u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u5207\u7247\u4F20\u9012\u7ED9\u51FD\u6570\u4E4B\u540E\u7531\u51FD\u6570\u51B3\u5B9A\u5982\u4F55\u5207\u5272
 // \u7C7B\u4F3C\u4E8EIndexFunc
 arr8 := strings.FieldsFunc(&quot;a,b,c&quot;, custom)
 fmt.Println(arr8) // [a b c]

 // \u5C06\u5B57\u7B26\u4E32\u5207\u7247\u6309\u7167\u6307\u5B9A\u8FDE\u63A5\u7B26\u53F7\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32
 sce := []string{&quot;aa&quot;, &quot;bb&quot;, &quot;cc&quot;}
 str1 := strings.Join(sce, &quot;-&quot;)
 fmt.Println(str1) // aa-bb-cc


 // \u8FD4\u56DEcount\u4E2As\u4E32\u8054\u7684\u6307\u5B9A\u5B57\u7B26\u4E32
 str2 := strings.Repeat(&quot;abc&quot;, 2)
 fmt.Println(str2) // abcabc

 // \u7B2C\u4E00\u4E2A\u53C2\u6570: \u9700\u8981\u66FF\u6362\u7684\u5B57\u7B26\u4E32
 // \u7B2C\u4E8C\u4E2A\u53C2\u6570: \u65E7\u5B57\u7B26\u4E32
 // \u7B2C\u4E09\u4E2A\u53C2\u6570: \u65B0\u5B57\u7B26\u4E32
 // \u7B2C\u56DB\u4E2A\u53C2\u6570: \u7528\u65B0\u5B57\u7B26\u4E32 \u66FF\u6362 \u591A\u5C11\u4E2A\u65E7\u5B57\u7B26\u4E32
 // \u6CE8\u610F\u70B9: \u4F20\u5165-1\u4EE3\u8868\u53EA\u8981\u6709\u65E7\u5B57\u7B26\u4E32\u5C31\u66FF\u6362
 // \u6CE8\u610F\u70B9: \u66FF\u6362\u4E4B\u540E\u4F1A\u751F\u6210\u65B0\u5B57\u7B26\u4E32, \u539F\u5B57\u7B26\u4E32\u4E0D\u4F1A\u53D7\u5230\u5F71\u54CD
 str3 := &quot;abcdefabcdefabc&quot;
 str4 := strings.Replace(str3, &quot;abc&quot;, &quot;mmm&quot;, -1)
 fmt.Println(str3) // abcdefabcdefabc
 fmt.Println(str4) // mmmdefmmmdefmmm
}
func custom(r rune) bool {
 fmt.Printf(&quot;\u88AB\u8C03\u7528\u4E86, \u5F53\u524D\u4F20\u5165\u7684\u662F%c\\n&quot;, r)
 if r == &#39;,&#39; {
  return true
 }
 return false
}
\u5B57\u7B26\u4E32\u6E05\u7406
func Trim(s string, cutset string) string
func TrimLeft(s string, cutset string) string
func TrimRight(s string, cutset string) string
func TrimFunc(s string, f func(rune) bool) string
func TrimLeftFunc(s string, f func(rune) bool) string
func TrimRightFunc(s string, f func(rune) bool) string
func TrimSpace(s string) string
func TrimPrefix(s, prefix string) string
func TrimSuffix(s, suffix string) string
package main
import (
 &quot;strings&quot;
 &quot;fmt&quot;
)
func main() {
 // \u53BB\u9664\u5B57\u7B26\u4E32\u4E24\u7AEF\u6307\u5B9A\u5B57\u7B26
 str1 := strings.Trim(&quot;!!!abc!!!def!!!&quot;, &quot;!&quot;)
 fmt.Println(str1) // abc!!!def
 // \u53BB\u9664\u5B57\u7B26\u4E32\u5DE6\u7AEF\u6307\u5B9A\u5B57\u7B26
 str2 := strings.TrimLeft(&quot;!!!abc!!!def!!!&quot;, &quot;!&quot;)
 fmt.Println(str2) // abc!!!def!!!
 // \u53BB\u9664\u5B57\u7B26\u4E32\u53F3\u7AEF\u6307\u5B9A\u5B57\u7B26
 str3 := strings.TrimRight(&quot;!!!abc!!!def!!!&quot;, &quot;!&quot;)
 fmt.Println(str3) // !!!abc!!!def
 // // \u53BB\u9664\u5B57\u7B26\u4E32\u4E24\u7AEF\u7A7A\u683C
 str4 := strings.TrimSpace(&quot;   abc!!!def &quot;)
 fmt.Println(str4) // abc!!!def

 // \u6309\u7167\u65B9\u6CD5\u5B9A\u4E49\u89C4\u5219,\u53BB\u9664\u5B57\u7B26\u4E32\u4E24\u7AEF\u7B26\u5408\u89C4\u5219\u5185\u5BB9
 str5 := strings.TrimFunc(&quot;!!!abc!!!def!!!&quot;, custom)
 fmt.Println(str5) // abc!!!def
 // \u6309\u7167\u65B9\u6CD5\u5B9A\u4E49\u89C4\u5219,\u53BB\u9664\u5B57\u7B26\u4E32\u5DE6\u7AEF\u7B26\u5408\u89C4\u5219\u5185\u5BB9
 str6 := strings.TrimLeftFunc(&quot;!!!abc!!!def!!!&quot;, custom)
 fmt.Println(str6) // abc!!!def!!!
 //  \u6309\u7167\u65B9\u6CD5\u5B9A\u4E49\u89C4\u5219,\u53BB\u9664\u5B57\u7B26\u4E32\u53F3\u7AEF\u7B26\u5408\u89C4\u5219\u5185\u5BB9
 str7 := strings.TrimRightFunc(&quot;!!!abc!!!def!!!&quot;, custom)
 fmt.Println(str7) // !!!abc!!!def

 // \u53D6\u51FA\u5B57\u7B26\u4E32\u5F00\u5934\u7684\u6307\u5B9A\u5B57\u7B26\u4E32
 str8 := strings.TrimPrefix(&quot;lnj-book.avi&quot;, &quot;lnj-&quot;)
 fmt.Println(str8) // book.avi

 // \u53D6\u51FA\u5B57\u7B26\u4E32\u7ED3\u5C3E\u7684\u6307\u5B9A\u5B57\u7B26\u4E32
 str9 := strings.TrimSuffix(&quot;lnj-book.avi&quot;, &quot;.avi&quot;)
 fmt.Println(str9) // lnj-book
}
\u6B63\u5219\u8868\u8FBE\u5F0F
\u6B63\u5219\u8868\u8FBE\u5F0F\u662F\u5BF9\u5B57\u7B26\u4E32\u64CD\u4F5C\u7684\u4E00\u79CD\u903B\u8F91\u516C\u5F0F\uFF0C\u5C31\u662F\u7528\u4E8B\u5148\u5B9A\u4E49\u597D\u7684\u4E00\u4E9B\u7279\u5B9A\u5B57\u7B26\u3001\u53CA\u8FD9\u4E9B\u7279\u5B9A\u5B57\u7B26\u7684\u7EC4\u5408\uFF0C\u7EC4\u6210\u4E00\u4E2A\u201C\u89C4\u5219\u5B57\u7B26\u4E32\u201D\uFF0C\u8FD9\u4E2A\u201C\u89C4\u5219\u5B57\u7B26\u4E32\u201D\u7528\u6765\u8868\u8FBE\u5BF9\u5B57\u7B26\u4E32\u7684\u4E00\u79CD\u8FC7\u6EE4\u903B\u8F91\u3002
\u76F8\u5173\u89C4\u5219\u6807\u51C6\u8BE6\u89C1
\u767E\u5EA6\u767E\u79D1
Go\u8BED\u8A00\u5B98\u65B9\u6587\u6863regexp\u5305
Go\u8BED\u8A00\u4E2D\u6B63\u5219\u8868\u8FBE\u5F0F\u4F7F\u7528\u6B65\u9AA4
1.\u521B\u5EFA\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u89C4\u5219\u5BF9\u8C61
2.\u5229\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u89C4\u5219\u5BF9\u8C61\u5339\u914D\u6307\u5B9A\u5B57\u7B26\u4E32
package main
import (
 &quot;strings&quot;
 &quot;fmt&quot;
)
func main() {
 // \u521B\u5EFA\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u89C4\u5219\u5BF9\u8C61
 // reg := regexp.MustCompile(\u89C4\u5219\u5B57\u7B26\u4E32)
 // \u5229\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u89C4\u5219\u5BF9\u8C61\u5339\u914D\u6307\u5B9A\u5B57\u7B26\u4E32
 // \u4F1A\u5C06\u6240\u6709\u5339\u914D\u5230\u7684\u6570\u636E\u653E\u5230\u4E00\u4E2A\u5B57\u7B26\u4E32\u5207\u7247\u4E2D\u8FD4\u56DE
 // \u5982\u679C\u6CA1\u6709\u5339\u914D\u5230\u6570\u636E\u4F1A\u8FD4\u56DEnil
 // res := reg.FindAllString(\u9700\u8981\u5339\u914D\u7684\u5B57\u7B26\u4E32, \u5339\u914D\u591A\u5C11\u4E2A)

 str := &quot;Hello \u674E\u5357\u6C5F 1232&quot;
 reg := regexp.MustCompile(&quot;2&quot;)
 res := reg.FindAllString(str, -1)
 fmt.Println(res) // [2 2]
 res = reg.FindAllString(str, 1)
 fmt.Println(res) // [2]
}
\u5339\u914D\u7535\u8BDD\u53F7\u7801
package main
import (
 &quot;strings&quot;
 &quot;fmt&quot;
)
func main() {
 res2 := findPhoneNumber(&quot;13554499311&quot;)
 fmt.Println(res2) // true

 res2 = findPhoneNumber(&quot;03554499311&quot;)
 fmt.Println(res2) // false

 res2 = findPhoneNumber(&quot;1355449931&quot;)
 fmt.Println(res2) // false
}
func findPhoneNumber(str string) bool {
 // \u521B\u5EFA\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u89C4\u5219\u5BF9\u8C61
 reg := regexp.MustCompile(&quot;^1[1-9]{10}&quot;)
 // \u5229\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u89C4\u5219\u5BF9\u8C61\u5339\u914D\u6307\u5B9A\u5B57\u7B26\u4E32
 res := reg.FindAllString(str, -1)
 if(res == nil){
  return  false
 }
 return  true
}
\u5339\u914DEmail
package main
import (
 &quot;strings&quot;
 &quot;fmt&quot;
)
func main() {
 res2 = findEmail(&quot;123@qq.com&quot;)
 fmt.Println(res2) // true

 res2 = findEmail(&quot;ab?de@qq.com&quot;)
 fmt.Println(res2) // false

 res2 = findEmail(&quot;123@qqcom&quot;)
 fmt.Println(res2) // false
}
func findEmail(str string) bool {
 reg := regexp.MustCompile(&quot;^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\\\\.[a-zA-Z0-9]+&quot;)
 res := reg.FindAllString(str, -1)
 if(res == nil){
  return  false
 }
 return  true
}
\u65F6\u95F4\u548C\u65E5\u671F\u51FD\u6570
\u83B7\u53D6\u5F53\u524D\u65F6\u95F4
package main

import (
 &quot;fmt&quot;
 &quot;time&quot;
)
func main()  {
 var t time.Time = time.Now()
 // 2018-09-27 17:25:11.653198 +0800 CST m=+0.009759201
 fmt.Println(t)
}
\u83B7\u53D6\u5E74\u6708\u65E5\u65F6\u5206\u79D2
package main

import (
 &quot;fmt&quot;
 &quot;time&quot;
)
func main()  {
 var t time.Time = time.Now()
 fmt.Println(t.Year())
 fmt.Println(t.Month())
 fmt.Println(t.Day())
 fmt.Println(t.Hour())
 fmt.Println(t.Minute())
 fmt.Println(t.Second())
}
\u683C\u5F0F\u5316\u65F6\u95F4
package main

import (
 &quot;fmt&quot;
 &quot;time&quot;
)
func main()  {
 var t time.Time = time.Now()
 fmt.Printf(&quot;\u5F53\u524D\u7684\u65F6\u95F4\u662F: %d-%d-%d %d:%d:%d\\n&quot;, t.Year(), 
  t.Month(), t.Day(), t.Hour(), t.Minute(), t.Second())

 var dateStr = fmt.Sprintf(&quot;%d-%d-%d %d:%d:%d&quot;, t.Year(), 
  t.Month(), t.Day(), t.Hour(), t.Minute(), t.Second())
fmt.Println(&quot;\u5F53\u524D\u7684\u65F6\u95F4\u662F:&quot;, dateStr)
}
package main

import (
 &quot;fmt&quot;
 &quot;time&quot;
)
func main()  {
 var t time.Time = time.Now()
 // 2006/01/02 15:04:05\u8FD9\u4E2A\u5B57\u7B26\u4E32\u662FGo\u8BED\u8A00\u89C4\u5B9A\u7684, \u5404\u4E2A\u6570\u5B57\u90FD\u662F\u56FA\u5B9A\u7684
 // \u5B57\u7B26\u4E32\u4E2D\u7684\u5404\u4E2A\u6570\u5B57\u53EF\u4EE5\u53EA\u6709\u7EC4\u5408, \u8FD9\u6837\u5C31\u80FD\u6309\u7167\u9700\u6C42\u8FD4\u56DE\u683C\u5F0F\u5316\u597D\u7684\u65F6\u95F4
 str1 := t.Format(&quot;2006/01/02 15:04:05&quot;)
 fmt.Println(str1)
 str2 := t.Format(&quot;2006/01/02&quot;)
 fmt.Println(str2)
 str3 := t.Format(&quot;15:04:05&quot;)
 fmt.Println(str3)
}
\u65F6\u95F4\u5E38\u91CF
\u4E00\u822C\u7528\u4E8E\u6307\u5B9A\u65F6\u95F4\u5355\u4F4D, \u548C\u4F11\u7720\u51FD\u6570\u914D\u5408\u4F7F\u7528
\u4F8B\u5982: 100\u6BEB\u79D2, 100 *time.Millisecond
const (
 Nanosecond  Duration = 1    // \u7EB3\u79D2
 Microsecond          = 1000 * Nanosecond // \u5FAE\u79D2
 Millisecond          = 1000 * Microsecond // \u6BEB\u79D2
 Second               = 1000 * Millisecond // \u79D2
 Minute               = 60 * Second // \u5206\u949F
 Hour                 = 60 * Minute // \u5C0F\u65F6
)
package main

import (
 &quot;fmt&quot;
 &quot;time&quot;
)
func main()  {
 for{
  // 1\u79D2\u949F\u6253\u5370\u4E00\u6B21
  time.Sleep(time.Second * 1)
  // 0.1\u79D2\u6253\u5370\u4E00\u6B21
  //time.Sleep(time.Second * 0.1)
  time.Sleep(time.Millisecond * 100)
  fmt.Println(&quot;Hello LNJ&quot;)
 }
}
\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u6233
Unix\u79D2
UnixNano\u7EB3\u79D2
\u4E00\u822C\u7528\u4E8E\u914D\u5408\u968F\u673A\u51FD\u6570\u4F7F\u7528, \u4F5C\u4E3A\u968F\u673A\u51FD\u6570\u968F\u673A\u79CD\u5B50
package main

import (
 &quot;fmt&quot;
 &quot;time&quot;
)

func main()  {
 t := time.Now()
 // \u83B7\u53D61970\u5E741\u67081\u65E5\u8DDD\u79BB\u5F53\u524D\u7684\u65F6\u95F4(\u79D2)
 fmt.Println(t.Unix())
 // \u83B7\u53D61970\u5E741\u67081\u65E5\u8DDD\u79BB\u5F53\u524D\u7684\u65F6\u95F4(\u7EB3\u79D2)
 fmt.Println(t.UnixNano())
}
package main

import (
 &quot;fmt&quot;
 &quot;math/rand&quot;
 &quot;time&quot;
)
func main()  {
 // \u521B\u5EFA\u968F\u673A\u6570\u79CD\u5B50
 rand.Seed(time.Now().UnixNano())
 // \u751F\u6210\u4E00\u4E2A\u968F\u673A\u6570
 fmt.Println(rand.Intn(10))
}
Go\u8BED\u8A00\u4E2D\u8C03\u7528C\u8BED\u8A00\u51FD\u6570
\u5728Go\u8BED\u8A00\u5F00\u7BC7\u4E2D\u6211\u4EEC\u5DF2\u7ECF\u77E5\u9053, Go\u8BED\u8A00\u4E0EC\u8BED\u8A00\u4E4B\u95F4\u6709\u7740\u5343\u4E1D\u4E07\u7F15\u7684\u5173\u7CFB, \u751A\u81F3\u88AB\u79F0\u4E4B\u4E3A21\u4E16\u7EAA\u7684C\u8BED\u8A00
\u6240\u4EE5\u5728Go\u4E0EC\u8BED\u8A00\u4E92\u64CD\u4F5C\u65B9\u9762\uFF0CGo\u66F4\u662F\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u652F\u6301\u3002\u5C24\u5176\u662F\u5728Go\u4E2D\u4F7F\u7528C\uFF0C\u4F60\u751A\u81F3\u53EF\u4EE5\u76F4\u63A5\u5728Go\u6E90\u6587\u4EF6\u4E2D\u7F16\u5199C\u4EE3\u7801\uFF0C\u8FD9\u662F\u5176\u4ED6\u8BED\u8A00\u6240\u65E0\u6CD5\u671B\u5176\u9879\u80CC\u7684
\u683C\u5F0F:
\u5728import &quot;C&quot;\u4E4B\u524D\u901A\u8FC7\u5355\u884C\u6CE8\u91CA\u6216\u8005\u901A\u8FC7\u591A\u884C\u6CE8\u91CA\u7F16\u5199C\u8BED\u8A00\u4EE3\u7801
\u5728import &quot;C&quot;\u4E4B\u540E\u7F16\u5199Go\u8BED\u8A00\u4EE3\u7801
\u5728Go\u8BED\u8A00\u4EE3\u7801\u4E2D\u901A\u8FC7C.\u51FD\u6570\u540D\u79F0() \u8C03\u7528C\u8BED\u8A00\u4EE3\u7801\u5373\u53EF
\u6CE8\u610F: import &quot;C&quot;\u548C\u524D\u9762\u7684\u6CE8\u91CA\u4E4B\u95F4\u4E0D\u80FD\u51FA\u73B0\u7A7A\u884C\u6216\u5176\u5B83\u5185\u5BB9, \u5FC5\u987B\u7D27\u7D27\u76F8\u8FDE
package main
//#include &lt;stdio.h&gt;
//void say(){
// printf(&quot;Hello World\\n&quot;);
//}
import &quot;C&quot;

func main()  {
 C.say()
}
package main
/*
#include &lt;stdio.h&gt;
void say(){
 printf(&quot;Hello World\\n&quot;);
}
*/
import &quot;C&quot;

func main()  {
 C.say()
}
Go\u8BED\u8A00\u4E2D\u6CA1\u6709\u5305\u540D\u662FC\u7684\u5305, \u4F46\u662F\u8FD9\u4E2A\u5BFC\u5165\u4F1A\u4FC3\u4F7FGo\u7F16\u8BD1\u5668\u5229\u7528cgo\u5DE5\u5177\u9884\u5904\u7406\u6587\u4EF6
\u5728\u9884\u5904\u7406\u8FC7\u7A0B\u4E2D,cgo\u4F1A\u4EA7\u751F\u4E00\u4E2A\u4E34\u65F6\u5305, \u8FD9\u4E2A\u5305\u91CC\u5305\u542B\u4E86\u6240\u6709C\u51FD\u6570\u548C\u7C7B\u578B\u5BF9\u5E94\u7684Go\u8BED\u8A00\u58F0\u660E
\u6700\u7EC8\u4F7F\u5F97cgo\u5DE5\u5177\u53EF\u4EE5\u901A\u8FC7\u4E00\u79CD\u7279\u6B8A\u7684\u65B9\u5F0F\u6765\u8C03\u7528import &quot;C&quot;\u4E4B\u524D\u7684C\u8BED\u8A00\u4EE3\u7801
\u5E38\u89C4\u95EE\u9898:
\u5982\u679C\u7F16\u8BD1\u62A5\u9519cc1.exe: sorry, unimplemented: 64-bit mode not compiled in
\u8BF4\u660E\u4F60\u4F7F\u7528\u7684\u662F64\u7684golang\uFF0C\u800C\u4F60\u4F7F\u7528\u768432\u4F4D\u7684MinGW\uFF0C\u6240\u4EE5\u9700\u8981\u4E0B\u8F7D64\u4F4D\u7684mingw\u5E76\u914D\u7F6E\u73AF\u5883\u53D8\u91CF
\u4E0B\u8F7D\u5730\u5740: https://www.baidu.com/s?wd=sorry%2C%20unimplemented%3A%2064-bit%20mode%20not%20compiled%20in
C\u8BED\u8A00\u4E2D\u8C03\u7528Go\u8BED\u8A00\u51FD\u6570(\u5F88\u5C11\u4F7F\u7528)
\u5728Go\u4EE3\u7801\u4E2D\u901A\u8FC7 //export Go\u51FD\u6570\u540D\u79F0\u5BFC\u51FAGo\u7684\u51FD\u6570\u540D\u79F0
\u5728C\u4EE3\u7801\u4E2D\u901A\u8FC7 extern \u8FD4\u56DE\u503C\u7C7B\u578B Go\u51FD\u6570\u540D\u79F0(\u5F62\u53C2\u5217\u8868); \u58F0\u660EGo\u4E2D\u5BFC\u51FA\u7684\u51FD\u6570\u540D\u79F0
\u6CE8\u610F: //export Go\u51FD\u6570\u540D\u79F0\u548Cextern \u8FD4\u56DE\u503C\u7C7B\u578B Go\u51FD\u6570\u540D\u79F0(\u5F62\u53C2\u5217\u8868);\u4E0D\u80FD\u5728\u540C\u4E00\u4E2A\u6587\u4EF6\u4E2D
package main

import &quot;C&quot;
import &quot;fmt&quot;
// \u5BFC\u51FAGo\u51FD\u6570\u58F0\u660E, \u7ED9C\u4F7F\u7528
//export GoFunction
func GoFunction() {
 fmt.Println(&quot;GoFunction!!!&quot;)
}
package main
/*
#include &lt;stdio.h&gt;
// \u58F0\u660EGo\u4E2D\u7684\u51FD\u6570
extern void GoFunction();

void CFunction() {
        printf(&quot;CFunction!\\n&quot;);
        GoFunction();
}
*/
import &quot;C&quot;

func main()  {
 C.CFunction()
}
\u7531\u4E8E\u4E0D\u5728\u540C\u4E00\u4E2A\u6587\u4EF6, \u6240\u4EE5\u9700\u8981\u901A\u8FC7go build\u6216\u8005go install\u540C\u65F6\u7F16\u8BD1\u591A\u4E2A\u6587\u4EF6
Go\u4E2D\u4F7F\u7528C\u8BED\u8A00\u7684\u7C7B\u578B
\u57FA\u672C\u6570\u636E\u7C7B\u578B
\u5728Go\u4E2D\u53EF\u4EE5\u7528\u5982\u4E0B\u65B9\u5F0F\u8BBF\u95EEC\u539F\u751F\u7684\u6570\u503C\u7C7B\u578B\uFF1A
C.char,
C.schar (signed char),
C.uchar (unsigned char),
C.short,
C.ushort (unsigned short),
C.int, C.uint (unsigned int),
C.long,
C.ulong (unsigned long),
C.longlong (long long),
C.ulonglong (unsigned long long),
C.float,
C.double
Go\u7684\u6570\u503C\u7C7B\u578B\u4E0EC\u4E2D\u7684\u6570\u503C\u7C7B\u578B\u4E0D\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\u3002\u56E0\u6B64\u5728\u4F7F\u7528\u5BF9\u65B9\u7C7B\u578B\u53D8\u91CF\u65F6\u5FC5\u987B\u663E\u5F0F\u8F6C\u578B\u64CD\u4F5C
package main
/*
#include &lt;stdio.h&gt;
int num = 123;
float value = 3.14;
char ch = &#39;N&#39;;
*/
import &quot;C&quot;
import &quot;fmt&quot;

func main()  {
 var num1 C.int = C.num
 fmt.Println(num1)
 var num2 int
 //num2 = num1 // \u62A5\u9519
 num2 = int(num1)
 fmt.Println(num2)


 var value1 C.float = C.value
 fmt.Println(value1)
 var value2 float32 = float32(C.value)
 fmt.Println(value2)


 var ch1 C.char = C.ch
 fmt.Println(ch1)
 var ch2 byte = byte(C.ch)
 fmt.Println(ch2)
}
\u5B57\u7B26\u4E32\u7C7B\u578B
C\u8BED\u8A00\u4E2D\u5E76\u4E0D\u6CA1\u6709\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u5728C\u4E2D\u7528\u5E26\u7ED3\u5C3E&#39;\\0&#39;\u7684\u5B57\u7B26\u6570\u7EC4\u6765\u8868\u793A\u5B57\u7B26\u4E32\uFF1B\u800C\u5728Go\u4E2Dstring\u7C7B\u578B\u662F\u539F\u751F\u7C7B\u578B\uFF0C\u56E0\u6B64\u5728\u4E24\u79CD\u8BED\u8A00\u4E92\u64CD\u4F5C\u662F\u5FC5\u987B\u8981\u505A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u8F6C\u6362
C\u5B57\u7B26\u4E32\u8F6C\u6362Go\u5B57\u7B26\u4E32: C.GoString(str)
Go\u5B57\u7B26\u4E32\u8F6C\u6362C\u5B57\u7B26\u4E32: C.CString(str)
package main
/*
#include &lt;stdio.h&gt;
char *str = &quot;www.it666.com&quot;;
void say(char *name){
 printf(&quot;my name is %s&quot;, name);
}
*/
import &quot;C&quot;
import (
 &quot;fmt&quot;
 &quot;unsafe&quot;
)

func main()  {
 // 1.C\u8BED\u8A00\u5B57\u7B26\u4E32\u8F6C\u6362Go\u8BED\u8A00\u5B57\u7B26\u4E32
 str1 := C.str
 str2 := C.GoString(str1)
 fmt.Println(str2)

 // 2.Go\u8BED\u8A00\u5B57\u7B26\u4E32\u8F6C\u6362C\u8BED\u8A00\u5B57\u7B26\u4E32
 str := &quot;lnj&quot;
 cs := C.CString(str)
 C.say(cs)
 // \u6CE8\u610F: \u8F6C\u6362\u540E\u6240\u5F97\u5230\u7684C\u5B57\u7B26\u4E32cs\u5E76\u4E0D\u80FD\u7531Go\u7684gc\u6240\u7BA1\u7406\uFF0C\u6211\u4EEC\u5FC5\u987B\u624B\u52A8\u91CA\u653Ecs\u6240\u5360\u7528\u7684\u5185\u5B58
 C.free(unsafe.Pointer(cs))
}
\u6307\u9488\u7C7B\u578B
unsafe.Pointer\uFF1A\u901A\u7528\u6307\u9488\u7C7B\u578B\uFF0C\u7528\u4E8E\u8F6C\u6362\u4E0D\u540C\u7C7B\u578B\u7684\u6307\u9488\uFF0C\u4E0D\u80FD\u8FDB\u884C\u6307\u9488\u8FD0\u7B97
\u539F\u751F\u6570\u503C\u7C7B\u578B\u7684\u6307\u9488\u7C7B\u578B\u53EF\u6309Go\u8BED\u6CD5\u5728\u7C7B\u578B\u524D\u9762\u52A0\u4E0A*\uFF0C\u4F8B\u5982:var p *C.int\u3002
\u800Cvoid*\u6BD4\u8F83\u7279\u6B8A\uFF0C\u7528Go\u4E2D\u7684unsafe.Pointer\u8868\u793A\u3002
uintptr\uFF1A\u7528\u4E8E\u6307\u9488\u8FD0\u7B97\uFF0CGC \u4E0D\u628A uintptr \u5F53\u6307\u9488\uFF0Cuintptr \u65E0\u6CD5\u6301\u6709\u5BF9\u8C61\u3002uintptr \u7C7B\u578B\u7684\u76EE\u6807\u4F1A\u88AB\u56DE\u6536
\u4E5F\u5C31\u662F\u8BF4 unsafe.Pointer \u662F\u6865\u6881\uFF0C\u53EF\u4EE5\u8BA9\u4EFB\u610F\u7C7B\u578B\u7684\u6307\u9488\u5B9E\u73B0\u76F8\u4E92\u8F6C\u6362\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u4EFB\u610F\u7C7B\u578B\u7684\u6307\u9488\u8F6C\u6362\u4E3Auintptr \u8FDB\u884C\u6307\u9488\u8FD0\u7B97
package main
/*
#include &lt;stdio.h&gt;
int num = 123;
void *ptr = &amp;num;
*/
import &quot;C&quot;
import (
 &quot;fmt&quot;
 &quot;unsafe&quot;
)

func main()  {
 // \u8FD9\u662F\u4E00\u4E2AC\u8BED\u8A00\u53D8\u91CF
 var num C.int = C.num
 // \u8FD9\u662F\u4E00\u4E2AC\u8BED\u8A00\u6307\u9488
 var p1 *C.int = &amp;num
 fmt.Println(*p1)

 //var p2 *C.void = C.ptr // \u62A5\u9519
 // \u5229\u7528unsafe.Pointer\u63A5\u6536viod *
 var p2 unsafe.Pointer = C.ptr
 // \u5C06unsafe.Pointer\u8F6C\u6362\u4E3A\u5177\u4F53\u7C7B\u578B
 var p3 *C.int = (*C.int)(p2)
 fmt.Println(*p3)
}
\u679A\u4E3E\u7C7B\u578B
C\u8BED\u8A00\u4E2D\u7684\u679A\u4E3E\u7C7B\u578B\u5728Go\u8BED\u8A00\u4E2D\u7684\u8868\u73B0\u5F62\u5F0F\u4E3AC.enum_XXX
\u8BBF\u95EE\u679A\u4E3E\u548C\u8BBF\u95EE\u666E\u901A\u53D8\u91CF\u65E0\u5F02, \u76F4\u63A5\u901A\u8FC7C.\u679A\u4E3E\u503C\u5373\u53EF
package main
/*
#include &lt;stdio.h&gt;
enum Gender {
   GenderMale,
   GenderFemale,
   GenderYao
};
*/
import &quot;C&quot;
import &quot;fmt&quot;

func main()  {
 var sex C.enum_Gender = C.GenderMale
 fmt.Println(sex)
 sex = C.GenderFemale
 fmt.Println(sex)
 sex = C.GenderYao
 fmt.Println(sex)
}
\u7ED3\u6784\u4F53\u7C7B\u578B
C\u8BED\u8A00\u4E2D\u7684\u7ED3\u6784\u4F53\u7C7B\u578B\u5728Go\u8BED\u8A00\u4E2D\u7684\u8868\u73B0\u5F62\u5F0F\u4E3AC.struct_XXX
\u8BBF\u95EE\u7ED3\u6784\u4F53 \u76F4\u63A5\u901A\u8FC7\u7ED3\u6784\u4F53\u53D8\u91CF.\u5C5E\u6027\u540D\u79F0\u5373\u53EF
package main
/*
#include &lt;stdio.h&gt;
struct Point {
    float x;
    float y;
};
*/
import &quot;C&quot;
import (
 &quot;fmt&quot;
)

func main()  {
 // 1.\u5229\u7528C\u7684\u7ED3\u6784\u4F53\u7C7B\u578B\u521B\u5EFA\u7ED3\u6784\u4F53
 var cp C.struct_Point = C.struct_Point{6.6, 8.8}
 fmt.Println(cp)
 fmt.Printf(&quot;%T\\n&quot;, cp)

 // 2.\u5C06C\u8BED\u8A00\u7ED3\u6784\u4F53\u8F6C\u6362\u4E3AGo\u8BED\u8A00\u7ED3\u6784\u4F53
 type GoPoint struct {
  x float32
  y float32
 }
 var gp GoPoint
 gp.x = float32(cp.x)
 gp.y = float32(cp.y)
 fmt.Println(gp)
}
\u6570\u7EC4\u7C7B\u578B
C\u8BED\u8A00\u4E2D\u7684\u6570\u7EC4\u4E0EGo\u8BED\u8A00\u4E2D\u7684\u6570\u7EC4\u5DEE\u5F02\u8F83\u5927\uFF0C C\u4E2D\u7684\u6570\u7EC4\u662F\u6307\u9488\u7C7B\u578B,  Go\u4E2D\u7684\u6570\u7EC4\u662F\u503C\u7C7B\u578B
\u76EE\u524D\u4F3C\u4E4E\u65E0\u6CD5\u76F4\u63A5\u663E\u5F0F\u7684\u5728\u4E24\u8005\u4E4B\u95F4\u8FDB\u884C\u8F6C\u578B\uFF0C\u5B98\u65B9\u6587\u6863\u4E5F\u6CA1\u6709\u8BF4\u660E\u3002
package main
/*
#include &lt;stdio.h&gt;
int cArray[5] = {1, 2, 3, 4, 5};
*/
import &quot;C&quot;
import &quot;fmt&quot;

func main()  {
 var cArr [5]C.int = C.cArray
 fmt.Println(cArr)
 fmt.Printf(&quot;%T\\n&quot;, cArr)
}
\u5229\u7528Go\u8BED\u8A00\u8C03\u7528C\u8BED\u8A00\u51FD\u6570, \u5B9E\u73B0\u65E0\u7F13\u51B2\u533A\u8F93\u5165
\u8BF7\u5728\u7EC8\u7AEF\u8FD0\u884C
package main
/*
#include &lt;stdio.h&gt;
char lowerCase(char ch){
    // 1.\u5224\u65AD\u5F53\u524D\u662F\u5426\u662F\u5C0F\u5199\u5B57\u6BCD
    if(ch &gt;= &#39;a&#39; &amp;&amp; ch &lt;= &#39;z&#39;){
        return ch;
    }
    // \u6CE8\u610F\u70B9: \u4E0D\u80FD\u76F4\u63A5\u7F16\u5199else, \u56E0\u4E3A\u6267\u884C\u5230else\u4E0D\u4E00\u5B9A\u662F\u4E00\u4E2A\u5927\u5199\u5B57\u6BCD
    else if(ch &gt;= &#39;A&#39; &amp;&amp; ch &lt;= &#39;Z&#39;){
        return ch + (&#39;a&#39; - &#39;A&#39;);
    }
    return &#39; &#39;;
}
char getCh(){
    // 1.\u63A5\u6536\u7528\u6237\u8F93\u5165\u7684\u6570\u636E
    char ch;
    scanf(&quot;%c&quot;, &amp;ch);
    setbuf(stdin, NULL);
    // 2.\u5927\u5C0F\u5199\u8F6C\u6362
    ch = lowerCase(ch);
    // 3.\u8FD4\u56DE\u8F6C\u6362\u597D\u7684\u5B57\u7B26
    return ch;
}
 */
import &quot;C&quot;
import &quot;fmt&quot;

func main()  {
 for{
  fmt.Println(&quot;\u8BF7\u8F93\u5165w a s d\u5176\u4E2D\u4E00\u4E2A\u5B57\u7B26, \u63A7\u5236\u5C0F\u4EBA\u8D70\u51FA\u8FF7\u5BAB&quot;)
  var ch byte = byte(C.getCh())
  fmt.Printf(&quot;%c&quot;, ch)
 }
}
\u6587\u4EF6\u7684\u6253\u5F00\u548C\u5173\u95ED
\u548CC\u8BED\u8A00\u4E00\u6837, Go\u8BED\u8A00\u4E2D\u64CD\u4F5C\u6587\u4EF6\u4E5F\u662F\u901A\u8FC7\u4E00\u4E2AFILE\u7ED3\u6784\u4F53
type file struct {
 pfd     poll.FD
 name    string
 dirinfo *dirInfo 
}
type File struct {
 *file // os specific
}
Open\u51FD\u6570
func Open(name string) (file *File, err error)
Open\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u7528\u4E8E\u8BFB\u53D6
Close\u51FD\u6570
func (f *File) Close() error
Close\u5173\u95ED\u6587\u4EF6f
package main
import (
 &quot;fmt&quot;
 &quot;os&quot;
)

func main() {
 // 1.\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6
 // \u6CE8\u610F: \u6587\u4EF6\u4E0D\u5B58\u5728\u4E0D\u4F1A\u521B\u5EFA, \u4F1A\u62A5\u9519
 // \u6CE8\u610F: \u901A\u8FC7Open\u6253\u5F00\u53EA\u80FD\u8BFB\u53D6, \u4E0D\u80FD\u5199\u5165
 fp, err := os.Open(&quot;d:/lnj.txt&quot;)
 if err != nil{
  fmt.Println(err)
 }else{
  fmt.Println(fp)
 }

 // 2.\u5173\u95ED\u4E00\u4E2A\u6587\u4EF6
 defer func() {
  err = fp.Close()
  if err != nil {
   fmt.Println(err)
  }
 }()
}
\u6587\u4EF6\u8BFB\u53D6
Read\u51FD\u6570(\u4E0D\u5E26\u7F13\u51B2\u533A\u53BB\u8BFB)
func (f *File) Read(b []byte) (n int, err error)
Read\u65B9\u6CD5\u4ECEf\u4E2D\u8BFB\u53D6\u6700\u591Alen(b)\u5B57\u8282\u6570\u636E\u5E76\u5199\u5165b,
package main

import (
 &quot;fmt&quot;
 &quot;io&quot;
 &quot;os&quot;
)

func main() {
 // 1.\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6
 // \u6CE8\u610F: \u6587\u4EF6\u4E0D\u5B58\u5728\u4E0D\u4F1A\u521B\u5EFA, \u4F1A\u62A5\u9519
 // \u6CE8\u610F: \u901A\u8FC7Open\u6253\u5F00\u53EA\u80FD\u8BFB\u53D6, \u4E0D\u80FD\u5199\u5165
 fp, err := os.Open(&quot;d:/lnj.txt&quot;)
 if err != nil{
  fmt.Println(err)
 }else{
  fmt.Println(fp)
 }

 // 2.\u5173\u95ED\u4E00\u4E2A\u6587\u4EF6
 defer func() {
  err = fp.Close()
  if err != nil {
   fmt.Println(err)
  }
 }()

 // 3.\u8BFB\u53D6\u6307\u5B9A\u6307\u5B9A\u5B57\u8282\u4E2A\u6570\u636E
 // \u6CE8\u610F\u70B9: \\n\u4E5F\u4F1A\u88AB\u8BFB\u53D6\u8FDB\u6765
 //buf := make([]byte, 50)
 //count, err := fp.Read(buf)
 //if err != nil {
 // fmt.Println(err)
 //}else{
 // fmt.Println(count)
 // fmt.Println(string(buf))
 //}

 // 4.\u8BFB\u53D6\u6587\u4EF6\u4E2D\u6240\u6709\u5185\u5BB9, \u76F4\u5230\u6587\u4EF6\u672B\u5C3E\u4E3A\u6B62
 buf := make([]byte, 10)
 for{
  count, err := fp.Read(buf)
  // \u6CE8\u610F: \u8FD9\u884C\u4EE3\u7801\u8981\u653E\u5230\u5224\u65ADEOF\u4E4B\u524D, \u5426\u5219\u4F1A\u51FA\u73B0\u5C11\u8BFB\u4E00\u884C\u60C5\u51B5
  fmt.Print(string(buf[:count]))
  if err == io.EOF {
   break
  }
 }
}
ReadBytes\u548CReadString\u51FD\u6570(\u5E26\u7F13\u51B2\u533A\u53BB\u8BFB)
func (b *Reader) ReadBytes(delim byte) (line []byte, err error)
ReadBytes\u8BFB\u53D6\u76F4\u5230\u7B2C\u4E00\u6B21\u9047\u5230delim\u5B57\u8282
func (b *Reader) ReadString(delim byte) (line string, err error)
ReadString\u8BFB\u53D6\u76F4\u5230\u7B2C\u4E00\u6B21\u9047\u5230delim\u5B57\u8282
package main

import (
 &quot;bufio&quot;
 &quot;fmt&quot;
 &quot;io&quot;
 &quot;os&quot;
)

func main() {
 // 1.\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6
 // \u6CE8\u610F: \u6587\u4EF6\u4E0D\u5B58\u5728\u4E0D\u4F1A\u521B\u5EFA, \u4F1A\u62A5\u9519
 // \u6CE8\u610F: \u901A\u8FC7Open\u6253\u5F00\u53EA\u80FD\u8BFB\u53D6, \u4E0D\u80FD\u5199\u5165
 fp, err := os.Open(&quot;d:/lnj.txt&quot;)
 if err != nil{
  fmt.Println(err)
 }else{
  fmt.Println(fp)
 }

 // 2.\u5173\u95ED\u4E00\u4E2A\u6587\u4EF6
 defer func() {
  err = fp.Close()
  if err != nil {
   fmt.Println(err)
  }
 }()

 // 3.\u8BFB\u53D6\u4E00\u884C\u6570\u636E
 // \u521B\u5EFA\u8BFB\u53D6\u7F13\u51B2\u533A, \u9ED8\u8BA4\u5927\u5C0F4096
 //r :=bufio.NewReader(fp)
 //buf, err := r.ReadBytes(&#39;\\n&#39;)
 //buf, err := r.ReadString(&#39;\\n&#39;)
 //if err != nil{
 // fmt.Println(err)
 //}else{
 // fmt.Println(string(buf))
 //}

 // 4.\u8BFB\u53D6\u6587\u4EF6\u4E2D\u6240\u6709\u5185\u5BB9, \u76F4\u5230\u6587\u4EF6\u672B\u5C3E\u4E3A\u6B62
 r :=bufio.NewReader(fp)
 for{
  //buf, err := r.ReadBytes(&#39;\\n&#39;)
  buf, err := r.ReadString(&#39;\\n&#39;)
  fmt.Print(string(buf))
  if err == io.EOF{
   break
  }
 }
}
ReadFile\u51FD\u6570
func ReadFile(filename string) ([]byte, error)
\u4ECEfilename\u6307\u5B9A\u7684\u6587\u4EF6\u4E2D\u8BFB\u53D6\u6570\u636E\u5E76\u8FD4\u56DE\u6587\u4EF6\u7684\u6240\u6709\u5185\u5BB9
\u4E0D\u9002\u5408\u5927\u6587\u4EF6\u8BFB\u53D6
package main

import (
 &quot;fmt&quot;
 &quot;io/ioutil&quot;
)

func main() {

 filePath := &quot;d:/lnj.txt&quot;
 buf, err := ioutil.ReadFile(filePath)
 if err !=nil {
  fmt.Println(err)
 }else{
  fmt.Println(string(buf))
 }
}
\u6587\u4EF6\u521B\u5EFA\u548C\u5199\u5165
Create\u51FD\u6570
func Create(name string) (file *File, err error)
Create\u91C7\u7528\u6A21\u5F0F0666\uFF08\u4EFB\u4F55\u4EBA\u90FD\u53EF\u8BFB\u5199\uFF0C\u4E0D\u53EF\u6267\u884C\uFF09\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aname\u7684\u6587\u4EF6
\u5982\u679C\u6587\u4EF6\u5B58\u5728\u4F1A\u8986\u76D6\u539F\u6709\u6587\u4EF6
Write\u51FD\u6570
func (f *File) Write(b []byte) (n int, err error)
\u5C06\u6307\u5B9A\u5B57\u8282\u6570\u7EC4\u5199\u5165\u5230\u6587\u4EF6\u4E2D
WriteString\u51FD\u6570
func (f *File) WriteString(s string) (ret int, err error)
\u5C06\u6307\u5B9A\u5B57\u7B26\u4E32\u5199\u5165\u5230\u6587\u4EF6\u4E2D
package main

import (
 &quot;fmt&quot;
 &quot;os&quot;
)

func main() {

 // 1.\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6
 fp, err := os.Create(&quot;d:/lnj.txt&quot;)
 if err != nil{
  fmt.Println(err)
 }
 // 2.\u5173\u95ED\u6253\u5F00\u7684\u6587\u4EF6
 defer func() {
  err := fp.Close()
  if err != nil {
   fmt.Println(err)
  }
 }()
 // 2.\u5F80\u6587\u4EF6\u4E2D\u5199\u5165\u6570\u636E
 // \u6CE8\u610F: Windows\u6362\u884C\u662F\\r\\n
 bytes := []byte{&#39;l&#39;,&#39;n&#39;,&#39;j&#39;,&#39;\\r&#39;,&#39;\\n&#39;}
 fp.Write(bytes)
 
 fp.WriteString(&quot;www.it666.com\\r\\n&quot;)
 fp.WriteString(&quot;www.itzb.com\\r\\n&quot;)
 // \u6CE8\u610F: Go\u8BED\u8A00\u91C7\u7528UTF-8\u7F16\u7801, \u4E00\u4E2A\u4E2D\u6587\u5360\u75283\u4E2A\u5B57\u8282
 fp.WriteString(&quot;\u674E\u5357\u6C5F&quot;)
}
OpenFile\u51FD\u6570
const (
  O_RDONLY int = syscall.O_RDONLY // \u53EA\u8BFB\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6
  O_WRONLY int = syscall.O_WRONLY // \u53EA\u5199\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6
  O_RDWR   int = syscall.O_RDWR   // \u8BFB\u5199\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6
  O_APPEND int = syscall.O_APPEND // \u5199\u64CD\u4F5C\u65F6\u5C06\u6570\u636E\u9644\u52A0\u5230\u6587\u4EF6\u5C3E\u90E8
  O_CREATE int = syscall.O_CREAT  // \u5982\u679C\u4E0D\u5B58\u5728\u5C06\u521B\u5EFA\u4E00\u4E2A\u65B0\u6587\u4EF6
  O_EXCL   int = syscall.O_EXCL   // \u548CO_CREATE\u914D\u5408\u4F7F\u7528\uFF0C\u6587\u4EF6\u5FC5\u987B\u4E0D\u5B58\u5728
  O_SYNC   int = syscall.O_SYNC   // \u6253\u5F00\u6587\u4EF6\u7528\u4E8E\u540C\u6B65I/O
  O_TRUNC  int = syscall.O_TRUNC  // \u5982\u679C\u53EF\u80FD\uFF0C\u6253\u5F00\u65F6\u6E05\u7A7A\u6587\u4EF6
)
const (
  // \u5355\u5B57\u7B26\u662F\u88ABString\u65B9\u6CD5\u7528\u4E8E\u683C\u5F0F\u5316\u7684\u5C5E\u6027\u7F29\u5199\u3002
  ModeDir        FileMode = 1 &lt;&lt; (32 - 1 - iota) // d: \u76EE\u5F55
  ModeAppend                                     // a: \u53EA\u80FD\u5199\u5165\uFF0C\u4E14\u53EA\u80FD\u5199\u5165\u5230\u672B\u5C3E
  ModeExclusive                                  // l: \u7528\u4E8E\u6267\u884C
  ModeTemporary                                  // T: \u4E34\u65F6\u6587\u4EF6\uFF08\u975E\u5907\u4EFD\u6587\u4EF6\uFF09
  ModeSymlink                                    // L: \u7B26\u53F7\u94FE\u63A5\uFF08\u4E0D\u662F\u5FEB\u6377\u65B9\u5F0F\u6587\u4EF6\uFF09
  ModeDevice                                     // D: \u8BBE\u5907
  ModeNamedPipe                                  // p: \u547D\u540D\u7BA1\u9053\uFF08FIFO\uFF09
  ModeSocket                                     // S: Unix\u57DFsocket
  ModeSetuid                                     // u: \u8868\u793A\u6587\u4EF6\u5177\u6709\u5176\u521B\u5EFA\u8005\u7528\u6237id\u6743\u9650
  ModeSetgid                                     // g: \u8868\u793A\u6587\u4EF6\u5177\u6709\u5176\u521B\u5EFA\u8005\u7EC4id\u7684\u6743\u9650
  ModeCharDevice                                 // c: \u5B57\u7B26\u8BBE\u5907\uFF0C\u9700\u5DF2\u8BBE\u7F6EModeDevice
  ModeSticky                                     // t: \u53EA\u6709root/\u521B\u5EFA\u8005\u80FD\u5220\u9664/\u79FB\u52A8\u6587\u4EF6
  // \u8986\u76D6\u6240\u6709\u7C7B\u578B\u4F4D\uFF08\u7528\u4E8E\u901A\u8FC7&amp;\u83B7\u53D6\u7C7B\u578B\u4F4D\uFF09\uFF0C\u5BF9\u666E\u901A\u6587\u4EF6\uFF0C\u6240\u6709\u8FD9\u4E9B\u4F4D\u90FD\u4E0D\u5E94\u88AB\u8BBE\u7F6E
  ModeType = ModeDir | ModeSymlink | ModeNamedPipe | ModeSocket | ModeDevice
  ModePerm FileMode = 0777 // \u8986\u76D6\u6240\u6709Unix\u6743\u9650\u4F4D\uFF08\u7528\u4E8E\u901A\u8FC7&amp;\u83B7\u53D6\u7C7B\u578B\u4F4D\uFF09
)
0\u6CA1\u6709\u4EFB\u4F55\u6743\u9650
1.\u6267\u884C\u6743\u9650(\u5982\u679C\u662F\u53EF\u6267\u884C\u7A0B\u5E8F, \u53EF\u4EE5\u8FD0\u884C)
2.\u5199\u6743\u9650
3.\u5199\u6743\u9650\u548C\u6267\u884C\u6743\u9650
4.\u8BFB\u6743\u9650
5.\u8BFB\u6743\u9650\u548C\u6267\u884C\u6743\u9650
6.\u8BFB\u6743\u9650\u548C\u5199\u6743\u9650
7.\u8BFB\u6743\u9650\u548C\u5199\u6743\u9650\u4EE5\u53CA\u6267\u884C\u6743\u9650
\u7B2C\u4E09\u4E2A\u53C2\u6570: \u6307\u5B9A\u6743\u9650
func OpenFile(name string, flag int, perm FileMode) (file *File, err error)
\u7B2C\u4E00\u4E2A\u53C2\u6570: \u6253\u5F00\u7684\u8DEF\u5F84
\u7B2C\u4E8C\u4E2A\u53C2\u6570: \u6253\u5F00\u7684\u6A21\u5F0F
\u4E0D\u5E26\u7F13\u51B2\u533A\u5199\u5165
package main

import (
 &quot;fmt&quot;
 &quot;os&quot;
)

func main() {

 // \u6CE8\u610F\u70B9: \u7B2C\u4E09\u4E2A\u53C2\u6570\u5728Windows\u6CA1\u6709\u6548\u679C
 // -rw-rw-rw- (666)   \u6240\u6709\u7528\u6237\u90FD\u6709\u6587\u4EF6\u8BFB\u3001\u5199\u6743\u9650\u3002
 //-rwxrwxrwx (777)  \u6240\u6709\u7528\u6237\u90FD\u6709\u8BFB\u3001\u5199\u3001\u6267\u884C\u6743\u9650\u3002
 // 1.\u6253\u5F00\u6587\u4EF6
 //fp, err := os.OpenFile(&quot;d:/lnj.txt&quot;, os.O_CREATE|os.O_RDWR, 0666)
 fp, err := os.OpenFile(&quot;d:/lnj.txt&quot;, os.O_CREATE|os.O_APPEND, 0666)
 if err != nil {
  fmt.Println(err)
 }
 // 2.\u5173\u95ED\u6253\u5F00\u7684\u6587\u4EF6
 defer func() {
  err := fp.Close()
  if err != nil {
   fmt.Println(err)
  }
 }()

 // \u6CE8\u610F\u70B9:
 // \u5982\u679CO_RDWR\u6A21\u5F0F\u6253\u5F00, \u88AB\u6253\u5F00\u6587\u4EF6\u5DF2\u7ECF\u6709\u5185\u5BB9, \u4F1A\u4ECE\u6700\u524D\u9762\u5F00\u59CB\u8986\u76D6
 // \u5982\u679CO_APPEND\u6A21\u5F0F\u6253\u5F00, \u88AB\u6253\u5F00\u6587\u4EF6\u5DF2\u7ECF\u6709\u5185\u5BB9, \u4F1A\u4ECE\u5728\u6700\u540E\u8FFD\u52A0
 // 3.\u5F80\u6587\u4EF6\u4E2D\u5199\u5165\u6570\u636E
 bytes := []byte{&#39;l&#39;,&#39;n&#39;,&#39;j&#39;,&#39;\\r&#39;,&#39;\\n&#39;}
 fp.Write(bytes)
 fp.WriteString(&quot;www.it666.com\\r\\n&quot;)
}
\u5E26\u7F13\u51B2\u533A\u5199\u5165
package main

import (
 &quot;bufio&quot;
 &quot;fmt&quot;
 &quot;os&quot;
)

func main() {

 // 1.\u6253\u5F00\u6587\u4EF6
 fp, err := os.OpenFile(&quot;d:/lnj.txt&quot;, os.O_CREATE|os.O_APPEND, 0666)
 if err != nil {
  fmt.Println(err)
 }
 // 2.\u5173\u95ED\u6253\u5F00\u7684\u6587\u4EF6
 defer func() {
  err := fp.Close()
  if err != nil {
   fmt.Println(err)
  }
 }()

 // 3.\u521B\u5EFA\u7F13\u51B2\u533A
 w := bufio.NewWriter(fp)

 // 4.\u5199\u5165\u6570\u636E\u5230\u7F13\u51B2\u533A
 bytes := []byte{&#39;l&#39;,&#39;n&#39;,&#39;j&#39;,&#39;\\r&#39;,&#39;\\n&#39;}
 w.Write(bytes)
 w.WriteString(&quot;www.it666.com\\r\\n&quot;)

 // 5.\u5C06\u7F13\u51B2\u533A\u4E2D\u7684\u6570\u636E\u5237\u65B0\u5230\u6587\u4EF6
 w.Flush()
}
WriteFile\u51FD\u6570
package main

import (
 &quot;fmt&quot;
 &quot;io/ioutil&quot;
)

func main() {

 // 1.\u5199\u5165\u6570\u636E\u5230\u6307\u5B9A\u6587\u4EF6
 data := []byte{&#39;l&#39;,&#39;n&#39;,&#39;j&#39;,&#39;\\r&#39;,&#39;\\n&#39;}
 err := ioutil.WriteFile(&quot;d:/abc.txt&quot;, data, 0666)
 if err != nil {
  fmt.Println(err)
 }else{
  fmt.Println(&quot;\u5199\u5165\u6210\u529F&quot;)
 }
}
\u5224\u65AD\u6587\u4EF6\u662F\u5426\u5B58\u5728
Stat\u51FD\u6570
func Stat(name string) (fi FileInfo, err error)
\u8FD4\u56DE\u503C: FileInfo
type FileInfo interface {
    Name() string       // \u6587\u4EF6\u7684\u540D\u5B57\uFF08\u4E0D\u542B\u6269\u5C55\u540D\uFF09
    Size() int64        // \u666E\u901A\u6587\u4EF6\u8FD4\u56DE\u503C\u8868\u793A\u5176\u5927\u5C0F\uFF1B\u5176\u4ED6\u6587\u4EF6\u7684\u8FD4\u56DE\u503C\u542B\u4E49\u5404\u7CFB\u7EDF\u4E0D\u540C
    Mode() FileMode     // \u6587\u4EF6\u7684\u6A21\u5F0F\u4F4D
    ModTime() time.Time // \u6587\u4EF6\u7684\u4FEE\u6539\u65F6\u95F4
    IsDir() bool        // \u7B49\u4EF7\u4E8EMode().IsDir()
    Sys() interface{}   // \u5E95\u5C42\u6570\u636E\u6765\u6E90\uFF08\u53EF\u4EE5\u8FD4\u56DEnil\uFF09
}
\u8FD4\u56DE\u503C: error
\u8FD4\u56DE\u503Cerror\u7B49\u4E8Enil,\u4EE3\u8868\u6587\u4EF6\u5B58\u5728
\u8FD4\u56DE\u503Cerror\u4E0D\u7B49\u4E8Enil, \u53EF\u4EE5\u8FDB\u4E00\u6B65\u901A\u8FC7IsNotExist\u5224\u65AD, \u5982\u679C\u8FD4\u56DEtrue\u4EE3\u8868\u6587\u4EF6\u4E0D\u5B58\u5728
\u8FD4\u56DE\u503Cerror\u5982\u679C\u8FD4\u56DE\u5176\u5B83\u9519\u8BEF, \u5219\u4E0D\u786E\u5B9A\u6587\u4EF6\u662F\u5426\u5B58\u5728
package main

import (
 &quot;fmt&quot;
 &quot;os&quot;
)

func main() {

 info, err := os.Stat(&quot;d:/lnj.txt&quot;)
 if err == nil {
  fmt.Println(&quot;\u6587\u4EF6\u5B58\u5728&quot;)
  fmt.Println(info.Name())
 }else if os.IsNotExist(err) {
  fmt.Println(&quot;\u6587\u4EF6\u4E0D\u5B58\u5728&quot;)
 }else{
  fmt.Println(&quot;\u4E0D\u786E\u5B9A&quot;)
 }
}
\u7EC3\u4E60
\u5C06\u4E00\u4E2A\u6587\u672C\u6587\u4EF6\u62F7\u8D1D\u5230\u53E6\u5916\u4E00\u4E2A\u6587\u4EF6\u4E2D
\u5C1D\u8BD5\u7528\u4E0A\u9762\u5B66\u4E60\u7684\u5176\u5B83\u65B9\u6CD5\u5B9E\u73B0\u4E0B
package main

import (
 &quot;fmt&quot;
 &quot;io/ioutil&quot;
)

func main() {

 // 1.\u8BFB\u53D6\u4E00\u4E2A\u6587\u4EF6
 buf, err := ioutil.ReadFile(&quot;d:/lnj.txt&quot;)
 if err != nil {
  fmt.Println(err)
  return
 }
 // 2.\u5199\u5165\u8BFB\u53D6\u7684\u6570\u636E\u5230\u53E6\u4E00\u4E2A\u6587\u4EF6
 err =ioutil.WriteFile(&quot;d:/abc.txt&quot;, buf, 0666)
 if err != nil {
  fmt.Println(err)
  return
 }
 fmt.Println(&quot;\u62F7\u8D1D\u5B8C\u6210&quot;)

}
\u5C06\u4E00\u4E2A\u56FE\u7247/\u89C6\u9891\u6587\u4EF6\u62F7\u8D1D\u5230\u53E6\u4E00\u4E2A\u6587\u4EF6
package main

import (
 &quot;bufio&quot;
 &quot;fmt&quot;
 &quot;io&quot;
 &quot;os&quot;
)

func main() {

 // 1.\u5B9A\u4E49\u62F7\u8D1D\u6587\u4EF6\u7684\u8DEF\u5F84
 scrPath := &quot;D:/a.png&quot;
 destPath := &quot;E:/b.png&quot;
 // 2.\u6253\u5F00\u88AB\u62F7\u8D1D\u6587\u4EF6
 fr, err := os.Open(scrPath)
 if err != nil {
  fmt.Println(err)
  return
 }
 // 3.\u5173\u95ED\u6253\u5F00\u6587\u4EF6
 defer func() {
  err := fr.Close()
  if err != nil{
   fmt.Println(err)
  }
 }()
 // 4.\u521B\u5EFA\u8BFB\u53D6\u7F13\u51B2\u533A
 r := bufio.NewReader(fr)

 // 1.\u521B\u5EFA\u5199\u5165\u6587\u4EF6
 fw, err := os.Create(destPath)
 if err != nil {
  fmt.Println(err)
  return
 }
 // 2.\u5173\u95ED\u6253\u5F00\u6587\u4EF6
 defer func() {
  err := fw.Close()
  if err != nil{
   fmt.Println(err)
  }
 }()
 // 3.\u521B\u5EFA\u5199\u5165\u7F13\u51B2\u533A
 w := bufio.NewWriter(fw)
 // 4.\u5229\u7528\u7CFB\u7EDFcopy\u51FD\u6570\u5B8C\u6210\u62F7\u8D1D
 count, err := io.Copy(w, r)
 if err != nil {
  fmt.Println(err)
  return
 }
 fmt.Println(count)
 fmt.Println(&quot;\u62F7\u8D1D\u5B8C\u6210&quot;)
}
\u81EA\u5DF1\u67E5\u6587\u6863\u5B9E\u73B0\u904D\u5386\u6587\u4EF6\u5939
\u4F8B\u5982: \u7ED9\u4E00\u4E2A\u6587\u4EF6\u5939\u8DEF\u5F84, \u83B7\u53D6\u8BE5\u6587\u4EF6\u5939\u4E0B\u6240\u6709\u6587\u4EF6, \u5E76\u5C06\u6240\u6709\u6587\u4EF6\u8DEF\u5F84\u4FDD\u5B58\u5230\u5207\u7247\u4E2D
\u5E76\u53D1\u7F16\u7A0B\u57FA\u672C\u6982\u5FF5
\u5B66\u4E60\u5E76\u53D1\u7F16\u7A0B\u4E4B\u524D\u6211\u4EEC\u9700\u8981\u8111\u8865\u51E0\u4E2A\u57FA\u7840\u77E5\u8BC6\u548C\u601D\u8003\u4E00\u4E2A\u95EE\u9898
\u4EC0\u4E48\u662F\u4E32\u884C?
\u4EC0\u4E48\u662F\u5E76\u884C?
\u4EC0\u4E48\u662F\u5E76\u53D1?
\u4EC0\u4E48\u662F\u7A0B\u5E8F?
\u4EC0\u4E48\u662F\u8FDB\u7A0B?
\u4EC0\u4E48\u662F\u7EBF\u7A0B?
\u4EC0\u4E48\u662F\u534F\u7A0B?
\u4EC0\u4E48\u662F\u4E32\u884C?
\u4E32\u884C\u5C31\u662F\u6309\u987A\u5E8F\u6267\u884C, \u5C31\u597D\u6BD4\u94F6\u884C\u53EA\u67091\u4E2A\u7A97\u53E3, \u67093\u4E2A\u4EBA\u8981\u529E\u4E8B, \u90A3\u4E48\u5FC5\u987B\u6392\u961F, \u53EA\u6709\u524D\u9762\u7684\u4EBA\u529E\u5B8C\u8D70\u4EBA, \u624D\u80FD\u8F6E\u5230\u4F60
\u5728\u8BA1\u7B97\u673A\u4E2D, \u540C\u4E00\u65F6\u523B, \u53EA\u80FD\u6709\u4E00\u6761\u6307\u4EE4, \u5728\u4E00\u4E2ACPU\u4E0A\u6267\u884C, \u540E\u9762\u7684\u6307\u4EE4\u5FC5\u987B\u7B49\u5230\u524D\u9762\u6307\u4EE4\u6267\u884C\u5B8C\u624D\u80FD\u6267\u884C, \u5C31\u662F\u4E32\u884C +\u56FE\u7247
\u4EC0\u4E48\u662F\u5E76\u884C?
\u5E76\u884C\u5C31\u662F\u540C\u65F6\u6267\u884C, \u5C31\u597D\u6BD4\u94F6\u884C\u67093\u4E2A\u7A97\u53E3, \u67093\u4E2A\u4EBA\u8981\u529E\u4E8B, \u53EA\u9700\u8981\u5230\u7A7A\u7A97\u53E3\u5373\u53EF\u7ACB\u5373\u529E\u4E8B.
\u5728\u8BA1\u7B97\u673A\u4E2D, \u540C\u4E00\u65F6\u523B, \u6709\u591A\u6761\u6307\u4EE4, \u5728\u591A\u4E2ACPU\u4E0A\u6267\u884C, \u5C31\u662F\u5E76\u884C
\u4ECE\u4EE5\u4E0A\u5206\u6790\u4E0D\u96BE\u770B\u51FA, \u5E76\u884C\u7684\u901F\u5EA6\u4F18\u4E8E\u4E32\u884C +\u56FE\u7247
\u4EC0\u4E48\u662F\u5E76\u53D1?
\u5E76\u53D1\u662F\u4F2A\u5E76\u884C, \u5C31\u597D\u6BD4\u94F6\u884C\u53EA\u67091\u4E2A\u7A97\u53E3, \u67093\u4E2A\u4EBA\u8981\u529E\u4E8B, \u90A3\u4E48\u6CA1\u8F6E\u5230\u540E\u9762\u7684\u4EBA\u65F6, \u540E\u9762\u7684\u4EBA\u53EF\u4EE5\u7528\u62D6\u978B\u5148\u6392\u961F, \u53BB\u5403\u4E2A\u65E9\u9910,\u4E70\u4E2A\u4E1C\u897F\u5565\u7684, \u611F\u89C9\u5DEE\u4E0D\u591A\u8981\u5230\u81EA\u5DF1\u65F6\u518D\u56DE\u6765\u529E\u4E8B
\u5728\u8BA1\u7B97\u673A\u4E2D, ***\u540C\u4E00\u65F6\u523B, \u53EA\u80FD\u6709\u4E00\u6761\u6307\u4EE4, \u5728\u4E00\u4E2ACPU\u4E0A\u6267\u884C, \u4F46\u662FCPU\u4F1A\u5FEB\u901F\u7684\u5728\u591A\u6761\u6307\u4EE4\u4E4B\u95F4\u8F6E\u8BE2\u6267\u884C***\u5C31\u662F\u5E76\u53D1
\u5E76\u884C\u548C\u5E76\u53D1\u7684\u533A\u522B\u5C31\u597D\u6BD4\u53E4\u4EE3\u7684\u4E09\u59BB\u56DB\u59BE(\u540D\u6B63\u8A00\u987A, \u5149\u660E\u6B63\u5927)\u548C\u73B0\u4EE3\u4E09\u59BB\u56DB\u59BE(\u62BD\u7A7A\u5E7D\u4F1A, \u5C0F\u4E09\u5C0F\u56DB)
\u56FE\u7247
\u56FE\u7247
\u603B\u7ED3:
\u591A\u7EBF\u7A0B\u7A0B\u5E8F\u5728\u5355\u6838\u4E0A\u8FD0\u884C, \u5C31\u662F\u5E76\u53D1
\u591A\u7EBF\u7A0B\u7A0B\u5E8F\u5728\u591A\u6838\u4E0A\u8FD0\u884C,\u5C31\u662F\u5E76\u884C
\u4EC0\u4E48\u662F\u7A0B\u5E8F?
\u7A0B\u5E8F\u662F\u6307\u5C06\u7F16\u8BD1\u578B\u8BED\u8A00\u7F16\u5199\u597D\u7684\u4EE3\u7801\u901A\u8FC7\u7F16\u8BD1\u5DE5\u5177\u7F16\u8BD1\u4E4B\u540E\u5B58\u50A8\u5728\u786C\u76D8\u4E0A\u7684\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6587\u4EF6, \u4F1A\u5360\u7528\u78C1\u76D8\u7A7A\u95F4, \u4F46\u4E0D\u4F1A\u5360\u7528\u7CFB\u7EDF\u8D44\u6E90
\u4F8B\u5982\u6211\u4EEC\u901A\u8FC7C++\u7F16\u5199\u4E86\u4E00\u4E2A\u804A\u5929\u7A0B\u5E8F, \u7136\u540E\u901A\u8FC7C++\u7F16\u8BD1\u5668\u5C06\u7F16\u5199\u597D\u7684\u4EE3\u7801\u7F16\u8BD1\u6210\u4E00\u4E2A\u4E8C\u8FDB\u5236\u7684\u6587\u4EF6, \u90A3\u4E48\u8FD9\u4E2A\u4E8C\u8FDB\u5236\u7684\u6587\u4EF6\u5C31\u662F\u4E00\u4E2A\u7A0B\u5E8F
\u4EC0\u4E48\u662F\u8FDB\u7A0B?
\u8FDB\u7A0B\u662F\u6307\u7A0B\u5E8F\u5728\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u7684\u4E00\u6B21\u6267\u884C\u8FC7\u7A0B, \u662F\u7CFB\u7EDF\u8FDB\u884C\u8D44\u6E90\u5206\u914D\u548C\u8C03\u5EA6\u7684\u57FA\u672C\u5355\u4F4D
\u4F8B\u5982:
\u542F\u52A8\u8BB0\u4E8B\u672C\u8FD9\u4E2A\u7A0B\u5E8F, \u5728\u7CFB\u7EDF\u4E2D\u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A\u8BB0\u4E8B\u672C\u8FDB\u7A0B
\u518D\u6B21\u542F\u52A8\u8BB0\u4E8B\u672C\u8FD9\u4E2A\u7A0B\u5E8F, \u53C8\u4F1A\u5728\u7CFB\u7EDF\u4E2D\u521B\u5EFA\u4E00\u4E2A\u8BB0\u4E8B\u672C\u8FDB\u7A0B
\u7A0B\u5E8F\u548C\u8FDB\u7A0B\u7684\u5173\u7CFB\u5C31\u597D\u6BD4\u5267\u672C\u548C\u6F14\u51FA\u7684\u5173\u7CFB
\u5267\u672C\u5BF9\u5E94\u7A0B\u5E8F, \u6F14\u51FA\u5BF9\u5E94\u8FDB\u7A0B. \u540C\u4E00\u4E2A\u5267\u672C\u53EF\u4EE5\u5728\u591A\u4E2A\u821E\u53F0\u540C\u65F6\u6F14\u51FA\u4E92\u4E0D\u5F71\u54CD, \u540C\u4E00\u4E2A\u7A0B\u5E8F\u53EF\u4EE5\u5728\u7CFB\u7EDF\u4E2D\u5F00\u542F\u591A\u4E2A\u8FDB\u7A0B\u4E92\u4E0D\u5F71\u54CD
\u6240\u4EE5\u7A0B\u5E8F\u548C\u8FDB\u7A0B\u7684\u5173\u7CFB\u662F1:N, \u6240\u4EE5\u591A\u4E2A\u8FDB\u7A0B\u7684\u7A7A\u95F4\u662F\u72EC\u7ACB\u7684
\u4EC0\u4E48\u662F\u7EBF\u7A0B?
\u7EBF\u7A0B\u662F\u6307\u8FDB\u7A0B\u4E2D\u7684\u4E00\u4E2A\u6267\u884C\u5B9E\u4F8B, \u662F\u7A0B\u5E8F\u6267\u884C\u7684\u6700\u5C0F\u5355\u5143, \u5B83\u662F\u6BD4\u8FDB\u7A0B\u66F4\u5C0F\u7684\u80FD\u72EC\u7ACB\u8FD0\u884C\u7684\u57FA\u672C\u5355\u4F4D
\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u81F3\u5C11\u6709\u4E00\u4E2A\u7EBF\u7A0B, \u8FD9\u4E2A\u7EBF\u7A0B\u6211\u4EEC\u79F0\u4E4B\u4E3A\u4E3B\u7EBF\u7A0B
\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u9664\u4E86\u4E3B\u7EBF\u7A0B\u4EE5\u5916, \u6211\u4EEC\u8FD8\u53EF\u4EE5\u521B\u5EFA\u548C\u9500\u6BC1\u591A\u4E2A\u7EBF\u7A0B
\u4F8B\u5982:
\u542F\u52A8\u8FC5\u96F7\u8FD9\u4E2A\u7A0B\u5E8F, \u7CFB\u7EDF\u4F1A\u521B\u5EFA\u4E00\u4E2A\u8FC5\u96F7\u8FDB\u7A0B, \u5E76\u4E14\u9ED8\u8BA4\u4F1A\u6709\u4E00\u4E2A\u4E3B\u7EBF\u7A0B, \u7528\u4E8E\u6267\u884C\u8FC5\u96F7\u9ED8\u8BA4\u7684\u4E1A\u52A1\u903B\u8F91
\u5F53\u6211\u4EEC\u5229\u7528\u8FC5\u96F7\u4E0B\u8F7D\u591A\u4E2A\u4EFB\u52A1\u7684\u65F6\u5019, \u4F1A\u53D1\u73B0\u591A\u4E2A\u4EFB\u52A1\u90FD\u5728\u540C\u65F6\u4E0B\u8F7D, \u6B64\u65F6\u4E3A\u4E86\u80FD\u591F\u540C\u65F6\u6267\u884C\u4E0B\u8F7D\u64CD\u4F5C, \u8FC5\u96F7\u5C31\u4F1A\u521B\u5EFA\u591A\u4E2A\u7EBF\u7A0B, \u5C06\u4E0D\u540C\u7684\u4E0B\u8F7D\u4EFB\u52A1\u653E\u5230\u4E0D\u540C\u7684\u7EBF\u7A0B\u4E2D\u6267\u884C
\u56FE\u7247
\u4EC0\u4E48\u662F\u534F\u7A0B?
\u534F\u7A0B\u662F\u4E00\u79CD\u7528\u6237\u6001\u7684\u8F7B\u91CF\u7EA7\u7EBF\u7A0B\uFF0C\u53C8\u79F0\u5FAE\u7EBF\u7A0B\uFF0C\u82F1\u6587\u540DCoroutine
\u4E0E\u4F20\u7EDF\u7684\u7CFB\u7EDF\u7EA7\u522B\u8FDB\u7A0B\u548C\u7EBF\u7A0B\u76F8\u6BD4, \u534F\u7A0B\u6700\u5927\u7684\u4F18\u52BF\u5728\u4E8E&quot;\u8F7B\u91CF\u7EA7&quot;. \u53EF\u4EE5\u8F7B\u677E\u521B\u5EFA\u4E0A\u4E07\u4E2A\u4E0D\u4F1A\u5BFC\u81F4\u7CFB\u7EDF\u8D44\u6E90\u8870\u7AED. \u800C\u7EBF\u7A0B\u548C\u8FDB\u7A0B\u901A\u5E38\u5F88\u96BE\u8D85\u8FC71\u4E07\u4E2A.\u8FD9\u4E5F\u662F\u534F\u7A0B\u79F0\u4E4B\u4E3A&quot;\u8F7B\u91CF\u7EA7\u7EBF\u7A0B&quot;\u7684\u539F\u56E0
\u4E00\u4E2A\u7EBF\u7A0B\u4E2D\u53EF\u4EE5\u6709\u4EFB\u610F\u591A\u4E2A\u534F\u7A0B, \u4F46\u67D0\u4E00\u65F6\u523B\u53EA\u80FD\u6709\u4E00\u4E2A\u534F\u7A0B\u5728\u8FD0\u884C, \u591A\u4E2A\u534F\u7A0B\u5206\u4EAB\u6240\u5728\u7EBF\u7A0B\u5206\u914D\u5230\u7684\u8BA1\u7B97\u673A\u8D44\u6E90
\u56FE\u7247
\u5728\u534F\u7A0B\u4E2D, \u8C03\u7528\u4E00\u4E2A\u4EFB\u52A1\u5C31\u50CF\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\u4E00\u6837, \u6D88\u8017\u7CFB\u7EDF\u8D44\u6E90\u6781\u5C11, \u4F46\u80FD\u8FBE\u5230\u8FDB\u7A0B\u3001\u7EBF\u7A0B\u76F8\u540C\u7684\u5E76\u53D1\u6548\u679C
Go\u5E76\u53D1
Go\u5728\u8BED\u8A00\u7EA7\u522B\u652F\u6301\u534F\u7A0B(\u591A\u6570\u8BED\u8A00\u5728\u8BED\u6CD5\u5C42\u9762\u5E76\u4E0D\u76F4\u63A5\u652F\u6301\u534F\u7A0B), \u53EB\u505Agoroutine.
\u4EBA\u4EEC\u628AGo\u8BED\u8A00\u79F0\u4E4B\u4E3A21\u4E16\u7EAA\u7684C\u8BED\u8A00. \u7B2C\u4E00\u662F\u56E0\u4E3AGo\u8BED\u8A00\u8BBE\u8BA1\u7B80\u5355, \u7B2C\u4E8C\u662F\u56E0\u4E3A21\u4E16\u7EAA\u6700\u91CD\u8981\u7684\u5C31\u662F\u5E76\u884C\u7A0B\u5E8F\u8BBE\u8BA1.\u800CGo\u4ECE\u8BED\u8A00\u5C42\u9762\u5C31\u652F\u6301\u5E76\u53D1\u548C\u5E76\u884C
Go\u5E76\u53D1\u5C0F\u6848\u4F8B
package main

import (
 &quot;fmt&quot;
 &quot;time&quot;
)

func sing()  {
 for i:=0; i&lt; 10; i++{
  fmt.Println(&quot;\u6211\u5728\u5531\u6B4C&quot;)
  time.Sleep(time.Millisecond)
 }
}
func dance() {
 for i:=0; i&lt; 10; i++{
  fmt.Println(&quot;\u6211\u5728\u8DF3\u821E---&quot;)
  time.Sleep(time.Millisecond)
 }
}

func main() {
 // \u4E32\u884C: \u5FC5\u987B\u5148\u5531\u5B8C\u6B4C\u624D\u80FD\u8DF3\u821E
 //sing()
 //dance()

 // \u5E76\u884C: \u53EF\u4EE5\u8FB9\u5531\u6B4C, \u8FB9\u8DF3\u821E
 // \u6CE8\u610F\u70B9: \u4E3B\u7EBF\u7A0B\u4E0D\u80FD\u6B7B, \u5426\u5219\u7A0B\u5E8F\u5C31\u9000\u51FA\u4E86
 go sing() // \u5F00\u542F\u4E00\u4E2A\u534F\u7A0B
 go dance() // \u5F00\u542F\u4E00\u4E2A\u534F\u7A0B
 for{
  ;
 }
}
runtime\u5305\u4E2D\u5E38\u7528\u7684\u51FD\u6570
package main
import (
 &quot;fmt&quot;
 &quot;runtime&quot;
)

func sing()  {
 for i:=0; i&lt; 10; i++{
  fmt.Println(&quot;\u6211\u5728\u5531\u6B4C&quot;)
  // Gosched\u4F7F\u5F53\u524Dgo\u7A0B\u653E\u5F03\u5904\u7406\u5668\uFF0C\u4EE5\u8BA9\u5176\u5B83go\u7A0B\u8FD0\u884C\u3002
  // \u5B83\u4E0D\u4F1A\u6302\u8D77\u5F53\u524Dgo\u7A0B\uFF0C\u56E0\u6B64\u5F53\u524Dgo\u7A0B\u672A\u6765\u4F1A\u6062\u590D\u6267\u884C
  runtime.Gosched()
 }
}
func dance() {
 for i:=0; i&lt; 10; i++{
  fmt.Println(&quot;\u6211\u5728\u8DF3\u821E---&quot;)
  runtime.Gosched()
 }
}

func main() {

 go sing()
 go dance()
 for{
  ;
 }
}
package main
import (
 &quot;fmt&quot;
 &quot;runtime&quot;
)

func main() {
 go func() {
  fmt.Println(&quot;123&quot;)
  // \u9000\u51FA\u5F53\u524D\u534F\u7A0B
  //runtime.Goexit()
  // \u9000\u51FA\u5F53\u524D\u51FD\u6570
  //return
  test()
  fmt.Println(&quot;456&quot;)
 }()
 for{
  ;
 }
}

func test()  {
 fmt.Println(&quot;abc&quot;)
 // \u53EA\u4F1A\u7ED3\u675F\u5F53\u524D\u51FD\u6570, \u534F\u7A0B\u4E2D\u7684\u5176\u5B83\u4EE3\u7801\u4F1A\u7EE7\u7EED\u6267\u884C
 //return
 // \u4F1A\u7ED3\u675F\u6574\u4E2A\u534F\u7A0B, Goexit\u4E4B\u540E\u6574\u4E2A\u534F\u7A0B\u4E2D\u7684\u5176\u5B83\u4EE3\u7801\u4E0D\u4F1A\u6267\u884C
 runtime.Goexit()
 fmt.Println(&quot;def&quot;)
}
package main
import (
 &quot;fmt&quot;
 &quot;runtime&quot;
)
func main() {
 num := runtime.NumCPU()
 fmt.Println(num)
}
func main() {
  // \u83B7\u53D6\u5E26\u6765\u4E86CPU\u4E2A\u6570
  num := runtime.NumCPU()
  // \u8BBE\u7F6E\u540C\u65F6\u4F7F\u7528CPU\u4E2A\u6570
  runtime.GOMAXPROCS(num)
}
Go\u8BED\u8A001.8\u4E4B\u524D, \u9700\u8981\u6211\u4EEC\u624B\u52A8\u8BBE\u7F6E
Go\u8BED\u8A001.8\u4E4B\u540E, \u4E0D\u9700\u8981\u6211\u4EEC\u624B\u52A8\u8BBE\u7F6E
GOMAXPROCS: \u8BBE\u7F6E\u53EF\u540C\u65F6\u6267\u884C\u7684\u6700\u5927CPU\u6570\uFF0C\u5E76\u8FD4\u56DE\u5148\u524D\u7684\u8BBE\u7F6E
NumCPU: \u8FD4\u56DE\u672C\u5730\u673A\u5668\u7684\u903B\u8F91CPU\u4E2A\u6570
Goexit: \u7EC8\u6B62\u8C03\u7528\u5B83\u7684go\u7A0B, \u5176\u5B83go\u7A0B\u4E0D\u4F1A\u53D7\u5F71\u54CD
Gosched:\u4F7F\u5F53\u524Dgo\u7A0B\u653E\u5F03\u5904\u7406\u5668\uFF0C\u4EE5\u8BA9\u5176\u5B83go\u7A0B\u8FD0\u884C
\u591A\u7EBF\u7A0B\u540C\u6B65\u95EE\u9898
\u4E92\u65A5\u9501
\u4E92\u65A5\u9501\u7684\u672C\u8D28\u662F\u5F53\u4E00\u4E2Agoroutine\u8BBF\u95EE\u7684\u65F6\u5019, \u5176\u5B83goroutine\u90FD\u4E0D\u80FD\u8BBF\u95EE
\u8FD9\u6837\u5C31\u80FD\u5B9E\u73B0\u8D44\u6E90\u540C\u6B65, \u4F46\u662F\u5728\u907F\u514D\u8D44\u6E90\u7ADE\u4E89\u7684\u540C\u65F6\u4E5F\u964D\u4F4E\u4E86\u7A0B\u5E8F\u7684\u5E76\u53D1\u6027\u80FD. \u7A0B\u5E8F\u7531\u539F\u6765\u7684\u5E76\u53D1\u6267\u884C\u53D8\u6210\u4E86\u4E32\u884C
\u6848\u4F8B:
\u6709\u4E00\u4E2A\u6253\u5370\u51FD\u6570, \u7528\u4E8E\u9010\u4E2A\u6253\u5370\u5B57\u7B26\u4E32\u4E2D\u7684\u5B57\u7B26, \u6709\u4E24\u4E2A\u4EBA\u90FD\u5F00\u542F\u4E86goroutine\u53BB\u6253\u5370
\u5982\u679C\u6CA1\u6709\u6DFB\u52A0\u4E92\u65A5\u9501, \u90A3\u4E48\u4E24\u4E2A\u4EBA\u90FD\u6709\u673A\u4F1A\u8F93\u51FA\u81EA\u5DF1\u7684\u5185\u5BB9
\u5982\u679C\u6DFB\u52A0\u4E86\u4E92\u65A5\u9501, \u90A3\u4E48\u4F1A\u5148\u8F93\u51FA\u67D0\u4E00\u4E2A\u7684, \u8F93\u51FA\u5B8C\u6BD5\u4E4B\u540E\u518D\u8F93\u51FA\u53E6\u5916\u4E00\u4E2A\u4EBA\u7684 \`</span><span class="token string">\`\`</span><span class="token keyword">go</span> <span class="token keyword">package</span> main <span class="token keyword">import</span> <span class="token punctuation">(</span> <span class="token string">&quot;fmt&quot;</span> <span class="token string">&quot;sync&quot;</span> <span class="token string">&quot;time&quot;</span> <span class="token punctuation">)</span> <span class="token comment">// \u521B\u5EFA\u4E00\u628A\u4E92\u65A5\u9501 var lock sync.Mutex</span>
<span class="token keyword">func</span> <span class="token function">printer</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span> <span class="token comment">// \u8BA9\u5148\u6765\u7684\u4EBA\u62FF\u5230\u9501, \u628A\u5F53\u524D\u51FD\u6570\u9501\u4F4F, \u5176\u5B83\u4EBA\u90FD\u65E0\u6CD5\u6267\u884C // \u4E0A\u5395\u6240\u5173\u95E8 lock.Lock() for _, v := range str{ fmt.Printf(&quot;%c&quot;, v) time.Sleep(time.Millisecond * 500) } // \u5148\u6765\u7684\u4EBA\u6267\u884C\u5B8C\u6BD5\u4E4B\u540E, \u628A\u9501\u91CA\u653E\u6389, \u8BA9\u5176\u5B83\u4EBA\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u5F53\u524D\u51FD\u6570 // \u4E0A\u5395\u6240\u5F00\u95E8 lock.Unlock() } func person1()  { printer(&quot;hello&quot;) } func person2()  { printer(&quot;world&quot;) } func main() { go person1() go person2() for{ ; } }</span>

<span class="token operator">--</span><span class="token operator">-</span>

## \u751F\u4EA7\u8005\u6D88\u8D39\u8005\u95EE\u9898

<span class="token operator">-</span> \u6240\u8C13\u7684\u751F\u4EA7\u8005\u6D88\u8D39\u8005\u6A21\u578B\u5C31\u662F
<span class="token operator">+</span> \u67D0\u4E2A\u6A21\u5757<span class="token punctuation">(</span>\u51FD\u6570<span class="token punctuation">)</span>\u8D1F\u8D23\u751F\u4EA7\u6570\u636E<span class="token punctuation">,</span> \u8FD9\u4E9B\u6570\u636E\u7531\u53E6\u4E00\u4E2A\u6A21\u5757\u6765\u8D1F\u8D23\u5904\u7406
<span class="token operator">+</span> \u4E00\u822C\u751F\u4EA7\u8005\u6D88\u8D39\u8005\u6A21\u578B\u5305\u542B\u4E09\u4E2A\u90E8\u5206<span class="token string">&quot;\u751F\u4EA7\u8005&quot;</span>\u3001<span class="token string">&quot;\u7F13\u51B2\u533A&quot;</span>\u3001<span class="token string">&quot;\u6D88\u8D39\u8005&quot;</span>
  <span class="token operator">!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>img<span class="token operator">-</span>blog<span class="token punctuation">.</span>csdnimg<span class="token punctuation">.</span>cn<span class="token operator">/</span>img_convert<span class="token operator">/</span>c6b9dc46029e893cc11f3a85b7f223f0<span class="token punctuation">.</span>png<span class="token punctuation">)</span>
<span class="token operator">-</span> \u4E3A\u4EC0\u4E48\u751F\u4EA7\u8005\u6D88\u8D39\u8005\u6A21\u578B\u8981\u542B\u4E09\u4E2A\u90E8\u5206?  \u76F4\u63A5\u751F\u4EA7\u548C\u6D88\u8D39\u4E0D\u884C\u4E48?
<span class="token operator">-</span> \u4E00\u4E2A\u6848\u4F8B\u8BF4\u660E\u4E00\u5207
<span class="token operator">+</span> \u751F\u4EA7\u8005\u597D\u6BD4\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u67D0\u4E2A\u4EBA
<span class="token operator">+</span> \u7F13\u51B2\u533A\u597D\u6BD4\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u90AE\u7BB1
<span class="token operator">+</span> \u6D88\u8D39\u8005\u597D\u6BD4\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u90AE\u9012\u5458
<span class="token operator">-</span> \u5982\u679C\u53EA\u6709\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005<span class="token punctuation">,</span> \u90A3\u4E48\u76F8\u5F53\u4E8E\u53EA\u6709\u5199\u4FE1\u7684\u4EBA\u548C\u90AE\u9012\u5458<span class="token punctuation">,</span> \u90A3\u4E48\u5982\u679C\u5C06\u6765\u8FC7\u53BB\u7684\u90AE\u9012\u5458\u79BB\u804C\u4E86<span class="token punctuation">,</span> \u4F60\u60F3\u90AE\u5BC4\u4FE1\u4EF6\u5FC5\u987B\u60F3\u529E\u6CD5\u7ED3\u8BC6\u65B0\u7684\u90AE\u9012\u5458<span class="token punctuation">(</span>\u6D88\u8D39\u8005\u53D1\u751F\u53D8\u5316<span class="token punctuation">,</span> \u4F1A\u76F4\u63A5\u5F71\u54CD\u751F\u4EA7\u8005<span class="token punctuation">,</span> \u8026\u5408\u6027\u592A\u5F3A<span class="token punctuation">)</span>
<span class="token operator">-</span> \u5982\u679C\u5728\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005\u4E4B\u95F4\u6DFB\u52A0\u4E00\u4E2A\u7F13\u51B2\u533A<span class="token punctuation">,</span> \u90A3\u4E48\u5C31\u597D\u6BD4\u6709\u4E86\u90AE\u7BB1<span class="token punctuation">,</span> \u4EE5\u540E\u90AE\u5BC4\u4FE1\u4EF6\u4E0D\u662F\u627E\u90AE\u9012\u5458<span class="token punctuation">,</span> \u53EA\u9700\u628A\u4FE1\u4EF6\u6295\u9012\u5230\u90AE\u7BB1\u4E2D\u5373\u53EF<span class="token punctuation">,</span> \u5199\u4FE1\u7684\u4EBA\u4E0D\u9700\u8981\u5173\u5FC3\u90AE\u9012\u5458\u662F\u8C01<span class="token punctuation">(</span>\u89E3\u8026<span class="token punctuation">)</span>
<span class="token operator">-</span> \u5982\u679C\u53EA\u6709\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005<span class="token punctuation">,</span> \u90A3\u4E48\u6BCF\u4E2A\u4EBA\u90AE\u5BC4\u4FE1\u4EF6\u90FD\u9700\u8981\u76F4\u63A5\u627E\u90AE\u9012\u5458<span class="token punctuation">(</span><span class="token number">1</span>\u5BF9<span class="token number">1</span>\u5173\u7CFB<span class="token punctuation">)</span><span class="token punctuation">,</span> \u5982\u679C\u6709<span class="token number">10</span>\u4E2A\u4EBA\u8981\u90AE\u5BC4\u4FE1\u4EF6<span class="token punctuation">,</span> \u90A3\u4E48\u90AE\u9012\u5458\u53EA\u80FD\u4F9D\u6B21\u627E\u5230\u6BCF\u4E2A\u4EBA<span class="token punctuation">,</span> \u7136\u540E\u624D\u80FD\u53D6\u4EF6<span class="token punctuation">(</span>\u6548\u7387\u4F4E\u4E0B<span class="token punctuation">)</span>
<span class="token operator">-</span> \u5982\u679C\u5728\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005\u4E4B\u95F4\u6DFB\u52A0\u4E00\u4E2A\u7F13\u51B2\u533A<span class="token punctuation">,</span> \u90A3\u4E48\u6240\u6709\u7684\u4EBA\u53EA\u9700\u8981\u5C06\u4FE1\u4EF6\u6295\u9012\u5230\u90AE\u7BB1\u5373\u53EF<span class="token punctuation">,</span> \u90AE\u9012\u5458\u4E0D\u7528\u5173\u5FC3\u6709\u591A\u5C11\u4EBA\u8981\u90AE\u5BC4\u4FE1\u4EF6<span class="token punctuation">,</span> \u4E5F\u4E0D\u7528\u4F9D\u6B21\u53D6\u4EF6<span class="token punctuation">,</span> \u53EA\u9700\u8981\u627E\u5230\u90AE\u7BB1\u4ECE\u90AE\u7BB1\u4E2D\u7EDF\u4E00\u53D6\u4EF6\u5373\u53EF<span class="token punctuation">(</span>\u6548\u7387\u63D0\u9AD8<span class="token punctuation">)</span>
<span class="token operator">-</span> \u5982\u679C\u53EA\u6709\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005<span class="token punctuation">,</span> \u90A3\u4E48\u5982\u679C\u90AE\u5BC4\u4FE1\u4EF6\u592A\u591A\u90AE\u9012\u5458\u65E0\u6CD5\u4E00\u6B21\u62FF\u8D70<span class="token punctuation">,</span> \u8FD9\u4E2A\u65F6\u5019\u975E\u5E38\u96BE\u529E
<span class="token operator">-</span> \u5982\u679C\u5728\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005\u4E4B\u95F4\u6DFB\u52A0\u4E00\u4E2A\u7F13\u51B2\u533A<span class="token punctuation">,</span> \u90A3\u4E48\u5982\u679C\u4FE1\u4EF6\u592A\u591A\u53EF\u4EE5\u5148\u62FF\u8D70\u4E00\u90E8\u5206<span class="token punctuation">,</span> \u5269\u4E0B\u7684\u7EE7\u7EED\u653E\u5230\u90AE\u7BB1\u4E2D\u4E0B\u6B21\u518D\u62FF
<span class="token operator">-</span> <span class="token string">\`\`</span><span class="token string">\`... ...\`</span><span class="token string">\`\`</span>

<span class="token operator">--</span><span class="token operator">-</span>

## \u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005\u8D44\u6E90\u7ADE\u4E89\u95EE\u9898

<span class="token operator">-</span> \u4F8B\u5982\u751F\u4EA7\u6BD4\u8F83\u6162<span class="token punctuation">,</span> \u800C\u6D88\u8D39\u6BD4\u8F83\u5FEB<span class="token punctuation">,</span> \u5C31\u4F1A\u5BFC\u81F4\u6D88\u8D39\u8005\u6D88\u8D39\u5230\u9519\u8BEF\u6570\u636E

<span class="token string">\`\`</span>\`<span class="token keyword">go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;fmt&quot;</span>
  <span class="token string">&quot;math/rand&quot;</span>
  <span class="token string">&quot;sync&quot;</span>
  <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u521B\u5EFA\u4E00\u628A\u4E92\u65A5\u9501</span>
<span class="token keyword">var</span> lock <span class="token operator">=</span> sync<span class="token punctuation">.</span>Mutex<span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u5B9A\u4E49\u7F13\u51B2\u533A</span>
<span class="token keyword">var</span> sce <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4E49\u751F\u4EA7\u8005</span>
<span class="token keyword">func</span> <span class="token function">producer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// \u52A0\u9501, \u6CE8\u610F\u662Flock\u5C31\u662F\u6211\u4EEC\u7684\u9501, \u5168\u5C40\u516C\u7528\u4E00\u628A\u9501</span>
  lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
   num <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
   sce<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> num
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u751F\u4EA7\u8005\u751F\u4EA7\u4E86: &quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
   time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Millisecond <span class="token operator">*</span> <span class="token number">500</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u89E3\u9501</span>
  lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5B9A\u4E49\u6D88\u8D39\u8005</span>
<span class="token keyword">func</span> <span class="token function">consumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
  <span class="token comment">// \u52A0\u9501, \u6CE8\u610F\u548C\u751F\u4EA7\u8005\u4E2D\u7528\u7684\u662F\u540C\u4E00\u628A\u9501</span>
  <span class="token comment">// \u5982\u679C\u751F\u4EA7\u8005\u4E2D\u5DF2\u52A0\u8FC7\u4E86, \u5219\u963B\u585E\u76F4\u5230\u89E3\u9501\u540E\u518D\u91CD\u65B0\u52A0\u9501</span>
  lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
   num <span class="token operator">:=</span> sce<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;---\u6D88\u8D39\u8005\u6D88\u8D39\u4E86&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">go</span> <span class="token function">producer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">go</span> <span class="token function">consumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">{</span>
   <span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
\u601D\u8003<span class="token punctuation">:</span> \u90A3\u5982\u679C\u662F\u4E00\u5BF9\u591A<span class="token punctuation">,</span> \u6216\u8005\u591A\u5BF9\u591A\u7684\u5173\u7CFB<span class="token punctuation">,</span> \u4E0A\u8FF0\u4EE3\u7801\u6709\u95EE\u9898\u4E48?
\u7BA1\u9053<span class="token punctuation">(</span>Channel<span class="token punctuation">)</span>
\u4E0A\u8FF0\u5B9E\u73B0\u5E76\u53D1\u7684\u4EE3\u7801\u4E2D\u4E3A\u4E86\u4FDD\u6301\u4E3B\u7EBF\u7A0B\u4E0D\u6302\u6389<span class="token punctuation">,</span> \u6211\u4EEC\u90FD\u4F1A\u5728\u6700\u540E\u5199\u4E0A\u4E00\u4E2A\u6B7B\u5FAA\u73AF\u6216\u8005\u5199\u4E0A\u4E00\u4E2A\u5B9A\u65F6\u5668\u6765\u5B9E\u73B0\u7B49\u5F85goroutine\u6267\u884C\u5B8C\u6BD5
\u4E0A\u8FF0\u5B9E\u73B0\u5E76\u53D1\u7684\u4EE3\u7801\u4E2D\u4E3A\u4E86\u89E3\u51B3\u751F\u4EA7\u8005\u6D88\u8D39\u8005\u8D44\u6E90\u540C\u6B65\u95EE\u9898<span class="token punctuation">,</span> \u6211\u4EEC\u5229\u7528\u52A0\u9501\u6765\u89E3\u51B3<span class="token punctuation">,</span> \u4F46\u662F\u8FD9\u4EC5\u4EC5\u662F\u4E00\u5BF9\u4E00\u7684\u60C5\u51B5<span class="token punctuation">,</span> \u5982\u679C\u662F\u4E00\u5BF9\u591A\u6216\u8005\u591A\u5BF9\u591A<span class="token punctuation">,</span> \u4E0A\u8FF0\u4EE3\u7801\u8FD8\u662F\u4F1A\u51FA\u73B0\u95EE\u9898
\u7EFC\u4E0A\u6240\u8FF0<span class="token punctuation">,</span> \u4F01\u4E1A\u5F00\u53D1\u4E2D\u9700\u8981\u4E00\u79CD\u66F4\u725BX\u7684\u6280\u672F\u6765\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898<span class="token punctuation">,</span> \u90A3\u5C31\u662F\u7BA1\u9053<span class="token punctuation">(</span>Channel<span class="token punctuation">)</span>
Channel\u7684\u672C\u8D28\u662F\u4E00\u4E2A\u961F\u5217
\u56FE\u7247
Channel\u662F\u7EBF\u7A0B\u5B89\u5168\u7684<span class="token punctuation">,</span> \u4E5F\u5C31\u662F\u81EA\u5E26\u9501\u5B9A\u529F\u80FD
Channel\u58F0\u660E\u548C\u521D\u59CB\u5316
\u58F0\u660E<span class="token punctuation">:</span> <span class="token keyword">var</span> \u53D8\u91CF\u540D<span class="token keyword">chan</span> \u6570\u636E\u7C7B\u578B
\u521D\u59CB\u5316<span class="token punctuation">:</span> mych <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> \u6570\u636E\u7C7B\u578B<span class="token punctuation">,</span> \u5BB9\u91CF<span class="token punctuation">)</span>
Channel\u548C\u5207\u7247\u8FD8\u6709\u5B57\u5178\u4E00\u6837<span class="token punctuation">,</span> \u5FC5\u987B<span class="token builtin">make</span>\u4E4B\u540E\u624D\u80FD\u4F7F\u7528
Channel\u548C\u5207\u7247\u8FD8\u6709\u5B57\u5178\u4E00\u6837<span class="token punctuation">,</span> \u662F\u5F15\u7528\u7C7B\u578B
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// 1.\u58F0\u660E\u4E00\u4E2A\u7BA1\u9053</span>
 <span class="token keyword">var</span> mych <span class="token keyword">chan</span> <span class="token builtin">int</span>
 <span class="token comment">// 2.\u521D\u59CB\u5316\u4E00\u4E2A\u7BA1\u9053</span>
 mych <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
 <span class="token comment">// 3.\u67E5\u770B\u7BA1\u9053\u7684\u957F\u5EA6\u548C\u5BB9\u91CF</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u957F\u5EA6\u662F&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>mych<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5BB9\u91CF\u662F&quot;</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>mych<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token comment">// 4.\u50CF\u7BA1\u9053\u4E2D\u5199\u5165\u6570\u636E</span>
 mych<span class="token operator">&lt;-</span> <span class="token number">666</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u957F\u5EA6\u662F&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>mych<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5BB9\u91CF\u662F&quot;</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>mych<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token comment">// 5.\u53D6\u51FA\u7BA1\u9053\u4E2D\u5199\u5165\u7684\u6570\u636E</span>
 num <span class="token operator">:=</span> <span class="token operator">&lt;-</span>mych
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;num = &quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u957F\u5EA6\u662F&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>mych<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5BB9\u91CF\u662F&quot;</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>mych<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
\u6CE8\u610F\u70B9<span class="token punctuation">:</span>
\u7BA1\u9053\u4E2D\u53EA\u80FD\u5B58\u653E\u58F0\u660E\u7684\u6570\u636E\u7C7B\u578B<span class="token punctuation">,</span> \u4E0D\u80FD\u5B58\u653E\u5176\u5B83\u6570\u636E\u7C7B\u578B
\u7BA1\u9053\u4E2D\u5982\u679C\u5DF2\u7ECF\u6CA1\u6709\u6570\u636E<span class="token punctuation">,</span> \u518D\u53D6\u5C31\u4F1A\u62A5\u9519
\u5982\u679C\u7BA1\u9053\u4E2D\u6570\u636E\u5DF2\u6EE1<span class="token punctuation">,</span> \u518D\u5199\u5165\u5C31\u4F1A\u62A5\u9519
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// 1.\u58F0\u660E\u4E00\u4E2A\u7BA1\u9053</span>
 <span class="token keyword">var</span> mych <span class="token keyword">chan</span> <span class="token builtin">int</span>
 <span class="token comment">// 2.\u521D\u59CB\u5316\u4E00\u4E2A\u7BA1\u9053</span>
 mych <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

 <span class="token comment">// \u6CE8\u610F\u70B9: \u7BA1\u9053\u4E2D\u53EA\u80FD\u5B58\u653E\u58F0\u660E\u7684\u6570\u636E\u7C7B\u578B, \u4E0D\u80FD\u5B58\u653E\u5176\u5B83\u6570\u636E\u7C7B\u578B</span>
 <span class="token comment">//mych&lt;-3.14</span>

 <span class="token comment">// \u6CE8\u610F\u70B9: \u7BA1\u9053\u4E2D\u5982\u679C\u5DF2\u7ECF\u6CA1\u6709\u6570\u636E, </span>
 <span class="token comment">// \u5E76\u4E14\u68C0\u6D4B\u4E0D\u5230\u6709\u5176\u5B83\u534F\u7A0B\u518D\u5F80\u7BA1\u9053\u4E2D\u5199\u5165\u6570\u636E, \u90A3\u4E48\u518D\u53D6\u5C31\u4F1A\u62A5\u9519</span>
 <span class="token comment">//num = &lt;-mych</span>
 <span class="token comment">//fmt.Println(&quot;num = &quot;, num)</span>

 <span class="token comment">// \u6CE8\u610F\u70B9: \u5982\u679C\u7BA1\u9053\u4E2D\u6570\u636E\u5DF2\u6EE1, \u518D\u5199\u5165\u5C31\u4F1A\u62A5\u9519</span>
 mych<span class="token operator">&lt;-</span> <span class="token number">666</span>
 mych<span class="token operator">&lt;-</span> <span class="token number">777</span>
 mych<span class="token operator">&lt;-</span> <span class="token number">888</span>
 mych<span class="token operator">&lt;-</span> <span class="token number">999</span>
<span class="token punctuation">}</span>
\u7BA1\u9053\u7684\u5173\u95ED\u548C\u904D\u5386
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// 1.\u521B\u5EFA\u4E00\u4E2A\u7BA1\u9053</span>
 mych <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
 <span class="token comment">// 2.\u5F80\u7BA1\u9053\u4E2D\u5B58\u5165\u6570\u636E</span>
 mych<span class="token operator">&lt;-</span><span class="token number">666</span>
 mych<span class="token operator">&lt;-</span><span class="token number">777</span>
 mych<span class="token operator">&lt;-</span><span class="token number">888</span>
 <span class="token comment">// 3.\u904D\u5386\u7BA1\u9053</span>
 <span class="token comment">// \u7B2C\u4E00\u6B21\u904D\u5386i\u7B49\u4E8E0, len = 3,</span>
 <span class="token comment">// \u7B2C\u4E8C\u6B21\u904D\u5386i\u7B49\u4E8E1, len = 2</span>
 <span class="token comment">// \u7B2C\u4E09\u6B21\u904D\u5386i\u7B49\u4E8E2, len = 1</span>
 <span class="token comment">//for i:=0; i&lt;len(mych); i++{</span>
 <span class="token comment">// fmt.Println(&lt;-mych) // \u8F93\u51FA\u7ED3\u679C\u4E0D\u6B63\u786E</span>
 <span class="token comment">//}</span>

 <span class="token comment">// 3.\u5199\u5165\u5B8C\u6570\u636E\u4E4B\u540E\u5148\u5173\u95ED\u7BA1\u9053</span>
 <span class="token comment">// \u6CE8\u610F\u70B9: \u7BA1\u9053\u5173\u95ED\u4E4B\u540E\u53EA\u80FD\u8BFB\u4E0D\u80FD\u5199</span>
 <span class="token function">close</span><span class="token punctuation">(</span>mych<span class="token punctuation">)</span>
 <span class="token comment">//mych&lt;- 999 // \u62A5\u9519</span>

 <span class="token comment">// 4.\u904D\u5386\u7BA1\u9053</span>
 <span class="token comment">// \u5229\u7528for range\u904D\u5386, \u5FC5\u987B\u5148\u5173\u95ED\u7BA1\u9053, \u5426\u5219\u4F1A\u62A5\u9519</span>
 <span class="token comment">//for value := range mych{</span>
 <span class="token comment">// fmt.Println(value)</span>
 <span class="token comment">//}</span>

 <span class="token comment">// close\u4E3B\u8981\u7528\u9014:</span>
 <span class="token comment">// \u5728\u4F01\u4E1A\u5F00\u53D1\u4E2D\u6211\u4EEC\u53EF\u80FD\u4E0D\u786E\u5B9A\u7BA1\u9053\u6709\u8FD8\u6CA1\u6709\u6709\u6570\u636E, \u6240\u4EE5\u6211\u4EEC\u53EF\u80FD\u4E00\u76F4\u83B7\u53D6</span>
 <span class="token comment">// \u4F46\u662F\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7ok-idiom\u6A21\u5F0F\u5224\u65AD\u7BA1\u9053\u662F\u5426\u5173\u95ED, \u5982\u679C\u5173\u95ED\u4F1A\u8FD4\u56DEfalse\u7ED9ok</span>
 <span class="token keyword">for</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> num<span class="token punctuation">,</span> ok<span class="token operator">:=</span> <span class="token operator">&lt;-</span>mych<span class="token punctuation">;</span> ok<span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
   <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u8BFB\u53D6\u5B8C\u6BD5&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
Channel\u963B\u585E\u73B0\u8C61
\u5355\u72EC\u5728\u4E3B\u7EBF\u7A0B\u4E2D\u64CD\u4F5C\u7BA1\u9053<span class="token punctuation">,</span> \u5199\u6EE1\u4E86\u4F1A\u62A5\u9519<span class="token punctuation">,</span> \u6CA1\u6709\u6570\u636E\u53BB\u83B7\u53D6\u4E5F\u4F1A\u62A5\u9519
\u53EA\u8981\u5728\u534F\u7A0B\u4E2D\u64CD\u4F5C\u7BA1\u9053\u8FC7<span class="token punctuation">,</span> \u5199\u6EE1\u4E86\u5C31\u4F1A\u963B\u585E<span class="token punctuation">,</span> \u6CA1\u6709\u5C31\u6570\u636E\u53BB\u83B7\u53D6\u4E5F\u4F1A\u963B\u585E
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u7BA1\u9053</span>
<span class="token keyword">var</span> myCh <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 <span class="token keyword">var</span> myCh <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
 <span class="token comment">//myCh&lt;-111</span>
 <span class="token comment">//myCh&lt;-222</span>
 <span class="token comment">//myCh&lt;-333</span>
 <span class="token comment">//myCh&lt;-444</span>
 <span class="token comment">//myCh&lt;-555</span>
 <span class="token comment">//fmt.Println(&quot;\u6211\u662F\u7B2C\u516D\u6B21\u6DFB\u52A0\u4E4B\u524D\u4EE3\u7801&quot;)</span>
 <span class="token comment">//myCh&lt;-666</span>
 <span class="token comment">//fmt.Println(&quot;\u6211\u662F\u7B2C\u516D\u6B21\u6DFB\u52A0\u4E4B\u540E\u4EE3\u7801&quot;)</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u662F\u7B2C\u516D\u6B21\u76F4\u63A5\u83B7\u53D6\u4E4B\u524D\u4EE3\u7801&quot;</span><span class="token punctuation">)</span>
 <span class="token operator">&lt;-</span>myCh
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u662F\u7B2C\u516D\u6B21\u76F4\u63A5\u83B7\u53D6\u4E4B\u540E\u4EE3\u7801&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 <span class="token comment">//myCh&lt;-111</span>
 <span class="token comment">//myCh&lt;-222</span>
 <span class="token comment">//myCh&lt;-333</span>
 <span class="token comment">//myCh&lt;-444</span>
 <span class="token comment">//myCh&lt;-555</span>
 <span class="token comment">//fmt.Println(&quot;\u6211\u662F\u7B2C\u516D\u6B21\u6DFB\u52A0\u4E4B\u524D\u4EE3\u7801&quot;)</span>
 <span class="token comment">//myCh&lt;-666</span>
 <span class="token comment">//fmt.Println(&quot;\u6211\u662F\u7B2C\u516D\u6B21\u6DFB\u52A0\u4E4B\u540E\u4EE3\u7801&quot;)</span>

 <span class="token comment">//fmt.Println(&quot;\u6211\u662F\u7B2C\u516D\u6B21\u76F4\u63A5\u83B7\u53D6\u4E4B\u524D\u4EE3\u7801&quot;)</span>
 <span class="token comment">//&lt;-myCh</span>
 <span class="token comment">//fmt.Println(&quot;\u6211\u662F\u7B2C\u516D\u6B21\u76F4\u63A5\u83B7\u53D6\u4E4B\u540E\u4EE3\u7801&quot;)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
 myCh<span class="token operator">&lt;-</span><span class="token number">666</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// 1.\u540C\u4E00\u4E2Ago\u7A0B\u4E2D\u64CD\u4F5C\u7BA1\u9053</span>
 <span class="token comment">// \u5199\u6EE1\u4E86\u4F1A\u62A5\u9519</span>
 <span class="token comment">//myCh&lt;-111</span>
 <span class="token comment">//myCh&lt;-222</span>
 <span class="token comment">//myCh&lt;-333</span>
 <span class="token comment">//myCh&lt;-444</span>
 <span class="token comment">//myCh&lt;-555</span>
 <span class="token comment">//myCh&lt;-666</span>

 <span class="token comment">// \u6CA1\u6709\u4E86\u53BB\u53D6\u4E5F\u4F1A\u62A5\u9519</span>
 <span class="token comment">//&lt;-myCh</span>

 <span class="token comment">// 2.\u5728\u534F\u7A0B\u4E2D\u64CD\u4F5C\u7BA1\u9053</span>
 <span class="token comment">// \u5199\u6EE1\u4E86\u4E0D\u4F1A\u62A5\u9519, \u4F46\u662F\u4F1A\u963B\u585E</span>
 <span class="token comment">//go test()</span>

 <span class="token comment">// \u6CA1\u6709\u4E86\u53BB\u53D6\u4E5F\u4E0D\u4F1A\u62A5\u9519, \u4E5F\u4F1A\u963B\u585E</span>
 <span class="token comment">//go test()</span>

 <span class="token comment">//go demo()</span>
 <span class="token comment">//go demo()</span>
 
 <span class="token comment">// 3.\u53EA\u8981\u5728\u534F\u7A0B\u4E2D\u64CD\u4F5C\u4E86\u7BA1\u9053, \u5C31\u4F1A\u53D1\u751F\u963B\u585E\u73B0\u8C61</span>
 <span class="token keyword">go</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;myCh\u4E4B\u524D\u4EE3\u7801&quot;</span><span class="token punctuation">)</span>
 <span class="token operator">&lt;-</span>myCh
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;myCh\u4E4B\u540E\u4EE3\u7801&quot;</span><span class="token punctuation">)</span>

 <span class="token comment">//for{</span>
 <span class="token comment">// ;</span>
 <span class="token comment">//}</span>
<span class="token punctuation">}</span>
\u5229\u7528Channel\u5B9E\u73B0\u751F\u4EA7\u8005\u6D88\u8D39\u8005
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;math/rand&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u5B9A\u4E49\u7F13\u51B2\u533A</span>
<span class="token keyword">var</span> myCh <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> exitCh <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4E49\u751F\u4EA7\u8005</span>
<span class="token keyword">func</span> <span class="token function">producer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
  num <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u751F\u4EA7\u8005\u751F\u4EA7\u4E86: &quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token comment">// \u5F80\u7BA1\u9053\u4E2D\u5199\u5165\u6570\u636E</span>
  myCh<span class="token operator">&lt;-</span>num
  <span class="token comment">//time.Sleep(time.Millisecond * 500)</span>
 <span class="token punctuation">}</span>
 <span class="token comment">// \u751F\u4EA7\u5B8C\u6BD5\u4E4B\u540E\u5173\u95ED\u7BA1\u9053</span>
 <span class="token function">close</span><span class="token punctuation">(</span>myCh<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u751F\u4EA7\u8005\u505C\u6B62\u751F\u4EA7&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5B9A\u4E49\u6D88\u8D39\u8005</span>
<span class="token keyword">func</span> <span class="token function">consumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 <span class="token comment">// \u4E0D\u65AD\u4ECE\u7BA1\u9053\u4E2D\u83B7\u53D6\u6570\u636E, \u76F4\u5230\u7BA1\u9053\u5173\u95ED\u4F4D\u7F6E</span>
 <span class="token keyword">for</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> num<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>myCh<span class="token punctuation">;</span> <span class="token operator">!</span>ok<span class="token punctuation">{</span>
   <span class="token keyword">break</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;---\u6D88\u8D39\u8005\u6D88\u8D39\u4E86&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D88\u8D39\u8005\u505C\u6B62\u6D88\u8D39&quot;</span><span class="token punctuation">)</span>
 exitCh<span class="token operator">&lt;-</span><span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">go</span> <span class="token function">producer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">go</span> <span class="token function">consumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;exitCh\u4E4B\u524D\u4EE3\u7801&quot;</span><span class="token punctuation">)</span>
 <span class="token operator">&lt;-</span>exitCh
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;exitCh\u4E4B\u540E\u4EE3\u7801&quot;</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
\u65E0\u7F13\u51B2Channel
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">var</span> myCh1 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> myCh2 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// \u6709\u7F13\u51B2\u7BA1\u9053</span>
 <span class="token comment">// \u53EA\u5199\u5165, \u4E0D\u8BFB\u53D6\u4E0D\u4F1A\u62A5\u9519</span>
 <span class="token comment">//myCh1&lt;-1</span>
 <span class="token comment">//myCh1&lt;-2</span>
 <span class="token comment">//myCh1&lt;-3</span>
 <span class="token comment">//myCh1&lt;-4</span>
 <span class="token comment">//myCh1&lt;-5</span>
 <span class="token comment">//fmt.Println(&quot;len =&quot;,len(myCh1), &quot;cap =&quot;, cap(myCh1))</span>

 <span class="token comment">// \u65E0\u7F13\u51B2\u7BA1\u9053</span>
 <span class="token comment">// \u53EA\u6709\u4E24\u7AEF\u540C\u65F6\u51C6\u5907\u597D\u624D\u4E0D\u4F1A\u62A5\u9519</span>
 <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>myCh2<span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment">// \u53EA\u5199\u5165, \u4E0D\u8BFB\u53D6\u4F1A\u62A5\u9519</span>
 myCh2<span class="token operator">&lt;-</span><span class="token number">1</span>
 <span class="token comment">//fmt.Println(&quot;len =&quot;,len(myCh2), &quot;cap =&quot;, cap(myCh2))</span>
 <span class="token comment">// \u5199\u5165\u4E4B\u540E\u5728\u540C\u4E00\u4E2A\u7EBF\u7A0B\u8BFB\u53D6\u4E5F\u4F1A\u62A5\u9519</span>
 <span class="token comment">//fmt.Println(&lt;-myCh2)</span>
 <span class="token comment">// \u5728\u4E3B\u7A0B\u4E2D\u5148\u5199\u5165, \u5728\u5B50\u7A0B\u4E2D\u540E\u8BFB\u53D6\u4E5F\u4F1A\u62A5\u9519</span>
 <span class="token comment">//go func() {</span>
 <span class="token comment">// fmt.Println(&lt;-myCh2)</span>
 <span class="token comment">//}()</span>
<span class="token punctuation">}</span>
\u65E0\u7F13\u51B2Channel\u548C\u6709\u7F13\u51B2Channel
\u6709\u7F13\u51B2\u7BA1\u9053\u5177\u5907\u5F02\u6B65\u7684\u80FD\u529B<span class="token punctuation">(</span>\u5199\u51E0\u4E2A\u8BFB\u4E00\u4E2A\u6216\u8BFB\u51E0\u4E2A<span class="token punctuation">)</span>
\u65E0\u7F13\u51B2\u7BA1\u9053\u5177\u5907\u540C\u6B65\u7684\u80FD\u529B<span class="token punctuation">(</span>\u5199\u4E00\u4E2A\u8BFB\u4E00\u4E2A<span class="token punctuation">)</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;math/rand&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u5B9A\u4E49\u7F13\u51B2\u533A</span>
<span class="token comment">//var myCh = make(chan int, 0)</span>
<span class="token keyword">var</span> myCh <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> exitCh <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4E49\u751F\u4EA7\u8005</span>
<span class="token keyword">func</span> <span class="token function">producer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
  num <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u751F\u4EA7\u8005\u751F\u4EA7\u4E86: &quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token comment">// \u5F80\u7BA1\u9053\u4E2D\u5199\u5165\u6570\u636E</span>
  myCh<span class="token operator">&lt;-</span>num
  <span class="token comment">//time.Sleep(time.Millisecond * 500)</span>
 <span class="token punctuation">}</span>
 <span class="token comment">// \u751F\u4EA7\u5B8C\u6BD5\u4E4B\u540E\u5173\u95ED\u7BA1\u9053</span>
 <span class="token function">close</span><span class="token punctuation">(</span>myCh<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u751F\u4EA7\u8005\u505C\u6B62\u751F\u4EA7&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5B9A\u4E49\u6D88\u8D39\u8005</span>
<span class="token keyword">func</span> <span class="token function">consumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 <span class="token comment">// \u4E0D\u65AD\u4ECE\u7BA1\u9053\u4E2D\u83B7\u53D6\u6570\u636E, \u76F4\u5230\u7BA1\u9053\u5173\u95ED\u4F4D\u7F6E</span>
 <span class="token keyword">for</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> num<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>myCh<span class="token punctuation">;</span> <span class="token operator">!</span>ok<span class="token punctuation">{</span>
   <span class="token keyword">break</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;---\u6D88\u8D39\u8005\u6D88\u8D39\u4E86&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D88\u8D39\u8005\u505C\u6B62\u6D88\u8D39&quot;</span><span class="token punctuation">)</span>
 exitCh<span class="token operator">&lt;-</span><span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">go</span> <span class="token function">producer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">go</span> <span class="token function">consumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;exitCh\u4E4B\u524D\u4EE3\u7801&quot;</span><span class="token punctuation">)</span>
 <span class="token operator">&lt;-</span>exitCh
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;exitCh\u4E4B\u540E\u4EE3\u7801&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
IO\u7684\u5EF6\u8FDF\u8BF4\u660E<span class="token punctuation">:</span> \u770B\u5230\u7684\u8F93\u51FA\u7ED3\u679C\u548C\u6211\u4EEC\u60F3\u8C61\u7684\u4E0D\u592A\u4E00\u6837<span class="token punctuation">,</span> \u662F\u56E0\u4E3AIO\u8F93\u51FA\u975E\u5E38\u6D88\u8017\u6027\u80FD<span class="token punctuation">,</span> \u8F93\u51FA\u4E4B\u540E\u8FD8\u6CA1\u6765\u5F97\u53CA\u8D4B\u503C\u53EF\u80FD\u5C31\u8DD1\u53BB\u6267\u884C\u522B\u7684\u534F\u7A0B\u4E86
\u5355\u5411\u7BA1\u9053\u548C\u53CC\u5411\u7BA1\u9053
\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6240\u6709\u7BA1\u9053\u90FD\u662F\u53CC\u5411\u4E86<span class="token punctuation">(</span>\u53EF\u8BFB\u53EF\u5199<span class="token punctuation">)</span>
\u4F46\u662F\u5728\u4F01\u4E1A\u5F00\u53D1\u4E2D<span class="token punctuation">,</span> \u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u7528\u5230\u5C06\u4E00\u4E2A\u7BA1\u9053\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012
\u5728\u4F20\u9012\u7684\u8FC7\u7A0B\u4E2D\u5E0C\u671B\u5BF9\u65B9\u53EA\u80FD\u5355\u5411\u4F7F\u7528<span class="token punctuation">,</span> \u8981\u4E48\u53EA\u80FD\u5199<span class="token punctuation">,</span>\u8981\u4E48\u53EA\u80FD\u8BFB
\u53CC\u5411\u7BA1\u9053
<span class="token keyword">var</span> myCh <span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
\u5355\u5411\u7BA1\u9053
<span class="token keyword">var</span> myCh <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> myCh <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
\u6CE8\u610F\u70B9<span class="token punctuation">:</span>
\u53CC\u5411\u7BA1\u9053\u53EF\u4EE5\u81EA\u52A8\u8F6C\u6362\u4E3A\u4EFB\u610F\u4E00\u79CD\u5355\u5411\u7BA1\u9053
\u5355\u5411\u7BA1\u9053\u4E0D\u80FD\u8F6C\u6362\u4E3A\u53CC\u5411\u7BA1\u9053
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// 1.\u5B9A\u4E49\u4E00\u4E2A\u53CC\u5411\u7BA1\u9053</span>
 <span class="token keyword">var</span> myCh <span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

 <span class="token comment">// 2.\u5C06\u53CC\u5411\u7BA1\u9053\u8F6C\u6362\u5355\u5411\u7BA1\u9053</span>
 <span class="token keyword">var</span> myCh2 <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span>
 myCh2 <span class="token operator">=</span> myCh
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myCh2<span class="token punctuation">)</span>
 <span class="token keyword">var</span> myCh3 <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span>
 myCh3 <span class="token operator">=</span> myCh
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myCh3<span class="token punctuation">)</span>

 <span class="token comment">// 3.\u53CC\u5411\u7BA1\u9053,\u53EF\u8BFB\u53EF\u5199</span>
 myCh<span class="token operator">&lt;-</span><span class="token number">1</span>
 myCh<span class="token operator">&lt;-</span><span class="token number">2</span>
 myCh<span class="token operator">&lt;-</span><span class="token number">3</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>myCh<span class="token punctuation">)</span>
 
 <span class="token comment">// 3.\u53EA\u5199\u7BA1\u9053,\u53EA\u80FD\u5199, \u4E0D\u80FD\u8BFB</span>
 <span class="token comment">// myCh2&lt;-666</span>
 <span class="token comment">// fmt.Println(&lt;-myCh2)</span>

 <span class="token comment">// 4.\u6307\u8BFB\u7BA1\u9053, \u53EA\u80FD\u8BFB,\u4E0D\u80FD\u5199</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>myCh3<span class="token punctuation">)</span>
 <span class="token comment">//myCh3&lt;-666</span>
 
 <span class="token comment">// \u6CE8\u610F\u70B9: \u7BA1\u9053\u4E4B\u95F4\u8D4B\u503C\u662F\u5730\u5740\u4F20\u9012, \u4EE5\u4E0A\u4E09\u4E2A\u7BA1\u9053\u5E95\u5C42\u6307\u5411\u76F8\u540C\u5BB9\u5668</span>
<span class="token punctuation">}</span>
\u5355\u5411\u7BA1\u9053\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;math/rand&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u5B9A\u4E49\u751F\u4EA7\u8005</span>
<span class="token keyword">func</span> <span class="token function">producer</span><span class="token punctuation">(</span>myCh <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
  num <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u751F\u4EA7\u8005\u751F\u4EA7\u4E86: &quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token comment">// \u5F80\u7BA1\u9053\u4E2D\u5199\u5165\u6570\u636E</span>
  myCh<span class="token operator">&lt;-</span>num
  <span class="token comment">//time.Sleep(time.Millisecond * 500)</span>
 <span class="token punctuation">}</span>
 <span class="token comment">// \u751F\u4EA7\u5B8C\u6BD5\u4E4B\u540E\u5173\u95ED\u7BA1\u9053</span>
 <span class="token function">close</span><span class="token punctuation">(</span>myCh<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u751F\u4EA7\u8005\u505C\u6B62\u751F\u4EA7&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5B9A\u4E49\u6D88\u8D39\u8005</span>
<span class="token keyword">func</span> <span class="token function">consumer</span><span class="token punctuation">(</span>myCh <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 <span class="token comment">// \u4E0D\u65AD\u4ECE\u7BA1\u9053\u4E2D\u83B7\u53D6\u6570\u636E, \u76F4\u5230\u7BA1\u9053\u5173\u95ED\u4F4D\u7F6E</span>
 <span class="token keyword">for</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> num<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>myCh<span class="token punctuation">;</span> <span class="token operator">!</span>ok<span class="token punctuation">{</span>
   <span class="token keyword">break</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;---\u6D88\u8D39\u8005\u6D88\u8D39\u4E86&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D88\u8D39\u8005\u505C\u6B62\u6D88\u8D39&quot;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// \u5B9A\u4E49\u7F13\u51B2\u533A</span>
 <span class="token keyword">var</span> myCh <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
 <span class="token keyword">go</span> <span class="token function">producer</span><span class="token punctuation">(</span>myCh<span class="token punctuation">)</span>
 <span class="token function">consumer</span><span class="token punctuation">(</span>myCh<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">select</span>\u9009\u62E9\u7ED3\u6784
<span class="token keyword">select</span>\u662FGo\u4E2D\u7684\u4E00\u4E2A\u63A7\u5236\u7ED3\u6784\uFF0C\u7C7B\u4F3C\u4E8E<span class="token keyword">switch</span>\u8BED\u53E5\uFF0C\u7528\u4E8E\u5904\u7406\u5F02\u6B65IO\u64CD\u4F5C
\u5982\u679C\u6709\u591A\u4E2A<span class="token keyword">case</span>\u90FD\u53EF\u4EE5\u8FD0\u884C\uFF0C<span class="token keyword">select</span>\u4F1A\u968F\u673A\u9009\u51FA\u4E00\u4E2A\u6267\u884C\uFF0C\u5176\u4ED6\u4E0D\u4F1A\u6267\u884C\u3002
\u5982\u679C\u6CA1\u6709\u53EF\u8FD0\u884C\u7684<span class="token keyword">case</span>\u8BED\u53E5\uFF0C\u4E14\u6709<span class="token keyword">default</span>\u8BED\u53E5\uFF0C\u90A3\u4E48\u5C31\u4F1A\u6267\u884C<span class="token keyword">default</span>\u7684\u52A8\u4F5C\u3002
\u5982\u679C\u6CA1\u6709\u53EF\u8FD0\u884C\u7684<span class="token keyword">case</span>\u8BED\u53E5\uFF0C\u4E14\u6CA1\u6709<span class="token keyword">default</span>\u8BED\u53E5\uFF0C<span class="token keyword">select</span>\u5C06\u963B\u585E\uFF0C\u76F4\u5230\u67D0\u4E2A<span class="token keyword">case</span>\u901A\u4FE1\u53EF\u4EE5\u8FD0\u884C
 <span class="token keyword">select</span> <span class="token punctuation">{</span>
 <span class="token keyword">case</span> IO\u64CD\u4F5C<span class="token number">1</span><span class="token punctuation">:</span>
  IO\u64CD\u4F5C<span class="token number">1</span>\u8BFB\u53D6\u6216\u5199\u5165\u6210\u529F\u5C31\u6267\u884C
 <span class="token keyword">case</span> IO\u64CD\u4F5C<span class="token number">2</span><span class="token punctuation">:</span>
  IO\u64CD\u4F5C<span class="token number">2</span>\u8BFB\u53D6\u6216\u5199\u5165\u6210\u529F\u5C31\u6267\u884C
 <span class="token keyword">default</span><span class="token punctuation">:</span>
  \u5982\u679C\u4E0A\u9762<span class="token keyword">case</span>\u90FD\u6CA1\u6709\u6210\u529F\uFF0C\u5219\u8FDB\u5165<span class="token keyword">default</span>\u5904\u7406\u6D41\u7A0B
 <span class="token punctuation">}</span>
\u6CE8\u610F\u70B9<span class="token punctuation">:</span>
<span class="token keyword">select</span>\u7684<span class="token keyword">case</span>\u540E\u9762\u5FC5\u987B\u662F\u4E00\u4E2AIO\u64CD\u4F5C
\u4E00\u822C\u60C5\u51B5\u4E0B\u4F7F\u7528<span class="token keyword">select</span>\u7ED3\u6784\u4E0D\u7528\u5199<span class="token keyword">default</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// \u521B\u5EFA\u7BA1\u9053</span>
 <span class="token keyword">var</span> myCh <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
 <span class="token keyword">var</span> exitCh <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>

 <span class="token comment">// \u751F\u4EA7\u6570\u636E</span>
 <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
   myCh<span class="token operator">&lt;-</span>i
   time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//close(myCh)</span>
  exitCh<span class="token operator">&lt;-</span><span class="token boolean">true</span>
 <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">// \u8BFB\u53D6\u6570\u636E</span>
 <span class="token keyword">for</span><span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BFB\u53D6\u4EE3\u7801\u88AB\u6267\u884C\u4E86&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">select</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> num<span class="token operator">:=</span> <span class="token operator">&lt;-</span>myCh<span class="token punctuation">:</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BFB\u5230\u4E86&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token keyword">case</span> <span class="token operator">&lt;-</span>exitCh<span class="token punctuation">:</span>
   <span class="token comment">//break // \u6CA1\u7528, \u8DF3\u51FA\u7684\u662Fselect</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">select</span>\u5E94\u7528\u573A\u666F
\u5B9E\u73B0\u591A\u8DEF\u76D1\u542C
\u5B9E\u73B0\u8D85\u65F6\u5904\u7406
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;runtime&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// 1.\u521B\u5EFA\u7BA1\u9053</span>
 myCh <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
 exitCh <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>

 <span class="token comment">// 2.\u751F\u6210\u6570\u636E</span>
 <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
   myCh<span class="token operator">&lt;-</span>i
   time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">// 3.\u83B7\u53D6\u6570\u636E</span>
 <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">{</span>
   <span class="token keyword">select</span> <span class="token punctuation">{</span>
   <span class="token keyword">case</span> num<span class="token operator">:=</span> <span class="token operator">&lt;-</span>myCh<span class="token punctuation">:</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
   <span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    exitCh<span class="token operator">&lt;-</span><span class="token boolean">true</span>
    runtime<span class="token punctuation">.</span><span class="token function">Goexit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token operator">&lt;-</span>exitCh
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7A0B\u5E8F\u7ED3\u675F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
\u5B9A\u65F6\u5668\u8865\u5145
\u4E00\u6B21\u6027\u5B9A\u65F6\u5668
NewTimer\u51FD\u6570
<span class="token keyword">func</span> <span class="token function">NewTimer</span><span class="token punctuation">(</span>d Duration<span class="token punctuation">)</span> <span class="token operator">*</span>Timer
NewTimer\u521B\u5EFA\u4E00\u4E2ATimer\uFF0C\u5B83\u4F1A\u5728\u5230\u671F\u540E\u5411Timer\u81EA\u8EAB\u7684C\u5B57\u6BB5\u53D1\u9001\u5F53\u65F6\u7684\u65F6\u95F4
<span class="token keyword">type</span> Timer <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 C <span class="token operator">&lt;-</span><span class="token keyword">chan</span> Time <span class="token comment">// \u5BF9\u4E8E\u6211\u4EEC\u6765\u8BF4, \u8FD9\u4E2A\u5C5E\u6027\u662F\u53EA\u8BFB\u7684\u7BA1\u9053</span>
 r runtimeTimer
<span class="token punctuation">}</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F00\u59CB\u65F6\u95F4&quot;</span><span class="token punctuation">,</span> start<span class="token punctuation">)</span>
 timer <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTimer</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BFB\u53D6\u4E4B\u524D\u4EE3\u7801\u88AB\u6267\u884C&quot;</span><span class="token punctuation">)</span>
 end <span class="token operator">:=</span> <span class="token operator">&lt;-</span>timer<span class="token punctuation">.</span>C <span class="token comment">// \u7CFB\u7EDF\u5199\u5165\u6570\u636E\u4E4B\u524D\u4F1A\u963B\u585E</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BFB\u53D6\u4E4B\u540E\u4EE3\u7801\u88AB\u6267\u884C&quot;</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7ED3\u675F\u65F6\u95F4&quot;</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
After\u51FD\u6570
<span class="token keyword">func</span> <span class="token function">After</span><span class="token punctuation">(</span>d Duration<span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> Time
\u5E95\u5C42\u5C31\u662F\u5BF9NewTimer\u7684\u5C01\u88C5<span class="token punctuation">,</span> \u53EA\u4E0D\u8FC7\u8FD4\u56DE\u503C\u4E0D\u540C\u800C\u5DF2
<span class="token keyword">func</span> <span class="token function">After</span><span class="token punctuation">(</span>d Duration<span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> Time <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token function">NewTimer</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">.</span>C
<span class="token punctuation">}</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F00\u59CB\u65F6\u95F4&quot;</span><span class="token punctuation">,</span> start<span class="token punctuation">)</span>
 timer <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BFB\u53D6\u4E4B\u524D\u4EE3\u7801\u88AB\u6267\u884C&quot;</span><span class="token punctuation">)</span>
 end <span class="token operator">:=</span> <span class="token operator">&lt;-</span>timer <span class="token comment">// \u7CFB\u7EDF\u5199\u5165\u6570\u636E\u4E4B\u524D\u4F1A\u963B\u585E</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BFB\u53D6\u4E4B\u540E\u4EE3\u7801\u88AB\u6267\u884C&quot;</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7ED3\u675F\u65F6\u95F4&quot;</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
\u5468\u671F\u6027\u5B9A\u65F6\u5668
NewTicker\u51FD\u6570
<span class="token keyword">func</span> <span class="token function">NewTicker</span><span class="token punctuation">(</span>d Duration<span class="token punctuation">)</span> <span class="token operator">*</span>Ticker
\u548CNewTimer\u5DEE\u4E0D\u591A<span class="token punctuation">,</span> \u53EA\u4E0D\u8FC7NewTimer\u53EA\u4F1A\u5F80\u7BA1\u9053\u4E2D\u5199\u5165\u4E00\u6B21\u6570\u636E<span class="token punctuation">,</span> \u800CNewTicker\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u5C31\u4F1A\u5199\u4E00\u6B21
<span class="token keyword">type</span> Ticker <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    C <span class="token operator">&lt;-</span><span class="token keyword">chan</span> Time <span class="token comment">// \u5468\u671F\u6027\u4F20\u9012\u65F6\u95F4\u4FE1\u606F\u7684\u901A\u9053</span>
    <span class="token comment">// \u5185\u542B\u9690\u85CF\u6216\u975E\u5BFC\u51FA\u5B57\u6BB5</span>
<span class="token punctuation">}</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// 1.\u521B\u5EFA\u4E00\u4E2A\u5468\u671F\u5B9A\u65F6\u5668</span>
 ticker <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTicker</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
 <span class="token comment">// 2.\u4E0D\u65AD\u4ECE\u91CD\u542F\u5B9A\u65F6\u5668\u4E2D\u83B7\u53D6\u65F6\u95F4</span>
 <span class="token keyword">for</span><span class="token punctuation">{</span>
  t <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ticker<span class="token punctuation">.</span>C <span class="token comment">// \u7CFB\u7EDF\u5199\u5165\u6570\u636E\u4E4B\u524D\u4F1A\u963B\u585E</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
\u6700\u540E\uFF0C\u7801\u5B57\u4E0D\u6613\uFF0C\u70B9\u8D5E\uFF0C\u5728\u770B\uFF0C\u5173\u6CE8\uFF0C\u8F6C\u53D1\u3001\u4E00\u952E\u56DB\u8FDE\u652F\u6301\u3002

\u6536\u5F55\u4E8E\u5408\u96C6 #<span class="token keyword">go</span>\u8BED\u8A00
 
<span class="token number">2</span>
\u4E2A
\u4E0B\u4E00\u7BC7
Go \u8BED\u8A00\u4FDD\u59C6\u7EA7\u6559\u7A0B\uFF08<span class="token number">2021</span>\u7248\u4E0A\uFF09
\u9605\u8BFB <span class="token number">556</span>
<span class="token number">18</span>
<span class="token number">9</span>
</code></pre></div>`,12),e=[p];function c(u,r,i,l,m,k){return s(),t("div",null,e)}var g=n(o,[["render",c]]);export{q as __pageData,g as default};
