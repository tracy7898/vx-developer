// result.js
const app = getApp()

Page({
  data: {
    standard: '',
    standardInfo: null,
    notFound: false
  },

  onLoad(options) {
    const standard = options.standard || ''
    this.setData({ standard })
    this.loadStandardInfo(standard)
  },

  loadStandardInfo(standard) {
    const db = app.globalData.standardsDB
    const info = db[standard]

    if (info) {
      const qualityMap = {
        'excellent': { text: '优质', desc: '该标准在行业内属于高品质标准，产品质量有保障' },
        'good': { text: '良好', desc: '该标准符合国家要求，品质良好，适合日常食用' },
        'medium': { text: '中等', desc: '该标准为常见标准，满足基本质量要求' },
        'basic': { text: '基础', desc: '该标准为基础标准，建议关注具体等级和工艺' }
      }
      
      const qualityInfo = qualityMap[info.qualityClass] || qualityMap['basic']
      
      this.setData({
        standardInfo: {
          ...info,
          standardNo: standard,
          quality: qualityInfo.text,
          qualityDesc: qualityInfo.desc
        },
        notFound: false
      })
    } else {
      this.setData({
        notFound: true
      })
    }
  },

  // 返回首页
  backToHome() {
    wx.navigateBack()
  },

  // 再次识别
  scanAgain() {
    wx.navigateBack()
  }
})
