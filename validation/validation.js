const Joi=require("joi");
const passwordValidator=require("password-validator");

const userSchema={
    name:Joi.string().min(3).max(256).required(),
    phone:Joi.string().min(11).max(11).required(),
    email:Joi.string().min(7).max(128).email().required(),
    password:Joi.string().min(8).max(256).required(),
    confirmPassword:Joi.string()
}
const passSchema=new passwordValidator();
passSchema
.is().min(8)                                
.is().max(256)                                                           
.has().not().spaces()                           
.is().not().oneOf(['Passw0rd', 'Password123',]); 

const studentSchema={
    className:Joi.string().required(),
    classType:Joi.string().required(),
    classTeacher:Joi.string().required(),
    classDeatails:Joi.string().max(25).allow(''),
}

const updaterUserSchema={
    name:Joi.string().min(3).max(256).required(),
    phone:Joi.string().min(11).max(11).required(),
}
const classValidation={
    className:Joi.string().required(),
    classType:Joi.string().required(),
    classTeacher:Joi.string().required(),
    classLevel:Joi.string().required(),
    classTime:Joi.string().required(),
    classStudents:Joi.string().required(),
    classLink:Joi.string().required()
}
module.exports.userSchema=userSchema;
module.exports.passSchema=passSchema;   
module.exports.studentSchema=studentSchema;
module.exports.updateUserSchema=updaterUserSchema;
module.exports.classValidation=classValidation;