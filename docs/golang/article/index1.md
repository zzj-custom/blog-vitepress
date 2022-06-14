Go 语言保姆级教程（2021版下）

原创 瓜哥  代码情缘  2021-06-14 16:08
收录于合集
#go语言
2 个
#数据结构与算法
4 个
哈喽，大家好，我是瓜哥，致力于分享互联网各领域干货。
这篇文章可以说又是一本书了，排版，码字耗费了很长的时间，10W+字 Go 语言入门保姆级教程2021年版，觉得有价值记得一键四连支持。
切片
无论是C语言中的数组还是Go语言中的数组,数组的长度一旦确定就不能改变, 但在实际开发中我们可能事先不能确定数组的长度, 为了解决这类问题Go语言中推出了一种新的数据类型切片
切片可以简单的理解为长度可以变化的数组, 但是Go语言中的切片本质上是一个结构体
type slice struct{
  array unsafe.Pointer // 指向底层数组指针
  len int // 切片长度(保存了多少个元素)
  cap int // 切片容量(可以保存多少个元素)
}
切片源码
切片创建的三种方式
方式一: 通过数组创建切片array[startIndex:endIndex]
package main
import "fmt"
func main() {
  var arr = [5]int{1, 3, 5, 7, 9}
  // 从数组0下标开始取,一直取到2下标前面一个索引
  var sce = arr[0:2]
  fmt.Println(sce) // [1 3]
  // 切片len = 结束位置 - 开始位置
  fmt.Println(len(sce)) // 2 - 0 = 2
  fmt.Println(cap(sce)) // 5 - 0 = 5
  // 数组地址就是数组首元素的地址
  fmt.Printf("%p\n", &arr) // 0xc04200a330
  fmt.Printf("%p\n", &arr[0]) // 0xc04200a330
  // 切片地址就是数组中指定的开始元素的地址
  //  arr[0:2]开始地址为0, 所以就是arr[0]的地址
  fmt.Printf("%p\n", sce) // 0xc04200a330
}
图片
image.png
package main
import "fmt"
func main() {
var arr = [5]int{1, 3, 5, 7, 9}
// 根据数组的索引片段创建切片
var sce = arr[2:4]
fmt.Println(sce) // [5 7]
fmt.Println(len(sce)) // 4 - 2 = 2
fmt.Println(cap(sce)) // 5 - 2 = 3
fmt.Printf("%p\n", &arr[2]) // 0xc042076070
fmt.Printf("%p\n", sce) // 0xc042076070
}
图片
指定起始位置时有三种方式可以指定
开始位置和结束位置都指定
只指定开始位置或结束位置
开始位置和结束位置都不指定
  package main
  import "fmt"
  func main() {
 var arr = [5]int{1, 3, 5, 7, 9}
 // 同时指定开始位置和结束位置
 var sce1 = arr[0:2]
 fmt.Println(sce1) // [1 3]

 // 只指定结束位置
 var sce3 = arr[:2]
 fmt.Println(sce3) // [1 3]

 // 只指定开始位置
 var sce2 = arr[0:]
 fmt.Println(sce2) // [1 3 5 7 9]

 // 都不指定
 var sce4 = arr[:]
 fmt.Println(sce4) // [1 3 5 7 9]
  }
方式二: 通过make函数创建make(类型, 长度, 容量)
内部会先创建一个数组, 然后让切片指向数组
如果没有指定容量,那么容量和长度一样
 package main
 import "fmt"
 func main() {
 // 第一个参数: 指定切片数据类型
 // 第二个参数: 指定切片的长度
 // 第三个参数: 指定切片的容量
 var sce = make([]int, 3, 5)
 fmt.Println(sce) // [0 0 0]
 fmt.Println(len(sce)) // 3
 fmt.Println(cap(sce)) // 5
 /*
 内部实现原理
 var arr = [5]int{0, 0, 0}
 var sce = arr[0:3]
 */
 }
方式三:通过Go提供的语法糖快速创建
和创建数组一模一样, 但是不能指定长度
通过该方式创建时, 切片的长度和容量相等
 package main
 import "fmt"
 func main() {
 var sce = []int{1, 3, 5}
 fmt.Println(sce) // [1 3 5]
 fmt.Println(len(sce)) // 3
 fmt.Println(cap(sce)) // 3
 }
切片的使用
 package main
 import "fmt"
 func main() {
  var sce = []int{1, 3, 5}
  // 使用切片, 往切片中存放数据
  sce[1] = 666
  // 访问切片, 从切片中获取数据
  fmt.Println(sce) // [1 666 5]
 }
 package main
 import "fmt"
 func main() {
  var sce = []int{1, 3, 5}
  // 编译报错, 越界
  sce[3] = 666
 }
 package main
 import "fmt"
 func main() {
var sce = []int{1, 3, 5}
fmt.Println("追加数据前:", sce) // [1 3 5]
fmt.Println("追加数据前:", len(sce)) // 3
fmt.Println("追加数据前:", cap(sce)) // 3
fmt.Printf("追加数据前: %p\n", sce) // 0xc0420600a0
// 第一个参数: 需要把数据追加到哪个切片中
// 第二个参数: 需要追加的数据, 可以是一个或多个
sce = append(sce, 666)
fmt.Println("追加数据后:", sce) // [1 3 5 666]
fmt.Println("追加数据后:", len(sce)) // 4
fmt.Println("追加数据后:", cap(sce)) // 6
fmt.Printf("追加数据前: %p\n", sce) // 0xc042076b60
 }
   package main
   import "fmt"
   func main() {
var sce1 = []int{1, 3, 5}
var sce2 = make([]int, 5)
fmt.Printf("赋值前:%p\n", sce1) // 0xc0420600a0
fmt.Printf("赋值前:%p\n", sce2) // 0xc042076060
// 将sce2的指向修改为sce1, 此时sce1和sce2底层指向同一个数组
sce2 = sce1
fmt.Printf("赋值后:%p\n", sce1) // 0xc0420600a0
fmt.Printf("赋值后:%p\n", sce2) // 0xc0420600a0
//copy(sce2, sce1)
fmt.Println(sce1) // [1 3 5]
fmt.Println(sce2) // [1 3 5]
sce2[1] = 666
fmt.Println(sce1) // [1 666 5]
fmt.Println(sce2) // [1 666 5]
   }
   package main
   import "fmt"
   func main() {
var sce1 = []int{1, 3, 5}
var sce2 = make([]int, 5)
fmt.Printf("赋值前:%p\n", sce1) // 0xc0420600a0
fmt.Printf("赋值前:%p\n", sce2) // 0xc042076060
// 将sce1中的数据拷贝到sce2中,, 此时sce1和sce2底层指向不同数组
copy(sce2, sce1)
fmt.Printf("赋值后:%p\n", sce1) // 0xc0420600a0
fmt.Printf("赋值后:%p\n", sce2) // 0xc042076060
//copy(sce2, sce1)
fmt.Println(sce1) // [1 3 5]
fmt.Println(sce2) // [1 3 5 0 0]
sce2[1] = 666
fmt.Println(sce1) // [1 3 5]
fmt.Println(sce2) // [1 666 5 0 0]
   }
   package main
   import "fmt"
   func main() {
// 容量为3
var sce1 = []int{1, 3, 5}
// 容量为5
var sce2 = make([]int, 5)
fmt.Println("拷贝前:", sce2) // [0 0 0 0 0]
// sce2容量足够, 会将sce1所有内容拷贝到sce2
copy(sce2, sce1)
fmt.Println("拷贝后:", sce2) // [1 3 5 0 0]
   }
   package main
   import "fmt"
   func main() {
// 容量为3
var sce1 = []int{1, 3, 5}
// 容量为2
var sce2 = make([]int, 2)
fmt.Println("拷贝前:", sce2) // [0 0]
// sce2容量不够, 会将sce1前2个元素拷贝到sce2中
copy(sce2, sce1)
fmt.Println("拷贝后:", sce2) // [1 3]
   }
copy函数在拷贝数据时永远以小容量为准
格式: copy(目标切片, 源切片), 会将源切片中数据拷贝到目标切片中
除了append函数外,Go语言还提供了一个copy函数, 用于两个切片之间数据的快速拷贝
append函数会在切片末尾添加一个元素, 并返回一个追加数据之后的切片
利用append函数追加数据时,如果追加之后没有超出切片的容量,那么返回原来的切片, 如果追加之后超出了切片的容量,那么返回一个新的切片
append函数每次给切片扩容都会按照原有切片容量*2的方式扩容
如果希望切片自动扩容,那么添加数据时必须使用append方法
和数组一样, 如果通过切片名称[索引]方式操作切片, 不能越界
切片的基本使用方式和数组一样, 可以通过切片名称[索引]方式操作切片
切片的注意点
  package main
  import "fmt"
  func main() {
      arr := [5]int{1, 3, 5, 7, 9}
      sce1 := arr[0:4]
      sce2 := sce1[0:3]
      fmt.Println(sce1) // [1 3 5 7]
      fmt.Println(sce2) // [1 3 5]
      // 由于底层指向同一数组, 所以修改sce2会影响sce1
      sce2[1] = 666
      fmt.Println(sce1) // [1 666 5 7]
      fmt.Println(sce2) // [1 666 5]
   }
package main
import "fmt"
func main() {
    var arr1 [3]int = [3]int{1, 3, 5}
    var arr2 [3]int = [3]int{1, 3, 5}
    var arr3 [3]int = [3]int{2, 4, 6}
    // 首先会判断`数据类型`是否相同,如果相同会依次取出数组中`对应索引的元素`进行比较, 
    // 如果所有元素都相同返回true,否则返回false
    fmt.Println(arr1 == arr2) // true
    fmt.Println(arr1 == arr3) // false

    sce1 := []int{1, 3, 5}
    sce2 := []int{1, 3, 5}
    //fmt.Println(sce1 == sce2) // 编译报错
    fmt.Println(sce1 != nil) // true
    fmt.Println(sce2 == nil) // false
 }
package main
import "fmt"
func main() {
// 数组声明后就可以直接使用, 声明时就会开辟存储空间
var arr [3]int
arr[0] = 2
arr[1] = 4
arr[2] = 6
fmt.Println(arr) // [2 4 6]

// 切片声明后不能直接使用, 只有通过make或语法糖创建之后才会开辟空间,才能使用
var sce []int
sce[0] = 2 // 编译报错
sce[1] = 4
sce[2] = 6
fmt.Println(sce)
 }
package main
import "fmt"
func main() {
str := "abcdefg"
// 通过字符串生成切片
sce1 := str[3:]
fmt.Println(sce1) // defg

sce2 := make([]byte, 10)
// 第二个参数只能是slice或者是数组
// 将字符串拷贝到切片中
copy(sce2, str)
fmt.Println(sce2) //[97 98 99 100 101 102 103 0 0 0]
 }
字符串的底层是[]byte数组, 所以字符也支持切片相关操作
只声明当没有被创建的切片是不能使用的
和数组不同, 切片只支持判断是否为nil, 不支持==、!=判断
可以通过切片再次生成新的切片, 两个切片底层指向同一数组
map(字典、映射)
map翻译过来就是字典或者映射, 可以把map看做是切片的升级版
只要是可以做==、!=判断的数据类型都可以作为key(数值类型、字符串、数组、指针、结构体、接口)
map的key的数据类型不能是:slice、map、function
map和切片一样容量都不是固定的, 当容量不足时底层会自动扩容
切片是用来存储一组相同类型的数据的, map也是用来存储一组相同类型的数据的
在切片中我们可以通过索引获取对应的元素, 在map中我们可以通过key获取对应的元素
切片的索引是系统自动生成的,从0开始递增. map中的key需要我们自己指定
map格式:var dic map[key数据类型]value数据类型
package main
import "fmt"
func main() {
 var dic map[int]int = map[int]int{0:1, 1:3, 2:5}
 fmt.Println(dic) // map[0:1 1:3 2:5]

 // 获取map中某个key对应的值
 fmt.Println(dic[0]) // 1
 
 // 修改map中某个key对应的值
 dic[1] = 666
 fmt.Println(dic) // map[0:1 1:666 2:5]
}
package main
import "fmt"
func main() {
 var dict map[string]string = map[string]string{"name":"lnj", "age":"33", "gender":"male"}
 fmt.Println(dict)// map[name:lnj age:33 gender:male]
}
图片
创建map的三种方式
方式一: 通过Go提供的语法糖快速创建
package main
import "fmt"
func main() {
 dict  := map[string]string{"name":"lnj", "age":"33", "gender":"male"}
 fmt.Println(dict)// map[name:lnj age:33 gender:male]
}
方式二:通过make函数创建make(类型, 容量)
package main
import "fmt"
func main() {
 var dict = make(map[string]string, 3)
 dict["name"] = "lnj"
 dict["age"] = "33"
 dict["gender"] = "male"
 fmt.Println(dict)// map[age:33 gender:male name:lnj]
}
方式二:通过make函数创建make(类型)
package main
import "fmt"
func main() {
 var dict = make(map[string]string)
 dict["name"] = "lnj"
 dict["age"] = "33"
 dict["gender"] = "male"
 fmt.Println(dict)// map[age:33 gender:male name:lnj]
}
和切片一样,没有被创建的map是不能使用的
package main
import "fmt"
func main() {
 // map声明后不能直接使用, 只有通过make或语法糖创建之后才会开辟空间,才能使用
 var dict map[string]string
 dict["name"] = "lnj" // 编译报错
 dict["age"] = "33"
 dict["gender"] = "male"
 fmt.Println(dict)
}
map的增删改查
增加: 当map中没有指定的key时就会自动增加
package main
import "fmt"
func main() {
 var dict = make(map[string]string)
 fmt.Println("增加前:", dict) // map[]
 dict["name"] = "lnj"
 fmt.Println("增加后:", dict) // map[name:lnj]
}
修改: 当map中有指定的key时就会自动修改
package main
import "fmt"
func main() {
 var dict = map[string]string{"name":"lnj", "age":"33", "gender":"male"}
 fmt.Println("修改前:", dict) // map[name:lnj age:33 gender:male]
 dict["name"] = "zs"
 fmt.Println("修改后:", dict) // map[age:33 gender:male name:zs]
}
删除: 可以通过Go语言内置delete函数删除指定元素
package main
import "fmt"
func main() {
 var dict = map[string]string{"name":"lnj", "age":"33", "gender":"male"}
 fmt.Println("删除前:", dict) // map[name:lnj age:33 gender:male]
 // 第一个参数: 被操作的字典
 // 第二个参数: 需要删除元素对应的key
 delete(dict, "name")
 fmt.Println("删除后:", dict) // map[age:33 gender:male]
}
查询: 通过ok-idiom模式判断指定键值对是否存储
package main
import "fmt"
func main() {
 var dict = map[string]string{"name":"lnj", "age":"33", "gender":"male"}
 //value, ok := dict["age"]
 //if(ok){
 // fmt.Println("有age这个key,值为", value)
 //}else{
 // fmt.Println("没有age这个key,值为", value)
 //}
 if value, ok := dict["age"]; ok{
  fmt.Println("有age这个key,值为", value)
 }
}
```go
- ***map遍历***
  + 注意: map和数组以及切片不同,map中存储的数据是无序的, 所以多次打印输出的顺序可能不同
```go
 var dict = map[string]string{"name":"lnj", "age":"33", "gender":"male"}
 for key, value := range dict{
  fmt.Println(key, value)
 }
