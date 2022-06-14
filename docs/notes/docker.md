---
title: docker相关问题
---

# {{$frontmatter.title}}

## 一丶 ubuntu 安装

- 卸载旧版本 docker

```go
sudo apt-get remove docker docker-engine docker.io containerd runc
```

- 更新 apt-get 库

```go
sudo apt-get update
```

::: warning 说明
如果提示 `Could not get lock /var/lib/dpkg/lock-frontend. It is held by process 154972 (apt-get)`
说明你上次有使用 `apt` 或者 `apt-get` 导致锁住了，使用 `sudo killall apt-get apt` 强制杀死这两个进程
:::

- 安装包以允许 apt 通过 HTTPS 使用存储库

```go
sudo apt-get install ca-certificates curl gnupg lsb-release
```

- 添加 docker 官方 GPG 秘钥

```go
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

- 设置稳定存储库

```go
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

- 安装 docker 引擎

```go
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

- 查看存储库中可用的版本

```go
apt-cache madison docker-ce
```

- 安装指定版本的引擎

```go
sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
```

::: warning 说明
使用第七步中的版本字符串安装特定版本，例如 5:18.09.1~3-0~ubuntu-xenial
:::

- 卸载 docker 引擎

```go
sudo apt-get purge docker-ce docker-ce-cli containerd.io
```

- 主机上的映像、容器、卷或自定义配置文件不会自动删除。要删除所有映像、容器和卷

```go
sudo rm -rf /var/lib/docker && sudo rm -rf /var/lib/containerd
```

- 测试是否安装完成

```go
sudo docker run hello-world
```

::: tip 说明
这里可能会提示你登录
:::

- 登录

```go
 docker login
```

- 安装稳定版的 docker-compose

```go
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

- 给 `docker-compose` 添加执行权限

```go
sudo chmod +x /usr/local/bin/docker-compose
```

## 二丶常用命令

- 构建环境

`docker-compose up`

- 后台运行
`docker-compose up -d`

- 查看当前容器运行状态
`docker-compose ps`

- 查看当前运行的 web 环境
`docker-compose run web env`

- 停止当前容器
`docker-compose stop`

- 将所有内容都关闭，完全删除容器 down 。传递--volumes 也删除 Redis 容器使用的数据卷
`docker-compose down —volumes`

- 进入容器里面查看
`docker exec -it docker_web_1 sh`

::: tip 说明
有些是/bin/bash 有些是 sh
:::

- 删除某个容器
`docker rm 容器 id`

::: tip notice
可以使用 docker ps -a 查看
:::

- 删除某个镜像
`docker rmi 镜像 id`

::: tip notice
可以使用 docker images 查看
:::

- 从指定 image 里生成一个 container 并在其中运行一个命令

```go
docker run

    -d : 在后台运行
    –p : 映射好内外端口,
    --name : 在容器时的名称
    -v 'pwd' : /usr/share/nginx/html -> 把运行容器的当前目录映射到/usr/share/nginx/html
```

- 进入容器终端

```go
// 这个使用 exit 退出，容器依然运行
docker exec -it containerId bash 

// 使用 exit 退出，容器也会停止，使用 ctrl + q 或者 ctrl + p 退出
docker attach containerId
```

- 查看容器运行的 log 日志

```go
// 查看所有日志，有点像 cat 命令
docker logs containerId

// 查看容器运行的实时日志相当于 tail -f
docker logs -f containerId 
```

- 将容器里面的内容拷贝出宿主机上

```go
docker cp b7845:/home/test.java /home

example: docker cp a6e930134023:/usr/share/nginx/html/index.html ./
```

::: tip notice
a6e930134023 -> 容器 id
/usr/share/nginx/html/index.html -> 容器文件
./ -> 宿主机地址
:::

## 三丶Dockerfile 相关操作

- FROM
::: tip notice
基础镜像, 一切从这里开始构建
指定哪种镜像作为新镜像的基础镜像
:::

`FROM ubuntu:14.04`

- MANTAINER
::: tip notice
镜像是谁写的, 姓名+邮箱
指明该镜像的作者和其电子邮件
:::

