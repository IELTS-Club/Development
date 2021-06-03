const express=require("express");
const isLogedIn = require("../../../middleware/isLogedIn");
const isStudent = require("../../../middleware/isStudent");
const isConfirmed=require("../../../middleware/isConfirmed");
const {User}=require("../../../models/mongoose")
const panel=express.Router();
const {updateUserSchema}=require("../../../validation/validation")
const JOi=require("joi")
const isLogedinEN=require("../../../middleware/isLogedin.en")
const isConfirmedEN=require("../../../middleware/isconfirmed.en")
const isStudentEN=require("../../../middleware/isStudent.en")


//get fa
panel.get("/panel/profile-edit",[isLogedIn,isConfirmed,isStudent],async(req,res)=>{
    const user=await User.findOne({email:req.user.email});
    const name=await user.name;
    const email=await user.email;
    const phone=await user.phone;
    let message=req.flash("error");
    let success=req.flash("success");
    if(message.length>0){
        message=message[0];
    }else {
        message=null;
    }
    if(success.length>0){
        success=success[0];
    }else {
        success=null;
    }
    console.log(user)
    res.render("panel/students/prodile-edit",{
        name:name,
        email:email,
        phone:phone,
        error:message,
        success:success,
        userName:req.user.name
    })
});



//get en
panel.get("/en/panel/profile-edit",[isLogedIn,isConfirmed,isStudent],async(req,res)=>{
    const user=await User.findOne({email:req.user.email});
    const name=await user.name;
    const email=await user.email;
    const phone=await user.phone;
    let message=req.flash("error");
    let success=req.flash("success");
    if(message.length>0){
        message=message[0];
    }else {
        message=null;
    }
    if(success.length>0){
        success=success[0];
    }else {
        success=null;
    }
    console.log(user)
    res.render("en-panel/students/prodile-edit",{
        name:name,
        email:email,
        phone:phone,
        error:message,
        success:success,
        userName:req.user.name
    })
});




//post fa
panel.post("/panel/profile-edit",[isLogedIn,isConfirmed,isStudent],async(req,res)=>{
    //valdation
    const validation=JOi.validate(req.body,updateUserSchema);
    if(validation.error){
        console.log(validation.error.message);
        if(validation.error.message=='child "name" fails because ["name" length must be at least 3 characters long]'){req.flash("error","نام شما باید بیشتر از سه کارکتر باشد")}
        if(validation.error.message=='child "phone" fails because ["phone" length must be less than or equal to 11 characters long]'){req.flash("error","شماره شما باید ۱۱ رقم باشد")}
        else{req.flash("error","لطفا فرم را کامل پر کنید")}
        return res.status(400).redirect("/panel/profile-edit");
    }  
    //add to database
    user=await User.findOneAndUpdate({email:req.user.email},{
       name:req.body.name,
       phone:req.body.phone 
    });
    req.flash("success",req.body.name);
    req.user.name=await req.body.anem
    res.redirect("/panel/profile-edit");
})

//post en
panel.post("/en/panel/profile-edit",[isLogedIn,isConfirmed,isStudent],async(req,res)=>{
    //valdation
    const validation=JOi.validate(req.body,updateUserSchema);
    if(validation.error){
        console.log(validation.error.message);
        if(validation.error.message=='child "name" fails because ["name" length must be at least 3 characters long]'){req.flash("error","نام شما باید بیشتر از سه کارکتر باشد")}
        if(validation.error.message=='child "phone" fails because ["phone" length must be less than or equal to 11 characters long]'){req.flash("error","شماره شما باید ۱۱ رقم باشد")}
        else{req.flash("error","please fill out the form completely")}
        return res.status(400).redirect("/en/panel/profile-edit");
    }  
    //add to database
    user=await User.findOneAndUpdate({email:req.user.email},{
       name:req.body.name,
       phone:req.body.phone 
    });
    req.flash("success",req.body.name);
    req.user.name=await req.body.anem
    res.redirect("/en/panel/profile-edit");
})



//post en
module.exports=panel;