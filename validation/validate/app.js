const express = require("express");
const { ErrorHandler, NotFoundError } = require("./util/errorHandler")
const { registerSchema } = require("./validators/auth.validator");
const app = express();
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
       const [error] = registerSchema.validate(req.body);
       if(error) throw error       
        res.send(req.body)
    } catch (error) {
        next(error)
    }
})
app.use(NotFoundError);
app.use(ErrorHandler);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})