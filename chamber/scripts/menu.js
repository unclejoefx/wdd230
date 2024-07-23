// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.menuItems');

// hamButton.addEventListener('click', () => {
// 	navigation.classList.toggle('open');
// 	hamButton.classList.toggle('open');
// });
const hamButton = document.querySelector('#nav-btn');
const navigation = document.querySelector('.menu');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});