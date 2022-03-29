const db = require('../../config/mongoose')
const Restaurant = require('../restaurant.js')
const User = require('../user.js')
const restaurant = require('../../restaurant.json').results
const bcrypt = require('bcryptjs')

const SEED_USER = [
  {
    name: 'USER1',
    email: 'user1@example.com',
    password: '12345678',
    ownRestaurantID: [0, 1, 2],
  },
  {
    name: 'USER2',
    email: 'user2@example.com',
    password: '12345678',
    ownRestaurantID: [3, 4, 5],
  },
]

db.once('open', () => {
  Promise.all(
    Array.from(SEED_USER, (seedUser) => {
      return bcrypt
        .genSalt(10)
        .then((salt) => bcrypt.hash(seedUser.password, salt))
        .then((hash) =>
          User.create({
            name: seedUser.name,
            email: seedUser.email,
            password: hash,
          })
        )
        .then((user) => {
          const userId = user._id
          const seedRestaurant = []
          seedUser.ownRestaurantID.forEach((x) => {
            restaurant[x].userId = userId
            seedRestaurant.push(restaurant[x])
          })
          return Restaurant.create(seedRestaurant)
        })
    })
  )
    .then(() => {
      console.log('done.')
      db.close()
    })
    .catch((err) => console.log(err))
    .finally(() => process.exit())
})
