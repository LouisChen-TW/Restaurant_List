// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const restaurantList = require('../../models/restaurant')

// render search page
router.get('/', (req, res) => {
  const keyword = req.query.keyword.replace(/ /g, '').toLowerCase()
  return restaurantList
    .find()
    .lean()
    .then((restaurants) => {
      const filterRestaurants = restaurants.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(keyword) ||
          restaurant.category.toLowerCase().includes(keyword)
      )
      if (!filterRestaurants.length) {
        res.render('notFound', { keyword: req.query.keyword })
      } else {
        res.render('index', {
          restaurants: filterRestaurants,
          keyword: req.query.keyword
        })
      }
    })
    .catch((error) => {
      console.log(error)
    })
})

module.exports = router
