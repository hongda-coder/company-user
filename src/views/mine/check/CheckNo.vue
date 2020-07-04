<template>
  <div>
    <div class="check-no">
      <div class="check-icon"></div>
      <div class="check-desc">
        <div class="no-pass-title">审核中</div>
        <div class="check-time">2015-20-20</div>
        <div class="reason">拒绝原因</div>
        <div class="reason-deac">adsssssssssssssss</div>

        <div class="line"></div>
        <div class="toast">温馨提示：</div>
        <div class="request">
          如仍有问题，请咨询客服电话：
          <span>020-81747580</span>
        </div>
      </div>
    </div>

    <!-- footer按钮 -->
    <div class="footer">
      <div class="back" @click="back">返回</div>
      <div class="save" @click="toApti">
        <img class="btn" src="https://api.jobyes.com/images/btn.png" />重新提交
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    toApti () {
      this.$router.push("/company/auth")
    }
  }
}
</script>


<style lang="scss" scoped>
.check-no {
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  position: relative;
  z-index: -1;
  .check-icon {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translate(-50%, -50%);
    width: .8rem;
    height: .8rem;
    background: #ff8a52;
    border: .1rem solid #fff;
    border-radius: 50%;
    z-index: 9;
    &::before {
      content: "";
      display: block;
      width: .55rem;
      height: .1rem;
      background: #fff;
      margin-top: .36rem;
      margin-left: .15rem;
    }
  }
  .check-desc {
    position: absolute;
    top: 1rem;
    left: .3rem;
    width: 6.9rem;
    background: #fff;
    padding: 0 .3rem;
    box-sizing: border-box;
    .no-pass-title {
      margin-top: .7rem;
      width: 100%;
      text-align: center;
      font-size: .38rem;
      color: #333;
    }
    .check-time {
      width: 100%;
      text-align: center;
      font-size: .3rem;
      line-height: .5rem;
      color: #959595;
    }
    .reason {
      font-size: .38rem;
      color: #ff9465;
      margin-top: .3rem;
      line-height: .6rem;
    }
    .reason-deac {
      font-size: .3rem;
      color: #707070;
      line-height: .6rem;
      margin: .2rem 0 .5rem 0;
    }
    .line {
      position: relative;
      height: .02rem;
      width: 100%;
      background: #dad7d7;
      &::before {
        position: absolute;
        left: -.4rem;
        top: -.2rem;
        content: "";
        width: .42rem;
        height: .4rem;
        background: #f2f2f2;
        border-radius: 50%;
      }
      &::after {
        position: absolute;
        right: -.4rem;
        top: -.2rem;
        content: "";
        display: block;
        width: .42rem;
        height: .4rem;
        background: #f2f2f2;
        border-radius: 50%;
      }
    }
    .toast {
      margin-top: .4rem;
      font-size: .34rem;
      color: #333;
    }
    .request {
      font-size: .28rem;
      color: #959595;
      line-height: .6rem;
      margin-bottom: .3rem;
      span {
        color: #ff8a52;
      }
    }
  }
}


/* footer */
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
</style>