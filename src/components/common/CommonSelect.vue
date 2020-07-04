<template>
  <div>
    <van-action-sheet
      :title="title"
      v-model="isShow"
      @select="select"
      :actions="actions"
      close-icon="none"
      cancel-text="取消"
      @cancel="cancelpopuver"
    />
  </div>
</template>
<script>
export default {
  name: "CompanyRoute",
  data() {
    return {
      help: ''
    };
  },
  props: {
    natureList: Array, // 企业性质
    routeTitle: String, //企业性质
    routeShow: Boolean,//企业性质
    companySize: Array, // 公式规模
    sizeTitle: String, // 公式规模
    sizeShow: Boolean,  // 公式规模
    workData: Array, // 工作性质
    workTitle: String, // 工作性质
    showWorkData: Boolean, // 工作性质
    workYear: Array, // 工作年限
    workYearTitle: String, // 工作年限
    showYear: Boolean, // 工作年限
    recordData: Array, // 学历要求
    recordTitle: String, // 学历要求
    showRecord: Boolean // 学历要求
  },
  computed: {
    title() {
      return (
        this.routeTitle ||
        this.sizeTitle ||
        this.workTitle ||
        this.workYearTitle ||
        this.recordTitle
      );
    },
    actions() {
      return (
        this.natureList ||
        this.companySize ||
        this.workData ||
        this.workYear ||
        this.recordData
      );
    },
    isShow: {
      get() {
        return this.showWorkData || this.showYear || this.showRecord || this.routeShow || this.sizeShow
      },
      set() {
        this.help=''
      }
    },
  },
  methods: {
    select(data) {
      this.isShow = false;
      this.$emit("select", data);
    },
    cancelpopuver() {
      this.$emit("cancelpopuver");
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .van-action-sheet__header {
  color: #ff5777;
  font-size: 0.3rem;
}
</style>