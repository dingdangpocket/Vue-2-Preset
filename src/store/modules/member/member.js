export default {
  namespaced: true,
  state: {
    rows: [],
    total: 0,
    pages: 0,
  },
  mutations: {
    SET_DATA(state, paload) {
      //将接受的数据赋值给当前分装状态机的state中;
      state.rows = paload.rows;
      state.total = paload.total;
      state.pages = paload.pages;
    },
  },
  //发送请求
  actions: {
    async getDataAsync(context, pageData) {
      const { data } = await this.$api.students.getStudents(pageData);
      if (data.code) {
        context.commit("SET_DATA", data.data);
      }
    },
  },
};
