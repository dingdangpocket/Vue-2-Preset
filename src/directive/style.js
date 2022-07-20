const style = {
  // 只调用一次，指令第一次绑定到元素时调用
  bind(el, binding, vnode) {
    el.style.color = binding.value.color;
    el.innerText = binding.value.text;
    console.log(el, binding, vnode.name, vnode.value);
  },
  // 被绑定元素插入父节点时调用 其他钩子函数做演示用，可以打印打印都输出什么东西
  inserted(el) {
    console.log("inserted", el);
    // el.style.color = "#ff0000";
  },
  //   // 所在组件的 VNode 更新时调用
  //   update(el, binding, vnode) {
  //     console.log("update");
  //   },
  //   // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
  //   componentUpdated(el, binding, vnode) {
  //     console.log("componentUpdated");
  //   },
  //   unbind(el, binding, vnode) {
  //     console.log("unbind");
  //   },
};
export default style;
