const myQuestions = window.myQuestions;

const startModal = document.querySelector('.quiz-start-box');
const quizModal = document.querySelector('.quiz-box');
const questionCounterElement = document.querySelector('.location');
const questionTitleElement = document.querySelector('.question');
const resultModal = document.querySelector('#placementResult');
const placementTimeOut = document.querySelector('#placementTimeOut');

const correctAnswerLabel = document.querySelector('#correctAnswerLabel');
const correctAnswerLabelT = document.querySelector('#correctAnswerLabelT');

const levelLabel = document.querySelector('#levelLabel');
const levelLabelT = document.querySelector('#levelLabelT');

const startBtn = document.getElementById('start');
startBtn.addEventListener('click', startQuiz);

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', submit);

const exitBtn = document.querySelector('.exit-quiz');
exitBtn.addEventListener('click', exit);

const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', nextQuestion);

/* -------------------------------------------------------------------*/

const state = {
  currentQuestion: 0,
  score: 0,
  level: '',
  correctAnswer:0,
  wrongAnswer:0
};

function startQuiz() {

  showQuizModal();
  showQuestion(0);

  let fiveMinutes = 60 * 50,
  display = document.querySelector('#time');
  startTimer(fiveMinutes, display);

}

function showQuizModal() {
  startModal.style.display = 'none';
  quizModal.style.display = 'flex';
}

function submit() {

  const { correctAnswer, score } = myQuestions[state.currentQuestion];
  const selected = document.querySelector('#answers-container :checked');

  if (selected == null) return;

  const selectedValue = selected.value;
  selected.parentElement.parentElement.setAttribute('disabled', true);

  if (selectedValue === correctAnswer) {
    state.score += score;
    selected.parentElement.classList.add('right');
    state.correctAnswer++
  } else {
    selected.parentElement.classList.add('wrong');
    state.wrongAnswer++
  }

  submitBtn.style.display = 'none';
  nextBtn.style.display = 'block';
}

function nextQuestion() {
  state.currentQuestion++;
  if (state.currentQuestion < myQuestions.length) {
    showQuestion(state.currentQuestion);
  } else {
    showResult();
  }
}

function exit() {
  startModal.style.display = 'none';
}

function showQuestion(questionIndex) {
  const answersContainer = document.getElementById('answers-container');
  submitBtn.setAttribute('disabled', true);
  submitBtn.style.display = 'block';
  nextBtn.style.display = 'none';
  answersContainer.innerHTML = '';

  const base1QuestionIndex = questionIndex + 1;
  const question = myQuestions[questionIndex];
  questionCounterElement.textContent = `${base1QuestionIndex} of 50 Question `;
  questionTitleElement.textContent = `${base1QuestionIndex} - ${question.question}`;

  const answerList = createAnswerList(question);
  answersContainer.appendChild(answerList);
}

function createAnswerList(question) {
  const answerListContainer = document.createElement('fieldset');

  Object.keys(question.answers).forEach((key) => {
    answerListContainer.appendChild(createAnswer(question, key));
  });

  return answerListContainer;
}

function createAnswer(question, key) {
  const answerRadio = document.createElement('input');
  answerRadio.setAttribute('type', 'radio');
  answerRadio.setAttribute('name', `answer`);
  answerRadio.setAttribute('value', key);
  answerRadio.addEventListener('input', () => {
    submitBtn.removeAttribute('disabled');
  });

  const answerText = document.createElement('span');
  answerText.textContent = `${key}) ${question.answers[key]}`;

  const answerList = document.createElement('label');
  answerList.appendChild(answerRadio);
  answerList.appendChild(answerText);

  return answerList;
}

function userLevel(userScore, quizState) {

  

  if (userScore <= 25) {   // Beginner 0-15 - 15 - Each(5) - 5-5-5

    quizState.level = "Beginner-1";

  } else if (userScore <= 50) {
    
    quizState.level = "Beginner-2";

  } else if (userScore <= 75) {
    
    quizState.level = "Beginner-3";

  } else if (userScore <= 105) {   // Elemantry 16-24 - 9 - Each(10) - 3-3-3
    
    quizState.level = "Elementary-1";

  } else if (userScore <= 135) {
    
    quizState.level = "Elementary-2";

  } else if (userScore <= 165) {
    
    quizState.level = "Elementary-3";

  } else if (userScore <= 210) {   // Pre-inter 25-32 - 8 - Each(15) - 3 - 3 - 2
    
    quizState.level = "Pre-Intermadiate-1";

  } else if (userScore <= 255) {
    
    quizState.level = "Pre-Intermadiate-2";

  } else if (userScore <= 285) {
    
    quizState.level = "Pre-Intermadiate-3";

  } else if (userScore <= 345) {   // inter 33-39 - 7 - Each(20) - 3 - 2 - 2
    
    quizState.level = "Intermadiate-2";

  } else if (userScore <= 385) {
    
    quizState.level = "Intermadiate-2";

  } else if (userScore <= 425) {
    
    quizState.level = "ntermadiate-3";

  } else if (userScore <= 475) {   // Upper-Inter 40-45 - 6 - Each(25) - 2 - 2 - 2
    
    quizState.level = "Upper-Intermadiate-1";

  } else if (userScore <= 525) {
    
    quizState.level = "Upper-Intermadiate-2";

  } else if (userScore <= 575) {
    
    quizState.level = "Upper-Intermadiate-3";

  } else if (userScore <= 635) {   // Advancer 46-50 - 5 - Each(30) - 2 - 2 - 1
    
    quizState.level = "Advance-1";

  } else if (userScore <= 695) {
    
    quizState.level = "Advance-2";

  } else if (userScore <= 725) {
    
    quizState.level = "Advance-3";

  }

}

 function showResult() {


  userLevel(state.score, state);

  quizModal.style.display = 'none';
  resultModal.style.display = 'flex';
  correctAnswerLabel.innerHTML = state.correctAnswer;
  levelLabel.innerHTML = state.level;
  const options={
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(state)
  }
   fetch("/quiz-result",options);
  
}


function startTimer(duration, display) {

  let timer = duration, minutes, seconds;

  setInterval(function () {

      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
        
        timer = duration;
        
    }
    

    if(minutes == 0 && seconds == 0) {

      userLevel(state.score, state);
      quizModal.style.display = 'none';
      placementTimeOut.style.display = 'flex';
      correctAnswerLabelT.innerHTML = state.correctAnswer;
      levelLabelT.innerHTML = state.level;
      console.log(state.level);
      const options={
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(state)
      }
       fetch("/quiz-result",options);
  
    }

  }, 1000);


}
