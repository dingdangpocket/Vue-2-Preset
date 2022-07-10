import Goods from "./goods.js";
export default {
  name: "card",
  components: {
    Goods,
  },
  data() {
    return {
      count: 0,
      isVisable: true,
    };
  },
  methods: {
    addCount() {
      this.count++;
    },
    onChangeVisible() {
      this.isVisable = !this.isVisable;
      console.log("this.isVisable", this.isVisable);
    },
  },
  render() {
    return (
      <div>
        <div>{this.count}</div>
        <button onClick={() => this.addCount()}>addCount</button>
        {this.isVisable ? <Goods /> : ""}
        <button onClick={() => this.onChangeVisible()}>SHOW</button>
      </div>
    );
  },
};
