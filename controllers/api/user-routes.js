const router = require('express').Router();
const { User } = require('../../models')

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        console.log(dbUserData)
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// router.post('/login', async (req, res) => {
//     try {
//         const dbUserData = 
//     }
// })



module.exports = router;