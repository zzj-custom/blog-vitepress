---
title: Ts相关问题
---

# {{$frontmatter.title}}

## 一丶数据类型

- number类型
```ts
const num: number = 12
```

- 字符串类型
```ts
const str: string = 'str'
```

- 布尔类型
```ts
const bool: boolean = true
```

- 数组类型
```ts
const arr: number[] = [1, 2, 3]
//泛型写法
const arrar: Array<number> = [1, 2, 3]

const arrString: string[] = ['a', 'b', 'c']
//泛型写法
const arrayString: Array<string> = ['a', 'b', 'c']
```


- 枚举
```ts
enum Direction {
  EAST,
  SOUTH,
  WEST,
  NORTH
}
enum Direction {
  EAST1 = 5
}

// 默认从零开始
console.log(Direction.EAST)
console.log(Direction.EAST1)


enum DirectionTwo {
  EAST = 3,
  SOUTH,
  WEST,
  NORTH
}
// 添加默认从3开始
console.log(DirectionTwo.EAST)

// 字符串枚举
enum DirectionThree {
  EAST = 'EAST',
  SOUTH = 'SOUTH',
  WEST = "WEST",
  NORTH = "NORTH"
}
console.log(DirectionThree.EAST)

// 异构枚举
//字符串下面这个必须填写一个初始值
enum DirectionFour {
  ONE,
  TWO,
  THREE = 'three',
  FOUR = 'four',
  FIVE = 9,
  SIX
}
console.log(DirectionFour.TWO)
console.log(DirectionFour.FOUR)
console.log(DirectionFour.SIX)
```

- 任意类型
```ts
const any: any = 12
const anyString: any = 'any'
const anyBoolean: any = true
const anyArray: any = [1, 2, 3]
```

- unknewn类型(和any类型相似)
```ts
//const stringType: string = type  //不能将unknown类型分配给string类型
//unknown 类型只能被赋值给 any 类型和 unknown 类型本身。直观地说，这是有道理的：只有能够保存任意类型值的容器才能保存 unknown 类型的值。毕竟我们不知道变量 value 中存储了什么类型的值。
let type: unknown
const testUnknownType: unknown = '12'
```

- 元组类型
```ts
// 元组和数组是类似的，使用元组必须提供属性类型
const tuple: [number, string, boolean] = [12, '12', true]
```

- void类型
```ts
//声明一个 void 类型的变量没有什么作用，因为它的值只能为 undefined 或 null
function voidType(): void {
  console.log('这是展示void类型')
}
const voidConst: void = null || undefined
```

::: tip 说明
某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型
:::

- null和undefined类型
```ts
const nullType: null = null
const undefinedType: undefined = undefined
```

::: tip 说明
默认情况下 `null` 和 `undefined` 是所有类型的子类型。 就是说你可以把 `null` 和 `undefined` 赋值给 number类型的变量。然而，如果你指定了--`strictNullChecks` 标记，`null` 和 `undefined` 只能赋值给 `void` 和它们各自的类型。
:::


- never类型
```ts
function neverType(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) { }
}

// 使用never类型的特性来做全面性检查
type CheckType = string | number | boolean
controlCheckType(true);
function controlCheckType(checkType: CheckType) {
  switch (typeof checkType) {
    case 'string':
      console.log("这是字符串类型")
      break;
    case 'number':
      console.log("这是数字类型")
      break;
    case 'boolean':
      console.log("这是布尔类型")
      break;
    default:
      //保证这里一定会将类型都检查完成(使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码)
      const check: never = checkType
  }
}
```

::: tip 说明
`never` 表示的是那些永不存在的值的类型, 是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
:::

## 二丶类型断言

-- 使用尖括号表示

```ts
const someString = 'this is string'
// 类型断言
const len = (<string>someString).length
```

- 使用as表示
```ts
const someString = 'this is string'
//类型断言
const lengthString = (someString as string).length
console.log(len, lengthString)
```

## 三丶类型守卫

> 类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内。换句话说，类型保护可以保证一个字符串是一个字符串，尽管它的值也可以是一个数值。类型保护与特性检测并不是完全不同，其主要思想是尝试检测属性、方法或原型，以确定如何处理值，目前主要有四种的方式来实现类型保护

- in关键字

