

const router = require('express').Router();
const {Posts, Comments} = require('../models/index')

router.get('/', async (req, res) => {
    try {
        const postData = await Posts.findAll();
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

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Posts.findByPk(req.params.id, {
            include: [
                {
                    model: Comments,
                    attributes: ['userName', 'comment', 'createdAt']
                }
            ]
        });
        
        const post = postData.get({ plain: true });

        res.render('singlePost', {
            post,
            loggedIn: req.session.loggedIn,
        })

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    } 
})



router.get('/comments')

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
    }
    
    res.render('login', {
        loggedIn: req.session.loggedIn
    })
})


module.exports = router;