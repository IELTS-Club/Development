
const getHumburgerBtn = document.querySelector('#humburgerBtn');
const getHeaderSection = document.querySelector('.header');
const getOverlaySection = document.querySelector('.overlay');
const getHumburgerLine = document.querySelectorAll('span.humburger-line');



getHumburgerBtn.addEventListener('click',()=>{

  // getOverlaySection.classList.toggle('overlay-strach');

  console.log('Humburger Menu Now is Open!');

  if(getHeaderSection.classList.contains('open')){

    getHeaderSection.classList.remove('open');
    getHumburgerLine.classList.remove('open-line');


  } else {

    getHeaderSection.classList.add('open');
    getHumburgerLine.classList.add('open-line');

  }


});


