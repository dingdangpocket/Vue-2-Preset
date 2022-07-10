import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js'

//所有axios加基础路径;
import axios from "axios";
axios.defaults.baseURL = "https://10.10.10.24:8443";
//所有axios加基础路径;

//所有的axios加上一个token;
import "./http/axios";
//所有的axios加上一个token;

//将所有的请求接口集中挂载到prototype身上;
import api from "./http/api";
Vue.prototype.$api = api;
//将所有的请求接口集中挂载到prototype身上;

// router.beforeEach((to, from, next) => {
//   if(to.path.includes('home')){//如果要去的路由对象的路径中有home;
//      if(localStorage.token){//就判断是否已经获得token;
//        next()//如果有了token就允许登陆;
//      }else{
//        alert('请先登陆')
//        next('/login') //如果没拿到Token就弹窗提示,并让用户去登陆;
//      }
//   }else{
//     next()//如果要去的路由对象的路径中没有home,直接允许通过;
//   }
// })

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
