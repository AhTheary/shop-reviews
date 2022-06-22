const express = require("express");
const router = express.Router();

const auth = require('../middlewares/auth');

router.use('/auth', require('./auth'));
router.use('/user', require('./user'));
router.use('/category', require('./category'));
router.use('/store', require('./store'));
router.use('/post', require('./post'));
router.use('/review', require('./review'));
router.use('/comment', require('./comment'));
router.use('/upload', require('./external'));
<<<<<<< HEAD
router.use('/favorite', require('./favorite'))
=======
>>>>>>> 6e979259137f5302fdf88b59ff903598e4df9096

module.exports = router;