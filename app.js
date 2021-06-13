const express=require("express");
const app=new express();
require("express-async-errors");
const config=require("config");
const winston=require("winston");
const session=require("express-session");
const  MongoDBStore = require('connect-mongodb-session')(session);
const bodyParser=require("body-parser");
const path=require("path")
const flash=require("connect-flash");
const {winstonLog,winstonConfig}=require("./setting/winston");
const error=require("./middleware/error");

app.use(express.json({limit:"1mb"}));

// const store = new MongoDBStore(
//     {
//       uri: 'mongodb://localhost/icdrn',
//       collection: 'session'
//     },
//     function(error) {
//       winston.error(error);
//     });

    app.use(session({
        secret: config.get("secret-key"),
        cookie: {
          maxAge:1000 * 60 * 60 * 24,
          httpOnly:true
        },
        store: store,
        resave: false,
        saveUninitialized: false
}));

app.use(flash())
winstonLog();winstonConfig();


app.set("view engine","ejs");
app.set("views","views");
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:false}));
require("./routes/expressRouters")(app);


app.use(error);

if(!config.get("private-key") && !config.get("DBname")){
    throw new Error("FATAL ERROE:privaite-key & dbname is notdefined");
}

app.listen(3000,()=>{
    if (app.get("env") == "development")winston.info("connect to port 3000....")    
});

