// 权限认证
// import Cookies from 'js-cookie';

const getToken = () => {
    // return Cookies.get(TokenKey);
    return '123456'
}
const setToken = (token: string) => {
    // return Cookies.set(TokenKey, token);
    return '123456'
}
const removeToken = () => {
    // return Cookies.remove(TokenKey);
    return '123456'
}
export {
    getToken,
    setToken,
    removeToken
}