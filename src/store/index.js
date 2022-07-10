import Vue from "vue";
import Vuex from "vuex";
import member from "./modules/member/member";
import user from "./modules/user/user";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    member,
    user,
  },
});
