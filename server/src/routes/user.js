const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// newsController.index

router.get('/:slug', userController.index);

module.exports = router;