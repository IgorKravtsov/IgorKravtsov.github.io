//Работа с первым экраном
const hamburger = document.querySelector('.hamburger'),
      closeElem = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
   menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
   menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
   menu.classList.remove('active');
});

//Секция "навыки"
const counters = document.querySelectorAll('.skills__progress-bars_item-head-percentage'),
      lines = document.querySelectorAll('.skills__progress-bars_item-body-front');

counters.forEach((item, i) => {
   lines[i].style.width = item.innerHTML;
});

//Плавная прокрутка по сайту
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href').substr(1)
      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
}

