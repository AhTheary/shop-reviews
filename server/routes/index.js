const express = require("express");
const router = express.Router();

<<<<<<< HEAD
const auth = require('../middlewares/auth');

router.use('/auth', require('./auth'));
router.use('/user', require('./user'));
router.use('/category', require('./category'));
router.use('/store', require('./store'));
router.use('/post', require('./post'));
router.use('/review', require('./review'));
router.use('/upload', require('./external'));
=======
router.use("/auth", require("./auth"));
router.use("/user", require("./user"));
router.use("/category", require("./category"));
router.use("/store", require("./store"));
router.use("/post", require("./post"));
router.use("/review", require("./review"));
>>>>>>> ac0cc60450b1c4b4df0909e4629a8efe24d9602b

module.exports = router;