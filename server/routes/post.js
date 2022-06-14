var express = require('express');
const auth = require('../middlewares/auth');
const {} = require('../schemas');
var router = express.Router();

const postService = require('../services/post');

router.get('/id/:id', auth.ensureSignedIn, async function(req, res, next) {
    const { id } = req.params;
    const result = await postService.findById(id);
    res.json(result);
})

router.post('/create', auth.ensureSignedIn, async(req, res, next) => {
    const { userId, status, location, image, comment } = req.body;
    const result = await postService.create({ userId, status, location, image, comment })
    res.json(result);
})


// all post
router.get('/all', async(req, res) => {
    const result = await postService.findAll()
    res.json(result);
})

router.post('/update', auth.ensureSignedIn, async(req, res, next) => {
    const { _id, userId, status, location, image, comment } = req.body;
    const result = await postService.update({ _id, userId, status, location, image, comment });
    res.json(result);
})

router.delete('/delete', auth.ensureSignedIn, async(req, res, next) => {
    const { _id } = req.body;
    const result = await postService.remove(_id);
    res.json(result);
})

module.exports = router