const Schema = require("validate");
const registerSchema = new Schema({
    username:{
        type:String,
        required:true,
        length: {min: 6, max: 20}
    },
    email:{
        type:String,
        required:true,
        match: /[a-z0-9\_\.]{5,25}@[a-z]{2,10}.[a-z]{2,10}/gi
    },
    role:{
        type:String,
        enum:['admin','user','teacher']
    }
})

module.exports = {registerSchema}