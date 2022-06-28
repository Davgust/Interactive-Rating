const submitBtn = document.querySelector('button.submit');
const ul = document.getElementById('numbers');
const items = ul.getElementsByTagName('li');
const selected = document.querySelector('span.selected');
const ratingContainer = document.querySelector('div.rating');
const thankYouContainer = document.querySelector('div.thank-you-container');

let isSelected = false;

for (let children of items) {
	children.addEventListener('click', () => {
		isSelected = true;
		selected.innerHTML = children.getAttribute('data-value');
		children.classList.toggle('active');

		for (let x of ul.children) {
			if (x !== children) {
				x.classList.remove('active');
			}
		}
	});
}

submitBtn.addEventListener('click', () => {
	if (!isSelected) {
		alert('You must select a number!');
		return;
	}
	ratingContainer.setAttribute('data-visible', false);
	thankYouContainer.setAttribute('data-visible', true);
});
