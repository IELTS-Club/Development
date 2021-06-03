const express=require("express");
const panel=express.Router();
const isStudent=require("../../../middleware/isStudent");
const isLogedin=require("../../../middleware/isLogedIn");
const isLogedIn = require("../../../middleware/isLogedIn");
const isConfirmed=require("../../../middleware/isConfirmed")
const {Student}=require("../../../models/mongoose");
const {studentSchema}=require("../../../validation/validation");
const Joi=require("joi");
const send=require("../../../setting/email");
const {Quiz}=require("../../../models/mongoose")
const isLogedinEN=require("../../../middleware/isLogedin.en")
const isConfirmedEN=require("../../../middleware/isconfirmed.en")
const isStudentEN=require("../../../middleware/isStudent.en")


//fa get
panel.get("/panel/class-registration",[isLogedin,isConfirmed,isStudent],async(req,res)=>{
    let error=req.flash("error");
    let quizError=req.flash("quizError");
    if(quizError.length>0){
        quizError=quizError[0];
    }
    else{
        quizError=null
    }
    if(error.length>0){
        error=error[0];
    }
    else{
        error=null
    }
    error="به دلیل فعال نبودن اینماد این قسمت از سایت غیر فعال میباشد"
    res.render("panel/students/class-registration",{
        error:error,
        quizError:quizError,
        userName:req.user.name
    });
});

//en get 
panel.get("/en/panel/class-registration",[isLogedinEN,isConfirmedEN,isStudentEN],async(req,res)=>{
    let error=req.flash("error");
    let quizError=req.flash("quizError");
    if(quizError.length>0){
        quizError=quizError[0];
    }
    else{
        quizError=null
    }
    if(error.length>0){
        error=error[0];
    }
    else{
        error=null
    }
    error="This part of the site is inactive due to the inactivity of this image"
    res.render("en-panel/students/class-registration",{
        error:error,
        quizError:quizError,
        userName:req.user.name
    });
});


//fa post
panel.post("/panel/class-registration",[isLogedIn,isConfirmed,isStudent],async(req,res)=>{
    const checkStudent=await Student.findOne({name:req.user._id});
    if(checkStudent!=null){
    if(checkStudent.proccess=="inProccess"){
        await req.flash("quizError","شما در حال حاظر یک کلاس در انتظار دارید");
        return res.redirect("/panel/class-registration")    
    }}
    
    //valdation
    console.log("hello")
    const validation=Joi.validate(req.body,studentSchema);
    if(validation.error){
        if(validation.error.message=='child "password" fails because ["password" length must be at least 8 characters long]'){req.flash("error","گذرواژه شما باید حداقل ۸ رقم باشد")}
        else{await req.flash("error","توضیحات شما باید کمتر از ۲۵ حرف باشد")}
        
        return res.status(400).redirect("/panel/class-registration");
    }  
    const quizes =await Quiz.find({email:req.user.email});
    if(quizes.length==0){
        
        await req.flash("quizError","برای ثبت نام در کلاس باید تعیین سطح داده باشید.");
        return res.redirect("/panel/class-registration")    
    };
    console.log(quizes)
    const quiz= quizes[(quizes.length)-1];
    //add to database
    student=new Student({
        name:req.user._id,
        className:req.body.className,
        classType:req.body.classType,
        classTeacher:req.body.classTeacher,
        classDeatails:req.body.classDeatails,
        proccess:"inProccess",
        quizScore:quiz._id
    });
    const link = 'https://ieltsdrn.com/login/';
    await student.save();
    const html=`<div>
    <p> با تشکر از خرید شما لطفا به بحش کلاس های من در پنل کاربدر خود مراجعه کنید تا کلاس های خود را مشاهده کنید آیلتس کلاب دکتر نورزاد.</p>
    </div>
    <div> ${link}</div>`
    send(req.user.email,req.user.name,"تأییدیه خرید",html);
    res.redirect("/panel/class-list");
    });



//en post 


panel.post("/en/panel/class-registration",[isLogedinEN,isConfirmedEN,isStudentEN],async(req,res)=>{
    const checkStudent=await Student.findOne({name:req.user._id});
    if(checkStudent!=null){
    if(checkStudent.proccess=="inProccess"){
        await req.flash("quizError","You are currently waiting for a class");
        return res.redirect("/en/panel/class-registration")    
    }}
    
    //valdation
    console.log("hello")
    const validation=Joi.validate(req.body,studentSchema);
    if(validation.error){
        if(validation.error.message=='child "password" fails because ["password" length must be at least 8 characters long]'){req.flash("error","گذرواژه شما باید حداقل ۸ رقم باشد")}
        else{await req.flash("error","Your description must be less than 25 characters long")}
        
        return res.status(400).redirect("/en/panel/class-registration");
    }  
    const quizes =await Quiz.find({email:req.user.email});
    if(quizes.length==0){
        
        await req.flash("quizError","You must specify a level to enroll in the class.");
        return res.redirect("/en/panel/class-registration")    
    };
    console.log(quizes)
    const quiz= quizes[(quizes.length)-1];
    //add to database
    student=new Student({
        name:req.user._id,
        className:req.body.className,
        classType:req.body.classType,
        classTeacher:req.body.classTeacher,
        classDeatails:req.body.classDeatails,
        proccess:"inProccess",
        quizScore:quiz._id
    });
    const link = 'https://ieltsdrn.com/en/login/';
    await student.save();
    const html=`<div>
    <p>Thank you for your purchase. Please refer to the section of my classes in your user panel to see your classes. Dr. Nourzad IELTS Club.
    </p>
    </div>
    <div> ${link}</div>`
    send(req.user.email,req.user.name,"Purchase confirmation",html);
    res.redirect("/en/panel/class-list");
    });


module.exports=panel;