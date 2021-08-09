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