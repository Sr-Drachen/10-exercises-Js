const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  const inputLength = validationInput.getAttribute('data-length');
  const inputValue = validationInput.value;

  if (inputValue.length === parseInt(inputLength)) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
