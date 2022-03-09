const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/restaurant-list') // 設定連線到 mongoDB
const db = mongoose.connection // 取得資料庫連線狀態
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db
