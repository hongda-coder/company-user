<template>
  <div>
    <div class="body">
      <div>
        <div class="list-item" @click="goDetails">
          <div class="job-info">
            <div class="job-item">
              <div class="job-name">前端开发</div>
              <div class="job-price">0.8-1万/每月</div>
            </div>
            <div class="job-item">
              <div class="job-req">
                <span>广东省广州市</span>
                <span>|</span>
                <span>1-3年</span>
                <span>|</span>
                <span>本科</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
  methods: {
    goDetails () {
      this.$router.push("/job/details")
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  border-bottom: 0.1rem solid #fff9f6;
  padding: 0 0.3rem;
  .job-info {
    padding: 0.1rem 0;
    box-sizing: border-box;
    width: 100%;
    .job-item {
      display: flex;
      justify-content: space-between;
      width: 6.9rem;
      line-height: 0.6rem;
      font-size: 0.28rem;
      box-sizing: border-box;
      .job-name {
        color: #333;
      }
      .job-price {
        color: #ff3636;
      }
      .job-req {
        font-size: 0.28rem;
        color: #959595;
        .job-req > span {
          margin-right: 0.08rem;
        }
      }
    }
  }
  &:first-of-type {
    border-top: 0.2rem solid #f2f2f2;
  }
}
</style>