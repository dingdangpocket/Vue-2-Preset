export default {
  name: "goods",
  data() {
    return { price: 29 };
  },
  methods: {
    renderPrice() {
      return <div>{this.price}</div>;
    },
    addPrice() {
      this.price++;
    },
  },
  render() {
    return (
      <div>
        <div>商品${this.renderPrice()}</div>
        {this.price}
        <button
          onClick={() => {
            this.addPrice();
          }}
        >
          addPrice
        </button>
      </div>
    );
  },
};
