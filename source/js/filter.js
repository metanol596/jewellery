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
		})
	}
}
