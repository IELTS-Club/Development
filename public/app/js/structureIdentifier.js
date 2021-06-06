
let QuestionsNumbers=QuestionsNumber
for (let i = 1; i <= QuestionsNumber; i++) {


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
            console.log("dd")

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
        console.log(inputs);
        for(let j=1;j<=numberOFINputs;j++){
            console.log("hh")
            addInput.removeChild(inputs[0]);
        }
        const selectTag=addInput.getElementsByTagName("select")[0];
        const options =selectTag.getElementsByTagName("option");
        const numberOfOptions=options.length;
        for(let e=2;e<=numberOfOptions;e++){
            selectTag.removeChild(options[1]);
        }
        console.log(selectTag)
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
        console.log(addInput);
    })
    //select key for multiple choises
    const selectParent=document.querySelector(`#creatInput${i}`);
    selectParent.getElementsByTagName("select")[0].addEventListener("mouseover",(e)=>{
        const inputsPlace=document.querySelector(`#creatInput${i}`);
        const inputs=inputsPlace.getElementsByTagName("input");
        const selectPlace=selectParent.getElementsByTagName("select")[0];
        const allOptions=selectPlace.getElementsByTagName("option");
            if(allOptions.length>1){
                console.log("hi")
                for(let e=1;e<=(allOptions.length)+2;e++){
                    console.log("eee")
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
        }console.log(Allselect);
        
        e.preventDefault();
    })

}

// document.querySelector("#addArticle").addEventListener("click",(e)=>{
//     const selection=document.querySelector("#mainSection");
//     const article=document.querySelector("#article1");
//     let nextArticle=article
//     console.log(article);
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