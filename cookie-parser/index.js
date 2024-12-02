const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser("03c7a0076816009a797f82ac0fa7d9ab58451900"))
app.get("/set-cookie", (req, res) => {
    const d = new Date();
    res.cookie('python', 'django', {
        maxAge: 50000,
        expires: new Date(d.getTime() + 60000),
        httpOnly: true,
        signed: true,
        secure: true,
        sameSite: 'lax'
    });
    res.cookie('erfan', 'soran', {
        maxAge: 60000
    });
    res.send("successful management cookies")
})
app.get("/get-cookie", (req, res) => {
    const cookies = req.cookies;
    const signcookie = req.signedCookies;
    res.send({ cookies, signcookie })

})
app.get("/clear-cookie/:name", (req, res) => {
    res.clearCookie(req.params.name)
    res.send("remove successful by name ")
})
app.listen(3000, () => {
    console.log("local host 3000000000000000000");
})