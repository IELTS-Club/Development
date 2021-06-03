const express=require("express");
const panel=express.Router();
const isLogedIN=require("../../../middleware/isLogedIn")
const isConfirmed=require("../../../middleware/isConfirmed")
const isTecher=require("../../../middleware/isTeacher");
const {User}=require("../../../models/mongoose")
const isLogedInEN=require("../../../middleware/isLogedin.en");
const isConfirmedEN=require("../../../middleware/isconfirmed.en");
const isTeacherEN=require("../../../middleware/isTeacher")
//get fa
panel.get("/teachers/users",[isLogedIN,isConfirmed,isTecher],async(req,res)=>{
    const user=await User.find()
    res.render("panel/teachers/users-list",{
        user:user,
        userName:req.user.name,
        value:""
    });
});

//post fa
panel.post("/teachers/users",[isLogedIN,isConfirmed,isTecher],async(req,res)=>{
    console.log(req.body.name);
    const user=await User.find({name:{$regex:".*"+ req.body.name+".*"}})
    console.log(user)
    
    res.render("panel/teachers/users-list",{
        user:user,
        userName:req.user.name,
        value:req.body.name
    });
});


//get en
panel.get("/en/teachers/users",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    const user=await User.find()
    res.render("en-panel/teachers/users-list",{
        user:user,
        userName:req.user.name,
        value:""
    });
});

//post en
panel.post("/en/teachers/users",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    console.log(req.body.name);
    const user=await User.find({name:{$regex:".*"+ req.body.name+".*"}})
    console.log(user)
    
    res.render("en-panel/teachers/users-list",{
        user:user,
        userName:req.user.name,
        value:req.body.name
    });
});
module.exports=panel;