
//let QuestionsNumbers=QuestionsNumber
for (let i = 0; i < QuestionsNumber; i++) {


    //choose correct options for select
    document.querySelector(`#QT${i}`).addEventListener('change', (e) => {
      
        if (e.target.value == "questionTypeGrammer" || e.target.value == "questionTypeVocabulary" || e.target.value == "questionTypeListening") {

            document.querySelector(`#defaultStructure${i}`).style.display = "none";
            document.querySelector(`#writingStructure${i}`).style.display = "none";
            document.querySelector(`#readingStructure${i}`).style.display = "none";
            document.querySelector(`#GvlStructure${i}`).style.display = "block";

        } else if (e.target.value == "questionTypeReading") {

            document.querySelector(`#defaultStructure${i}`).style.display = "none";
            document.querySelector(`#GvlStructure${i}`).style.display = "none";
            document.querySelector(`#writingStructure${i}`).style.display = "none";
            document.querySelector(`#readingStructure${i}`).style.display = "block";


        } else if (e.target.value == "questionTypeWriting") {

            document.querySelector(`#defaultStructure${i}`).style.display = "none";
            document.querySelector(`#GvlStructure${i}`).style.display = "none";
            document.querySelector(`#readingStructure${i}`).style.display = "none";
            document.querySelector(`#writingStructure${i}`).style.display = "block";


        }

        e.preventDefault();

    })

    //sellect structure for grammer listening vocabulary
    document.querySelector(`#glvQS${i}`).addEventListener('change', (e) => {

        if (e.target.value == "glvQuestionStructureMultiple") {

            document.querySelector(`#filling-structure${i}`).style.display = "none";
            document.querySelector(`#multiple-structure${i}`).style.display = "block";

        } else if (e.target.value == "glvQuestionStructureFilling") {

            document.querySelector(`#multiple-structure${i}`).style.display = "none";
            document.querySelector(`#filling-structure${i}`).style.display = "block";

        }

        e.preventDefault();

    })


    //select struvture for reading
    document.querySelector(`#rQS${i}`).addEventListener('change', (e) => {

        if (e.target.value == "rQuestionStructureReadingBody") {

            document.querySelector(`#writing-box-structure${i}`).style.display = "none";
            document.querySelector(`#multiple-structure${i}`).style.display = "none";
            document.querySelector(`#filling-structure${i}`).style.display = "none";
            document.querySelector(`#reading-box-structure${i}`).style.display = "block";
            

        } else if (e.target.value == "rQuestionStructureMultiple") {

            document.querySelector(`#writing-box-structure${i}`).style.display = "none";
            document.querySelector(`#reading-box-structure${i}`).style.display = "none";
            document.querySelector(`#filling-structure${i}`).style.display = "none";
            document.querySelector(`#multiple-structure${i}`).style.display = "block";

        } else if (e.target.value == "rQuestionStructureFilling") {

            document.querySelector(`#writing-box-structure${i}`).style.display = "none";
            document.querySelector(`#reading-box-structure${i}`).style.display = "none";
            document.querySelector(`#multiple-structure${i}`).style.display = "none";
            document.querySelector(`#filling-structure${i}`).style.display = "block";

        }

        e.preventDefault();

    })


    //select structure for writing
    document.querySelector(`#wQS${i}`).addEventListener('change', (e) => {

        if (e.target.value == "wQuestionStructureWritingBody") {

            document.querySelector(`#reading-box-structure${i}`).style.display = "none";
            document.querySelector(`#multiple-structure${i}`).style.display = "none";
            document.querySelector(`#filling-structure${i}`).style.display = "none";
            document.querySelector(`#writing-box-structure${i}`).style.display = "block";

        };

        e.preventDefault();

    })


    //delete button 
    document.querySelector(`#del${i}`).addEventListener("click", (e) => {
        QuestionsNumber--;
        const mainSection = document.getElementById("mainSection");
        mainSection.removeChild(document.querySelector(`#article${i}`));
        document.querySelector("#questionAmount").innerHTML=QuestionsNumber;
        e.preventDefault();
    })

    //reset button for multiple coices

    document.querySelector(`#resetMultiple${i}`).addEventListener("click", (e) => {
        document.querySelector(`#defaultStructure${i}`).style.display = "block";
        document.querySelector(`#writingStructure${i}`).style.display = "none";
        document.querySelector(`#readingStructure${i}`).style.display = "none";
        document.querySelector(`#GvlStructure${i}`).style.display = "none";


        document.querySelector(`#reading-box-structure${i}`).style.display = "none";
        document.querySelector(`#multiple-structure${i}`).style.display = "none";
        document.querySelector(`#filling-structure${i}`).style.display = "none";
        document.querySelector(`#writing-box-structure${i}`).style.display = "none";

        const addInput=document.querySelector(`#creatInput${i}`);
        const inputs =addInput.getElementsByTagName("input");
        let numberOFINputs=inputs.length
        
        for(let j=1;j<=numberOFINputs;j++){
           
            addInput.removeChild(inputs[0]);
        }
        const selectTag=addInput.getElementsByTagName("select")[0];
        const options =selectTag.getElementsByTagName("option");
        const numberOfOptions=options.length;
        for(let e=2;e<=numberOfOptions;e++){
            selectTag.removeChild(options[1]);
        }
        
        e.preventDefault();
    })
    //reset Filling
    document.querySelector(`#resetFilling${i}`).addEventListener("click", (e) => {
        document.querySelector(`#defaultStructure${i}`).style.display = "block";
        document.querySelector(`#writingStructure${i}`).style.display = "none";
        document.querySelector(`#readingStructure${i}`).style.display = "none";
        document.querySelector(`#GvlStructure${i}`).style.display = "none";

        document.querySelector(`#reading-box-structure${i}`).style.display = "none";
        document.querySelector(`#multiple-structure${i}`).style.display = "none";
        document.querySelector(`#filling-structure${i}`).style.display = "none";
        document.querySelector(`#writing-box-structure${i}`).style.display = "none";
        e.preventDefault();
    })
    document.querySelector(`#resetReading${i}`).addEventListener("click", (e) => {
        document.querySelector(`#defaultStructure${i}`).style.display = "block";
        document.querySelector(`#writingStructure${i}`).style.display = "none";
        document.querySelector(`#readingStructure${i}`).style.display = "none";
        document.querySelector(`#GvlStructure${i}`).style.display = "none";

        document.querySelector(`#reading-box-structure${i}`).style.display = "none";
        document.querySelector(`#multiple-structure${i}`).style.display = "none";
        document.querySelector(`#filling-structure${i}`).style.display = "none";
        document.querySelector(`#writing-box-structure${i}`).style.display = "none";
        e.preventDefault();
    })
    document.querySelector(`#resetWriting${i}`).addEventListener("click", (e) => {
        document.querySelector(`#defaultStructure${i}`).style.display = "block";
        document.querySelector(`#writingStructure${i}`).style.display = "none";
        document.querySelector(`#readingStructure${i}`).style.display = "none";
        document.querySelector(`#GvlStructure${i}`).style.display = "none";

        document.querySelector(`#reading-box-structure${i}`).style.display = "none";
        document.querySelector(`#multiple-structure${i}`).style.display = "none";
        document.querySelector(`#filling-structure${i}`).style.display = "none";
        document.querySelector(`#writing-box-structure${i}`).style.display = "none";
        e.preventDefault();
    })

    //add option for multiple and add options for select 
    document.querySelector(`#addOption${i}`).addEventListener("click",(e) =>{ 
        const addInput=document.querySelector(`#creatInput${i}`);
        const input=document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("id","")
        input.setAttribute("class","question-option-input");
        input.setAttribute("placeholder","Option ...")
        addInput.prepend(input);
        e.preventDefault();
        
    })
    //select key for multiple choises
    const selectParent=document.querySelector(`#creatInput${i}`);
    selectParent.getElementsByTagName("select")[0].addEventListener("mouseover",(e)=>{
        const inputsPlace=document.querySelector(`#creatInput${i}`);
        const inputs=inputsPlace.getElementsByTagName("input");
        const selectPlace=selectParent.getElementsByTagName("select")[0];
        const allOptions=selectPlace.getElementsByTagName("option");
        let a=1
        if(inputs.length==4){
            a=2
        }
            if(allOptions.length>1){
               
                for(let e=1;e<=(allOptions.length)+a;e++){
                   
                    selectPlace.removeChild(allOptions[1]);
               }
            }
        
        for(let j=0;j<=inputs.length;j++){
            const option = document.createElement("option");
            option.setAttribute("value",inputs[j].value);
            const text =document.createTextNode(inputs[j].value);
            option.appendChild(text);
            const selectTag=selectParent.getElementsByTagName("select")[0];
            selectTag.appendChild(option);
        }
        
        e.preventDefault();
    })

}

