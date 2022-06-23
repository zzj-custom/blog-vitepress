---
title: mysql相关的知识体系
---

# {{$frontmatter.title}}

## 一丶Mysql的like模糊查询的替代方式

> 在使用 `msyql` 进行模糊查询的时候，很自然的会用到 `like` 语句，通常情况下，在数据量小的时候，不容易看出查询的效率，但在数据量达到百万级，千万级的时候，查询的效率就很容易显现出来。这个时候查询的效率就显得很重要！

- Like查询

-- 一般模糊查询 `like` 需要建立索引

```sql
SELECT * FROM user WHERE field like '%keyword%'
```

::: tip notice
用过 `explain` 查看上面语句，发现是没有使用到索引的，如果是数据量很大，那么这个查询效率是很低的，`'%keyword'` 也是不会使用到索引的 ，参考 `mysql` 的 `最左匹配原则`, 使用 `keyword%` 会使用索引。
:::

- LOCATE('substr',str,pos) 方法

```sql
-- keyword 是要搜索的内容，field 为被匹配的字段，查询出所有存在 keyword 的数据
SELECT * FROM user WHERE LOCATE('keyword', `field`) > 0
```

::: tip notice
返回 substr 在 str 中第一次出现的位置，如果 substr 在 str 中不存在，返回值为 0 。如果 pos 存在，返回 substr 在 str 第 pos 个位置后第一次出现的位置，如果 substr 在 str 中不存在，返回值为0。
:::


- POSITION('substr' IN field) 方法

```sql
SELECT * FROM user WHERE POSITION('keyword' IN `field`);
```

::: tip notice
`POSITION` 可以看做是 `LOCATE` 的别名，功能跟 `LOCATE` 一样
:::

- INSTR(str,'substr') 方法

```sql
SELECT * FROM user WHERE INSTR(`field`, 'keyword' ) > 0 ;
```

- FIND_IN_SET('keyword',filed) 方法

```sql
SELECT * FROM user WHERE FIND_IN_SET('keyword',`field`);
```

::: tip notice
返回 `field` 中 `keyword` 所在的位置索引，其中 `field` 必须以 `","` 分割开。
:::