`LABEL maintainer="zzj123 <1844066417@qq.com>" version="1.0" app.name="Marketing sms"`

- RUN

::: tip notice
镜像构建的时候需要运行的命令，在新镜像内部执行的命令，比如安装一些软件、配置一些基础环境，可使用\来换行
:::

```go

RUN echo “hello world” \

// = 两边必须加上空格，否则无法实现判断逻辑，docker build不会报错，但是一直会走then后面的逻辑
// tee是直接将输出的所有命令或者语句写入到文件里面
// > 也可以写入文件，但是只能写一行，如果写多个后面的会覆盖前面的语句
if [ "${APP_ENV}" != 'prod' ]; then { \
        echo "extension=skywalking.so"; \
        echo "skywalking.app_code=$APP_CODE"; \
        echo "skywalking.enable=1"; \
        echo "skywalking.version=8"; \
        echo "skywalking.error_handler_enable = 0"; \
        echo "skywalking.grpc=$GRPC"; \
        echo "skywalking.sample_n_per_3_secs = -1"; \
        echo 'skywalking.instance_name = ""'; \
    } | tee /usr/local/etc/php/conf.d/skywalking.ini; fi

// 也可以使用exec格式RUN ["executable", "param1", "param2"]的命令 
RUN [“yum”, “install”, “-y”, “nginx”]
// 生成的命令（linux下命令）
yum install -y nginx
```


- ADD

::: tip notice
步骤, `tomcat` 镜像,压缩包! 添加内容，将主机的文件复制到镜像中，跟 `COPY` 一样，限制条件和使用方式都一样
:::

`ADD ./index.tat.gz /usr/share/nginx/html/`

::: warning
ADD 会对压缩文件（`tar`, `gzip`, `bzip2`, `etc`）做提取和解压操作
:::

- WORKDIR
::: tip notice
镜像的工作目录，在构建镜像时，指定镜像的工作目录，之后的命令都是基于此工作目录，如果不存在，则会创建目录
:::

```go
// docker exec -it 进入的目录就是这个工作目录
WORKDIR /usr/local
WORKDIR workspace 最终的工作目录是/usr/local/workspace
```

- VOLUME

::: tip notice
挂载的目录，用来向基于镜像创建的容器添加卷。比如你可以将 `mongodb` 镜像中存储数据的 `data` 文件指定为主机的某个文件。(容器内部建议不要存储任何数据)。
:::

```go
VOLUME /data/db /data/configdb
```

- EXPOSE

::: tip notice
暴露端口配置，暴露镜像的端口供主机做映射，启动镜像时，使用-P 参数来将镜像端口与宿主机的随机端口做映射,可指定多个
:::

```go
EXPOSE 9601
EXPOSE 9604
```

- CMD
::: tip notice
指定这个容器启动的时候要运行的命令,只有最后一个会生效,可被替代，当有多个 CMD 的时候，只有最后一个生效
:::

```go
// 容器启动时需要执行的命令
CMD /bin/bash
CMD [“/bin/bash”]
```

- ENTRYPOINT
::: warning notice
指定这个容器启动的时候要运行的命令,可以追加命令
ENTRYPOINT 作用和用法和 CMD 一模一样，区别：
a. CMD 的命令会被 docker run 的命令覆盖而 ENTRYPOINT 不会
b. CMD 和 ENTRYPOINT 都存在时，CMD 的指令变成了 ENTRYPOINT 的参数，并且此 CMD 提供的参数会被 docker run 后面的命令覆盖
:::

```go
ENTRYPOINT ["php", "/var/www/html/bin/hyperf.php", "start"]

// 可以在docker.yml文件里面写多条命令
entrypoint: ["sh", "-c", "php /var/www/html/bin/hyperf.php migrate && php /var/www/html/bin/hyperf.php start"]
```

- ONBUILD 

::: tip notice
当构建一个被继承 DockerFile 这个时候就会运行 ONBUILD 的指令,触发指令
当一个包含 ONBUILD 命令的镜像被用作其他镜像的基础镜像时(比如用户的镜像需要从某为准备好的位置添加源代码，或者用户需要执行特定于构建镜像的环境的构建脚本)，该命令就会执行
:::