```ts
interface Admin {
  name: string;
  privileges: string[]
}

interface Employee {
  name: string
  startDate: Date
}

type UnknewEmployee = Admin | Employee

function printEmployeeInformation(emp: UnknewEmployee) {
  console.log(`name:${emp.name}`)

  if ("privileges" in emp) {
    console.log(`proviliges:${emp.privileges}`)
  }

  if ("startDate" in emp) {
    console.log(`startDate:${emp.startDate.toLocaleString()}`)
  }
}

printEmployeeInformation({ name: 'admin', privileges: ['更新', '删除'] })
printEmployeeInformation({ name: 'admin', startDate: new Date() })
```

- typeof关键字

```ts
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(" ") + value
  }

  if (typeof padding === 'string') {
    return padding + value
  }

  throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log(padLeft("value", "key = "))
```

- instanceof关键字

```ts
interface Padder {
  getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpace: number) { }
  getPaddingString(): string {
    return Array(this.numSpace + 1).join(" ")
  }
}

class StringPadder implements Padder {
  constructor(private value: string) { }
  getPaddingString(): string {
    return this.value
  }
}

const padder: Padder = new SpaceRepeatingPadder(6)

//类型收窄
if (padder instanceof SpaceRepeatingPadder) {
  console.log(padder.getPaddingString())
} else if (padder instanceof StringPadder) {
  console.log(padder.getPaddingString())
} else {
  console.log("类型获取失败")
}
```

- 自定义类型保护的类型谓词

```ts
function isNumber(params: any): params is number {
  return typeof params === 'number'
}

function isString(params: any): params is string {
  return typeof params === 'string'
}
```

## 四丶联合类型和类型别名

- 联合类型

::: tip 说明
联合类型通常与null或undefined一起使用
:::

```ts
const sayHello = (name: string | null | undefined) => {
  console.log(typeof name)
}
//接受参数类型可以是string或者null或者undefined
sayHello(undefined)

//可辨识的联合（可辨识要求联合类型中的每个元素都含有一个单例类型属性）

enum CarTransmission {
  Automatic = 200,
  Manual = 300
}

interface Motorcycle {
  vType: 'motorcycle'
  make: number
}

interface Car {
  vType: 'car'
  transmission: CarTransmission
}

interface Truck {
  vType: 'truck'
  capacity: number
}
```

::: tip 说明
在上述代码中，我们分别定义了 Motorcycle、 Car 和 Truck 三个接口，在这些接口中都包含一个 vType属性，该属性被称为可辨识的属性，而其它的属性只跟特性的接口相关。
:::

- 联合类型

```ts
type Vehicle = Motorcycle | Car | Truck

//现在我们就可以开始使用 Vehicle 联合类型，对于 Vehicle 类型的变量，它可以表示不同类型的车辆。

//类型守卫

const EVALUATION_FACTOR = Math.PI
function evaluatePrice(vehicle: Vehicle) {
  switch (vehicle.vType) {
    case 'motorcycle':
      return vehicle.make * EVALUATION_FACTOR
    case 'car':
      return vehicle.transmission * EVALUATION_FACTOR
    case 'truck':
      return vehicle.capacity * EVALUATION_FACTOR
  }
}
const myTruck: Truck = { vType: 'truck', capacity: 9.5 }
console.log(evaluatePrice(myTruck))

//类型别名

type Message = string | string[]
const greet = (_message: Message) => { }
```

## 五丶交叉类型

::: tip 说明
TypeScript 交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。
:::

```ts
interface IPersion {
  id: string
  age: number
}

interface IWorker {
  companyId: string
}

//定义交叉类型
type IStaff = IPersion & IWorker
const staff: IStaff = {
  id: "number one",
  age: 18,
  companyId: "9527"
}
console.log(typeof staff)
```

## 六丶函数

