
const express=require("express");
const index=express.Router();
const isLogedIn=require("../../middleware/isLogedIn")
const isLogedInEN=require("../../middleware/isLogedin.en");
const notForAuth=require("../../middleware/notForAuth")
index.get("/",notForAuth,async(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    
    res.render("index",{
        authed:authed,
        isTeacher:teachered
    });
});
index.get("/en",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    
    res.render("en-index",{
        authed:authed,
        isTeacher:teachered
    });
});

index.get("/privacy-policy",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    res.render("privacy-policy",{
        authed:authed,
        isTeacher:teachered
    });
})
index.get("/en/privacy-policy",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    res.render("en-privacy-policy",{
        authed:authed,
        isTeacher:teachered
    });
})
index.get("/about",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    res.render("about",{
        authed:authed,
        isTeacher:teachered
    })
});
index.get("/en/about",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    res.render("en-about",{
        authed:authed,
        isTeacher:teachered
    })
});
index.get("/contact",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    res.render("contact",{
        authed:authed,
        isTeacher:teachered
    })
});
index.get("/en/contact",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    res.render("en-contact",{
        authed:authed,
        isTeacher:teachered
    })
});
index.get("/blog",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    res.render("blog",{
        authed:authed,
        isTeacher:teachered
    })
});
index.get("/en/blog",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    res.render("en-blog",{
        authed:authed,
        isTeacher:teachered
    });
});

module.exports=index;