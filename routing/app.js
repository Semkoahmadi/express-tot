const express = require("express");
const app = express();
const users = [
        {id:1,name:"user1"},
        {id:2,name:"user2"},
        {id:3,name:"user3"},
]
const products = [
    {id:1,name:"product1"},
    {id:2,name:"product2"},
    {id:3,name:"product3"},
]
app.get("/", (req,res) => {
    console.log("welcome to express");
    res.statusCode = 200
    res.status(200).send({message: "hello sun of bach"})
})

app.listen(3000,() =>{
    console.log("server run on port 3000");
})