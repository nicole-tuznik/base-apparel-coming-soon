const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const submit = document.querySelector('.form__btn');


// Check for validity as user is inputting email
formInput.addEventListener('input', function (e) {
  if (!formInput.validity.valid) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
  }
});

// Check for validity after user clicks submit
submit.addEventListener('click', function (e){

  if (!formInput.validity.valid) {
    form.classList.add('error');
    // Prevents form from sending if email isn't valid
    e.preventDefault();
  }
});



