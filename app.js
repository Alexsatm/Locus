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

