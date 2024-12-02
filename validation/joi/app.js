const express = require("express");
const app = express();
const { ErrorHandler, NotFoundError } = require("./util/errorHandler")
const { loginValidationSchema, registerValidationSchema } = require("./validators/auth.validator");
app.use(express.json())
app.use(express.urlencoded({ extends: true }))

app.post("/login", async (req, res, next) => {
    try {
        await loginValidationSchema.validateAsync(req.body)
        res.send(req.body);
    } catch (error) {
        next(error)
    }
})

app.post("/register", async (req, res, next) => {
    try {
        await registerValidationSchema.validateAsync(req.body)
        res.send(req.body);
    } catch (error) {
        next(error)
    }
})
app.use(NotFoundError);
app.use(ErrorHandler);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})