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

function handleKey(evt) {
	if (evt.key === 'Tab') {
		modals.forEach((modal) => {
		  let focusable = modal.querySelectorAll('input, button, select, textarea, a');
			if (focusable.length) {
		  	let first = focusable[0];
		  	let last = focusable[focusable.length - 1];
		  	let shift = evt.shiftKey;
		  	if (shift) {
		  		if (evt.target === first) {
		  			last.focus();
		  			evt.preventDefault();
		  		}
		  	} else {
		  		if (evt.target === last) {
		  			first.focus();
		  			evt.preventDefault();
		  		}
		  	}
		  }
		})
	}
}

const onModalButtonClick = (evt) => {
	overlay.classList.add('active');
	document.body.classList.add('page-body--no-scroll');
	window.addEventListener('keydown', handleKey);

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
			window.removeEventListener('keydown', handleKey);
			//focusLock.off(item);
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
				window.removeEventListener('keydown', handleKey);
				//focusLock.off(item);
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
			window.removeEventListener('keydown', handleKey);
			//focusLock.off(item);
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
