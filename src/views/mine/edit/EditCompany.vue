<template>
  <div>
    <div>
      <van-cell-group :border="false">
        <van-field
          input-align="right"
          label="公司地址"
          required
          style="padding-right: .6rem;box-sizing: border-box;"
          v-model="address"
          placeholder="请输入公司地址"
        />
        <van-cell required is-link @click="showProfe=true">
          <div class="profe">{{profe}}</div>
          <div slot="title">
            <div class="van-cell-text">所属行业</div>
          </div>
        </van-cell>
        <van-cell required is-link @click="routeShow = true">
          <div class="profe">{{propertyNane}}</div>
          <div slot="title">
            <div class="van-cell-text">企业性质</div>
          </div>
        </van-cell>
        <van-cell required is-link @click="sizeShow = true">
          <div class="profe">{{scaleName}}</div>
          <div slot="title">
            <div class="van-cell-text">企业规模</div>
          </div>
        </van-cell>
        <van-field
          input-align="right"
          label="乘车路线"
          required
          v-model="cbus"
          style="padding-right: .6rem;box-sizing: border-box;"
          placeholder="请输入公司地址"
        />
        <van-cell-group>
          <van-cell title="公司介绍" required :border="false" />
          <van-field
            type="textarea"
            autosize
            v-model="remarks"
            rows="6"
            class="textarea"
            minHeight="150"
          />
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
          <van-uploader class="upload-img" :after-read="afterRead" />
        </div>
      </van-cell-group>
    </div>
    <!-- footer按钮 -->
    <div class="footer">
      <div class="back" @click="back">返回</div>
      <div class="save">保存</div>
    </div>
    <!-- 行业选择 -->
    <van-popup v-model="showProfe" position="bottom" :style="{ height: '80%' }">
      <Category @confirmSelect="confirmSelect" />
    </van-popup>
    <!-- 企业性质 -->
    <CommonSelect
      v-show="routeShow"
      :routeShow="routeShow"
      :natureList="natureList"
      :routeTitle="routeTitle"
      @select="select"
      @cancelpopuver="routeShow=false"
    />
    <!-- 企业规模 -->
    <CommonSelect
      v-show="sizeShow"
      :sizeShow="sizeShow"
      :companySize="companySize"
      :sizeTitle="sizeTitle"
      @select="select"
      @cancelpopuver="sizeShow=false"
    />
  </div>
</template>
<script>
import { natureList, companySize } from "@/utils/utils";
import Category from "@/components/common/Category";
import CommonSelect from "@/components/common/CommonSelect";
export default {
  name: "EditCompany",
  data() {
    return {
      address: "", //公司地址
      showProfe: false,
      hy: "", // 行业id
      profe: "", // 行业名称
      cbus: "", // 乘车路线
      remarks: "", // 公司介绍
      routeShow: false, // 企业性质
      natureList: natureList(), // 企业性质
      routeTitle: "企业性质", // 企业性质
      property: "", // 企业性质
      propertyNane: "", // 企业性质
      sizeShow: false, // 企业规模
      companySize: companySize(), // 企业规模
      sizeTitle: "企业规模", // 企业规模
      scale: "", // 企业规模
      scaleName: "" // 企业规模
    };
  },
  components: {
    Category,
    CommonSelect
  },
  methods: {
    back() {
      this.$router.push("/company/info");
    },
    // 确定选择行业
    confirmSelect(id, name) {
      this.hy = id;
      this.profe = name;
      this.showProfe = false;
    },
    // 确定选择企业性质和规模
    select(data) {
      if (this.routeShow && !this.sizeShow) {
        this.property = data.value;
        this.propertyNane = data.name;
        this.routeShow = false;
      }
      if (this.sizeShow && !this.routeShow) {
        this.scale = data.value;
        this.scaleName = data.name;
        this.sizeShow = false;
      }
    },
    //上传图片
    afterRead(flie) {
      console.log(flie);
    }
  }
};
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
    margin: 0.3rem auto 1.5rem auto;
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
  border-top: 0.02rem solid #f6f6f6;
  display: flex;
  justify-content: left;
  padding: 0.15rem 0.3rem;
  box-sizing: border-box;
  z-index: 999;
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