const express=require("express");
const panel=express.Router();
const isLogedIn=require("../../../middleware/isLogedIn");
const isConfirmed=require("../../../middleware/isConfirmed");
const isTeacher=require("../../../middleware/isTeacher");

panel.get("/teachers/quiz-list",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    res.render("panel/teachers/quiz-list",{
        userName:req.user.name
    })
})

module.exports=panel;