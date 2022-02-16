const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const restaurantList = require("./restaurant.json");
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

// express template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting static files
app.use(express.static("public"));

// render index page
app.get("/", (req, res) => {
  res.render("index", { restaurants: restaurantList.results });
});

// render show page
app.get("/restaurants/:restaurants_id", (req, res) => {
  console.log(req.params.restaurants_id);
  const restaurant = restaurantList.results.find(
    (restaurant) => restaurant.id.toString() === req.params.restaurants_id
  );
  console.log(restaurant);
  res.render("show", { restaurant: restaurant });
});

// render search page
app.get("/search", (req, res) => {
  console.log(req.query.keyword);
  const restaurants = restaurantList.results.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(req.query.keyword.toLowerCase()) ||
      restaurant.category.includes(req.query.keyword)
  );
  res.render("index", { restaurants: restaurants, keyword: req.query.keyword });
});

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`);
});
