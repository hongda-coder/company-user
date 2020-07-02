<template>
  <div>
    <van-cell-group>
      <van-cell v-for="item of funList" :key="item.id" :title="item.name" is-link @click="showNext(item.lists)" border />
    </van-cell-group>
    <div>
      <van-popup v-model="isShow" :style="{ height: '80%' }" position="bottom">
        <div class="flex">
          <div class="select" style="background: #f0f0f0;">
            <div
              class="item"
              :class="currentIndex == index ? 'active' : '' "
              v-for="(item, index) in secondData"
              :key="item.id"
              @click="selectSecond(item.lists, index)"
            >{{item.name}}</div>
          </div>
          <div class="select">
            <div
              class="item"
              v-for="item in third"
              :key="item.id"
              @click="sendCreate(item.name,item.id)"
            >{{item.name}}</div>
          </div>
        </div>
      </van-popup>
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
        name: "广州市",
        id: "2",
        lists: [
          {
            name: "海珠",
            id: "3"
          },
          {
            name: "天河",
            id: "4"
          },
          {
            name: "越秀",
            id: "5"
          },
          {
            name: "荔湾",
            id: "6"
          }
        ]
      },
      {
        name: "深圳市",
        id: "7",
        lists: [
          {
            name: "海珠1",
            id: "8"
          },
          {
            name: "天河1",
            id: "9"
          },
          {
            name: "越秀1",
            id: "10"
          },
          {
            name: "荔湾1",
            id: "11"
          }
        ]
      },
      {
        name: "东莞市",
        id: "12",
        lists: [
          {
            name: "海珠2",
            id: "13"
          },
          {
            name: "天河2",
            id: "14"
          },
          {
            name: "越秀2",
            id: "15"
          },
          {
            name: "荔湾2",
            id: "16"
          }
        ]
      }
    ]
  },
  {
    name: "广西省",
    id: "17",
    lists: [
      {
        name: "广州市12",
        id: "18",
        lists: [
          {
            name: "海珠12",
            id: "19"
          },
          {
            name: "天河12",
            id: "20"
          },
          {
            name: "越秀12",
            id: "21"
          },
          {
            name: "荔湾12",
            id: "22"
          }
        ]
      },
      {
        name: "深圳市",
        id: "23",
        lists: [
          {
            name: "海珠31",
            id: "24"
          },
          {
            name: "天河31",
            id: "25"
          },
          {
            name: "越秀31",
            id: "26"
          },
          {
            name: "荔湾31",
            id: "27"
          }
        ]
      },
      {
        name: "东莞市",
        id: "28",
        lists: [
          {
            name: "海珠112",
            id: "29"
          },
          {
            name: "天河2111",
            id: "30"
          },
          {
            name: "越秀2111",
            id: "31"
          },
          {
            name: "荔湾2111",
            id: "32"
          }
        ]
      }
    ]
  }
];
export default {
  name: "Place",
  data() {
    return {
      funList: addressList,
      isShow: false,
      secondData: "",
      third: "",
      currentIndex: ""
    };
  },
  updated() {},
  methods: {
    showNext(lists) {
      if (lists !== "") {
        this.isShow = true;
        console.log(lists);
        this.secondData = lists;
        this.third = lists[0].lists;
      }
    },
    selectSecond(secondData, index) {
      this.currentIndex = index;
      this.third = secondData;
    },
    sendCreate(name, id) {
      this.$router.push({ path: "/create", query: { id: id, name: name } });
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  min-height: 100%;
  .select {
    flex: 1;
    font-size: 0.28rem;
    padding-left: 0.3rem;
    box-sizing: border-box;
    min-height: 100%;
    .item {
      line-height: 0.6rem;
      color: #333;
      &.active {
        color: #fdac1c;
      }
    }
  }
}
</style>