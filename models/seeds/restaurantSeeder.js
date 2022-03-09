const db = require('../../config/mongoose')
const Restaurant = require('../restaurant.js')
const restaurant = require('../../restaurant.json').results

db.once('open', () => {
  Restaurant.create(restaurant)

  console.log('done.')
})
