

const comingSoonModal = document.querySelector('#comingSoonModal');

const runMockQuizBtn = document.querySelector('#runMockQuizBtn');

const closeBtn = document.querySelector('.modal-close')


const getPlacementRegistrationBtn = document.querySelector('#placementRegistrationBtn');

runMockQuizBtn.addEventListener('click', () => {
  
  // modalBG.style.filter = "blur(7px)";
  comingSoonModal.style.display = "flex";


})


closeBtn.addEventListener('click', () => {

  placementTestRegistratinModal.style.display = "none";


})


getPlacementRegistrationBtn.addEventListener('click', () => {
  
  placementTestRegistratinModal.style.display = "none";



})