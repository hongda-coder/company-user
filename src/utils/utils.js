 // 企业性质
export function natureList() {
  return [ 
    { name: '外企(欧美)',  value: '1' },
    { name: '外企(非欧美)',  value: '2' },
    { name: '合资',  value: '3' },
    { name: '国企',  value: '4' },
    { name: '民营企业',  value: '5' },
    { name: '外企代表处',  value: '6' },
    { name: '政府机关',  value: '7' },
    { name: '事业单位',  value: '8' },
    { name: '非营利组织',  value: '9' },
    { name: '上市公司',  value: '10' },
  ]
}
//  企业规模
export function companySize () {
  return  [
    { name: '少于50人',  value: '11' },
    { name: '50-150人',  value: '12' },
    { name: '150-500人',  value: '13' },
    { name: '500-1000人',  value: '14' },
    { name: '1000-5000人',  value: '15' },
    { name: '5000-10000人',  value: '16' },
    { name: '10000人以上',  value: '17' }
  ]
}
// 工作性质
export function workLists () {
  return [
    {  
      id: '0',
      name: '不限'     
    },
    {
      id: '10031',
      name: '全职'
    },
    {
      id: '10032',
      name: '兼职'
    },
    {
      id: '10033',
      name: '实习'
    }
  ]
}
// 工作年限
export function workYear() {
  return [
    {  
      value: '0',
      name: '不限'
    },
    {
      value: '31',
      name: '1-3年'
    },
    {
      value: '32',
      name: '3-5年'
    },
    {
      value: '33',
      name: '5-10年'
    },
    {
      value: '34',
      name: '10年以上'
    }
  ]
}
// 学历
export function educationData() {
  return [ // 学历要求
    {  
      value: '0',
      name: '不限'
    },
    {
      value: '36',
      name: '高中/中技/中专'
    },
    {
      value: '37',
      name: '大专及以上'
    },
    {
      value: '38',
      name: '本科及以上'
    },
    {
      value: '39',
      name: '硕士及以上'
    },
    {
      value: '40',
      name: '博士及以上'
    }
  ]
} 
export function addressList() {
  return [
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
      ]
}