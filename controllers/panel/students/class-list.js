const expressRouters = require("../../../routes/expressRouters");
const isStudent=require("../../../middleware/isStudent");
const isLogedin=require("../../../middleware/isLogedIn");
const {Student}=require("../../../models/mongoose");
const isConfirmed=require("../../../middleware/isConfirmed");
const {Class}=require("../../../models/mongoose");
const isLogedinEN=require("../../../middleware/isLogedin.en")
const isConfirmedEN=require("../../../middleware/isconfirmed.en")
const isStudentEN=require("../../../middleware/isStudent.en")

const express=require("express");
const panel=express.Router();
 
//panel get fa
panel.get("/panel/class-list",[isLogedin,isConfirmed,isStudent],async(req,res)=>{
    const classes=[];
    const student=await Student.find({name:req.user._id})
    if(student.length!=0){
        
    for(let i=0;i < student.length;i++){
        if(student[i].proccess=="inProccess"){
            classes.push(student[i]);
        }
    }}
    const Classess= await Class.find({classStudents:req.user._id});
    
    for(let i=0;i < Classess.length;i++){
   
        classes.push(Classess[i]);
          
      }
          // you should write for for classes
    res.render("panel/students/class-list",{
        classes:classes,
        userName:req.user.name,
        showLanmisDetails:null,
        link:null
    });
});


//panel get en
panel.get("/en/panel/class-list",[isLogedinEN,isConfirmedEN,isStudentEN],async(req,res)=>{
    const classes=[];
    const student=await Student.find({name:req.user._id})
    if(student.length!=0){
        
    for(let i=0;i < student.length;i++){
        if(student[i].proccess=="inProccess"){
            classes.push(student[i]);
        }
    }}
    const Classess= await Class.find({classStudents:req.user._id});
    
    for(let i=0;i < Classess.length;i++){
   
        classes.push(Classess[i]);
          
      }
          // you should write for for classes
    res.render("en-panel/students/class-list",{
        classes:classes,
        userName:req.user.name,
        showLanmisDetails:null,
        link:null
    });
});




module.exports=panel;