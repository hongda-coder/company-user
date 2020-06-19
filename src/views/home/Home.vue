<template>
  <div>
    <div>
      <div class="banner">
        <img src="https://api.jobyes.com/images/home-banner.png" />
      </div>
    </div>
    <van-grid :border="false" column-num="3">
      <van-grid-item icon="https://api.jobyes.com/images/nav-issu.png" text="发布计划" @click="toPlay"/>
      <van-grid-item icon="https://api.jobyes.com/images/nav-create.png" text="创建职位" />
      <van-grid-item icon="https://api.jobyes.com/images/nav-result.png" text="人才库" />
    </van-grid>
    <div class="tabs">
      <van-tabs
        style="width: 3rem"
        swipeable
        :active="active"
        sticky
        bind:change="changeFirst"
        color="#FF8853"
        :border="false"
      >
        <van-tab title="面试计划">
          <Plan />
        </van-tab>
        <van-tab title="面试执行">
          <Execute />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import Plan from "./children/Plan";
import Execute from "./children/Execute";
export default {
  name: "Home",
  components: {
    Plan,
    Execute
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    toPlay () {
      this.$router.push("/plan")
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