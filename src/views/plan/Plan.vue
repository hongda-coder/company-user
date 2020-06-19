<template>
  <div>
    <div>
      <van-cell-group>
        <van-cell required is-link>
          <div></div>
          <div slot="title">
            <div class="van-cell-text">职位选择</div>
          </div>
        </van-cell>
        <van-cell required is-link @click="showTime">
          <div>{{mstime}}</div>
          <div slot="title">
            <div class="van-cell-text">面试日期</div>
          </div>
        </van-cell>
        <van-field label="执行人" v-model="remarks" placeholder="请输入执行人"  input-align="right" />
      </van-cell-group>
    </div>

    <div class="footer">
      <div class="back" bindtap="toRelease">立即发布</div>
      <div v-show="isShow" class="save" bindtap="toCopyName">
        <img class="btn" src="https://api.jobyes.com/images/issue.png" />录入名单
      </div>
    </div>

    <!-- 发布竞聘 -->
    <van-popup v-model="showJob" position="bottom">
      <van-picker :columns="jobLists" show-toolbar key />
    </van-popup>

    <!-- 面试日期时间选择 -->
    <van-popup v-model="howInterview" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirmSlelctTime"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Plan",
  data() {
    return {
      howInterview: false, // 面试时间
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      mstime: "", // 面试日期
      isShow: "true", // 是否显示下边按钮
      remarks: "", //执行人
      showJob: false, // 职位选择
      jobName: "", // 职位选择的名称
      // 必须参数
      jobid: "", // 选择得职位id
      type: 2,
      curr: 100, // 当前页数据
      limit: 1, // 当前页,
      jobLists: "", // 职位选择的数据
    };
  },
  methods: {
    // 展示时间
    showTime() {
      this.howInterview = true;
    },
    // 确定选择
    confirmSlelctTime() {
      this.mstime = this.timeFormat(this.currentDate);
      this.howInterview = false;
    },
    // 过滤时间
    timeFormat(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year + "-" + month + "-" + day;
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 100vw;
  border-top: 0.02rem solid #f6f6f6;
  display: flex;
  justify-content: left;
  padding: 0.15rem 0.3rem;
  box-sizing: border-box;
  z-index: 99;
  .back {
    flex: 1;
    width: 2.5rem;
    background: #fff;
    border: 0.02rem solid #ff8e56;
    line-height: 0.68rem;
    text-align: center;
    font-size: 0.3rem;
    color: #ff8e56;
    border-radius: 0.1rem;
    margin-right: 0.2rem;
    box-sizing: border-box;
  }
  .save {
    width: 4.5rem;
    background: linear-gradient(to right, #ffc36f, #ff8853);
    line-height: 0.68rem;
    text-align: center;
    border-radius: 0.1rem;
    color: #fff;
    font-size: 0.3rem;
    .btn {
      width: 0.3rem;
      height: 0.3rem;
      margin-right: 0.1rem;
    }
  }
}
</style>