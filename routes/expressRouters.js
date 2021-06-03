const index=require("./pages/index")

const getemail=require("../controllers/getEmail");

const register=require("../controllers/user/register/register");
const logIn=require("../controllers/user/login/login");
const forgetPass=require("../controllers/user/forgetPass/forgetPass");
const confirmemail=require("../controllers/user/emailConfirmation/emailConfirmation");

const classList=require("../controllers/panel/students/class-list");
const classRegistration=require("../controllers/panel/students/class-registration");
const dasboard=require("../controllers/panel/students/dasboard");
const placementTestHistory=require("../controllers/panel/students/placement-test-history");
const profileEdit=require("../controllers/panel/students/prodile-edit");

const addClassT=require("../controllers/panel/techers/add-class");
const classListT=require("../controllers/panel/techers/class-list");
const dashboardT=require("../controllers/panel/techers/dashboard");
const editProfileT=require("../controllers/panel/techers/edit-profilr");
const placementTestList=require("../controllers/panel/techers/placementtest-list");
const studentsList=require("../controllers/panel/techers/students-list");
const searched=require("../controllers/panel/techers/searchUsers");
const editClass=require("../controllers/panel/techers/edit-class")
const packages=require("./packages/packages");

const blog=require("./blog/blog")

const courses=require("./courses/courses");

const quize=require("../controllers/quiz/Quiz");

const error=require("./error/error");

function expressRouters(app){
    app.use("/",quize);
    app.use("/",getemail);
    app.use("/",error);
    app.use("/",courses);
    app.use("/",index);
    app.use("/",blog);
    app.use("/",addClassT);
    app.use("/",classListT);
    app.use("/",dashboardT);
    app.use("/",editProfileT);
    app.use("/",editClass);
    app.use("/",placementTestList);
    app.use("/",studentsList);
    app.use("/",register);
    app.use("/",logIn);
    app.use("/",forgetPass);
    app.use("/",confirmemail);
    app.use("/",classList);
    app.use("/",classRegistration);
    app.use("/",dasboard);
    app.use("/",placementTestHistory);
    app.use("/",profileEdit);
    app.use("/",searched);
    app.use("/",packages);
}
module.exports=expressRouters;