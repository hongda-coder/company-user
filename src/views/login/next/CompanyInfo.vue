<template>
  <div>
    <div>
      <van-cell-group>
        <van-field input-align="right" style="padding-right: .6rem;box-sizing: border-box;" required label="企业名称" />
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
        <van-cell required is-link>
          <div class="profe">sad</div>
          <div slot="title">
            <div class="van-cell-text">企业性质</div>
          </div>
        </van-cell>
        <van-cell required is-link>
          <div class="profe">asdasd</div>
          <div slot="title">
            <div class="van-cell-text">企业规模</div>
          </div>
        </van-cell>
        <van-cell required>
          <div slot="title">
            <div class="van-cell-text">企业logo</div>
          </div>
        </van-cell>
      </van-cell-group>
    </div>

    <van-popup v-model="addressShow"  position="bottom" :style="{ height: '35%' }">
      <Address  @confirmCity="confirmCity"  />
    </van-popup>

    <van-popup v-model="showProfe"  position="bottom" :style="{ height: '80%' }">
      <Category @confirmSelect="confirmSelect"  />
    </van-popup>
  </div>
</template>

<script>
import Address from  '@/components/common/Address'
import Category from  '@/components/common/Category'

export default {
  name: 'CompanyInfo',
  data() {
    return {
      addressShow: false, // 地址
      province: '', // 省份
      city: '',  // 城市
      area: '',  // 区域
      provinceId: '', // 省份
      cityId: '', // 城市
      areaId: '', // 区域
      showProfe: false, // 行业
      profe: '', // 行业
      hy: '', // 行业
    }
  },
  components: {
    Address,
    Category
  },
  methods: {
    // 确定城市选择
    confirmCity (value, newArr) {
      this.province = value[0]
      this.city = value[1]
      this.area = value[2]
      this.provinceId = newArr[0]
      this.cityId = newArr[1]
      this.areaId = newArr[2]
      this.addressShow = false
    },
    // 确定选择行业
    confirmSelect(id, name) {
      this.hy = id
      this.profe = name
      this.showProfe = false
    }
  }
}
</script>