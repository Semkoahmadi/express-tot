const { param } = require("express-validator");

const IdValidator = param("id").isMongoId().withMessage("invalid ObjectId");

module.exports = {
    IdValidator
}