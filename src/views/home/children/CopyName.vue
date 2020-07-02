<template>
  <div>
    <div>
      <van-cell-group>
        <van-field
          label="姓名"
          required
          clearable
          input-align="right"
          placeholder="请输入姓名"
        />
        <van-field
          label="联系电话"
          required
          clearable
          input-align="right"
          placeholder="请输入联系电话"
        />
        <van-field
          label="邮箱"
          placeholder="请输入邮箱"
          clearable
          input-align="right"
        />
        <van-cell required is-link >
          <div class="time-dot">
             <div class="start" @click="showStart=true">{{btime}}</div> <!-- 开始时间 -->
            <div class="interval">至</div>
            <div class="start" @click="showEnd=true">{{etime}}</div> <!-- 结束时间 -->
          </div>
          <div slot="title">
            <div class="van-cell-text">面试时段</div>
          </div>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="footer">
      <div class="back" @click="back">返回</div>
      <div class="save"><image class="btn" src="https://api.jobyes.com/images/issue.png"></image>确定录入</div>
    </div>
    <!-- 面试开始时间 -->
    <van-popup   v-model="showStart"  position="bottom">
      <van-picker :columns="beginTime"  show-toolbar @confirm="selectStart" @cancel="showStart = false" />
    </van-popup>

    <!-- 面试结束时间 -->
    <van-popup  v-model="showEnd"  position="bottom" >
      <van-picker :columns="endTime" show-toolbar @confirm="selectEnd" @cancel="showEnd = false" />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'CopyName',
  data () {
    return {
      showStart: false, // 面试开始时间显示隐藏
      showEnd: false, // 面试结束时间显示隐藏
      beginTime: [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], // 面试开始时间
      endTime: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], // 面试结束时间
      btime: '', // 面试开始时间
      etime: '', // 面试结束时间
    }
  },
  methods: {
    // 确定开始时间
    selectStart (val) {
      this.btime = val
      let endTime = new Array
      for(let i = val + 1; i < 24; i++ ) {
        endTime.push(i)
      }
      this.endTime = endTime
      this.showStart = false
    },
    // 确定结束时间
    selectEnd (val) {
      this.etime = val
      this.showEnd = false
    },
    back () {
      this.$router.push("/home")
    }
  }
}
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
    width: 2.5rem;
    background: #fff;
    border: 0.02rem solid #dedede;
    line-height: 0.68rem;
    text-align: center;
    font-size: 0.3rem;
    color: #959595;
    border-radius: 0.1rem;
    margin-right: 0.2rem;
    box-sizing: border-box;
  }
  .save {
    flex: 1;
    background: linear-gradient(to right, #ffc36f, #ff8853);
    text-align: center;
    border-radius: 0.1rem;
    color: #fff;
    font-size: 0.3rem;
    padding: 0.15rem 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn {
      width: 0.3rem;
      height: 0.3rem;
      margin-right: 0.1rem;
    }
  }
}        

.time-dot {
  display: flex;
  justify-content: flex-end;
  .start {
    width: 1rem;
    border: .02rem solid #ccc;
    text-align: center;
  }
  .interval {
    margin: 0 .15rem;
  }
}

</style>