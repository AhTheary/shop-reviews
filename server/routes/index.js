const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth"));
router.use("/user", require("./user"));
router.use("/category", require("./category"));
router.use("/store", require("./store"));
router.use("/post", require("./post"));
router.use("/review", require("./review"));

module.exports = router;