<template>
  <div>
    <!-- <no-data class="no-data" wx:if="{{dataList.length == 0}}" /> -->
    <div class="interview">
      <div class="wrap">
        <div class="compete-info">
          <div class="avatar">
            <img src="https://api.jobyes.com/images/avatar.png" />
          </div>
          <div class="person-info">
            <div class="info-top">
              <div class="name">陈晓姐</div>
              <div class="phone">
                <img src="https://api.jobyes.com/images/candi-phone.png" />
                <span>1369254123</span>
              </div>
            </div>
            <div class="sex">
              女
              <span>|</span>18岁
              <span>|</span>本科
              <span>|</span>1-3年
            </div>
            <div class="info-bottom">
              <div class="time">
                <img src="https://api.jobyes.com/images/time-interview.png" />
                <span>6：00-19：00</span>
              </div>
            </div>
          </div>
          <div class="check-details">
            <img src="https://api.jobyes.com/images/check-details.png" />
          </div>
        </div>
        <div class="to-find">
          <van-button size="small" color="#FF8853"  round>分享评价</van-button>
          <van-button size="small" style="margin-left:.1rem" custom-class="res-btn" round>入职</van-button>
          <van-button size="small" style="margin-left:.1rem" custom-class="res-btn" round>待定</van-button>
          <van-button size="small" style="margin-left:.1rem" custom-class="res-btn" round>通过</van-button>
          <van-button size="small" style="margin-left:.1rem" custom-class="res-btn" round>不通过</van-button>
        </div>
        <div class="to-find" v-show="false">
          <van-button
            size="small"
            color="#959595"
            custom-style="height: 36rpx; background: #f2f2f2;"
            round
          >未签到</van-button>
        </div>
        <div class="to-find" v-show="false">
          <van-button
            size="small"
            color="#FF8853"
            custom-style="height: 36rpx;"
            bind:click="readRes"
            round
          >查看评价</van-button>
        </div>
      </div>
            <div class="wrap">
        <div class="compete-info">
          <div class="avatar">
            <img src="https://api.jobyes.com/images/avatar.png" />
          </div>
          <div class="person-info">
            <div class="info-top">
              <div class="name">陈晓姐</div>
              <div class="phone">
                <img src="https://api.jobyes.com/images/candi-phone.png" />
                <span>1369254123</span>
              </div>
            </div>
            <div class="sex">
              女
              <span>|</span>18岁
              <span>|</span>本科
              <span>|</span>1-3年
            </div>
            <div class="info-bottom">
              <div class="time">
                <img src="https://api.jobyes.com/images/time-interview.png" />
                <span>6：00-19：00</span>
              </div>
            </div>
          </div>
          <div class="check-details">
            <img src="https://api.jobyes.com/images/check-details.png" />
          </div>
        </div>
        <div class="to-find">
          <van-button size="small" color="#FF8853"  round>分享评价</van-button>
          <van-button size="small" style="margin-left:.1rem" custom-class="res-btn" round>入职</van-button>
          <van-button size="small" style="margin-left:.1rem" custom-class="res-btn" round>待定</van-button>
          <van-button size="small" style="margin-left:.1rem" custom-class="res-btn" round>通过</van-button>
          <van-button size="small" style="margin-left:.1rem" custom-class="res-btn" round>不通过</van-button>
        </div>
        <div class="to-find" v-show="false">
          <van-button
            size="small"
            color="#959595"
            custom-style="height: 36rpx; background: #f2f2f2;"
            round
          >未签到</van-button>
        </div>
        <div class="to-find" v-show="false">
          <van-button
            size="small"
            color="#FF8853"
            custom-style="height: 36rpx;"
            bind:click="readRes"
            round
          >查看评价</van-button>
        </div>
      </div>
    </div>

    <div class="footer" @click="back">
      <div>返回</div>
    </div>

    <div class="toast-box" v-show="ifName">
      <div class="toastbg"></div>
      <div class="showToast">
        <div class="toast-title">评价</div>
        <div class="toast-main">
          <div class="toast-input">
            <textarea placeholder="请输入评价"></textarea>
          </div>
        </div>
        <div class="toast-button">
          <div class="button1">
            <div catchtap="cancel">取消</div>
          </div>
          <div class="button2">
            <div catchtap="confirm">确定</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 评价 -->
    <van-dialog use-slot title="评价" show="showEvalu" bind:close="onClose" bind:confirm="confirmIs">
      <div class="evalu"></div>
      <div class="last-state"></div>
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: "ExecuteDetails",
  data() {
    return {
      form: {
        openIdKey: "",
        sessionKey: "",
        token: "",
        limit: 1,
        curr: 10,
        id: ""
      },
      updateFrom: {
        openIdKey: "",
        sessionKey: "",
        token: "",
        id: "",
        state: "", // 状态
        remarks: "" // 评价
      },
      evaluForm: {
        // 查看评价
        openIdKey: "",
        sessionKey: "",
        token: "",
        id: ""
      },
      showEvalu: false, //评价弹层
      ifName: false,
      isCheck: false, // 是否隐藏4个按钮
      dataList: [],
      remarks: "", // 评价
      state: "" // 状态
    };
  },
  methods: {
    back () {
      this.$router.push("/home")
    }
  }
};
</script>



<style lang="scss" scoped>
.interview {
  width: 100vw;
  padding: 0 0.3rem;
  border-top: 0.5rem solid #f5f5f5;
  box-sizing: border-box;
  .wrap {
    width: 6.9rem;
    margin: auto;
    overflow: hidden;
    box-shadow: 0 0.1rem 0.3rem #fff6f0;
    &:last-of-type {
      margin-bottom: 1.5rem;
    }
    .compete-info {
      width: 100%;
      display: flex;
      justify-content: left;
      margin-top: 0.42rem;
      padding: 0 0.3rem;
      box-sizing: border-box;
      border-bottom: 0.02rem solid #f2f2f2;
      height: 1.42rem;
      flex: 1;
      position: relative;
      .avatar {
        width: 0.8rem;
        margin-right: 0.15rem;
        border-radius: 50%;
        overflow: hidden;
        img {
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
            display: flex;
            img {
              display: block;
              width: 0.2rem;
              margin-left: 0.3rem;
              margin-right: 0.1rem;
            }
            span {
              display: block;
              font-size: 0.28rem;
            }
          }
        }
        .sex {
          font-size: 0.28rem;
          color: #777;
          line-height: 0.6rem;
        }
        .info-bottom {
          display: block;
          .time {
            display: flex;
            img {
              display: block;
              width: .2rem;
              height: .2rem;
              margin-right: .1rem;
              margin-top: .05rem;
            }
            span {
              display: block;
              font-size: 0.28rem;
              color: #ff8853;
            }
          }
        }
      }
      .check-details {
        position: absolute;
        top: .3rem;
        right: 0.3rem;
        width: 0.3rem;
        img {
          display: block;
          width: 100%;
        }
      }
    }
    .to-find {
      margin: 0.2rem 0;
      padding-right: .3rem;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-end;
      button {
        height: .4rem;
        line-height: .4rem;
      }
    }
  }
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1rem;
  border-top: .02rem solid #c9c9c9;
  width: 100vw;
  background: #fff;
  overflow: hidden;
  div {
    width: 6.9rem;
    line-height: .7rem;
    margin: 0.15rem auto;
    border: .02rem solid #c9c9c9;
    text-align: center;
    border-radius: 0.1rem;
    color: #959595;
    font-size: .38rem;
  }
}
</style>