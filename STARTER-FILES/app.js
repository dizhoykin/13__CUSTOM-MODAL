const button = document.querySelector('#something');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');

button.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

close.addEventListener('click', () => {
  overlay.style.display = 'none';
});
