const express = require("express");
const { ErrorHandler,NotFoundError } = require("./util/errorHandler")
const fileUpload = require("express-fileupload");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static("public"))
app.use(fileUpload())
app.post("/upload",(req,res) => {
    // const image = req.files.image
    res.send(req.files)
})
app.use(ErrorHandler)
app.use(NotFoundError)
app.listen(3000, () => {
    console.log("Server run on port 3000");
    
})