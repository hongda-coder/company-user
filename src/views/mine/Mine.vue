<template>
  <div>
    <div class="mine">
      <div class="person" @click="toInfo">
        <div class="person-avatar">
          <div class="avatar">
            <img src />
          </div>
        </div>
        <div class="person-info">
          <div class="name">admin</div>
          <div class="job">职位：2222</div>
        </div>
        <div class="person-go">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="list">
        <van-grid column-num="3" :border="false">
          <van-grid-item icon="https://api.jobyes.com/images/info-company.png" text="企业信息" @click="toCompanyInfo" />
          <van-grid-item icon="https://api.jobyes.com/images/mien-company.png" text="企业风采" @click="toFace" />
          <van-grid-item icon="https://api.jobyes.com/images/welfare-tabs.png" text="福利标签" @click="toWeal" />
        </van-grid>
      </div>
      <div class="mine-banner">
        <img src="https://api.jobyes.com/images/mine-banner.png" />
      </div>
      <div class="mine-list">
        <van-cell title="资质认证" is-link value-class="pass" @click="toApti" />
        <van-cell is-link value-class="pass"  @click="toCode">
          <div class="my-code-img">
            <img src />
          </div>
          <div slot="title">
            <div class="van-cell-text">招聘公众号二维码</div>
          </div>
        </van-cell>

        <van-cell title="我的客服" is-link value="020-81747580" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Mine', 
  data () {
    return {

    }
  },
  methods: {
    // 去个人信息页面
    toInfo () {
      this.$router.push("/mine/info")
    },
    // 去企业信息页面
    toCompanyInfo () {
      this.$router.push("/company/info")
    },
    // 去企业风采
    toFace () {
      this.$router.push("/company/face")
    },
    // 去公司福利
    toWeal () {
      this.$router.push("/company/weal")
    },
    // 去上传微信公众好
    toCode () {
      this.$router.push("/mine/code")
    },
    // 资质认证
    toApti () {
      this.$router.push("/company/false")
    }
  }
}
</script>


<style lang="scss" scoped>
.mine {
  .person {
    display: flex;
    justify-content: left;
    padding: 0.1rem 0.3rem;
    width: 100vw;
    box-sizing: border-box;
    .person-avatar {
      width: 1rem;
      margin-right: 0.2rem;
      .avatar {
        width: 100%;
        img {
          width: 100%;
          height: 1rem;
        }
      }
    }
    .person-info {
      width: 3rem;
      .name {
        font-size: 0.32rem;
        color: #333;
        line-height: 0.6rem;
      }
      .job {
        font-size: 0.26rem;
        color: #959595;
      }
    }
    .person-go {
      flex: 1;
      text-align: right;
      line-height: .8rem;
      .van-icon {
        font-size: .3rem;
      }
    }
  }
  .mine-banner {
    padding: 0.2rem 0.3rem 0 0.3rem;
    width: 100vw;
    box-sizing: border-box;
    border-top: 0.15rem solid #f2f2f2;
    img {
      width: 100%;
      height: 1.3rem;
    }
  }
  .mine-list {
    .pass {
      height: 0.44rem;
      line-height: 0.44rem;
      color: #ffb08c;
      .my-code-img {
        float: right;
        width: 40rpx;
        text-align: right;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>