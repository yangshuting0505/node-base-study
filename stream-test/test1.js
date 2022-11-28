// 标准输入输出
// process.stdin.pipe(process.stdout);

const fs = require('fs');
const path = require('path');

const fileName1 = path.resolve(__dirname, 'data.txt')
const fileName2 = path.resolve(__dirname, 'data-bak.txt')

const readStream = fs.createReadStream(fileName1)
const writeStream = fs.createWriteStream(fileName2)

readStream.pipe(writeStream);

readStream.on('data', (chunk) => {
    console.log('dataChunk', chunk)
})
readStream.on('end', () => {
    console.log('copy done');
})
