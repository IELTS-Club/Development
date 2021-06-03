const winston=require("winston");


module.exports.winstonConfig=function(){
    process.on("uncaughtException",(err)=>{
        console.log("ther is a exemption");
        winston.error(err.message,err);
        process.exit(1);
    });
    winston.handleExceptions(new winston.transports.File({filename:"logfile.log"}))
    process.on("unhandledRejection",(err)=>{
        console.log("ther is a rejection");
        winston.error(err.message,err);
        process.exit(1);
    })
}

 module.exports.winstonLog=function(){
    winston.add(winston.transports.File,{filename:"logfile.log",level:"error"});
 };
