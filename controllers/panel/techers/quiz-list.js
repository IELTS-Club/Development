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
    req.seesion.classId=req.params.classId;
    res.send("done")
    
});

panel.get("/create-exam",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    
    res.render("quiz/teacher-quiz.ejs",{
        
    })
})
module.exports=panel;