const mysql = require('mysql');
const {MYAQL_CONFIG} = require('../config/db');

const con = mysql.createConnection(MYAQL_CONFIG);

// 建立连接
con.connect();

function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                reject(err);
                return
            }
            resolve(result);
        })
    })
    return promise;
}

module.exports = {
    exec
}