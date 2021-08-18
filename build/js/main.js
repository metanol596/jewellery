"use strict";

if (document.querySelectorAll('.accordion__item').length) {
  const accordionItems = document.querySelectorAll('.accordion__item');
  accordionItems.forEach(item => {
    item.classList.remove('no-js');
    item.addEventListener('click', () => {
      const activeAccordionItem = document.querySelector('.accordion__item.active');

      if (activeAccordionItem && activeAccordionItem !== item) {
        activeAccordionItem.classList.toggle('active');
      }

      ;
      item.classList.toggle('active');
    });
    item.addEventListener('keydown', evt => {
      if (evt.key === 'Enter') {
        evt.preventDefault();
        const activeAccordionItem = document.querySelector('.accordion__item.active');

        if (activeAccordionItem && activeAccordionItem !== item) {
          activeAccordionItem.classList.toggle('active');
        }

        ;
        item.classList.toggle('active');
      }
    });
  });
}

;

if (document.querySelectorAll('.filter__accordion-item').length) {
  const filterAccordionItems = document.querySelectorAll('.filter__accordion-item');
  filterAccordionItems.forEach(item => {
    item.classList.remove('no-js');
    const filterItemTitle = item.querySelector('.filter__accordion-item-title-wrap');
    filterItemTitle.addEventListener('click', evt => {
      if (evt.target && evt.target.closest('.filter__accordion-item-title-wrap')) {
        if (!item.querySelector('.filter__accordion-item-body').classList.contains('active') && !item.classList.contains('active')) {
          item.querySelector('.filter__accordion-item-body').classList.add('active');
          item.classList.add('active');
          item.blur();
        } else if (item.querySelector('.filter__accordion-item-body').classList.contains('active')) {
          item.querySelector('.filter__accordion-item-body').classList.remove('active');
          item.classList.remove('active');
        }
      }
    });

    const onFilterItemKeydown = evt => {
      if (evt.key === 'Enter') {
        evt.preventDefault();

        if (!item.querySelector('.filter__accordion-item-body').classList.contains('active') && !item.classList.contains('active')) {
          item.querySelector('.filter__accordion-item-body').classList.add('active');
          item.classList.add('active');
        } else if (item.querySelector('.filter__accordion-item-body').classList.contains('active')) {
          item.querySelector('.filter__accordion-item-body').classList.remove('active');
          item.classList.remove('active');
        }
      }
    };

    item.addEventListener('keydown', onFilterItemKeydown);
    const filterItemInputs = item.querySelectorAll('.filter__accordion-item-input-wrap input');
    filterItemInputs.forEach(input => {
      input.addEventListener('keydown', evt => {
        if (evt.key === 'Enter') {
          evt.preventDefault();
          item.removeEventListener('keydown', onFilterItemKeydown);

          if (evt.target.checked === true) {
            evt.target.checked = false;
          } else {
            evt.target.checked = true;
          }
        }
      });
    });
  });
}
"use strict";

const catalogBlock = document.querySelector('.catalog');
const catalogContainer = document.querySelector('.catalog__container');
const openFilterButton = document.querySelector('.catalog__filter-button');

if (document.querySelector('.filter')) {
  const filter = document.querySelector('.filter');
  filter.classList.remove('no-js');
  openFilterButton.classList.remove('no-js');
  catalogContainer.classList.remove('no-js');

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
}
"use strict";

const menu = document.querySelector('.page-header');
const menuButton = document.querySelector('.page-header__hamburger button');
menu.classList.remove('no-js');

if (menu && menuButton) {
  menuButton.addEventListener('click', () => {
    if (menu.classList.contains('page-header--closed')) {
      menu.classList.remove('page-header--closed');
      menu.classList.add('page-header--opened');
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.add('page-header--closed');
      menu.classList.remove('page-header--opened');
      document.body.removeAttribute('style');
    }
  });
}
"use strict";

const modalButtons = document.querySelectorAll('.modal-button');
const productModalButton = document.querySelector('.product-card__product-modal-button');
const loginModalButton = document.querySelector('.user-nav__login');
const productModal = document.querySelector('.modal');
const loginModal = document.querySelector('.login');
const modals = document.querySelectorAll('.modal-js');
const loginModalInputs = document.querySelectorAll('.login__input-wrap input');
const overlay = document.querySelector('.page-body__shadow');
const modalCloseButtons = document.querySelectorAll('.close-modal-button-js');
const productCardPlusButton = document.querySelector('.modal__product-to-cart-plus');

const onModalButtonClick = evt => {
  overlay.classList.add('active');
  document.body.classList.add('page-body--no-scroll');

  if (evt.target.closest('.product-card__product-modal-button')) {
    productModal.classList.add('active');
    productCardPlusButton.focus();
  }

  if (evt.target.closest('.login-link')) {
    evt.preventDefault();
    loginModal.classList.add('active');

    if (loginModal.querySelector('.login__input-wrap--email input')) {
      const loginEmailInput = loginModal.querySelector('.login__input-wrap--email input');
      loginEmailInput.focus();
    }

    loginModalInputs.forEach(item => {
      localStorage.setItem(`${item.name}`, `${item.value}`);
    });
  }
};

const onModalCloseButtonClick = () => {
  modals.forEach(item => {
    if (item.classList.contains('active')) {
      overlay.classList.remove('active');
      document.body.classList.remove('page-body--no-scroll');
      item.classList.remove('active');
    }
  });
};

const onEscButtonClick = evt => {
  if (evt.key === ('Escape' || 'Esc')) {
    modals.forEach(item => {
      if (item.classList.contains('active')) {
        evt.preventDefault();
        item.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('page-body--no-scroll');
      }
    });
  }
};

const onOverlayClick = evt => {
  modals.forEach(item => {
    if (item.classList.contains('active')) {
      evt.preventDefault();
      item.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('page-body--no-scroll');
    }
  });
};

if (document.querySelector('.modal-button')) {
  modalButtons.forEach(item => {
    item.addEventListener('click', onModalButtonClick);
  });
}

modalCloseButtons.forEach(item => {
  item.addEventListener('click', onModalCloseButtonClick);
});
overlay.addEventListener('click', onOverlayClick);
window.addEventListener('keydown', onEscButtonClick);
"use strict";

if (document.querySelector('.swiper-container')) {
  new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
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