const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config()
app.get("/", (req,res,next) => {
    console.log(process.env.APY_KEY);
    res.
    send("SERVER RUNNING....")
})
app.listen(process.env.PORT, () => {
    console.log("SERVER RUN ON PORT" + process.env.PORT);

})