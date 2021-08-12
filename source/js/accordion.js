if (document.querySelectorAll('.accordeon__item').length) {
	const accordionItems = document.querySelectorAll('.accordeon__item');

	accordionItems.forEach((item) => {
		item.classList.remove('no-js');
	});

	accordionItems.forEach((item) => {
		item.addEventListener('click', () => {
			const activeAccordionItem = document.querySelector('.accordeon__item.active');

			if (activeAccordionItem && activeAccordionItem !== item) {
				activeAccordionItem.classList.toggle('active');
			};

			item.classList.toggle('active');
		});
	});
};


if (document.querySelectorAll('.filter__accordeon-item').length) {
	const filterAccordeonItems = document.querySelectorAll('.filter__accordeon-item');

	filterAccordeonItems.forEach((item) => {
		item.classList.remove('no-js');
	});

	filterAccordeonItems.forEach((item) => {
		item.addEventListener('click', () => {
			const activeFilterAccordionItem = document.querySelector('.filter__accordeon-item.active');

			if (activeFilterAccordionItem && activeFilterAccordionItem !== item) {
				activeFilterAccordionItem.classList.add('active');
			};

			item.classList.toggle('active');
		});
	});
};
