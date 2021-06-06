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
    req.session.classId=req.params.classId;
    res.send("done")
    
});

panel.get("/teachers/create-exam",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    if (!req.session.Title || !req.session.Type  || !req.session.StartDate || !req.session.StartHour || !req.session.StopDate || !req.session.StopHour || !req.session.QuestionsNumber || !req.session.classId){
        res.redirect("/teachers/class-list");
    }
    const examClass=await Class.findOne({id:req.session.classID});
    
    
    res.render("quiz/teacher-quiz.ejs",{
        Title:req.session.Title,
        Type:req.session.Type,
        QuestionsNumber:req.session.QuestionsNumber,
        Teacher:examClass.classTeacher
    });
})
module.exports=panel;