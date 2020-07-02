<template>
  <div>
    <div>
      <van-cell-group :border="false">
        <van-field input-align="right" required label="公司地址" bind:input="inputAddress" />
        <van-cell required is-link>
          <div class="profe">所属行业</div>
          <div slot="title">
            <div class="van-cell-text">所属行业</div>
          </div>
        </van-cell>
        <van-cell required is-link>
          <div class="profe">企业性质</div>
          <div slot="title">
            <div class="van-cell-text">企业性质</div>
          </div>
        </van-cell>
        <van-cell required is-link>
          <div class="profe">企业规模</div>
          <div slot="title">
            <div class="van-cell-text">企业规模</div>
          </div>
        </van-cell>
        <van-field input-align="right" required label="乘车路线" />
        <van-cell-group>
          <van-cell title="公司介绍" required :border="false" />
          <van-field type="textarea" autosize rows="6" class="textarea" minHeight="150" />
        </van-cell-group>
        <van-cell required :border="false">
          <div slot="title">
            <div class="van-cell-text">企业logo</div>
          </div>
        </van-cell>
        <div class="upload">
          <div class="help-img">
            <img src="https://api.jobyes.com/images/upload.png" />
          </div>
          <van-uploader class="upload-img" :after-read="afterRead"  />
        </div>
      </van-cell-group>
    </div>


    <!-- footer按钮 -->
    <div class="footer">
      <div class="back" @click="back">返回</div>
      <div class="save">保存</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EditCompany',
  data () {
    return {

    }
  },
  methods: {
    back () {
      this.$router.push("/company/info")
    }
  }
}
</script>

<style lang="scss" scoped>
.profe {
  color: #333;
}
.textarea {
  border: 0.02rem solid #cfcfcf;
  width: 6.9rem;
  margin: auto;
  padding: 0.1rem 0.3rem;
  border-radius: 0.1rem;
  line-height: 0.48rem;
  min-height: 3rem;
}

.upload {
  position: relative;
  border: none;
  .help-img {
    width: 3rem;
    margin: .3rem auto 1.5rem auto;
    img {
      width: 100%;
    }
  }
  .upload-img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    /deep/ .van-uploader__upload {
      width: 3.2rem;
      height: 4rem;
    }
  }
}


/* 底部导航 */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 100vw;
  border-top: .02rem solid #f6f6f6;
  display: flex;
  justify-content: left;
  padding: .15rem .3rem;
  box-sizing: border-box;
  z-index: 999;
  .back {
    width: 2.5rem;
    background: #fff;
    border: .02rem solid #dedede;
    line-height: .68rem;
    text-align: center;
    font-size: .3rem;
    color: #959595;
    border-radius: .1rem;
    margin-right: .2rem;
    box-sizing: border-box;
  }
  .save {
    flex: 1;
    background: linear-gradient(to right, #ffc36f, #ff8853);
    line-height: .68rem;
    text-align: center;
    border-radius: .1rem;
    color: #fff;
    font-size: .3rem;
  }
}
</style>