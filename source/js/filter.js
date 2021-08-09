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
	})
}