结构体
Go语言中的结构体和C语言中结构体一样, 都是用来保存一组不同类型的数据
Go语言中的结构体和C语言中结构体一样, 都需要先定义结构体类型再利用结构体类型定义结构体变量
定义结构体类型
type 类型名称 struct{
  属性名称 属性类型
  属性名称 属性类型
  ... ...
}
type Studentstruct {
 name string
 age int
}
创建结构体变量的两种方式
package main
import "fmt"
func main() {
type Student struct {
 name string
 age int
} 

// 完全初始化
var stu1= Student{"lnj", 33}
fmt.Println(stu1)
// 部分初始化
// 部分初始化必须通过 属性名称: 方式指定要初始化的属性
var stu2 = Student{name:"lnj"}
fmt.Println(stu2)
}
package main
import "fmt"
func main() {
// 注意: 这里不用写type和结构体类型名称
var stu2 = struct {
 name string
 age int
}{
 name: "lnj",
 age: 33,
}
fmt.Println(stu2)
}
和C语言中的结构体一样, 如果结构体类型只需要使用一次, 那么建议定义类型同时定义变量
方式二: 定义结构体类型同时定义结构体变量(匿名结构体)
和C语言中的结构体一样, 如果结构体类型需要多次使用, 那么建议先定义类型再定义变量
方式一: 先定义结构体类型, 再定义结构体变量
结构体类型操作
  package main
  import "fmt"
  type Student struct {
   name string
   age int
  }
  func main() {
 var stu= Student{"lnj", 33}
 // 获取结构体中某个属性对应的值
 fmt.Println(stu.name)

 // 修改结构体中某个属性对应的值
 stu.name = "zs"
 fmt.Println(stu)
  }
和slice、map不同的是, 只要定义了结构体变量就可以使用结构体变量
默认情况下结构体中的所有属性都是属性对应类型的默认值
  package main
  import "fmt"
  type Student struct {
   name string
   age int
  }
  func main() {
 var stu Student // 相当于 var stu = Student{}
 fmt.Println(stu) // { 0}
 stu.name = "lnj" // 不会报错
 stu.age = 33
 fmt.Println(stu) // {lnj 33}
  }
复杂结构体成员
package main
import "fmt"
type Student struct {
  name string
  age int
}
func main() {
type Demo struct {
 age int // 基本类型作为属性
 arr [3]int // 数组类型作为属性
 sce []int // 切片类型作为属性
 mp map[string]string // 字典类型作为属性
 stu Student // 结构体类型作为属性
}

var d Demo = Demo{
 33,
 [3]int{1, 3, 5},
 []int{2, 4, 6},
 map[string]string{"class":"one"},
 Student{
  "lnj",
  33,
 },
}
fmt.Println(d) // {33 [1 3 5] [2 4 6] map[class:one] {lnj 33}}
}
package main
import "fmt"
type Student struct {
  name string
  age int
}
func main() {
type Demo struct {
 age int // 基本类型作为属性
 arr [3]int // 数组类型作为属性
 sce []int // 切片类型作为属性
 mp map[string]string // 字典类型作为属性
 stu Student // 结构体类型作为属性
}

// 定义结构体变量
var d Demo
// 可以直接使用基本类型属性
d.age = 33
// 可以直接使用数组类型属性
d.arr[0] = 666
// 不可以直接使用切片类型属性
//d.sce[0] = 888 // 编译报错
d.sce = make([]int, 5) // 先创建
d.sce[0] = 888 // 后使用
// 不可以直接使用字典类型属性
//d.mp["class"] = "one" // 编译报错
d.mp = make(map[string]string)// 先创建
d.mp["class"] = "one"// 后使用
// 可以直接使用结构体类型属性
d.stu.name = "lnj"
fmt.Println(d) // {33 [666 0 0] [888 0 0 0 0] map[class:one] {lnj 0}}
}
slice、map类型属性默认值是nil,不能直接使用
创建时可以按照属性单独存在时初始化方式初始化
结构体类型转换
属性名、属性类型、属性个数、排列顺序都是类型组成部分
只有属性名、属性类型、属性个数、排列顺序都相同的结构体类型才能转换
  package main
  import "fmt"
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

 var p1 Person1 = Person1{"lnj", 33}
 var p2 Person2
 // 类型名称不一样不能直接赋值(Person1、Person2)
 //p2 = p1

 // 虽然类型名称不一样, 但是两个类型中的`属性名称`、`属性类型`、`属性个数`、`排列顺序`都一样,所以可以强制转换
 p2 = Person2(p1)
 fmt.Println(p2)
 // 两个结构体类型中的`属性名称`、`属性类型`、`属性个数`都一样,但是`排列顺序`不一样,所以不能强制转换
 //var p3 Person3
 //p3 = Person3(p1)
 //fmt.Println(p3)

 // 两个结构体类型中的`属性类型`、`属性个数`、`排列顺序`都一样,但是`属性名称`不一样,所以不能强制转换
 //var p4 Person4
 //p4 = Person4(p1)
 //fmt.Println(p4)

 // 两个结构体类型中的`属性名称`、`属性个数`、`排列顺序`都一样,但是`属性类型`不一样,所以不能强制转换
 //var p5 Person5
 //p5 = Person5(p1)
 //fmt.Println(p5)

 // 两个结构体类型中的`属性名称`、`属性类型`、`排列顺序`都一样,但是`属性个数`不一样,所以不能强制转换
 //var p6 Person6
 //p6 = Person6(p1)
 //fmt.Println(p6)
  }
匿名属性
package main
import "fmt"
func main() {
type Person struct {
 int
 float32
 bool
 string
}
// 不指定名称初始化
per1 := Person{3, 3.14, false, "lnj"}
fmt.Println(per1)

// 可以把数据类型作为名字显示初始化
per2 := Person{
 int: 3,
 float32: 3.14,
 bool: true,
 string: "lnj",
}
fmt.Println(per2)

// 可以把数据类型当做属性名称操作结构体
per2.int = 666
fmt.Println(per2.int) // 666
}
package main
import "fmt"
func main() {
type Person struct {
 name string
 age int
}
type Student struct {
 Person // 匿名属性
 class string
}

stu := Student{
 Person{"lnj", 33},
 "学前一班",
}
fmt.Println(stu) // {{lnj 33} 学前一班}
}
package main
import "fmt"
func main() {
type Person struct {
 name string
 age int
}
type Student struct {
 Person // 匿名属性
 class string
}

stu := Student{
 Person{"lnj", 33},
 "学前一班",
}
fmt.Println(stu) // {{lnj 33} 学前一班}

// 方式一: 先找到匿名属性,再访问匿名属性中的属性
stu.Person.name = "zs"
fmt.Println(stu) // {{zs 33} 学前一班}
// 方式二: 直接访问匿名属性中的属性
// 系统会先查找当前结构体有没有名称叫做name的属性
// 如果没有会继续查找匿名属性中有没有名称叫做name的属性
stu.name = "ww"
fmt.Println(stu) // {{ww 33} 学前一班}
}
package main
import "fmt"
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
 Person // 匿名属性
 Class // 匿名属性
}
stu := Student{
 Person{"lnj", 33},
 Class{"学前一班", "2020-12-12"},
}
fmt.Println(stu) // {{lnj 33} {学前一班 2020-12-12}}
// 编译报错, 系统搞不清楚要找哪个name
//stu.name = "zs"

stu.Person.name = "zs"
stu.Class.name = "小学一年级"
fmt.Println(stu) // {{zs 33} {小学一年级 2020-12-12}}
}
package main
import "fmt"
func main() {
type Person struct {
 name string
}
type Student struct {
 per Person
 age int
}

var stu Student = Student{Person{"lnj"}, 18}
//fmt.Println(stu.name) // 报错
fmt.Println(stu.per.name) // 必须通过属性进一步查找
fmt.Println(stu.age)
}
package main
import "fmt"
func main() {
type Person struct {
 Person // 错误
 name string
}
type Student struct {
 *Student  // 正确, 链表
 age int
}
}
注意点: 如果匿名属性是一个结构体类型, 那么这个结构体类型不能是自己
注意点: 只有匿名结构体才支持向上查找
注意点: 如果多个匿名属性的属性名称相同,那么不能通过方式二操作,只能通过方式一
如果结构体作为匿名属性, 想访问匿名属性的属性有两种方式
Go语言中最常见的匿名属性是用结构体类型作为匿名属性
没有指定属性名称,只有属性的类型, 我们称之为匿名属性
任何有命名的数据类型都可以作为匿名属性(int、float、bool、string、struct等)
普通指针
和C语言一样, 允许用一个变量来存放其它变量的地址, 这种专门用于存储其它变量地址的变量, 我们称之为指针变量
和C语言一样, Go语言中的指针无论是什么类型占用内存都一样(32位4个字节, 64位8个字节)
package main

import (
 "fmt"
 "unsafe"
)

func main() {

 var p1 *int;
 var p2 *float64;
 var p3 *bool;
 fmt.Println(unsafe.Sizeof(p1)) // 8
 fmt.Println(unsafe.Sizeof(p2)) // 8
 fmt.Println(unsafe.Sizeof(p3)) // 8
}
和C语言一样, 只要一个指针变量保存了另一个变量对应的内存地址, 那么就可以通过*来访问指针变量指向的存储空间
package main

import (
 "fmt"
)

func main() {

 // 1.定义一个普通变量
 var num int = 666
 // 2.定义一个指针变量
 var p *int = &num
 fmt.Printf("%p\n", &num) // 0xc042064080
 fmt.Printf("%p\n", p) // 0xc042064080
 fmt.Printf("%T\n", p) // *int
 // 3.通过指针变量操作指向的存储空间
 *p = 888
 // 4.指针变量操作的就是指向变量的存储空间
 fmt.Println(num) // 888
 fmt.Println(*p) // 888
}
指向数组指针
在C语言中, 数组名,&数组名,&数组首元素保存的都是同一个地址
#include <stdio.h>

int main(){
     int arr[3] = {1, 3, 5};
     printf("%p\n", arr); // 0060FEA4
     printf("%p\n", &arr); // 0060FEA4
     printf("%p\n", &arr[0]); // 0060FEA4
}
在Go语言中通过数组名无法直接获取数组的内存地址
package main
import "fmt"

func main() {
 var arr [3]int = [3]int{1, 3, 5}
 fmt.Printf("%p\n", arr) // 乱七八糟东西
 fmt.Printf("%p\n", &arr) // 0xc0420620a0
 fmt.Printf("%p\n", &arr[0]) // 0xc0420620a0
}
在C语言中, 无论我们将数组名,&数组名,&数组首元素赋值给指针变量, 都代表指针变量指向了这个数组
#include <stdio.h>

int main(){
     int arr[3] = {1, 3, 5};
     int *p1 = arr;
     p1[1] = 6;
     printf("%d\n", arr[1]);

     int *p2 = &arr;
     p2[1] = 7;
     printf("%d\n", arr[1]);

     int *p3 = &arr[0];
     p3[1] = 8;
     printf("%d\n", arr[1]);
}
在Go语言中, 因为只有数据类型一模一样才能赋值, 所以只能通过&数组名赋值给指针变量, 才代表指针变量指向了这个数组
package main

import "fmt"

func main() {
 // 1.错误, 在Go语言中必须类型一模一样才能赋值
 // arr类型是[3]int, p1的类型是*[3]int
 var p1 *[3]int
 fmt.Printf("%T\n", arr)
 fmt.Printf("%T\n", p1)
 p1 = arr // 报错
 p1[1] = 6
 fmt.Println(arr[1])

 // 2.正确, &arr的类型是*[3]int, p2的类型也是*[3]int
 var p2 *[3]int
 fmt.Printf("%T\n", &arr)
 fmt.Printf("%T\n", p2)
 p2 = &arr
 p2[1] = 6
 fmt.Println(arr[1])

 // 3.错误, &arr[0]的类型是*int, p3的类型也是*[3]int
 var p3 *[3]int
 fmt.Printf("%T\n", &arr[0])
 fmt.Printf("%T\n", p3)
 p3 = &arr[0] // 报错
 p3[1] = 6
 fmt.Println(arr[1])
}
注意点:
Go语言中的指针, 不支持C语言中的+1 -1和++ -- 操作
package main

import "fmt"

func main() {


 var arr [3]int = [3]int{1, 3, 5}
 var p *[3]int
 p = &arr
 fmt.Printf("%p\n", &arr) // 0xc0420620a0
 fmt.Printf("%p\n", p) // 0xc0420620a0
 fmt.Println(&arr) // &[1 3 5]
 fmt.Println(p) // &[1 3 5]
 // 指针指向数组之后操作数组的几种方式
 // 1.直接通过数组名操作
 arr[1] = 6
 fmt.Println(arr[1])
 // 2.通过指针间接操作
 (*p)[1] = 7
 fmt.Println((*p)[1])
 fmt.Println(arr[1])
 // 3.通过指针间接操作
 p[1] = 8
 fmt.Println(p[1])
 fmt.Println(arr[1])

 // 注意点: Go语言中的指针, 不支持+1 -1和++ --操作
 *(p + 1) = 9 // 报错
 fmt.Println(*p++) // 报错
 fmt.Println(arr[1])
}
指向切片的指针
值得注意点的是切片的本质就是一个指针指向数组, 所以指向切片的指针是一个二级指针图片图片
package main

import "fmt"

