let counterValue = 0; // inicializa el contador en 0
const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
  counterValue--;
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue++;
  valueEl.textContent = counterValue;
});
