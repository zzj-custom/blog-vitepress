#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vitepress/dist

git add -A
git commit -m 'deploy'

git push -f git@github.com:zzj-custom/blog-vitepress.git master

cd -