func main() {
 // 1.定义一个切片
 var sce[]int = []int{1, 3, 5}
 // 2.打印切片的地址
 // 切片变量中保存的地址, 也就是指向的那个数组的地址 sce = 0xc0420620a0
 fmt.Printf("sce = %p\n",sce )
 fmt.Println(sce) // [1 3 5]
 // 切片变量自己的地址, &sce = 0xc04205e3e0
 fmt.Printf("&sce = %p\n",&sce )
 fmt.Println(&sce) // &[1 3 5]
 // 3.定义一个指向切片的指针
 var p *[]int
 // 因为必须类型一致才能赋值, 所以将切片变量自己的地址给了指针
 p = &sce
 // 4.打印指针保存的地址
 // 直接打印p打印出来的是保存的切片变量的地址 p = 0xc04205e3e0
 fmt.Printf("p = %p\n", p)
 fmt.Println(p) // &[1 3 5]
 // 打印*p打印出来的是切片变量保存的地址, 也就是数组的地址 *p = 0xc0420620a0
 fmt.Printf("*p = %p\n", *p)
 fmt.Println(*p) // [1 3 5]
 
 // 5.修改切片的值
 // 通过*p找到切片变量指向的存储空间(数组), 然后修改数组中保存的数据
 (*p)[1] = 666
 fmt.Println(sce[1])
}
指向字典指针
与普通指针并无差异
package main
import "fmt"
func main() {

 var dict map[string]string = map[string]string{"name":"lnj", "age":"33"}
 var p *map[string]string = &dict
 (*p)["name"] = "zs"
 fmt.Println(dict)
}
指向结构体指针
Go语言中指向结构体的指针和C语言一样
结构体和指针
package main
import "fmt"
type Student struct {
  name string
  age int
}
func main() {
// 创建时利用取地址符号获取结构体变量地址
var p1 = &Student{"lnj", 33}
fmt.Println(p1) // &{lnj 33}

// 通过new内置函数传入数据类型创建
// 内部会创建一个空的结构体变量, 然后返回这个结构体变量的地址
var p2 = new(Student)
fmt.Println(p2) // &{ 0}
}
package main
import "fmt"
type Student struct {
  name string
  age int
}
func main() {
var p = &Student{}
// 方式一: 传统方式操作
// 修改结构体中某个属性对应的值
// 注意: 由于.运算符优先级比*高, 所以一定要加上()
(*p).name = "lnj"
// 获取结构体中某个属性对应的值
fmt.Println((*p).name) // lnj

// 方式二: 通过Go语法糖操作
// Go语言作者为了程序员使用起来更加方便, 在操作指向结构体的指针时可以像操作接头体变量一样通过.来操作
// 编译时底层会自动转发为(*p).age方式
p.age = 33
fmt.Println(p.age) // 33
}
利用结构体指针操作结构体属性
创建结构体指针变量有两种方式
指针作为函数参数和返回值
如果指针类型作为函数参数, 修改形参会影响实参
不能将函数内的指向局部变量的指针作为返回值, 函数结束指向空间会被释放
可以将函数内的局部变量作为返回值, 本质是拷贝一份
方法
Go语言中的方法其实就是一个特殊函数, 只不过这个函数是和某种属性类型绑定在一起的而已
Go语言中的方法一般用于将函数和结构体绑定在一起, 让结构体除了能够保存数据外还能具备某些行为
将函数和数据类型绑定的格式
只需要在函数名称前面加上(接收者 数据类型), 即可将函数和某种数据类型绑定在一起
func (接收者 数据类型)方法名称(形参列表)(返回值列表){
  方法体
}
示例: 给结构体添加一个方法,此时结构体除了可以保存数据,还具备说出自己名字和年龄的行为
package main
import "fmt"
// 1.定义一个结构体
type Person struct {
 name string
 age int
}
// 2.定义一个函数, 并将这个函数和Person结构体绑定在一起
func (p Person)say()  {
 fmt.Println("my name is", p.name, "my age is", p.age)
}
func main() {
 // 3.创建一个结构体变量
 per := Person{"lnj", 33}
 // 4.利用结构体变量调用和结构体绑定的方法
 // 调用时会自动将调用者(per)传递给方法的接收者(p)
 // 所以可以在方法内部通过p方法结构体变量的属性
 per.say()
}
方法和函数异同
package main
import "fmt"
type Person struct {
name string
age int
}
// 定义一个方法
func (p Person)say()  {
fmt.Println("say方法")
}
// 定义一个函数
func say()  {
fmt.Println("say函数")
}
func main() {
p := Person{"lnj", 33}
fmt.Printf("%T\n", p.say) // func()
fmt.Printf("%T\n", say) // func()

// 定义一个保存没有形参没有返回值的函数类型变量
var fn func()
// 利用函数类型变量保存一个方法
fn = p.say
// 利用函数类型变量调用一个方法
fn()

// 利用函数类型变量保存一个函数
fn = say
// 利用函数类型变量调用一个函数
fn()
}
package main
import "fmt"
type Person struct {
 name string
 age int
}
// 定义一个方法
func (p Person)say()  {
   fmt.Println("my name is", p.name, "my age is", p.age)
}
// 定义一个函数
func test()  {
 fmt.Println("test")
}
func main() {
 per := Person{"lnj", 33}
 per.say() // 方法只能通过绑定类型的变量调用
 //say() // 编译报错, 不能直接调用
 test() // 编译通过, 可以直接调用
}
package main
import "fmt"
type Person struct {
 name string
 age int
}
// 定义一个方法
func (p Person)say()  {
   fmt.Println("my name is", p.name, "my age is", p.age)
}
// 定义一个函数
func test(p Person)  {
 fmt.Println("my name is", p.name, "my age is", p.age)
}
func main() {
 per := Person{"lnj", 33}
 per.say() // my name is lnj my age is 33
 test(per) // my name is lnj my age is 33
}
package main
import "fmt"
type Person struct {
 name string
 age int
}
// 接收者是一个变量
func (p Person)setName(name string)  {
 p.name = name
}
// 接收者是一个指针
func (p *Person)setAge(age int)  {
 p.age = age
}
func main() {
 per := Person{"lnj", 33}
 fmt.Println(per) // {lnj 33}
 // 值传递, 方法内部修改不会影响方法外部
 per.setName("zs")
 fmt.Println(per) // {lnj 33}
 p := &per
 // 地址传递, 方法内部修改会影响方法外部
 (*p).setAge(18)
 fmt.Println(per) // {lnj 18}
}
package main
import "fmt"
type Person struct {
 name string
 age int
}
// 接收者是一个变量
func (p Person)setName(name string)  {
 p.name = name
}
// 接收者是一个指针
func (p *Person)setAge(age int)  {
 p.age = age
}
func main() {
 per := Person{"lnj", 33}
 // 方式一: 先拿到指针,然后再通过指针调用
 p := &per
 (*p).setAge(18)
 fmt.Println(per) // {lnj 18}
 // 方式二: 直接利用变量调用, 底层会自动获取变量地址传递给接收者
 per.setAge(66)
 fmt.Println(per) // {lnj 66}
}
地址传递的几种调用方式
既然可以看做形参, 那么自然也具备形参的特点(值传递和地址传递)
方法的接收者可以看做就是函数的一个形参
方法只能通过绑定类型的变量调用, 函数可以直接调用
方法的数据类型也是函数类型, 所以也可以定义变量保存(作为参数返回值等)
接口
Go语言中的接口和现实生活中的USB插槽很像, 它定义某种标准, 但不关心具体实现
无论你到哪个商店里面去购买USB线,只要你告诉商家你需要一根USB线, 买回家之后就一定能插到电脑上使用. 之所以能用,原因就是电脑厂商在指定了USB插槽的标准(尺寸、排线等等), 生产厂家只需要按照标准生产即可
同样在Go语言中我们可以通过接口来定义某种标准(函数声明),但不用不关心具体实现(函数实现), 只要将来有人按照标准实现了接口,我们就可以使用
定义接口格式
type 接口名称 interface{
  函数声明
}
示例: 定义一个通用的USB接口
package main
import "fmt"
// 1.定义一个接口
type usber interface {
 start()
 stop()
}
type Computer struct {
 name string
 model string
}
// 2.实现接口中的所有方法
func (cm Computer)start() {
 fmt.Println("启动电脑")
}
func (cm Computer)stop() {
 fmt.Println("关闭电脑")
}

type Phone struct {
 name string
 model string
}
// 2.实现接口中的所有方法
func (p Phone)start()  {
 fmt.Println("启动手机")
}
func (p Phone)stop()  {
 fmt.Println("关闭手机")
}

// 3.使用接口定义的方法
func working(u usber)  {
 u.start()
 u.stop()
}
func main() {
 cm := Computer{"戴尔", "F1234"}
 working(cm) // 启动电脑 关闭电脑

 p := Phone{"华为", "M10"}
 working(p)  // 启动手机 关闭手机
}
接口注意点
type usber interface {
  func start(){ // 错误
   fmt.Println("启动")
  }
  func stop()  { // 错误
   fmt.Println("停止")
  }
}
type usber interface {
  name string // 错误
  start()
  stop()
}
package main
import "fmt"
// 1.定义一个接口
type usber interface {
  start()
  stop()
}
type Computer struct {
  name string
  model string
}
// 2.实现接口中的所有方法
func (cm Computer)start() {
  fmt.Println("启动电脑")
}
func (cm Computer)stop() {
  fmt.Println("关闭电脑")
}
// 2.只实现了接口中部分方法
type Phone struct {
  name string
  model string
}
func (p Phone)start()  {
  fmt.Println("启动手机")
}
func main() {
  // 1.定义一个usber接口类型变量
  var i usber
  // 2.用usber接口类型变量接收Computer类型结构体
  i = Computer{"戴尔", "F1234"} // 实现了所有方法, 不会报错
  // 3.用usber接口类型变量接收Phone类型结构体
  //i = Phone{"华为", "M10"} // 只实现了部分方法, 会报错
  fmt.Println(i)
}
package main
import "fmt"
type A interface {
  fna()
}
type B interface {
  fnb()
}
type C interface {
  A // 嵌入A接口
  B // 嵌入B接口
  fnc()
}
type Person struct {}
func (p Person)fna()  {
  fmt.Println("实现A接口中的方法")
}
func (p Person)fnb()  {
  fmt.Println("实现B接口中的方法")
}
func (p Person)fnc()  {
  fmt.Println("实现C接口中的方法")
}
func main() {
  p := Person{}
  p.fna() // 实现A接口中的方法
  p.fnb() // 实现B接口中的方法
  p.fnc() // 实现C接口中的方法
}
type A interface {
  A // 报错, 不能自己搞自己
}
type A interface {
  fn()
}
type B interface {
  fn()
}
type C interface {
  A 
  B // 报错, A接口和B接口都有名称叫做fn的方法
  fnc()
}
package main
import "fmt"
type aer interface {
  fna()
}
type ber interface {
  aer
  fnb()
}
// Person实现了超集接口所有方法
type Person struct {}
func (p Person)fna()  {
  fmt.Println("实现A接口中的方法")
}
func (p Person)fnb()  {
  fmt.Println("实现B接口中的方法")
}
// Student实现了子集接口所有方法
type Student struct { }
func (p Student)fna()  {
fmt.Println("实现A接口中的方法")
}
func main() {
  var i ber
  // 子集接口变量不能转换为超集接口变量
  //i = Student{}
  fmt.Println(i)
  var j aer
  // 超集接口变量可以自动转换成子集接口变量,
  j = Person{}
  fmt.Println(j)
}
package main
import "fmt"
func main() {
  // 1.定义一个空接口类型变量
  var i interface{}
  // 2.用接口类型保存任意类型数据
  i = 123
  fmt.Println(i) // 123
  i = 3.14
  fmt.Println(i) // 3.14
  i = "lnj"
  fmt.Println(i) // lnj
  i = [3]int{1, 3, 5}
  fmt.Println(i) // [1 3 5]
  i = []int{2, 4, 6}
  fmt.Println(i) // [2 4 6]
  i = map[string]string{"name": "lnj"}
  fmt.Println(i) // map[name:lnj]
  i = Computer{"戴尔", "F1234"}
  fmt.Println(i) // {戴尔 F1234}
}
package main
import "fmt"
// 1.定义一个接口
type usber interface {
  start()
  stop()
}
// 2.自定义int类型
type integer int
// 2.实现接口中的所有方法
func (i integer)start()  {
  fmt.Println("int类型实现接口")
}
func (i integer)stop()  {
  fmt.Println("int类型实现接口")
}
func main() {
  var i integer = 666
  i.start() // int类型实现接口
  i.stop() // int类型实现接口
}
只要是自定义类型就可以实现接口
空接口类型可以接收任意类型数据
超集接口变量可以自动转换成子集接口变量, 子集接口变量不能转换为超集接口变量(本质就是没有实现所有方法)
接口中嵌入接口时不能出现相同的方法名称
和结构体一样,接口中嵌入接口时不能嵌入自己
和结构体一样,接口中也可以嵌入接口
只有实现了接口中所有的方法, 才算实现了接口, 才能用该接口类型接收
接口中只能有方法什么不能有字段
接口中只能有方法的声明不能有方法的实现
接口类型转换
package main
import "fmt"
type studier interface {
  read()
}
type Person struct {
  name string
  age int
}
func (p Person)read()  {
  fmt.Println(p.name, "正在学习")
}
func main() {
  // 1.定义一个接口类型变量
  var s studier
  // 2.用接口类型变量接收实现了接口的结构体
  s = Person{"lnj", 33}
  s.name = "zs" // 报错, 由于s是接口类型, 所以不能访问属性
  fmt.Println(s)
}
package main
import "fmt"
type studier interface {
  read()
}
type Person struct {
  name string
  age int
}
func (p Person)read()  {
  fmt.Println(p.name, "正在学习")
}
func main() {
  var s studier
  s = Person{"lnj", 33}
  s.name = "zs" // 报错, 由于s是接口类型, 所以不能访问属性
  // 2.定义一个结构体类型变量
  //var p Person
  // 不能用强制类型转换方式将接口类型转换为原始类型
  //p = Person(s) // 报错

  // 2.利用ok-idiom模式将接口类型还原为原始类型
  // s.(Person)这种格式我们称之为: 类型断言
  if p, ok := s.(Person); ok {
   p.name = "zs"
   fmt.Println(p)
  }

  // 2.通过 type switch将接口类型还原为原始类型
 // 注意: type switch不支持fallthrought
  switch p := s.(type) {
   case Person:
    p.name = "zs"
    fmt.Println(p) // {zs 33}
   default:
    fmt.Println("不是Person类型")
  }
}
package main
import "fmt"
type studier interface {
  read()
}
type Person struct {
  name string
  age int
}
func (p Person)read()  {
  fmt.Println(p.name, "正在学习")
}
func main() {
  // 1.定义一个抽象接口类型
  var i interface{}
  i = Person{"lnj", 33}
  // 不能调用read方法, 因为抽象接口中没有这个方法
  //i.read()
  // 2.利用ok-idiom模式将抽象接口转换为具体接口
  if s, ok := i.(studier); ok{
   // 可以调用read方法,因为studier中声明了这个方法,并且结构体中实现了这个方法
   s.read() // lnj 正在学习
  }
  }
除了可以将接口类型转换为原始类型以外, 企业开发中有时候可能我们还需要将抽象接口类型转换为具体接口类型
想要访问变量中的属性, 必须将接口类型还原为原始类型
接口类型变量可以接收实现了该接口类型的变量, 但是只能调用该变量中的方法, 不能访问该变量的属性
面向对象基本概念
面向对象思想
面向对象(Object Oriented,OO)是软件开发方法
面向对象是一种对现实世界抽象的理解，是计算机编程技术发展到一定阶段后的产物
Object Oriented Programming-OOP ——面向对象编程图片
面向对象和面向过程区别
面向对象是相对面向过程而言
面向对象和面向过程都是一种思想
面向过程
强调的是功能行为
关注的是解决问题需要哪些步骤
回想下前面我们完成一个需求的步骤：
首先搞清楚我们要做什么
然后分析怎么做
最后我用代码体现
一步一步去实现，而具体的每一步都需要我们去实现和操作
在上面每一个具体步骤中我们都是参与者， 并且需要面对具体的每一个步骤和过程， 这就是面向过程最直接的体现
面向对象
将功能封装进对象，强调具备了功能的对象
关注的是解决问题需要哪些对象
当需求单一， 或者简单时， 我们一步一步去操作没问题， 并且效率也挺高。可随着需求的更改， 功能的增加， 发现需要面对每一个步骤非常麻烦， 这时就开始思索， 能不能把这些步骤和功能再进行封装， 封装时根据不同的功能，进行不同的封装，功能类似的封装在一起。这样结构就清晰多了， 用的时候， 找到对应的类就可以了， 这就是面向对象思想
示例
买电脑
找班长
描述需求
班长把电脑买回来 *
了解电脑
了解自己的需求
对比参数
去电脑城
砍价，付钱
买回电脑
被坑
面向过程
面向对象
吃饭
去饭店
点菜
吃
去超市卖菜
摘菜
洗菜
切菜
炒菜
盛菜
吃
面向过程
面向对象
洗衣服
买电脑/吃饭/洗衣服
找个对象
脱衣服
打开洗衣机
丢进去
一键洗衣烘干
脱衣服
放进盆里
放洗衣液
加水
放衣服
搓一搓
清一清
拧一拧
晒起来
面向过程
面向对象
终极面向对象
现实生活中我们是如何应用面相对象思想的
包工头
汽车坏了
面试
面向对象的特点
是一种符合人们思考习惯的思想
可以将复杂的事情简单化
将程序员从执行者转换成了指挥者
完成需求时：
先要去找具有所需的功能的对象来用
如果该对象不存在，那么创建一个具有所需功能的对象
这样简化开发并提高复用
类与对象的关系
面向对象的核心就是对象,那怎么创建对象?
现实生活中可以根据模板创建对象,编程语言也一样,也必须先有一个模板,在这个模板中说清楚将来创建出来的对象有哪些属性和行为图片
Go语言中的类相当于图纸，用来描述一类事物。也就是说要想创建对象必须先有类
Go语言利用类来创建对象，对象是类的具体存在, 因此面向对象解决问题应该是先考虑需要设计哪些类，再利用类创建多少个对象
如何设计一个类
生活中描述事物无非就是描述事物的属性和行为。
如：人有身高，体重等属性，有说话，打架等行为。
事物名称(类名):人(Person)
属性:身高(height)、年龄(age)
行为(功能):跑(run)、打架(fight)
Go语言中用类来描述事物也是如此
属性：对应类中的成员变量。
行为：对应类中的成员方法。
定义类其实在定义类中的成员(成员变量和成员方法)
拥有相同或者类似属性（状态特征）和行为（能干什么事）的对象都可以抽像成为一个类图片
如何分析一个类
一般名词都是类(名词提炼法)
飞机发射两颗炮弹摧毁了8辆装甲车
飞机
炮弹
装甲车
隔壁老王在公车上牵着一条叼着热狗的草泥马
老王
热狗
草泥马
如何定义一个类
类是用于描述事物的的属性和行为的, 而Go语言中的结构体正好可以用于描述事物的属性和行为
所以在Go语言中我们使用结构体来定义一个类型
type Person struct {
    name string // 人的属性
    age int // 人的属性
}
// 人的行为
func (p Person)Say()  {
    fmt.Println("my name is", p.name, "my age is", p.age)
}
如何通过类创建一个对象
不过就是创建结构体的时候, 根据每个对象的特征赋值不同的属性罢了
// 3.创建一个结构体变量
    p1 := Person{"lnj", 33}
    per.say()

    p2 := Person{"zs", 18}
    per.Say()
