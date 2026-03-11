// index.js
const app = getApp()

Page({
  data: {
    imagePath: '',
    scanning: false,
    manualInput: ''
  },

  // 拍照
  takePhoto() {
    const that = this
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['camera'],
      success(res) {
        that.setData({
          imagePath: res.tempFiles[0].tempFilePath,
          scanning: true
        })
        that.simulateRecognition()
      }
    })
  },

  // 从相册选择
  chooseImage() {
    const that = this
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album'],
      success(res) {
        that.setData({
          imagePath: res.tempFiles[0].tempFilePath,
          scanning: true
        })
        that.simulateRecognition()
      }
    })
  },

  // 模拟识别过程
  simulateRecognition() {
    const that = this
    // 模拟2秒识别时间
    setTimeout(() => {
      that.setData({
        scanning: false
      })
      // 随机选择一个标准进行演示
      const standards = ['GB/T 1534', 'GB/T 19111', 'GB/T 1535', 'GB/T 1536', 'GB/T 8233']
      const randomStandard = standards[Math.floor(Math.random() * standards.length)]
      that.navigateToResult(randomStandard)
    }, 2000)
  },

  // 输入变化
  onInputChange(e) {
    this.setData({
      manualInput: e.detail.value
    })
  },

  // 查询标准
  searchStandard() {
    const standard = this.data.manualInput.trim().toUpperCase()
    if (!standard) {
      wx.showToast({
        title: '请输入标准号',
        icon: 'none'
      })
      return
    }
    this.navigateToResult(standard)
  },

  // 跳转到结果页
  navigateToResult(standard) {
    wx.navigateTo({
      url: `/pages/result/result?standard=${standard}`
    })
  }
})