`ONBUILD ADD . /var/www`

- USER

::: tip notice
指定用户，指定该镜像以什么样的用户去执行
:::

`USER nginx`

- COPY

::: tip notice
类似 ADD,将我们文件拷贝到镜像中，将主机的文件复制到镜像内，如果目的位置不存在，Docker 会自动创建所有需要的目录结构，但是它只是单纯的复制，并不会去做文件提取和解压工作。
:::

`COPY ./index.html /usr/share/nginx/html/index.html`

::: warning notice
注意：需要复制的目录一定要放在 Dockerfile 文件的同级目录下
原因：因为构建环境将会上传到 Docker 守护进程，而复制是在 Docker 守护进程中进行的。任何位于构建环境之外的东西都是不可用的。COPY 指令的目的的位置则必须是容器内部的一个绝对路径
:::

- ARG 

::: tip notice
参数，这里面的参数可以获取到docker build --build-arg arg=params里面的arg参数
:::

`ARG arg`

- ENV

::: tip notice
构建的时候设置环境变量
:::

```go
ENV TIMEZONE=${timezone:-"Asia/Shanghai"} \
    APP_ENV=${appenv} \
    SCAN_CACHEABLE=(false) \
    APP_NAME=${appname} \
    MSGPACK_VERSION='2.1.2' \
    YAR_VERSION='2.2.0' \
    RDKAFKA_VERSION='6.0.1' \
    # 配置skywalking环境变量
    APP_CODE="hello_skywalking" \
    GRPC="192.168.150.205:11800"
```

## 四丶构建项目

- 使用当前目录的 Dockerfile 创建镜像，标签为 runoob/ubuntu:v1。

```go
docker build -t runoob/ubuntu:v1 .
```

- 使用 URL github.com/creack/docker-firefox 的 Dockerfile 创建镜像。

```go
docker build github.com/creack/docker-firefox
```

- 通过 -f Dockerfile 文件的位置

```go
docker build -f /path/to/a/Dockerfile .
```
- 在 Docker 守护进程执行 Dockerfile 中的指令前，首先会对 Dockerfile 进行语法检查，有语法错误时会返回

```go
docker build -t test/myapp . 
```
- 整个镜像文件操作

```go
cat alibaba-rocketmq-3.2.6.tar.gz | docker import - rocketmq:3.2.6(镜像名自己定义)
```

::: tip notice
docker 导入本地镜像， 本地的镜像导入，使用 `docker import` 命令。
镜像文件必须是 `tar.gz` 类型的文件。
:::

```go
docker save -o rocketmq.tar rocketmq
docker save rocketmq > rocketmq.tar
```

::: tip notice
-o：指定保存的镜像的名字；
rocketmq.tar：保存到本地的镜像名称；
rocketmq：镜像名字
:::

```go
docker load --input rocketmq.tar
docker load < rocketmq.tar
```

::: tip notice
`docker load` 将本地保存的镜像再次导入 `docker` 中
:::

## 五丶 镜像
- 查看镜像

```go
docker images
```

- 查看所有镜像只显示 containerId

```go
docker image -qa
```
::: tip notice
`-a` 显示所有
`-q` 只显示 `id`
:::

- 删除镜像

```go
docker rmi -f containerId
```

- 删除全部镜像

```go
docker rmi -f $(docker images -qa)
```

- pull 镜像并运行

```go
docker pull containerId
docker run [参数] image
```

- 删除所有的容器

```go
docker rmi -f $(docker ps -qa)
```

- 删除所有的容器

```go
docker ps -qa|xargs docker rm
```

- 开启容器

```go
docker start containerId
```

- 停止容器

```go
docker stop containerId
```

- 重启容器

```go
docker restart containerId
```

- 杀死容器

```go
docker kill containerId
```
- 其他重要命令

```go
docker run -d centos /bin/bash -c “这里可以写 sheel 脚本"
```
::: tip notice
后台启动容器, 但是使用 `docker ps` 是看不到这个容器的 `centos` 已经停止了。容器使用后台运行，就必须要有一个前台进程，`docker` 发现没有应用，就会立即停止，比如说启动一个 `nginx` ,容器启动之后发现自己没有提供服务，就会立即停止，就是没有程序了
:::

