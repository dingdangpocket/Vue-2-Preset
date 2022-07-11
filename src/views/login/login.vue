<template>
  <div>
    <router-link to="/home">首页</router-link>
    <div>{{ render }}</div>
    <div v-if="render == 0">
      <div>A组件</div>
    </div>
    <div v-if="render == 1">
      <div>B组件</div>
    </div>
    <div v-if="render == 2">
      <div>C组件</div>
    </div>
    <div v-if="render == 3">
      <div>D组件</div>
    </div>
    <button @click="this.changeType">改变TYPE</button>
    <Model
      :model-title="modelTitle"
      :cancel-text="cancelText"
      :get-value-from-child-comp="getValueFromChildComp"
      :change-btn-color="changeBtnColor"
      :color="color"
    />
    <div>{{ childComponentValue }}</div>
    <div id="container"></div>
    <div>{{ renderComp() }}</div>
    <div>{{ reverse }}</div>
    <button @click="changeCancelText">changeCancelText</button>
    <Card />
  </div>
</template>

<script>
import Model from "./components/model.vue";
import Card from "./components/card";
export default {
  name: "login",
  components: {
    Model,
    Card,
  },
  data() {
    return {
      render: 0,
      modelTitle: "标题",
      cancelText: "取消",
      childComponentValue: "",
      color: "blue",
    };
  },

  mounted() {
    const containerRef = document.getElementById("container");
    containerRef.innerHTML = `<div>静态${this.render}<div>`;
  },

  methods: {
    //current methods
    changeType() {
      this.render++;
    },
    changeCancelText() {
      this.cancelText = "中华儿女";
    },
    //model comp methods
    getValueFromChildComp(value) {
      this.childComponentValue = value;
    },

    changeBtnColor() {
      this.color == "red"
        ? (this.color = "blue")
        : this.color == "blue"
        ? (this.color = "red")
        : (this.color = "blue");
    },
    //noObserverComputed..
    renderComp() {
      return this.render;
    },
  },
  //eaqul to useMemo()..
  computed: {
    reverse() {
      return this.cancelText.split("").reverse().join("");
    },
  },
  //eaqul to useEffect()..
  watch: {
    render() {
      console.log("renderChanged..");
    },
  },
  render() {
    return <div>hello</div>;
  },
};
</script>
<style lang="scss" scoped>
</style>