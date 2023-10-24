

const router = require('express').Router();
const Posts = require('../models/index')

router.get('/', async (req, res) => {
    try {
        const postData = await Posts.findAll({
            // include link to other table that has comments associated with each post
            include: [
                {
                    model: Comment,
                    attributes: ['author', 'comment']
                }
            ]
        })
        const post = postData.map(post => post.get({ plain: true }))
        console.log(post)
        res.render('homepage', {post})
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;