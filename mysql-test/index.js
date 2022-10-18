const mysql = require('mysql');

// 创建链接对象
const con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '这里使用自己的root密码',
    port: '3306',
    database: 'myblog'
})

//  开始链接
con.connect();

// 执行sql语句
const sql = 'select * from users;'
con.query(sql, (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(result);
})

//关闭连接
con.end();