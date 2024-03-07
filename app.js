document.getElementById('burger').addEventListener('click', function () {
  document.querySelector('header').classList.toggle('open');
});

// contact form

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const submitError = document.querySelector('#submit-error');

const form = document.getElementById('form-contact');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const validateName = () => {
  const name = document.querySelector('#name').value;

  if (name.lenght == 0) {
    nameError.innerHTML = 'Требуется имя';
    return false;
  }

  if (!name.match(/^([a-zа-яё\ ]+|\d+)$/gi)) {
    nameError.innerHTML = 'Напишите полное имя';
    return false;
  }
};


const validateEmail = () => {
    const email = document.querySelector('#email').value;
  
    if (email.lenght == 0) {
      emailError.innerHTML = 'Требуется почта';
      return false;
    }
  
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      emailError.innerHTML = 'Неверная почта';
      return false;
    }
  };
  
  function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail()) {
      submitError.innerHTML = 'Заполните все поля';
      return false;
    }
  }

