const { Router } = require("express");
const { getUsers, deleteUser, updateUser, createNewUser } = require("../controllers/user.controller")
const router = Router();
router.get("/", getUsers);
router.post("/", createNewUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
module.exports = router