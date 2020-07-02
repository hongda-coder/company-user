<template>
  <div>
    <div class="code" >
      <div class="help-img">
        <img src="https://api.jobyes.com/images/upload-img.png" />
      </div>
      <div class="img-show">
        <img  />
      </div>
      <div class="upload-img"></div>
      <div class="title">上传招聘公众号二维码</div>
    </div>

    <div class="footer">
      <div @click="back">返回</div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Code',
  methods: {
    back () {
      this.$router.push("/mine")
    }
  }
}
</script>

<style lang="scss" scoped>
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
    line-height: .8rem;
    margin: .1rem auto;
    border: .02rem solid #c9c9c9;
    text-align: center;
    border-radius: .1rem;
    color: #959595;
    font-size: .28rem;
    letter-spacing: .06rem;
  }
}

.code{
  position: relative;
  .help-img {
    width: 3rem;
    position: absolute;
    top: 3rem;
    left: 50%;
    transform: translate(-50%,-50%);
    img {
      width: 100%;
    }
  }
  .img-show {
    position: absolute;
    top: .1rem;
    left: 1rem;
    width: 5.5rem;
    img {
      width: 100%;
      height: auto;
    }
  }
  .title {
    position: absolute;
    width: 100vw;
    top: 4.1rem;
    line-height: .8rem;
    color: #FD9351;
    text-align: center;
    font-size: .28rem;
    z-index: -1;
  }
}
</style>