不同包中变量、函数、方法、类型公私有问题
在Go语言中通过首字母大小写来控制变量、函数、方法、类型的公私有
如果首字母小写, 那么代表私有, 仅在当前包中可以使用
如果首字母大写, 那么代表共有, 其它包中也可以使用
package demo

import "fmt"

var num1 int = 123 // 当前包可用
var Num1 int = 123 // 其它包也可用

type person struct { // 当前包可用
 name string // 当前包可用
 age int // 当前包可用
}

type Student struct { // 其它包也可用
 Name string // 其它包也可用
 Age int // 其它包也可用
}

func test1()  { // 当前包可用
 fmt.Println("test1")
}
func Test2()  { // 其它包也可用
 fmt.Println("Test2")
}

func (p person)say()  { // 当前包可用
 fmt.Println(p.name, p.age)
}
func (s Student)Say()  { // 其它包也可用
 fmt.Println(s.Name, s.Age)
}
面向对象三大特性
封装性
封装性就是隐藏实现细节，仅对外公开接口图片
类是数据与功能的封装，数据就是成员变量，功能就是方法
为什么要封装?
不封装的缺点：当一个类把自己的成员变量暴露给外部的时候,那么该类就失去对该成员变量的管理权，别人可以任意的修改你的成员变量
封装就是将数据隐藏起来,只能用此类的方法才可以读取或者设置数据,不可被外部任意修改是面向对象设计本质(将变化隔离)。这样降低了数据被误用的可能 (提高安全性和灵活性)
package model
import "fmt"
type Person struct { // 其它包也可用
 name string // 当前包可用
 age int // 当前包可用
}
func (p *person)SetAge(age int)  {
 // 安全校验
 if age < 0 {
  fmt.Println("年龄不能为负数")
 }
 p.age = age
}
package main
import (
 "fmt"
 "main/model"
)
func main()  {
 // 报错, 因为name和age不是公开的
 //p := model.Person{"lnj", 18}

 // 方式一
 //p := model.Person{}
 //p.SetAge(18)
 //fmt.Println(p)

 // 方式二
 //p := new(model.Person)
 //p.SetAge(18)
 //fmt.Println(p)
}
封装原则
将不需要对外提供的内容都隐藏起来,把属性都隐藏,提供公共的方法对其访问
继承性
Go语言认为虽然继承能够提升代码的复用性, 但是会让代码腐烂, 并增加代码的复杂度.
所以go语言坚持了〃组合优于继承〃的原则, Go语言中所谓的继承其实是利用组合实现的(匿名结构体属性)图片图片
普通继承(组合)
package main

import "fmt"

type Person struct {
 name string
 age int
}
type Student struct {
 Person // 学生继承了人的特性
 score int
}
type Teacher struct {
 Person // 老师继承了人的特性
 Title string
}
func main()  {
 s := Student{Person{"lnj", 18}, 99}
 //fmt.Println(s.Person.name)
 fmt.Println(s.name) // 两种方式都能访问
 //fmt.Println(s.Person.age)
 fmt.Println(s.age) // 两种方式都能访问
 fmt.Println(s.score)
}
继承结构中出现重名情况, 采用就近原则
package main

import "fmt"

type Person struct {
 name string // 属性重名
 age int
}
type Student struct {
 Person
 name string // 属性重名
 score int
}
func main()  {
 s := Student{Person{"zs", 18}, "ls", 99}

 fmt.Println(s.Person.name) // zs
 fmt.Println(s.name) // ls
 //fmt.Println(s.Person.age)
 fmt.Println(s.age) // 两种方式都能访问
 fmt.Println(s.score)
}
多重继承
package main

import "fmt"

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
 s := Student{Person{Object{77}, "zs", 33}, 99}
 //fmt.Println(s.Person.Object.life)
 //fmt.Println(s.Person.life)
 fmt.Println(s.life) // 三种方式都可以
 //fmt.Println(s.Person.name)
 fmt.Println(s.name) // 两种方式都能访问
 //fmt.Println(s.Person.age)
 fmt.Println(s.age) // 两种方式都能访问
 fmt.Println(s.score)
}
package main

import "fmt"

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
 s := Student{Object{77}, Person{"zs", 33}, 99}
 //fmt.Println(s.Person.life)
 fmt.Println(s.life) // 两种方式都可以
 //fmt.Println(s.Person.name)
 fmt.Println(s.name) // 两种方式都能访问
 //fmt.Println(s.Person.age)
 fmt.Println(s.age) // 两种方式都能访问
 fmt.Println(s.score)
方法继承
在Go语言中子类不仅仅能够继承父类的属性, 还能够继承父类的方法
package main

import "fmt"
type Person struct {
 name string
 age int
}
// 父类方法
func (p Person)say()  {
 fmt.Println("name is ", p.name, "age is ", p.age)
}

type Student struct {
 Person
 score float32
} 

func main() {
 stu := Student{Person{"zs", 18}, 59.9}
 stu.say()
}
继承中的方法重写
如果子类有和父类同名的方法, 那么我们称之为方法重写
package main

import "fmt"
type Person struct {
 name string
 age int
}
// 父类方法
func (p Person)say()  {
 fmt.Println("name is ", p.name, "age is ", p.age)
}

type Student struct {
 Person
 score float32
}
// 子类方法
func (s Student)say()  {
 fmt.Println("name is ", s.name, "age is ", s.age, "score is ", s.score)
}
func main() {
 stu := Student{Person{"zs", 18}, 59.9}
 // 和属性一样, 访问时采用就近原则
 stu.say() 
 // 和属性一样, 方法同名时可以通过指定父类名称的方式, 访问父类方法
 stu.Person.say()
}
注意点:
无论是属性继承还是方法继承, 都只能子类访问父类, 不能父类访问子类
多态性
多态就是某一类事物的多种形态
猫: 猫-->动物
狗: 狗-->动物
男人 : 男人 -->人 -->高级动物
女人 : 女人 -->人 -->高级动物
Go语言中的多态是采用接口来实现的
package main

import "fmt"
// 1.定义接口
type Animal interface { 
 Eat()
}
type Dog struct {
 name string
 age int
}
// 2.实现接口方法
func (d Dog)Eat()  {
 fmt.Println(d.name, "正在吃东西")
}

type Cat struct {
 name string
 age int
}
// 2.实现接口方法
func (c Cat)Eat()  {
 fmt.Println(c.name, "正在吃东西")
}
// 3.对象特有方法
func (c Cat)Special()  {
 fmt.Println(c.name, "特有方法")
}

