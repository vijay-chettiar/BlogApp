const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        required : true,
        type : String,
        minLength : 3
    },
    username : {
        required : true,
        type : String,
        unique : true,
        minLength : 4,
        maxLength : 10
    },
    password : {
        required : true,
        type : String,
        minLength : 6,
        minLength : 10
    }
})

const userModel = mongoose.model("user" , userSchema);
module.exports = userModel