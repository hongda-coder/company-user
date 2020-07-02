<template>
  <div>
    <div>
      <van-dropdown-menu active-color="#ee0a24">
        <van-dropdown-item v-model="job" :options="jobDataList" />
        <van-dropdown-item v-model="sort" :options="selectTime" />
        <van-dropdown-item v-model="res" :options="results" />
      </van-dropdown-menu>
    </div>
    <div>
      <div class="wrap">
        <div class="compete-info">
          <div class="avatar">
            <img src="https://api.jobyes.com/images/avatar.png" />
          </div>
          <div class="person-info">
            <div class="info-top">
              <div class="name">陈小姐姐</div>
              <div class="phone">
                <img src="https://api.jobyes.com/images/candi-phone.png" />
                <span>12345678900</span>
              </div>
            </div>
            <div class="sex">
              女
              <span>|</span>18岁
              <span>|</span>本科
              <span>|</span>3年
            </div>
          </div>
          <div class="right">
            <img src="https://api.jobyes.com/images/back.png" />
          </div>
        </div>

        <div class="result-info">
          <div class="info-item">
            <div>面试结果</div>
            <div class="state">5555</div>
          </div>
          <div class="info-item">
            <div>职位</div>
            <div class="job-name">2222</div>
          </div>
          <div class="info-item">
            <div>通过日期</div>
            <div>2015-10-11</div>
          </div>
        </div>
        <div class="to-find">
          <van-button size="small" color="#FF8853" custom-style="height: 36rpx;" round>调整职位</van-button>
          <van-button size="small" style="margin-left:.2rem" custom-class="res-btn" round>调整结果</van-button>
          <van-button size="small" style="margin-left:.2rem" custom-class="res-btn" round>查看历史</van-button>
        </div>
      </div>
      <div class="wrap">
        <div class="compete-info">
          <div class="avatar">
            <img src="https://api.jobyes.com/images/avatar.png" />
          </div>
          <div class="person-info">
            <div class="info-top">
              <div class="name">陈小姐姐</div>
              <div class="phone">
                <img src="https://api.jobyes.com/images/candi-phone.png" />
                <span>12345678900</span>
              </div>
            </div>
            <div class="sex">
              女
              <span>|</span>18岁
              <span>|</span>本科
              <span>|</span>3年
            </div>
          </div>
          <div class="right">
            <img src="https://api.jobyes.com/images/back.png" />
          </div>
        </div>

        <div class="result-info">
          <div class="info-item">
            <div>面试结果</div>
            <div class="state">5555</div>
          </div>
          <div class="info-item">
            <div>职位</div>
            <div class="job-name">2222</div>
          </div>
          <div class="info-item">
            <div>通过日期</div>
            <div>2015-10-11</div>
          </div>
        </div>
        <div class="to-find">
          <van-button size="small" color="#FF8853" custom-style="height: 36rpx;" round>调整职位</van-button>
          <van-button size="small" style="margin-left:.2rem" custom-class="res-btn" round>调整结果</van-button>
          <van-button size="small" style="margin-left:.2rem" custom-class="res-btn" round>查看历史</van-button>
        </div>
      </div>
      <div class="footer" @click="back">
        <div>返回</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Talents",
  data() {
    return {
      job: 0,
      jobDataList: [{ text: "全部职位", value: 0 }],
      sort: 1,
      selectTime: [
        { text: "升序", value: 1 },
        { text: "降序", value: 2 }
      ],
      res: 0,
      results: [
        { text: "全部", value: 0 },
        { text: "通过", value: 2 },
        { text: "淘汰", value: 3 },
        { text: "入职", value: 5 },
        { text: "待定", value: 6 }
      ]
    };
  },
  methods: {
    back() {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 6.9rem;
  margin: auto;
  padding: 0 0.3rem;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 0.18rem 0.2rem #f7f0ea;
  margin-bottom: 0.2rem;
  &:last-of-type {
    margin-bottom: 1.5rem;
  }
  .compete-info {
    display: flex;
    justify-content: left;
    margin-top: 0.42rem;
    padding-bottom: 0.1rem;
    box-sizing: border-box;
    border-bottom: 0.02rem solid #f2f2f2;
    height: 1.3rem;
    .avatar {
      width: 0.8rem;
      margin-right: 0.15rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 0.23rem;
      margin-right: 0.15rem;
      border-radius: 50%;
      transform: rotate(180deg);
      opacity: 0.8;
      img {
        display: block;
        width: 100%;
      }
    }
    .person-info {
      flex: 1;
      .info-top {
        display: flex;
        justify-content: left;
        .name {
          font-size: 0.32rem;
          color: #333;
        }
        .phone {
          width: 2.1rem;
          display: flex;
          img {
            display: block;
            width: 0.2rem;
            margin-left: 0.3rem;
          }
          span {
            display: block;
            font-size: 0.28rem;
            color: #333;
          }
        }
      }
      .sex {
        font-size: 0.28rem;
        color: #777;
        line-height: 0.6rem;
        span {
          margin: 0 0.1rem;
        }
      }
    }
  }
  .result-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    .info-item {
      width: 33%;
      text-align: center;
      position: relative;
      font-size: 0.26rem;
      line-height: 0.42rem;
      color: #707070;
      &:last-of-type {
        &::after {
          width: 0;
        }
      }
      &::after {
        position: absolute;
        top: 0.2rem;
        right: 0;
        display: block;
        content: "";
        height: 0.5rem;
        width: 0.02rem;
        background: #f2f2f2;
      }
      .job-name {
        text-align: center;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .state {
        color: #ff8853;
        letter-spacing: 0.02rem;
      }
    }
  }
  .to-find {
    margin: 0.2rem 0;
    padding-right: 0.3rem;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    button {
      height: 0.4rem;
      line-height: 0.4rem;
    }
  }
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1rem;
  border-top: 0.02rem solid #c9c9c9;
  width: 100vw;
  background: #fff;
  overflow: hidden;
  div {
    width: 6.9rem;
    line-height: 0.7rem;
    margin: 0.15rem auto;
    border: 0.02rem solid #c9c9c9;
    text-align: center;
    border-radius: 0.1rem;
    color: #959595;
    font-size: 0.38rem;
  }
}
</style>