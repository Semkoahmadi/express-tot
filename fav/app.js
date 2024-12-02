const express = require("express");
const serveFavIcon = require("serve-favicon");
const path = require("path");
const app = express();
app.use(serveFavIcon(path.join(__dirname,"triumph-rocket-3-3840x2160-19917.jpg")))
app.get("/",(req,res,next) => {
    res.send("hello fav icon")
})
app.listen(3000, () => {
    console.log("server running on port 3000");
    
})