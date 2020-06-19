<template>
  <div class="plan">
    <div class="body">
      <!-- <no-data class='no-data' wx:if="{{dataList.length == 0}}" /> -->
      <div wx:else>
        <div>
          <div class="job">
            <div class="job-state">
              <div class="job-name">人事行政主管</div>
              <div class="state-step">3-4.5千/月</div>
            </div>
            <div class="job-state">
              <div class="interdiv-count">
                预约时间：
                <span class="job-color">2020-06-18</span>
              </div>
              <van-button
                catchtap="toCopy"
                color="#FF8853"
                size="small"
                style="height: .42rem; padding: 0 .3rem;"
                round
              >录入名单</van-button>
            </div>
            <div class="interdiv-count">
              广州市天河区
              <span>|</span>1-3年
              <span>|</span>大专
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


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