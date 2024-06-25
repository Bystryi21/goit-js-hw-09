const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;


const formData = {
  email: localStorage.getItem('email') || '',
  message: localStorage.getItem('message') || ''
};


if (formData.email) emailInput.value = formData.email;
if (formData.message) messageTextarea.value = formData.message;


form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(event.target.name, event.target.value.trim());
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

  localStorage.removeItem('email');
  localStorage.removeItem('message');
  form.reset();

  formData.email = '';
  formData.message = '';
});