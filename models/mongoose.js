const mongoose=require("mongoose");
const config=require("config");
const winston=require("winston");
const jwt=require("jsonwebtoken");

mongoose.connect(config.get("DBname"),{ useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false  })
.then(()=>{if (process.env.NODE_ENV=="development")winston.info("connected to icdrn database")})
.catch( (err)=>winston.error(err));
mongoose.set('useCreateIndex', true)


//Exams
const quizSchema=new mongoose.Schema({
    name:{type:String,minlength:3,maxlength:256,required:true},
    quizType:{type:String,enum:["Written","Oral"]},
    trueAnswer:{type:Number,required:function(){
        if (this.quizType=="Written"){
            return true;
        }
        else{
            return false
        }
    }},
    falseAnswer:{type:Number,required:function(){
        if (this.quizType=="Written"){
            return true;
        }
        else{
            return false
        }
    }},
    level:{type:String,min:2,max:256,required:function(){
        if (this.quizType=="Written"){
            return true;
        }
        else{
            return false
        }
    }},
    Date:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true}
});
const Quiz=mongoose.model("Quiz",quizSchema);
module.exports.Quiz = Quiz;

//User 
const userSchema=new mongoose.Schema({
    name:{type:String,minlength:3,maxlength:256,required:true},
    phone:{type:String,unique:true,minlength:11,maxlength:11,required:true},
    email:{type:String,min:7,max:256,unique:true,required:true,},
    password:{type:String,min:8,max:256,required:true},
    token:{type:String},
    isConfirmed:{type:Boolean,default:false},
    isTeacher:{type:Boolean,default:false},
    exams:[{type:mongoose.Schema.Types.ObjectId,ref:Quiz}],
    emails:[{Subjet:String,html:String}]
});
userSchema.methods.genrateToken=function(){
    let token=jwt.sign({_id:this._id,isTeacher:this.isTeacher,email:this.email,name:this.name,phone:this.phone},config.get("private-key"),{
        expiresIn:"1d"
    });
    return token;
}
const User=mongoose.model("User",userSchema);
module.exports.User = User;

// Classes
const classschema=new mongoose.Schema({
    className:{type:String,minlength:3,maxlength:256,required:true},
    classType:{type:String,required:true},
    classTeacher:{type:String,required:true},
    classLevel:{type:String,required:true},
    classTime:{type:String,required:true},
    classStudents:[{type:mongoose.Schema.Types.ObjectId,ref:User}],
    classLink:{type:String,required:true}
});

const Class=mongoose.model("Class",classschema);
module.exports.Class = Class;

// Students
const studentSchema=new mongoose.Schema({
    name:{type:mongoose.Schema.Types.ObjectId,ref:User},
    className:{type:String,enum:["Ielts","Toefl","PTE","Duolingo","Conversation","Emigration"]},
    classType:{type:String,enum:["Private","Public"]},
    classTeacher:{type:String,enum:["Noorzad","Bahrami","Rafiea","Nouri","Zolfaghari","Jadidi"]},
    classDeatails:{type:String,maxlength:150}, 
    proccess:{type:String,enum:["inProccess","done"],default:"inProccess"},
    quizScore:{type:mongoose.Schema.Types.ObjectId,ref:Quiz,required:true}
})
const Student=mongoose.model("Student",studentSchema);
module.exports.Student = Student;

//Exam
const examsSchema=new mongoose.Schema({
    ClassID:{type:mongoose.Schema.Types.ObjectId,ref:Class},
    Title:{type:String},
    Type:{type:String},
    StartDate:{type:String},
    StartHour:{type:String},
    StopDate:{type:String},
    StopHour:{type:String},
    QuestionsNumber:{type:Number},


    QuestionsList:[{
        questionId:String,
        questionType:String,
        questionBody:String,
        questionStructure:String,
        questionChoices:[{type:String,required:function(){
            if (this.questionStructure=="Multiple-Choice"){
                return true;
            }
            else{
                return false;
            }
        }}],
        trueAnswer:{type:String,required:function(){
            if (this.questionStructure=="Multiple-Choice"){
                return true;
            }
            else{
                return false
            }
        }},
        
        }],
    

    Answers:[{
        studentId:{type:mongoose.Schema.Types.ObjectId,ref:User},
        process:{type:String,default:"inProccess"},
        answersList:[{
            questionId:String,
            answerKey:String,
            structure:String
        }]

    }] 
});
const Exam=mongoose.model("Exam",examsSchema);
module.exports.Exam=Exam;


//exam Srtudents resault
const reportSchema=new mongoose.Schema({
    StudentID:{type:mongoose.Schema.Types.ObjectId,ref:User},
    classTime:{type:String},
    classTeacher:{type:String},
    Type:{type:String,required:true},
    //Common repot
    ClassAttendance:{type:Number},
    ClassActivity:{type:Number},
    MidtermScore:{type:Number},
    FinalOral:{type:Number},
    FinalWritten:{type:Number},
    //Mock report 
    Listening:{type:Number},
    Reading:{type:Number},
    Writing:{type:Number},
    Speaking:{type:Number},


    OveralScore:{type:Number}
})
const Report=mongoose.model("Report",reportSchema);
module.exports.Report=Report;