// 引用 Express 與 Express 路由器
const express = require("express");
const router = express.Router();

const restaurantList = require("../../models/restaurant");

router.get("/atoz", (req, res) => {
  restaurantList
    .find()
    .lean()
    .sort({ name: "asc" })
    .then((restaurants) => res.render("index", { restaurants }))
    .catch((error) => console.error(error));
});

router.get("/ztoa", (req, res) => {
  restaurantList
    .find()
    .lean()
    .sort({ name: "desc" })
    .then((restaurants) => res.render("index", { restaurants }))
    .catch((error) => console.error(error));
});

router.get("/ratingasc", (req, res) => {
  restaurantList
    .find()
    .lean()
    .sort({ rating: "asc" })
    .then((restaurants) => res.render("index", { restaurants }))
    .catch((error) => console.error(error));
});

router.get("/ratingdesc", (req, res) => {
  restaurantList
    .find()
    .lean()
    .sort({ rating: "desc" })
    .then((restaurants) => res.render("index", { restaurants }))
    .catch((error) => console.error(error));
});

router.get("/category", (req, res) => {
  restaurantList
    .find()
    .lean()
    .sort({ name: "asc" })
    .then((restaurants) => res.render("index", { restaurants }))
    .catch((error) => console.error(error));
});

router.get("/area", (req, res) => {
  restaurantList
    .find()
    .lean()
    .sort({ location: "asc" })
    .then((restaurants) => res.render("index", { restaurants }))
    .catch((error) => console.error(error));
});

module.exports = router;
