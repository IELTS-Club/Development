module.exports=function(req,res,next){
    const quizname=req.session.quizname;
    const quizType=req.session.quizType;
    if(!quizname || !quizType){
        res.redirect("/");
    }
    next();
}