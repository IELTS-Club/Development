const express=require("express");
const panel=express.Router();
const isLogedIn=require("../../../middleware/isLogedIn");
const isConfirmed=require("../../../middleware/isConfirmed");
const isTeacher=require("../../../middleware/isTeacher");
const isLogedInEN=require("../../../middleware/isLogedin.en");
const isConfirmedEN=require("../../../middleware/isconfirmed.en");
const isTeacherEN=require("../../../middleware/isTeacher")

panel.get("/teachers/dashboard",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    res.render("panel/teachers/dashboard",{
        userName:req.user.name
    })
});

panel.get("/en/teachers/dashboard",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    res.render("en-panel/teachers/dashboard",{
        userName:req.user.name
    })
});
module.exports=panel;