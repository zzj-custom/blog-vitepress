---
title: 基础测试
---

# {{ $frontmatter.title }}

## 一丶基础测试

> 通过编写对数组的简单测试, 完整了解测试的基本惯例与步骤：

- 针对类 `Class` 的测试写在类 `ClassTest` 中。
- `ClassTest`（通常）继承自 `PHPUnit\Framework\TestCase`。
- 测试都是命名为 `test*` 的公用方法。也可以在方法的文档注释块 `docblock` 中使用 `@test` 标注将其标记为测试方法。
- 在测试方法内，类似于 `assertSame()`（[参见断言](mock.md)）这样的断言方法用来对实际值与预期值的匹配做出断言。

---

> 示例：数组的简单操作

```php
<?php

declare(strict_types=1);
/**
 * This file is part of Hyperf.
 *
 * @link     https://www.hyperf.io
 * @document https://hyperf.wiki
 * @contact  group@hyperf.io
 * @license  https://github.com/hyperf/hyperf/blob/master/LICENSE
 */
namespace HyperfTest\Cases\BaseTest;

use PHPUnit\Framework\TestCase;

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
        // 使用@test可以标注当前方法是测试方法，当然也可以使用test+方法名来命名
        $stack = [];
        $this->assertSame(0, count($stack));

        $stack = Arr::prepend($stack, 'test');
        $this->assertSame('test', Arr::first($stack));
        $this->assertSame(1, count($stack));

        $this->assertSame('test', array_pop($stack));
        $this->assertSame(0, count($stack));
    }
}

```

---

## 二丶 测试的依赖关系

::: warning 说明测试之间的依赖关系
单元测试主要是作为一种良好实践来编写的，它能帮助开发人员识别并修复 `bug`、重构代码，还可以看作被测软件单元的文档。要实现这些好处，理想的单元测试应当覆盖程序中所有可能的路径。一个单元测试通常覆盖一个函数或方法中的一个特定路径。但是，测试方法不一定是封装良好的独立实体。测试方法之间经常有隐含的依赖关系暗藏在测试的实现方案中。
:::

> `PHPUnit` 支持对测试方法之间的显式依赖关系进行声明。这种依赖关系并不是定义在测试方法的执行顺序中，而是允许生产者（`producer`）返回一个测试基境（`fixture`）的实例，并将此实例传递给依赖于它的消费者（`consumer`）们。
- 生产者（producer），是能生成被测单元并将其作为返回值的测试方法。
- 消费者（consumer），是依赖于一个或多个生产者及其返回值的测试方法。

---

> 示例： 用 `@depends` 标注来表示测试方法之间的依赖关系