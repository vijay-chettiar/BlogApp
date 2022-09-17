const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    name : {
        required : true,
        type : String,
    },
    blog_title : {
        required : true,
        type : String
    },
    blog_description : {
        required : true,
        type : String
    },
    blog_post_date : String

})

const blogModel = mongoose.model("blogs" , blogSchema);
module.exports = blogModel