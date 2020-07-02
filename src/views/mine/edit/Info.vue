<template>
  <div>
    <van-cell-group class="person-info">
      <div class="upload we-img">
        <div class="title">头像</div>
        <div class="myupload" style="padding-right: 0;">
           <van-uploader  /> <!-- 上传图片 -->
          <van-icon name="arrow" />
          <div class="avatar"><img src="" alt=""></div>
        </div>
      </div>
      <van-field
        v-model="updateForm.loginuser"
        label="昵称"
        placeholder="请输入昵称"
        input-align="right"
      />
      <van-field v-model="updateForm.jobename" label="职位" input-align="right" placeholder="请输入职位" />
      <van-field v-model="updateForm.xtel" label="联系电话" input-align="right" placeholder="请输入联系电话" />
      <van-field v-model="updateForm.email" label="电子邮箱" input-align="right" placeholder="请输入电子邮箱" />
    </van-cell-group>
    <div class="hint">
      <div>以上是您的个人名片</div>
      <div>信息越完善，您在求职者心目中的专业形象越高哦！</div>
    </div>
    <van-dialog id="van-dialog" />
    <div class="footer">
      <div class="back" @click="backPre">返回</div>
      <div class="save">
        <img class="btn" src="https://api.jobyes.com/images/btn.png" /> 立即保存
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://cloud-image', isImage: true },
      ],
      updateForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      loginuser: '', // 昵称
      jobename: '', // 职位名称
      xtel: '', // 联系电话
      email: '', // 电子邮箱
    },
    avatarFrom : {   // 上传图
      openIdKey: '',
      sessionKey: '',
      token: '',
      imagename: '', //图片64位编码
      imagepath: '',   // 图片后缀名
    },
    showCode: '', // 头像
    imagename1: ''// 公众号二维码
    }
  },
  methods: {
    backPre () {
      this.$router.push("/mine")
    }
  }
}
</script>


<style lang="scss" scoped>
.upload {
  display: flex;
  justify-content: space-between;
  width: 6.9rem;
  margin: auto;
  line-height: 0.88rem;
  overflow: hidden;
  border-bottom: .02rem solid #f2f2f2;
  .title {
    width: 3rem;
    font-size: 0.28rem;
    color: #323233;
  }
  .myupload {
    position: relative;
    overflow: hidden;
    width: 2rem;
    height: 0.88rem;
    .img-show {
      width: 0.6rem;
      text-align: right;
      margin-top: 0.15rem;
      margin-left: 1.15rem;
      .img-show {
        width: 100%;
      }
    }
    .van-uploader {
      position: absolute;
      top: 0;
      left: .3rem;
      width: 100vw;
      opacity: 0;
      z-index: 10;
    }
    .van-icon  {
      font-size: .3rem;
      position: absolute;
      right: 0;
      top: .32rem;
    }
    .avatar {
      width: .8rem;
      position: absolute;
      top: 0;
      right: .3rem;
    }
  }
}

.hint {
  margin-top: 0.2rem;
  line-height: 0.5rem;
  font-size: 0.3rem;
  color: #ffb595;
  padding-left: 0.4rem;
  box-sizing: border-box;
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
      margin-right: .1rem;
    }
  }
}
</style>