
const PanelBtnToggle = document.querySelector('.panel-humburger');
const panelContainer = document.querySelector('.container-panel');


const navbarStatus = document.querySelector('.navbar-status');
const profileLabel = document.querySelector('.profile img');

const profileDropdowm = document.querySelector('.profile-dropdown');


const messageLabel = document.querySelector('.message img');
const messageDropdowm = document.querySelector('.message-dropdown');


const bellsLabel = document.querySelector('.bells img');
const bellsDropdowm = document.querySelector('.bells-dropdown');

PanelBtnToggle.addEventListener('click', () => {
  
  panelContainer.classList.toggle('open-slide');

  console.log('hello');

  


})

profileLabel.addEventListener('click', () => {
  
  navbarStatus.classList.remove('open-bells');
  navbarStatus.classList.remove('open-message');
  navbarStatus.classList.toggle('open-profile');

})


messageLabel.addEventListener('click', () => {
  
  navbarStatus.classList.remove('open-bells');
  navbarStatus.classList.remove('open-profile');
  navbarStatus.classList.toggle('open-message');

})

bellsLabel.addEventListener('click', () => {
  
  navbarStatus.classList.remove('open-profile');
  navbarStatus.classList.remove('open-message');
  navbarStatus.classList.toggle('open-bells');

})
