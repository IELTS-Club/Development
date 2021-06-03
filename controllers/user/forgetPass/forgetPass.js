const express=require("express");
const forgetPass =express.Router();
const jwt=require("jsonwebtoken");
const config=require("config");
const {User}=require("../../../models/mongoose");
const bcrypt=require("bcrypt");
const send=require("../../../setting/email");
const {passSchema}=require("../../../validation/validation");
const isConfirmed=require("../../../middleware/isConfirmed")
const sendSms=require("../../../setting/sms");

//reset password  get fa

forgetPass.get('/resetpassword/:token',async(req,res)=>{
    let Errorr=req.flash("tokenError");
    if(Errorr.length>0){
        Errorr=Errorr[0];
    }else {
        Errorr=null;
    }
    let passError=req.flash("passError");
    if(passError.length>0){
        passError=passError[0];
    }else {
        passError=null;
    }
    let Name=req.flash("Name");
    if(Name.length>0){
        Name=Name[0];
    }else {
        Name=null;
    }
    res.render("Authentication/new-password",{
        token:req.params.token,
        error:Errorr,
        name:Name,
        passError:passError
    });
})

//rest password get en

forgetPass.get('/en/resetpassword/:token',async(req,res)=>{
    let Errorr=req.flash("tokenError");
    if(Errorr.length>0){
        Errorr=Errorr[0];
    }else {
        Errorr=null;
    }
    let passError=req.flash("passError");
    if(passError.length>0){
        passError=passError[0];
    }else {
        passError=null;
    }
    let Name=req.flash("Name");
    if(Name.length>0){
        Name=Name[0];
    }else {
        Name=null;
    }
    res.render("en-Authentication/new-password",{
        token:req.params.token,
        error:Errorr,
        name:Name,
        passError:passError
    });
});

//reset pass fa post 

forgetPass.post('/resetpassword',async(req,res)=>{
        const token=await(req.body.token);
        
        
        let userId=""
        const decoded= jwt.verify(token,
        config.get("private-key"),(err,decoded)=>{
            if(err){
            req.flash("tokenError"," توکن شما منقضی شده است لطفا دوباره درخواست تغییر گزرواژه بدهید"); 
            return res.status(400).redirect(`/resetpassword/${token}`);
            }
            userId=decoded._id
            console.log(decoded)
        })
        console.log(userId)
        let user=await User.findOne({_id:userId});
        console.log(user)
        if (user.length==0){
        console.log(user);
        req.flash("tokenError"," توکن شما منقضی شده است لطفا دوباره درخواست تغییر گزرواژه بدهید");
        return res.status(400).redirect(`/resetpassword/${token}`);
            }
        const compare=await bcrypt.compare(token,user.token);
        if (compare==false){
        req.flash("tokenError"," توکن شما منقضی شده است لطفا دوباره درخواست تغییر گزرواژه بدهید");
        
        return res.status(400).redirect(`/resetpassword/${token}`);
            };
        
        const passValidation=passSchema.validate(req.body.password);
        if(passValidation==false){req.flash("passError","گذرواژه شما باید حداقل ۸ رقم داشته باشد و نباید نباید فاصله داشته باشد");
        res.status(400).redirect(`/resetpassword/${token}`);
        }
        if(req.body.password!=req.body.confirmPassword){
        req.flash("passError","گذرواژه و تأیید گذرواژه شما با هم تطابق ندارد");
        return res.status(400).redirect(`/resetpassword/${token}`);
        }
        let newPass=await req.body.password;
        const salt=await bcrypt.genSalt(10);
        newPass=await bcrypt.hash(newPass,salt);
        user=await User.findOneAndUpdate({_id:userId},{
            password:newPass,
            token:""
        });
        req.flash("Name","گذرواژه شما با موفقیت تغییر یافت")
        res.status(400).redirect(`/resetpassword/${token}`);
        
        
        
   
});

//reset pass post en

forgetPass.post('/en/resetpassword',async(req,res)=>{
    console.log("hellodg")
    const token=await(req.body.token);
    console.log(req.body);
    let userId="";
    const decoded= jwt.verify(token,
    config.get("private-key"),(err,decoded)=>{
        if(err){
        req.flash("tokenError","your token has benn expired please request again."); 
        return res.status(400).redirect(`/en/resetpassword/${token}`);
        }
        userId=decoded._id
    })
    let user=await User.findOne({_id:userId});
    if (user.length==0){
    console.log(user);
    req.flash("tokenError","your token has benn expired please request again.");
    return res.status(400).redirect(`/en/resetpassword/${token}`);
        }
    const compare=await bcrypt.compare(token,user.token);
    if (compare==false){
    req.flash("tokenError","your token has benn expired please request again.");
    
    return res.status(400).redirect(`/en/resetpassword/${token}`);
        };
    
    const passValidation=passSchema.validate(req.body.password);
    if(passValidation==false){req.flash("passError","your new password must be at least 8 chracters and mus'nt have space");
    res.status(400).redirect(`/en/resetpassword/${token}`);
    }
    if(req.body.password!=req.body.confirmPassword){
    req.flash("passError","your password and confrmation password didn't match");
    return res.status(400).redirect(`/en/resetpassword/${token}`);
    }
    let newPass=await req.body.password;
    const salt=await bcrypt.genSalt(10);
    newPass=await bcrypt.hash(newPass,salt);
    user=await User.findOneAndUpdate({_id:userId},{
        password:newPass,
        token:""
    });
    req.flash("Name","your password changed")
    res.status(400).redirect(`/en/resetpassword/${token}`);
    
    
    

});


