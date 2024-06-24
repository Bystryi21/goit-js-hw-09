const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

const savedData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
if (savedData.email) emailInput.value = savedData.email;
if (savedData.message) messageTextarea.value = savedData.message;

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  formData.email = emailInput.value.trim();
  formData.message = messageTextarea.value.trim();

  if (!formData.email || !formData.message) {
    alert('Please fill all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();

  formData.email = '';
  formData.message = '';
});
