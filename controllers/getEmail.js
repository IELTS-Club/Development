const express=require("express");
const getemail =express.Router();
const send=require("../setting/email");

getemail.post('/getemail',async(req, res) =>{
    
    const html=`<div>
    <p dir="rtl">سلام ${req.body.email} ایمیل شما به خبرنامه ما اضافه شد و از این به بعد هر پستی در سایت گزاشته بشه مطلع میشی:</p>
    </div>
    <div> با تشکر از شما</div>`
    send(req.body.email,req.body.email,"ایمیل شما اضافه شد",html);
    res.redirect("/")
});
module.exports =getemail;