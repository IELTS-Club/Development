
let coursenameDropsown = document.querySelector('.coursename-dropdown');

let courseNameOptions = document.querySelector('ul.coursename-options');


coursenameDropsown.addEventListener('click', () => {
  
  courseNameOptions.classList.toggle('beAppear');

})