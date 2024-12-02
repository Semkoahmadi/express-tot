const getUsers = (req, res, next) => {
    res.send("users");
}
const createNewUser = (req, res, next) => {
    res.send("Create new user")
}
const deleteUser = (req, res, next) => {
    res.send(`delete user by id #${req.params.id}`)
}
const updateUser = (req, res, next) => {
    res.send(`update user by id #${req.params.id}`)
}

module.exports = {
    getUsers,
    deleteUser,
    updateUser,
    createNewUser   
}