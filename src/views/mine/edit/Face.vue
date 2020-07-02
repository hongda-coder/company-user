<template>
  <div>
    <div class="face">
      <div class="img-list">
        <img src="../../../assets/images/banner.png" alt />
      </div>
      <div class="upload-wrap">
        <div class="help">
          <img src="https://api.jobyes.com/images/upload-img.png" />
          <div class="title">上传图片</div>
        </div>
        <div class="upload">
          <van-uploader :after-read="afterRead" multiple />
        </div>
      </div>
    </div>
    <footer class="footer">
      <div @click="back">返回</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Face",
  data() {
    return {};
  },
  methods: {
    afterRead(file) {
      console.log(file);
    },
    back () {
      this.$router.push("/mine")
    }
  }
};
</script>

<style lang="scss" scoped>
.face {
  margin-bottom: 1rem;
  overflow: hidden;
  .img-list {
    position: relative;
    width: 6.9rem;
    height: 3.5rem;
    overflow: hidden;
    margin: 0.3rem auto 0 auto;
    img {
      width: 100%;
    }
  }

  .upload-wrap {
    position: relative;
    .help {
      width: 1.28rem;
      margin: auto;
      img {
        width: 100%;
      }
      .title {
        text-align: center;
        font-size: 0.28rem;
        color: #ff8551;
      }
    }
    .upload {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
    }
  }
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 0 .3rem;
  box-sizing: border-box;
  height: 1rem;
  background: #fff;
  border-top: .02rem solid #f6f6f6;
  overflow: hidden;
  div {
    width: 6.9rem;
    border: .02rem solid #dedede;
    text-align: center;
    margin: .1rem auto;
    font-size: .3rem;
    line-height: .78rem;
    border-radius: .1rem;
    color: #959595;
  }
}
</style>