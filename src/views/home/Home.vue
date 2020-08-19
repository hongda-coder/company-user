<template>
  <div>
    <div>
      <div class="banner">
        <img src="https://api.jobyes.com/images/home-banner.png" />
      </div>
    </div>
    <van-grid :border="false" column-num="3">
      <van-grid-item icon="https://api.jobyes.com/images/nav-issu.png" text="发布计划" @click="toPlay"/>
      <van-grid-item icon="https://api.jobyes.com/images/nav-create.png" text="创建职位" @click="toCreate" />
      <van-grid-item icon="https://api.jobyes.com/images/nav-result.png" text="人才库" @click="toTalents" />
    </van-grid>
    <div class="tabs">
      <van-tabs
        style="width: 3rem"
        swipeable
        sticky
        @click="changeFirst"
        color="#FF8853"
        :border="false"
      >
        <van-tab title="面试计划">
          <Plan :dataLists="dataLists" />
        </van-tab>
        <van-tab title="面试执行">
          <Execute :dataLists="dataLists" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import Plan from "./children/Plan";
import Execute from "./children/Execute";
import { inviteList } from '@/api/serve';
import { getToken, getTel } from '@/utils'
export default {
  name: "Home",
  components: {
    Plan,
    Execute
  },
  data() {
    return {
      Form: {
        token: '',
        tel: '',
        state: 1,
        curr: 10,
        limit: 1
      },
      dataLists: {} // 面试执行
    };
  },
  mounted () {
    this.Form.token = getToken('login-token')
    this.Form.tel = getTel('login-phone')
    this.getData()
  },
  computed: {

  },
  methods: {
    // 去发布计划
    toPlay () {
      this.$router.push("/plan")
    },
    // 创建职位
    toCreate () {
      this.$router.push({path: "/create", query: {title: '创建职位'}})
    },
    // 去人才库
    toTalents () {
      this.$router.push("/talents")
    },
    getData () {
      inviteList(this.Form).then( res => {
        this.dataLists = res.data.data
      })
    },
    changeFirst (index) {
      this.Form.state = index + 1
      this.getData()
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  img {
    width: 100%;
  }
}

.tabs {
  border-top: 0.15rem solid #f2f2f2;
}
</style>