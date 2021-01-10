###
# @Author: Innei
# @Date: 2021-01-10 18:41:26
# @LastEditTime: 2021-01-10 18:41:26
# @LastEditors: Innei
# @FilePath: /使用 React Native 构建 App/deploy.sh
# @Mark: Coding with Love
###
#!sh
parcel build index.html --public-url /rn-ppt
cd dist
git init
git add .
git remote add origin git@gitee.com:xun7788/rn-ppt.git
git checkout -b pages
git commit -m 'update'
git push -f
