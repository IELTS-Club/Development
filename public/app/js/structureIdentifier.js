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
    })
    document.querySelector(`#resetFilling${i}`).addEventListener("click", (e) => {
        document.querySelector(`#defaultStructure${i}`).style.display = "block";
        document.querySelector(`#writingStructure${i}`).style.display = "none";
        document.querySelector(`#readingStructure${i}`).style.display = "none";
        document.querySelector(`#GvlStructure${i}`).style.display = "none";

        document.querySelector(`#reading-box-structure${i}`).style.display = "none";
        document.querySelector(`#multiple-structure${i}`).style.display = "none";
        document.querySelector(`#filling-structure${i}`).style.display = "none";
        document.querySelector(`#writing-box-structure${i}`).style.display = "none";
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
    })

    //add option for multiple
    document.querySelector(`#addOption${i}`).addEventListener("click",(e) =>{ 
        const addInput=document.querySelector(`#creatInput${i}`);
        const input=document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("class","question-option-input");
        input.setAttribute("placeholder","Option ...")
        addInput.prepend(input);

        console.log(addInput);
    })


}
