# wxa-template-cloud

cloud template for wxa developer

## Usage
1. 使用命令`npm i -g @wxa/cli2@next`安装最新`wxa`版本
2. 在根目录执行`npm install`安装项目依赖
3. 在`project.config.json`文件中写入项目的小程序`appid`和名称`projectname`
4. 在`wxa.config.js`文件中的`envId`变量定义中写入项目云开发环境的`id`，以便支持多环境开发
5. 在`wxa.config.js`文件中的`ReplacePlugin`定义中写入项目需要用到的多环境变量，以便支持多环境开发
6. 在根目录执行`npm start`启动开发模式

# Build

在根目录执行`npm run build`启动打包

## Docs
https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html