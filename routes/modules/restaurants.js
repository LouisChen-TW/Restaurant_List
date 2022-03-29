// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const restaurantList = require('../../models/restaurant')

// render edit page
router.get('/:id/edit', (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  restaurantList
    .findOne({ _id, userId })
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch((error) => console.log(error))
})

// save edit page
router.put('/:id', (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  const newRestaurant = req.body
  return restaurantList
    .findOneAndUpdate({ _id, userId }, newRestaurant)
    .then(res.redirect('/'))
    .catch((error) => console.log(error))
})

// delete restaurant
router.delete('/:id', (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  restaurantList
    .findOne({ _id, userId })
    .then((restaurant) => restaurant.remove())
    .then(res.redirect('/'))
    .catch((error) => console.log(error))
})

// render create page
router.get('/create', (req, res) => {
  res.render('create')
})

// render show page
router.get('/:id', (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  return restaurantList
    .findOne({ _id, userId })
    .lean()
    .then((restaurant) => {
      res.render('show', { restaurant })
    })
    .catch((error) => console.log(error))
})

// submit create page
router.post('/new', (req, res) => {
  const restaurant = req.body
  // 將userID 放到restaurant物件，以便寫入資料
  restaurant.userId = req.user._id
  return restaurantList
    .create(restaurant)
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

module.exports = router
