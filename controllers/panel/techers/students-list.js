const express=require("express");
const panel=express.Router();
const isLogedIn=require("../../../middleware/isLogedIn");
const isConfirmed=require("../../../middleware/isConfirmed");
const isTeacher=require("../../../middleware/isTeacher");
const {Student}=require("../../../models/mongoose")
const isLogedInEN=require("../../../middleware/isLogedin.en");
const isConfirmedEN=require("../../../middleware/isconfirmed.en");
const isTeacherEN=require("../../../middleware/isTeacher")


//get fa
panel.get("/teachers/student-list",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    const students=await Student.find().populate("name",{name:1,phone:1,email:1}).populate("quizScore");
    console.log(students);
    
    await res.render("panel/teachers/students-list",{
        students:students,
        userName:req.user.name
    });
});


//get en
panel.get("/en/teachers/student-list",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    const students=await Student.find().populate("name",{name:1,phone:1,email:1}).populate("quizScore");
    console.log(students);
    
    await res.render("en-panel/teachers/students-list",{
        students:students,
        userName:req.user.name
    });
});
module.exports=panel;