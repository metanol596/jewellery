const menu = document.querySelector('.page-header');
const menuButton = document.querySelector('.page-header__hamburger button');

menu.classList.remove('no-js');

if (menu && menuButton) {
	menuButton.addEventListener('click', () => {

		if (menu.classList.contains('page-header--closed')) {
			menu.classList.remove('page-header--closed');
			menu.classList.add('page-header--opened');
			document.body.style.overflow = 'hidden';
			focusLock.on(menu);
		} else {
			focusLock.off(menu);
			menu.classList.add('page-header--closed');
			menu.classList.remove('page-header--opened');
			document.body.removeAttribute('style');
		}
	})
}
