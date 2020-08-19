<template>
  <div>
    <div class="login-banner">
      <div>即招平台</div>
      <div>专注企业人才快招管理</div>
    </div>
    <div class="title" >注册/登录</div>
    <div class="login">
      <div class="phone">
        <input v-model="loginuser" placeholder="请输入企业注册时手机号码" />
      </div>
      <div class="code-wrap">
        <div class="code">
          <input v-model="code" placeholder="请输入手机验证码" />
        </div>
        <div class="get-code">
          <button type="button" :disabled="isDisabled" :class="{isActive: isDisabled}"
                  @click="getCode()">{{computeTime > 0 ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
        </div>
      </div>
    </div>
    <div class="save" @click="login">注册/登录</div>
  </div>
</template>

<script>

import { shortCode } from '@/api/serve'
export default {
  name: "Login",
  data () {
    return {
      loginuser: '17355365415',   // 手机号码
      code: '', // 手机验证码
      type: '3',
      computeTime: 0,
      isDisabled: false,  // 获取验证码是否可以点击
    }
  },
  methods: {
     getCode () {
      shortCode({loginuser: this.loginuser, type: this.type }).then(res => {
        if (res.data.Message == 'success') {
          this.computeTime = 60
          this.isDisabled = true
          this.intervalId = setInterval(() => {
            this.computeTime--
            if(this.computeTime<=0) {
              // 停止计时
              clearInterval(this.intervalId)
              this.isDisabled = false
            }
          }, 1000)
        }
      });

    },
    login() {
      this.$store.dispatch('handLogin',{loginuser:this.loginuser,code: this.code }).then(res => {
        console.log(res);
        if(res.data.Message == '-3') {
          this.isCode = true
        } else if (res.data.Message == '-4') {
          this.isPwd = true
        } else if(res.data.Message == 'ok') {
          this.$router.push('/editor')
        } else if(res.data.Message == 'success') {
          this.$router.push("/home")
        }
      }).catch(error=>{
        console.log(error)
      })
    }
  }
}
</script>




<style lang="scss" scoped>
.login-banner {
  width: 100vw;
  height: 2.9rem;
  background: url("./images/login-banner.png");
  background-size: contain;
  overflow: hidden;
  padding-top: 0.5rem;
  padding-left: 0.3rem;
  box-sizing: border-box;
  div {
    line-height: 0.6rem;
    color: #fffdfc;
    font-size: .32rem;
  }
}

.title {
  padding-left: 0.3rem;
  box-sizing: border-box;
  margin-top: 0.7rem;
  line-height: 0.8rem;
  font-size: 0.46rem;
}

.login {
  padding: 0 0.3rem;
  box-sizing: border-box;
  width: 100%;
  .phone {
    margin-bottom: 0.3rem;
    margin-top: 0.2rem;
    width: 100%;
    input {
      display: block;
      height: 0.8rem;
      width: 100%;
      border: 0.02rem solid #d7d7d7;
      padding: 0 0.3rem;
      line-height: 0.8rem;
      box-sizing: border-box;
      border-radius: 0.1rem;
      font-size: .28rem;
    }
  }
  .code-wrap {
    display: flex;
    justify-content: left;
    .code {
      width: 4.6rem;
      margin-right: 0.2rem;
      input {
        display: block;
        height: 0.8rem;
        width: 100%;
        border: 0.02rem solid #d7d7d7;
        padding: 0 0.3rem;
        line-height: 0.8rem;
        box-sizing: border-box;
        border-radius: 0.1rem;
        font-size: .28rem;
      }
    }
    .get-code {
      flex: 1;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      color: #fff;
      background: #ff8853;
      border-radius: 0.1rem;
      button {
        display: block;
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        color: #fff;
        background: #ff8853;
        border-radius: 0.1rem;
        border: none;
        font-size: 0.3rem;
        padding: 0;
      }
      .isActive {
        background: #dadada;
        color: #9a9a9a;
      }
    }
  }
}

.save {
  width: 6.9rem;
  margin: 1.5rem auto;
  background: linear-gradient(to right, #ffc36f, #ff8853);
  line-height: 1rem;
  text-align: center;
  border-radius: 0.1rem;
  color: #fff;
  font-size: 0.3rem;
  letter-spacing: 0.03rem;
}
</style>
