const express=require("express");
const confirmemail =express.Router();
const jwt=require("jsonwebtoken");
const config=require("config");
const {User}=require("../../../models/mongoose");
const bcrypt=require("bcrypt");
const isLogedIn=require("../../../middleware/isLogedIn");
const isConfirmed=require("../../../middleware/isConfirmed");
const isTeacher=require("../../../middleware/isTeacher");
const isLogedInEN=require("../../../middleware/isLogedin.en");
const isConfirmedEN=require("../../../middleware/isconfirmed.en");
const isTeacherEN=require("../../../middleware/isTeacher.en");




confirmemail.get("/confirmemail/:token",async(req,res)=>{
    const token= (req.params.token);
    console.log(req.params);
    const decoded= jwt.verify(token,config.get("private-key"));
    console.log(decoded);
    const email=await decoded.email;
    let user=await User.findOne({email:email});
    console.log(user);
    if (user.length==0){return res.status(400).send("wrong token , توکن اشتباه است")}
    const compare=await bcrypt.compare(token,user.token)
    if (compare==false){return res.status(400).send("wrong token , توکن اشتباه است")}
    user=await User.findOneAndUpdate({email:email},
        {
            token:"",
            isConfirmed:true
        });
        res.send(`ایمیل شما تایید شد | your email has been confirmed <a href="/login">ورود</a> || <a href="/en/login">login</a>`)
});
confirmemail.get("/confirmemail/student/:email",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    const user=await User.findOneAndUpdate({email:req.params.email},{$set:{isConfirmed:true}});
    

    res.redirect("/teachers/users")

})

confirmemail.get("/en/confirmemail/student/:email",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    const user=await User.findOneAndUpdate({email:req.params.email},{$set:{isConfirmed:true}});
    

    res.redirect("/en/teachers/users")

})
module.exports=confirmemail;
