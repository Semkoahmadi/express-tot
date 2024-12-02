// const {default:mongoose} = require("mongoose");
// const DB_URL = "mongodb://localhost:27017/mongoose-tutorial";
// // mongoose.set("strictQuery")
// mongoose.connect(DB_URL,(err) =>{
//     console.log(err ? err.message : "Server Connect to Mongo");
    
// });

const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/mongoose-tutorial";

async function connectToDatabase() {
    try {
        await mongoose.connect(DB_URL);
        console.log("Server connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
    }
}

connectToDatabase();