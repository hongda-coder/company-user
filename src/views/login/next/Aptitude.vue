<template>
  <div>
    <div class="info-title">资质认证</div>
    <div>
      <van-cell-group>
        <van-field
        v-model="shcode"
          input-align="right"
          required
          clearable
          label="社会信用代码"
          placeholder="请输入信用代码"
        />
        <van-cell required>
          <div class="salary">示例</div>
          <div slot="title">
            <div class="van-cell-text">营业执照</div>
          </div>
        </van-cell>
      </van-cell-group>
    </div>
    <!-- footer按钮 -->
    <div class="footer">
      <div class="back" @click="back">返回</div>
      <div class="save" @click="save">确认提交</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shcode: ''
    }
  },
  methods: {
     // 返回
    back () {
      this.$router.go(-1)
    },
    save () {
      this.$router.push("/mine")
    }
  }
}
</script>

<style lang="scss" scoped>
.info-title {
  line-height: .8rem;
  padding-left: .3rem;
  font-size: .46rem;
  color: #333;
  border-top: .2rem solid #f2f2f2;
}

.salary {
  padding-right: .3rem;
  font-size: .28rem;
  color: #FF8853;
}

/* 底部导航 */
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
  z-index: 9;
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
    line-height: 0.68rem;
    text-align: center;
    border-radius: 0.1rem;
    color: #fff;
    font-size: 0.3rem;
  }
}
</style>