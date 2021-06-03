const express=require("express");
const blog=express.Router();
const notForAuth=require("../../middleware/notForAuth")

blog.get("/blog/blog1",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("blog/blog-1",{
        authed:authed,
        isTeacher:teachered
    })
});
blog.get("/blog/blog2",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("blog/blog-2",{
        authed:authed,
        isTeacher:teachered
    })
});
blog.get("/blog/blog3",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("blog/blog-3",{
        authed:authed,
        isTeacher:teachered
    })
});



//en
blog.get("/en/blog/blog1",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("en-blog/blog-1",{
        authed:authed,
        isTeacher:teachered
    })
});
blog.get("/en/blog/blog2",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("en-blog/blog-2",{
        authed:authed,
        isTeacher:teachered
    })
});
blog.get("/en/blog/blog3",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("en-blog/blog-3",{
        authed:authed,
        isTeacher:teachered
    })
});
module.exports=blog;