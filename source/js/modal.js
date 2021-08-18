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

const onModalButtonClick = (evt) => {
	overlay.classList.add('active');
	document.body.classList.add('page-body--no-scroll');

	if (evt.target.closest('.product-card__product-modal-button')) {
		productModal.classList.add('active');
		productCardPlusButton.focus();
	}

	if ((evt.target.closest('.login-link'))) {
		evt.preventDefault();
		loginModal.classList.add('active');
		if (loginModal.querySelector('.login__input-wrap--email input')) {
			const loginEmailInput = loginModal.querySelector('.login__input-wrap--email input');
			loginEmailInput.focus();
		}

		loginModalInputs.forEach((item) => {
			localStorage.setItem(`${item.name}`, `${item.value}`);
		});
	}
};

const onModalCloseButtonClick = () => {
	modals.forEach((item) => {
		if (item.classList.contains('active')) {
			overlay.classList.remove('active');
			document.body.classList.remove('page-body--no-scroll');
			item.classList.remove('active');
		}
	})
};

const onEscButtonClick = (evt) => {
	if (evt.key === ('Escape' || 'Esc')) {
		modals.forEach((item) => {
			if (item.classList.contains('active')) {
				evt.preventDefault();
				item.classList.remove('active');
				overlay.classList.remove('active');
				document.body.classList.remove('page-body--no-scroll');
			}
		})
	}
};

const onOverlayClick = (evt) => {
	modals.forEach((item) => {
		if (item.classList.contains('active')) {
			evt.preventDefault();
			item.classList.remove('active');
			overlay.classList.remove('active');
			document.body.classList.remove('page-body--no-scroll');
		}
	})
};

if (document.querySelector('.modal-button')) {
	modalButtons.forEach((item) => {
		item.addEventListener('click', onModalButtonClick);
	})
}

modalCloseButtons.forEach((item) => {
	item.addEventListener('click', onModalCloseButtonClick);
});

overlay.addEventListener('click', onOverlayClick);
window.addEventListener('keydown', onEscButtonClick);
