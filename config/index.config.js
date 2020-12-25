const CONFIG = {
    // 开发环境配置
    development: {
        assetsPath: '/static', // 静态资源路径
        baseUrl: 'https://pt.zjrcfw.com', // 后台接口请求地址
        hostUrl: 'https://pt.zjrcfw.com', // H5地址(前端运行地址) http://192.168.1.234
        websocketUrl: 'wss://localhost:9504', // websocket服务端地址
        weixinAppId: 'wx54722a5e85ac26a5' // 微信公众号appid

    },
    // 生产环境配置
    production: {
        assetsPath: '/static', // 静态资源路径
        baseUrl: 'https://pt.zjrcfw.com', // 后台接口请求地址
        hostUrl: 'https://pt.zjrcfw.com', // H5地址(前端运行地址)
        websocketUrl: 'wss://localhost:9504', // websocket服务端地址
        weixinAppId: 'wx54722a5e85ac26a5' // 微信公众号appid

    }

};
export default CONFIG[process.env.NODE_ENV];
