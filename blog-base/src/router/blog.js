const {getList, getDetail, newBlog, updateBlog, delBlog}  = require('../controller/blog');
const {SuccessModel, ErrorModel} = require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const method = req.method;
    const id = req.query.id || '';
    
    // 获取博客列表
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';

        const result = getList(author, keyword);
        return result.then(listData => {
            return new SuccessModel(listData);
        })
    }

    // 一篇博客内容
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const result = getDetail(id);
        return result.then(data => {
            return new SuccessModel(data);
        })
    }

    // 新增一篇博客
    if (method === 'POST' && req.path === '/api/blog/new') {
        // 登录还没写，author先用个假数据
        req.body.author = 'shuting';
        const result = newBlog(req.body);
        return result.then(data => {
            return new SuccessModel(data);
        })
    }

    // 更新博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        const result = updateBlog(id, req.body);
        return result.then(data => {
            if (data) {
                return new SuccessModel();
            }
            else {
                return new ErrorModel('更新博客失败');
            }
        })
    }

    // 删除博客
    if (method === 'POST' && req.path === '/api/blog/del') {
        // 登录还没写，author先用个假数据
        const author = 'shuting';
        const result = delBlog(id, author);
        return result.then(data => {
            if (data) {
                return new SuccessModel();
            }
            else {
                return new ErrorModel('删除博客失败');
            }
        })
    }
}

module.exports = handleBlogRouter