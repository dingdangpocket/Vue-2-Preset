module.exports = {
  devServer: {
    //代理配置
    proxy: {
      //如果请求地址以/api打头,就出触发代理机制;
      "/api": {
        target: "http://localhost:3000", //要代理的真实接口地址
        changeOrigin: true,
        secure: false,//如果是https接口，需要配置这个参数
        pathRewrite: {
          //localhost:8888/api/login  => www.baidu.com/api/login
          //localhost:8888/api/login =>www.baidu.com/login;
          "^/api": "",
        },
        // http://localhost:9588/api/login -> http://localhost:3000/api/login
      },
    },
  },
};
