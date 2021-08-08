const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach((item) => {
	item.classList.remove('no-js');
})

accordionItems.forEach((item) => {
	item.addEventListener('click', () => {
		const activeAccordionItem = document.querySelector('.accordion__item.active');

			if (activeAccordionItem && activeAccordionItem !== item) {
				activeAccordionItem.classList.toggle('active');
			}

		item.classList.toggle('active');
	})
})
