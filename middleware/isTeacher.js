module.exports=function(req,res,next){
    const check= req.user.isTeacher;
    if(!check){
        return res.redirect("/login/teachers");};
    next();
}