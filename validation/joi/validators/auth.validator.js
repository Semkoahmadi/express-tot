const Joi = require("joi");

const loginValidationSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6).max(25).regex(/[a-zA-Z0-9]{6,26}/)
    })
const registerValidationSchema = Joi.object({
        email: Joi.string().email().required(),
        username:Joi.string().alphanum().min(6).message("yke deg").max(25).message("ooozyadeh").required(),
        password: Joi.string().required().min(6).max(25).regex(/[a-zA-Z0-9]{6,26}/),
        confirmPassword:Joi.ref('password'),
        age:Joi.number().integer().min(18).message("bach").max(70).message("fosel").required()
    })


module.exports = {
    loginValidationSchema,
    registerValidationSchema
}