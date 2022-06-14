---
title: golang学习之路之基础篇
---

# {{$frontmatter.title}}

## 一丶 输出 Hello World

:::demo Hello World

```go
package main

import "fmt"

func main() {
	var n1 int32 = 12
	var n2 int64
	var n3 int8
	n2 = int64(n1 + 20)
	n3 = int8(n1 + 10)
	fmt.Println("Hello, World")
	fmt.Printf("n2=%d, n3=%d\n", n2, n3)
}
```

:::

## 二丶迭代器

:::demo 循环
```go
package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	fmt.Println(os.Args)
  // os.Args 的第一个数是：/var/folders/6j/z0r0dtds5n5fx2qfc6y6tybh0000gn/T/go-build880041827/b001/exe/study1
	fmt.Println(strings.Join(os.Args[1:], " "))
	example1()
	example2()
	example3()
}

// 迭代1
func example1() {
	// 字符串初始化就是""
	var str, sep string

	for i := 1; i < len(os.Args); i++ {
		str += sep + os.Args[i]
		sep = " "
	}
	fmt.Println(str)
}

// 迭代二

func example2() {
	s, sep := "", ""
	for _, value := range os.Args[1:] {
		s += sep + value
		sep = " "
	}
	fmt.Println(s)
}

// 迭代3
func example3() {
	for key, value := range os.Args[1:] {
		fmt.Printf("key: %d, value: %s \n", key, value)
	}
}

```
:::

## 三丶传递参数file，并找出重复项

:::demo 示例
```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

/**
找出重复项
*/

func main() {
	//创建一个map
	counts := make(map[string]int)
	//获取文件列表
	files := os.Args[1:]
	if len(files) == 0 {

	} else {
		for _, value := range files {
			//打开文件
			f, err := os.Open(value)
			if err != nil {
				_, err = fmt.Fprintf(os.Stderr, "dup2: %v\n", err)
				if err != nil {
					fmt.Println("Fprintf函数使用失败")
				}
				continue
			}
			countLines(f, counts)
			err = f.Close()
			if err != nil {
				fmt.Printf("[%s]文件关闭失败", value)
			}
		}
	}
	if len(counts) > 0 {
		for line, value := range counts {
			if value > 1 {
				fmt.Printf("line: %s, n: %d\n", line, value)
			}
		}
	}
}

func countLines(f *os.File, counts map[string]int) {
	inputs := bufio.NewScanner(f)
	for inputs.Scan() {
    // 逐行读取数据
		counts[inputs.Text()]++
	}
}

// 上面方法的简易实现

func simple() {
	counts := make(map[string]int)
	for _, value := range os.Args[1:] {
		data, err := ioutil.ReadFile(value)
		if err != nil {
			fmt.Fprintf(os.Stderr, "dup3: %v\n", err)
		}
		for _, item := range strings.Split(string(data), "\n") {
			counts[item]++
		}
	}
	for line, value := range counts {
		if value > 1 {
			fmt.Printf("line: %s, n: %d \n", line, value)
		}
	}
}
```
:::

## 四丶web页面输出利莎图

:::demo 示例
```go
package main

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
	WhiteIndex = 0 // 画板中的第一种颜色
	BlackIndex = 1 //画板中的第二种颜色
)

func main() {
  // 为下面的rand.Float64方法生成随机数
	rand.Seed(time.Now().UTC().UnixNano())
	if len(os.Args) > 1 && os.Args[1] == "web" {
    // 匿名函数
		handler := func(w http.ResponseWriter, r *http.Request) {
			lissajous(w)
		}

    // 添加监听的路由
		http.HandleFunc("/", handler)

    // 监听地址
		log.Fatal(http.ListenAndServe("localhost:8000", nil))
		return
	}
}

func lissajous(out io.Writer) {
	const (
		cycles = 5    //完整的x振荡器变化的个数
		res    = 0.01 //角度分辨率
		size   = 100  //图像画布包含[-size...+size]
		frames = 64   //动画的帧数
		delay  = 8    //以10ms为单位的帧间延迟
	)
	freq := rand.Float64() * 3.0 //y振荡器的相对频率
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

```
:::

## 五丶Http请求


:::demo 示例一
```go
package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

func main() {
  // 根据终端的参数获取请求url地址
	for _, url := range os.Args[1:] {
		resp, err := http.Get(url)
		if err != nil {
			fmt.Fprintf(os.Stderr, "fetch: %v\n", err)
			os.Exit(1)
		}

    // 读取response
		body, err := ioutil.ReadAll(resp.Body)

    // 关闭ioutil读取的数据
		resp.Body.Close()
		if err != nil {
			fmt.Fprintf(os.Stderr, "fetch1: reading %s %v\n", url, err)
		}
		fmt.Printf("%s", body)
	}
}

```
:::

:::demo 示例二
```go
package main

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
			fmt.Fprintf(os.Stderr, "fetch: %v\n", err)
			os.Exit(1)
		}
		body, err := ioutil.ReadAll(resp.Body)
		resp.Body.Close()
		if err != nil {
			fmt.Fprintf(os.Stderr, "fetch1: reading %s %v\n", url, err)
		}
		fmt.Printf("%s", body)
	}
}

```
:::

:::demo示例三
```go
package main

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

//测试
func handlerSimply(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "method: %s, url: %s, proto: %s\n", r.Method, r.URL, r.Proto)
	for k, v := range r.Header {
		fmt.Fprintf(w, "Head[%q] = %q\n", k, v)
	}
	fmt.Fprintf(w, "Host: %q\n", r.Host)
	fmt.Fprintf(w, "RemoteAddr: %q\n", r.RemoteAddr)
	if err := r.ParseForm(); err != nil {
		log.Print(err)
	}
	for k, v := range r.Form {
		fmt.Fprintf(w, "Form[%q] = %q\n", k, v)
	}
	mu.Lock()
	count++
	mu.Unlock()
	fmt.Fprintf(w, "URL.path= %q\n", r.URL.Path)
}

func counter(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	fmt.Fprintf(w, "count: %d\n", count)
	mu.Unlock()
}

```
:::

## 六丶整形和浮点数处理

:::demo 示例一
```go
package main

import "fmt"

func main() {
	const a, b = 32.0, 212.0
	fmt.Printf("%g华氏 = %g℃\n", a, convert(a))
	fmt.Printf("%g华氏 = %g℃\n", b, convert(b))
}

func convert(a float64) float64 {
	return (a - 32) * 5 / 9
}

```
:::

:::demo 示例二
```go
package main

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

```
:::

:::demo 实例三
```go
package main

import "fmt"

//计算两个整数的最大公约数
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

```
:::