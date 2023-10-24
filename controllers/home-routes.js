

const router = require('express').Router();
const Posts = require('../models/index')

router.get('/', async (req, res) => {
    try {
        const postData = await Posts.findAll()
        const post = postData.map(post => post.get({ plain: true }))
        console.log(post)
        res.render('homepage', {post})
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;