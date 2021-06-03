const express=require("express");
const panel=express.Router();
const isLogedIn=require("../../../middleware/isLogedIn");
const isConfirmed=require("../../../middleware/isConfirmed");
const isTeacher=require("../../../middleware/isTeacher");
const isLogedInEN=require("../../../middleware/isLogedin.en");
const isConfirmedEN=require("../../../middleware/isconfirmed.en");
const isTeacherEN=require("../../../middleware/isTeacher")
const { Class } = require("../../../models/mongoose");
const { Student}=require("../../../models/mongoose");
const {User}=require("../../../models/mongoose")
//fa 1
panel.get("/teachers/edit-class/:classId",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    let message=req.flash("error");
    if(message.length>0){
        message=message[0];
    }else {
        message=null;
    }

    const classes=await Class.findById(req.params.classId).populate("classStudents",{name:1,email:1});
    if(classes==null){classes=[];}

    console.log(classes);
    res.render("panel/teachers/edit-classes",{
        userName:req.user.name,
        students:classes.classStudents,
        classId:classes._id,
        error:message
               
    })

})

//fa 2
panel.get("/teachers/edit-class/deleteStudent/:classId/:studentId",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    const classes=await Class.findById(req.params.classId);
    if(classes==null){classes=[];}
    console.log(classes);
    let andis=0
    for(let i=0;i <= classes.classStudents.length;i++){
        if (classes.classStudents[i]==req.params.studentId){
            andis=i;
            console.log(classes.classStudents[i])
            console.log(req.params.studentId)
            console.log(andis)
        }
    }
    classes.classStudents.splice(andis,1);
    console.log(classes.classStudents);
     await Class.findOneAndUpdate({_id:req.params.classId},{$set:{
         classStudents:classes.classStudents
    }})
    res.redirect(`/teachers/edit-class/${req.params.classId}`)

})
//fa 3
panel.post("/teachers/edit-class/:classId/changeTeacher",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    
    const classes=await Class.findOneAndUpdate({_id:req.params.classId},{$set:{
        classTeacher:req.body.classTeacher
    }})
        if(classes==null){classes=[];}
    console.log(req.body.classTeacher);
    
    res.redirect(`/teachers/edit-class/${req.params.classId}`)

})
//fa 4
panel.post("/teachers/edit-class/:classId/changeClassTime",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    
    const classes=await Class.findOneAndUpdate({_id:req.params.classId},{$set:{
        classTime:req.body.classTime
    }})
        if(classes==null){classes=[];}
    console.log(req.body.classTime);
    
    res.redirect(`/teachers/edit-class/${req.params.classId}`)

})
//fa 5
panel.post("/teachers/edit-class/:classId/addStudent",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    
     
    let students=await req.body.classStudents.split(",");
    let usersID=[];
    for(let i=0;i< students.length;i++){
        const email=await students[i];
        const user=await User.findOne({email:email});
        if(!user){
            await req.flash("error",`کاربری با ایمیل ${email} یافت نشد.`);
            res.redirect(`/teachers/edit-class/${req.params.classId}`);
        }
        usersID.push(user._id);
        const student=await Student.findOne({name:user._id});
        if(student){
            await Student.findOneAndUpdate({name:user._id},{
                proccess:"done"
            });
        }
        
      }
      const classes=await Class.findById(req.params.classId);
      const newStudents=classes.classStudents.concat(usersID);
      await Class.findOneAndUpdate({_id:req.params.classId},{$set:{
        classStudents:newStudents
   }})

      console.log(usersID);
    res.redirect(`/teachers/edit-class/${req.params.classId}`)

})




//en 1
panel.get("/en/teachers/edit-class/:classId",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    let message=req.flash("error");
    if(message.length>0){
        message=message[0];
    }else {
        message=null;
    }

    const classes=await Class.findById(req.params.classId).populate("classStudents",{name:1,email:1});
    if(classes==null){classes=[];}

    console.log(classes);
    res.render("en-panel/teachers/edit-classes",{
        userName:req.user.name,
        students:classes.classStudents,
        classId:classes._id,
        error:message
               
    })

})

//en 2
panel.get("/en/teachers/edit-class/deleteStudent/:classId/:studentId",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    const classes=await Class.findById(req.params.classId);
    if(classes==null){classes=[];}
    console.log(classes);
    let andis=0
    for(let i=0;i <= classes.classStudents.length;i++){
        if (classes.classStudents[i]==req.params.studentId){
            andis=i;
            console.log(classes.classStudents[i])
            console.log(req.params.studentId)
            console.log(andis)
        }
    }
    classes.classStudents.splice(andis,1);
    console.log(classes.classStudents);
     await Class.findOneAndUpdate({_id:req.params.classId},{$set:{
         classStudents:classes.classStudents
    }})
    res.redirect(`/en/teachers/edit-class/${req.params.classId}`)

})
//en 3
panel.post("/en/teachers/edit-class/:classId/changeTeacher",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    
    const classes=await Class.findOneAndUpdate({_id:req.params.classId},{$set:{
        classTeacher:req.body.classTeacher
    }})
        if(classes==null){classes=[];}
    console.log(req.body.classTeacher);
    
    res.redirect(`/en/teachers/edit-class/${req.params.classId}`)

})
//en 4
panel.post("/en/teachers/edit-class/:classId/changeClassTime",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    
    const classes=await Class.findOneAndUpdate({_id:req.params.classId},{$set:{
        classTime:req.body.classTime
    }})
        if(classes==null){classes=[];}
    console.log(req.body.classTime);
    
    res.redirect(`/en/teachers/edit-class/${req.params.classId}`)

})
//en 5
panel.post("/en/teachers/edit-class/:classId/addStudent",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    
     
    let students=await req.body.classStudents.split(",");
    let usersID=[];
    for(let i=0;i< students.length;i++){
        const email=await students[i];
        const user=await User.findOne({email:email});
        if(!user){
            await req.flash("error",`any user did'nt match with email ${email}`);
            res.redirect(`/en/teachers/edit-class/${req.params.classId}`);
        }
        usersID.push(user._id);
        const student=await Student.findOne({name:user._id});
        if(student){
            await Student.findOneAndUpdate({name:user._id},{
                proccess:"done"
            });
        }
        
      }
      const classes=await Class.findById(req.params.classId);
      const newStudents=classes.classStudents.concat(usersID);
      await Class.findOneAndUpdate({_id:req.params.classId},{$set:{
        classStudents:newStudents
   }})

      console.log(usersID);
    res.redirect(`/en/teachers/edit-class/${req.params.classId}`)

})
module.exports=panel;