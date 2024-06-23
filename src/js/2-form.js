const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;
const savedData =
  JSON.parse(localStorage.getItem('feedback-form-state')) || formData;
emailInput.value = savedData.email;
messageTextarea.value = savedData.message;
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Please fill all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
