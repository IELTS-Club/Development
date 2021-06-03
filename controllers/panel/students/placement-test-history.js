const express=require("express");
const isLogedIn = require("../../../middleware/isLogedIn");
const isStudent = require("../../../middleware/isStudent");
const isConfirmed=require("../../../middleware/isConfirmed")
const panel=express.Router();
const {Quiz}=require("../../../models/mongoose");
const isLogedinEN=require("../../../middleware/isLogedin.en")
const isConfirmedEN=require("../../../middleware/isconfirmed.en")
const isStudentEN=require("../../../middleware/isStudent.en")

//fa
panel.get("/panel/placement-test-history",[isLogedIn,isConfirmed,isStudent],async(req,res)=>{
    
    
    const quizes=[];
    const quiz=await Quiz.find({email:req.user.email});
    if(quiz.length!=0){
    for(let i=0;i < quiz.length;i++){
        quizes.push(quiz[i]);
    }};
    res.render("panel/students/placement-test-history",{
        userName:req.user.name,
        quizes:quizes 
    })
});

//en
panel.get("/en/panel/placement-test-history",[isLogedinEN,isConfirmedEN,isStudentEN],async(req,res)=>{
    
    
    const quizes=[];
    const quiz=await Quiz.find({email:req.user.email});
    if(quiz.length!=0){
    for(let i=0;i < quiz.length;i++){
        quizes.push(quiz[i]);
    }};
    res.render("en-panel/students/placement-test-history",{
        userName:req.user.name,
        quizes:quizes 
    })
});
module.exports=panel;