"use strict";

const accordionItems = document.querySelectorAll('.accordion__item');
accordionItems.forEach(item => {
  item.classList.remove('no-js');
});
accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    const activeAccordionItem = document.querySelector('.accordion__item.active');

    if (activeAccordionItem && activeAccordionItem !== item) {
      activeAccordionItem.classList.toggle('active');
    }

    item.classList.toggle('active');
  });
});
"use strict";

const MAX_TEL_NUMBER = 16;
const NO_VALID_TEL_TEXT = 'Номер не может быть короче 10 цифр';
const phoneInputs = document.querySelectorAll(`input[type='tel']`);
const maskOptions = {
  mask: '{+7}(000)000-00-00',
  lazy: true
};
phoneInputs.forEach(item => {
  const mask = new IMask(item, maskOptions);
});
phoneInputs.forEach(item => {
  item.addEventListener('input', () => {
    if (item.value.length < MAX_TEL_NUMBER) {
      item.setCustomValidity(NO_VALID_TEL_TEXT);
    } else {
      item.setCustomValidity('');
    }
  });
});
//const popupButton = document.querySelector('.page-header__order-call-button');
//const popup =	document.querySelector('.popup');
//const overlay = document.querySelector('.page-body__shadow');
//const popupCloseButton = popup.querySelector('.popup__close-button');
//const popupNameInput = popup.querySelector('.popup__form-name-input');
//const popupInputs = popup.querySelectorAll('.for-storage');
//const popupForm = popup.querySelector('.popup__form');
//const removeActiveClass = () => {
//	popup.classList.remove('active');
//	overlay.classList.remove('active');
//	document.body.classList.remove('page-body--no-scroll');
//}
//const onPopupCloseButtonClick = () => {
//	removeActiveClass();
//};
// const onEscButtonClick = (evt) => {
//  if (evt.key === ('Escape' || 'Esc')) {
//    if (popup.classList.contains('active')) {
//      evt.preventDefault();
//			removeActiveClass();
//		}
//  }
//};
//const onOverlayClick = (evt) => {
//		removeActiveClass();
//		evt.target.classList.remove('active');
//};
//const onPopupButtonClick = () => {
//	if (!popup.classList.contains('active')) {
//		popup.classList.add('active');
//		overlay.classList.add('active');
//		document.body.classList.add('page-body--no-scroll');
//		popupNameInput.focus();
//		popupInputs.forEach((item) => {
//			localStorage.setItem(`${item.name}`, `${item.value}`);
//		});
//	}
//};
//popupButton.addEventListener('click', onPopupButtonClick);
//popupCloseButton.addEventListener('click', onPopupCloseButtonClick);
//overlay.addEventListener('click', onOverlayClick);
//window.addEventListener('keydown', onEscButtonClick);
"use strict";
"use strict";

const menuAnchors = document.querySelectorAll('.promo a');
menuAnchors.forEach(anchor => {
  anchor.addEventListener('click', evt => {
    evt.preventDefault();
    const blockId = anchor.getAttribute('href');
    document.querySelector(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
"use strict";

new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next'
  },
  pagination: {
    el: '.swiper-pagination',
    //буллеты
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  },
  //simulateTouch: false,
  //touchRatio: 2,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  autoheight: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  breakpoints: {
    320: {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + '&nbsp;&nbsp;of&nbsp;&nbsp;' + '<span class="' + totalClass + '"></span>';
        }
      },
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      }
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    1300: {
      slidesPerView: 4,
      slidesPerGroup: 4
    }
  }
});