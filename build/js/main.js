"use strict";

if (document.querySelectorAll('.accordeon__item').length) {
  console.log(document.querySelectorAll('.accordeon__item').length);
  const accordionItems = document.querySelectorAll('.accordeon__item');
  accordionItems.forEach(item => {
    item.classList.remove('no-js');
  });
  accordionItems.forEach(item => {
    item.addEventListener('click', () => {
      const activeAccordionItem = document.querySelector('.accordeon__item.active');

      if (activeAccordionItem && activeAccordionItem !== item) {
        activeAccordionItem.classList.toggle('active');
      }

      ;
      item.classList.toggle('active');
    });
  });
}

;

if (document.querySelectorAll('.filter__accordeon-item').length) {
  console.log(document.querySelectorAll('.filter__accordeon-item').length);
  const filterAccordeonItems = document.querySelectorAll('.filter__accordeon-item');
  filterAccordeonItems.forEach(item => {
    item.classList.remove('no-js');
  });
  filterAccordeonItems.forEach(item => {
    item.addEventListener('click', () => {
      const activeFilterAccordionItem = document.querySelector('.filter__accordeon-item.active');

      if (activeFilterAccordionItem && activeFilterAccordionItem !== item) {
        activeFilterAccordionItem.classList.add('active');
      }

      ;
      item.classList.toggle('active');
    });
  });
}

;
"use strict";

const filter = document.querySelector('.filter');
const catalogBlock = document.querySelector('.catalog');

if (document.querySelector('.catalog__filter-button')) {
  const filterButton = document.querySelector('.catalog__filter-button');
  filterButton.addEventListener('click', () => {
    filter.classList.toggle('active');
    catalogBlock.classList.add('active');
  });
}

if (document.querySelector('.filter__filter-close-button')) {
  const filterCloseButton = document.querySelector('.filter__filter-close-button');
  filterCloseButton.addEventListener('click', () => {
    filter.classList.remove('active');
    catalogBlock.classList.remove('active');
  });
}
"use strict";

const modalButton = document.querySelector('.product-card__product-add-cart-button-wrap button');
const modals = document.querySelectorAll('.modal--js');
const overlays = document.querySelectorAll('.page-body__shadow');
const modalCloseButtons = document.querySelectorAll('.modal__close-modal-button--js'); //const popupNameInput = popup.querySelector('.popup__form-name-input');
//const popupInputs = popup.querySelectorAll('.for-storage');
//const popupForm = popup.querySelector('.popup__form');

const removeActiveClass = array => {
  array.forEach(item => {
    item.classList.remove('active');
  });
};

const removeNoScrollClass = () => {
  document.body.classList.remove('page-body--no-scroll');
};

const addActiveClass = array => {
  array.forEach(item => {
    item.classList.add('active');
  });
};

const addNoScrollClass = () => {
  document.body.classList.add('page-body--no-scroll');
};

const onModalCloseButtonClick = () => {
  removeActiveClass(modals);
  removeActiveClass(overlays);
  removeNoScrollClass();
};

const onEscButtonClick = evt => {
  if (evt.key === ('Escape' || 'Esc')) {
    modals.forEach(item => {
      if (item.classList.contains('active')) {
        evt.preventDefault();
        removeActiveClass(modals);
        removeActiveClass(overlays);
        removeNoScrollClass();
      }
    });
  }
};

const onOverlayClick = evt => {
  removeActiveClass(modals);
  removeActiveClass(overlays);
  removeNoScrollClass();
  evt.target.classList.remove('active');
};

const onModalButtonClick = () => {
  modals.forEach(item => {
    if (!item.classList.contains('active')) {
      addActiveClass(modals);
      addActiveClass(overlays);
      addNoScrollClass(); //popupNameInput.focus();
      //popupInputs.forEach((item) => {
      //	localStorage.setItem(`${item.name}`, `${item.value}`);
      //});
    }
  });
};

modalButton.addEventListener('click', onModalButtonClick);
modalCloseButtons.forEach(item => {
  item.addEventListener('click', onModalCloseButtonClick);
});
overlays.forEach(item => {
  item.addEventListener('click', onOverlayClick);
}); //modalCloseButtons.forEach((item) => {
//	item.addEventListener('click', onEscButtonClick);
//});
//overlay.addEventListener('click', onOverlayClick);

window.addEventListener('keydown', onEscButtonClick);
"use strict";

if (document.querySelector('.swiper-container')) {
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
}