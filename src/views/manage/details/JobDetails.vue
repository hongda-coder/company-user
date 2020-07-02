<template>
  <div style="padding: .1rem 0; box-sizing: border-box;">
    <div class="job">
      <div class="job-top">
        <div class="job-info">
          <div class="job-name">UI设计</div>
          <div class="job-price">8k</div>
        </div>
        <div class="job-type">
          预约面试时间：
          <span>2015-10-20</span>
        </div>
      </div>
      <div class="job-bottom">
        <div class="job-info">
          <div>
            <img class="icon-image" src="https://api.jobyes.com/images/type.png" />全职
          </div>
          <div>
            <img class="icon-image" src="https://api.jobyes.com/images/time.png" />3-5年
          </div>
          <div>
            <img class="icon-image" src="https://api.jobyes.com/images/education.png" />本科
          </div>
        </div>
        <div class="address">
          <img class="icon-image address" src="https://api.jobyes.com/images/address.png" />
          <div>
            广州广州
          </div>
        </div>
      </div>
    </div>
    <div class="desc">
      <div class="title">
        <img src="https://api.jobyes.com/images/before.png" />
        职位描述
      </div>
      <div class="job-desc">
        阿诗丹顿多多多多多多多多多多多多多多
        阿诗丹顿多多多多多多多多多多多多多多
        多多多多多多多多多多多多多多多多多多多多多
        多多多多多多多多多多多多多多多多多多多多多
        多多多多多多多多多多多多多多多多多多多多多
      </div>
    </div>

    <!-- 底部按钮 -->
    <div class="footer">
      <div class="back" @click="back">
        <img src="https://api.jobyes.com/images/back.png" />
      </div>
      <div class="share">
        <img src="https://api.jobyes.com/images/share.png" />
      </div>
      <div class="save" @click="toCreate">
        <img class="btn" src="https://api.jobyes.com/images/editor.png" />立即修改
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobDetails',
  methods: {
    // 去修改
    toCreate () { 
      this.$router.push({path: '/create', query: {title: '立即保存'}})
    },

    // 返回上一步
    back() { 
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.job {
  width: 6.9rem;
  margin: auto;
  padding: 0 0.3rem;
  box-sizing: border-box;
  box-shadow: 0 0.1rem 0.1rem 0.05rem #f2f2f2;
  .job-top {
    padding: 0.2rem 0.1rem;
    box-sizing: border-box;
    .job-info {
      display: flex;
      justify-content: space-between;
      line-height: 0.6rem;
    }
    .job-name {
      font-size: 0.32rem;
      color: #333;
    }
    .job-price {
      font-size: 0.32rem;
      color: #ff4f4f;
    }
    .job-type {
      color: #ffa57b;
      font-size: 0.28rem;
    }
  }
  .job-bottom {
    padding: 0 0.1rem;
    box-sizing: border-box;
    .job-info {
      display: flex;
      justify-content: left;
      font-size: 0.3rem;
      color: #959595;
      border-top: 0.02rem solid #f2f2f2;
      line-height: 0.6rem;
      div {
        margin-right: 0.3rem;
        .icon-image {
          width: 0.24rem;
          margin-right: 0.06rem;
          &.address {
            width: 0.2rem;
          }
        }
      }
    }
    .address {
      font-size: 0.3rem;
      color: #959595;
      padding-bottom: 0.2rem;
      box-sizing: border-box;
      display: flex;
      img {
        width: .2rem;
        display: block;
        margin-right: .1rem;
      }
    }
  }
}
.desc {
  width: 6.9rem;
  margin: auto;
  .title {
    margin-top: 0.2rem;
    font-size: 0.32rem;
    color: #333;
    img {
      width: 0.26rem;
      margin-right: 0.1rem;
    }
  }
  .job-desc {
    font-size: 0.3rem;
    color: #959595;
    word-wrap: break-word;
    line-height: 0.48rem;
    white-space: pre-line;
    margin-bottom: 1.2rem;
  }
}
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
  height: 1rem;
  overflow: hidden;
  .back {
    width: 1rem;
    background: #fff;
    line-height: 0.68rem;
    text-align: center;
    font-size: 0.3rem;
    color: #959595;
    border-radius: 0.1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
     justify-content: center;
    img {
      width: 0.36rem;
      display: block;
    }
  }
  .share {
    width: 1rem;
    line-height: 0.68rem;
    border-radius: 0.1rem;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: .43rem;
      display: block;
    }
  }
  .save {
    flex: 1;
    background: linear-gradient(to right, #ffc36f, #ff8853);
    line-height: 0.68rem;
    text-align: center;
    border-radius: 0.1rem;
    color: #fff;
    font-size: 0.3rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 0.3rem;
      margin-right: 0.2rem;
    }
  }
}
</style>