- 查看容器日志

```go
docker logs -f -t —tail 10 containerId
```

- 查看容器的进程

```go 
docker top containerId
```

- 查看容器的详细信息

```go
docker inspect containerId
```

- 进入容器，`-it` 以交互模式进入

```go
// 进入容器，有些系统是使用sh
docker exec -it containerId /bin/bash

也是进入容器
docker attach containerId
```

::: tip notice
`exec` 进入容器使用 `exit` 退出的时候，容器不会停止
`attach` 进入容器使用 `exit` 退出的时候，容器会停止
:::

- 拷贝容器里面的文件到宿主机

```go
docker cp 容器:目录地址文件地址 宿主机地址
```

- 用于测试,--rm 用完即删

```go
docker run -it —rm nginx
```

- 开启 `docker remote api`

```go
vim /lib/systemd/system/docker.service

ExecStart=/usr/bin/dockerd -H unix://var/run/docker.sock -H tcp://0.0.0.0:2375 -H fd:// --containerd=/run/containerd/containerd.sock
```

- 重启

```go
systemctl daemon-reload
systemctl restart docker.server
```

- 查看

```go
sudo netstat -lntp | grep dockerd 
```
## 五丶docker 相关问题

- Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?

::: danger notice
因为 docker 服务没有启动，所以在相应的/var/run/ 路径下找不到 docker 的进程。
解决方案：service docker start
:::

- Docker 容器启动报 WARNING: IPv4 forwarding is disabled. Networking will not work

::: danger notice
`network` 没有开启
解决方案：`vim /etc/sysctl.conf` 或者 `vi /usr/lib/sysctl.d/00-system.conf`
添加： `net.ipv4.ip_forward=1`
重启：`systemctl restart network | centos8 -> nmcli c reload`
使配置立即生效： `sysctl -p`
:::
- 安装 composer

```go
// 下载composer包并且放在 /usr/local/bin/composer 下面
wget https://getcomposer.org/download/2.0.2/composer.phar -O /usr/local/bin/composer

// 给 `composer` 二进制包添加执行权限
chmod +x /usr/local/bin/composer 
```
- docker 运行的日志可能会占满整个服务器

::: danger notice
1. 查询当前目录的磁盘占用情况
   `du -h —-max-depth=1`

2. 更改 `docker-compose` 的配置文件 `yml`

```go
logging:
   options:
   max-size: '1G'
   max-file: '5'
   driver: json-file
```
:::

- 根据容器名称查询容器 ID 并删除

```go
// 第一种写法
docker stop `docker ps -a| grep test-project | awk '{print $1}' `
docker rm `docker ps -a| grep test-project | awk '{print $1}' `

// 第二种写法

docker stop `docker ps -aq --filter name=test-project`
docker rm `docker ps -aq --filter name=test-project`
```

- 根据镜像名称查询容器 ID 并删除

```go
// 第一种写法

docker stop `docker ps -a| grep ygsama/test-project:1.0.2 | awk '{print $1}' `
docker rm `docker ps -a| grep ygsama/test-project:1.0.2 | awk '{print $1}' `

// 第二种写法

docker stop `docker ps -aq --filter ancestor=ygsama/test-project:1.0.2`
docker rm `docker ps -aq --filter ancestor=ygsama/test-project:1.0.2`
```

- 根据镜像名称查询镜像 ID 并删除

```go
docker images -q --filter reference=ygsama/test-project*:*

docker image rm `docker images -q --filter reference=10.2.21.95:10001/treasury-brain*:*`
```

- docker 更改 mysql 密码

```go
// 修改普通用户，只改一个就好
SET PASSWORD FOR 'youruser' = PASSWORD('xxxxxxxx');

// 修改 root 用户，改两个
SET PASSWORD FOR 'root' = PASSWORD('xxxxxxxxx');
SET PASSWORD FOR 'root'@'localhost'=PASSWORD('xxxxxxxxx');
```

- 查看docker内存使用情况
  
```go
docker system df -v
```