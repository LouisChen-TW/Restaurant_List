// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const getSortQuery = require('../../public/javascripts/getSortQuery')
const restaurantList = require('../../models/restaurant')
// render index page
router.get('/', (req, res) => {
  const sortCondition = getSortQuery(Number(req.query.sort))
  restaurantList
    .find()
    .lean()
    .sort(sortCondition) // eg. {_id: 'desc'}
    .then((restaurants) =>
      res.render('index', { restaurants, sort: req.query.sort })
    )
    .catch((error) => console.error(error))
})

module.exports = router
