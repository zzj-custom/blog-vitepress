---
title: ssh相关问题
---

# {{$frontmatter.title}}

## 一丶生成密钥(SSH key)

```php
ssh-keygen -t rsa -C "your_email@youremail.com"
```

## 二丶添加密钥(SSH key)，并验证是否成功

- 添加密钥：将上一步骤生成的密钥即 `.ssh/id_rsa.pub` 中内容全部复制。在 `github` 的 `Settings->SSH and GPG keys-->New SSH key`，`key` 中粘贴复制的内容( `Title` 自定义)。

- 验证：`github` 输入第一条的命令

```php
ssh -T git@github.com
ssh -T git@gitee.com
```

## 三丶腾讯云服务器配置好秘钥还是不能登录，提示权限不足的问题

```php
// 修改 PasswordAuthentication 为 yes
sudo vi /etc/ssh/sshd_config

// 重启sshd
sudo systemctl restart sshd 
```

## 四丶清除当前机器关于远程服务器的缓存和公钥信息

```php
ssh-keygen -R "你的远程服务器 ip 地址" 
```