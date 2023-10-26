// 

const router = require('express').Router();
const { Posts, Comments } = require('../models/index')
const withAuth = require('../utils/auth')

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

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const postData = await Posts.findAll({
            include: [
                {
                    model: Comments,
                    attributes: ['userName', 'comment', 'createdAt']
                }
            ]
        });
        const post = postData.map(post => post.get({ plain: true }))
        
        res.render('fulldashboard', {
            post,
            loggedIn: req.session.loggedIn
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

router.get('/dashboard/update/:id', withAuth, async (req, res) => {
    try {
        console.log(req.params.id)
        const postData = await Posts.findByPk(req.params.id);
        console.log(postData)
        // the console log return null
        const post = postData.get({ plain: true });
        
        res.render('updatedashboard', { post })
        
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
       return res.redirect('/')
    }
    
    res.render('login', {
        loggedIn: req.session.loggedIn
    })
})




module.exports = router;