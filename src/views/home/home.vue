<template>
  <div class="container">
    <div class="title">
      中华人民共和国,中华人民共和国,中华人民共和国,中华人民共和国
    </div>
  </div>
</template>

<script>
export default {
  name: "home",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@mixin flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  @include flexCenter();
  .title {
    width: 300px;
    height: 100px;
    background: red;
    font-size: 10px;
    @include flexCenter();
  }
}
</style>