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
    <div>{{ this.$store.state.member.pages }}</div>
    <div>{{ this.$store.state.user.userName }}</div>
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
    console.log("this.props", this.$store.state.member.pages);
    console.log("this.props", this.$store.state.user.userName);
    this.getValueFromChildComp("来自子组件的参数-1000");
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>