```ts
const exampleArray: number[] = [1, 2, 3]
//exampleArray.forEach(() => console.log('test'));
//exampleArray.forEach((value) => console.log(value))
exampleArray.forEach((value, index, arr) => {
  console.log(index + '-' + value)
  console.log(arr) //原始数组
})

function exampleFunction() {

  //未使用箭头函数
  setTimeout(function () {
    console.log('开始')
  }, 2000)

  //使用箭头函数
  setInterval(() => {
    console.log('开始')
  }, 1000)
}

//参数类型和返回类型

function createUserId(str: string): string {
  return str
}

//函数类型

let IdGenerator: (chars: string, nums: number) => string;
function createIdGenerator(name: string, id: number): string {
  return name + id
}
IdGenerator = createIdGenerator

//可选参数及默认参数
function exampleParamsFunction(id: number = 9527, name: string, age?: number): string {
  return age !== undefined ? `姓名:${name}\r年龄:${age}\rId:${id}` : `姓名:${name}\rId:${id}`
}
console.log(exampleParamsFunction(9527, 'zzj', 18))
//说明：在声明函数时，可以通过 ? 号来定义可选参数，但是可选参数必须放在普通函数后面，不然会导致编译出现问题

//剩余参数

function remainParams(params1: number, ...params2: string[]): string {
  return params1 + params2.join(",")
}

//函数重载（函数名相同但是函数参数个数以及类型不同的函数）

type overideType = number | string

function overide(param1: number, param2: number): number;
function overide(param1: string, param2: string): string;
function overide(param1: number, param2: string): string;
function overide(param1: string, param2: number): string;

//overide函数必须出现在声明之后，不然会提示错误，中间不能有任何其他的代码块
function overide(argu1: overideType, argu2: overideType) {
  if (typeof argu1 === 'string' || typeof argu2 === 'string') {
    return argu1.toString() + argu2.toString()
  }
  return argu1 + argu2
}

//类重载

class Calculator {
  overide(p1: number, p2: number): number
  overide(p1: number, p2: string): string
  overide(p1: string, p2: string): string
  overide(p1: string, p2: number): string

  overide(p1: overideType, p2: overideType) {
    if (typeof p1 === 'string' || typeof p2 === 'string') {
      return p1.toString() + p2.toString()
    }
    return p1 + p2
  }
}

const calcultor = new Calculator()
calcultor.overide(12, 13);
```

## 七丶数组

```ts
//解构

const arrayDeconstructor = [1, 2, 3]
const [p1, p2, p3] = arrayDeconstructor
const [pm1, ...pm2] = arrayDeconstructor

//数组展开结构

const expand = [...arrayDeconstructor, 4, 5, 6]

//数组遍历

expand.forEach(() => { })

for (const key in expand) {
  //console.log(expand[key])
}

for (const value of expand) {
  console.log(value)
}
```

## 八丶对象

```ts
//解构

const { myName, age } = { myName: 'zzj', age: 18 }
console.log(myName, age)

//对象展开运算符

const person = {
  id: 9527,
  name: '邹祝家',
  age: 18
}
const personDetail = { ...person, mobile: '18689223002', email: '1844066417@qq.com' }
const { id, ...detail } = personDetail
console.log(id, "\r", detail, "\r", personDetail)
```

## 九丶接口

```ts
//对象的描述

interface PersonInterface {
  name: string,
  age: number
}

const ShapeInterface: PersonInterface = {
  name: '邹祝家',
  age: 12
}

//可选和只读属性

interface OnlyInterface {
  readonly name: string,
  age?: number,  // 可选属性
  mobile: number
}

let onlyInterface: OnlyInterface = {
  name: '邹祝家',
  age: 18,
  mobile: 18689223002
}
//无法重新分配name属性，因为是只读属性
//onlyInterface.name = 'zzj' 

//只读属性用于限制只能在对象刚刚创建的时候修改其值。此外 TypeScript 还提供了 ReadonlyArray<T> 类型，它与 Array<T> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。

const onlyArray = [1, 2, 3]
let oA: ReadonlyArray<number> = onlyArray
//oA数组是只读类型，不能修改
//oA[0] = 12
```

## 十丶类

```ts
class Greeter {
  //静态属性
  static cname: string = 'greeter';
  //成员属性
  greeting: string;
  //构造函数
  constructor(message: string) {
    this.greeting = message
  }
  //静态方法
  static getClassName(): string {
    return "Class name is Greeter"
  }
  //成员方法
  greet() {
    return `Hello ${this.greeting}`
  }
}

const greeter = new Greeter('world')

//类外调用静态方法
console.log(Greeter.getClassName())
console.log(greeter.greet())
```