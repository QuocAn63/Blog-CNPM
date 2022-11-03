const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// newsController.index

router.get('/:username', userController.get);

module.exports = router;