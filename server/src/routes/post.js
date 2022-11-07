const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");
const authorization = require("../middlewares/verifyToken");

router.post("/publish", authorization, PostController.save);

module.exports = router;
