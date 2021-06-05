
document.querySelector('#QT').addEventListener('change', (e)=> {

    if(e.target.value == "questionTypeGrammer" || e.target.value == "questionTypeVocabulary" || e.target.value == "questionTypeListening"  ) {

        document.querySelector('#writingStructure').style.display = "none";
        document.querySelector('#readingStructure').style.display = "none";
        document.querySelector('#defaultStructure').style.display = "none";
        document.querySelector('#GvlStructure').style.display = "block";

    } else if (e.target.value == "questionTypeReading") {

        document.querySelector('#defaultStructure').style.display = "none";
        document.querySelector('#GvlStructure').style.display = "none";
        document.querySelector('#writingStructure').style.display = "none";
        document.querySelector('#readingStructure').style.display = "block";


    } else if (e.target.value == "questionTypeWriting") {

        document.querySelector('#defaultStructure').style.display = "none";
        document.querySelector('#GvlStructure').style.display = "none";
        document.querySelector('#readingStructure').style.display = "none";
        document.querySelector('#writingStructure').style.display = "block";
        

    } 

    e.preventDefault();

})

document.querySelector('#glvQS').addEventListener('change', (e)=> {

    if(e.target.value == "glvQuestionStructureMultiple") {

        document.querySelector('.filling-structure').style.display = "none";
        document.querySelector('.multiple-structure').style.display = "block";

    } else if (e.target.value == "glvQuestionStructureFilling") {

        document.querySelector('.multiple-structure').style.display = "none";
        document.querySelector('.filling-structure').style.display = "block";

    }

    e.preventDefault();

})

document.querySelector('#rQS').addEventListener('change', (e)=> {

    if(e.target.value == "rQuestionStructureReadingBody") {

        document.querySelector('.writing-box-structure').style.display = "none";
        document.querySelector('.multiple-structure').style.display = "none";
        document.querySelector('.filling-structure').style.display = "none";
        document.querySelector('.reading-box-structure').style.display = "block";

    } else if (e.target.value == "rQuestionStructureMultiple") {

        document.querySelector('.writing-box-structure').style.display = "none";
        document.querySelector('.reading-box-structure').style.display = "none";
        document.querySelector('.filling-structure').style.display = "none";
        document.querySelector('.multiple-structure').style.display = "block";

    } else if (e.target.value == "rQuestionStructureFilling") {
        
        document.querySelector('.writing-box-structure').style.display = "none";
        document.querySelector('.reading-box-structure').style.display = "none";
        document.querySelector('.multiple-structure').style.display = "none";
        document.querySelector('.filling-structure').style.display = "block";

    }

    e.preventDefault();

})

document.querySelector('#wQS').addEventListener('change', (e)=> {

    if(e.target.value == "wQuestionStructureWritingBody") {

        document.querySelector('.reading-box-structure').style.display = "none";
        document.querySelector('.multiple-structure').style.display = "none";
        document.querySelector('.filling-structure').style.display = "none";
        document.querySelector('.writing-box-structure').style.display = "block";

    } ;

    e.preventDefault();

})