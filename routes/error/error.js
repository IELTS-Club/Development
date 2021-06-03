const express=require("express");
const error=express.Router();

error.get("/404/notfound",(req,res)=>{
    res.render("error/search-result");
});
module.exports=error;