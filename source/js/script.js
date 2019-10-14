'use strict';

var headerButton = document.querySelector('.header__main button');


var changeButtonText = function () {
  if (headerButton) {
    if (window.matchMedia('(max-width: 767px)').matches) {
      headerButton.innerHTML = 'Бесплатная консультация';
    } else {
      headerButton.innerHTML = 'Получить бесплатную консультацию';
    }
  }

};

window.addEventListener('resize', changeButtonText);
changeButtonText();


