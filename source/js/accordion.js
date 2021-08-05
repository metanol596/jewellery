const accordionItems = document.querySelectorAll('.page-footer__accordion-item');

accordionItems.forEach((item) => {
	item.classList.remove('no-js');
})

accordionItems.forEach((item) => {
	item.addEventListener('click', () => {
		const activeAccordionItem = document.querySelector('.page-footer__accordion-item.active');

			if (activeAccordionItem && activeAccordionItem !== item) {
				activeAccordionItem.classList.toggle('active');
			}

		item.classList.toggle('active');
	})
})
