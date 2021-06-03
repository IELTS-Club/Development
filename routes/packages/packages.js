const express=require("express");
const package=express.Router();
const notForAuth=require("../../middleware/notForAuth");
package.get("/packages/first",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    
    res.render("packages/first",{
        authed:authed,
        isTeacher:teachered
    })
});
package.get("/en/packages/first",notForAuth,(req,res)=>{
    let authed;
    let teachered;
    if(req.user){
       authed=true; 
       teachered=req.user.isTeacher;
    }
    console.log(authed);
    
    res.render("en-packages/first",{
        authed:authed,
        isTeacher:teachered
    })
});


module.exports=package;