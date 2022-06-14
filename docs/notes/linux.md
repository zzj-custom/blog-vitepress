---
title: linux相关问题
---

# {{$frontmatter.title}}

## 一丶netstat

```php
netstat -nltp | grep 端口号

// 查看本地电脑的路由trance(mac)
netstat -nr 
```
- -a：显示本机所有连接和监听地端口
- -n：网络 `IP` 地址的形式，显示当前建立的有效连接和端口
- -r：显示路由表信息
- -s：显示按协议的统计信息
- -v：显示当前有效的连接
- -t：显示所有 `TCP` 协议连接情况
- -u：显示所有 `UDP` 协议连接情况
- -i：显示自动配置端口的状态
- -l：仅仅显示连接状态为 `listening` 的服务网络状态
- -p：显示 `pid/program name`

## 二丶查看linux版本

```json
cat /proc/version
```

## 三丶查看进程情况  

```php
ps -ef | grep 名称
```
> 参数：
  - -A ：所有的进程均显示出来，与 `-e` 具有同样的效用；
  - -a ： 显示现行终端机下的所有进程，包括其他用户的进程；
  - -u ：以用户为主的进程状态 ；
  - x ：通常与 `a` 这个参数一起使用，可列出较完整信息。
   输出格式规划：
  - l ：较长、较详细的将该 `PID` 的的信息列出；
  - j ：工作的格式 (`jobs format`)
  - -f ：做一个更为完整的输出。


## 四丶查找某个文件里面存在什么字符

```php
grep 需要查找的字符  目录名称(目录下面是文件)
```
    

## 五丶 重启nginx 

```php
nginx -s reload
```

## 六丶limux压缩文件

```php
zip -r 压缩后文件名 压缩文件路径
```


## 七丶将本地文件上传到服务器

```php
scp -P 指定端口号 需要上传的文件路径 root@255.255.255.255:上传后的文件路径
```
 
## 八丶vim文本替换使用

```php
%s/from(被替换内容)/to(替换后的内容)
```

## 九丶杀死进程名称

```php
killall php-fpm && php-fpm

命令相当于ps -ef | grep 进程名 和 kill pid
```
## 十丶linux下面使用curl下载文件

```php
curl -O 文件路径（下载的是远程服务器的同名文件）

curl -o 自定义文件名称  远程服务器文件地址
```

## 十一丶系统命令

```php
// 查看磁盘情况
df -h 

// 查看内存情况
free -h

// 查看当前内核版本
uname -r

// 查看系统详情
cat /etc/os-release
```

## 十二丶查找文件或者目录

```php
// 查找目录
find /（查找范围） -name '查找关键字' -type d

// 查找文件
find /（查找范围） -name 查找关键字 -print
```

## 十三丶wget命令

```php
//下载文件
wget url 地址

// 断点续传下载文件
wget --continue https://www.lxlinux.net/linux-distro.iso

//如果你不想将下载的文件保存在本地，而只是想将其显示在标准输出（stdout）里
wget http://www.lxlinux.net --output-document newfile.html 

//批量下载文件
wget http://www.lxlinux.net/file_{1..4}.txt
```

## 十四丶查看端口号使用情况

:::demo 查看端口号

```php

// lsof命令

// 查看8080端口占用
lsof -i:8080
// 显示开启文件abc.txt的进程
lsof abc.txt
// 显示abc进程现在打开的文件
lsof -c abc
// 列出进程号为1234的进程所打开的文件
lsof -c -p 1234
// 显示归属gid的进程情况
lsof -g gid
// 显示目录下被进程开启的文件
lsof +d /usr/local/
// 同上，但是会搜索目录下的目录，时间较长
lsof +D /usr/local/
// 显示使用fd为4的进程
lsof -d 4
// 显示所有打开的端口和UNIX domain文件
lsof -i -U

// netstat命令
// -t (tcp) 仅显示tcp相关选项
// -u (udp)仅显示udp相关选项
// -n 拒绝显示别名，能显示数字的全部转化为数字
// -l 仅列出在Listen(监听)的服务状态
// -p 显示建立相关链接的程序名 （mac下面的netstat这个参数不能使用）
netstat -tunlp | grep 端口号


```

:::