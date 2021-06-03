
const modalBG = document.querySelector('.home');

const placementTestRegistratinModal = document.querySelector('.placement-test-registration-modal');

const runPlacementTestBtn = document.querySelector('#startPlacementTestBtn');

const closeBtn = document.querySelector('.modal-close')


const getPlacementRegistrationBtn = document.querySelector('#placementRegistrationBtn');

runPlacementTestBtn.addEventListener('click', () => {
  
  // modalBG.style.filter = "blur(7px)";
  placementTestRegistratinModal.style.display = "flex";


})


closeBtn.addEventListener('click', () => {

  placementTestRegistratinModal.style.display = "none";


})


getPlacementRegistrationBtn.addEventListener('click', () => {
  
  placementTestRegistratinModal.style.display = "none";



})