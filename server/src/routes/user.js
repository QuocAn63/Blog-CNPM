const express = require('express');
const router = express.Router();
const authorization = require('../middlewares/verifyToken')
const userController = require('../controllers/UserController');

// newsController.index

router.get('/:username', userController.get);
router.put('/update/:username', authorization, userController.update)

module.exports = router;