const express=require("express");
const panel=express.Router();
const isLogedIn=require("../../../middleware/isLogedIn");
const isConfirmed=require("../../../middleware/isConfirmed");
const isTeacher=require("../../../middleware/isTeacher");
const {updateUserSchema}=require("../../../validation/validation");
const {User}=require("../../../models/mongoose")
const JOi=require("joi")
const isLogedInEN=require("../../../middleware/isLogedin.en");
const isConfirmedEN=require("../../../middleware/isconfirmed.en");
const isTeacherEN=require("../../../middleware/isTeacher")


//get fa
panel.get("/teachers/edit-profile",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
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
    await res.render("panel/teachers/edit-profile",{
        name:name,
        email:email,
        phone:phone,
        error:message,
        success:success,
        userName:req.user.name
    });
});


//post fa
panel.post("/teachers/edit-profile",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    //valdation
    const validation=JOi.validate(req.body,updateUserSchema);
    if(validation.error){
        console.log(validation.error.message);
        if(validation.error.message=='child "name" fails because ["name" length must be at least 3 characters long]'){req.flash("error","نام شما باید بیشتر از سه کارکتر باشد")}
        if(validation.error.message=='child "phone" fails because ["phone" length must be less than or equal to 11 characters long]'){req.flash("error","شماره شما باید ۱۱ رقم باشد")}
        else{req.flash("error","لطفا فرم را کامل پر کنید")}
        return res.status(400).redirect("/teachers/edit-profile");
    }  
    //add to database
    user=await User.findOneAndUpdate({email:req.user.email},{
       name:req.body.name,
       phone:req.body.phone 
    });
    req.flash("success",req.body.name);
    req.user.name=await req.body.anem
    res.redirect("/teachers/edit-profile");
})


//get en
panel.get("/en/teachers/edit-profile",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
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
    await res.render("en-panel/teachers/edit-profile",{
        name:name,
        email:email,
        phone:phone,
        error:message,
        success:success,
        userName:req.user.name
    });
});


//post en
panel.post("/en/teachers/edit-profile",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    //valdation
    const validation=JOi.validate(req.body,updateUserSchema);
    if(validation.error){
        console.log(validation.error.message);
        if(validation.error.message=='child "name" fails because ["name" length must be at least 3 characters long]'){req.flash("error","نام شما باید بیشتر از سه کارکتر باشد")}
        if(validation.error.message=='child "phone" fails because ["phone" length must be less than or equal to 11 characters long]'){req.flash("error","شماره شما باید ۱۱ رقم باشد")}
        else{req.flash("error","please fill out form completly")}
        return res.status(400).redirect("/en/teachers/edit-profile");
    }  
    //add to database
    user=await User.findOneAndUpdate({email:req.user.email},{
       name:req.body.name,
       phone:req.body.phone 
    });
    req.flash("success",req.body.name);
    req.user.name=await req.body.anem
    res.redirect("/en/teachers/edit-profile");
})

module.exports=panel;