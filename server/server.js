const express = require("express");
const mongoosem = require("mongoose");



const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));


//server
app.listen(3005, (err) =>{
    if(!err){
        console.log("server started at PORT 3005")
    }else{
        console.log(err)
    }
})

//database
mongoosem.connect("mongodb://localhost:27017/blogapp" , (err) =>{
    if(!err){
        console.log("connected to DB")
    }else{
        console.log(err)
    }
})

app.get("/" , (req,res) =>{
    if(res){
        res.status(200).send("backend working")
    }else{
         console.log("error")
    }
})