// document.querySelector("#addArticle").addEventListener("click",(e)=>{
//     const selection=document.querySelector("#mainSection");
//     const article=document.querySelector("#article1");
//     let nextArticle=article
//     
//     nextArticle.id=`article${QuestionsNumbers+1}`;
//     //changing question setting id
//         nextArticle.getElementsByTagName("input")[0].value=`QN-${QuestionsNumbers+1}`;
//         nextArticle.querySelector("#QT1").id=`QT${QuestionsNumbers+1}`
//         nextArticle.querySelector("#defaultStructure1").id=`defaultStructure${QuestionsNumbers+1}`
//         nextArticle.querySelector("#GvlStructure1").id=`GvlStructure${QuestionsNumbers+1}`
//         nextArticle.querySelector("#readingStructure1").id=`readingStructure${QuestionsNumbers+1}`
//         nextArticle.querySelector("#writingStructure1").id=`writingStructure${QuestionsNumbers+1}`
//         nextArticle.querySelector("#glvQS1").id=`glvQS${QuestionsNumbers+1}`
//         nextArticle.querySelector("#rQS1").id=`rQS${QuestionsNumbers+1}`
//         nextArticle.querySelector("#wQS1").id=`wQS${QuestionsNumbers+1}`
//         nextArticle.querySelector("#del1").id=`del${QuestionsNumbers+1}`
//         nextArticle.querySelector("#multiple-structure1").id=`multiple-structure${QuestionsNumbers+1}`
//         nextArticle.querySelector("#addOption1").id=`addOption${QuestionsNumbers+1}`
//         nextArticle.querySelector("#creatInput1").id=`creatInput${QuestionsNumbers+1}`
//         nextArticle.querySelector("#resetMultiple1").id=`resetMultiple${QuestionsNumbers+1}`
//         nextArticle.querySelector("#filling-structure1").id=`filling-structure${QuestionsNumbers+1}`
//         nextArticle.querySelector("#resetFilling1").id=`resetFilling${QuestionsNumbers+1}`
//         nextArticle.querySelector("#reading-box-structure1").id=`reading-box-structure${QuestionsNumbers+1}`
//         nextArticle.querySelector("#resetReading1").id=`resetReading${QuestionsNumbers+1}`
//         nextArticle.querySelector("#writing-box-structure1").id=`writing-box-structure${QuestionsNumbers+1}`
//         nextArticle.querySelector("#resetWriting1").id=`resetWriting${QuestionsNumbers+1}`
//         // until create input;
//         QuestionsNumbers++;
//     selection.appendChild(nextArticle)
//     e.preventDefault();
// })

