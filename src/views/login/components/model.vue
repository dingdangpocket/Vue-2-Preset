<template>
  <div>
    <div>MODEL</div>
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
    <div>VueX {{ this.$store.state.member.pages }}</div>
    <div>VueX {{ this.$store.state.user.userName }}</div>
    <div>VueXFormUserMapState {{ userName }}</div>
    <div class="active">{{ pages + total }}</div>
    <div :class="{ show: isActive }">{{ title }}</div>
    <button @click="onVisible">VISIBLE</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState: userMapState } = createNamespacedHelpers("user");
const { mapState: memberMapState, mapActions: memberMapActions } =
  createNamespacedHelpers("member");
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
      title: "SHOW",
      isActive: true,
    };
  },
  mounted() {
    console.log("this.props", this._props);
    console.log("this.props", this.$store.state.member.pages);
    console.log("this.props", this.$store.state.user.userName);
    this.getValueFromChildComp("来自子组件的参数-1000");
  },
  methods: {
    ...memberMapActions(["getDataAsync"]),
    onVisible() {
      this.isActive = !this.isActive;
    },
  },
  computed: {
    ...userMapState(["userName"]),
    ...memberMapState(["pages", "total"]),
  },
};
</script>

<style lang="scss" scoped>
.active {
  color: orange;
  font-size: 100px;
}
.show {
  color: orange;
  font-size: 100px;
}
</style>