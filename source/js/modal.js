const modalButton = document.querySelector('.product-card__product-add-cart-button-wrap button');
const modals =	document.querySelectorAll('.modal--js');
const overlays = document.querySelectorAll('.page-body__shadow');
const modalCloseButtons = document.querySelectorAll('.modal__close-modal-button--js');
//const popupNameInput = popup.querySelector('.popup__form-name-input');
//const popupInputs = popup.querySelectorAll('.for-storage');
//const popupForm = popup.querySelector('.popup__form');

const removeActiveClass = (array) => {
	array.forEach((item) =>{
		item.classList.remove('active');
	})
}

const removeNoScrollClass = () => {
	document.body.classList.remove('page-body--no-scroll');
}

const addActiveClass = (array) => {
	array.forEach((item) =>{
		item.classList.add('active');
	})
}

const addNoScrollClass = () => {
	document.body.classList.add('page-body--no-scroll');
}

const onModalCloseButtonClick = () => {
	removeActiveClass(modals);
	removeActiveClass(overlays);
	removeNoScrollClass();
};

 const onEscButtonClick = (evt) => {
  if (evt.key === ('Escape' || 'Esc')) {
		modals.forEach((item) => {
			if (item.classList.contains('active')) {
				evt.preventDefault();
				removeActiveClass(modals);
				removeActiveClass(overlays);
				removeNoScrollClass();
			}
		})

  }
};

const onOverlayClick = (evt) => {
	removeActiveClass(modals);
	removeActiveClass(overlays);
	removeNoScrollClass();
	evt.target.classList.remove('active');
};

const onModalButtonClick = () => {
	modals.forEach((item) => {
		if (!item.classList.contains('active')) {
			addActiveClass(modals);
			addActiveClass(overlays);
			addNoScrollClass();
			//popupNameInput.focus();

			//popupInputs.forEach((item) => {
			//	localStorage.setItem(`${item.name}`, `${item.value}`);
			//});
		}
	})

};

modalButton.addEventListener('click', onModalButtonClick);

modalCloseButtons.forEach((item) => {
	item.addEventListener('click', onModalCloseButtonClick);
});

overlays.forEach((item) => {
	item.addEventListener('click', onOverlayClick);
});

//modalCloseButtons.forEach((item) => {
//	item.addEventListener('click', onEscButtonClick);
//});

//overlay.addEventListener('click', onOverlayClick);
window.addEventListener('keydown', onEscButtonClick);
