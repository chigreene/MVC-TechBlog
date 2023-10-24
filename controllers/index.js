const router = require('express').Router();

const homeRoutes = require('./home-routes.js')
const dashBoardRoutes = require('./dashboard-routes.js')

router.use('/', homeRoutes);
// router.use('/dashboard', dashBoardRoutes);

module.exports = router;