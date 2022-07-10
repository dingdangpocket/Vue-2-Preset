<template>
  <div>
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
  </div>
</template>

<script>
import Model from "./components/model.vue";
export default {
  name: "login",
  components: {
    Model,
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

  mounted() {},

  methods: {
    //current methods
    changeType() {
      this.render++;
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
  },
};
</script>

<style lang="scss" scoped>
</style>