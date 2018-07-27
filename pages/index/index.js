//index.js
//获取应用实例
const app = getApp()

let formIdArray = []
Page({
  data: {
  },
submit: function (e) {
  formIdArray.push(e.detail.formId)
  if( formIdArray.length == 3 ) {
    console.log(formIdArray)
  }
}
})
