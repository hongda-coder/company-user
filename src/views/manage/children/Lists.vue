<template>
  <div>
    <div class="body">
      <div>
        <div v-for="item of jobLists" :key='item.jobid' class="list-item" @click="goDetails(item.jobid)">
          <div class="job-info">
            <div class="job-item">
              <div class="job-name">{{item.jobename}}</div>
              <div class="job-price">{{item.jobpays}}</div>
            </div>
            <div class="job-item">
              <div class="job-req">
                <span>{{item.address}}</span>
                <span>|</span>
                <span>{{item.working}}</span>
                <span>|</span>
                <span>{{item.record}}</span>
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
  props: {
    dataLists: Array
  },
  computed: {
    jobLists () {
      return this.dataLists
    }
  },
  methods: {
    goDetails (id) {
      this.$router.push({
        path:"/job/details",
        query: {
          id: id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  border-bottom: 0.1rem solid #fff9f6;
  padding: 0 0.3rem;
  &:last-of-type {
    margin-bottom: 1.2rem;
  }
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