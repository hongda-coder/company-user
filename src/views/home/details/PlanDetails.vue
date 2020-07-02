<template>
  <div>
    <div>
      <div class="interview">
        <van-checkbox-group v-model="result">
          <div class="wrap">
            <van-checkbox checked-color="#FF8853" name="a">
              <div class="compete-info">
                <div class="avatar">
                  <img src="https://api.jobyes.com/images/avatar.png" />
                </div>
                <div class="person-info">
                  <div class="info-top">
                    <div class="name">收到</div>
                  </div>
                  <div class="sex">
                    <div class="phone">
                      <img src="https://api.jobyes.com/images/candi-phone.png" />
                      1324123123312
                    </div>
                    <div class="phone">
                      <img
                        src="https://api.jobyes.com/images/candi-email.png"
                        style="width: 23rpx;"
                      />
                      1421222
                    </div>
                  </div>
                  <div class="info-bottom">
                    <div class="time">
                      <img src="https://api.jobyes.com/images/time-interview.png" />
                      <span>13222</span>
                    </div>
                  </div>
                </div>
              </div>
            </van-checkbox>
            <div class="to-find">
              <van-button size="small" color="#FF8853" round>移除名单</van-button>
              <van-button size="small" style="margin-left:.3rem" round>修改时间</van-button>
            </div>
          </div>
          <div class="wrap">
            <van-checkbox checked-color="#FF8853" name="b">
              <div class="compete-info">
                <div class="avatar">
                  <img src="https://api.jobyes.com/images/avatar.png" />
                </div>
                <div class="person-info">
                  <div class="info-top">
                    <div class="name">收到</div>
                  </div>
                  <div class="sex">
                    <div class="phone">
                      <img src="https://api.jobyes.com/images/candi-phone.png" />
                      1324123123312
                    </div>
                    <div class="phone">
                      <img
                        src="https://api.jobyes.com/images/candi-email.png"
                        style="width: 23rpx;"
                      />
                      1421222
                    </div>
                  </div>
                  <div class="info-bottom">
                    <div class="time">
                      <img src="https://api.jobyes.com/images/time-interview.png" />
                      <span>13222</span>
                    </div>
                  </div>
                </div>
              </div>
            </van-checkbox>
            <div class="to-find">
              <van-button size="small" color="#FF8853" round>移除名单</van-button>
              <van-button size="small" style="margin-left:.3rem" round>修改时间</van-button>
            </div>
          </div>
          <div class="wrap">
            <van-checkbox checked-color="#FF8853" name="c">
              <div class="compete-info">
                <div class="avatar">
                  <img src="https://api.jobyes.com/images/avatar.png" />
                </div>
                <div class="person-info">
                  <div class="info-top">
                    <div class="name">收到</div>
                  </div>
                  <div class="sex">
                    <div class="phone">
                      <img src="https://api.jobyes.com/images/candi-phone.png" />
                      1324123123312
                    </div>
                    <div class="phone">
                      <img
                        src="https://api.jobyes.com/images/candi-email.png"
                        style="width: 23rpx;"
                      />
                      1421222
                    </div>
                  </div>
                  <div class="info-bottom">
                    <div class="time">
                      <img src="https://api.jobyes.com/images/time-interview.png" />
                      <span>13222</span>
                    </div>
                  </div>
                </div>
              </div>
            </van-checkbox>
            <div class="to-find">
              <van-button size="small" color="#FF8853" round>移除名单</van-button>
              <van-button size="small" style="margin-left:.3rem" round>修改时间</van-button>
            </div>
          </div>
        </van-checkbox-group>
      </div>
      <div class="footer" @click="back">
        <div>返回</div>
      </div>
      <van-dialog use-slot title="修改时间">
        <div class="time-dot">
          <div class="start" bindtap="showStart">111</div>
          <div class="interval">至</div>
          <div class="start" bindtap="showEnd">111</div>
        </div>
      </van-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanDetails",
  data() {
    return {
      result: ["a", "b", "c"]
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
.interview {
  width: 100vw;
  padding: 0 0.3rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  .wrap {
    margin: auto;
    overflow: hidden;
    padding: 0 0.2rem;
    box-shadow: 0 0 0.1rem #ffe7dd;
    margin-bottom: 0.2rem;
    .compete-info {
      display: flex;
      justify-content: left;
      margin-top: 0.2rem;
      box-sizing: border-box;
      height: 1.42rem;
      .avatar {
        width: 0.8rem;
        margin-right: 0.25rem;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          margin-top: 0.2rem;
        }
      }
      .person-info {
        flex: 1;
        .info-top {
          display: flex;
          justify-content: left;
          .name {
            font-size: 0.28rem;
            color: #333;
          }
        }
        .info-bottom {
          .time {
            display: flex;
            img {
              display: block;
              width: 0.2rem;
              height: 0.2rem;
              margin-right: 0.1rem;
              margin-top: 0.05rem;
            }
            span {
              display: block;
              font-size: 0.28rem;
              color: #ff8853;
            }
          }
        }
        .sex {
          font-size: 0.28rem;
          color: #777;
          line-height: 0.6rem;
          display: flex;
          .phone {
            margin-right: 0.2rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            img {
              width: 0.19rem;
            }
          }
        }
      }
    }
    .to-find {
      border-top: 0.02rem solid #f0f0f0;
      display: flex;
      justify-content: flex-end;
      padding: 0.18rem 0;
      box-sizing: border-box;
      button {
        display: block;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.28rem;
      }
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
    line-height: 0.8rem;
    margin: 0.1rem auto;
    border: 0.02rem solid #c9c9c9;
    text-align: center;
    border-radius: 0.1rem;
    color: #959595;
    font-size: 0.28rem;
  }
}
</style>