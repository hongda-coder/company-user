<template>
  <div>
    <div class="module">
      <van-cell-group :border="false">
        <van-field label="职位名称" required icon="arrow" style="padding-right:.6rem;box-szing: boder-box;" placeholder="请输入职位名称" input-align="right" right-icon-class="my-optatice" />
        <van-cell required is-link v-show="false">
          <div class="salary">职能分类</div>
          <div slot="title">
            <div class="van-cell-text">职能分类</div>
          </div>
        </van-cell>
        <van-cell required is-link  @click="selectPlace">
          <div class="salary">{{jobType}}</div>
          <div slot="title">
            <div class="van-cell-text">职能分类</div>
          </div>
        </van-cell>
        <van-cell required is-link @click="addressShow = true">
          <div class="salary" :data-provinceId="provinceId" :data-cityId="cityId" :data-areaId="areaId">
            <span v-show="province== '' ? true: false">城市区域</span>
            {{province}}{{city}}{{area}}
            </div>
          <div slot="title">
            <div class="van-cell-text">城市区域</div>
          </div>
        </van-cell>
        <van-field
          label="详细地址"
          required
          input-align="right"
          style="padding-right: .8rem; box-szing: border-box;"
        ></van-field>
        <van-field
          label=" 所属部门"
          required
          input-align="right"
          style="padding-right: .8rem; box-szing: border-box;"
        ></van-field>
        <van-cell required is-link @click="showWorkData=true">
          <div class="salary">{{natureName}}</div>
          <div slot="title">
            <div class="van-cell-text">工作性质</div>
          </div>
        </van-cell>
        <van-cell required is-link>
          <div class="salary">职位月薪</div>
          <div slot="title">
            <div class="van-cell-text">职位月薪</div>
          </div>
        </van-cell>
        <van-cell required is-link @click="showYear = true">
          <div class="salary">{{workNum}}</div>
          <div slot="title">
            <div class="van-cell-text">工作年限</div>
          </div>
        </van-cell>
        <van-cell required is-link @click="showRecord = true">
          <div class="salary">{{recordName}}</div>
          <div slot="title">
            <div class="van-cell-text">学历要求</div>
          </div>
        </van-cell>
        <van-cell-group :border="false" >
          <van-cell title="职位描述" :border="false" required />
          <van-field  type="textarea" autosize rows="6" class="textarea" minHeight="150" />
        </van-cell-group>

        <van-cell-group :border="false" style="margin-bottom: 1.2rem;">
          <van-cell title="职位简述" :border="false" required />
          <van-field type="textarea" autosize rows="6" class="textarea" minHeight="150" />
        </van-cell-group>
      </van-cell-group>
    </div>

    <!-- 底部按钮 -->
    <div class="footer">
      <div class="back" @click="back">返回</div>
      <div class="save">
        <img class="btn" src="https://api.jobyes.com/images/editor.png" />{{this.$route.query.title}}
      </div>
    </div>
    <!-- 地址选择 -->
    <van-popup v-model="addressShow"  position="bottom" :style="{ height: '35%' }">
      <Address  @confirmCity="confirmCity"  />
    </van-popup>
    <!-- 工作性质 -->
    <CommonSelect v-show="showWorkData"
              :showWorkData="showWorkData"
              :workData="workData" 
              :workTitle="workTitle"
              @select="select"
              @cancelpopuver="showWorkData=false" />

    <!-- 工作年限 -->
    <CommonSelect v-show="showYear"
          :workYear="workYear" 
          :showYear="showYear"
          :workYearTitle="workYearTitle"
          @select="select"
          @cancelpopuver="showYear=false" />

    <!-- 学历要求 -->
      <CommonSelect v-show="showRecord" 
        :showRecord="showRecord"
        :recordData="recordData" 
        :recordTitle="recordTitle"
        @select="select"
        @cancelpopuver="showRecord=false" />
  </div>
</template>

<script>
import Address from  '../../../components/common/Address'
import CommonSelect from '@/components/common/CommonSelect'
import { workLists, workYear, educationData } from '@/utils/utils'

export default {
  name: 'Create',
  data () {
    return {
      addressShow: false,
      province: '', // 省份
      city: '',  // 城市
      area: '',  // 区域
      provinceId: '', // 省份
      cityId: '', // 城市
      areaId: '', // 区域
      jobType: '', // 职能
      jobe: '', // 职能id
      workData: workLists(),     // 工作性质
      showWorkData: false,   //工作性质
      natureName: '',    //工作性质
      naturework: '',   //工作性质
      workTitle: '工作性质',// 工作性质
      showYear: false, // 工作年限
      workYear: workYear(), // 工作年限
      working: '',    //工作年限
      workNum: '',   //工作年限
      workYearTitle: '工作年限',// 工作性质
      showRecord: false, // 学历要求
      recordData: educationData(), // 学历要求
      record: '',    //学历要求
      recordName: '',   //学历要求
      recordTitle: '学历要求'
    }
  },
  components: {
    Address,
    CommonSelect
  },
  mounted() {
    if(this.$route.query.id !== undefined) {
      this.jobe = this.$route.query.id
      this.jobType = this.$route.query.name
    }
  },
  methods: {
    back () {
      // this.$router.push("/home")
      this.$router.go(-1)
    },
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
    // 确定职能分类选择
    selectPlace () {
      this.$router.push("/place/category")
    },
    //  选择学历要求
    selectRecord (recordData) {
      this.record = recordData.record
      this.recordName = recordData.name
    },
    
    select (data) {
      // console.log(isShow)
      if (this.showWorkData && !this.showYear && !this.showRecord) {
        this.naturework = data.value
        this.natureName = data.name
        this.showWorkData = false
      }
      if (this.showYear && !this.showWorkData && !this.showRecord) {
        this.working = data.value
        this.workNum = data.name
        this.showYear = false
      }
      if (this.showRecord && !this.showWorkData && !this.showYear) {
        this.record = data.value
        this.recordName = data.name
        this.showRecord = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.address {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  z-index: 999;
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

.salary {
  font-size: 0.28rem;
  color: #333;
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
      margin-right: 0.1rem;
    }
  }
}
</style>
