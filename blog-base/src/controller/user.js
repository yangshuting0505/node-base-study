const loginCheck = (username, password) => {
    console.log('username', username, 'password', password, username === 'shuting' && password === '123')
    if (username === 'shuting' && password === '123') {
        return true;
    }
    return false;
}
module.exports = {
    loginCheck
}