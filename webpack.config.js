// Webpack Output 參考 : https://webpack.js.org/concepts/#output

const path = require('path');   // require 載入模組

// console.log(path.resolve(__dirname, 'dist'));

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // path.resolve 相對路徑轉絕對路徑, __dirname 當前資料夾路徑

        filename: 'bundle.js',
    },
};