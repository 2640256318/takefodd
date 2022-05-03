//vue.config.js
module.exports = {
  devServer: {
      host: 'localhost',
      port: 8080,
      //代理：
      proxy: {
          //假设你请求的url是：/api/...
          //用了代理之后，只要在url拦截到：/api，就会跳转到target。
          //所以最终请求的url会变成：https://www.imooc.com/api/...
          '/api': {
              target: 'http://localhost:4000',
              changeOrigin:true,
              //将路径中的/api去除
              pathRewrite:{
                "^/api":"",
              }
          }
      }
  }
}