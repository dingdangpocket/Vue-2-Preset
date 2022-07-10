<template>
  <div>
    <div>MODEL</div>
    <div>{{ title }}</div>
    <div>{{ modelTitle }}</div>
    <div
      :style="{
        color: color,
        fontSize: 50 + 'px',
      }"
    >
      {{ cancelText }}
    </div>
    <button @click="changeBtnColor">改变颜色</button>
  </div>
</template>

<script>
export default {
  name: "model",
  props: {
    modelTitle: String,
    cancelText: String,
    getValueFromChildComp: Function,
    changeBtnColor: Function,
    color: String,
  },
  data() {
    return {
      title: "",
    };
  },
  mounted() {
    console.log("this.props", this._props);
    this.getValueFromChildComp("来自子组件的参数-1000");
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>