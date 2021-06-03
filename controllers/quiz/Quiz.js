const express=require("express");
const quiz=express.Router();
const Joi=require("joi")
const {Quiz}=require("../../models/mongoose");
const {User}=require("../../models/mongoose");
const isConfirmed=require("../../middleware/isConfirmed");
const isConfirmedEN=require("../../middleware/isconfirmed.en")
const isLogedIn=require("../../middleware/isLogedIn");
const isLogedInEN=require("../../middleware/isLogedin.en")
const isStudent=require("../../middleware/isStudent");
const quizMiddleware=require("../../middleware/quizMiddleware");
const quizMiddlewareEN=require("../../middleware/quizMiddleware.en")
const isTeacher=require("../../middleware/isTeacher")
// const isStudent=require("../../../middleware/isStudent");
// const isLogedin=require("../../../middleware/isLogedIn");
// const {Student}=require("../../../models/mongoose");
// const isConfirmed=require("../../../middleware/isConfirmed")

//quiz get fa
quiz.get("/quiz",[isLogedIn,isConfirmedEN,quizMiddlewareEN],async(req,res)=>{
    res.render("placement-quiz");
});

//quiz get en
quiz.get("/en/quiz",[isLogedInEN,isConfirmed,quizMiddleware],async(req,res)=>{
    res.render("en-placement-quiz");
});
quiz.post("/quiz",[isLogedIn,isConfirmed],async(req,res)=>{
    //validation
    
    const quizSchema={
        name:Joi.string().required(),
        quizType:Joi.string().required(),
        isChecked:Joi.string().required()
    } 
    const validation=Joi.validate(req.body,quizSchema);
    if(validation.error){
        return res.status(400).send("bad request");
    }
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    if(req.body.quizType=="Oral"){
        const quiz=new Quiz({
            name:req.body.name,
            quizType:req.body.quizType,
            falseAnswer:null,
            level:null,
            trueAnswer:null,
            Date:today,
            email:req.user.email,
            phone:req.user.phone
        });
        await quiz.save();
        return res.redirect("/panel/placement-test-history");
    }
    req.session.quizname=req.body.name;
    req.session.quizType="Written";
    console.log(req.body);
    res.redirect("/quiz");
})

//post en 
quiz.post("/en/quiz",[isLogedIn,isConfirmed],async(req,res)=>{
    //validation
    
    const quizSchema={
        name:Joi.string().required(),
        quizType:Joi.string().required(),
        isChecked:Joi.string().required()
    } 
    const validation=Joi.validate(req.body,quizSchema);
    if(validation.error){
        return res.status(400).send("bad request");
    }
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    if(req.body.quizType=="Oral"){
        const quiz=new Quiz({
            name:req.body.name,
            quizType:req.body.quizType,
            falseAnswer:null,
            level:null,
            trueAnswer:null,
            Date:today,
            email:req.user.email,
            phone:req.user.phone
        });
        await quiz.save();
        return res.redirect("/panel/placement-test-history");
    }
    req.session.quizname=req.body.name;
    req.session.quizType="Written";
    console.log(req.body);
    res.redirect("/en/quiz");
})

quiz.post("/quiz-result",[isLogedIn,isConfirmed],async (req) => {
    console.log(req.body);
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    const quiz=new Quiz({
       name:req.session.quizname,
       quizType:req.session.quizType,
       trueAnswer:req.body.correctAnswer,
       falseAnswer:req.body.wrongAnswer,
       level:req.body.level,
       Date:today,
       email:req.user.email,
       phone:req.user.phone
    });
    await quiz.save();
    
        
});
//fa
quiz.post("/teachers/placement-test-list/changeQuizResult",[isLogedIn,isConfirmed,isTeacher],async (req,res)=>{
    const quiz=await Quiz.findByIdAndUpdate(req.body.id,{
        level:req.body.level
    });
    res.redirect("/teachers/placement-test-list/")
    
    
})
//en
quiz.post("/en/teachers/placement-test-list/changeQuizResult",[isLogedIn,isConfirmed,isTeacher],async (req,res)=>{
    const quiz=await Quiz.findByIdAndUpdate(req.body.id,{
        level:req.body.level
    });
    res.redirect("/en/teachers/placement-test-list/")
    
    
})

module.exports=quiz;