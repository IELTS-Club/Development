const express=require("express");
const panel=express.Router();
const isStudent=require("../../../middleware/isStudent");
const isLogedin=require("../../../middleware/isLogedIn");
const isConfirmed=require("../../../middleware/isConfirmed")
const {User}=require("../../../models/mongoose");
const isLogedinEN=require("../../../middleware/isLogedin.en")
const isConfirmedEN=require("../../../middleware/isconfirmed.en")
const isStudentEN=require("../../../middleware/isStudent.en")
//fa
panel.get("/dashboard",[isLogedin,isConfirmed,isStudent],async(req,res)=>{
    const user=await User.findOne({_id:req.user._id})
    
    res.render("panel/students/dashboard",{
        name:user.name,
        userName:req.user.name
    })
});

panel.get("/logout",async(req,res)=>{
    req.session.destroy();
    res.redirect("/")
})
panel.get("/en/logout",async(req,res)=>{
    req.session.destroy();
    res.redirect("/en")
})

//en
panel.get("/en/dashboard",[isLogedinEN,isConfirmedEN,isStudentEN],async(req,res)=>{
    const user=await User.findOne({_id:req.user._id})
    
    res.render("en-panel/students/dashboard",{
        name:user.name,
        userName:req.user.name
    })
});



module.exports=panel;