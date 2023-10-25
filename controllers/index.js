const router = require('express').Router();

const homeRoutes = require('./home-routes.js')
const apiRoutes = require('./api')
// const dashBoardRoutes = require('./dashboard-routes.js')
// const logInRoutes = require('./logIn-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/dashboard', dashBoardRoutes);

module.exports = router;