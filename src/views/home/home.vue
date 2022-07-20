<template>
  <div>
    <div class="container">
      <div class="title">
        中华人民共和国,中华人民共和国,中华人民共和国,中华人民共和国
      </div>
    </div>
    <div class="goodsContainer">
      <div class="goodItem" v-for="item in goods" :key="item">
        {{ item }}
      </div>
    </div>
    <div class="footer" v-style="{ color: 'orange', text: 'newText' }">hello,directive</div>
  </div>
</template>

<script>
export default {
  name: "home",

  data() {
    return {
      goods: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },

  mounted() {
    console.log("this.sort(good)", this.sort(this.good));
  },
  
  methods: {
    sort(arr) {
      let temp;
      arr.forEach(() => {
        arr.forEach((item, k) => {
          if (arr[k] > arr[k + 1]) {
            temp = arr[k];
            arr[k] = arr[k + 1];
            arr[k + 1] = temp;
          }
        });
      });
      return arr;
    },
  },
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
    width: 100vw;
    height: 100px;
    font-size: 10px;
    background: red;
    @include flexCenter();
  }
}
.goodsContainer {
  font-size: 10px;
  display: grid;
  background: rgb(192, 99, 13);
  grid-template-columns: repeat(3, 30vw); // 设置列
  grid-template-rows: repeat(3, 10vw); // 设置行
  grid-column-gap: 10px; // 设置网格之间的间距
  grid-row-gap: 10px; // 设置网格之间的间距
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
  .goodItem {
    height: 30px;
    width: 50px;
    background: black;
    color: rgb(255, 255, 255);
    @include flexCenter();
  }
}
.footer {
  height: 30px;
  background: rgb(0, 0, 0);
}
</style>