const {User}=require("../models/mongoose")
module.exports=async function(req,res,next){
    const user=await User.findOne({email:req.user.email})
    
    if(user.isConfirmed==false){
        res.status(400).redirect(`/failedConfirmation/${req.user.email}`);
    }
    next();
}