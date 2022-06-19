var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const {} = require('../schemas');
var router = express.Router();
const userService = require('../services/user');
const forgotService = require('../services/forgot')

router.get('/:id', async function(req, res, next) {
    const { id } = req.params;
    const result = await userService.findById(id);
    res.json(result);
})

// all users
router.get('/all', async(req, res) => {
    const result = await userService.findAll()
    res.json(result);
})

router.post('/update-password', auth.ensureSignedIn, auth.currentUser, async(req, res, next) => {
    // to do
    res.json({});
})

router.post('/update', auth.ensureSignedIn, async(req, res, next) => {
    // to do
})

router.post('/delete', auth.ensureSignedIn, async(req, res, next) => {
    // to do
    res.json({});
})

router.post("/reset-password", async(req, res, next) => {
    const { email } = req.body;
    const result = await forgotService.reset(email)
    res.json(result)
})

router.post("/change-password", async(req, res, next) => {
    const result = await forgotService.changePassword(req.body)
    res.json(result)
})

module.exports = router