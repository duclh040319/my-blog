const express = require('express');
const  postController  = require('../controllers/post.controller');
const router = express.Router()

router.delete("/:id", postController.delete);
router.put("/:id", postController.update);
router.post("/add", postController.add);
router.get("/:id/edit", postController.edit);
router.get("/create", postController.create);
router.get("/", postController.post);


module.exports = router