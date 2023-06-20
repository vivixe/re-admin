import request from '@/utils/request';
// 登录接口
export const login = (data: any) => {
    return request({
        url: '/login',
        method: 'post',
        data
    });
}
// 获取用户信息接口
export const getUserInfo = () => {
    return request({
        url: '/userInfo',
        method: 'get'
    });
}