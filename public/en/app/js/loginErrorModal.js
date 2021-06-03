
const getLoginErrorModal = document.querySelector('#LoginErrorModal');

const getLoginBtn = document.querySelector('#loginBtn');

const getCheckAgain = document.querySelector('#checkAgain')

getLoginBtn.addEventListener('click', () => {
  
  getLoginErrorModal.style.display = "flex";

});

getCheckAgain.addEventListener('click', ()=> {
  
  getLoginErrorModal.style.display = "none"


})




