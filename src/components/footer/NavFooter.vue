<template>
  <div class="footer">
    <ul class="nav">
      <li class="nav-item" :class="{on: '/home'===$route.path}" @click="pre('/home')">
        <div class="nav-icon" v-show="'/home'!== $route.path">
          <img src="./images/home.png" alt />
        </div>
        <div class="nav-icon" v-show="'/home'=== $route.path">
          <img src="./images/home-active.png" alt />
        </div>
        <h3>人才快招</h3>
      </li>
      <li class="nav-item" :class="{on: '/manage'===$route.path}" @click="pre('/manage')">
        <div class="nav-icon" v-show="'/manage'!== $route.path">
          <img src="./images/manage.png" alt />
        </div>
        <div class="nav-icon" v-show="'/manage'=== $route.path">
          <img src="./images/manage-active.png" alt />
        </div>
        <h3> 职位管理</h3>
      </li>
      <li class="nav-item" :class="{on: '/mine'===$route.path}" @click="pre('/mine')">
        <div class="nav-icon" v-show="'/mine'!== $route.path">
          <img src="./images/mine.png" alt />
        </div>
        <div class="nav-icon" v-show="'/mine'=== $route.path">
          <img src="./images/mine-active.png" alt />
        </div>
        <h3>个人中心</h3>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Footer",
  methods: {
    pre(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-top: 0.01rem solid $border-color;
  .nav {
    display: flex;
    height: 1rem;
    .nav-item {
      flex: 1;
      text-align: center;
      font-size: 0.28rem;
      padding-top: 0.1rem;
      box-sizing: border-box;
      .nav-icon {
        width: 0.4rem;
        margin: auto;
        img {
          width: 100%;
        }
      }
      h3 {
        font-size: 0.28rem;
        line-height: .42rem;
      }
    }
  }
  .on {
    color: $font-color;
  }
}
</style>        
  