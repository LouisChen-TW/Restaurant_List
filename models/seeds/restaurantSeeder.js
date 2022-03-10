const db = require('../../config/mongoose')
const Restaurant = require('../restaurant.js')
const restaurant = require('../../restaurant.json').results

db.once('open', () => {
  Restaurant.create(restaurant)
    .then(() => {
      console.log('done.')
      db.close()
    })
    .catch((error) => console.log(error))
    .finally(() => process.exit())
})
