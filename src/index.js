// src 進入點(entry) , dist 輸出點((output)
// package.json -> "scripts" add "build": "webpack"
                                        // webpack 預設把 src 內的 index.js 輸出至 dist 資料夾

let a = 1;
let b = 2;

console.log("Hello~Ben~");

function hello(a, b){
    console.log(a+b);
}

hello(2, 3);