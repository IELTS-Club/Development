

const jwt=require("jsonwebtoken");
const config=require("config");
module.exports=async function(req,res,next){
    const token=await req.session.jwt;
    if(!token)res.redirect("/login");
    const decoded=jwt.verify(token,config.get("private-key"),(err,decoded)=>{
        if(err){
             req.session.destroy();
             res.redirect("/login")
        }
        req.user=decoded;
    });
    
    
    next();
}