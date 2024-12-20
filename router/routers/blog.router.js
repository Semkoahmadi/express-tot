const { Router } = require("express");
const BlogController = require("../controllers/blog.controller");
const router = Router();
const blogController = new BlogController()
router.get("/", blogController.getBlogs);
router.post("/", blogController.createNewBlog);
router.delete("/:id", blogController.deleteBlog);
router.patch("/:id", blogController.updateBlog);
module.exports = router