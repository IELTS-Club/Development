const express=require("express");
const courses=express.Router();
const notForAuth=require("../../middleware/notForAuth")

courses.get("/courses/conversation-course",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("course/conversation-course",{
        authed:authed,
        isTeacher:teachered
    })
});
courses.get("/courses/toefl-course",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("course/toefl-course",{
        authed:authed,
        isTeacher:teachered
    })
});
courses.get("/courses/emigration-course",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("course/emigration-course",{
        authed:authed,
        isTeacher:teachered
    })
});
courses.get("/courses/gre-course",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("course/gre-course",{
        authed:authed,
        isTeacher:teachered
    })
});
courses.get("/courses/ielts-course",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("course/ielts-course",{
        authed:authed,
        isTeacher:teachered
    })
});
courses.get("/courses/pte-course",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("course/pte-course",{
        authed:authed,
        isTeacher:teachered
    })
});
courses.get("/courses/duolingo-course",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("course/duolingo-course",{
        authed:authed,
        isTeacher:teachered
    })
});
courses.get("/courses",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("online-class",{
        authed:authed,
        isTeacher:teachered
    })
});


//en

courses.get("/en/courses/conversation-course",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("en-course/conversation-course",{
        authed:authed,
        isTeacher:teachered
    })
});
courses.get("/en/courses/toefl-course",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("en-course/toefl-course",{
        authed:authed,
        isTeacher:teachered
    })
});
courses.get("/en/courses/emigration-course",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("en-course/emigration-course",{
        authed:authed,
        isTeacher:teachered
    })
});
courses.get("/en/courses/gre-course",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("en-course/gre-course",{
        authed:authed,
        isTeacher:teachered
    })
});
courses.get("/en/courses/ielts-course",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("en-course/ielts-course",{
        authed:authed,
        isTeacher:teachered
    })
});
courses.get("/en/courses/pte-course",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("en-course/pte-course",{
        authed:authed,
        isTeacher:teachered
    })
});
courses.get("/en/courses/duolingo-course",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("en-course/duolingo-course",{
        authed:authed,
        isTeacher:teachered
    })
});
courses.get("/en/courses",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("en-online-class",{
        authed:authed,
        isTeacher:teachered
    })
});
module.exports=courses;