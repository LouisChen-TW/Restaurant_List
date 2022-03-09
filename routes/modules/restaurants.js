// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const restaurantList = require('../../models/restaurant')

// render edit page
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  restaurantList
    .findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch((error) => console.log(error))
})

// save edit page
router.put('/:id', (req, res) => {
  const id = req.params.id
  const newRestaurant = req.body
  return restaurantList
    .findOneAndUpdate({ _id: id }, newRestaurant)
    .then(res.redirect('/'))
    .catch((error) => console.log(error))
})

// delete restaurant
router.delete('/:id', (req, res) => {
  const id = req.params.id
  restaurantList
    .findById(id)
    .then((restaurant) => restaurant.remove())
    .then(res.redirect('/'))
    .catch((error) => console.log(error))
})

// render create page
router.get('/create', (req, res) => {
  res.render('create')
})

// submit create page
router.post('/new', (req, res) => {
  const restaurant = req.body
  return restaurantList
    .create(restaurant)
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

// render show page
router.get('/:id', (req, res) => {
  const id = req.params.id
  return restaurantList
    .findById(id)
    .lean()
    .then((restaurant) => {
      res.render('show', { restaurant })
    })
    .catch((error) => console.log('error'))
})

module.exports = router
