module.exports=function(req,res,next){
    const check= req.user.isTeacher;
    if(check == true){
        return res.redirect("/en/login");
    }
    next();
}