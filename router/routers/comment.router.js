const { Router } = require("express");
const router = Router();
router.get("/", (req, res, next) => {
    console.log(req.time);

    res.send("comments");
});

router.post("/", (req, res, next) => {
    console.log(req.time);

    res.send("Create new comment")
});

router.delete("/:id", (req, res, next) => {
    console.log(req.time);

    res.send(`delete comment by id #${req.params.id}`)
});

router.patch("/:id", (req, res, next) => {
    console.log(req.time);

    res.send(`update comment by id #${req.params.id}`)
});

module.exports = router