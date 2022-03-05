// 引用 Express 與 Express 路由器
const express = require("express");
const router = express.Router();

const home = require("./modules/home");
const search = require("./modules/search");
const restaurants = require("./modules/restaurants");
const sort = require("./modules/sort");

// 準備引入路由模組
router.use("/", home);
router.use("/search", search);
router.use("/restaurants", restaurants);
router.use("/sort", sort);

// 匯出路由器
module.exports = router;
