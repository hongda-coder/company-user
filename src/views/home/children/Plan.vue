<template>
  <div class="plan">
    <div class="body">
      <div>
        <div>
          <div v-for="item in dataLists.list" :key="item.id" class="job" @click="toDetails">
            <div class="job-state">
              <div class="job-name">{{item.jobname}}</div>
              <div class="state-step">{{item.salary}}</div>
            </div>
            <div class="job-state">
              <div class="interdiv-count">
                预约时间：
                <span class="job-color">{{item.mstime}}</span>
              </div>
              <van-button color="#FF8853" size="small" style="height: .42rem; padding: 0 .3rem;" round @click.stop="toCopyName(item.id)">录入名单</van-button>
            </div>
            <div class="interdiv-count">
              {{item.address}}
              <span>|</span>{{item.working}}
              <span>|</span>{{item.record}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Plan',
  props: {
    dataLists: Object
  },
  methods: {
    toDetails () { // 去计划详情
      this.$router.push("/plan/details")
    },
    toCopyName () { // 去录入名单
      this.$router.push("/copy/name")
    }
  }
}
</script>


<style lang="scss" scoped>
.body {
  width: 100vw;
  .job {
    padding: 0.15rem 0.3rem;
    box-sizing: border-box;
    border-bottom: 0.02rem solid #f2f2f2;
    .job-state {
      display: flex;
      justify-content: space-between;
      .job-name {
        font-size: 0.32rem;
        color: #333;
        line-height: 0.6rem;
      }
      .interdiv-count {
        font-size: 0.28rem;
        color: #959595;
        .job-color {
          font-size: 0.3rem;
          color: #ffc15e;
        }
      }
      .state-step {
        color: #ff3636;
        font-size: 0.3rem;
      }
    }
    .interdiv-count {
      font-size: 0.28rem;
      color: #959595;
      span {
        margin: 0 0.1rem;
      }
    }
  }
}
</style>