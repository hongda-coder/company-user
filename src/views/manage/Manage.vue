<template>
  <div>
    <van-sticky :offset-top="0">
      <div class="banner">
        <img src="https://api.jobyes.com/images/manage-banner.png" />
      </div>
      <div class="title">
        <div class="create-manage">创建管理</div>
        <div class="btn">
          <div class="issue-text" bindtap="issueImg">发布简章</div>
          <div class="create-job" bindtap="goUpdate">创建职位</div>
        </div>
      </div>
    </van-sticky>
    <van-tabs
      :active="active"
      swipeable
      color="#fff"
      title-active-color="#F9A985"
      offset-top="182"
      @change="toggleTab"
      sticky
    >
      <van-tab data-id="8" title="使用中">
        <Lists :dataLists="dataLists" />
      </van-tab>
      <van-tab title="待审核">
        <Lists :dataLists="dataLists" />
      </van-tab>
      <van-tab title="审核不通过">
        <Lists :dataLists="dataLists" />
      </van-tab>
    </van-tabs>
    <!-- 简章 -->
    <van-overlay :show="showImg" z-index="999" />
    <div class="wrap" v-show="showImg">
      <div class="sea-img">
        <img src />
      </div>
      <div class="next">下一张</div>
    </div>
    <!-- 长按保存 -->
    <van-action-sheet
      show="showSave"
      cancel-text="取消"
      bind:close="onClose"
      bind:select="comfirmSave"
    />
    <div class="close" v-show="!showImg" bindtap="closeImg"></div>
  </div>
</template>

<script>
import Lists from './children/Lists'
import { jobList } from '@/api/serve'
import { getToken, getTel } from '@/utils'
export default {
  name: "Manage",
  data() {
    return {
      showImg: false,
      actions: "",
      active: 0,
      form: {
        token: '',
        tel: '',
        type: 3,
        curr: 10, // 当前页数据
        limit: 1 // 当前页
      },
      dataLists:[], // 数据
    };
	},
	components: {
		Lists
  },
  mounted () {
    this.form.token = getToken('login-token')
    this.form.tel = getTel('login-phone')
    this.getJobLists()
  },
  methods: {
    getJobLists () {
      jobList(this.form).then( res => {
        this.dataLists = res.data.data.lists
      })
    },
    // 切换
    toggleTab(name) {
      this.form.type = name + 1
      this.getJobLists()
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100vw;
  height: 2.8rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 2.8rem;
    display: block;
  }
}

.title {
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  line-height: 0.8rem;
  background: #fff;
  .create-manage {
    position: relative;
    font-size: 0.3rem;
    color: #333;
    &::after {
      display: block;
      margin-left: 0.3rem;
      content: "";
      width: 0.6rem;
      height: 0.04rem;
      background: #ff8853;
    }
  }
  .btn {
    width: 3.4rem;
    margin-top: 0.2rem;
    display: flex;
    .issue-text {
      width: 1.5rem;
      text-align: center;
      border-radius: 0.3rem;
      border: 0.02rem solid #ff8853;
      background: #fff;
      color: #ff8853;
      font-size: 0.28rem;
      line-height: 0.42rem;
			height: .42rem;
      padding: 0;
      border-top-left-radius: 0;
      margin-right: 0.2rem;
    }
  }
  .create-job {
    text-align: center;
    width: 1.5rem;
    border-radius: 0.3rem;
    border: 0.02rem solid #ff8853;
    background: #ff8853;
    color: #fff;
    font-size: 0.28rem;
    line-height: 0.42rem;
		height: .42rem;
    padding: 0;
    border-top-left-radius: 0;
  }
}

/* 发布简章 */
.wrap {
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
  width: 6.9rem;
  z-index: 100;
  overflow: scroll;
  margin-bottom: 50rpx;
  z-index: 99999;
  .sea-img {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .next {
    line-height: 0.6rem;
    background: rgba(000, 000, 000, 0.6);
    position: fixed;
    top: 40%;
    right: 0.3rem;
    width: 1.5rem;
    text-align: center;
    border-radius: 0.3rem;
    z-index: 999999;
    color: #fff;
  }
}

.close {
  position: fixed;
  top: 0.4rem;
  right: 0.4rem;
  width: 0.48rem;
  height: 0.48rem;
  z-index: 999;
  border-radius: 50%;
  img {
    width: 100%;
  }
}
</style>