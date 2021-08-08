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
