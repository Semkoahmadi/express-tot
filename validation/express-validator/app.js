const express = require("express");
const app = express();
const { ErrorHandler, NotFoundError } = require("./util/errorHandler")
const { checkValidation } = require("./middlewares/validator")
const { validationResult } = require("express-validator");
const {IdValidator} = require("./blog.validator");
const { loginValidator,registerValidator } = require("./validators/auth.validator");
app.use(express.json())
app.use(express.urlencoded({ extends: true }))
app.post("/login", loginValidator(), checkValidation,(req, res) => {
    res.send(req.body)
})
app.post("/register",registerValidator(),checkValidation,(req, res) => {
    res.send(req.body)
})
app.get("/blogs/:id",IdValidator,checkValidation,(req, res) => {
    res.send(req.params)
})
app.use(NotFoundError);
app.use(ErrorHandler);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})