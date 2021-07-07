
const PanelBtnToggle = document.querySelector('.panel-humburger');
const panelOverlay = document.querySelector('.panel-overlay');
const studentPanelContainer = document.querySelector('.container-student-panel')

const navbarStatus = document.querySelector('.navbar-status');
const profileLabel = document.querySelector('.profile img');

const profileDropdowm = document.querySelector('.profile-dropdown');


const messageLabel = document.querySelector('.message img');
const messageDropdowm = document.querySelector('.message-dropdown');


const bellsLabel = document.querySelector('.bells img');
const bellsDropdowm = document.querySelector('.bells-dropdown');



PanelBtnToggle.addEventListener('click', () => {

  panelOverlay.style.right = '0px';
  // studentPanelContainer.style.filter = 'blur(3px)'

})


let ignoreClickOnMeElement = document.querySelector('.panel-humburger');

document.addEventListener('click', function(event) {
    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    if (!isClickInsideElement) {
      
      panelOverlay.style.right = '-300px';

      
    }
});



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
