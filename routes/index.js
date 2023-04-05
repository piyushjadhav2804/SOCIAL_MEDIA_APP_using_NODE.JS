const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/users', require('./users'));
<<<<<<< HEAD
router.use('/admin', require('./admin'));

console.log('Express Router loaded');
=======

console.log('router loaded');
>>>>>>> manual-local-auth

module.exports = router;