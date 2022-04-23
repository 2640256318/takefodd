import ajax from './ajax.js'
export const reqAddress = geohash => ajax('/api/position/' + geohash)

export const reqFoodTypes = () => ajax('/api/index_category')

export const reqShops = ({latitude, longitude}) => ajax('/api/shops', {latitude, longitude})

//用户密码登陆
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', { name, pwd, captcha }, 'POST')

//短信验证登陆
export const reqSendCode = phone => ajax('/api/sendcode', {phone})

//手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')

//获取用户信息
export const reqUser = () => ajax('/api/userinfo')

//请求退出
export const reqLogout = () => ajax('/api/logout')