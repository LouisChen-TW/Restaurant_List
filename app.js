const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const routes = require('./routes')
const usePassport = require('./config/passport')
require('./config/mongoose')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const PORT = process.env.PORT

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

// express template engine
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    helpers: {
      selected: function (option, value) {
        if (option === value) {
          return 'selected'
        } else {
          return ''
        }
      },
    },
  })
)
app.set('view engine', 'handlebars')

//setting session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
)

// setting static files
app.use(express.static('public'))

// use methodoverride
app.use(methodOverride('_method'))

// using passport
usePassport(app)

// use connect-flash
app.use(flash())

// put setting in res.locals for view using
app.use((req, res, next) => {
  let path
  if (req.path === '/users/login') path = false
  res.locals.path = path
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  res.locals.error = req.flash('error')
  next()
})

// 將 request 導入路由器
app.use(routes)

app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`)
})