//query selector for closing the modal
document.querySelector("#checkAgain").addEventListener("click",(e)=>{
    document.querySelector("#nullQuestion").style.display="none"
    e.preventDefault();
})

document.querySelector("#modalClose").addEventListener("click",(e)=>{
    document.querySelector("#nullQuestion").style.display="none"
    e.preventDefault();
})

//fetch
document.querySelector("#Finalize").addEventListener("click",(e)=>{
    const allQuestions={data:[],
    questionAmount:QuestionsNumber};


    const allArticles=document.querySelector("#mainSection").getElementsByTagName("article");

    for(let i=0;i<allArticles.length;i++){

        let question={
            questionId:"",
            questionType:"",
            questionStructure:"",
            questionBody:"",
            questionChoices:[],
            trueAnswer:""
        }
        //question  id
        question.questionId=allArticles[i].getElementsByTagName("input")[0].value;
        let SelectQuestionNumber=question.questionId.split("-");
        SelectQuestionNumber=Number(SelectQuestionNumber[1]);
        console.log(SelectQuestionNumber);

        //question type
        question.questionType=allArticles[i].querySelector(`#QT${i}`).value;
        if(question.questionType=="questionTypeLabel"){
            document.querySelector("#errorText").innerHTML=`please fill question (${question.questionId})`
            return document.querySelector("#nullQuestion").style.display="flex"
        }
        
        //question structure

        if(question.questionType=="questionTypeGrammer" || question.questionType=="questionTypeVocabulary" ||question.questionType=="questionTypeListening"){
            question.questionStructure=allArticles[i].querySelector(`#glvQS${i}`).value;
            //validation
            if(question.questionStructure=="glvQuestionStructureLabel"){
                document.querySelector("#errorText").innerHTML=`please select Structure of question (${question.questionId})`
                return document.querySelector("#nullQuestion").style.display="flex"
            }

         }
        else if(question.questionType=="questionTypeReading"){
            question.questionStructure=allArticles[i].querySelector(`#rQS${i}`).value;
            //validation
            if(question.questionStructure=="rQuestionStructureLabel"){
                document.querySelector("#errorText").innerHTML=`please select Structure of question (${question.questionId})`
                return document.querySelector("#nullQuestion").style.display="flex"
            }

        }
        else{
            question.questionStructure=allArticles[i].querySelector(`#wQS${i}`).value;
            //validation
            if(question.questionStructure=="wQuestionStructureLabel"){
                document.querySelector("#errorText").innerHTML=`please select Structure of question (${question.questionId})`
                return document.querySelector("#nullQuestion").style.display="flex"
            }
        }
        

        //question body
        if(question.questionStructure=="glvQuestionStructureMultiple" || question.questionStructure=="rQuestionStructureMultiple"){
            question.questionBody=allArticles[i].querySelector(`#multipleBodyInput${i}`).value;
            //validation
            if(question.questionBody==""){
                document.querySelector("#errorText").innerHTML=`please fill the body of question (${question.questionId})`
                return document.querySelector("#nullQuestion").style.display="flex"
            }

        }

        if(question.questionStructure=="glvQuestionStructureFilling" || question.questionStructure=="rQuestionStructureFilling"){
            question.questionBody=allArticles[i].querySelector(`#fillingBodyInput${i}`).value;
            //validation
            if(question.questionBody==""){
                document.querySelector("#errorText").innerHTML=`please fill the body of question (${question.questionId})`
                return document.querySelector("#nullQuestion").style.display="flex"
            }

        }

        if(question.questionStructure=="rQuestionStructureReadingBody" ){
            question.questionBody=allArticles[i].querySelector(`#readingInput${i}`).value;
            //validation
            if(question.questionBody=="Start Typing Reading Body!"){
                document.querySelector("#errorText").innerHTML=`please fill the body of question (${question.questionId})`
                return document.querySelector("#nullQuestion").style.display="flex"
            }

        }

        if(question.questionStructure=="wQuestionStructureWritingBody" ){
            question.questionBody=allArticles[i].querySelector(`#writtingBodyInput${i}`).value;
            //validation
            if(question.questionBody=="Start Typing Writing Body!"){
                document.querySelector("#errorText").innerHTML=`please fill the body of question (${question.questionId})`
                return document.querySelector("#nullQuestion").style.display="flex"
            }

        }

        //questionChoices for multiple choices
        if(question.questionStructure=="glvQuestionStructureMultiple" || question.questionStructure=="rQuestionStructureMultiple"){
            let inputs=allArticles[i].querySelector(`#creatInput${i}`).getElementsByTagName("input");
            //validation
            
            if(inputs.length<1){
                document.querySelector("#errorText").innerHTML=`please make some options in question (${question.questionId})`
                return document.querySelector("#nullQuestion").style.display="flex"
            }
            for(let p=0;p<inputs.length;p++){
                if(inputs[p].value==''){
                    document.querySelector("#errorText").innerHTML=`please make sure you have filled all options in question (${question.questionId})`
                return document.querySelector("#nullQuestion").style.display="flex"
                }
                question.questionChoices.push(inputs[p].value);
            }

        }

        //true answer

        if(question.questionStructure=="glvQuestionStructureMultiple" || question.questionStructure=="rQuestionStructureMultiple"){
            let selectTag=allArticles[i].querySelector(`#creatInput${i}`).getElementsByTagName("select")[0];
            let options=selectTag.getElementsByTagName("option");
            //validation
            
            if(options.length<=1){
                document.querySelector("#errorText").innerHTML=`please fill some options in question (${question.questionId})`
                return document.querySelector("#nullQuestion").style.display="flex"
            }
            if(selectTag.value=="Private"){
                document.querySelector("#errorText").innerHTML=`please select a true answer for question (${question.questionId})`
                return document.querySelector("#nullQuestion").style.display="flex"
            }
            question.trueAnswer=selectTag.value;

        }

        allQuestions.data.push(question);
        console.log(allQuestions)

        e.preventDefault();
    }


    //out of for
    //fetch
    const fetchOptions={
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(allQuestions)
      }
       fetch(`/teachers/edit-questions/${examID}`,fetchOptions);
      
      document.querySelector("#successfull").style.display="flex"
        
})
