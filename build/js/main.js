"use strict";

const accordionItems = document.querySelectorAll('.page-footer__accordion-item');
accordionItems.forEach(item => {
  item.classList.remove('no-js');
});
accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    const activeAccordionItem = document.querySelector('.page-footer__accordion-item.active');

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
"use strict";

const popupButton = document.querySelector('.page-header__order-call-button');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.page-body__shadow');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupNameInput = popup.querySelector('.popup__form-name-input');
const popupInputs = popup.querySelectorAll('.for-storage');
const popupForm = popup.querySelector('.popup__form');

const removeActiveClass = () => {
  popup.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('page-body--no-scroll');
};

const onPopupCloseButtonClick = () => {
  removeActiveClass();
};

const onEscButtonClick = evt => {
  if (evt.key === ('Escape' || 'Esc')) {
    if (popup.classList.contains('active')) {
      evt.preventDefault();
      removeActiveClass();
    }
  }
};

const onOverlayClick = evt => {
  removeActiveClass();
  evt.target.classList.remove('active');
};

const onPopupButtonClick = () => {
  if (!popup.classList.contains('active')) {
    popup.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('page-body--no-scroll');
    popupNameInput.focus();
    popupInputs.forEach(item => {
      localStorage.setItem(`${item.name}`, `${item.value}`);
    });
  }
};

popupButton.addEventListener('click', onPopupButtonClick);
popupCloseButton.addEventListener('click', onPopupCloseButtonClick);
overlay.addEventListener('click', onOverlayClick);
window.addEventListener('keydown', onEscButtonClick);
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