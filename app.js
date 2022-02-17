const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const restaurantList = require("./models/restaurant");
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/restaurant-list"); // 設定連線到 mongoDB
const db = mongoose.connection; // 取得資料庫連線狀態
// 連線異常
db.on("error", () => {
  console.log("mongodb error!");
});
// 連線成功
db.once("open", () => {
  console.log("mongodb connected!");
});

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }));

// express template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting static files
app.use(express.static("public"));

// render index page
app.get("/", (req, res) => {
  restaurantList
    .find()
    .lean()
    .then((restaurants) => res.render("index", { restaurants }))
    .catch((error) => console.error(error));
});

// render create page
app.get("/restaurants/create", (req, res) => {
  res.render("create");
});

// submit create page
app.post("/restaurants/new", (req, res) => {
  const restaurant = req.body;
  console.log(req.body);
  return restaurantList
    .create({
      name: restaurant.name,
      name_en: restaurant.name_en,
      category: restaurant.category,
      image: restaurant.image,
      location: restaurant.location,
      phone: restaurant.phone,
      google_map: restaurant.google_map,
      rating: restaurant.rating,
      description: restaurant.description,
    })
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});

// render show page
app.get("/restaurants/:restaurants_id", (req, res) => {
  const id = req.params.restaurants_id;
  return restaurantList
    .findById(id)
    .lean()
    .then((restaurant) => {
      res.render("show", { restaurant });
    })
    .catch((error) => console.log("error"));
});

// render search page
app.get("/search", (req, res) => {
  const keyword = req.query.keyword.trim().toLowerCase();
  return restaurantList
    .find()
    .lean()
    .then((restaurants) => {
      const filterRestaurants = restaurants.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(keyword) ||
          restaurant.category.toLowerCase().includes(keyword)
      );
      res.render("index", {
        restaurants: filterRestaurants,
        keyword: req.query.keyword,
      });
    })
    .catch((error) => {
      console.log("error");
    });
});

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`);
});
