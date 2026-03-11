// app.js
App({
  onLaunch() {
    console.log('执行标准小程序启动')
  },
  globalData: {
    // 食用油标准知识库
    standardsDB: {
      'GB/T 1534': {
        name: '花生油国家标准',
        type: 'GB/T',
        typeName: '推荐性国家标准',
        category: '花生油',
        levels: ['一级', '二级', '三级', '四级'],
        qualityClass: 'medium',
        description: '适用于压榨和浸出工艺的花生油',
        suggestion: '建议选择一级压榨花生油，营养保留更好'
      },
      'GB/T 19111': {
        name: '葵花籽油国家标准',
        type: 'GB/T',
        typeName: '推荐性国家标准',
        category: '葵花籽油',
        levels: ['一级', '二级'],
        qualityClass: 'good',
        description: '适用于压榨和浸出工艺的葵花籽油',
        suggestion: '一级葵花籽油品质较好，适合日常食用'
      },
      'GB/T 1535': {
        name: '大豆油国家标准',
        type: 'GB/T',
        typeName: '推荐性国家标准',
        category: '大豆油',
        levels: ['一级', '二级', '三级', '四级'],
        qualityClass: 'basic',
        description: '最常见的食用油标准，多为浸出工艺',
        suggestion: '大豆油性价比高，但建议优先选择压榨工艺的其他油种'
      },
      'GB/T 1536': {
        name: '菜籽油国家标准',
        type: 'GB/T',
        typeName: '推荐性国家标准',
        category: '菜籽油',
        levels: ['一级', '二级', '三级', '四级'],
        qualityClass: 'medium',
        description: '适用于压榨和浸出工艺的菜籽油',
        suggestion: '建议选择低芥酸菜籽油，一级压榨更佳'
      },
      'GB/T 8233': {
        name: '芝麻油（香油）国家标准',
        type: 'GB/T',
        typeName: '推荐性国家标准',
        category: '芝麻油',
        levels: ['一级', '二级'],
        qualityClass: 'excellent',
        description: '传统压榨工艺，香味浓郁',
        suggestion: '芝麻油品质较高，适合凉拌调味'
      },
      'GB/T 5009': {
        name: '食用植物油卫生标准',
        type: 'GB/T',
        typeName: '推荐性国家标准',
        category: '通用标准',
        levels: [],
        qualityClass: 'basic',
        description: '规定食用油的卫生指标',
        suggestion: '这是基础安全标准，建议查看具体油种标准'
      }
    }
  }
})
