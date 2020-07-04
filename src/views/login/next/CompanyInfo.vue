<template>
  <div>
    <div>
      <van-cell-group :border="false">
        <van-field
          v-model="cname"
          input-align="right"
          style="padding-right: .6rem;box-sizing: border-box;"
          required
          label="企业名称"
          placeholder="请输入企业名称"
        />
        <van-cell required is-link @click="addressShow=true">
          <div class="profe">{{province}}{{city}}{{area}}</div>
          <div slot="title">
            <div class="van-cell-text">城市区域</div>
          </div>
        </van-cell>
        <van-cell required is-link @click="showProfe = true">
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
        <van-cell required>
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
      <div class="save" @click="save">保存</div>
    </div>
    <!-- 城市选择 -->
    <van-popup v-model="addressShow" position="bottom" :style="{ height: '35%' }">
      <Address @confirmCity="confirmCity" />
    </van-popup>
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
import Address from "@/components/common/Address";
import Category from "@/components/common/Category";
import CommonSelect from "@/components/common/CommonSelect";

import { natureList, companySize } from "@/utils/utils"
export default {
  name: "CompanyInfo",
  data() {
    return {
      cname: '', // 企业名称
      addressShow: false, // 地址
      province: "", // 省份
      city: "", // 城市
      area: "", // 区域
      provinceId: "", // 省份
      cityId: "", // 城市
      areaId: "", // 区域
      showProfe: false, // 行业
      profe: "", // 行业
      hy: "", // 行业
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
    Address,
    Category,
    CommonSelect
  },
  methods: {
    // 返回
    back() {
      this.$router.go(-1)
    },
    // 确定城市选择
    confirmCity(value, newArr) {
      this.province = value[0];
      this.city = value[1];
      this.area = value[2];
      this.provinceId = newArr[0];
      this.cityId = newArr[1];
      this.areaId = newArr[2];
      this.addressShow = false;
    },
    // 确定选择行业
    confirmSelect(id, name) {
      this.hy = id;
      this.profe = name;
      this.showProfe = false;
    },
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
    // 发请求保存
    save () {
      this.$router.push("/company/apti")
    }
  }
};
</script>

<style lang="scss" scoped>
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