const express = require("express");
const panel = express.Router();
const isLogedIn = require("../../../middleware/isLogedIn");
const isConfirmed = require("../../../middleware/isConfirmed");
const isTeacher = require("../../../middleware/isTeacher");
const isStudent = require("../../../middleware/isStudent");
const {
    Class
} = require("../../../models/mongoose");
const {
    Exam
} = require("../../../models/mongoose");

panel.get("/teachers/quiz-list/:classId", [isLogedIn, isConfirmed, isTeacher], async (req, res) => {
    const exams = await Exam.find({
        ClassID: req.params.classId
    });

    const date = new Date().toLocaleTimeString("fa").replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));

    console.log(exams)
    if (exams.length < 1) {
        return res.render("panel/teachers/no-quiz", {
            userName: req.user.name,
            classId: req.params.classId
        })
    } else {
        res.render("panel/teachers/quiz-list", {
            exams: exams,
            userName: req.user.name,
            classId: req.params.classId,
            userName: req.user.name,

        })
    }

})

//should be isStudent
panel.get("/panel/quiz-list/:classId", [isLogedIn, isConfirmed], async (req, res) => {
    const exams = await Exam.find({
        ClassID: req.params.classId
    });


    if (exams.length == 0) {
        req.flash("examNull", "nothing")
        return res.redirect("/panel/class-list")
    }
    let vlaidatedExams = [];

    //for each
    exams.forEach(element => {

        const date = new Date().toLocaleDateString('fa-IR').replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));
        let nowDate = date
        const date1 = date.split("/");
        if (Number(date1[1]) < 10) {
            nowDate = `${date1[0]}/0${date1[1]}/${date1[2]}`
        }
        const hour = new Date().toLocaleTimeString("fa").replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));
        let hour1 = hour.split(":");
        let nowHour = `${hour1[0]}:${hour1[1]}`
        let splitDate = element.StopDate.split("/");
        let splitNow = nowDate.split("/")
        if (element.StartDate == element.StopDate) {
            if (Number(splitDate[0]) > Number(splitNow[0])) {
                return vlaidatedExams.push(element);

            }
            if (Number(splitDate[1]) > Number(splitNow[1])) {
                return vlaidatedExams.push(element);

            }
            if (Number(splitDate[2]) > Number(splitNow[2])) {
                return vlaidatedExams.push(element);

            }
            const fHour = element.StopHour.split(":")
            const nHour = nowHour.split(":");
            if (Number(splitDate[2]) == Number(splitNow[2])) {
                if ((Number(fHour[0]) * 60) + Number(fHour[1]) > (Number(nHour[0]) * 60) + Number(nHour[1])) {
                    return vlaidatedExams.push(element);

                }
            }
        }
    });


    if (vlaidatedExams.length == 0) {
        req.flash("examNull", "nothing")
        return res.redirect("/panel/class-list")
    }

    req.flash("examShowData", vlaidatedExams);
    res.redirect("/panel/class-list")


})

panel.post("/teachers/quiz-list/:classId", [isLogedIn, isConfirmed, isTeacher], async (req, res) => {
    console.log("hello", req.body)
    let body = req.body;
    req.session.Title = body.examTitle;
    req.session.Type = body.examType;
    req.session.StartDate = body.examStartDate;
    req.session.StartHour = body.examStartHour;
    req.session.StopDate = body.examStoptDate;
    req.session.StopHour = body.examStoptHour;
    req.session.QuestionsNumber = body.QuestionsNumber;
    req.session.classId = req.params.classId;
    res.send("done")

});

panel.get("/teachers/create-exam", [isLogedIn, isConfirmed, isTeacher], async (req, res) => {
    if (!req.session.Title || !req.session.Type || !req.session.StartDate || !req.session.StartHour || !req.session.StopDate || !req.session.StopHour || !req.session.QuestionsNumber || !req.session.classId) {
        console.log(req.session)
        res.redirect("/teachers/class-list");
    }
    const classId = req.session.classId
    const examClass = await Class.findOne({
        _id: classId
    });
    console.log(examClass);


    res.render("quiz/teacher-quiz.ejs", {
        Title: req.session.Title,
        Type: req.session.Type,
        QuestionsNumber: req.session.QuestionsNumber,
        Teacher: examClass.classTeacher,
        classId: examClass.id
    });
})
panel.post("/teachers/create-exam", [isLogedIn, isConfirmed, isTeacher], async (req, res) => {
    console.log(req.body);
    const examData = req.body.data;

    // examData.forEach(exam => {

    // });

    const exam = new Exam({
        ClassID: req.session.classId,
        Title: req.session.Title,
        Type: req.session.Type,
        StartDate: req.session.StartDate,
        StartHour: req.session.StartHour,
        StopDate: req.session.StopDate,
        StopHour: req.session.StopHour,
        QuestionsNumber: req.body.questionAmount,
        QuestionsList: examData
    })

    await exam.save();


})


