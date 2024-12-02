const express = require("express");
const app = express();
const morgan = require("morgan");
const omitEmpty = require("omit-empty");
const camelCaseKey = (...args) => import("camelcase-keys").then(({ default: camelCaseKeys }) => camelCaseKeys(...args));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('short'))

function getTime(req, res, next) {
    req.time = Date.now();
    next();
}
app.use(getTime)
function checkAuth(req, res, next) {
    const { username, password } = req.query;
    if (username == "erfan" && password == "12345") {
        return next()
    }
    res.send("khajaltm eshtba omde")
}
async function camelCase(req, res, next) {

    req.body = await camelCaseKey(req.body, { deep: true });
    req.query = await camelCaseKey(req.query);
    req.params = await camelCaseKey(req.params);
    next();
}
app.use(camelCase)

function removeEmptyFields(options = {}) {
    return function(req,res,next){
        req.body = omitEmpty(req.body,options);
        next();
    }
}
app.use(removeEmptyFields)

app.get("/", (req, res, next) => {
    console.log("Response Route success");
    res.send("Mission Complete")
})
app.get("/blogs", async (req, res) => {
    res.send({
        body: req.body,
        query: req.query,
        params: req.params
    })
})
app.post("/create",removeEmptyFields(), (req,res,next) => {
    res.send(req.body)
})

app.get("/users", checkAuth, (req, res) => {
    console.log(req.time);
    res.send("User")
})

app.listen(3000, () => {
    console.log("server run on port 3000");
})