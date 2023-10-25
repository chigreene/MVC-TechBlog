

const router = require('express').Router();
const {Posts, Comments} = require('../models/index')

router.get('/', async (req, res) => {
    try {
        const postData = await Posts.findAll({
            // include link to other table that has comments associated with each post
            include: [
                {
                    model: Comments,
                    attributes: ['author', 'comment']
                }
            ]
        })
        const post = postData.map(post => post.get({ plain: true }))
        
        res.render('homepage', {
            post,
            loggedIn: req.session.loggedIn
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
    }
    
    res.render('login', {
        loggedIn: req.session.loggedIn
    })
})

module.exports = router;