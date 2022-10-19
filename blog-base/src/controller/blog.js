const {exec} = require('../db/mysql');

const getList = (author, keyword) => {
    // 1=1作为不符合下面判断条件的默认值，1=1表示为true, 否则where后面无条件会报错
    let sql = 'select * from blogs where 1=1 ';
    if (author) {
        sql += `and author='${author}' `;
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `;
    }
    sql += 'order by createtime desc;'
    return exec(sql);
}

const getDetail = id => {
    const sql = `select * from blogs where id='${id}';`
    return exec(sql).then(data => {
        return data[0];
    })
}

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象，包含title, content等属性
    const {title, content, author} = blogData;
    const createtime = Date.now();
    
    const sql = `insert into blogs (title, content, author, createtime) values ('${title}', '${content}', '${author}', ${createtime});`
    return exec(sql).then(data => {
        // 标识新建博客，插入到数据表里面的id
        return {
            id: data.insertId
        }
    })
}

const updateBlog = (id, blogData = {}) => {
    // id 是要更新的id
    const {title, content} = blogData;
    const sql = `update blogs set title='${title}', content='${content}' where id=${id};`;
    return exec(sql).then(data => {
        if (data.affectedRows > 0) {
            return true;
        }
        return false;
    })
}

const delBlog = (id, author) => {
    // id 是要删除的id
    const sql = `delete from blogs where id='${id}' and author='${author}';`;
    return exec(sql).then(data => {
        if (data.affectedRows > 0) {
            return true;
        }
        return false;
    });
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}