func main()  {
 // 1.利用接口类型保存实现了所有接口方法的对象
 var a Animal
 a = Dog{"旺财", 18}
 // 2.利用接口类型调用对象中实现的方法
 a.Eat()
 a = Cat{"喵喵", 18}
 a.Eat()
 // 3.利用接口类型调用对象特有的方法
 //a.Special() // 接口类型只能调用接口中声明的方法, 不能调用对象特有方法
 if cat, ok := a.(Cat); ok{
  cat.Special() // 只有对象本身才能调用对象的特有方法
 }
}
多态优点
多态的主要好处就是简化了编程接口。它允许在类和类之间重用一些习惯性的命名,而不用为每一个新的方法命名一个新名字。这样,编程接口就是一些抽象的行为的集合,从而和实现接口的类的区分开来
多态也使得代码可以分散在不同的对象中而不用试图在一个方法中考虑到所有可能的对象。这样使得您的代码扩展性和复用性更好一些。当一个新的情景出现时,您无须对现有的代码进行改动,而只需要增加一个新的类和新的同名方法
异常处理
程序运行时，发生的不被期望的事件，它阻止了程序按照程序员的预期正常执行，这就是异常
golang中提供了两种处理异常的方式
一种是程序发生异常时, 将异常信息反馈给使用者
一种是程序发生异常时, 立刻退出终止程序继续运行
打印异常信息
Go语言中提供了两种创建异常信息的方式
方式一: 通过fmt包中的Errorf函数创建错误信息, 然后打印
package main
import "fmt"
func main() {
 // 1.创建错误信息
 var err error = fmt.Errorf("这里是错误信息")
 // 2.打印错误信息
 fmt.Println(err) // 这里是错误信息
}
方式二: 通过errors包中的New函数创建错误信息,然后打印
package main
import "fmt"
func main() {
 // 1.创建错误信息
 var err error = errors.New("这里是错误信息")
 // 2.打印错误信息
 fmt.Println(err) // 这里是错误信息
}
两种创建异常信息实现原理解析
Go语言中创建异常信息其实都是通过一个error接口实现的
Go语言再builtin包中定义了一个名称叫做error的接口. 源码如下
package builtin
// 定义了一个名称叫做error的接口
// 接口中声明了一个叫做Error() 的方法
type error interface {
 Error() string
}
在errors包中定义了一个名称叫做做errorString的结构体, 利用这个结构体实现了error接口中指定的方法
并且在errors 包中还提供了一个New方法, 用于创建实现了error接口的结构体对象, 并且在创建时就会把指定的字符串传递给这个结构体
// 指定包名为errors
package errors 
// 定义了一个名称叫做errorString的结构体, 里面有一个字符串类型属性s
type errorString struct {
 s string
}
// 实现了error接口中的Error方法
// 内部直接将结构体中保存的字符串返回
func (e *errorString) Error() string {
 return e.s
}
// 定义了一个New函数, 用于创建异常信息
// 注意: New函数的返回值是一个接口类型
func New(text string) error {
        // 返回一个创建好的errorString结构体地址
 return &errorString{text}
}
fmt包中Errorf底层的实现原理其实就是在内部自动调用了errors包中的New函数
func Errorf(format string, a ...interface{}) error {
 return errors.New(Sprintf(format, a...))
}
应用场景
package main
import "fmt"
func div(a, b int) (res int, err error) {
 if(b == 0){
  // 一旦传入的除数为0, 就会返回error信息
  err = errors.New("除数不能为0")
 }else{
  res = a / b
 }
 return
}
func main() {
 //res, err := div(10, 5)
 res, err := div(10, 0)
 if(err != nil){
  fmt.Println(err) // 除数不能为0
 }else{
  fmt.Println(res) // 2
 }
}
中断程序
Go语言中提供了一个叫做panic函数, 用于发生异常时终止程序继续运行
package main
import "fmt"
func div(a, b int) (res int) {
 if(b == 0){
  //一旦传入的除数为0, 程序就会终止
  panic("除数不能为0")
 }else{
  res = a / b
 }
 return
}
func main() {
 res := div(10, 0)
 fmt.Println(res)
}
Go语言中有两种方式可以触发panic终止程序
我们自己手动调用panic函数
程序内部出现问题自动触发panic函数
package main
import "fmt"
func main() {
 // 例如:数组角标越界, 就会自动触发panic
 var arr = [3]int{1, 3, 5}
 arr[5] = 666 // 报错
 fmt.Println(arr)

 // 例如:除数为0, 就会自动触发panic
 var res = 10 / 0
 fmt.Println(res)
}
除非是不可恢复性、导致系统无法正常工作的错误, 否则不建议使用panic
恢复程序
程序和人一样都需要具备一定的容错能力, 学会知错就改. 所以如果不是不可恢复性、导致系统无法正常工作的错误, 如果发生了panic我们需要恢复程序, 让程序继续执行,并且需要记录到底犯了什么错误
在Go语言中我们可以通过defer和recover来实现panic异常的捕获, 让程序继续执行
package main
import "fmt"
func div(a, b int) (res int) {
 // 定义一个延迟调用的函数, 用于捕获panic异常
 // 注意: 一定要在panic之前定义
 defer func() {
  if err := recover(); err != nil{
   res = -1
   fmt.Println(err) // 除数不能为0
  }
 }()
 if(b == 0){
  //err = errors.New("除数不能为0")
  panic("除数不能为0")
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
panic注意点
panic异常会沿着调用堆栈向外传递, 所以也可以在外层捕获
package main
import "fmt"
func div(a, b int) (res int) {
 if(b == 0){
  //err = errors.New("除数不能为0")
  panic("除数不能为0")
 }else{
  res = a / b
 }
 return
}
func main() {
 // panic异常会沿着调用堆栈向外传递, 所以也可以在外层捕获
 defer func() {
  if err := recover(); err != nil{
   fmt.Println(err) // 除数不能为0
  }
 }()
 div(10, 0)
}
多个异常,只有第一个会被捕获
package main
import "fmt"
func test1()  {
 // 多个异常,只有第一个会被捕获
 defer func() {
  if err := recover(); err != nil{
   fmt.Println(err) // 异常A
  }
 }()
 panic("异常A") // 相当于return, 后面代码不会继续执行
 panic("异常B")
}
func main() {
 test1(10, 0)
}
如果有异常写在defer中, 那么只有defer中的异常会被捕获
package main
import "fmt"
func test2()  {
 // 如果有异常写在defer中, 并且其它异常写在defer后面, 那么只有defer中的异常会被捕获
 defer func() {
  if err := recover(); err != nil{
   fmt.Println(err) // 异常A
  }
 }()
 
 defer func() { 
  panic("异常B")
 }()
 panic("异常A")
}
func main() {
 test1(10, 0)
}
字符串相关方法
获取字符串长度
注意: Go语言编码方式是UTF-8,在UTF-8中一个汉字占3个字节
package main
import "fmt"
func main() {
 str1 := "lnj"
 fmt.Println(len(str1)) // 3
 str2 := "公号：代码情缘"
 fmt.Println(len(str2)) // 12
}
如果字符串中包含中文, 又想精确的计算字符串中字符的个数而不是占用的字节, 那么必须先将字符串转换为rune类型数组
Go语言中byte用于保存字符, rune用于保存汉字
package main
import "fmt"
func main() {
 str := "公号：代码情缘"
 // 注意byte占1个字节, 只能保存字符不能保存汉字,因为一个汉字占用3个字节
 arr1 := []byte(str) // 12
 fmt.Println(len(arr1))
 for _, v := range arr1{
  fmt.Printf("%c", v) // lnjæåæ±
 }

 // Go语言中rune类型就是专门用于保存汉字的
 arr2 := []rune(str)
 fmt.Println(len(arr2)) // 6
 for _, v := range arr2{
  fmt.Printf("%c", v) // lnj李南江
 }
}
查找子串在字符串中出现的位置
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
 "strings"
 "fmt"
)
func main() {
 // 查找`字符`在字符串中第一次出现的位置, 找不到返回-1
 res := strings.IndexByte("hello 李南江", 'l')
 fmt.Println(res) // 2

 // 查找`汉字`OR`字符`在字符串中第一次出现的位置, 找不到返回-1
 res = strings.IndexRune("hello 李南江", '李')
 fmt.Println(res) // 6
 res = strings.IndexRune("hello 李南江", 'l')
 fmt.Println(res) // 2

 // 查找`汉字`OR`字符`中任意一个在字符串中第一次出现的位置, 找不到返回-1
 res = strings.IndexAny("hello 李南江", "wml")
 fmt.Println(res) // 2
 // 会把wmhl拆开逐个查找, w、m、h、l只要任意一个被找到, 立刻停止查找
 res = strings.IndexAny("hello 李南江", "wmhl")
 fmt.Println(res) // 0
 // 查找`子串`在字符串第一次出现的位置, 找不到返回-1
 res = strings.Index("hello 李南江", "llo")
 fmt.Println(res) // 2
 // 会把lle当做一个整体去查找, 而不是拆开
 res = strings.Index("hello 李南江", "lle")
 fmt.Println(res) // -1
 // 可以查找字符也可以查找汉字
 res = strings.Index("hello 李南江", "李")
 fmt.Println(res) // 6

 // 会将字符串先转换为[]rune, 然后遍历rune切片逐个取出传给自定义函数
 // 只要函数返回true,代表符合我们的需求, 既立即停止查找
 res = strings.IndexFunc("hello 李南江", custom)
 fmt.Println(res) // 6

 // 倒序查找`子串`在字符串第一次出现的位置, 找不到返回-1
 res := strings.LastIndex("hello 李南江", "l")
 fmt.Println(res) // 3
}
func custom(r rune) bool {
 fmt.Printf("被调用了, 当前传入的是%c\n", r)
 if r == 'o' {
  return true
 }
 return false
}
判断字符串中是否包含子串
func Contains(s, substr string) bool
func ContainsRune(s string, r rune) bool
func ContainsAny(s, chars string) bool
func HasPrefix(s, prefix string) bool
func HasSuffix(s, suffix string) bool
package main
import (
 "strings"
 "fmt"
)
func main() {
 // 查找`子串`在字符串中是否存在, 存在返回true, 不存在返回false
 // 底层实现就是调用strings.Index函数
 res := strings.Contains( "hello 代码情缘", "llo")
 fmt.Println(res) // true

 // 查找`汉字`OR`字符`在字符串中是否存在, 存在返回true, 不存在返回false
 // 底层实现就是调用strings.IndexRune函数
 res = strings.ContainsRune( "hello 代码情缘", 'l')
 fmt.Println(res) // true
 res = strings.ContainsRune( "hello 代码情缘", '李')
 fmt.Println(res) // true

 // 查找`汉字`OR`字符`中任意一个在字符串中是否存在, 存在返回true, 不存在返回false
 // 底层实现就是调用strings.IndexAny函数
 res = strings.ContainsAny( "hello 代码情缘", "wmhl")
 fmt.Println(res) // true

 // 判断字符串是否已某个字符串开头
 res = strings.HasPrefix("lnj-book.avi", "lnj")
 fmt.Println(res) // true

 // 判断字符串是否已某个字符串结尾
 res = strings.HasSuffix("lnj-book.avi", ".avi")
 fmt.Println(res) // true
}
字符串比较
func Compare(a, b string) int
func EqualFold(s, t string) bool
package main
import (
 "strings"
 "fmt"
)
func main() {
 // 比较两个字符串大小, 会逐个字符地进行比较ASCII值
 // 第一个参数 >  第二个参数 返回 1
 // 第一个参数 <  第二个参数 返回 -1
 // 第一个参数 == 第二个参数 返回 0
 res := strings.Compare("bcd", "abc")
 fmt.Println(res) // 1
 res = strings.Compare("bcd", "bdc")
 fmt.Println(res) // -1
 res = strings.Compare("bcd", "bcd")
 fmt.Println(res) // 0

 // 判断两个字符串是否相等, 可以判断字符和中文
 // 判断时会忽略大小写进行判断
 res2 := strings.EqualFold("abc", "def")
 fmt.Println(res2) // false
 res2 = strings.EqualFold("abc", "abc")
 fmt.Println(res2) // true
 res2 = strings.EqualFold("abc", "ABC")
 fmt.Println(res2) // true
 res2 = strings.EqualFold("代码情缘", "代码情缘")
 fmt.Println(res2) // true
}
字符串转换
func ToUpper(s string) string
func ToLower(s string) string
func ToTitle(s string) string
func ToUpperSpecial(_case unicode.SpecialCase, s string) string
func ToLowerSpecial(_case unicode.SpecialCase, s string) string
func ToTitleSpecial(_case unicode.SpecialCase, s string) string
func Title(s string) string
package main
import (
 "strings"
 "fmt"
)
func main() {
 // 将字符串转换为小写
 res := strings.ToLower("ABC")
 fmt.Println(res) // abc
 
 // 将字符串转换为大写
 res = strings.ToUpper("abc")
 fmt.Println(res) // ABC

 // 将字符串转换为标题格式, 大部分`字符`标题格式就是大写
 res = strings.ToTitle("hello world")
 fmt.Println(res) // HELLO WORLD
 res = strings.ToTitle("HELLO WORLD")
 fmt.Println(res) // HELLO WORLD

 // 将单词首字母变为大写, 其它字符不变
 // 单词之间用空格OR特殊字符隔开
 res = strings.Title("hello world")
 fmt.Println(res) // Hello World
}
字符串拆合
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
 "strings"
 "fmt"
)
func main() {
 // 按照指定字符串切割原字符串
 // 用,切割字符串
 arr1 := strings.Split("a,b,c", ",")
 fmt.Println(arr1) // [a b c]
 arr2 := strings.Split("ambmc", "m")
 fmt.Println(arr2) // [a b c]

 // 按照指定字符串切割原字符串, 并且指定切割为几份
 // 如果最后一个参数为0, 那么会范围一个空数组
 arr3 := strings.SplitN("a,b,c", ",", 2)
 fmt.Println(arr3) // [a b,c]
 arr4 := strings.SplitN("a,b,c", ",", 0)
 fmt.Println(arr4) // []

 // 按照指定字符串切割原字符串, 切割时包含指定字符串
 arr5 := strings.SplitAfter("a,b,c", ",")
 fmt.Println(arr5) // [a, b, c]

 // 按照指定字符串切割原字符串, 切割时包含指定字符串, 并且指定切割为几份
 arr6 := strings.SplitAfterN("a,b,c", ",", 2)
 fmt.Println(arr6) // [a, b,c]

 // 按照空格切割字符串, 多个空格会合并为一个空格处理
 arr7 := strings.Fields("a  b c    d")
 fmt.Println(arr7) // [a b c d]

 // 将字符串转换成切片传递给函数之后由函数决定如何切割
 // 类似于IndexFunc
 arr8 := strings.FieldsFunc("a,b,c", custom)
 fmt.Println(arr8) // [a b c]

 // 将字符串切片按照指定连接符号转换为字符串
 sce := []string{"aa", "bb", "cc"}
 str1 := strings.Join(sce, "-")
 fmt.Println(str1) // aa-bb-cc


 // 返回count个s串联的指定字符串
 str2 := strings.Repeat("abc", 2)
 fmt.Println(str2) // abcabc

 // 第一个参数: 需要替换的字符串
 // 第二个参数: 旧字符串
 // 第三个参数: 新字符串
 // 第四个参数: 用新字符串 替换 多少个旧字符串
 // 注意点: 传入-1代表只要有旧字符串就替换
 // 注意点: 替换之后会生成新字符串, 原字符串不会受到影响
 str3 := "abcdefabcdefabc"
 str4 := strings.Replace(str3, "abc", "mmm", -1)
 fmt.Println(str3) // abcdefabcdefabc
 fmt.Println(str4) // mmmdefmmmdefmmm
}
func custom(r rune) bool {
 fmt.Printf("被调用了, 当前传入的是%c\n", r)
 if r == ',' {
  return true
 }
 return false
}
字符串清理
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
 "strings"
 "fmt"
)
func main() {
 // 去除字符串两端指定字符
 str1 := strings.Trim("!!!abc!!!def!!!", "!")
 fmt.Println(str1) // abc!!!def
 // 去除字符串左端指定字符
 str2 := strings.TrimLeft("!!!abc!!!def!!!", "!")
 fmt.Println(str2) // abc!!!def!!!
 // 去除字符串右端指定字符
 str3 := strings.TrimRight("!!!abc!!!def!!!", "!")
 fmt.Println(str3) // !!!abc!!!def
 // // 去除字符串两端空格
 str4 := strings.TrimSpace("   abc!!!def ")
 fmt.Println(str4) // abc!!!def

 // 按照方法定义规则,去除字符串两端符合规则内容
 str5 := strings.TrimFunc("!!!abc!!!def!!!", custom)
 fmt.Println(str5) // abc!!!def
 // 按照方法定义规则,去除字符串左端符合规则内容
 str6 := strings.TrimLeftFunc("!!!abc!!!def!!!", custom)
 fmt.Println(str6) // abc!!!def!!!
 //  按照方法定义规则,去除字符串右端符合规则内容
 str7 := strings.TrimRightFunc("!!!abc!!!def!!!", custom)
 fmt.Println(str7) // !!!abc!!!def

 // 取出字符串开头的指定字符串
 str8 := strings.TrimPrefix("lnj-book.avi", "lnj-")
 fmt.Println(str8) // book.avi

 // 取出字符串结尾的指定字符串
 str9 := strings.TrimSuffix("lnj-book.avi", ".avi")
 fmt.Println(str9) // lnj-book
}
正则表达式
正则表达式是对字符串操作的一种逻辑公式，就是用事先定义好的一些特定字符、及这些特定字符的组合，组成一个“规则字符串”，这个“规则字符串”用来表达对字符串的一种过滤逻辑。
相关规则标准详见
百度百科
Go语言官方文档regexp包
Go语言中正则表达式使用步骤
1.创建一个正则表达式匹配规则对象
2.利用正则表达式匹配规则对象匹配指定字符串
package main
import (
 "strings"
 "fmt"
)
func main() {
 // 创建一个正则表达式匹配规则对象
 // reg := regexp.MustCompile(规则字符串)
 // 利用正则表达式匹配规则对象匹配指定字符串
 // 会将所有匹配到的数据放到一个字符串切片中返回
 // 如果没有匹配到数据会返回nil
 // res := reg.FindAllString(需要匹配的字符串, 匹配多少个)

 str := "Hello 李南江 1232"
 reg := regexp.MustCompile("2")
 res := reg.FindAllString(str, -1)
 fmt.Println(res) // [2 2]
 res = reg.FindAllString(str, 1)
 fmt.Println(res) // [2]
}
匹配电话号码
package main
import (
 "strings"
 "fmt"
)
func main() {
 res2 := findPhoneNumber("13554499311")
 fmt.Println(res2) // true

 res2 = findPhoneNumber("03554499311")
 fmt.Println(res2) // false

 res2 = findPhoneNumber("1355449931")
 fmt.Println(res2) // false
}
func findPhoneNumber(str string) bool {
 // 创建一个正则表达式匹配规则对象
 reg := regexp.MustCompile("^1[1-9]{10}")
 // 利用正则表达式匹配规则对象匹配指定字符串
 res := reg.FindAllString(str, -1)
 if(res == nil){
  return  false
 }
 return  true
}
匹配Email
package main
import (
 "strings"
 "fmt"
)
func main() {
 res2 = findEmail("123@qq.com")
 fmt.Println(res2) // true

 res2 = findEmail("ab?de@qq.com")
 fmt.Println(res2) // false

 res2 = findEmail("123@qqcom")
 fmt.Println(res2) // false
}
func findEmail(str string) bool {
 reg := regexp.MustCompile("^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]+")
 res := reg.FindAllString(str, -1)
 if(res == nil){
  return  false
 }
 return  true
}
时间和日期函数
获取当前时间
package main

import (
 "fmt"
 "time"
)
func main()  {
 var t time.Time = time.Now()
 // 2018-09-27 17:25:11.653198 +0800 CST m=+0.009759201
 fmt.Println(t)
}
获取年月日时分秒
package main

