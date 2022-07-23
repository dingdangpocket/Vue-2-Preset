<template>
  <div class="container">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      :rules="rules"
      class="demo-ruleForm"
    >
      <div v-for="item in formItemsState" :key="JSON.stringify(item)">
        <div v-if="item.type == 'select'">
          <el-form-item :label="item.label" :prop="item.prop">
            <el-select v-model="ruleForm[item.prop]">
              <div v-for="option in item.options" :key="JSON.stringify(option)">
                <el-option
                  :label="option.label"
                  :value="option.value"
                ></el-option>
              </div>
            </el-select>
          </el-form-item>
        </div>
        <div v-if="item.type == 'input'">
          <el-form-item :label="item.label" :prop="item.prop">
            <el-input
              :type="item.type"
              v-model="ruleForm[item.prop]"
              :autocomplete="item.autocomplete"
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <el-button type="primary" @click="submitForm('ruleForm')"
        >确 定</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  name: "show",
  props: {
    formItems: Array,
    firstInterlocks: Object,
    secondInterlocks: Object,
    thirdInterlocks: Object,
    rulesOptions: Object,
  },
  data() {
    return {
      ruleForm: {},
      formItemsState: [],
      rules: this.rulesOptions,
    };
  },
  mounted() {
    console.log("PROPS", this.formItems);
    this.formItemsState = this.formItems;
    this.ruleForm = { parkingType: "中国", fileType: "海南", areaType: "飞天" };
  },
  computed: {
    firstInterlocksWatcher() {
      return this.ruleForm[this.firstInterlocks.attr];
    },
    secondInterlocksWatcher() {
      return this.ruleForm[this.secondInterlocks.attr];
    },
  },
  watch: {
    firstInterlocksWatcher() {
      if (!this.firstInterlocks) return;
      const params = this.ruleForm[this.firstInterlocks.attr];
      console.log(params);
      if (params == "中国") {
        this.formItemsState[this.firstInterlocks.locksIndex].options = [
          { label: "海南", value: "海南" },
          { label: "北京", value: "北京" },
        ];
        this.ruleForm[this.secondInterlocks.attr] =
          this.formItemsState[this.firstInterlocks.locksIndex].options[0].value;
      }
      if (params == "美国") {
        this.formItemsState[this.firstInterlocks.locksIndex].options = [
          { label: "加州", value: "加州" },
          { label: "洛杉矶", value: "洛杉矶" },
          { label: "西雅图", value: "西雅图" },
        ];
        this.ruleForm[this.secondInterlocks.attr] =
          this.formItemsState[this.firstInterlocks.locksIndex].options[0].value;
      }
    },

    secondInterlocksWatcher() {
      if (!this.secondInterlocks || !this.thirdInterlocks) return;
      const params = this.ruleForm[this.secondInterlocks.attr];
      console.log(params);
      if (params == "海南") {
        this.formItemsState[this.secondInterlocks.locksIndex].options = [
          { label: "飞天区", value: "飞天区" },
          { label: "护天区", value: "护天区" },
        ];
        this.ruleForm[this.thirdInterlocks.attr] =
          this.formItemsState[
            this.secondInterlocks.locksIndex
          ].options[0].value;
      }
      if (params == "北京") {
        this.formItemsState[this.secondInterlocks.locksIndex].options = [
          { label: "朝阳", value: "朝阳" },
          { label: "五道口", value: "五道口" },
        ];
        this.ruleForm[this.thirdInterlocks.attr] =
          this.formItemsState[
            this.secondInterlocks.locksIndex
          ].options[0].value;
      }
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((isValid) => {
        if (isValid) {
          console.log("保存结果", this.ruleForm);
        } else {
          console.log("提交失败");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: rgb(215, 215, 215);
  width: 400px;
}
</style>