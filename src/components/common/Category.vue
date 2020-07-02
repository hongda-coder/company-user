<template>
  <div class="category">
    <div class="flex">
      <div class="left">
        <div class="item" 
            :class="currentIndex === index ? 'active' : ''"
            v-for="(item, index) in addressList" 
            :key='item.id'
            @click="select(item.lists, index)">
          {{item.name}}
          </div>
      </div>
      <div class="right">
        <div class="item" 
          v-for="item in rightData" 
          :key='item.id'
          @click="confirmSelect(item.id, item.name)">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const addressList = [
  {
    name: "广东省",
    id: "1",
    lists: [
      {
        name: "广州市1",
        id: "2",
      },
      {
        name: "深圳市1",
        id: "7",
      },
      {
        name: "东莞市1",
        id: "12",
      }
    ]
  },
  {
    name: "广西省",
    id: "17",
    lists: [
      {
        name: "广州市2",
        id: "18",
      },
      {
        name: "深圳市2",
        id: "23",
      },
      {
        name: "东莞市2",
        id: "28",
      }
    ]
  }
];
export default {
  name: "Category",
  data () {
    return {
      currentIndex: 0,
      addressList: addressList,
      rightData: ''
    }
  },
  mounted () {
    this.rightData = this.addressList[0].lists
  },
  methods: {
    select(data, index) {
      this.rightData = data
      this.currentIndex = index
    },
    confirmSelect (id, name) {
      this.$emit("confirmSelect", id, name)
    }
  }
};
</script>

<style lang="scss" scoped>
.category {
  height: 100%;
  .flex {
    display: flex;
    min-height: 100%;
    .left {
      flex: 1;
      background: #f0f0f0;
      min-height: 100%;
      .item {
        padding-left: 0.3rem;
        box-sizing: border-box;
        font-size: 0.28rem;
        line-height: 0.8rem;
        color: #333;
        &.active {
          color: #fdac1c;
        }
      }
    }
    .right {
      flex: 1;
      .item {
        padding-left: 0.3rem;
        box-sizing: border-box;
        font-size: 0.28rem;
        line-height: 0.8rem;
        color: #333;
      }
    }
  }
}
</style>