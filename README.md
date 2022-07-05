# Webpack 基礎
1. Webpack 官網 : https://webpack.js.org/
2. 關於 Webpack : https://askie.today/what-is-webpack/
3. Webpack 是什麼 : https://tw.alphacamp.co/blog/webpack-introduction

## 初始環境建立
1. NPM 官網 : https://www.npmjs.com/ -> 檢查 NPM 版本： npm -v
2. Node.js 官網 : https://nodejs.org/en/ -> 檢查 Node.js 版本： node -v

- 專案初始化：npm init
1. package name : 預設(npm-demo)
2. version : 預設(1.0.0)
3. description : 描述
4. entry point : 預設(index.js)
5. test command : 測試code
6. git repository : 使用git版控
7. keywords : 關鍵字
8. author : 作者
9. license : 版本號(ISC)

- 專案初始化，並提供預設值： npm init -y

安裝 Webpack 套件指令：npm install webpack webpack-cli --save-dev

## Webpack.config.js 環境建立
Webpack Output 參考 : https://webpack.js.org/concepts/#output

## Config at package.json -> "scripts"
- 開發模式 mode : "dev": "webpack --mode development"
- 上線模式 mode : "deploy": "webpack --mode production"

1. development(開發)依賴模組： npm install 模組名稱 --save-dev
2. production (上線)依賴模組： npm install 模組名稱 --save
## 載入 CSS-loader 
Webpack css-loader 參考 : https://webpack.js.org/loaders/css-loader/
- npm install --save-dev css-loader
- npm install --save-dev style-loader

## 載入 Sass-loader
Webpack Sass-loader 參考 : https://webpack.js.org/loaders/sass-loader/#root
- npm install sass-loader sass --save-dev

node-sass 初探 : https://dwatow.github.io/2018/03-12-node-sass/

1. sass 是使用純 JavaScript 編譯
2. node-sass 則是基於 Node.js 來控制 LibSass 的方式來運作，因此底層是以 LibSass (C++ 編寫的 Sass 編譯器 ) 來編譯
3. 兩者主要差異在於編譯效能，由於 sass 是使用純 JS 編譯，相較 node-sass 透過 LibSass 編譯速度來得較差

## Webpack-dev-server
Webpack-dev-server 參考 : https://webpack.js.org/api/webpack-dev-server
- npm install --save-dev webpack-dev-server

Webpack.config.js 環境建立 devServer 設定 : https://webpack.js.org/configuration/dev-server/#root

## axios
npm axios : https://www.npmjs.com/package/axios
- npm install axios --save