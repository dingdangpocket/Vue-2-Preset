<template>
  <div>
    <!-- <div class="container">
      <div class="title">测试文本内容</div>
    </div>
    <div class="goodsContainer">
      <div class="goodItem" v-for="item in goods" :key="item">
        {{ item }}
      </div>
    </div>
    <div class="footer" v-style="{ color: 'orange', text: 'newText' }">
      hello,directive
    </div> -->
    <Show
      :formItems="formItems"
      firstInterlocks="parkingType"
      firstInterlocksIndex="2"
      secondInterlocks="fileType"
      secondInterlocksIndex="3"
      thirdInterlocks="areaType"
      thirdInterlocksIndex="4"
    />
  </div>
</template>

<script>
import axios from "axios";
import Show from "./show/index.vue";
export default {
  name: "home",
  components: { Show },
  data() {
    return {
      goods: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      formItems: [
        {
          label: "所属区域",
          prop: "area",
          type: "input",
          bind: "ruleForm.area",
          autocomplete: "off",
        },
        {
          label: "国家",
          prop: "parkingType",
          type: "select",
          options: [
            { label: "中国", value: "中国" },
            { label: "美国", value: "美国" },
            { label: "加拿大", value: "加拿大" },
          ],
          bind: "ruleForm.parkingType",
          autocomplete: "off",
          interlocksIndex: 1,
        },
        {
          label: "城市",
          prop: "fileType",
          type: "select",
          options: [],
          bind: "ruleForm.fileType",
          autocomplete: "off",
          interlocksIndex: 2,
        },
        {
          label: "区域",
          prop: "areaType",
          type: "select",
          options: [],
          bind: "ruleForm.areaType",
          autocomplete: "off",
          interlocksIndex: 3,
        },
      ],
    };
  },
  mounted() {
    // console.log("this.sort(good)", this.sort(this.good));
    // this.promiseFunctions();
    // this.getData();
  },
  methods: {
    async getData() {
      const res = await axios({
        url: "https://retoolapi.dev/kQoG06/data", // 请求的服务器地址
        method: "GET", // 请求类型
      });
      if (res) {
        this.formItems[1].options = res;
      }
    },
    promiseFunctions() {
      let PromiseRef = new Promise((resolve) => {
        setTimeout(() => {
          resolve("异步线程任务(2)");
        }, 2000);
      });

      let PromiseRefOther = new Promise((resolve) => {
        setTimeout(() => {
          resolve("异步线程任务(3)");
        }, 2000);
      });

      PromiseRef.then(
        (value) => {
          console.log("Promise中的一个异步函数的结果输出" + value);
        },
        (err) => {
          console.log(err);
        }
      );

      PromiseRefOther.then(
        (value) => {
          console.log("PromiseRefOther中的一个异步函数的结果输出" + value);
        },
        (err) => {
          console.log(err);
        }
      );
      console.log("同步线程代码(1)");
    },
    sort(arr) {
      let temp;
      arr?.forEach(() => {
        arr.forEach((_, k) => {
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
