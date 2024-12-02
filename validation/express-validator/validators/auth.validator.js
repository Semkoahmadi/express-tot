const { body } = require("express-validator");
const loginValidator = () => [
    body("email").isEmail().withMessage("in valid email"),
    body("password").isLength({ min: 6, max: 20 }).withMessage(" problem password")
]
const registerValidator = () => [
    body("fullName").isLength({ min: 10, max: 30 }).withMessage("in valid FullName"),
    body("age").custom(value => {
        if(isNaN(value)) {throw new Error("add please kon")
        }else if (+value > 90 || +value < 12) {
            throw new Error("your age in valid")
        }
        return true;
    }),
    body("mobile").isMobilePhone(['fa-IR', 'en-US']).withMessage("in valid email"),
    body("email").isEmail().withMessage("in valid email"),
    body("password").isLength({ min: 6, max: 20 }).withMessage(" problem password"),
    body("confirmPassword").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("password not match")
        }
        return true
    })


]
module.exports = {
    loginValidator,
    registerValidator
}