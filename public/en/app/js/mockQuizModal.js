const comingSoonModal = document.querySelector('#comingSoonModal');


const runMockQuizBtn = document.querySelector('#runMockQuizBtn');

const mockClose = comingSoonModal.querySelector('#mock-closer');

const comingSoonBtn = document.querySelector('#comingSoonBtn');

runMockQuizBtn.addEventListener('click', () => {
  
  comingSoonModal.style.display = 'flex'

})

mockClose.addEventListener('click', () => {
  
  comingSoonModal.style.display = 'none';


})

comingSoonBtn.addEventListener('click', () => {
  
  comingSoonModal.style.display = "none";

})