# Webpack 基礎
Webpack 官網 : https://webpack.js.org/

npm 初始化 : npm init -y

安裝 Webpack 套件指令：npm install webpack webpack-cli --save-dev


## Webpack.config.js 環境建立
Webpack Output 參考 : https://webpack.js.org/concepts/#output

## Config at package.json
開發模式 mode : "dev": "webpack --mode development"
上線模式 mode : "deploy": "webpack --mode production"

## 載入 CSS-loader 
Webpack css-loader 參考 : https://webpack.js.org/loaders/css-loader/
- npm install --save-dev css-loader
- npm install --save-dev style-loader

## 載入 Sass-loader
Webpack Sass-loader 參考 : https://webpack.js.org/loaders/sass-loader/#root
- npm install sass-loader sass --save-dev

node-sass 初探 : https://dwatow.github.io/2018/03-12-node-sass/
sass 是使用純 JavaScript 編譯
node-sass 則是基於 Node.js 來控制 LibSass 的方式來運作，因此底層是以 LibSass (C++ 編寫的 Sass 編譯器 ) 來編譯
兩者主要差異在於編譯效能，由於 sass 是使用純 JS 編譯，相較 node-sass 透過 LibSass 編譯速度來得較差

## Webpack-dev-server
Webpack-dev-server 參考 : https://webpack.js.org/api/webpack-dev-server
- npm install --save-dev webpack-dev-server
devServer 設定 : https://webpack.js.org/configuration/dev-server/#root