panel.get("/teacers/run-exam/:id", [isLogedIn, isConfirmed, isTeacher], async (req, res) => {


    const exam = await Exam.findById({
        _id: req.params.id
    });


    console.log(exam.StartDate);

    const examClass = await Class.findOne({
        _id: exam.ClassID
    });

    res.render("quiz/students-quiz", {
        exam: exam,
        Teacher: examClass.classTeacher,
        classId: exam.ClassID
    });
})
//should be isStudent
panel.get("/students/run-exam/:id", [isLogedIn, isConfirmed], async (req, res) => {
    const examId = req.params.id
    const exam = await Exam.findById({
        _id: examId
    });

    function isAbleToJoin() {
        const date = new Date().toLocaleDateString('fa-IR').replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));
        let nowDate = date
        const date1 = date.split("/");
        if (Number(date1[1]) < 10) {
            nowDate = `${date1[0]}/0${date1[1]}/${date1[2]}`
        }
        const hour = new Date().toLocaleTimeString("fa").replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));
        let hour1 = hour.split(":");
        let nowHour = `${hour1[0]}:${hour1[1]}`

        if (exam.StartDate == exam.StopDate && exam.StartDate == nowDate) {
            const sHour = exam.StartHour.split(":");
            const fHour = exam.StopHour.split(":")
            const nHour = nowHour.split(":");

            if ((Number(sHour[0]) * 60) + Number(sHour[1]) <= (Number(nHour[0]) * 60) + Number(nHour[1])) {

                if ((Number(fHour[0]) * 60) + Number(fHour[1]) > (Number(nHour[0]) * 60) + Number(nHour[1])) {
                    return true
                }
            }

        }
        return false
    }
    if (isAbleToJoin() == false) {
        req.flash("timeError", "itsNotTheTime");
        res.redirect("/panel/class-list")
    } else {

        examClass = await Class.findOne({
            _id: exam.ClassID
        });

        //is done exam
        function isOrgnized() {
            examStudents = exam.Answers;
            
            examStudents.forEach(element => {
                if (element.studentId == req.user._id && element.process == "done") {
                    req.flash("orgnizedBefore", "orgnizedBefore");
                    res.redirect("/panel/class-list")
                }

            });

        }
        isOrgnized();

        //calculate exam remining time
        const date = new Date().toLocaleDateString('fa-IR').replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));
        let nowDate = date
        const date1 = date.split("/");
        if (Number(date1[1]) < 10) {
            nowDate = `${date1[0]}/0${date1[1]}/${date1[2]}`
        }
        const hour = new Date().toLocaleTimeString("fa").replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));
        let hour1 = hour.split(":");
        let nowHour = `${hour1[0]}:${hour1[1]}`


        function calculateTotalReaminingTime() {
            const sHour = exam.StartHour.split(":");
            const fHour = exam.StopHour.split(":")
            const nHour = nowHour.split(":");
            let totalMinuts = ((Number(fHour[0]) * 60) + (Number(fHour[1]))) - ((Number(nHour[0]) * 60) + (Number(nHour[1])));
            return totalMinuts
        }
        res.render("quiz/forStudent", {
            exam: exam,
            Teacher: examClass.classTeacher,
            Student: req.user.name,
            classId: exam.ClassID,
            reaminigTime: calculateTotalReaminingTime()
        });
    }


})

panel.post("/students/run-exam/:id", [isLogedIn, isConfirmed], async (req, res) => {
    const exam = await Exam.findById({
        _id: req.params.id
    });
   

        examStudents = exam.Answers;
      
        examStudents.forEach(async element => {
            console.log(element)
            if (element.studentId == req.user._id && element.process == "inProccess") {
                console.log("inP")
                let proces = req.body.proces;
                let Answerss = req.body.Answers;
                     if(exam.Answers.answersList!=Answerss){
                        console.log("dog")
                    exam.Answers={
                        process: proces,
                        answersList: Answerss
                    }
                    await exam.save();
                }
                

            } else if (element.studentId == req.user._id && element.process == "done") {
                console.log("done")
                req.flash("orgnizedBefore", "orgnizedBefore");
                res.redirect("/panel/class-list")

            } 
            // else {
            //     console.log("dooone")
            //     let proces = req.body.proces;
            //     let Answerss = req.body.Answers;
            //     let studentId = req.user._id
            //     console.log(req.body);
            //     exam.Answers.push({

            //         studentId: studentId,
            //         process: proces,
            //         answersList: Answerss


            //     });
            //     await exam.save()

            // }

        });

   



})

module.exports = panel;