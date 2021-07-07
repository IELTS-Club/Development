const express=require("express");
const panel=express.Router();
const isLogedIn=require("../../../middleware/isLogedIn");
const isConfirmed=require("../../../middleware/isConfirmed");
const isTeacher=require("../../../middleware/isTeacher");
const { Class, Exam } = require("../../../models/mongoose");
const isLogedInEN=require("../../../middleware/isLogedin.en");
const isConfirmedEN=require("../../../middleware/isconfirmed.en");
const isTeacherEN=require("../../../middleware/isTeacher")
const {User}=require("../../../models/mongoose");
//get show classes noorzad panel  fa
panel.get("/teachers/admin/:teacher",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    
    if(req.user.email == "pnoorzad@yahoo.com" || req.user.email == "miladmohamadi.ir@gmail.com" || req.user.email=="asjn3e@gmail.com"){
        
    const teacher=req.params.teacher;
        const classes=await Class.find({classTeacher:teacher});
        res.render("panel/teachers/admin-class-list",{
            userName:req.user.name,
            classes:classes,
            email:req.user.email,
            teacher:teacher
        })    

     } 
     else{
        console.log(req.user.email);
        return res.redirect("/teachers/class-list")
     }
        


     
})
//get show classes noorzad panel  en

panel.get("/en/teachers/admin/:teacher",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    
    if(req.user.email == "pnoorzad@yahoo.com" || req.user.email == "miladmohamadi.ir@gmail.com" || req.user.email=="asjn3e@gmail.com"){
        
    const teacher=req.params.teacher;
        const classes=await Class.find({classTeacher:teacher});
        res.render("en-panel/teachers/admin-class-list",{
            userName:req.user.name,
            classes:classes,
            email:req.user.email,
            teacher:teacher
        })    

     } 
     else{
        console.log(req.user.email);
        return res.redirect("/en/teachers/class-list")
     }
        


     
})

//show classes for teachers fa
panel.get("/teachers/class-list",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    const classes=[];
    if (req.user.email=="pnoorzad@yahoo.com" || req.user.email=="miladmohamadi.ir@gmail.com" || req.user.email=="asjn3e@gmail.com" ){
        return res.redirect("/teachers/admin/Noorzad")
    }
    const allClasses=await Class.find();
    function selectTeacher(){
        if (req.user.email=="jadidijavad031@gmail.com")
        return "Jadidi";
        if (req.user.email=="mina.englishmaster.4n@gmail.com")
        return "Nouri";
        if (req.user.email=="pnoorzad@yahoo.com")
        return "Noorzad";
        if (req.user.email=="arezoozolfaghari.hope@yahoo.com")
        return "Zolfaghari";
        if (req.user.email=="nikta.asi@gmail.com")
        return "Asi";
        if (req.user.email=="atefe.mohebiii@gmail.com")
        return "Mohebiii";
        if (req.user.email=="www.maryamhadavi69@gmail.com")
        return "Hadavi";
        if (req.user.email=="fallahmehrshad790@gmail.com")
        return "Fallah";
        if (req.user.email=="zk270266@gmail.com")
        return "Keshtkar";
        if (req.user.email=="haniyebh10@gmail.com")
        return "Bahrami";
        }
        const teacher=selectTeacher();
    const Clasess=await Class.find({classTeacher:teacher})
    if(Clasess.length!=0){
    for(let i=0;i < Clasess.length;i++){
        
            classes.push(Clasess[i]);
        }
    }
    res.render("panel/teachers/class-list",{
        userName:req.user.name,
        allClasses:allClasses,
        classes:classes,
        userName:req.user.name,
        email:req.user.email
    })
});



//show classes for teachers en
panel.get("/en/teachers/class-list",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    const classes=[];
       
    if (req.user.email=="pnoorzad@yahoo.com"|| req.user.email=="miladmohamadi.ir@gmail.com" || req.user.email=="asjn3e@gmail.com" ){
        return res.redirect("/en/teachers/admin/Noorzad")
    }
    const allClasses=await Class.find();
    function selectTeacher(){
        if (req.user.email=="jadidijavad031@gmail.com")
        return "Jadidi";
        if (req.user.email=="mina.englishmaster.4n@gmail.com")
        return "Nouri";
        if (req.user.email=="pnoorzad@yahoo.com")
        return "Noorzad";
        if (req.user.email=="arezoozolfaghari.hope@yahoo.com")
        return "Zolfaghari";
        if (req.user.email=="nikta.asi@gmail.com")
        return "Asi";
        if (req.user.email=="atefe.mohebiii@gmail.com")
        return "Mohebiii";
        if (req.user.email=="www.maryamhadavi69@gmail.com")
        return "Hadavi";
        if (req.user.email=="fallahmehrshad790@gmail.com")
        return "Fallah";
        if (req.user.email=="zk270266@gmail.com")
        return "Keshtkar";
        if (req.user.email=="haniyebh10@gmail.com")
        return "Bahrami";
        }
        const teacher=selectTeacher();
    const Clasess=await Class.find({classTeacher:teacher})
    if(Clasess.length!=0){
    for(let i=0;i < Clasess.length;i++){
        
            classes.push(Clasess[i]);
        }
    }
    res.render("en-panel/teachers/class-list",{
        userName:req.user.name,
        allClasses:allClasses,
        classes:classes,
        
        email:req.user.email
    })
});




//get delete classes fa
panel.get("/teachers/delete-class/:id",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    console.log("hello")
    const classId=req.params.id
    const exams=await Exam.find({ClassID:req.params.id})
    console.log(exams)
    if(exams.length!=0){
        for(let k=1;k<=exams.length;k++){
            await Exam.findOneAndRemove({ClassID:req.params.id});
            
        }
    }
    await Class.findOneAndDelete({_id:classId});
     res.redirect("/teachers/class-list");

})

//get delete classes en
panel.get("/en/teachers/delete-class/:id",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    console.log("hello")
    const classId=req.params.id
    await Class.findOneAndDelete({_id:classId});
    res.redirect("/en/teachers/class-list")
})
module.exports=panel;