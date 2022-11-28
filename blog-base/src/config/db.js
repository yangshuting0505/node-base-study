const env = process.env.NODE_ENV;

let MYAQL_CONFIG;
let REDIS_CONFIG;

if (env === 'dev') {
    MYAQL_CONFIG = {
        host: '127.0.0.1',
        user: 'root',
        password: '这里使用自己的root密码',
        port: '3306',
        database: 'myblog'
    }
    REDIS_CONFIG = {
        port: 6379,
        host: '127.0.0.1',
    }
}

// 这里是因为我并没有线上服务器，所以production下也使用了线下环境，只是配置问题，不用在意
if (env === 'production') {
    MYAQL_CONFIG = {
        host: '127.0.0.1',
        user: 'root',
        password: '这里使用自己的root密码',
        port: '3306',
        database: 'myblog'
    }
    REDIS_CONFIG = {
        port: 6379,
        host: '127.0.0.1',
    }
}

module.exports = {
    MYAQL_CONFIG,
    REDIS_CONFIG
}