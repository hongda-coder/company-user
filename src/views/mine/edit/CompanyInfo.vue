<template>
  <div>
    <div class="company">
      <div class="logo">
        <img src="../../../assets/images/company-logo.png" />
      </div>
      <div class="info">
        <div class="name">广州市志在信息科技有限公司</div>
        <div class="address">
          <span>广州天河区</span>
          <span>民营企业</span>
          <span>少于50人</span>
          <span>计算机软件</span>
        </div>
      </div>
    </div>
    <div class="mien-wrap">
      <div class="title">
        <img class="before" src="https://api.jobyes.com/images/before.png" />
        公司介绍
      </div>
      <div class="mien-desc">广州市志在信息科技有限公司广州市志在信息科技有限公司广州市志在信息科技有限公司
        广州市志在信息科技有限公司广州市志在信息科技有限公司广州市志在信息科技有限公司
        广州市志在信息科技有限公司广州市志在信息科技有限公司广州市志在信息科技有限公司
        广州市志在信息科技有限公司广州市志在信息科技有限公司广州市志在信息科技有限公司
        广州市志在信息科技有限公司广州市志在信息科技有限公司广州市志在信息科技有限公司
      </div>
    </div>
    <div class="mien-wrap">
      <div class="title">
        <img class="before" src="https://api.jobyes.com/images/before.png" />
        办公地址
      </div>
      <div class="mien-desc">
        广州市志在信息科技有限公司广州市志
      </div>
    </div>

    <div class="mien-wrap" style="margin-bottom: 1.3rem;">
      <div class="title">
        <img class="before" src="https://api.jobyes.com/images/before.png" />
        乘车路线
      </div>
      <div class="mien-desc">广州市志在信息科技有限公司广州市志</div>
    </div>

    <div class="footer">
      <div class="back" @click="backMine">返回</div>
      <div class="save" @click="toEditCompanyInfo">
        <img class="btn" src="https://api.jobyes.com/images/btn.png" />
        <span>立即修改</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'companyInfo',
  methods: {
    backMine () {
      this.$router.push("/mine")
    },
    // 去修改企业信息
    toEditCompanyInfo () {
      this.$router.push("/company/edit")
    }
  }
}
</script>



<style lang="scss" scoped>
.company {
  display: flex;
  justify-content: left;
  padding: 0 0.3rem;
  box-sizing: border-box;
  overflow: hidden;
  .logo {
    width: 1.28rem;
    border: 0.02rem solid #f2f2f2;
    border-radius: 0.1rem;
    padding: 0.1rem 0.12rem;
    box-sizing: border-box;
    margin-right: 0.2rem;
    height: 0.82rem;
    overflow: hidden;
    margin-top: 0.1rem;
    img {
      width: 100%;
    }
  }
  .info {
    flex: 1;
    margin-top: 0.1rem;
    .name {
      font-size: 0.28rem;
      color: #434343;
      line-height: .44rem;
    }
    .address {
      font-size: 0.24rem;
      color: #7a7a7a;
      line-height: 0.48rem;
      display: flex;
      span {
        display: block;
        margin-right: 0.2rem;
        position: relative;
        line-height: .44rem;
        &:last-of-type {
          margin-right: 0;
          &::after {
            background: transparent;
          }
        }
        &::after {
          position: absolute;
          content: "";
          width: 0.023rem;
          background: #9a9a9a;
          height: 0.24rem;
          top: 0.12rem;
          right: -0.1rem;
        }
      }
    }
  }
}

.mien-wrap {
  padding: 0 0.3rem;
  box-sizing: border-box;
  margin-top: 0.2rem;
  .title {
    position: relative;
    margin-bottom: 0.2rem;
    font-size: .32rem;
    img {
      width: .3rem;
    }
    &::after {
      position: absolute;
      top: .3rem;
      left: 1.9rem;
      content: "";
      display: block;
      width: 5rem;
      height: 0.02rem;
      background: #f3f3f3;
    }
  }
  .mien-desc {
    font-size: .28rem;
    line-height: .48rem;
    color: #757575;
    text-align: justify;
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