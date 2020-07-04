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
import { addressList } from "@/utils/utils";
export default {
  name: "Address",
  data() {
    return {
      addressLists: addressList(),
      areaList: [],
    };
  },
  mounted () {
    this.dispose()
    console.log(this.addressLists)
  },

  methods: {
    dispose () {
      this.addressLists.map( item => {
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
      console.log(this.addressLists)
      this.areaList = this.addressLists
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