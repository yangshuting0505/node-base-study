const redis = require('redis');
const {REDIS_CONFIG} = require('../config/db');

// 创建客户端
const redisClient = redis.createClient(REDIS_CONFIG.port,  REDIS_CONFIG.host);
redisClient.on('error', err => {
    console.error(err)
})

function set(key, val) {
    if (typeof val === 'object') {
        val = JSON.stringify(val);
    }
    redisClient.set(key, val, redis.print);
}

function get(key) {
    const promise = new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err);
                return;
            }
            if (val == null) {
                resolve(null);
            }
            try {
                resolve(JSON.parse(val));
            }
            catch(err) {
                resolve(val);
            }
        })
    });
    return promise;
}

module.exports = {
    set,
    get
}