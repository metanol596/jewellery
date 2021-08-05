const MAX_TEL_NUMBER = 16;
const NO_VALID_TEL_TEXT = 'Номер не может быть короче 10 цифр';

const phoneInputs = document.querySelectorAll(`input[type='tel']`);

const maskOptions = {
  mask: '{+7}(000)000-00-00',
  lazy: true
};

phoneInputs.forEach((item) => {
  const mask = new IMask(item, maskOptions);
});

phoneInputs.forEach((item) => {
  item.addEventListener('input', () => {
    if (item.value.length < MAX_TEL_NUMBER) {
      item.setCustomValidity(NO_VALID_TEL_TEXT);
    } else {
      item.setCustomValidity('');
    }
  })
})
