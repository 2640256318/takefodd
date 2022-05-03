import ajax from './ajax'
const BASE_URL = "/api"
export const reqAddress = geohash => ajax(BASE_URL + '/position/' + geohash)

export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')

export const reqShops = ({latitude, longitude}) => ajax(BASE_URL + '/shops', {latitude, longitude})

//用户密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', { name, pwd, captcha }, 'POST')

//短信验证登陆
export const reqSendCode = phone => ajax(BASE_URL + '/sendcode', {phone})

//手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')

export const reqShopGoods = () => ajax('/shopgoods')

export const  reqShopInfo = () => ajax('/shopinfo')

export const  reqShopRatings = () => ajax('/shopratings')

//获取用户信息
export const reqUser = () => ajax('/api/userinfo')

//请求退出
export const reqLogout = () => ajax('/api/logout')