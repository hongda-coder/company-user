<template>
  <div>
    <van-picker show-toolbar
      title="请选择地区"
      :columns="areaList"
      @confirm="confirmCity"
      ref="addressId"
    />
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
  name: "Address",
  data() {
    return {
      addressList: addressList,
      areaList: [],
    };
  },
  mounted () {
    this.dispose()
  },

  methods: {
    dispose () {
      this.addressList.map( item => {
        item.text = item.name
        if (!item.lists) {
          return false
        }
        if(item.lists) {
          item.children = item.lists
          item.children.map( item => {
            item.text = item.name
            if(item.lists) {
              item.children = item.lists
              item.children.map( item => {
                item.text = item.name
              })
            }
          })
        }
      })
      this.areaList = addressList
    },

    // 确定选
    confirmCity (value, picker) {
      let newArr = new Array()
      let province = this.areaList[picker[0]].id
      let city = this.areaList[picker[0]].lists[picker[1]].id
      newArr.push(province)
      newArr.push(city)
      if (this.areaList[picker[0]].lists[picker[1]].lists) {
        let area = this.areaList[picker[0]].lists[picker[1]].lists[picker[2]].id
        newArr.push(area)
      }



      this.$emit("confirmCity", value, newArr)
      
    },

    getColumnValues (columnIndex) {
      console.log(columnIndex)
    }
  }
};
</script>