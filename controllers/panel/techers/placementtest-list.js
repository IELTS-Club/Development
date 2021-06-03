const express=require("express");
const panel=express.Router();
const isLogedIn=require("../../../middleware/isLogedIn");
const isConfirmed=require("../../../middleware/isConfirmed");
const isTeacher=require("../../../middleware/isTeacher");
const {Quiz}=require("../../../models/mongoose");
const isLogedInEN=require("../../../middleware/isLogedin.en");
const isConfirmedEN=require("../../../middleware/isconfirmed.en");
const isTeacherEN=require("../../../middleware/isTeacher")


//get fa just show 
panel.get("/teachers/placement-test-list",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    const quizes=[];
    const quiz=await Quiz.find();
    if(quiz.length!=0){
    for(let i=0;i < quiz.length;i++){
        quizes.push(quiz[i]);
    }};
    res.render("panel/teachers/placementtest-list",{
        userName:req.user.name,
        quizes:quizes,
        id:null,
        mustShow:null
    })
});

//get fa change score
panel.get("/teachers/placement-test-list/:id",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    const quizes=[];
    const quiz=await Quiz.find();
    if(quiz.length!=0){
    for(let i=0;i < quiz.length;i++){
        quizes.push(quiz[i]);
    }};
    res.render("panel/teachers/placementtest-list",{
        userName:req.user.name,
        id:req.params.id,
        quizes:quizes,
        mustShow:true,
    })
})


//get en just show 
panel.get("/en/teachers/placement-test-list",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    const quizes=[];
    const quiz=await Quiz.find();
    if(quiz.length!=0){
    for(let i=0;i < quiz.length;i++){
        quizes.push(quiz[i]);
    }};
    res.render("en-panel/teachers/placementtest-list",{
        userName:req.user.name,
        quizes:quizes,
        id:null,
        mustShow:null
    })
});

//get en change score
panel.get("/en/teachers/placement-test-list/:id",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    const quizes=[];
    const quiz=await Quiz.find();
    if(quiz.length!=0){
    for(let i=0;i < quiz.length;i++){
        quizes.push(quiz[i]);
    }};
    res.render("en-panel/teachers/placementtest-list",{
        userName:req.user.name,
        id:req.params.id,
        quizes:quizes,
        mustShow:true,
    })
})
module.exports=panel;