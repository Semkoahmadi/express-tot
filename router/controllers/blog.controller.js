class BlogController {
    getBlogs(req, res, next) {
        res.send("blogs");
    }

    createNewBlog(req, res, next) {
        res.send("Create new blog")
    }

    deleteBlog(req, res, next) {
        res.send(`delete blog by id #${req.params.id}`)
    }
    updateBlog(req, res, next) {
        res.send(`update blog by id #${req.params.id}`)
    }
}
module.exports = BlogController