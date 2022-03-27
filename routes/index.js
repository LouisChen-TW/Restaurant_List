// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const search = require('./modules/search')
const restaurants = require('./modules/restaurants')
const sort = require('./modules/sort')
const users = require('./modules/users')
const { authenticator } = require('../middleware/auth')

// 準備引入路由模組

router.use('/users', users)
router.use('/search', authenticator, search)
router.use('/restaurants', authenticator, restaurants)
router.use('/sort', authenticator, sort)
router.use('/', authenticator, home)

// 匯出路由器
module.exports = router
