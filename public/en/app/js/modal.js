

const registerSection = document.querySelector('.register');
const getRegisterBtn = document.querySelector('#registerButton');
const getModalCloseBtn = document.querySelector('.modal-close');
const getConfirmationModal = document.querySelector('.icdrn-modal');

getRegisterBtn.addEventListener('click', () => {
  
  registerSection.style.filter = "blur(7px)";
  getConfirmationModal.style.display = "flex";


});

getModalCloseBtn.addEventListener('click', () => {
  
  registerSection.style.filter = "none";
  getConfirmationModal.style.display = "none";


});