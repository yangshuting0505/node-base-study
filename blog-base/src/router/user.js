const {loginCheck} = require('../controller/user');
const {SuccessModel, ErrorModel} = require('../model/resModel')

const handleUserRouter = (req, res) => {
    const method = req.method;

    // 登录
    if (method === 'POST' && req.path === '/api/user/login') {
        const {username, password} = req.body;
        const result = loginCheck(username, password);
        return result.then(data => {
            if (data.username) {
                // 设置 session
                req.session.username = data.username
                req.session.realname = data.realname
                // 同步到 redis
                set(req.sessionId, req.session)
                return new SuccessModel();
            }
            else {
                return new ErrorModel('登录失败')
            }
        })
    }
}

module.exports = handleUserRouter