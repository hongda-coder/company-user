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
export function workeData () {
  return [
    {  
      working: '0',
      name: '不限'
    },
    {
      working: '31',
      name: '1-3年'
    },
    {
      working: '32',
      name: '3-5年'
    },
    {
      working: '33',
      name: '5-10年'
    },
    {
      working: '34',
      name: '10年以上'
    }
  ]
}

// 学历
export function educationData() {
  return [ // 学历要求
    {  
      record: '0',
      name: '不限'
    },
    {
      record: '36',
      name: '高中/中技/中专'
    },
    {
      record: '37',
      name: '大专及以上'
    },
    {
      record: '38',
      name: '本科及以上'
    },
    {
      record: '39',
      name: '硕士及以上'
    },
    {
      record: '40',
      name: '博士及以上'
    }
  ]
}