import (
 "fmt"
 "time"
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
格式化时间
package main

import (
 "fmt"
 "time"
)
func main()  {
 var t time.Time = time.Now()
 fmt.Printf("当前的时间是: %d-%d-%d %d:%d:%d\n", t.Year(), 
  t.Month(), t.Day(), t.Hour(), t.Minute(), t.Second())

 var dateStr = fmt.Sprintf("%d-%d-%d %d:%d:%d", t.Year(), 
  t.Month(), t.Day(), t.Hour(), t.Minute(), t.Second())
fmt.Println("当前的时间是:", dateStr)
}
package main

import (
 "fmt"
 "time"
)
func main()  {
 var t time.Time = time.Now()
 // 2006/01/02 15:04:05这个字符串是Go语言规定的, 各个数字都是固定的
 // 字符串中的各个数字可以只有组合, 这样就能按照需求返回格式化好的时间
 str1 := t.Format("2006/01/02 15:04:05")
 fmt.Println(str1)
 str2 := t.Format("2006/01/02")
 fmt.Println(str2)
 str3 := t.Format("15:04:05")
 fmt.Println(str3)
}
时间常量
一般用于指定时间单位, 和休眠函数配合使用
例如: 100毫秒, 100 *time.Millisecond
const (
 Nanosecond  Duration = 1    // 纳秒
 Microsecond          = 1000 * Nanosecond // 微秒
 Millisecond          = 1000 * Microsecond // 毫秒
 Second               = 1000 * Millisecond // 秒
 Minute               = 60 * Second // 分钟
 Hour                 = 60 * Minute // 小时
)
package main

import (
 "fmt"
 "time"
)
func main()  {
 for{
  // 1秒钟打印一次
  time.Sleep(time.Second * 1)
  // 0.1秒打印一次
  //time.Sleep(time.Second * 0.1)
  time.Sleep(time.Millisecond * 100)
  fmt.Println("Hello LNJ")
 }
}
获取当前时间戳
Unix秒
UnixNano纳秒
一般用于配合随机函数使用, 作为随机函数随机种子
package main

import (
 "fmt"
 "time"
)

func main()  {
 t := time.Now()
 // 获取1970年1月1日距离当前的时间(秒)
 fmt.Println(t.Unix())
 // 获取1970年1月1日距离当前的时间(纳秒)
 fmt.Println(t.UnixNano())
}
package main

import (
 "fmt"
 "math/rand"
 "time"
)
func main()  {
 // 创建随机数种子
 rand.Seed(time.Now().UnixNano())
 // 生成一个随机数
 fmt.Println(rand.Intn(10))
}
Go语言中调用C语言函数
在Go语言开篇中我们已经知道, Go语言与C语言之间有着千丝万缕的关系, 甚至被称之为21世纪的C语言
所以在Go与C语言互操作方面，Go更是提供了强大的支持。尤其是在Go中使用C，你甚至可以直接在Go源文件中编写C代码，这是其他语言所无法望其项背的
格式:
在import "C"之前通过单行注释或者通过多行注释编写C语言代码
在import "C"之后编写Go语言代码
在Go语言代码中通过C.函数名称() 调用C语言代码即可
注意: import "C"和前面的注释之间不能出现空行或其它内容, 必须紧紧相连
package main
//#include <stdio.h>
//void say(){
// printf("Hello World\n");
//}
import "C"

func main()  {
 C.say()
}
package main
/*
#include <stdio.h>
void say(){
 printf("Hello World\n");
}
*/
import "C"

func main()  {
 C.say()
}
Go语言中没有包名是C的包, 但是这个导入会促使Go编译器利用cgo工具预处理文件
在预处理过程中,cgo会产生一个临时包, 这个包里包含了所有C函数和类型对应的Go语言声明
最终使得cgo工具可以通过一种特殊的方式来调用import "C"之前的C语言代码
常规问题:
如果编译报错cc1.exe: sorry, unimplemented: 64-bit mode not compiled in
说明你使用的是64的golang，而你使用的32位的MinGW，所以需要下载64位的mingw并配置环境变量
下载地址: https://www.baidu.com/s?wd=sorry%2C%20unimplemented%3A%2064-bit%20mode%20not%20compiled%20in
C语言中调用Go语言函数(很少使用)
在Go代码中通过 //export Go函数名称导出Go的函数名称
在C代码中通过 extern 返回值类型 Go函数名称(形参列表); 声明Go中导出的函数名称
注意: //export Go函数名称和extern 返回值类型 Go函数名称(形参列表);不能在同一个文件中
package main

import "C"
import "fmt"
// 导出Go函数声明, 给C使用
//export GoFunction
func GoFunction() {
 fmt.Println("GoFunction!!!")
}
package main
/*
#include <stdio.h>
// 声明Go中的函数
extern void GoFunction();

void CFunction() {
        printf("CFunction!\n");
        GoFunction();
}
*/
import "C"

func main()  {
 C.CFunction()
}
由于不在同一个文件, 所以需要通过go build或者go install同时编译多个文件
Go中使用C语言的类型
基本数据类型
在Go中可以用如下方式访问C原生的数值类型：
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
Go的数值类型与C中的数值类型不是一一对应的。因此在使用对方类型变量时必须显式转型操作
package main
/*
#include <stdio.h>
int num = 123;
float value = 3.14;
char ch = 'N';
*/
import "C"
import "fmt"

func main()  {
 var num1 C.int = C.num
 fmt.Println(num1)
 var num2 int
 //num2 = num1 // 报错
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
字符串类型
C语言中并不没有字符串类型，在C中用带结尾'\0'的字符数组来表示字符串；而在Go中string类型是原生类型，因此在两种语言互操作是必须要做字符串类型的转换
C字符串转换Go字符串: C.GoString(str)
Go字符串转换C字符串: C.CString(str)
package main
/*
#include <stdio.h>
char *str = "www.it666.com";
void say(char *name){
 printf("my name is %s", name);
}
*/
import "C"
import (
 "fmt"
 "unsafe"
)

func main()  {
 // 1.C语言字符串转换Go语言字符串
 str1 := C.str
 str2 := C.GoString(str1)
 fmt.Println(str2)

 // 2.Go语言字符串转换C语言字符串
 str := "lnj"
 cs := C.CString(str)
 C.say(cs)
 // 注意: 转换后所得到的C字符串cs并不能由Go的gc所管理，我们必须手动释放cs所占用的内存
 C.free(unsafe.Pointer(cs))
}
指针类型
unsafe.Pointer：通用指针类型，用于转换不同类型的指针，不能进行指针运算
原生数值类型的指针类型可按Go语法在类型前面加上*，例如:var p *C.int。
而void*比较特殊，用Go中的unsafe.Pointer表示。
uintptr：用于指针运算，GC 不把 uintptr 当指针，uintptr 无法持有对象。uintptr 类型的目标会被回收
也就是说 unsafe.Pointer 是桥梁，可以让任意类型的指针实现相互转换，也可以将任意类型的指针转换为uintptr 进行指针运算
package main
/*
#include <stdio.h>
int num = 123;
void *ptr = &num;
*/
import "C"
import (
 "fmt"
 "unsafe"
)

func main()  {
 // 这是一个C语言变量
 var num C.int = C.num
 // 这是一个C语言指针
 var p1 *C.int = &num
 fmt.Println(*p1)

 //var p2 *C.void = C.ptr // 报错
 // 利用unsafe.Pointer接收viod *
 var p2 unsafe.Pointer = C.ptr
 // 将unsafe.Pointer转换为具体类型
 var p3 *C.int = (*C.int)(p2)
 fmt.Println(*p3)
}
枚举类型
C语言中的枚举类型在Go语言中的表现形式为C.enum_XXX
访问枚举和访问普通变量无异, 直接通过C.枚举值即可
package main
/*
#include <stdio.h>
enum Gender {
   GenderMale,
   GenderFemale,
   GenderYao
};
*/
import "C"
import "fmt"

func main()  {
 var sex C.enum_Gender = C.GenderMale
 fmt.Println(sex)
 sex = C.GenderFemale
 fmt.Println(sex)
 sex = C.GenderYao
 fmt.Println(sex)
}
结构体类型
C语言中的结构体类型在Go语言中的表现形式为C.struct_XXX
访问结构体 直接通过结构体变量.属性名称即可
package main
/*
#include <stdio.h>
struct Point {
    float x;
    float y;
};
*/
import "C"
import (
 "fmt"
)

func main()  {
 // 1.利用C的结构体类型创建结构体
 var cp C.struct_Point = C.struct_Point{6.6, 8.8}
 fmt.Println(cp)
 fmt.Printf("%T\n", cp)

 // 2.将C语言结构体转换为Go语言结构体
 type GoPoint struct {
  x float32
  y float32
 }
 var gp GoPoint
 gp.x = float32(cp.x)
 gp.y = float32(cp.y)
 fmt.Println(gp)
}
数组类型
C语言中的数组与Go语言中的数组差异较大， C中的数组是指针类型,  Go中的数组是值类型
目前似乎无法直接显式的在两者之间进行转型，官方文档也没有说明。
package main
/*
#include <stdio.h>
int cArray[5] = {1, 2, 3, 4, 5};
*/
import "C"
import "fmt"

func main()  {
 var cArr [5]C.int = C.cArray
 fmt.Println(cArr)
 fmt.Printf("%T\n", cArr)
}
利用Go语言调用C语言函数, 实现无缓冲区输入
请在终端运行
package main
/*
#include <stdio.h>
char lowerCase(char ch){
    // 1.判断当前是否是小写字母
    if(ch >= 'a' && ch <= 'z'){
        return ch;
    }
    // 注意点: 不能直接编写else, 因为执行到else不一定是一个大写字母
    else if(ch >= 'A' && ch <= 'Z'){
        return ch + ('a' - 'A');
    }
    return ' ';
}
char getCh(){
    // 1.接收用户输入的数据
    char ch;
    scanf("%c", &ch);
    setbuf(stdin, NULL);
    // 2.大小写转换
    ch = lowerCase(ch);
    // 3.返回转换好的字符
    return ch;
}
 */
import "C"
import "fmt"

func main()  {
 for{
  fmt.Println("请输入w a s d其中一个字符, 控制小人走出迷宫")
  var ch byte = byte(C.getCh())
  fmt.Printf("%c", ch)
 }
}
文件的打开和关闭
和C语言一样, Go语言中操作文件也是通过一个FILE结构体
type file struct {
 pfd     poll.FD
 name    string
 dirinfo *dirInfo 
}
type File struct {
 *file // os specific
}
Open函数
func Open(name string) (file *File, err error)
Open打开一个文件用于读取
Close函数
func (f *File) Close() error
Close关闭文件f
package main
import (
 "fmt"
 "os"
)

func main() {
 // 1.打开一个文件
 // 注意: 文件不存在不会创建, 会报错
 // 注意: 通过Open打开只能读取, 不能写入
 fp, err := os.Open("d:/lnj.txt")
 if err != nil{
  fmt.Println(err)
 }else{
  fmt.Println(fp)
 }

 // 2.关闭一个文件
 defer func() {
  err = fp.Close()
  if err != nil {
   fmt.Println(err)
  }
 }()
}
文件读取
Read函数(不带缓冲区去读)
func (f *File) Read(b []byte) (n int, err error)
Read方法从f中读取最多len(b)字节数据并写入b,
package main

import (
 "fmt"
 "io"
 "os"
)

func main() {
 // 1.打开一个文件
 // 注意: 文件不存在不会创建, 会报错
 // 注意: 通过Open打开只能读取, 不能写入
 fp, err := os.Open("d:/lnj.txt")
 if err != nil{
  fmt.Println(err)
 }else{
  fmt.Println(fp)
 }

 // 2.关闭一个文件
 defer func() {
  err = fp.Close()
  if err != nil {
   fmt.Println(err)
  }
 }()

 // 3.读取指定指定字节个数据
 // 注意点: \n也会被读取进来
 //buf := make([]byte, 50)
 //count, err := fp.Read(buf)
 //if err != nil {
 // fmt.Println(err)
 //}else{
 // fmt.Println(count)
 // fmt.Println(string(buf))
 //}

 // 4.读取文件中所有内容, 直到文件末尾为止
 buf := make([]byte, 10)
 for{
  count, err := fp.Read(buf)
  // 注意: 这行代码要放到判断EOF之前, 否则会出现少读一行情况
  fmt.Print(string(buf[:count]))
  if err == io.EOF {
   break
  }
 }
}
ReadBytes和ReadString函数(带缓冲区去读)
func (b *Reader) ReadBytes(delim byte) (line []byte, err error)
ReadBytes读取直到第一次遇到delim字节
func (b *Reader) ReadString(delim byte) (line string, err error)
ReadString读取直到第一次遇到delim字节
package main

import (
 "bufio"
 "fmt"
 "io"
 "os"
)

func main() {
 // 1.打开一个文件
 // 注意: 文件不存在不会创建, 会报错
 // 注意: 通过Open打开只能读取, 不能写入
 fp, err := os.Open("d:/lnj.txt")
 if err != nil{
  fmt.Println(err)
 }else{
  fmt.Println(fp)
 }

 // 2.关闭一个文件
 defer func() {
  err = fp.Close()
  if err != nil {
   fmt.Println(err)
  }
 }()

 // 3.读取一行数据
 // 创建读取缓冲区, 默认大小4096
 //r :=bufio.NewReader(fp)
 //buf, err := r.ReadBytes('\n')
 //buf, err := r.ReadString('\n')
 //if err != nil{
 // fmt.Println(err)
 //}else{
 // fmt.Println(string(buf))
 //}

 // 4.读取文件中所有内容, 直到文件末尾为止
 r :=bufio.NewReader(fp)
 for{
  //buf, err := r.ReadBytes('\n')
  buf, err := r.ReadString('\n')
  fmt.Print(string(buf))
  if err == io.EOF{
   break
  }
 }
}
ReadFile函数
func ReadFile(filename string) ([]byte, error)
从filename指定的文件中读取数据并返回文件的所有内容
不适合大文件读取
package main

import (
 "fmt"
 "io/ioutil"
)

func main() {

 filePath := "d:/lnj.txt"
 buf, err := ioutil.ReadFile(filePath)
 if err !=nil {
  fmt.Println(err)
 }else{
  fmt.Println(string(buf))
 }
}
文件创建和写入
Create函数
func Create(name string) (file *File, err error)
Create采用模式0666（任何人都可读写，不可执行）创建一个名为name的文件
如果文件存在会覆盖原有文件
Write函数
func (f *File) Write(b []byte) (n int, err error)
将指定字节数组写入到文件中
WriteString函数
func (f *File) WriteString(s string) (ret int, err error)
将指定字符串写入到文件中
package main

import (
 "fmt"
 "os"
)

func main() {

 // 1.创建一个文件
 fp, err := os.Create("d:/lnj.txt")
 if err != nil{
  fmt.Println(err)
 }
 // 2.关闭打开的文件
 defer func() {
  err := fp.Close()
  if err != nil {
   fmt.Println(err)
  }
 }()
 // 2.往文件中写入数据
 // 注意: Windows换行是\r\n
 bytes := []byte{'l','n','j','\r','\n'}
 fp.Write(bytes)
 
 fp.WriteString("www.it666.com\r\n")
 fp.WriteString("www.itzb.com\r\n")
 // 注意: Go语言采用UTF-8编码, 一个中文占用3个字节
 fp.WriteString("李南江")
}
OpenFile函数
const (
  O_RDONLY int = syscall.O_RDONLY // 只读模式打开文件
  O_WRONLY int = syscall.O_WRONLY // 只写模式打开文件
  O_RDWR   int = syscall.O_RDWR   // 读写模式打开文件
  O_APPEND int = syscall.O_APPEND // 写操作时将数据附加到文件尾部
  O_CREATE int = syscall.O_CREAT  // 如果不存在将创建一个新文件
  O_EXCL   int = syscall.O_EXCL   // 和O_CREATE配合使用，文件必须不存在
  O_SYNC   int = syscall.O_SYNC   // 打开文件用于同步I/O
  O_TRUNC  int = syscall.O_TRUNC  // 如果可能，打开时清空文件
)
const (
  // 单字符是被String方法用于格式化的属性缩写。
  ModeDir        FileMode = 1 << (32 - 1 - iota) // d: 目录
  ModeAppend                                     // a: 只能写入，且只能写入到末尾
  ModeExclusive                                  // l: 用于执行
  ModeTemporary                                  // T: 临时文件（非备份文件）
  ModeSymlink                                    // L: 符号链接（不是快捷方式文件）
  ModeDevice                                     // D: 设备
  ModeNamedPipe                                  // p: 命名管道（FIFO）
  ModeSocket                                     // S: Unix域socket
  ModeSetuid                                     // u: 表示文件具有其创建者用户id权限
  ModeSetgid                                     // g: 表示文件具有其创建者组id的权限
  ModeCharDevice                                 // c: 字符设备，需已设置ModeDevice
  ModeSticky                                     // t: 只有root/创建者能删除/移动文件
  // 覆盖所有类型位（用于通过&获取类型位），对普通文件，所有这些位都不应被设置
  ModeType = ModeDir | ModeSymlink | ModeNamedPipe | ModeSocket | ModeDevice
  ModePerm FileMode = 0777 // 覆盖所有Unix权限位（用于通过&获取类型位）
)
0没有任何权限
1.执行权限(如果是可执行程序, 可以运行)
2.写权限
3.写权限和执行权限
4.读权限
5.读权限和执行权限
6.读权限和写权限
7.读权限和写权限以及执行权限
第三个参数: 指定权限
func OpenFile(name string, flag int, perm FileMode) (file *File, err error)
第一个参数: 打开的路径
第二个参数: 打开的模式
不带缓冲区写入
package main

import (
 "fmt"
 "os"
)

func main() {

 // 注意点: 第三个参数在Windows没有效果
 // -rw-rw-rw- (666)   所有用户都有文件读、写权限。
 //-rwxrwxrwx (777)  所有用户都有读、写、执行权限。
 // 1.打开文件
 //fp, err := os.OpenFile("d:/lnj.txt", os.O_CREATE|os.O_RDWR, 0666)
 fp, err := os.OpenFile("d:/lnj.txt", os.O_CREATE|os.O_APPEND, 0666)
 if err != nil {
  fmt.Println(err)
 }
 // 2.关闭打开的文件
 defer func() {
  err := fp.Close()
  if err != nil {
   fmt.Println(err)
  }
 }()

 // 注意点:
 // 如果O_RDWR模式打开, 被打开文件已经有内容, 会从最前面开始覆盖
 // 如果O_APPEND模式打开, 被打开文件已经有内容, 会从在最后追加
 // 3.往文件中写入数据
 bytes := []byte{'l','n','j','\r','\n'}
 fp.Write(bytes)
 fp.WriteString("www.it666.com\r\n")
}
带缓冲区写入
package main

import (
 "bufio"
 "fmt"
 "os"
)

func main() {

 // 1.打开文件
 fp, err := os.OpenFile("d:/lnj.txt", os.O_CREATE|os.O_APPEND, 0666)
 if err != nil {
  fmt.Println(err)
 }
 // 2.关闭打开的文件
 defer func() {
  err := fp.Close()
  if err != nil {
   fmt.Println(err)
  }
 }()

 // 3.创建缓冲区
 w := bufio.NewWriter(fp)

 // 4.写入数据到缓冲区
 bytes := []byte{'l','n','j','\r','\n'}
 w.Write(bytes)
 w.WriteString("www.it666.com\r\n")

 // 5.将缓冲区中的数据刷新到文件
 w.Flush()
}
WriteFile函数
package main

import (
 "fmt"
 "io/ioutil"
)

func main() {

 // 1.写入数据到指定文件
 data := []byte{'l','n','j','\r','\n'}
 err := ioutil.WriteFile("d:/abc.txt", data, 0666)
 if err != nil {
  fmt.Println(err)
 }else{
  fmt.Println("写入成功")
 }
}
判断文件是否存在
Stat函数
func Stat(name string) (fi FileInfo, err error)
返回值: FileInfo
type FileInfo interface {
    Name() string       // 文件的名字（不含扩展名）
    Size() int64        // 普通文件返回值表示其大小；其他文件的返回值含义各系统不同
    Mode() FileMode     // 文件的模式位
    ModTime() time.Time // 文件的修改时间
    IsDir() bool        // 等价于Mode().IsDir()
    Sys() interface{}   // 底层数据来源（可以返回nil）
}
返回值: error
返回值error等于nil,代表文件存在
返回值error不等于nil, 可以进一步通过IsNotExist判断, 如果返回true代表文件不存在
返回值error如果返回其它错误, 则不确定文件是否存在
package main

import (
 "fmt"
 "os"
)

func main() {

 info, err := os.Stat("d:/lnj.txt")
 if err == nil {
  fmt.Println("文件存在")
  fmt.Println(info.Name())
 }else if os.IsNotExist(err) {
  fmt.Println("文件不存在")
 }else{
  fmt.Println("不确定")
 }
}
练习
将一个文本文件拷贝到另外一个文件中
尝试用上面学习的其它方法实现下
package main

import (
 "fmt"
 "io/ioutil"
)

func main() {

 // 1.读取一个文件
 buf, err := ioutil.ReadFile("d:/lnj.txt")
 if err != nil {
  fmt.Println(err)
  return
 }
 // 2.写入读取的数据到另一个文件
 err =ioutil.WriteFile("d:/abc.txt", buf, 0666)
 if err != nil {
  fmt.Println(err)
  return
 }
 fmt.Println("拷贝完成")

}
将一个图片/视频文件拷贝到另一个文件
package main

import (
 "bufio"
 "fmt"
 "io"
 "os"
)

func main() {

 // 1.定义拷贝文件的路径
 scrPath := "D:/a.png"
 destPath := "E:/b.png"
 // 2.打开被拷贝文件
 fr, err := os.Open(scrPath)
 if err != nil {
  fmt.Println(err)
  return
 }
 // 3.关闭打开文件
 defer func() {
  err := fr.Close()
  if err != nil{
   fmt.Println(err)
  }
 }()
 // 4.创建读取缓冲区
 r := bufio.NewReader(fr)

 // 1.创建写入文件
 fw, err := os.Create(destPath)
 if err != nil {
  fmt.Println(err)
  return
 }
 // 2.关闭打开文件
 defer func() {
  err := fw.Close()
  if err != nil{
   fmt.Println(err)
  }
 }()
 // 3.创建写入缓冲区
 w := bufio.NewWriter(fw)
 // 4.利用系统copy函数完成拷贝
 count, err := io.Copy(w, r)
 if err != nil {
  fmt.Println(err)
  return
 }
 fmt.Println(count)
 fmt.Println("拷贝完成")
}
自己查文档实现遍历文件夹
例如: 给一个文件夹路径, 获取该文件夹下所有文件, 并将所有文件路径保存到切片中
并发编程基本概念
学习并发编程之前我们需要脑补几个基础知识和思考一个问题
什么是串行?
什么是并行?
什么是并发?
什么是程序?
什么是进程?
什么是线程?
什么是协程?
什么是串行?
串行就是按顺序执行, 就好比银行只有1个窗口, 有3个人要办事, 那么必须排队, 只有前面的人办完走人, 才能轮到你
在计算机中, 同一时刻, 只能有一条指令, 在一个CPU上执行, 后面的指令必须等到前面指令执行完才能执行, 就是串行 +图片
什么是并行?
并行就是同时执行, 就好比银行有3个窗口, 有3个人要办事, 只需要到空窗口即可立即办事.
在计算机中, 同一时刻, 有多条指令, 在多个CPU上执行, 就是并行
从以上分析不难看出, 并行的速度优于串行 +图片
什么是并发?
并发是伪并行, 就好比银行只有1个窗口, 有3个人要办事, 那么没轮到后面的人时, 后面的人可以用拖鞋先排队, 去吃个早餐,买个东西啥的, 感觉差不多要到自己时再回来办事
在计算机中, ***同一时刻, 只能有一条指令, 在一个CPU上执行, 但是CPU会快速的在多条指令之间轮询执行***就是并发
并行和并发的区别就好比古代的三妻四妾(名正言顺, 光明正大)和现代三妻四妾(抽空幽会, 小三小四)
图片
图片
总结:
多线程程序在单核上运行, 就是并发
多线程程序在多核上运行,就是并行
什么是程序?
程序是指将编译型语言编写好的代码通过编译工具编译之后存储在硬盘上的一个二进制文件, 会占用磁盘空间, 但不会占用系统资源
例如我们通过C++编写了一个聊天程序, 然后通过C++编译器将编写好的代码编译成一个二进制的文件, 那么这个二进制的文件就是一个程序
什么是进程?
进程是指程序在操作系统中的一次执行过程, 是系统进行资源分配和调度的基本单位
例如:
启动记事本这个程序, 在系统中就会创建一个记事本进程
再次启动记事本这个程序, 又会在系统中创建一个记事本进程
程序和进程的关系就好比剧本和演出的关系
剧本对应程序, 演出对应进程. 同一个剧本可以在多个舞台同时演出互不影响, 同一个程序可以在系统中开启多个进程互不影响
所以程序和进程的关系是1:N, 所以多个进程的空间是独立的
什么是线程?
线程是指进程中的一个执行实例, 是程序执行的最小单元, 它是比进程更小的能独立运行的基本单位
一个进程中至少有一个线程, 这个线程我们称之为主线程
一个进程中除了主线程以外, 我们还可以创建和销毁多个线程
例如:
启动迅雷这个程序, 系统会创建一个迅雷进程, 并且默认会有一个主线程, 用于执行迅雷默认的业务逻辑
当我们利用迅雷下载多个任务的时候, 会发现多个任务都在同时下载, 此时为了能够同时执行下载操作, 迅雷就会创建多个线程, 将不同的下载任务放到不同的线程中执行
图片
什么是协程?
协程是一种用户态的轻量级线程，又称微线程，英文名Coroutine
与传统的系统级别进程和线程相比, 协程最大的优势在于"轻量级". 可以轻松创建上万个不会导致系统资源衰竭. 而线程和进程通常很难超过1万个.这也是协程称之为"轻量级线程"的原因
一个线程中可以有任意多个协程, 但某一时刻只能有一个协程在运行, 多个协程分享所在线程分配到的计算机资源
图片
在协程中, 调用一个任务就像调用一个函数一样, 消耗系统资源极少, 但能达到进程、线程相同的并发效果
Go并发
Go在语言级别支持协程(多数语言在语法层面并不直接支持协程), 叫做goroutine.
人们把Go语言称之为21世纪的C语言. 第一是因为Go语言设计简单, 第二是因为21世纪最重要的就是并行程序设计.而Go从语言层面就支持并发和并行
Go并发小案例
package main

import (
 "fmt"
 "time"
)

func sing()  {
 for i:=0; i< 10; i++{
  fmt.Println("我在唱歌")
  time.Sleep(time.Millisecond)
 }
}
func dance() {
 for i:=0; i< 10; i++{
  fmt.Println("我在跳舞---")
  time.Sleep(time.Millisecond)
 }
}

func main() {
 // 串行: 必须先唱完歌才能跳舞
 //sing()
 //dance()

 // 并行: 可以边唱歌, 边跳舞
 // 注意点: 主线程不能死, 否则程序就退出了
 go sing() // 开启一个协程
 go dance() // 开启一个协程
 for{
  ;
 }
}
runtime包中常用的函数
package main
import (
 "fmt"
 "runtime"
)

func sing()  {
 for i:=0; i< 10; i++{
  fmt.Println("我在唱歌")
  // Gosched使当前go程放弃处理器，以让其它go程运行。
  // 它不会挂起当前go程，因此当前go程未来会恢复执行
  runtime.Gosched()
 }
}
func dance() {
 for i:=0; i< 10; i++{
  fmt.Println("我在跳舞---")
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
 "fmt"
 "runtime"
)

func main() {
 go func() {
  fmt.Println("123")
  // 退出当前协程
  //runtime.Goexit()
  // 退出当前函数
  //return
  test()
  fmt.Println("456")
 }()
 for{
  ;
 }
}

func test()  {
 fmt.Println("abc")
 // 只会结束当前函数, 协程中的其它代码会继续执行
 //return
 // 会结束整个协程, Goexit之后整个协程中的其它代码不会执行
 runtime.Goexit()
 fmt.Println("def")
}
package main
import (
 "fmt"
 "runtime"
)
func main() {
 num := runtime.NumCPU()
 fmt.Println(num)
}
func main() {
  // 获取带来了CPU个数
  num := runtime.NumCPU()
  // 设置同时使用CPU个数
  runtime.GOMAXPROCS(num)
}
Go语言1.8之前, 需要我们手动设置
Go语言1.8之后, 不需要我们手动设置
GOMAXPROCS: 设置可同时执行的最大CPU数，并返回先前的设置
NumCPU: 返回本地机器的逻辑CPU个数
Goexit: 终止调用它的go程, 其它go程不会受影响
Gosched:使当前go程放弃处理器，以让其它go程运行
多线程同步问题
互斥锁
互斥锁的本质是当一个goroutine访问的时候, 其它goroutine都不能访问
这样就能实现资源同步, 但是在避免资源竞争的同时也降低了程序的并发性能. 程序由原来的并发执行变成了串行
案例:
有一个打印函数, 用于逐个打印字符串中的字符, 有两个人都开启了goroutine去打印
如果没有添加互斥锁, 那么两个人都有机会输出自己的内容
如果添加了互斥锁, 那么会先输出某一个的, 输出完毕之后再输出另外一个人的 ```go package main import ( "fmt" "sync" "time" ) // 创建一把互斥锁 var lock sync.Mutex
func printer(str string)  { // 让先来的人拿到锁, 把当前函数锁住, 其它人都无法执行 // 上厕所关门 lock.Lock() for _, v := range str{ fmt.Printf("%c", v) time.Sleep(time.Millisecond * 500) } // 先来的人执行完毕之后, 把锁释放掉, 让其它人可以继续使用当前函数 // 上厕所开门 lock.Unlock() } func person1()  { printer("hello") } func person2()  { printer("world") } func main() { go person1() go person2() for{ ; } }

---

## 生产者消费者问题

- 所谓的生产者消费者模型就是
+ 某个模块(函数)负责生产数据, 这些数据由另一个模块来负责处理
+ 一般生产者消费者模型包含三个部分"生产者"、"缓冲区"、"消费者"
  ![](https://img-blog.csdnimg.cn/img_convert/c6b9dc46029e893cc11f3a85b7f223f0.png)
- 为什么生产者消费者模型要含三个部分?  直接生产和消费不行么?
- 一个案例说明一切
+ 生产者好比现实生活中的某个人
+ 缓冲区好比现实生活中的邮箱
+ 消费者好比现实生活中的邮递员
- 如果只有生产者和消费者, 那么相当于只有写信的人和邮递员, 那么如果将来过去的邮递员离职了, 你想邮寄信件必须想办法结识新的邮递员(消费者发生变化, 会直接影响生产者, 耦合性太强)
- 如果在生产者和消费者之间添加一个缓冲区, 那么就好比有了邮箱, 以后邮寄信件不是找邮递员, 只需把信件投递到邮箱中即可, 写信的人不需要关心邮递员是谁(解耦)
- 如果只有生产者和消费者, 那么每个人邮寄信件都需要直接找邮递员(1对1关系), 如果有10个人要邮寄信件, 那么邮递员只能依次找到每个人, 然后才能取件(效率低下)
- 如果在生产者和消费者之间添加一个缓冲区, 那么所有的人只需要将信件投递到邮箱即可, 邮递员不用关心有多少人要邮寄信件, 也不用依次取件, 只需要找到邮箱从邮箱中统一取件即可(效率提高)
- 如果只有生产者和消费者, 那么如果邮寄信件太多邮递员无法一次拿走, 这个时候非常难办
- 如果在生产者和消费者之间添加一个缓冲区, 那么如果信件太多可以先拿走一部分, 剩下的继续放到邮箱中下次再拿
- ```... ...```

---

## 生产者和消费者资源竞争问题

- 例如生产比较慢, 而消费比较快, 就会导致消费者消费到错误数据

```go
package main

import (
  "fmt"
  "math/rand"
  "sync"
  "time"
)
// 创建一把互斥锁
var lock = sync.Mutex{}

// 定义缓冲区
var sce []int = make([]int, 10)

// 定义生产者
func producer(){
  // 加锁, 注意是lock就是我们的锁, 全局公用一把锁
  lock.Lock()
  rand.Seed(time.Now().UnixNano())
  for i:=0;i<10;i++{
   num := rand.Intn(100)
   sce[i] = num
   fmt.Println("生产者生产了: ", num)
   time.Sleep(time.Millisecond * 500)
  }
  // 解锁
  lock.Unlock()
}
// 定义消费者
func consumer()  {
  // 加锁, 注意和生产者中用的是同一把锁
  // 如果生产者中已加过了, 则阻塞直到解锁后再重新加锁
  lock.Lock()
  for i:=0;i<10;i++{
   num := sce[i]
   fmt.Println("---消费者消费了", num)
  }
  lock.Unlock()
}

func main() {
  go producer()
  go consumer()
  for{
   ;
  }
}
思考: 那如果是一对多, 或者多对多的关系, 上述代码有问题么?
管道(Channel)
上述实现并发的代码中为了保持主线程不挂掉, 我们都会在最后写上一个死循环或者写上一个定时器来实现等待goroutine执行完毕
上述实现并发的代码中为了解决生产者消费者资源同步问题, 我们利用加锁来解决, 但是这仅仅是一对一的情况, 如果是一对多或者多对多, 上述代码还是会出现问题
综上所述, 企业开发中需要一种更牛X的技术来解决上述问题, 那就是管道(Channel)
Channel的本质是一个队列
图片
Channel是线程安全的, 也就是自带锁定功能
Channel声明和初始化
声明: var 变量名chan 数据类型
初始化: mych := make(chan 数据类型, 容量)
Channel和切片还有字典一样, 必须make之后才能使用
Channel和切片还有字典一样, 是引用类型
package main
import "fmt"
func main() {
 // 1.声明一个管道
 var mych chan int
 // 2.初始化一个管道
 mych = make(chan int, 3)
 // 3.查看管道的长度和容量
 fmt.Println("长度是", len(mych), "容量是", cap(mych))
 // 4.像管道中写入数据
 mych<- 666
 fmt.Println("长度是", len(mych), "容量是", cap(mych))
 // 5.取出管道中写入的数据
 num := <-mych
 fmt.Println("num = ", num)
 fmt.Println("长度是", len(mych), "容量是", cap(mych))
}
注意点:
管道中只能存放声明的数据类型, 不能存放其它数据类型
管道中如果已经没有数据, 再取就会报错
如果管道中数据已满, 再写入就会报错
package main

import "fmt"

func main() {
 // 1.声明一个管道
 var mych chan int
 // 2.初始化一个管道
 mych = make(chan int, 3)

 // 注意点: 管道中只能存放声明的数据类型, 不能存放其它数据类型
 //mych<-3.14

 // 注意点: 管道中如果已经没有数据, 
 // 并且检测不到有其它协程再往管道中写入数据, 那么再取就会报错
 //num = <-mych
 //fmt.Println("num = ", num)

 // 注意点: 如果管道中数据已满, 再写入就会报错
 mych<- 666
 mych<- 777
 mych<- 888
 mych<- 999
}
管道的关闭和遍历
package main

import "fmt"

func main() {
 // 1.创建一个管道
 mych := make(chan int, 3)
 // 2.往管道中存入数据
 mych<-666
 mych<-777
 mych<-888
 // 3.遍历管道
 // 第一次遍历i等于0, len = 3,
 // 第二次遍历i等于1, len = 2
 // 第三次遍历i等于2, len = 1
 //for i:=0; i<len(mych); i++{
 // fmt.Println(<-mych) // 输出结果不正确
 //}

 // 3.写入完数据之后先关闭管道
 // 注意点: 管道关闭之后只能读不能写
 close(mych)
 //mych<- 999 // 报错

 // 4.遍历管道
 // 利用for range遍历, 必须先关闭管道, 否则会报错
 //for value := range mych{
 // fmt.Println(value)
 //}

 // close主要用途:
 // 在企业开发中我们可能不确定管道有还没有有数据, 所以我们可能一直获取
 // 但是我们可以通过ok-idiom模式判断管道是否关闭, 如果关闭会返回false给ok
 for{
  if num, ok:= <-mych; ok{
   fmt.Println(num)
  }else{
   break;
  }
 }
 fmt.Println("数据读取完毕")
}
Channel阻塞现象
单独在主线程中操作管道, 写满了会报错, 没有数据去获取也会报错
只要在协程中操作管道过, 写满了就会阻塞, 没有就数据去获取也会阻塞
package main
import (
 "fmt"
 "time"
)
// 创建一个管道
var myCh = make(chan int, 5)
func demo()  {
 var myCh = make(chan int, 5)
 //myCh<-111
 //myCh<-222
 //myCh<-333
 //myCh<-444
 //myCh<-555
 //fmt.Println("我是第六次添加之前代码")
 //myCh<-666
 //fmt.Println("我是第六次添加之后代码")

 fmt.Println("我是第六次直接获取之前代码")
 <-myCh
 fmt.Println("我是第六次直接获取之后代码")
}
func test()  {
 //myCh<-111
 //myCh<-222
 //myCh<-333
 //myCh<-444
 //myCh<-555
 //fmt.Println("我是第六次添加之前代码")
 //myCh<-666
 //fmt.Println("我是第六次添加之后代码")

 //fmt.Println("我是第六次直接获取之前代码")
 //<-myCh
 //fmt.Println("我是第六次直接获取之后代码")
}
func example()  {
 time.Sleep(time.Second * 2)
 myCh<-666
}
func main() {
 // 1.同一个go程中操作管道
 // 写满了会报错
 //myCh<-111
 //myCh<-222
 //myCh<-333
 //myCh<-444
 //myCh<-555
 //myCh<-666

 // 没有了去取也会报错
 //<-myCh

 // 2.在协程中操作管道
 // 写满了不会报错, 但是会阻塞
 //go test()

 // 没有了去取也不会报错, 也会阻塞
 //go test()

 //go demo()
 //go demo()
 
 // 3.只要在协程中操作了管道, 就会发生阻塞现象
 go example()
 fmt.Println("myCh之前代码")
 <-myCh
 fmt.Println("myCh之后代码")

 //for{
 // ;
 //}
}
利用Channel实现生产者消费者
package main

import (
 "fmt"
 "math/rand"
 "time"
)
// 定义缓冲区
var myCh = make(chan int, 5)
var exitCh = make(chan bool, 1)

// 定义生产者
func producer(){
 rand.Seed(time.Now().UnixNano())
 for i:=0;i<10;i++{
  num := rand.Intn(100)
  fmt.Println("生产者生产了: ", num)
  // 往管道中写入数据
  myCh<-num
  //time.Sleep(time.Millisecond * 500)
 }
 // 生产完毕之后关闭管道
 close(myCh)
 fmt.Println("生产者停止生产")
}
// 定义消费者
func consumer()  {
 // 不断从管道中获取数据, 直到管道关闭位置
 for{
  if num, ok := <-myCh; !ok{
   break
  }else{
   fmt.Println("---消费者消费了", num)
  }
 }
 fmt.Println("消费者停止消费")
 exitCh<-true
}

func main() {
 go producer()
 go consumer()
 fmt.Println("exitCh之前代码")
 <-exitCh
 fmt.Println("exitCh之后代码") 
}
无缓冲Channel
package main
import "fmt"
var myCh1 = make(chan int, 5)
var myCh2 = make(chan int, 0)
func main() {
 // 有缓冲管道
 // 只写入, 不读取不会报错
 //myCh1<-1
 //myCh1<-2
 //myCh1<-3
 //myCh1<-4
 //myCh1<-5
 //fmt.Println("len =",len(myCh1), "cap =", cap(myCh1))

 // 无缓冲管道
 // 只有两端同时准备好才不会报错
 go func() {
  fmt.Println(<-myCh2)
 }()
 // 只写入, 不读取会报错
 myCh2<-1
 //fmt.Println("len =",len(myCh2), "cap =", cap(myCh2))
 // 写入之后在同一个线程读取也会报错
 //fmt.Println(<-myCh2)
 // 在主程中先写入, 在子程中后读取也会报错
 //go func() {
 // fmt.Println(<-myCh2)
 //}()
}
无缓冲Channel和有缓冲Channel
有缓冲管道具备异步的能力(写几个读一个或读几个)
无缓冲管道具备同步的能力(写一个读一个)
package main
import (
 "fmt"
 "math/rand"
 "time"
)
// 定义缓冲区
//var myCh = make(chan int, 0)
var myCh = make(chan int)
var exitCh = make(chan bool, 1)

// 定义生产者
func producer(){
 rand.Seed(time.Now().UnixNano())
 for i:=0;i<10;i++{
  num := rand.Intn(100)
  fmt.Println("生产者生产了: ", num)
  // 往管道中写入数据
  myCh<-num
  //time.Sleep(time.Millisecond * 500)
 }
 // 生产完毕之后关闭管道
 close(myCh)
 fmt.Println("生产者停止生产")
}
// 定义消费者
func consumer()  {
 // 不断从管道中获取数据, 直到管道关闭位置
 for{
  if num, ok := <-myCh; !ok{
   break
  }else{
   fmt.Println("---消费者消费了", num)
  }
 }
 fmt.Println("消费者停止消费")
 exitCh<-true
}

func main() {
 go producer()
 go consumer()
 fmt.Println("exitCh之前代码")
 <-exitCh
 fmt.Println("exitCh之后代码")
}
IO的延迟说明: 看到的输出结果和我们想象的不太一样, 是因为IO输出非常消耗性能, 输出之后还没来得及赋值可能就跑去执行别的协程了
单向管道和双向管道
默认情况下所有管道都是双向了(可读可写)
但是在企业开发中, 我们经常需要用到将一个管道作为参数传递
在传递的过程中希望对方只能单向使用, 要么只能写,要么只能读
双向管道
var myCh chan int = make(chan int, 0)
单向管道
var myCh chan<- int = make(chan<- int, 0)
var myCh <-chan int = make(<-chan int, 0)
注意点:
双向管道可以自动转换为任意一种单向管道
单向管道不能转换为双向管道
package main

import "fmt"

func main() {
 // 1.定义一个双向管道
 var myCh chan int = make(chan int, 5)

 // 2.将双向管道转换单向管道
 var myCh2 chan<- int
 myCh2 = myCh
 fmt.Println(myCh2)
 var myCh3 <-chan int
 myCh3 = myCh
 fmt.Println(myCh3)

 // 3.双向管道,可读可写
 myCh<-1
 myCh<-2
 myCh<-3
 fmt.Println(<-myCh)
 
 // 3.只写管道,只能写, 不能读
 // myCh2<-666
 // fmt.Println(<-myCh2)

 // 4.指读管道, 只能读,不能写
 fmt.Println(<-myCh3)
 //myCh3<-666
 
 // 注意点: 管道之间赋值是地址传递, 以上三个管道底层指向相同容器
}
单向管道作为函数参数
package main
import (
 "fmt"
 "math/rand"
 "time"
)
// 定义生产者
func producer(myCh chan<- int){
 rand.Seed(time.Now().UnixNano())
 for i:=0;i<10;i++{
  num := rand.Intn(100)
  fmt.Println("生产者生产了: ", num)
  // 往管道中写入数据
  myCh<-num
  //time.Sleep(time.Millisecond * 500)
 }
 // 生产完毕之后关闭管道
 close(myCh)
 fmt.Println("生产者停止生产")
}
// 定义消费者
func consumer(myCh <-chan int)  {
 // 不断从管道中获取数据, 直到管道关闭位置
 for{
  if num, ok := <-myCh; !ok{
   break
  }else{
   fmt.Println("---消费者消费了", num)
  }
 }
 fmt.Println("消费者停止消费")

}

func main() {
 // 定义缓冲区
 var myCh = make(chan int, 5)
 go producer(myCh)
 consumer(myCh)
}
select选择结构
select是Go中的一个控制结构，类似于switch语句，用于处理异步IO操作
如果有多个case都可以运行，select会随机选出一个执行，其他不会执行。
如果没有可运行的case语句，且有default语句，那么就会执行default的动作。
如果没有可运行的case语句，且没有default语句，select将阻塞，直到某个case通信可以运行
 select {
 case IO操作1:
  IO操作1读取或写入成功就执行
 case IO操作2:
  IO操作2读取或写入成功就执行
 default:
  如果上面case都没有成功，则进入default处理流程
 }
注意点:
select的case后面必须是一个IO操作
一般情况下使用select结构不用写default
package main

import (
 "fmt"
 "time"
)
func main() {
 // 创建管道
 var myCh = make(chan int)
 var exitCh = make(chan bool)

 // 生产数据
 go func() {
  for i:=0;i <10;i++{
   myCh<-i
   time.Sleep(time.Second)
  }
  //close(myCh)
  exitCh<-true
 }()

 // 读取数据
 for{
  fmt.Println("读取代码被执行了")
  select {
  case num:= <-myCh:
   fmt.Println("读到了", num)
  case <-exitCh:
   //break // 没用, 跳出的是select
   return
  }
  fmt.Println("-----------")
 }
}
select应用场景
实现多路监听
实现超时处理
package main
import (
 "fmt"
 "runtime"
 "time"
)

func main() {
 // 1.创建管道
 myCh := make(chan int, 5)
 exitCh := make(chan bool)

 // 2.生成数据
 go func() {
  for i:=0; i<10; i++ {
   myCh<-i
   time.Sleep(time.Second * 3)
  }
 }()

 // 3.获取数据
 go func() {
  for{
   select {
   case num:= <-myCh:
    fmt.Println(num)
   case <-time.After(time.Second * 2):
    exitCh<-true
    runtime.Goexit()
   }
  }
 }()

 <-exitCh
 fmt.Println("程序结束")
}
定时器补充
一次性定时器
NewTimer函数
func NewTimer(d Duration) *Timer
NewTimer创建一个Timer，它会在到期后向Timer自身的C字段发送当时的时间
type Timer struct {
 C <-chan Time // 对于我们来说, 这个属性是只读的管道
 r runtimeTimer
}
package main
import (
 "fmt"
 "time"
)
func main() {
 start := time.Now()
 fmt.Println("开始时间", start)
 timer := time.NewTimer(time.Second * 3)
 fmt.Println("读取之前代码被执行")
 end := <-timer.C // 系统写入数据之前会阻塞
 fmt.Println("读取之后代码被执行")
 fmt.Println("结束时间", end)
}
After函数
func After(d Duration) <-chan Time
底层就是对NewTimer的封装, 只不过返回值不同而已
func After(d Duration) <-chan Time {
 return NewTimer(d).C
}
package main
import (
 "fmt"
 "time"
)
func main() {
 start := time.Now()
 fmt.Println("开始时间", start)
 timer := time.After(time.Second * 3)
 fmt.Println("读取之前代码被执行")
 end := <-timer // 系统写入数据之前会阻塞
 fmt.Println("读取之后代码被执行")
 fmt.Println("结束时间", end)
}
周期性定时器
NewTicker函数
func NewTicker(d Duration) *Ticker
和NewTimer差不多, 只不过NewTimer只会往管道中写入一次数据, 而NewTicker每隔一段时间就会写一次
type Ticker struct {
    C <-chan Time // 周期性传递时间信息的通道
    // 内含隐藏或非导出字段
}
package main
import (
 "fmt"
 "time"
)
func main() {
 // 1.创建一个周期定时器
 ticker := time.NewTicker(time.Second)
 // 2.不断从重启定时器中获取时间
 for{
  t := <-ticker.C // 系统写入数据之前会阻塞
  fmt.Println(t)
 }
}
最后，码字不易，点赞，在看，关注，转发、一键四连支持。

收录于合集 #go语言
 
2
个
下一篇
Go 语言保姆级教程（2021版上）
阅读 556
18
9
