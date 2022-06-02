---
title: git相关问题
---

# {{$frontmatter.title}}

## 一丶根据某段时间获取git log

```php
git log --author='zqpzzj' --after="2022-04-13" --before="2022-04-15"
```

## 二丶设置用户名和邮箱

```php
git config --global user.name 'xxxx'
git config --global user.email 'xxxx'
```

## 三丶创建项目工程

- 新建远程仓库：在 `github` 中 `New repository` 输入 `Repository name`

- 本地初始化项目：在自己本地电脑上新建一个与 `github` 新项目工程同名的文件夹。

```php
cd repository_name && git init
```
::: tip 说明
repostory_name文件夹内会生成一个.git文件夹
`touch .gitignore` 创建git忽略文件，添加的文件或文件夹不会上传到远程仓库
:::

- 连接远程仓库
  
```php
// ssh方式
git remote add origin git@github.com:yourName/repositoryname.git

// http方式
git remote add origin https://github.com/yourName/repositoryname.git
```

- 从远程仓库 `pull`文件

```php
git pull origin master
```

- push远程仓库

```php
git push origin master
```


## 四丶将本地文件push到远程仓库
- 查看工作目录的状态

```php
git status
```

- 将文件添加到暂存区

```php
git add <file>　　　　　　　　
```

- 提交更改,添加备注信息(此时将暂存区的信息提交到本地仓库)
  
```php
git commit -m "本次提交的评论" 　　
```

- 将本地仓库的文件push到远程仓库

```php
git push origin master
```

::: tip 注意
可以使用 `git rebase` 进行变基操作，然后将提交 `tree` 变的没有分叉
若 `push` 不成功，可加 `-f` 进行强推操作，完全不建议强推，这样会把别人的提交记录全部干掉，但是别人的代码在本地还是能找到的
:::

## 五丶将远程仓库覆盖本地分支

```php
git fetch —all

git fetch -p 精简模式（删除的分支不会出现）

git reset --hard origin/master

git pull
```

## 六丶remote操作
     
```php
// 获取git仓库地址
git remote -v

// 更改remote地址
git remote set-url origin '更改的仓库地址'
```

## 七丶从某个提交拉出一个新分支

```php
git checkout commitID -b branchName
```

## 八丶删除分支

```php
//删除本地分支
git branch -D branchName     

//删除远程分支
git push origin -delete branchName 
```

## 九丶

```php
// 合并到的那个分支名称
git checkout branch_name

// 某个分支的名称
git rebase breach_name

// 查看分支是否已经合并到当前分支
git log
```

::: danger 说明
当前可能存在冲突，解决冲突然后提交
`git add -u && git rebase —continue && git push -f`
:::

## 十丶将某个分支的提交合并到另外一个分支

```json
git cherry-pick [<options>] <commit-ish>...

常用options:
    --quit                退出当前的chery-pick序列
    --continue            继续当前的chery-pick序列
    --abort               取消当前的chery-pick序列，恢复当前分支
    -n, --no-commit       不自动提交
    -e, --edit            编辑提交信息

git log —oneline -3     //查看最近三次提交记录

git cherry-pick commitId   //将某个commit提交合并到当前分支

可能存在合并冲突的情况：   git add -u && git cherry-pick —continue

git cherry-pick branchName
```


## 十一丶记录 `git` 问题

- `git push --force` 千万不要使用这个命令去强制提交数据，这个命令会覆盖其他所有的提交记录。

## 十二丶 `git` 文件提交过大的问题

```php
// 修改全局提交缓存大小
git config --global http.postBuffer 524288000
 
// 修改全局下载最低速度以及对应的最长时间
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999
```