//forget password get fa

forgetPass.get("/forgetpassword",async(req,res)=>{
    let error=req.flash("error")
    if(error.length>0){
        error=error[0]
    }else{
       error=null ;
    }
    let name=req.flash("name")
    if(name.length>0){
        name=name[0]
    }else{
       name=null ;
    }
    res.render("Authentication/forget-password",{
        error:error,
        name:name
    })
})



//forget password get en

forgetPass.get("/en/forgetpassword",async(req,res)=>{
    let error=req.flash("error")
    if(error.length>0){
        error=error[0]
    }else{
       error=null ;
    }
    let name=req.flash("name")
    if(name.length>0){
        name=name[0]
    }else{
       name=null ;
    }
    res.render("en-Authentication/forget-password",{
        error:error,
        name:name
    })
})


//forget pass fa post
forgetPass.post('/forgetpassword',async(req, res) =>{
    const email=req.body.email.toLowerCase();
    console.log(email);
    let user=await User.findOne({email:email});
    
    if(!user){req.flash("error","ایمیل شما یافت نشد")
       return res.status(404).redirect(`/forgetpassword`)    
    }
    if(user.isConfirmed==false){
        return res.redirect(`/failedConfirmation/${email}`)
    }
    userName=user.name;
    const token=jwt.sign({_id:user._id,},config.get("private-key"),{
        expiresIn:3600
    });
    
    let jwtHash=token;
    const salt =await bcrypt.genSalt(10);
    jwtHash=await bcrypt.hash(jwtHash,salt);
    const updateUser=await User.findOneAndUpdate({email:email},{
        token:jwtHash
    });
    const link='https://ieltsdrn.com/resetpassword/'+token;
    console.log(link)

    const html=`<div>
    <p>سلام ${userName}این ایمیل برای تغغیر گذرواژه شما می‌باشد </p>
    <p>لطفا برای تغییر گذرواژه خود روی دکمه زیر کلیک کنید</p>
    </div>
    <a href="${link}">روی اینجا کلیک کنید</a>`
    send(email,userName,"تغییر گ‌رواژه",html);
    let SMStext=`آیلتس کلاب
    سلام ${userName} عزیز 
    برای عوض کردن گذرواژه خود روی لینک زیر کلیک بفرمایید
        
        ${link}`
        sendSms(user.phone,"30008666962624",SMStext)
    req.flash("name","لینک بازیابی گزرواژه شما در ایمیل و اس ام اس برای شما فرستاده شد");
    res.redirect("/forgetpassword")
});


//forget pass en post 
forgetPass.post('/en/forgetpassword',async(req, res) =>{
    const email=req.body.email.toLowerCase();
    console.log(email);
    let user=await User.findOne({email:email});
    
    if(!user){req.flash("error","your email didn't find")
       return res.status(404).redirect(`/en/forgetpassword`)    
    }
    if(user.isConfirmed==false){
        return res.redirect(`/en/failedConfirmation/${email}`)
    }
    userName=user.name;
    const token=jwt.sign({_id:user._id,},config.get("private-key"),{
        expiresIn:3600
    });
    
    let jwtHash=token;
    const salt =await bcrypt.genSalt(10);
    jwtHash=await bcrypt.hash(jwtHash,salt);
    const updateUser=await User.findOneAndUpdate({email:email},{
        token:jwtHash
    });
    const link='https://ieltsdrn.com/en/resetpassword/'+token;
    console.log(link)
    const html=`<div>
    <p>سلام ${userName} این لینک , لینک عوض کردن پسورد شماست لظفا برای عوض کردن پسورد خود روی آن کلیک کنید:</p>
    </div>
    <div> ${link}</div>`
    send(email,userName,"change passworld",html);
    let SMStext=`Ielts Club
    Hello Dear ${userName}
    for recovery your password click on link below
         ${link}`
        sendSms(user.phone,"30008666962624",SMStext)
    req.flash("name","An email and a sms containing a link to change your password has been sent to you");
    res.redirect("/en/forgetpassword")
});
module.exports=forgetPass;
