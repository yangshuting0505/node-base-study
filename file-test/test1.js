// 文件操作基本库
const fs = require('fs')
// 路径操作基本库
const path = require('path')

const fileName = path.resolve(__dirname, 'data.log')
// 读取文件内容
// fs.readFile(fileName, (err, data) => {
//     if (err) {
//         console.log('err', err);
//         return;
//     }
//     // data 是二进制类型，需要转换为字符串
//     console.log(data.toString());
// })

// 写入文件内容
// const content = '这里是要写入的新一行文案\n';
// const opt = {
//     // 追加写入'a'。覆盖用 'w'
//     flag: 'a'
// }
// fs.writeFile(fileName, content, opt, (err) => {
//     if (err) {
//         console.log(err);
//     }
// })

// 判断文件是否存在
fs.exists(fileName, (exist) => {
    console.log('exist', exist)
})