const express=require("express");
const panel=express.Router();
const isLogedIn=require("../../../middleware/isLogedIn");
const isConfirmed=require("../../../middleware/isConfirmed");
const isTeacher=require("../../../middleware/isTeacher");
const isLogedInEN=require("../../../middleware/isLogedin.en");
const isConfirmedEN=require("../../../middleware/isconfirmed.en");
const isTeacherEN=require("../../../middleware/isTeacher")
const {Report,Class}= require("../../../models/mongoose");


panel.get("/teachers/dashboard",[isLogedIn,isConfirmed,isTeacher],async(req,res)=>{
    req.user.email="arezoozolfaghari.hope@yahoo.com"
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
        if (req.user.email=="m.mehrnejad70@gmail.com")
        return "Mehr";

        }
   const classes=await Class.find({classTeacher:selectTeacher()}).limit(3)
   console.log(classes);
    
   
    res.render("panel/teachers/dashboard",{
        userName:req.user.name,
        classes:classes
    })
});

panel.get("/en/teachers/dashboard",[isLogedInEN,isConfirmedEN,isTeacherEN],async(req,res)=>{
    res.render("en-panel/teachers/dashboard",{
        userName:req.user.name,
        
    })
});
module.exports=panel;