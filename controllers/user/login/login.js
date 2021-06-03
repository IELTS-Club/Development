const express=require("express");
const logIn=express.Router();
const Joi=require("joi");
const {User}=require("../../../models/mongoose");
const bcrypt=require("bcrypt");


//login get fa

logIn.get("/login",async(req,res)=>{
    let message=req.flash("error")
    if(message.length>0){
        message=message[0];
    }else {
        message=null;
    }
    res.render("Authentication/login",{
        error:message
    })
})
 
// login get en

logIn.get("/en/login",async(req,res)=>{
    let message=req.flash("error")
    if(message.length>0){
        message=message[0];
    }else {
        message=null;
    }
    res.render("en-Authentication/login",{
        error:message
    })
})

//teachers log in get fa

logIn.get("/login/teachers",async(req,res)=>{
    let teacherMessage=req.flash("teacherError");
    if(teacherMessage.length>0){
        teacherMessage=teacherMessage[0];
    }else {
        teacherMessage=null;
    }
    res.render("Authentication/teachers/teachers-login",{
        error:teacherMessage
    })
});

//teachers log in get en

logIn.get("/en/login/teachers",async(req,res)=>{
    let teacherMessage=req.flash("teacherError");
    if(teacherMessage.length>0){
        teacherMessage=teacherMessage[0];
    }else {
        teacherMessage=null;
    }
    res.render("en-Authentication/teachers/teachers-login",{
        error:teacherMessage
    })
});

//teachers log in post fa

logIn.post("/login/teachers",async(req,res)=>{
    const schema={
        email:Joi.string().max(256).required().email(),
        password:Joi.string().max(256).required(),
    }
    const validation =Joi.validate(req.body,schema);
    if(validation.error){
        req.flash("teacheError","لطفا ایمیل یا پسورد خود را واردکنید");
        return res.redirect("/login/teachers")   
    }
    const email=req.body.email.toLowerCase();
    let user=await User.findOne({email:email});
    if(!user){
        req.flash("teacherError","ایمیل شما یافت نشد");
        return res.redirect("/login/teachers")    
    }
    const passwordVlaidation=await bcrypt.compare(req.body.password,user.password);
    if(passwordVlaidation==false){
        req.flash("teacherError","پسورد شما اشتباه است");
        return res.redirect("/login/teachers");   
    }
    if(user.isTeacher!=true){
        req.flash("teacherError","شمادسترسی لازم برای ورود به این پنل را ندارید");
        return res.redirect("/login/teachers");
    }
    const token=await user.genrateToken();
    req.session.jwt=token;
    res.redirect("/teachers/dashboard");
});

//teachers log in post en

logIn.post("/en/login/teachers",async(req,res)=>{
    const schema={
        email:Joi.string().max(256).required().email(),
        password:Joi.string().max(256).required(),
    }
    const validation =Joi.validate(req.body,schema);
    if(validation.error){
        req.flash("teacheError","please fill out you email box");
        return res.redirect("/en/login/teachers")   
    }
    const email=req.body.email.toLowerCase();
    let user=await User.findOne({email:email});
    if(!user){
        req.flash("teacherError","your email didnt find");
        return res.redirect("/en/login/teachers")    
    }
    const passwordVlaidation=await bcrypt.compare(req.body.password,user.password);
    if(passwordVlaidation==false){
        req.flash("teacherError","your password is not correct");
        return res.redirect("/en/login/teachers");   
    }
    if(user.isTeacher!=true){
        req.flash("teacherError","you dont have permission to login into teachers panle");
        return res.redirect("/en/login/teachers");
    }
    const token=await user.genrateToken();
    req.session.jwt=token;
    res.redirect("/en/teachers/dashboard");
});

// login get fa

logIn.post("/login",async(req,res)=>{
    const schema={
        email:Joi.string().max(256).required(),
        password:Joi.string().max(256).required(),
    }
    const validation =Joi.validate(req.body,schema);
    if(validation.error){
        req.flash("error","لطفا ایمیل یا پسورد خود را واردکنید");
        return res.redirect("/login")   
    }
    const email=req.body.email.toLowerCase();
    let user=await User.findOne({email:email});
    if(!user){
        req.flash("error","ایمیل شما یافت نشد");
        return res.redirect("/login")    
    }
    const passwordVlaidation=await bcrypt.compare(req.body.password,user.password);
    if(!passwordVlaidation){
        req.flash("error","پسورد شما اشتباه است");
        return res.redirect("/login");   
    }
    const token=await user.genrateToken();
    req.session.jwt=token;
    res.redirect("/dashboard");
})



//login post en

logIn.post("/en/login",async(req,res)=>{
    const schema={
        email:Joi.string().max(256).required(),
        password:Joi.string().max(256).required(),
    }
    const validation =Joi.validate(req.body,schema);
    if(validation.error){
        req.flash("error","please fill out you email box");
        return res.redirect("/en/login")   
    }
    const email=req.body.email.toLowerCase();
    let user=await User.findOne({email:email});
    if(!user){
        req.flash("error","your email didnt find");
        return res.redirect("/en/login")    
    }
    const passwordVlaidation=await bcrypt.compare(req.body.password,user.password);
    if(!passwordVlaidation){
        req.flash("error","your password is not correct");
        return res.redirect("/en/login");   
    }
    const token=await user.genrateToken();
    req.session.jwt=token;
    res.redirect("/en/dashboard");
})

module.exports=logIn;