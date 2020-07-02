<template>
  <div>
    <div class="company-wel">
      <div class="before-title">
        <img class="before" src="https://api.jobyes.com/images/before.png" />
        公司福利
      </div>
      <div class="wrap">
        <div class="wel-item">
          11111
          <img class="del" src="https://api.jobyes.com/images/del.png" />
        </div>
        <van-button
          type="default"
          icon="add-o"
          custom-style="font-size: .28rem; line-height: 80rpx;"
        >自定义</van-button>
      </div>
    </div>
    <div class="company-wel">
      <div class="before-title">
        <img class="before" src="https://api.jobyes.com/images/before.png" />
        常用福利库
      </div>
      <div class="list">
        <van-button type="default">五险一金</van-button>
        <van-button type="default">五险一金</van-button>
        <van-button type="default">五险一金</van-button>
        <van-button type="default">五险一金</van-button>
        <van-button type="default">五险一金</van-button>
      </div>
    </div>
    <div class="footer">
      <div class="back" @click="back">返回</div>
      <div class="save">
        <img class="btn" src="https://api.jobyes.com/images/btn.png" /> 立即保存
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Weal',
  data () {
    return {
      
    }
  },
  methods: {
    back () {
      this.$router.push("/mine")
    }
  }
}
</script>

<style lang="scss" scoped>
.company-wel {
  padding-left: 0.3rem;
  box-sizing: border-box;
  .before-title {
    line-height: 0.8rem;
    font-size: 0.28rem;
    img {
      width: 0.3rem;
    }
  }
  .wrap {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    .wel-item {
      position: relative;
      width: 2rem;
      border: 0.02rem solid #ebedf0;
      border-radius: 0.1rem;
      line-height: 0.78rem;
      text-align: center;
      margin-right: 0.3rem;
      margin-bottom: 0.3rem;
      color: #323233;
      font-size: 0.28rem;
      &:nth-of-type(3 + 3n) {
        margin-right: 0;
      }
      img {
        position: absolute;
        top: 0;
        right: 0.02rem;
        width: 0.35rem;
      }
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    button {
      width: 2.1rem;
      margin-right: 0.3rem;
      margin-bottom: 0.3rem;
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
  height: 1rem;
  justify-content: left;
  padding: .15rem 0.3rem;
  box-sizing: border-box;
  z-index: 9;
  .back {
    width: 2.5rem;
    background: #fff;
    border: 0.02rem solid #dedede;
    line-height: .68rem;
    text-align: center;
    font-size: 0.3rem;
    color: #959595;
    border-radius: .1rem;
    margin-right: .2rem;
    box-sizing: border-box;
  }
  .save {
    flex: 1;
    background: linear-gradient(to right, #FFC36F, #FF8853);
    line-height: .68rem;
    text-align: center;
    border-radius: .1rem;
    color: #fff;
    font-size: .3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn {
      width: .3rem;
      margin-right: .1rem;
    }
  }
}
</style>