'use strict';

var changeButtonText = function () {
  var headerButton = document.querySelector('.header__main button');
  if (headerButton) {
    if (window.matchMedia('(max-width: 767px)').matches) {
      headerButton.innerHTML = 'Бесплатная консультация';
    } else {
      headerButton.innerHTML = 'Получить бесплатную консультацию';
    }
  }
};

// Перемещение блоков
var moveCopyright = function () {
  var copyrightElem = document.getElementById('copyright');
  var confidentialityElem = document.querySelector('.footer__confidentiality');
  var logoElem = document.querySelector('.footer__logo');
  var newParentDiv = confidentialityElem.parentNode;
  var oldParentDiv = logoElem.parentNode;

  if (copyrightElem) {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      newParentDiv.insertBefore(copyrightElem, confidentialityElem);
    } else {
      oldParentDiv.insertBefore(copyrightElem, logoElem.nextSibling);
    }
  }
};

window.addEventListener('resize', changeButtonText);
window.addEventListener('resize', moveCopyright);
changeButtonText();
moveCopyright();

// Скрытие блоков в футере

var footer = document.querySelector('.footer');
var menu = document.querySelector('.footer__menu');
var menuToggle = document.querySelector('.footer__menu .footer__button');
var contacts = document.querySelector('.footer__contacts');
var contactsToggle = document.querySelector('.footer__contacts .footer__button');

if (footer) {
  footer.classList.add('footer--js');
}
if (menu) {
  menu.classList.add('footer__menu--closed');
}

if (contacts) {
  contacts.classList.add('footer__contacts--closed');
}

if (menuToggle) {
  menuToggle.addEventListener('click', function () {
    if (menu.classList.contains('footer__menu--closed')) {
      menu.classList.remove('footer__menu--closed');
      menu.classList.add('footer__menu--opened');
    } else {
      menu.classList.add('footer__menu--closed');
      menu.classList.remove('footer__menu--opened');
    }
  });
}

if (contactsToggle) {
  contactsToggle.addEventListener('click', function () {
    if (contacts.classList.contains('footer__contacts--closed')) {
      contacts.classList.remove('footer__contacts--closed');
      contacts.classList.add('footer__contacts--opened');
    } else {
      contacts.classList.add('footer__contacts--closed');
      contacts.classList.remove('footer__contacts--opened');
    }
  });
}

var enableModal = function () {
  var Enter = 13;
  var Esc = 27;
  var modal = document.querySelector('.modal');
  var openButton = document.querySelector('.contacts__button');
  var overlay = document.querySelector('.overlay');
  var closeButton = document.querySelector('.modal__close-button');
  var nameInput = modal.querySelector('#customer-name');

  // Открыть модальное
  var openModal = function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--opened');
    overlay.classList.add('overlay--showed');
    nameInput.focus();
  };

  // Закрыть модальное
  var closeModal = function (evt) {
    evt.preventDefault();
    document.querySelector('.modal--opened').classList.remove('modal--opened');
    overlay.classList.remove('overlay--showed');
  };

  // Добавить прослушивальщика событий на кнопку
  openButton.addEventListener('click', function (evt) {
    openModal(evt);
  });

  openButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === Enter) {
      openModal(evt);
    }
  });

  // Закрытие по нажатию клавиши
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === Esc) {
      if (document.querySelector('.modal--opened')) {
        closeModal(evt);
      }
    }
  });

  // Добавление прослушивальщика на овелей
  overlay.addEventListener('click', function (evt) {
    closeModal(evt);
  });

  // Добавление прослушивальщиков на кнопку
  closeButton.addEventListener('click', function (evt) {
    closeModal(evt);
  });
  closeButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === Enter) {
      closeModal(evt);
    }
  });
};
enableModal();

// var toggle = function (block) {
//   var element = 'footer__' + block;
//   var closed = 'footer__' + block + '--closed';
//   var opened = 'footer__' + block + '--opened';
//   var r = document.querySelector(element);
//   var z = r.classList;
//   if (z.contains(' + closed + ')) {
//     contacts.classList.remove(closed);
//     contacts.classList.add(opened);
//   } else {
//     contacts.classList.add(closed);
//     contacts.classList.remove(opened);
//   }
// };

// if (contactsToggle) {
//   contactsToggle.addEventListener('click', toggle('contacts'));
// }

// if (menuToggle) {
//   contactsToggle.addEventListener('click', toggle('menu'));
// }

