// 引用 Express 與 Express 路由器
const express = require("express");
const router = express.Router();

const restaurantList = require("../../models/restaurant");
// render index page
router.get("/", (req, res) => {
  restaurantList
    .find()
    .lean()
    .then((restaurants) => res.render("index", { restaurants }))
    .catch((error) => console.error(error));
});

module.exports = router;
