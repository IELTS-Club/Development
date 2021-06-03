const express=require("express");
const panel=express.Router();
const isLogedIn=require("../../../middleware/isLogedIn");
const isConfirmed=require("../../../middleware/isConfirmed");
const isTeacher=require("../../../middleware/isTeacher");
const {classValidation}=require("../../../validation/validation");
const {User}=require("../../../models/mongoose");
const {Student}=require("../../../models/mongoose");
const JOi=require("joi")
const {Class}=require("../../../models/mongoose")
const isLogedInEN=require("../../../middleware/isLogedin.en");
const isConfirmedEN=require("../../../middleware/isconfirmed.en");
const isTeacherEN=require("../../../middleware/isTeacher")

//get fa
panel.get("/teachers/add-class",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    let message=req.flash("error");
    let name=req.flash("name");
    if(message.length>0){
        message=message[0];
    }else {
        message=null;
    }
    if(name.length>0){
        name=name[0];
    }else {
        name=null;
    }
    res.render("panel/teachers/add-class",{
        userName:req.user.name,
        error:message,
        name:name,
    })
});

//post fa
panel.post("/teachers/add-class",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    const validation=JOi.validate(req.body,classValidation);
    if(validation.error){
        if(validation.error.message=='child "password" fails because ["password" length must be at least 8 characters long]'){req.flash("error","گذرواژه شما باید حداقل ۸ رقم باشد")}
        else{ req.flash("error","لطفا فرم را کامل پر کنید")}
         req.flash("ClassLink",req.body.name);
         req.flash("ClassTime",req.body.phone);
         req.flash("ClassStudents",req.body.email);
        return res.status(400).send(validation.error);
    }  
    
    const students=await req.body.classStudents.split(",");
    let usersID=[];

        for(let i=0;i< students.length;i++){
        const email=await students[i];
        const user=await User.findOne({email:email});
        if(!user){
            await req.flash("error",`کاربری با ایمیل ${email} یافت نشد.`);
            res.redirect("/teachers/add-class");
        }
        usersID.push(user._id);
        const student=await Student.findOne({name:user._id});
        if(student){
            await Student.findOneAndUpdate({name:user._id},{
                proccess:"done"
            });
        }
        
      }

    const newClass=new Class({
        className:req.body.className,
        classType:req.body.classType,
        classTeacher:req.body.classTeacher,
        classLevel:req.body.classLevel,
        classTime:req.body.classTime,
        classStudents:usersID,
        classLink:req.body.classLink
    });
    await newClass.save();
    res.redirect("/teachers/class-list");
});



//get en
panel.get("/en/teachers/add-class",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    let message=req.flash("error");
    let name=req.flash("name");
    if(message.length>0){
        message=message[0];
    }else {
        message=null;
    }
    if(name.length>0){
        name=name[0];
    }else {
        name=null;
    }
    res.render("en-panel/teachers/add-class",{
        userName:req.user.name,
        error:message,
        name:name,
    })
});


//post en
panel.post("/en/teachers/add-class",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    const validation=JOi.validate(req.body,classValidation);
    if(validation.error){
        if(validation.error.message=='child "password" fails because ["password" length must be at least 8 characters long]'){req.flash("error","گذرواژه شما باید حداقل ۸ رقم باشد")}
        else{ req.flash("error","please fill out the form completly")}
         req.flash("ClassLink",req.body.name);
         req.flash("ClassTime",req.body.phone);
         req.flash("ClassStudents",req.body.email);
        return res.status(400).send(validation.error);
    }  
    
    const students=await req.body.classStudents.split(",");
    let usersID=[];

        for(let i=0;i< students.length;i++){
        const email=await students[i];
        const user=await User.findOne({email:email});
        if(!user){
            await req.flash("error",`No user found with ${email}.`);
            res.redirect("/en/teachers/add-class");
        }
        usersID.push(user._id);
        const student=await Student.findOne({name:user._id});
        if(student){
            await Student.findOneAndUpdate({name:user._id},{
                proccess:"done"
            });
        }
        
      }

    const newClass=new Class({
        className:req.body.className,
        classType:req.body.classType,
        classTeacher:req.body.classTeacher,
        classLevel:req.body.classLevel,
        classTime:req.body.classTime,
        classStudents:usersID,
        classLink:req.body.classLink
    });
    await newClass.save();
    res.redirect("/en/teachers/class-list");
});
module.exports=panel;