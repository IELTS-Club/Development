const express=require("express");
const panel=express.Router();
const isLogedIn=require("../../../middleware/isLogedIn");
const isConfirmed=require("../../../middleware/isConfirmed");
const isTeacher=require("../../../middleware/isTeacher");
const { Class } = require("../../../models/mongoose");

panel.get("/teachers/quiz-list/:classId",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    res.render("panel/teachers/quiz-list",{
        userName:req.user.name,
        classId:req.params.classId
    })
})
panel.post("/teachers/quiz-list/:classId",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    console.log("hello",req.body)
    let body=req.body;    
    req.session.Title=body.examTitle;
    req.session.Type=body.examType;
    req.session.StartDate=body.examStartDate;
    req.session.StartHour=body.examStartHour;
    req.session.StopDate=body.examStoptDate;
    req.session.StopHour=body.examStoptHour;
    req.session.QuestionsNumber=body.QuestionsNumber;
    res.send("done")
    
});

panel.get("/hello",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    
    console.log(req.session.Title,
        req.session.Type,
        req.session.StartDate,
        req.session.StartHour,
        req.session.StopDate,
        req.session.StopHour,
        req.session.QuestionsNumber);
        res.send(`${req.session.QuestionsNumber} ${req.session.StopHour} ${req.session.StopDate} ${req.session.StartHour} ${req.session.StartDate} ${req.session.Type}صفحه آزمون`)
})
module.exports=panel;