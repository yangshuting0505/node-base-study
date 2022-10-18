const getList = (author, keyword) => {
    // 先返回假数据，格式是正确的
    return [
        {
            id: 1,
            title: '标题1',
            content: '内容1',
            createTime: 1665828245846,
            author: 'shuting1'
        },
        {
            id: 2,
            title: '标题2',
            content: '内容2',
            createTime: 1665828277647,
            author: 'shuting2'
        },
    ]
}

const getDetail = id => {
    return {
        id: 1,
        title: '标题1',
        content: '内容1',
        createTime: 1665828245846,
        author: 'shuting1'
    }
        
}

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象，包含title, content等属性
    console.log('newBlog', blogData);
    return {
        id: 3 // 标识新建博客，插入到数据表里面的id
    }
}

const updateBlog = (id, blogData = {}) => {
    // id 是要更新的id
    // blogData 是一个博客对象，包含title, content等属性
    console.log('id', id, 'updateBlogData', blogData);
    return true
}

const delBlog = id => {
    // id 是要删除的id
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}