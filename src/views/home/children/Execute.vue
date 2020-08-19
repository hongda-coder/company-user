<template>
  <div>
    <div class="body">
      <div>
        <div v-for="item in dataLists.list" :key="item.id" class="wrap" @click="toDetails">
          <div class="job">
            <div class="job-state">
              <div class="job-name">{{item.jobname}}</div>
              <div class="state-step">已完成</div>
            </div>
            <div class="interdiv-count">
              预约时间：
              <span class="job-color">{{item.mstime}}</span>
            </div>
            <div class="interdiv-count">
              {{item.address}}
              <span>|</span>
              {{item.working}}
              <span>|</span>
              {{item.record}}
            </div>
          </div>
          <div class="compete-wrap">
            <div class="compete-count">
              <div>
                <img src="https://api.jobyes.com/images/compete-count.png" />
              </div>已签到人数
            </div>
            <div class="person-count">
              {{item.msnumber}}人
              <van-icon name="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Execute",
  props: {
    dataLists: Object
  },
  mounted() {
    console.log(this.dataLists);
  },
  methods: {
    toDetails() {
      this.$router.push("/execute/details");
    }
  }
};
</script>
<style lang="scss" scoped>
.body {
  width: 100vw;
  .wrap {
    border-bottom: 0.02rem solid #f6f6f6;
    .job {
      padding: 0.15rem 0.3rem;
      box-sizing: border-box;
      .job-state {
        display: flex;
        justify-content: space-between;
        .job-name {
          font-size: 0.32rem;
          color: #333;
          line-height: 0.6rem;
        }
      }
      .interdiv-count {
        font-size: 0.28rem;
        line-height: 0.42rem;
        color: #9a9a9a;
        .job-color {
          font-size: 0.3rem;
          color: #ffc15e;
        }
      }
      .state-step {
        color: #019e75;
        font-size: 0.3rem;
      }
      .interview-count {
        font-size: 0.28rem;
        color: #959595;
        .job-color {
          font-size: 0.3rem;
          color: #ffc15e;
        }
      }
    }
    .compete-wrap {
      display: flex;
      justify-content: space-between;
      width: 6.9rem;
      margin: auto;
      background: #f6f6f6;
      padding: 0 0.3rem;
      box-sizing: border-box;
      margin-top: 0.1rem;
      overflow: hidden;
      height: 0.7rem;
      line-height: 0.7rem;
      margin-bottom: 0.15rem;
      .compete-count {
        color: #707070;
        font-size: 0.3rem;
        display: flex;
        justify-content: left;
        line-height: 0.7rem;
        div {
          display: flex;
          justify-content: center;
          flex-direction: column;
          img {
            width: 0.46rem;
            height: 0.46rem;
            margin-right: 0.1rem;
          }
        }
      }
      .person-count {
        color: #fe9567;
        font-size: 0.3rem;
        line-height: 0.7rem;
        .van-icon {
          color: #707070;
          font-size: 0.3rem;
          line-height: 0.7rem;
        }
      }
    }
  }
}
</style>